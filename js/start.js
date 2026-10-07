/* ═══════════════════════════════════════════════════════════
   Startseite — die Bühne
   Eine Scheibe trägt das erste Gericht. Beim Scrollen flutet sie
   den Bildschirm; die Schale bleibt, die Welt wechselt die Farbe.
   Jede Station rastet ein, damit man nie zwischen zwei Gerichten
   hängen bleibt.
   ═══════════════════════════════════════════════════════════ */
(function () {
  "use strict";
  const B = window.BOMBAY;
  const { $, $$, ruhig, euro, esc, ico } = B.u;
  const gsap = window.gsap, ST = window.ScrollTrigger;

  const GERICHTE = [
    { nr: "109", bild: "karahi-paneer", farbe: "#0d5a60", ton: "hell", herkunft: "Nordindien",
      satz: "Hausgemachter Käse, in der Karahi gebraten und in ihr serviert, in kräftiger Currysoße." },
    { nr: "108", bild: "dal-makhni", farbe: "#f3a11b", ton: "dunkel", herkunft: "Punjab",
      satz: "Gelbe Linsen, langsam gegart, mit Butter nach ayurvedischer Art. Auf Wunsch vegan." },
    { nr: "92", bild: "jheenga-curry", farbe: "#2c6b45", ton: "hell", herkunft: "Westküste",
      satz: "Riesengarnelen ohne Schale in Currysoße mit feinen Gewürzen, wie an der Küste bei Bombay." },
    { nr: "57", bild: "butter-chicken", farbe: "#d42f73", ton: "hell", herkunft: "Delhi",
      satz: "Zartes Huhn in einer samtigen Soße aus Butter und Tomate. In Delhi erfunden, heute das bekannteste Curry Nordindiens." },
  ].map((g) => Object.assign(g, B.speisen.get(g.nr)));

  const buehne = $("[data-buehne]");
  const flaeche = $(".buehne-flaeche", buehne);
  const flut = $("[data-flut]");
  const intro = $("[data-intro]");
  const teller = $("[data-teller]");
  const dreh = $("[data-teller-dreh]");
  const schalen = $$(".schale", teller);
  const gerichteEl = $("[data-gerichte]");
  const leiste = $("[data-leiste]");

  /* ── Texte der Gerichte ── */
  gerichteEl.innerHTML = GERICHTE.map((g, i) => `
    <article class="gericht" data-i="${i}" data-ton="${g.ton}" aria-labelledby="g-${g.nr}">
      <h2 class="gericht-name" id="g-${g.nr}">${esc(g.name)}</h2>
      <p class="gericht-satz">${esc(g.satz)}</p>
      <div class="gericht-handeln">
        <span class="gericht-preis tab">${euro(g.preis)}</span>
        <button type="button" class="pille pille--hell" data-dazu="${g.nr}" aria-pressed="false">${ico("plus")}<span>Auf den Bestellzettel</span></button>
      </div>
      <p class="gericht-herkunft"><span class="tab">Nr. ${g.nr}</span> · ${esc(g.herkunft)}</p>
    </article>`).join("");
  leiste.innerHTML = GERICHTE.map((g) => `<li>${esc(g.name)}</li>`).join("");
  const artikel = $$(".gericht", gerichteEl);
  const leisteLi = $$("li", leiste);

  gerichteEl.addEventListener("click", (e) => {
    const b = e.target.closest("[data-dazu]");
    if (b) B.zettel.dazu(b.dataset.dazu, null, b);
  });
  function knopfStand() {
    $$("[data-dazu]", gerichteEl).forEach((b) => {
      const n = B.zettel.menge(b.dataset.dazu);
      b.setAttribute("aria-pressed", String(n > 0));
      b.innerHTML = n ? `${ico("haken")}<span>Im Bestellzettel · ${n}</span>` : `${ico("plus")}<span>Auf den Bestellzettel</span>`;
      b.setAttribute("aria-label", n ? `${b.closest(".gericht").querySelector(".gericht-name").textContent} noch einmal hinzufügen, ${n} im Bestellzettel` : "");
    });
  }
  document.addEventListener("zettel", knopfStand);
  knopfStand();

  /* Ohne Bewegung: alles ruhig untereinander */
  if (ruhig || !gsap || !ST) {
    buehne.classList.add("ohne-bewegung");
    $$("[data-ofen-bild] img, [data-raum-fenster] img").forEach((i) => (i.style.transform = "none"));
    return;
  }
  gsap.registerPlugin(ST);

  /* ── Geometrie, je nach Bildschirm ── */
  function geo() {
    const W = flaeche.clientWidth, H = flaeche.clientHeight, schmal = W < 861;
    let g;
    if (schmal) {
      // Die Schale füllt genau den Raum zwischen Kopfzeile und dem höchsten Gerichtstext
      const oben = B.kopf ? B.kopf.offsetHeight : 64;
      const unten = Math.min(...artikel.map((a) => a.offsetTop)) || H * 0.62;
      const T = Math.max(160, Math.min(W * 0.96, (unten - oben) * 0.94));
      g = { cx: W * 0.66, cy: H * 0.3, r: Math.min(W * 0.44, H * 0.23), sx: W * 0.5, sy: (oben + unten) / 2, T };
    } else {
      // Die Scheibe läuft rechts aus dem Bild
      g = { cx: W * 0.765, cy: H * 0.53, r: Math.min(H * 0.43, W * 0.29), sx: W * 0.7, sy: H * 0.5, T: Math.min(H * 0.8, W * 0.45) };
    }
    g.T0 = g.r * 2 * (schmal ? 0.94 : 0.84);
    g.R = Math.hypot(Math.max(g.cx, W - g.cx), Math.max(g.cy, H - g.cy)) + 20;
    g.W = W; g.H = H;
    return g;
  }
  let G = geo();
  const kreis = (r) => `circle(${r}px at ${G.cx}px ${G.cy}px)`;

  function legen() {
    G = geo();
    gsap.set(teller, { width: G.T, xPercent: -50, yPercent: -50 });
  }
  legen();

  /* ── Auftritt beim Laden ── */
  const titelZeilen = B.zeilen($("[data-intro-titel]"));
  const introRest = [$(".intro-unter", intro), $(".intro-handeln", intro), $(".intro-status", intro)];
  gsap.set(flut, { clipPath: kreis(G.r) });
  gsap.set(teller, { x: G.cx, y: G.cy, scale: G.T0 / G.T });
  const auftritt = gsap.timeline({ defaults: { ease: "expo.out" } });
  auftritt
    .from(flut, { scale: 0, transformOrigin: () => `${G.cx}px ${G.cy}px`, duration: 1.5 }, 0)
    .from(dreh, { rotation: -140, scale: 0.55, autoAlpha: 0, duration: 1.9 }, 0.12)
    .from(titelZeilen, { yPercent: 108, duration: 1.2, stagger: 0.09 }, 0.2)
    .from(introRest, { y: 24, autoAlpha: 0, duration: 1, stagger: 0.08 }, 0.55);
  // Die Schale dreht sich langsam weiter, wie auf einer Drehplatte
  gsap.to(dreh, { rotation: "+=360", duration: 160, ease: "none", repeat: -1, delay: 2 });

  // Feine Mausparallaxe: die Schale folgt dem Zeiger ein wenig
  if (window.matchMedia("(pointer: fine)").matches) {
    const qx = gsap.quickTo(dreh, "x", { duration: 1.2, ease: "power3.out" });
    const qy = gsap.quickTo(dreh, "y", { duration: 1.2, ease: "power3.out" });
    flaeche.addEventListener("pointermove", (e) => {
      const r = flaeche.getBoundingClientRect();
      qx(((e.clientX - r.left) / r.width - 0.5) * 26);
      qy(((e.clientY - r.top) / r.height - 0.5) * 20);
    });
  }

  /* ── Die Bühne beim Scrollen ── */
  const zeilenJe = artikel.map((a) => B.zeilen($(".gericht-name", a)));
  const restJe = artikel.map((a) => [$(".gericht-satz", a), $(".gericht-handeln", a), $(".gericht-herkunft", a)]);
  gsap.set(artikel, { autoAlpha: 0 });
  gsap.set(schalen.slice(1), { autoAlpha: 0 });

  const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
  tl.addLabel("start", 0);

  // 1 · Flut: die Scheibe füllt den Bildschirm, das Intro tritt ab
  tl.to(flut, { clipPath: () => kreis(G.R), duration: 1, ease: "power2.in" }, 0)
    .to(intro, { y: -70, autoAlpha: 0, duration: 0.5, ease: "power2.in" }, 0)
    .to(teller, { x: () => G.sx, y: () => G.sy, scale: 1, duration: 1, ease: "power3.inOut" }, 0)
    .set(artikel[0], { autoAlpha: 1 }, 0.55)
    .from(zeilenJe[0], { yPercent: 110, duration: 0.5, stagger: 0.05, ease: "power3.out" }, 0.55)
    .from(restJe[0], { y: 30, autoAlpha: 0, duration: 0.45, stagger: 0.05, ease: "power3.out" }, 0.65)
    .fromTo(leiste, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.4 }, 0.7)
    .addLabel("g0", 1.2);

  // 2 · Wechsel von Gericht zu Gericht
  let t = 1.2;
  for (let i = 0; i < GERICHTE.length - 1; i++) {
    const a = i, b = i + 1, s = t + 0.5;
    tl.to(flut, { backgroundColor: GERICHTE[b].farbe, duration: 1, ease: "power1.inOut" }, s)
      .to(schalen[a], { rotation: 55, scale: 0.55, autoAlpha: 0, duration: 0.6, ease: "power2.in" }, s)
      .fromTo(schalen[b], { rotation: -75, scale: 1.3, autoAlpha: 0 }, { rotation: 0, scale: 1, autoAlpha: 1, duration: 0.75, ease: "power3.out" }, s + 0.35)
      .to(zeilenJe[a], { yPercent: -110, duration: 0.4, stagger: 0.03, ease: "power2.in" }, s)
      .to(restJe[a], { y: -24, autoAlpha: 0, duration: 0.35, stagger: 0.03, ease: "power2.in" }, s)
      .set(artikel[a], { autoAlpha: 0 }, s + 0.45)
      .set(artikel[b], { autoAlpha: 1 }, s + 0.45)
      .from(zeilenJe[b], { yPercent: 110, duration: 0.55, stagger: 0.05, ease: "power3.out" }, s + 0.45)
      .from(restJe[b], { y: 30, autoAlpha: 0, duration: 0.45, stagger: 0.05, ease: "power3.out" }, s + 0.55);
    t = s + 1.1;
    tl.addLabel("g" + b, t);
  }
  tl.to({}, { duration: 0.6 }); // kurzes Verweilen beim letzten Gericht

  const labels = ["start", ...GERICHTE.map((_, i) => "g" + i)].map((l) => tl.labels[l] / tl.duration());
  ST.create({
    animation: tl,
    trigger: buehne,
    start: "top top",
    end: () => "+=" + Math.round(G.H * 5.2),
    pin: flaeche,
    scrub: 0.9,
    invalidateOnRefresh: true,
    snap: { snapTo: labels, duration: { min: 0.35, max: 0.9 }, delay: 0.08, ease: "power2.inOut" },
    onRefreshInit: legen,
    onUpdate: (self) => buehnenStand(self.progress),
    onToggle: (self) => {
      if (self.isActive) B.kopf.dataset.buehne = "1";
      else delete B.kopf.dataset.buehne;
      buehnenStand(self.progress);
      window.dispatchEvent(new Event("scroll"));
    },
  });

  // Welches Gericht ist gerade dran? Färbt Kopf und Leiste passend
  function buehnenStand(p) {
    const zeit = p * tl.duration();
    const geflutet = zeit > 0.45;
    let akt = 0;
    GERICHTE.forEach((_, i) => { if (zeit >= tl.labels["g" + i] - 0.55) akt = i; });
    const ton = geflutet ? GERICHTE[akt].ton : "weiss";
    B.kopf.classList.toggle("is-hell", geflutet && ton === "hell" && !!B.kopf.dataset.buehne);
    leiste.dataset.ton = ton === "dunkel" ? "dunkel" : "hell";
    leisteLi.forEach((li, i) => {
      li.classList.toggle("is-aktiv", i === akt);
      const a = tl.labels["g" + i], von = i === 0 ? 0.6 : tl.labels["g" + (i - 1)];
      li.style.setProperty("--f", Math.max(0, Math.min(1, (zeit - von) / (a - von))).toFixed(3));
    });
  }
  buehnenStand(0);

  /* ── Überschriften Zeile für Zeile ── */
  $$("[data-zeilen]").forEach((h) => {
    const z = B.zeilen(h);
    gsap.from(z, { yPercent: 108, duration: 1.2, stagger: 0.08, ease: "expo.out", scrollTrigger: { trigger: h, start: "top 86%" } });
  });
  ST.batch("[data-auf]", {
    start: "top 90%",
    onEnter: (els) => gsap.fromTo(els, { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.08, ease: "expo.out", overwrite: true }),
  });
  gsap.set("[data-auf]", { autoAlpha: 0 });

  /* ── Lehmofen: das Bild dreht sich leicht ins Licht ── */
  const ofenBild = $("[data-ofen-bild] img");
  gsap.fromTo(ofenBild, { scale: 1.14, rotation: -7 }, { scale: 1, rotation: 0, ease: "none", scrollTrigger: { trigger: "[data-ofen-bild]", start: "top bottom", end: "bottom 40%", scrub: 1 } });

  /* ── Raum: das Fenster öffnet sich ── */
  const fenster = $("[data-raum-fenster]");
  const rund = window.innerWidth > 860 ? 28 : 0;
  gsap.fromTo(fenster, { clipPath: `inset(16% 12% 16% 12% round ${rund + 40}px)` }, { clipPath: `inset(0% 0% 0% 0% round ${rund}px)`, ease: "none", scrollTrigger: { trigger: fenster, start: "top 95%", end: "top 15%", scrub: 1 } });
  gsap.fromTo($("img", fenster), { scale: 1.28, yPercent: -6 }, { scale: 1, yPercent: 4, ease: "none", scrollTrigger: { trigger: fenster, start: "top bottom", end: "bottom top", scrub: 1 } });

  /* ── Gänge: das passende Gericht folgt dem Zeiger ── */
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
