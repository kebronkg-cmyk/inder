"""Erzeugt img/logo.svg: Kuppel, Bogen und Wortmarke (Rozha One als Pfade).

Aufruf: python3 tools/logo.py pfad/zu/RozhaOne-Regular.ttf
Farbe kommt aus currentColor, damit jede Variante sie selbst setzt.
"""
import math, sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

font = TTFont(sys.argv[1])
gs, cmap, hmtx = font.getGlyphSet(), font.getBestCmap(), font["hmtx"]

# Wortmarke, Grundlinie y=0, leicht enger gesetzt als die Schrift von Haus aus
track = {"B": -14, "o": -8, "m": -8, "b": -10, "a": -6, "y": 0}
x, word = 0, []
for ch in "Bombay":
    g = cmap[ord(ch)]
    pen = SVGPathPen(gs)
    gs[g].draw(TransformPen(pen, (1, 0, 0, -1, x, 0)))
    word.append(pen.getCommands())
    x += hmtx[g][0] + track[ch]
W = x
cx = W / 2

def f(v):
    return f"{v:.1f}".rstrip("0").rstrip(".")

# Bogen: Mittellinie einer Ellipse, Strich schwillt zum Scheitel an (wie mit
# der Breitfeder gezogen) und läuft an den Enden haarfein aus.
rx, ry, cy = W / 2 + 270, 1180, 200
tmax, tmin = 50, 3
n = 3.2  # Superellipse: flacher Scheitel, steilere Flanken, die um die Schrift greifen
a0 = math.radians(4)
N = 220

def pt(p):
    c, s = math.cos(p), math.sin(p)
    return (cx + rx * math.copysign(abs(c) ** (2 / n), c), cy - ry * abs(s) ** (2 / n))

outer, inner = [], []
for i in range(N + 1):
    p = a0 + (math.pi - 2 * a0) * i / N
    (px, py), (qx, qy), (rx2, ry2) = pt(p), pt(p - 1e-4), pt(p + 1e-4)
    tx, ty = rx2 - qx, ry2 - qy
    tl = math.hypot(tx, ty); nx, ny = ty / tl, -tx / tl
    w = tmin + (tmax - tmin) * math.sin(p) ** 4
    outer.append((px + nx * w / 2, py + ny * w / 2))
    inner.append((px - nx * w / 2, py - ny * w / 2))
arch = "M" + " L".join(f"{f(a)} {f(b)}" for a, b in outer)
arch += " L" + " L".join(f"{f(a)} {f(b)}" for a, b in reversed(inner)) + " Z"
top = cy - ry  # Scheitel des Bogens

# Kuppel: Zwiebelform mit Spitze, als doppelte Kontur (Intarsienlinie)
def dome(sc, base_y):
    bw, bulge, h = 250 * sc, 300 * sc, 560 * sc
    b = base_y
    return (f"M{f(cx-bw)} {f(b)} C{f(cx-bulge-30*sc)} {f(b-150*sc)} {f(cx-bulge+10*sc)} {f(b-330*sc)} {f(cx-150*sc)} {f(b-440*sc)} "
            f"C{f(cx-70*sc)} {f(b-500*sc)} {f(cx-20*sc)} {f(b-520*sc)} {f(cx)} {f(b-h)} "
            f"C{f(cx+20*sc)} {f(b-520*sc)} {f(cx+70*sc)} {f(b-500*sc)} {f(cx+150*sc)} {f(b-440*sc)} "
            f"C{f(cx+bulge-10*sc)} {f(b-330*sc)} {f(cx+bulge+30*sc)} {f(b-150*sc)} {f(cx+bw)} {f(b)}")
base = top - 8
dome_outer = dome(1.0, base)
dome_inner = dome(0.80, base - 40)
# Sockel der Kuppel: kurzer Balken, sitzt auf dem Bogen
plinth = f"M{f(cx-330)} {f(base)} H{f(cx+330)}"
# Bekrönung (Kalash): Stiel, zwei Perlen, Knospe
tip = base - 560
finial = (
    f'<path d="M{f(cx)} {f(tip)} V{f(tip-70)}" stroke-width="18"/>'
    f'<circle cx="{f(cx)}" cy="{f(tip-88)}" r="22" fill="currentColor" stroke="none"/>'
    f'<circle cx="{f(cx)}" cy="{f(tip-138)}" r="15" fill="currentColor" stroke="none"/>'
    f'<path d="M{f(cx)} {f(tip-160)} C{f(cx-34)} {f(tip-200)} {f(cx-26)} {f(tip-250)} {f(cx)} {f(tip-290)} '
    f'C{f(cx+26)} {f(tip-250)} {f(cx+34)} {f(tip-200)} {f(cx)} {f(tip-160)} Z" fill="currentColor" stroke="none"/>'
)
minx, maxx = cx - rx - 40, cx + rx + 40
miny, maxy = tip - 310, 300
vb = f"{f(minx)} {f(miny)} {f(maxx-minx)} {f(maxy-miny)}"

svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" role="img" aria-label="Bombay">
<g fill="currentColor">
<path class="logo-bogen" d="{arch}"/>
<g class="logo-kuppel" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
<path d="{dome_outer}" stroke-width="30"/>
<path d="{dome_inner}" stroke-width="10" opacity=".7"/>
<path d="{plinth}" stroke-width="30"/>
{finial}
</g>
<g class="logo-wort"><path d="{" ".join(word)}"/></g>
</g>
</svg>
'''
open("img/logo.svg", "w").write(svg)
# Dieselbe Grafik als Skript, damit die Seiten sie ohne Abruf einsetzen können
# und currentColor greift
inline = svg.replace('role="img" aria-label="Bombay"', 'aria-hidden="true" focusable="false"').replace("\n", "")
open("js/logo.js", "w").write(
    "/* Erzeugt von tools/logo.py, nicht von Hand bearbeiten. */\n"
    "(function () {\n  var svg = " + repr(inline).replace("'", "\"", 0) + ";\n"
    "  document.querySelectorAll('[data-logo]').forEach(function (el) { el.innerHTML = svg; el.classList.add('hat-logo'); });\n})();\n")
print("viewBox", vb)
