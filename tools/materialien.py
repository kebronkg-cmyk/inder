"""Rendert die Material-Raster für Entwurf B (Thali & Masala-Dabba).

Ohne Bildgenerator und ohne Stockfotos: jedes Material entsteht aus einer
Höhenkarte, daraus Normalen, beleuchtet mit Softboxen und einer einfachen
Umgebung. Edelstahl bekommt anisotropes Glanzlicht (Ringschliff aus dem
Drücken), Kupfer Hammerdellen, Gewürze Pulverkorn oder einzelne Saaten.

Aufruf: python3 tools/materialien.py   (schreibt nach img/)
"""
import math
import numpy as np
from PIL import Image

RNG = np.random.default_rng(7)
OUT = "img/"


def norm(v):
    return v / np.linalg.norm(v)


def rausch(h, w, zellen, seed=None, wrap=False):
    """Weiches Wertrauschen 0…1; mit wrap kachelbar."""
    r = np.random.default_rng(seed) if seed is not None else RNG
    gh, gw = max(2, int(h / zellen)), max(2, int(w / zellen))
    g = r.random((gh, gw)).astype(np.float32)
    if wrap:
        g = np.pad(g, ((0, 1), (0, 1)), mode="wrap")
        img = Image.fromarray(g).resize((int(w * (gw + 1) / gw), int(h * (gh + 1) / gh)), Image.BICUBIC)
        return np.asarray(img, dtype=np.float32)[:h, :w]
    return np.asarray(Image.fromarray(g).resize((w, h), Image.BICUBIC), dtype=np.float32)


def fbm(h, w, basis, okt=4, seed=0, wrap=False):
    s, a, tot = np.zeros((h, w), np.float32), 1.0, 0.0
    for o in range(okt):
        s += a * rausch(h, w, basis / 2 ** o, seed + o, wrap)
        tot += a
        a *= 0.5
    return s / tot


def normalen(hmap, staerke):
    gy, gx = np.gradient(hmap * staerke)
    n = np.dstack([-gx, -gy, np.ones_like(hmap)])
    return n / np.linalg.norm(n, axis=2, keepdims=True)


LICHT = [  # Richtung (x rechts, y unten, z zum Betrachter), Stärke
    (norm(np.array([-0.55, -0.62, 0.56])), 1.0),
    (norm(np.array([0.7, 0.25, 0.67])), 0.45),
]


def umgebung(rx, ry, rz):
    """Dunkler Raum, heller Himmel oben links, Fensterstreifen."""
    hell = np.clip((-rx * 0.6 - ry * 0.8) * 0.5 + 0.5, 0, 1) ** 2.2
    fenster = np.exp(-((rx + 0.35) ** 2) / 0.02) * np.clip(-ry, 0, 1)
    return 0.12 + 0.55 * hell * rz + 0.8 * fenster


def stahl(n, tangente=None, glanz=60, grund=0.36, rauh=None):
    """Edelstahl: wenig Diffus, viel Spiegelung, optional anisotrop."""
    v = np.array([0, 0, 1.0])
    col = np.zeros(n.shape[:2], np.float32)
    ndl_sum = np.zeros_like(col)
    for l, k in LICHT:
        ndl = np.clip((n * l).sum(2), 0, 1)
        ndl_sum += ndl * k
        h = norm(l + v)
        if tangente is not None:
            th = (tangente * h).sum(2)
            spec = np.sqrt(np.clip(1 - th ** 2, 0, 1)) ** glanz
        else:
            spec = np.clip((n * h).sum(2), 0, 1) ** glanz
        if rauh is not None:
            spec = spec * (0.55 + 0.9 * rauh)
        col += k * spec * 0.9
    r = 2 * n[..., 2:3] * n - v  # Reflexion
    env = umgebung(r[..., 0], r[..., 1], np.clip(r[..., 2], 0, 1))
    col += grund * (0.35 * ndl_sum + 0.65 * env)
    return col


def tonemap(rgb):
    rgb = rgb / (1 + rgb * 0.35)
    return np.clip(rgb ** (1 / 1.15), 0, 1)


def speichere(arr_rgb, alpha, name, q=86):
    a = np.dstack([arr_rgb, alpha[..., None]]) if alpha is not None else arr_rgb
    im = Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8), "RGBA" if alpha is not None else "RGB")
    im.save(OUT + name, "WEBP", quality=q, method=6)
    print("geschrieben", name, im.size)


def polar(S):
    y, x = np.mgrid[0:S, 0:S].astype(np.float32)
    cx = cy = (S - 1) / 2
    dx, dy = (x - cx) / (S / 2), (y - cy) / (S / 2)
    return dx, dy, np.hypot(dx, dy), np.arctan2(dy, dx)


def ringschliff(S, r, th, seed):
    """Feine konzentrische Riefen: stark entlang r, fast nichts entlang θ."""
    n = S // 2
    ringe = np.random.default_rng(seed).random(n + 8).astype(np.float32)
    ringe = np.convolve(ringe, np.array([0.25, 0.5, 0.25], np.float32), mode="same")
    pos = np.clip(r * n, 0, n + 6)
    i0 = pos.astype(int)
    f = pos - i0
    fein = ringe[i0] * (1 - f) + ringe[i0 + 1] * f  # linear, damit nichts flimmert
    wolke = fbm(S, S, S / 6, 3, seed + 3)
    return 0.7 * fein + 0.3 * wolke


def tangenten(dx, dy, r):
    t = np.dstack([-dy, dx, np.zeros_like(dx)]) / np.maximum(r, 1e-4)[..., None]
    return t


def schatten_alpha(r, rand, weich):
    return np.clip((rand - r) / weich, 0, 1)


# ───────────── Thali-Platte ─────────────
def thali(S=1400):
    dx, dy, r, th = polar(S)
    # Profil: flacher Boden, schräge Wand, gerollter Rand
    h = np.where(r < 0.6, 0.0, 0)
    wand = np.clip((r - 0.6) / 0.31, 0, 1)
    h = 0.22 * (wand ** 1.6)
    rand = np.clip((r - 0.905) / 0.09, 0, 1)
    h += 0.07 * np.sin(rand * math.pi) * (r < 0.995)
    h += 0.004 * (fbm(S, S, S / 10, 3, 11) - 0.5)
    n = normalen(h, S * 0.9)
    t = tangenten(dx, dy, r)
    # Tangente in die Fläche legen
    t = t - (t * n).sum(2, keepdims=True) * n
    t /= np.maximum(np.linalg.norm(t, axis=2, keepdims=True), 1e-5)
    rau = ringschliff(S, r, th, 21)
    c = stahl(n, t, glanz=34, grund=0.52, rauh=rau)
    c *= 0.94 + 0.1 * rau
    # Rillen am Übergang Boden/Wand und vor dem Rand
    for rr, w, d in [(0.6, 0.004, 0.18), (0.9, 0.003, 0.22)]:
        c *= 1 - d * np.exp(-((r - rr) ** 2) / (2 * w ** 2))
    rgb = np.dstack([c * 0.97, c * 0.99, c * 1.03])
    alpha = schatten_alpha(r, 0.998, 0.004)
    speichere(tonemap(rgb), alpha, "stahl-thali.webp")


# ───────────── Katori-Rand (Ring, Mitte frei fürs Foto) ─────────────
def katori(S=420):
    dx, dy, r, th = polar(S)
    innen = 0.84
    wulst = np.clip((r - innen) / (1 - innen), 0, 1)
    h = 0.06 * np.clip(np.sin(wulst * math.pi), 0, 1) ** 0.7
    n = normalen(h, S * 0.9)
    t = tangenten(dx, dy, r)
    rau = ringschliff(S, r, th, 5)
    c = stahl(n, t, glanz=26, grund=0.45, rauh=rau)
    rgb = np.dstack([c * 0.97, c * 0.99, c * 1.03])
    alpha = schatten_alpha(r, 0.995, 0.01) * np.clip((r - innen + 0.004) / 0.01, 0, 1)
    speichere(tonemap(rgb), alpha, "stahl-katori.webp")


# ───────────── Masala-Dabba ─────────────
def dabba(S=1200):
    dx, dy, r, th = polar(S)
    # Dose von oben: Boden, Innenwand, Rand
    h = np.zeros_like(r)
    h += 0.1 * np.clip((r - 0.9) / 0.06, 0, 1)
    rand = np.clip((r - 0.955) / 0.045, 0, 1)
    h += 0.05 * np.sin(rand * math.pi)
    n = normalen(h, S * 0.9)
    t = tangenten(dx, dy, r)
    rau = ringschliff(S, r, th, 33)
    c = stahl(n, t, glanz=30, grund=0.4, rauh=rau)
    # Innenwand liegt im Schatten
    c *= 1 - 0.45 * np.exp(-((r - 0.9) ** 2) / 0.0012)
    rgb = np.dstack([c * 0.97, c * 0.99, c * 1.03])
    speichere(tonemap(rgb), schatten_alpha(r, 0.998, 0.004), "stahl-dabba.webp")

    # Deckel: leicht gewölbt, Griffknopf in der Mitte
    h = 0.05 * (1 - r ** 2)
    rand = np.clip((r - 0.93) / 0.07, 0, 1)
    h += 0.04 * np.sin(rand * math.pi)
    knopf = np.clip(1 - r / 0.1, 0, 1)
    h += 0.06 * np.sqrt(knopf)
    h -= 0.012 * np.exp(-((r - 0.14) ** 2) / 0.0004)
    n = normalen(h, S * 0.9)
    rau = ringschliff(S, r, th, 44)
    c = stahl(n, tangenten(dx, dy, r), glanz=38, grund=0.42, rauh=rau)
    rgb = np.dstack([c * 0.97, c * 0.99, c * 1.03])
    speichere(tonemap(rgb), schatten_alpha(r, 0.998, 0.004), "stahl-deckel.webp")


# ───────────── Gewürze in ihren Schälchen ─────────────
GEWUERZE = {
    # name: (Farbe, Farbe2, Art)
    "haldi": ((0.93, 0.62, 0.08), (0.80, 0.45, 0.04), "pulver"),
    "mirch": ((0.72, 0.12, 0.06), (0.45, 0.05, 0.03), "pulver"),
    "garam": ((0.45, 0.25, 0.12), (0.30, 0.15, 0.07), "pulver"),
    "jeera": ((0.52, 0.38, 0.22), (0.30, 0.20, 0.10), "laenglich"),
    "dhania": ((0.70, 0.56, 0.33), (0.48, 0.36, 0.18), "rund"),
    "rai": ((0.20, 0.12, 0.10), (0.08, 0.05, 0.04), "klein"),
    "elaichi": ((0.52, 0.62, 0.30), (0.33, 0.42, 0.17), "kapsel"),
}


def saaten(S, art, seed):
    """Höhenkarte aus vielen kleinen Ellipsoiden."""
    r = np.random.default_rng(seed)
    h = np.zeros((S, S), np.float32)
    idx = np.zeros((S, S), np.float32)
    groesse = {"laenglich": (11, 3.6), "rund": (6.5, 6.5), "klein": (3.6, 3.6), "kapsel": (16, 9)}[art]
    anzahl = int(S * S / (groesse[0] * groesse[1] * 1.6))
    a, b = groesse
    pad = int(a + 2)
    yy, xx = np.mgrid[-pad:pad + 1, -pad:pad + 1].astype(np.float32)
    for _ in range(anzahl):
        cx, cy = r.integers(0, S), r.integers(0, S)
        w = r.random() * math.pi
        sa, sb = a * (0.8 + 0.4 * r.random()), b * (0.8 + 0.4 * r.random())
        u = (xx * math.cos(w) + yy * math.sin(w)) / sa
        v = (-xx * math.sin(w) + yy * math.cos(w)) / sb
        d = 1 - u * u - v * v
        form = np.sqrt(np.clip(d, 0, 1)) * min(sa, sb) * (0.9 + 0.3 * r.random())
        if art == "laenglich":
            form *= 1 + 0.15 * np.cos(v * 9)  # Rippen des Kreuzkümmels
        x0, x1, y0, y1 = cx - pad, cx + pad + 1, cy - pad, cy + pad + 1
        sx0, sy0 = max(0, -x0), max(0, -y0)
        x0c, y0c, x1c, y1c = max(0, x0), max(0, y0), min(S, x1), min(S, y1)
        f = form[sy0:sy0 + (y1c - y0c), sx0:sx0 + (x1c - x0c)]
        reg = h[y0c:y1c, x0c:x1c]
        neu = f + (reg * 0.0)
        mask = neu > reg
        reg[mask] = neu[mask]
        idx[y0c:y1c, x0c:x1c][mask] = r.random()
    return h, idx


def gewuerz(name, S=360):
    c1, c2, art = GEWUERZE[name]
    dx, dy, r, th = polar(S)
    if art == "pulver":
        # Häufchen, feines Korn, ein paar Klümpchen
        h = 18 * np.clip(1 - r ** 2, 0, 1) ** 0.8
        h += 1.4 * fbm(S, S, 18, 4, hash(name) % 100)
        h += 0.6 * (np.random.default_rng(3).random((S, S)) - 0.5)
        mischung = fbm(S, S, 40, 3, 9)
        stark = 1.6
    else:
        hs, idx = saaten(S, art, hash(name) % 1000)
        h = hs + 10 * np.clip(1 - r ** 2, 0, 1)
        mischung = idx
        stark = 1.0
    n = normalen(h, stark)
    farbe = np.dstack([c1[i] * (1 - mischung) + c2[i] * mischung for i in range(3)])
    licht = np.zeros((S, S), np.float32)
    for l, k in LICHT:
        licht += k * np.clip((n * l).sum(2), 0, 1)
    if art != "pulver":
        licht *= 0.55 + 0.45 * np.clip(h / max(h.max(), 1e-3) * 2.2, 0, 1)  # Fugen dunkel
    glanz = np.clip((n * norm(LICHT[0][0] + np.array([0, 0, 1.0]))).sum(2), 0, 1) ** 40 * (0.25 if art in ("rund", "klein", "laenglich") else 0.06)
    rgb = farbe * (0.18 + 0.95 * licht)[..., None] + glanz[..., None]
    # Schatten der Schälchenwand
    rgb *= (1 - 0.55 * np.clip((r - 0.72) / 0.28, 0, 1) ** 1.5)[..., None]
    speichere(tonemap(rgb), schatten_alpha(r, 0.999, 0.006), f"gewuerz-{name}.webp", q=84)


# ───────────── Gehämmertes Kupfer (kachelbar) ─────────────
def kupfer(S=640):
    """Jeder Hammerschlag ist eine flache Kugelkalotte; wo zwei sich treffen,
    bleibt ein scharfer Grat stehen, der das Licht fängt."""
    r = np.random.default_rng(12)
    y, x = np.mgrid[0:S, 0:S].astype(np.float32)
    h = np.zeros((S, S), np.float32)
    for _ in range(210):
        cx, cy = r.random() * S, r.random() * S
        rad = S * (0.05 + 0.045 * r.random())
        ddx = np.minimum(np.abs(x - cx), S - np.abs(x - cx))  # kachelbar
        ddy = np.minimum(np.abs(y - cy), S - np.abs(y - cy))
        d2 = (ddx ** 2 + ddy ** 2) / rad ** 2
        tief = 0.55 + 0.45 * r.random()
        h = np.minimum(h, np.where(d2 < 1, (d2 - 1) * tief, 0))
    n = normalen(h, 7)
    v = np.array([0, 0, 1.0])
    albedo = np.array([0.88, 0.47, 0.30])
    col = np.zeros((S, S, 3), np.float32)
    for l, k in LICHT:
        ndl = np.clip((n * l).sum(2), 0, 1)
        hv = norm(l + v)
        spec = np.clip((n * hv).sum(2), 0, 1)
        col += k * albedo * (0.22 * ndl[..., None] + 1.15 * (spec ** 22)[..., None] + 0.35 * (spec ** 4)[..., None])
    rr = 2 * n[..., 2:3] * n - v
    env = umgebung(rr[..., 0], rr[..., 1], np.clip(rr[..., 2], 0, 1))
    col += albedo * 0.42 * env[..., None]
    k = 2 * math.pi / S  # periodische Anlauffarbe, damit die Kachel nahtlos bleibt
    fleck = 0.5 + 0.25 * np.sin(x * k * 2 + 1.3) * np.cos(y * k * 3) + 0.25 * np.sin((x + y) * k)
    col *= (0.86 + 0.24 * fleck)[..., None]
    speichere(tonemap(col), None, "kupfer-gehaemmert.webp", q=84)


# ───────────── Logo in geprägtem Stahl ─────────────
def logo_relief(maske_png):
    """Prägt die Logoform in gebürsteten Stahl: Höhe aus der weichgezeichneten
    Form, waagerechter Bürststrich, ein breites Glanzband."""
    from PIL import ImageFilter
    m = Image.open(maske_png).getchannel("A")
    W, H = m.size
    a = np.asarray(m, np.float32) / 255
    hoehe = np.zeros_like(a)
    for rad, gew in ((10, 0.45), (4, 0.35), (1.5, 0.2)):
        hoehe += gew * np.asarray(m.filter(ImageFilter.GaussianBlur(rad)), np.float32) / 255
    hoehe *= a
    n = normalen(hoehe, 16)
    t = np.dstack([np.ones_like(a), np.zeros_like(a), np.zeros_like(a)])
    t = t - (t * n).sum(2, keepdims=True) * n
    t /= np.maximum(np.linalg.norm(t, axis=2, keepdims=True), 1e-5)
    zeilen = np.random.default_rng(4).random(H).astype(np.float32)
    rau = 0.65 * np.repeat(zeilen[:, None], W, axis=1) + 0.35 * fbm(H, W, 30, 3, 8)
    c = stahl(n, t, glanz=18, grund=0.85, rauh=rau)
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    band = np.exp(-((xx / W - 0.36 + (yy / H - 0.5) * 0.25) ** 2) / 0.006)
    c += 0.45 * band * (0.6 + 0.4 * rau)
    rgb = np.dstack([c * 1.0, c * 0.985, c * 0.96])
    speichere(tonemap(rgb), a, "logo-stahl.webp", q=88)


# ───────────── Gebürsteter Stahl (für das Logo) ─────────────
def buerstung(W=1600, H=700):
    zeilen = np.random.default_rng(4).random(H).astype(np.float32)
    fein = np.repeat(zeilen[:, None], W, axis=1)
    fein = 0.6 * fein + 0.4 * fbm(H, W, 40, 3, 8)
    y, x = np.mgrid[0:H, 0:W].astype(np.float32)
    band = np.exp(-((x / W - 0.38 - (y / H) * 0.12) ** 2) / 0.02) * 0.9 + np.exp(-((x / W - 0.8) ** 2) / 0.01) * 0.5
    c = 0.45 + 0.35 * band + 0.18 * (fein - 0.5)
    rgb = np.dstack([c * 1.02, c * 0.98, c * 0.94])
    speichere(np.clip(rgb, 0, 1), None, "stahl-gebuerstet.webp", q=84)


if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:  # Logomaske als PNG mit Alpha, z. B. per Browser aus img/logo.svg
        logo_relief(sys.argv[1])
        sys.exit()
    thali()
    katori()
    dabba()
    for g in GEWUERZE:
        gewuerz(g)
    kupfer()
    buerstung()
