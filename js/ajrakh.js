/* Entwurf A · Ajrakh — die Lieblinge als Druckbühne.
   Ein Gericht steht groß im Bogenfenster; die Stempelreihe darunter
   wechselt es. Jeder Wechsel wird „aufgedruckt“: das neue Foto öffnet
   sich kreisförmig über dem alten, der Text setzt sich scharf. */
(function () {
  "use strict";
  const B = window.BOMBAY;
  if (!B) return;
  const { $, $$, reduce, euro, esc, ico } = B.util;
  const root = $("[data-lieblinge]");
  const buehne = $("[data-liebling]");
  const reihe = $("[data-stempelreihe]");
  if (!root || !buehne || !reihe) return;

  const ARTEN = { cremig: "cremig, rund", kraeftig: "kräftig, würzig", mild: "mild-würzig" };
  const liste = (window.BOMBAY_LIEBLINGE || []).map((l) => Object.assign({}, l, B.speisen.get(l.nr))).filter((l) => l.name);
  if (!liste.length) return;

  const scharf = {};
  liste.forEach((l) => (scharf[l.nr] = l.nr === "90" ? "sehr scharf" : "pikant"));
  let akt = 0;

  reihe.innerHTML = liste.map((l, i) => `
    <button type="button" class="stempel" role="tab" id="st-${l.nr}" aria-controls="liebling-panel" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-i="${i}">
      <span class="stempel-rund"><img src="img/${l.bild}-${l.bild && ["rogan-josh", "mango-chicken", "karahi-ghosht", "fisch-chili"].includes(l.bild) ? 400 : 480}.webp" alt="" width="66" height="66" loading="lazy"></span>
      <span>${esc(l.name)}</span>
    </button>`).join("");
  buehne.id = "liebling-panel";
  buehne.setAttribute("role", "tabpanel");

  const bildSrc = (l, gross) => {
    const klein = ["rogan-josh", "mango-chicken", "karahi-ghosht", "fisch-chili"].includes(l.bild);
    if (klein) return { src: `img/${l.bild}-400.webp`, srcset: "" };
    return { src: `img/${l.bild}-900.webp`, srcset: `img/${l.bild}-480.webp 480w, img/${l.bild}-900.webp 900w, img/${l.bild}-1400.webp 1400w` };
  };

  function schaerfeHTML(l) {
    return `<div class="schaerfe" role="radiogroup" aria-label="Schärfe für ${esc(l.name)}">
      <span class="schaerfe-label">Wie scharf? Das Bombay würzt jedes Gericht nach Wunsch.</span>
      ${B.SCHAERFE.map((s, i) => `<button type="button" role="radio" aria-checked="${scharf[l.nr] === s}" data-schaerfe="${s}">
        <span class="chilis" aria-hidden="true">${ico("chili").repeat(i + 1)}</span>${s}</button>`).join("")}
    </div>`;
  }

  function textHTML(l) {
    return `
      <h3 class="liebling-name">${esc(l.name)}</h3>
      <ul class="liebling-fakten" role="list">
        <li><span>Herkunft</span>${esc(l.herkunft)}</li>
        <li><span>Zubereitet</span>${l.aus === "Tandoor" ? "im Tandoor" : l.aus === "Karahi" ? "in der Karahi" : "im Topf"}</li>
        <li><span>Charakter</span>${ARTEN[l.art] || "kräftig"}</li>
        ${l.veg ? `<li><span>Ohne Fleisch</span>${l.vegan ? "vegan möglich" : "vegetarisch"}</li>` : ""}
      </ul>
      <p class="liebling-satz">${esc(l.satz)}</p>
      ${schaerfeHTML(l)}
      <div class="liebling-handeln">
        <span class="liebling-preis">${euro(l.preis)}</span>
        <button type="button" class="merk-knopf" data-merken="${l.nr}" data-scharf="${scharf[l.nr]}" aria-pressed="${B.istGemerkt(l.nr)}">${ico(B.istGemerkt(l.nr) ? "haken" : "plus")}<span data-merk-label>${B.istGemerkt(l.nr) ? "Gemerkt" : "Merken"}</span></button>
        <span class="liebling-karte">Nr. ${l.nr} · mit Naan, Reis und Soßen</span>
      </div>`;
  }

  // Grundgerüst einmal bauen, danach nur Bild und Text tauschen
  const l0 = liste[0], s0 = bildSrc(l0);
  buehne.innerHTML = `
    <figure class="liebling-bild">
      <div class="bogen"><img src="${s0.src}" ${s0.srcset ? `srcset="${s0.srcset}" sizes="(min-width: 900px) 36vw, 78vw"` : ""} width="900" height="900" alt="${esc(l0.name)}"></div>
      <span class="liebling-hitze" aria-hidden="true"></span>
    </figure>
    <div class="liebling-text">${textHTML(l0)}</div>`;
  const bogen = $(".bogen", buehne);
  const text = $(".liebling-text", buehne);
  const hitze = (l) => buehne.style.setProperty("--hitze", B.SCHAERFE.indexOf(scharf[l.nr]));
  root.style.setProperty("--farbe", l0.farbe);
  hitze(l0);

  function zeige(i, fokus) {
    if (i === akt) return;
    const richtung = i > akt ? 1 : -1;
    akt = (i + liste.length) % liste.length;
    const l = liste[akt];
    $$(".stempel", reihe).forEach((b, n) => {
      b.setAttribute("aria-selected", String(n === akt));
      b.tabIndex = n === akt ? 0 : -1;
    });
    const tab = $$(".stempel", reihe)[akt];
    if (fokus) tab.focus({ preventScroll: true });
    reihe.scrollTo({ left: tab.offsetLeft - (reihe.clientWidth - tab.offsetWidth) / 2, behavior: reduce ? "auto" : "smooth" });
    root.style.setProperty("--farbe", l.farbe);

    // Neues Foto liegt über dem alten und öffnet sich wie ein Stempelabdruck
    const s = bildSrc(l);
    const neu = new Image();
    neu.className = "neu";
    neu.width = 900; neu.height = 900;
    neu.alt = l.name;
    if (s.srcset) { neu.srcset = s.srcset; neu.sizes = "(min-width: 900px) 36vw, 78vw"; }
    neu.src = s.src;
    const alt = $$("img", bogen);
    bogen.append(neu);
    const fertig = () => alt.forEach((x) => x.remove());
    if (reduce) { fertig(); } else {
      const los = () => neu.animate([
        { clipPath: `circle(0% at ${richtung > 0 ? 70 : 30}% 62%)`, transform: "scale(1.08) rotate(" + richtung * 2 + "deg)" },
        { clipPath: `circle(80% at 50% 55%)`, transform: "none" },
      ], { duration: 820, easing: "cubic-bezier(.23,1,.32,1)" }).onfinish = fertig;
      if (neu.complete) los(); else { neu.onload = los; neu.onerror = fertig; }
    }

    text.innerHTML = textHTML(l);
    hitze(l);
    if (!reduce) {
      text.animate([{ opacity: 0, transform: `translateX(${richtung * 18}px)`, filter: "blur(6px)" }, { opacity: 1, transform: "none", filter: "blur(0)" }], { duration: 520, easing: "cubic-bezier(.23,1,.32,1)" });
    }
  }

  reihe.addEventListener("click", (e) => {
    const b = e.target.closest(".stempel");
    if (b) zeige(+b.dataset.i);
  });
  reihe.addEventListener("keydown", (e) => {
    const d = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (d) { e.preventDefault(); zeige((akt + d + liste.length) % liste.length, true); }
    if (e.key === "Home") { e.preventDefault(); zeige(0, true); }
    if (e.key === "End") { e.preventDefault(); zeige(liste.length - 1, true); }
  });

  buehne.addEventListener("click", (e) => {
    const b = e.target.closest("[data-schaerfe]");
    if (!b) return;
    const l = liste[akt];
    scharf[l.nr] = b.dataset.schaerfe;
    $$("[data-schaerfe]", buehne).forEach((x) => x.setAttribute("aria-checked", String(x === b)));
    const m = $("[data-merken]", buehne);
    m.dataset.scharf = scharf[l.nr];
    hitze(l);
    // Schärfe für ein bereits gemerktes Gericht gleich übernehmen
    if (B.istGemerkt(l.nr)) B.merken(l.nr, scharf[l.nr]);
  });
  // Wischen auf dem Foto
  const bild = $(".liebling-bild", buehne);
  let x0 = null;
  bild.addEventListener("pointerdown", (e) => { x0 = e.clientX; });
  bild.addEventListener("pointerup", (e) => {
    if (x0 === null) return;
    const dx = e.clientX - x0; x0 = null;
    if (Math.abs(dx) > 40) zeige((akt + (dx < 0 ? 1 : -1) + liste.length) % liste.length);
  });
  bild.addEventListener("pointercancel", () => (x0 = null));
})();
