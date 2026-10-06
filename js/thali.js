/* Entwurf B · Thali — die drehbare Platte der Lieblinge und die
   Masala-Dabba. Die Platte dreht sich um ihre Mitte; das Gericht an
   der Fokusstelle (rechts, auf schmalen Schirmen unten) wird groß und
   dampft, daneben stehen Geschichte, Schärfe und Merkzettel. */
(function () {
  "use strict";
  const B = window.BOMBAY;
  if (!B) return;
  const { $, $$, reduce, euro, esc, ico } = B.util;

  /* ───────────── Thali ───────────── */
  const root = $("[data-thali]");
  const liste = (window.BOMBAY_LIEBLINGE || []).map((l) => Object.assign({}, l, B.speisen.get(l.nr))).filter((l) => l.name);
  if (root && liste.length) {
    const platte = $("[data-thali-platte]", root);
    const ring = $("[data-thali-ring]", root);
    const mitte = $("[data-thali-mitte]", root);
    const text = $("[data-thali-text]", root);
    const N = liste.length, SCHRITT = 360 / N;
    const ARTEN = { cremig: "cremig, rund", kraeftig: "kräftig, würzig", mild: "mild-würzig" };
    const KLEIN = ["rogan-josh", "mango-chicken", "karahi-ghosht", "fisch-chili"];
    const scharf = {};
    liste.forEach((l) => (scharf[l.nr] = l.nr === "90" ? "sehr scharf" : "pikant"));
    const schmal = window.matchMedia("(max-width: 900px)");
    const fokusWinkel = () => (schmal.matches ? 90 : 0);

    ring.innerHTML = liste.map((l, i) => `
      <button type="button" class="katori" style="--a:${i * SCHRITT}" data-i="${i}" aria-label="${esc(l.name)}">
        <span class="katori-rand"><img src="img/${l.bild}-${KLEIN.includes(l.bild) ? 400 : 480}.webp" alt="" width="240" height="240" loading="lazy" draggable="false"></span>
        <span class="dampf" aria-hidden="true"><i></i><i></i><i></i></span>
      </button>`).join("");
    const katoris = $$(".katori", ring);

    let R = fokusWinkel(), akt = 0;
    const setzeR = (r) => { R = r; ring.style.setProperty("--R", R); };

    function fokus(i, sanft = true) {
      akt = ((i % N) + N) % N;
      // kürzester Weg zur Fokusstelle
      let ziel = fokusWinkel() - akt * SCHRITT;
      ziel += Math.round((R - ziel) / 360) * 360;
      ring.classList.toggle("ohne-zeit", !sanft);
      setzeR(ziel);
      katoris.forEach((k, n) => {
        k.classList.toggle("is-fokus", n === akt);
        k.setAttribute("aria-pressed", String(n === akt));
      });
      zeigeText(liste[akt], sanft);
    }

    function zeigeText(l, sanft) {
      mitte.innerHTML = `<small>Nr. ${l.nr}</small>${esc(l.name)}`;
      text.innerHTML = `
        <p class="thali-nr">Nr. ${l.nr} · ${esc(l.herkunft)}</p>
        <h3 class="thali-name">${esc(l.name)}</h3>
        <p class="thali-satz">${esc(l.satz)}</p>
        <ul class="thali-fakten" role="list">
          <li><span>Zubereitet</span>${l.aus === "Tandoor" ? "im Tandoor" : l.aus === "Karahi" ? "in der Karahi" : "im Topf"}</li>
          <li><span>Charakter</span>${ARTEN[l.art] || "kräftig"}</li>
          <li><span>Dazu</span>Naan, Reis, Soßen</li>
        </ul>
        <div class="schaerfe" role="radiogroup" aria-label="Schärfe für ${esc(l.name)}">
          ${B.SCHAERFE.map((s, i) => `<button type="button" role="radio" aria-checked="${scharf[l.nr] === s}" data-schaerfe="${s}" style="--stufe:${i}"><span class="schote" aria-hidden="true"></span>${s}</button>`).join("")}
        </div>
        <div class="thali-handeln">
          <span class="thali-preis">${euro(l.preis)}</span>
          <button type="button" class="merk-knopf" data-merken="${l.nr}" data-scharf="${scharf[l.nr]}" aria-pressed="${B.istGemerkt(l.nr)}">${ico("plus")}<span data-merk-label>${B.istGemerkt(l.nr) ? "Gemerkt" : "Merken"}</span></button>
        </div>`;
      if (sanft && !reduce) text.animate([{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "none" }], { duration: 480, easing: "cubic-bezier(.23,1,.32,1)" });
    }

    $$("[data-thali-dreh]", root).forEach((b) => b.addEventListener("click", () => fokus(akt + +b.dataset.thaliDreh)));
    platte.addEventListener("keydown", (e) => {
      const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (d) { e.preventDefault(); fokus(akt + d); katoris[akt].focus({ preventScroll: true }); }
    });

    // Ziehen: die Platte folgt dem Finger um ihre Mitte
    let zug = null;
    const winkel = (e) => {
      const r = platte.getBoundingClientRect();
      return Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180 / Math.PI;
    };
    platte.addEventListener("pointerdown", (e) => {
      if (e.button !== 0) return;
      zug = { w0: winkel(e), r0: R, x: e.clientX, y: e.clientY, bewegt: false, id: e.pointerId, ziel: e.target.closest(".katori") };
    });
    platte.addEventListener("pointermove", (e) => {
      if (!zug || e.pointerId !== zug.id) return;
      if (!zug.bewegt && Math.hypot(e.clientX - zug.x, e.clientY - zug.y) < 8) return;
      if (!zug.bewegt) { zug.bewegt = true; platte.setPointerCapture(e.pointerId); ring.classList.add("ohne-zeit"); platte.classList.add("is-zug"); }
      let d = winkel(e) - zug.w0;
      if (d > 180) d -= 360; if (d < -180) d += 360;
      zug.w0 += d; zug.r0 += d;
      setzeR(zug.r0);
    });
    const loslassen = (e) => {
      if (!zug || (e && e.pointerId !== zug.id)) return;
      const z = zug; zug = null;
      platte.classList.remove("is-zug");
      if (!z.bewegt) { if (z.ziel) fokus(+z.ziel.dataset.i); return; }
      const i = Math.round((fokusWinkel() - R) / SCHRITT);
      requestAnimationFrame(() => fokus(i));
    };
    platte.addEventListener("pointerup", loslassen);
    platte.addEventListener("pointercancel", loslassen);
    // Tastatur und Screenreader: Klick ohne Zeiger
    ring.addEventListener("click", (e) => {
      const k = e.target.closest(".katori");
      if (k && e.detail === 0) fokus(+k.dataset.i);
    });

    text.addEventListener("click", (e) => {
      const b = e.target.closest("[data-schaerfe]");
      if (!b) return;
      const l = liste[akt];
      scharf[l.nr] = b.dataset.schaerfe;
      $$("[data-schaerfe]", text).forEach((x) => x.setAttribute("aria-checked", String(x === b)));
      $("[data-merken]", text).dataset.scharf = scharf[l.nr];
      if (B.istGemerkt(l.nr)) B.merken(l.nr, scharf[l.nr]);
    });

    schmal.addEventListener("change", () => fokus(akt, false));
    fokus(0, false);

    // Beim Hereinscrollen dreht sich die Platte einmal in Position
    if (!reduce && "IntersectionObserver" in window) {
      setzeR(R - 120);
      requestAnimationFrame(() => ring.classList.remove("ohne-zeit"));
      const io = new IntersectionObserver((es) => {
        if (es[0].isIntersecting) { io.disconnect(); ring.classList.add("ankunft"); fokus(0); setTimeout(() => ring.classList.remove("ankunft"), 1800); }
      }, { threshold: 0.35 });
      io.observe(platte);
    }
  }

  /* ───────────── Masala-Dabba ───────────── */
  const dabba = $("[data-dabba]");
  if (dabba) {
    const GEWUERZE = [
      { id: "garam", n: "Garam Masala", h: "गरम मसाला", t: "Die wärmende Mischung aus Zimt, Nelke, Kardamom und Pfeffer. Sie kommt oft erst zum Schluss in den Topf." },
      { id: "haldi", n: "Kurkuma", h: "हल्दी · Haldi", t: "Gibt Currys und Dal die goldene Farbe. Erdig, leicht bitter, nie allein im Vordergrund." },
      { id: "jeera", n: "Kreuzkümmel", h: "जीरा · Jeera", t: "Wird in heißem Fett geröstet, bis er duftet. So beginnen viele Currys und Jeera Aloo." },
      { id: "mirch", n: "Chili", h: "लाल मिर्च · Lal Mirch", t: "Bestimmt die Schärfe. Im Bombay sagen Sie, wie viel: mild, pikant, scharf oder sehr scharf." },
      { id: "dhania", n: "Koriander", h: "धनिया · Dhania", t: "Gemahlene Samen, warm und zitronig. Die frischen Blätter kommen zum Schluss obenauf." },
      { id: "rai", n: "Senfsaat", h: "राई · Rai", t: "Platzt im heißen Öl und gibt ein nussiges, leicht scharfes Aroma." },
      { id: "elaichi", n: "Kardamom", h: "इलायची · Elaichi", t: "Grüne Kapseln, blumig und frisch. Gehört in Biryani, Korma und in den Chai." },
    ];
    const schalen = $(".dabba-schalen", dabba);
    const info = $("[data-dabba-info]");
    schalen.innerHTML = GEWUERZE.map((g, i) => `
      <button type="button" class="schale schale--${g.id}" style="--i:${i}" data-g="${i}" aria-pressed="${i === 0}">
        <span class="schale-gut" aria-hidden="true"></span><span class="schale-name">${g.n}</span>
      </button>`).join("");
    const zeig = (i, sanft) => {
      const g = GEWUERZE[i];
      $$(".schale", schalen).forEach((s, n) => s.setAttribute("aria-pressed", String(n === i)));
      info.innerHTML = `<p class="dabba-hindi" lang="hi">${g.h}</p><p class="dabba-name">${g.n}</p><p>${g.t}</p>`;
      if (sanft && !reduce) info.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "none" }], { duration: 420, easing: "cubic-bezier(.23,1,.32,1)" });
    };
    schalen.addEventListener("click", (e) => { const s = e.target.closest(".schale"); if (s) zeig(+s.dataset.g, true); });
    zeig(0, false);
  }
})();
