/* ═══════════════════════════════════════════════════════════
   Startseite — die Bühne
   Vier Lieblingsgerichte auf einer vollen Farbfläche. Gewechselt wird
   nur, wenn der Gast es will: Schälchen antippen, Pfeil, Schale zur
   Seite ziehen oder Pfeiltasten. Die neue Farbe breitet sich von der
   Stelle aus, an der getippt wurde; die Schale dreht sich dabei genau
   einmal in Laufrichtung und steht dann still.
   ═══════════════════════════════════════════════════════════ */
(function () {
  "use strict";
  const B = window.BOMBAY;
  const { $, $$, ruhig, euro, esc, ico, speicher } = B.u;
  const gsap = window.gsap, ST = window.ScrollTrigger;
  if (ST) gsap.registerPlugin(ST);

  const GERICHTE = [
    { nr: "57", bild: "butter-chicken", farbe: "#d42f73", ton: "hell", herkunft: "Delhi",
      satz: "Zartes Huhn in einer samtigen Soße aus Butter und Tomate. In Delhi erfunden, heute das bekannteste Curry Nordindiens." },
    { nr: "109", bild: "karahi-paneer", farbe: "#0d5a60", ton: "hell", herkunft: "Nordindien",
      satz: "Hausgemachter Käse, in der Karahi gebraten und in ihr serviert, in kräftiger Currysoße." },
    { nr: "108", bild: "dal-makhni", farbe: "#ff8a1c", ton: "dunkel", herkunft: "Punjab",
      satz: "Gelbe Linsen, langsam gegart, mit Butter nach ayurvedischer Art. Auf Wunsch vegan." },
    { nr: "92", bild: "jheenga-curry", farbe: "#2c6b45", ton: "hell", herkunft: "Westküste",
      satz: "Riesengarnelen ohne Schale in Currysoße mit feinen Gewürzen, wie an der Küste bei Bombay." },
  ].map((g) => Object.assign(g, B.speisen.get(g.nr)));

  const buehne = $("[data-buehne]");
  const feld = $("[data-feld]", buehne);
  const tafel = $("[data-tafel]", buehne);
  const rangoli = $("[data-rangoli]", buehne);
  const schalen = $$(".schale", buehne);
  const gerichtEl = $("[data-gericht]", buehne);
  const waehler = $("[data-waehler]", buehne);
  const hinweis = $("[data-hinweis]", buehne);
  const themaFarbe = document.querySelector('meta[name="theme-color"]');
  const fein = window.matchMedia("(pointer: fine)").matches;

  /* ── Wähler: vier Schälchen als Tabs ── */
  waehler.innerHTML = GERICHTE.map((g, i) => `
    <button type="button" class="waehler-tab" role="tab" id="tab-${g.nr}" aria-controls="gericht-text" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-i="${i}">
      <img src="img/gerichte/${g.bild}-640.webp" alt="" width="640" height="600" decoding="async"><span>${esc(g.name)}</span>
    </button>`).join("") + `<span class="waehler-licht" aria-hidden="true"></span>`;
  const tabs = $$(".waehler-tab", waehler);
  const licht = $(".waehler-licht", waehler);
  gerichtEl.id = "gericht-text";
  gerichtEl.setAttribute("role", "tabpanel");
  gerichtEl.setAttribute("aria-labelledby", tabs[0].id);

  function gerichtHTML(g) {
    const n = B.zettel.menge(g.nr);
    return `
      <h2 class="gericht-name">${esc(g.name)}</h2>
      <p class="gericht-satz">${esc(g.satz)}</p>
      <div class="gericht-handeln">
        <span class="gericht-preis tab">${euro(g.preis)}</span>
        <button type="button" class="pille pille--dazu" data-dazu="${g.nr}" aria-pressed="${n > 0}">${n ? `${ico("haken")}<span>Im Bestellzettel · ${n}</span>` : `${ico("plus")}<span>Auf den Bestellzettel</span>`}</button>
      </div>
      <p class="gericht-herkunft"><span class="tab">Nr. ${g.nr}</span> · ${esc(g.herkunft)}</p>`;
  }

  let akt = 0;
  let laeuft = null;          // laufende Wechsel-Animation
  let warte = null;           // Wunsch, der während eines Wechsels kam
  let gewechselt = false;     // hat der Gast schon selbst gewechselt?

  function lichtSetzen(sofort) {
    const t = tabs[akt];
    licht.style.transition = sofort ? "none" : "";
    const b = Math.min(36, t.offsetWidth * 0.6);
    licht.style.width = b + "px";
    licht.style.transform = `translateX(${t.offsetLeft + (t.offsetWidth - b) / 2}px)`;
    if (sofort) { licht.offsetWidth; licht.style.transition = ""; }
  }
  function tonSetzen(g) {
    buehne.dataset.ton = g.ton;
    if (B.kopf) B.kopf.classList.toggle("is-hell", g.ton === "hell");
    if (themaFarbe) themaFarbe.setAttribute("content", g.farbe);
  }

  // Erster Stand
  gerichtEl.innerHTML = gerichtHTML(GERICHTE[0]);
  schalen[0].classList.add("is-aktiv");
  feld.style.background = GERICHTE[0].farbe;
  tonSetzen(GERICHTE[0]);
  requestAnimationFrame(() => lichtSetzen(true));
  window.addEventListener("resize", () => lichtSetzen(true));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => lichtSetzen(true));

  // Bestellzettel aus der Bühne
  gerichtEl.addEventListener("click", (e) => {
    const b = e.target.closest("[data-dazu]");
    if (b) B.zettel.dazu(b.dataset.dazu, null, b);
  });
  document.addEventListener("zettel", () => {
    const b = $("[data-dazu]", gerichtEl);
    if (!b) return;
    const n = B.zettel.menge(b.dataset.dazu);
    b.setAttribute("aria-pressed", String(n > 0));
    b.innerHTML = n ? `${ico("haken")}<span>Im Bestellzettel · ${n}</span>` : `${ico("plus")}<span>Auf den Bestellzettel</span>`;
  });

  /* ── Der Wechsel ──
     von: Punkt im Fenster, von dem aus die Farbe wächst
     richtung: +1 vorwärts, -1 zurück (bestimmt die Drehrichtung) */
  function zeige(neu, von, richtung) {
    neu = (neu + GERICHTE.length) % GERICHTE.length;
    if (neu === akt) return;
    // Läuft noch ein Wechsel, wird er beschleunigt zu Ende gespielt und der
    // neue Wunsch danach ausgeführt; nichts springt.
    if (laeuft) { warte = [neu, von, richtung]; laeuft.timeScale(2.6); return; }
    const alt = akt;
    akt = neu;
    const g = GERICHTE[neu];
    richtung = richtung || (neu > alt ? 1 : -1);
    if (!gewechselt) { gewechselt = true; hinweisWeg(); }

    tabs.forEach((t, i) => { t.setAttribute("aria-selected", String(i === neu)); t.tabIndex = i === neu ? 0 : -1; });
    gerichtEl.setAttribute("aria-labelledby", tabs[neu].id);
    lichtSetzen(false);

    const altS = schalen[alt], neuS = schalen[neu];
    const textNeu = () => { gerichtEl.innerHTML = gerichtHTML(g); };

    if (ruhig || !gsap) {
      altS.classList.remove("is-aktiv"); neuS.classList.add("is-aktiv");
      feld.style.background = g.farbe; tonSetzen(g); textNeu();
      return;
    }

    // Farbe wächst als Kreis vom Ausgangspunkt
    const r = buehne.getBoundingClientRect();
    const x = (von ? von.x : r.left + r.width / 2) - r.left;
    const y = (von ? von.y : r.top + r.height / 2) - r.top;
    const R = Math.hypot(Math.max(x, r.width - x), Math.max(y, r.height - y)) + 4;
    const flut = document.createElement("div");
    flut.className = "buehne-feld-neu";
    flut.style.background = g.farbe;
    feld.after(flut);

    const alteZeilen = $$(".gericht-name, .gericht-satz, .gericht-handeln, .gericht-herkunft", gerichtEl);
    neuS.classList.add("is-aktiv");
    gsap.set(neuS, { autoAlpha: 0 });

    laeuft = gsap.timeline({
      defaults: { overwrite: "auto" },
      onComplete: () => {
        feld.style.background = g.farbe; flut.remove(); altS.classList.remove("is-aktiv"); gsap.set(altS, { clearProps: "all" }); laeuft = null;
        if (warte) { const w = warte; warte = null; zeige(w[0], w[1], w[2]); }
      },
      onInterrupt: () => { feld.style.background = g.farbe; flut.remove(); altS.classList.remove("is-aktiv"); gsap.set(altS, { clearProps: "all" }); },
    });
    laeuft
      .fromTo(flut, { clipPath: `circle(0px at ${x}px ${y}px)` }, { clipPath: `circle(${R}px at ${x}px ${y}px)`, duration: 0.85, ease: "power3.inOut" }, 0)
      .call(() => tonSetzen(g), null, 0.32)
      // die alte Schale rollt in Laufrichtung hinaus (vorwärts: nach links, gegen den Uhrzeigersinn)
      .to(altS, { rotation: `-=${70 * richtung}`, xPercent: -22 * richtung, scale: 0.78, autoAlpha: 0, duration: 0.5, ease: "power2.in" }, 0)
      // die neue kommt von der anderen Seite und dreht sich an ihren Platz
      .fromTo(neuS, { rotation: 80 * richtung, xPercent: 26 * richtung, scale: 0.82, autoAlpha: 0 },
        { rotation: 0, xPercent: 0, scale: 1, autoAlpha: 1, duration: 0.95, ease: "expo.out" }, 0.3)
      .to(rangoli, { rotation: `+=${-45 * richtung}`, duration: 1.2, ease: "power3.inOut" }, 0)
      .to(alteZeilen, { y: -14, autoAlpha: 0, duration: 0.26, stagger: 0.03, ease: "power2.in" }, 0)
      .call(textNeu, null, 0.36)
      .add(() => {
        const z = $$(".gericht-name, .gericht-satz, .gericht-handeln, .gericht-herkunft", gerichtEl);
        gsap.fromTo(z, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.05, ease: "expo.out", overwrite: true });
      }, 0.37);
  }

  const mitte = (el) => { const b = el.getBoundingClientRect(); return { x: b.left + b.width / 2, y: b.top + b.height / 2 }; };

  waehler.addEventListener("click", (e) => {
    const t = e.target.closest(".waehler-tab");
    if (t) zeige(+t.dataset.i, mitte($("img", t)));
  });
  // Pfeiltasten im Wähler (Tabs nach WAI-ARIA)
  waehler.addEventListener("keydown", (e) => {
    const d = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (e.key === "Home" || e.key === "End") { e.preventDefault(); const i = e.key === "Home" ? 0 : tabs.length - 1; zeige(i, mitte(tabs[i]), i > akt ? 1 : -1); tabs[i].focus(); return; }
    if (!d) return;
    e.preventDefault();
    const i = (akt + d + tabs.length) % tabs.length;
    zeige(i, mitte(tabs[i]), d);
    tabs[i].focus();
  });
  $$("[data-schritt]", tafel).forEach((b) => b.addEventListener("click", () => {
    const d = +b.dataset.schritt;
    zeige(akt + d, mitte(b), d);
  }));

  /* ── Die Schale zur Seite ziehen ──
     Sie folgt dem Finger mit Widerstand und dreht sich mit; ab einer
     kleinen Strecke (oder mit Schwung) kommt das nächste Gericht. */
  {
    let start = null;
    const mit = !!gsap && !ruhig;   // Schale läuft mit dem Finger mit
    const drehZu = mit ? gsap.quickTo(rangoli, "rotation", { duration: 0.6, ease: "power3.out" }) : () => {};
    let ringBasis = 0;
    tafel.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button") || laeuft) return;
      start = { x: e.clientX, y: e.clientY, t: performance.now(), id: e.pointerId, quer: null };
      ringBasis = mit ? gsap.getProperty(rangoli, "rotation") : 0;
    });
    tafel.addEventListener("pointermove", (e) => {
      if (!start || e.pointerId !== start.id) return;
      const dx = e.clientX - start.x, dy = e.clientY - start.y;
      if (start.quer === null && Math.hypot(dx, dy) > 8) {
        start.quer = Math.abs(dx) > Math.abs(dy);
        if (start.quer) { tafel.setPointerCapture(e.pointerId); tafel.classList.add("is-zieht"); }
      }
      if (!start.quer) return;
      if (mit) gsap.set(schalen[akt], { x: dx * 0.35, rotation: dx * 0.22 });
      drehZu(ringBasis + dx * 0.1);
    });
    const los = (e) => {
      if (!start || e.pointerId !== start.id) return;
      const dx = e.clientX - start.x;
      const v = dx / Math.max(1, performance.now() - start.t);
      const quer = start.quer;
      start = null;
      tafel.classList.remove("is-zieht");
      if (!quer) return;
      const s = schalen[akt];
      if (Math.abs(dx) > 70 || Math.abs(v) > 0.55) {
        const d = dx < 0 ? 1 : -1;
        zeige(akt + d, { x: e.clientX, y: e.clientY }, d);
      } else if (mit) {
        gsap.to(s, { x: 0, rotation: 0, duration: 0.7, ease: "elastic.out(1, 0.55)" });
        drehZu(ringBasis);
      }
    };
    tafel.addEventListener("pointerup", los);
    tafel.addEventListener("pointercancel", los);
  }

  /* ── Hinweis: einmal zeigen, wie es geht ── */
  function hinweisWeg() {
    if (!hinweis) return;
    hinweis.classList.remove("is-da");
    hinweis.classList.add("is-weg");
    speicher.schreib("bombay-hinweis", 1);
  }
  if (hinweis) {
    $("[data-hinweis-text]", hinweis).textContent = fein ? "Klicken Sie ein Gericht an" : "Antippen oder zur Seite wischen";
    if (!speicher.lies("bombay-hinweis", 0)) {
      setTimeout(() => {
        if (gewechselt) return;
        hinweis.classList.add("is-da");
        // das nächste Schälchen nickt einmal kurz
        if (gsap && !ruhig) gsap.fromTo($("img", tabs[1]), { y: 0 }, { y: -7, duration: 0.28, ease: "power2.out", yoyo: true, repeat: 1, delay: 0.6 });
      }, ruhig ? 300 : 2200);
    }
  }

  /* ── Stimmen: seitlich verschieben, mit Pfeilen oder mit der Maus ziehen ── */
  const band = $("[data-stimmen]");
  if (band) {
    const pfeile = $$("[data-stimmen-schritt]");
    const karteBreite = () => { const k = $(".stimme", band); return k ? k.getBoundingClientRect().width + parseFloat(getComputedStyle(band).columnGap || 20) : 320; };
    const stand = () => {
      const max = band.scrollWidth - band.clientWidth - 2;
      pfeile.forEach((b) => (b.disabled = +b.dataset.stimmenSchritt < 0 ? band.scrollLeft <= 2 : band.scrollLeft >= max));
    };
    pfeile.forEach((b) => b.addEventListener("click", () => band.scrollBy({ left: +b.dataset.stimmenSchritt * karteBreite(), behavior: ruhig ? "auto" : "smooth" })));
    band.addEventListener("scroll", stand, { passive: true });
    window.addEventListener("resize", stand);
    stand();
    // Ziehen mit der Maus (Finger scrollen ohnehin nativ)
    let zug = null;
    band.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse" || e.target.closest("a, button")) return;
      zug = { x: e.clientX, l: band.scrollLeft, bewegt: false };
    });
    window.addEventListener("pointermove", (e) => {
      if (!zug) return;
      const dx = e.clientX - zug.x;
      if (!zug.bewegt && Math.abs(dx) > 4) { zug.bewegt = true; band.classList.add("is-zieht"); }
      if (zug.bewegt) band.scrollLeft = zug.l - dx;
    });
    window.addEventListener("pointerup", () => {
      if (!zug) return;
      const war = zug.bewegt; zug = null;
      band.classList.remove("is-zieht");
      if (war) { const k = karteBreite(); band.scrollTo({ left: Math.round(band.scrollLeft / k) * k, behavior: "smooth" }); }
    });
  }

  // Goldsterne setzen sich, sobald sie zu sehen sind
  $$("[data-sterne]").forEach((el) => {
    if (!("IntersectionObserver" in window)) return el.classList.add("is-da");
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { el.classList.add("is-da"); io.disconnect(); } }), { threshold: 0.6 });
    io.observe(el);
  });

  /* ── Auftritt beim Laden ── */
  if (gsap && !ruhig) {
    const titelZeilen = B.zeilen($("[data-intro-titel]"));
    gsap.timeline({ defaults: { ease: "expo.out" } })
      .from(rangoli, { scale: 0.6, rotation: -60, autoAlpha: 0, duration: 1.8 }, 0)
      .from(schalen[0], { scale: 0.7, rotation: -50, autoAlpha: 0, duration: 1.5 }, 0.12)
      .from(titelZeilen, { yPercent: 108, duration: 1.2, stagger: 0.09 }, 0.15)
      .from([".intro-rest", gerichtEl, ".waehler-zeile"], { y: 26, autoAlpha: 0, duration: 1, stagger: 0.1 }, 0.5);
  }

  /* ── Alles unter der Bühne ── */
  if (!gsap || !ST || ruhig) return;

  // Überschriften Zeile für Zeile
  $$("[data-zeilen]").forEach((h) => {
    const z = B.zeilen(h);
    gsap.from(z, { yPercent: 108, duration: 1.2, stagger: 0.08, ease: "expo.out", scrollTrigger: { trigger: h, start: "top 86%" } });
  });
  gsap.set("[data-auf]", { autoAlpha: 0 });
  ST.batch("[data-auf]", {
    start: "top 90%",
    onEnter: (els) => gsap.fromTo(els, { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.08, ease: "expo.out", overwrite: true }),
  });

  // Übergang: die Bühne hebt sich beim Wegscrollen wie eine Karte ab
  // (Ecken unten runden sich, Seiten rücken ein, der Inhalt bleibt etwas zurück)
  const rund = window.innerWidth > 860 ? 48 : 30, ein = window.innerWidth > 860 ? 2.2 : 3;
  gsap.fromTo(buehne, { clipPath: "inset(0% 0% 0% 0% round 0px 0px 0px 0px)" },
    { clipPath: `inset(0% ${ein}% 0% ${ein}% round 0px 0px ${rund}px ${rund}px)`, ease: "none", scrollTrigger: { trigger: buehne, start: "top top", end: "bottom 30%", scrub: true } });
  gsap.to($(".buehne-raster", buehne), { yPercent: 9, ease: "none", scrollTrigger: { trigger: buehne, start: "top top", end: "bottom top", scrub: true } });
  gsap.to($(".rahmen", buehne), { opacity: 0, ease: "none", scrollTrigger: { trigger: buehne, start: "30% top", end: "70% top", scrub: true } });
  // Zweites Ofenbild wandert etwas schneller als das erste
  const ofen2 = $("[data-ofen-bild2]");
  if (ofen2) gsap.fromTo(ofen2, { yPercent: 18 }, { yPercent: -8, ease: "none", scrollTrigger: { trigger: ofen2, start: "top bottom", end: "bottom top", scrub: 1 } });

  // Lehmofen: das Bild dreht sich leicht ins Licht
  const ofenBild = $("[data-ofen-bild] img");
  if (ofenBild) gsap.fromTo(ofenBild, { scale: 1.14, rotation: -7 }, { scale: 1, rotation: 0, ease: "none", scrollTrigger: { trigger: "[data-ofen-bild]", start: "top bottom", end: "bottom 40%", scrub: 1 } });

  // Die Schale am Rand dreht sich beim Vorbeiscrollen ein Stück
  const randSchale = $("[data-rand-schale]");
  if (randSchale) gsap.fromTo(randSchale, { rotation: 40, xPercent: 18 }, { rotation: -25, xPercent: 0, ease: "none", scrollTrigger: { trigger: randSchale.parentElement, start: "top bottom", end: "bottom top", scrub: 1 } });

  // Verzierungen zeichnen sich, wenn sie ins Bild kommen
  $$("[data-zeichnen]").forEach((svg) => {
    const pfade = $$("path:not(.punkte), circle:not(.punkte), line", svg);
    pfade.forEach((p) => { const l = p.getTotalLength ? p.getTotalLength() : 200; p.style.strokeDasharray = l; p.style.strokeDashoffset = l; });
    gsap.to(pfade, { strokeDashoffset: 0, duration: 2.2, stagger: 0.04, ease: "power2.inOut", scrollTrigger: { trigger: svg, start: "top 85%" } });
  });

  /* ── Laternen: echte, freigestellte Laternen aus dem Gastraum ──
     Jede hängt als gedämpftes Pendel (lange Schnüre schwingen langsamer).
     Scrollen, ein vorbeistreifender Zeiger oder ein Tipp stoßen sie an.
     Um jede streuen kleine Lichtpunkte, wie durch das durchbrochene Metall. */
  const laternen = $$("[data-laterne]");
  if (laternen.length) {
    const FARBEN = ["#ffd9a0", "#ffd9a0", "#ffe9c4", "#ff6b5a", "#5aa9ff", "#6fe0a0", "#ffd9a0"];
    let zufall = 7;
    const rnd = () => ((zufall = (zufall * 16807) % 2147483647) / 2147483647);
    laternen.forEach((el) => {
      const img = $("img", el);
      for (let i = 0; i < 26; i++) {
        const f = document.createElement("span");
        f.className = "funke";
        const w = rnd() * Math.PI * 2, r = 0.7 + rnd() * 1.6;
        f.style.cssText = `--s:${(1.5 + rnd() * 2.5).toFixed(1)}px;--f:${FARBEN[(rnd() * FARBEN.length) | 0]};--o:${(0.18 + rnd() * 0.45).toFixed(2)};left:calc(50% + ${Math.cos(w).toFixed(3)} * ${r.toFixed(2)} * var(--b));top:calc(var(--l) + var(--b) * (.6 + ${(Math.sin(w) * r * 0.8).toFixed(3)}))`;
        el.appendChild(f);
      }
      if (img) img.draggable = false;
    });
    // Jede Laterne bekommt ihren eigenen Charakter: Ruhelage (manche hängen
    // deutlich nach rechts geneigt), Dämpfung und einen leisen, unregelmäßigen Luftzug.
    const NEIGUNG = [-3, -8, 2, -11, -5, 4, -7];
    const pendel = laternen.map((el, i) => {
      const ruhe = NEIGUNG[i % NEIGUNG.length] + (rnd() - 0.5) * 2;
      return { el, w: ruhe, v: 0, ruhe, k: 24 / (+el.dataset.laenge + 80), d: 0.022 + rnd() * 0.03,
        f1: 0.00031 + rnd() * 0.0004, f2: 0.00083 + rnd() * 0.0007, p1: rnd() * 6.3, p2: rnd() * 6.3, luft: 0.004 + rnd() * 0.007 };
    });
    // Ab und zu ein Windstoß, der nur einzelne Laternen erwischt
    let naechsterStoss = 2500;
    pendel.forEach((p) => (p.el.style.transform = `rotate(${p.ruhe.toFixed(2)}deg)`));
    const stoss = (p, kraft) => { p.v += kraft; };
    let letzteY = window.scrollY, sicht = false, px = null, pt = 0;
    const band = $("[data-laternen]");
    ST.create({ trigger: band, start: "top bottom", end: "bottom top", onToggle: (s) => (sicht = s.isActive) });
    // Zeiger streift vorbei: Laternen unter dem Zeiger bekommen dessen Schwung
    band.addEventListener("pointermove", (e) => {
      const jetzt = performance.now();
      if (px !== null) {
        const vx = (e.clientX - px) / Math.max(8, jetzt - pt) * 16;
        pendel.forEach((p) => {
          const r = p.el.getBoundingClientRect();
          if (e.clientX > r.left && e.clientX < r.right && e.clientY > r.top + r.height * 0.3 && e.clientY < r.bottom) stoss(p, vx * 0.05);
        });
      }
      px = e.clientX; pt = jetzt;
    });
    band.addEventListener("pointerleave", () => (px = null));
    laternen.forEach((el, i) => el.addEventListener("click", (e) => {
      const r = el.getBoundingClientRect();
      stoss(pendel[i], (e.clientX < r.left + r.width / 2 ? 1 : -1) * 2.4);
    }));
    gsap.ticker.add((zeit, dt) => {
      const y = window.scrollY, dy = y - letzteY;
      letzteY = y;
      if (!sicht) return;
      const t = Math.min(dt, 40) / 16.7;
      if (zeit * 1000 > naechsterStoss) {
        naechsterStoss = zeit * 1000 + 3500 + rnd() * 6000;
        const r = (rnd() - 0.35) * 1.6;
        pendel.forEach((p) => { if (rnd() < 0.45) stoss(p, r * (0.4 + rnd() * 0.8)); });
      }
      const ms = zeit * 1000;
      pendel.forEach((p) => {
        const brise = (Math.sin(ms * p.f1 + p.p1) + 0.6 * Math.sin(ms * p.f2 + p.p2)) * p.luft;
        p.v += (-p.k * 0.06 * (p.w - p.ruhe) - p.d * p.v + dy * 0.012 + brise) * t;
        p.w = Math.max(-22, Math.min(18, p.w + p.v * t));
        p.el.style.transform = `rotate(${p.w.toFixed(2)}deg)`;
      });
    });
  }

  // Gänge: das passende Gericht folgt dem Zeiger
  const gangBild = $("[data-gang-bild]");
  const zurKarte = gangBild && gangBild.closest("section");
  if (gangBild && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const qx = gsap.quickTo(gangBild, "x", { duration: 0.7, ease: "power3.out" });
    const qy = gsap.quickTo(gangBild, "y", { duration: 0.7, ease: "power3.out" });
    zurKarte.addEventListener("pointermove", (e) => {
      const r = zurKarte.getBoundingClientRect();
      qx(e.clientX - r.left - gangBild.offsetWidth * 0.5 + 120);
      qy(e.clientY - r.top - gangBild.offsetHeight * 0.5);
    });
    $$("[data-gaenge] a").forEach((a) => {
      a.addEventListener("pointerenter", () => {
        if (gangBild.getAttribute("src") !== a.dataset.bild) gangBild.src = a.dataset.bild;
        gsap.to(gangBild, { autoAlpha: 1, scale: 1, rotation: gsap.utils.random(-8, 8), duration: 0.6, ease: "expo.out", overwrite: "auto" });
      });
      a.addEventListener("pointerleave", () => gsap.to(gangBild, { autoAlpha: 0, scale: 0.85, duration: 0.35, ease: "power2.in", overwrite: "auto" }));
    });
    gsap.set(gangBild, { scale: 0.85 });
  }

  // Schriften verschieben Zeilen: nach dem Laden neu messen
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ST.refresh());
  window.addEventListener("load", () => ST.refresh());
})();
