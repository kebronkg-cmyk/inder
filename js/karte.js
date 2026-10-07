/* Speisekarte: kompakt und aufklappbar.
   Die Gänge stehen in der Reihenfolge eines Essens (Zum Anfang,
   Hauptgerichte, Dazu, Zum Schluss). Jede Zeile verrät Anzahl, Preis ab
   und ein paar Namen; ein Tipp klappt genau diesen Gang auf und schließt
   den vorigen. Eine Schnellwahl oben springt direkt zum Wunsch, Suche
   und Filter öffnen alles, was passt. */
(function () {
  "use strict";
  const B = window.BOMBAY;
  const { $, $$, euro, esc, ico, speicher, ruhig } = B.u;
  const ROH = window.BOMBAY_KARTE || [];
  // Die einzelne kalte Vorspeise wandert zu den warmen: kein Gang mit nur einem Gericht
  const warm = ROH.find((g) => g.id === "warme-vorspeisen"), kalt = ROH.find((g) => g.id === "kalte-vorspeisen");
  const KARTE = ROH.filter((g) => g !== warm && g !== kalt);
  if (warm) KARTE.unshift({ id: "vorspeisen", titel: "Vorspeisen", hinweis: warm.hinweis, posten: [...warm.posten, ...(kalt ? kalt.posten : [])] });
  const NACH_ID = new Map(KARTE.map((g) => [g.id, g]));
  const liste = $("[data-liste]");
  const schnell = $("[data-schnell]");

  const GRUPPEN = [
    { titel: "Zum Anfang", ids: ["vorspeisen", "suppen", "salate"] },
    { titel: "Hauptgerichte", ids: ["huehnerfleisch-spezialitaeten", "lamm-spezialitaeten", "vegetarische-spezialitaeten", "fisch-spezialitaeten", "enten-spezialitaeten", "tandoori-khajana", "reis-spezialitaeten", "thalis"] },
    { titel: "Dazu", ids: ["tandoori-brot", "beilagen"] },
    { titel: "Zum Schluss", ids: ["nachspeisen", "getraenke", "wein"] },
  ];
  const NAME = {
    "vorspeisen": "Vorspeisen", "suppen": "Suppen", "salate": "Salate",
    "huehnerfleisch-spezialitaeten": "Hähnchen", "lamm-spezialitaeten": "Lamm", "vegetarische-spezialitaeten": "Vegetarisch",
    "fisch-spezialitaeten": "Fisch & Garnelen", "enten-spezialitaeten": "Ente", "tandoori-khajana": "Tandoori aus dem Lehmofen",
    "reis-spezialitaeten": "Biryani & Reis", "thalis": "Thalis", "tandoori-brot": "Naan & Brot", "beilagen": "Raita & Beilagen",
    "nachspeisen": "Nachspeisen", "getraenke": "Getränke", "wein": "Wein",
  };
  const SCHALE = {
    "huehnerfleisch-spezialitaeten": "butter-chicken",
    "vegetarische-spezialitaeten": "karahi-paneer",
    "fisch-spezialitaeten": "jheenga-curry",
  };
  const HAUPT = new Set(GRUPPEN[1].ids);
  const DAZU = ["tandoori-brot", "beilagen", "reis-spezialitaeten"];
  const SCHNELL = [
    ["Curry mit Hähnchen", "huehnerfleisch-spezialitaeten"], ["Etwas Vegetarisches", "vegetarische-spezialitaeten"],
    ["Aus dem Tandoor", "tandoori-khajana"], ["Fisch & Garnelen", "fisch-spezialitaeten"], ["Biryani", "reis-spezialitaeten"],
    ["Naan dazu", "tandoori-brot"], ["Etwas Süßes", "nachspeisen"],
  ];

  let filter = {};   // bewusst nicht gespeichert: die Karte beginnt immer kompakt
  let suche = "";
  let offen = null;              // der eine offene Gang (ohne Suche)
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ß/g, "ss");
  const passt = (p) => {
    if (filter.veg && !p.veg) return false;
    if (filter.vegan && !p.vegan) return false;
    if (filter.scharf && !p.scharf) return false;
    if (!suche) return true;
    const h = norm(`${p.nr} ${p.name} ${p.text}`);
    return norm(suche).split(/\s+/).every((w) => h.includes(w));
  };
  const sucht = () => !!suche || !!(filter.veg || filter.vegan || filter.scharf);

  function tun(p) {
    const n = B.zettel.menge(p.key);
    return n
      ? `<span class="stepper" role="group" aria-label="${esc(p.name)} im Bestellzettel"><button type="button" data-weg="${esc(p.key)}" aria-label="Eins weniger">${ico("minus")}</button><output aria-live="polite">${n}</output><button type="button" data-dazu="${esc(p.key)}" aria-label="Eins mehr">${ico("plus")}</button></span>`
      : `<button type="button" class="plus" data-dazu="${esc(p.key)}" aria-label="${esc(p.name)} zum Bestellzettel">${ico("plus")}</button>`;
  }
  const postenHTML = (p) => `
          <li class="posten">
            <span class="posten-nr">${p.nr || ""}</span>
            <div>
              <h4 class="posten-name">${esc(p.name)}</h4>
              ${p.text ? `<p class="posten-text">${esc(p.text)}</p>` : ""}
              ${p.veg || p.vegan || p.scharf ? `<span class="posten-marken">${p.veg ? '<span class="marke-chip marke-chip--veg">vegetarisch</span>' : ""}${p.vegan ? '<span class="marke-chip marke-chip--veg">vegan möglich</span>' : ""}${p.scharf ? '<span class="marke-chip marke-chip--scharf">scharf</span>' : ""}</span>` : ""}
            </div>
            <span class="posten-preis">${euro(p.preis)}</span>
            <span class="posten-tun" data-tun="${esc(p.key)}">${tun(p)}</span>
          </li>`;

  function gangHTML(g, ps) {
    const preise = ps.map((p) => p.preis).filter(Boolean);
    const ab = preise.length ? Math.min(...preise) : 0;
    const proben = ps.slice(0, 3).map((p) => p.name).join(", ") + (ps.length > 3 ? " …" : "");
    const dazu = HAUPT.has(g.id) && !sucht()
      ? `<p class="dazu-passt"><span>Dazu passt</span>${DAZU.filter((d) => d !== g.id).map((d) => `<button type="button" class="dazu-chip" data-oeffne="${d}">${esc(NAME[d])}</button>`).join("")}</p>` : "";
    return `
      <section class="gang" id="${g.id}" data-gang="${g.id}">
        <h3 class="gang-h">
          <button type="button" class="gang-knopf" aria-expanded="false" aria-controls="p-${g.id}">
            <span class="gang-titel">${esc(NAME[g.id] || g.titel)}</span>
            <span class="gang-proben">${esc(proben)}</span>
            <span class="gang-meta"><span>${ps.length} ${ps.length === 1 ? "Gericht" : g.id === "getraenke" || g.id === "wein" ? "Sorten" : "Gerichte"}</span>${ab ? `<span>ab ${euro(ab)}</span>` : ""}</span>
            ${SCHALE[g.id] ? `<img class="gang-schale" src="img/gerichte/${SCHALE[g.id]}-640.webp" alt="" width="640" height="600" loading="lazy" decoding="async">` : ""}
            <span class="gang-zeichen" aria-hidden="true"><i></i><i></i></span>
          </button>
        </h3>
        <div class="gang-inhalt" id="p-${g.id}" role="region" aria-label="${esc(NAME[g.id] || g.titel)}" inert>
          <div class="gang-innen">
            ${g.hinweis ? `<p class="gang-hinweis">${esc(g.hinweis)}</p>` : ""}
            <ul class="posten-liste" role="list">${ps.map(postenHTML).join("")}</ul>
            ${dazu}
          </div>
        </div>
      </section>`;
  }

  function zeichnen() {
    let html = "", treffer = 0;
    GRUPPEN.forEach((gr) => {
      const gs = gr.ids.map((id) => NACH_ID.get(id)).filter(Boolean).map((g) => ({ g, ps: g.posten.filter(passt) })).filter((x) => x.ps.length);
      if (!gs.length) return;
      treffer += gs.reduce((n, x) => n + x.ps.length, 0);
      html += `<div class="gruppe"><h2 class="gruppe-titel"><svg class="gruppe-bluete" aria-hidden="true"><use href="#i-bluete"/></svg>${esc(gr.titel)}</h2>${gs.map((x) => gangHTML(x.g, x.ps)).join("")}</div>`;
    });
    document.body.classList.toggle("is-suche", sucht());
    if (!html) {
      $("[data-treffer]").textContent = "";
      liste.innerHTML = `<div class="karte-leer"><strong>Nichts gefunden.</strong><p>Versuchen Sie es mit einer Zutat wie „Spinat“ oder „Mango“, mit einer Nummer, oder nehmen Sie einen Filter heraus.</p></div>`;
      return;
    }
    liste.innerHTML = html;
    if (sucht()) $$(".gang", liste).forEach((s) => setzen(s, true, true));
    else if (offen && $(`#${offen}`, liste)) setzen($(`#${offen}`, liste), true, true);
    $("[data-treffer]").textContent = sucht() ? `${treffer} ${treffer === 1 ? "Treffer" : "Treffer"}` : "";
  }

  function setzen(s, auf, sofort) {
    const k = $(".gang-knopf", s), inhalt = $(".gang-inhalt", s);
    if (sofort) s.classList.add("ohne-uebergang");
    s.classList.toggle("is-offen", auf);
    k.setAttribute("aria-expanded", String(auf));
    inhalt.inert = !auf;
    if (sofort) { s.offsetHeight; s.classList.remove("ohne-uebergang"); }
  }
  const scrollJetzt = (dy) => {
    if (!dy) return;
    if (B.lenis) B.lenis.scrollTo(B.lenis.scroll + dy, { immediate: true, force: true });
    else window.scrollBy(0, dy);
  };

  // Einen Gang öffnen; der vorige schließt, ohne dass die Seite springt
  function oeffne(id, scrollen) {
    const s = $(`#${CSS.escape(id)}`, liste);
    if (!s) return;
    if (sucht()) { setzen(s, true); if (scrollen) B.scrollZu(s); return; }
    const k = $(".gang-knopf", s);
    const vorher = k.getBoundingClientRect().top;
    $$(".gang.is-offen", liste).forEach((o) => { if (o !== s) setzen(o, false, true); });
    scrollJetzt(k.getBoundingClientRect().top - vorher);
    setzen(s, true);
    offen = id;
    history.replaceState(null, "", "#" + id);
    k.focus({ preventScroll: true });
    if (scrollen !== false) setTimeout(() => B.scrollZu(s), ruhig ? 0 : 60);
  }
  function schliesse(s) {
    setzen(s, false);
    if (offen === s.id) { offen = null; history.replaceState(null, "", location.pathname); }
  }

  liste.addEventListener("click", (e) => {
    const k = e.target.closest(".gang-knopf");
    if (k) {
      const s = k.closest(".gang");
      if (s.classList.contains("is-offen")) schliesse(s); else oeffne(s.id);
      return;
    }
    const o = e.target.closest("[data-oeffne]");
    if (o) { oeffne(o.dataset.oeffne); return; }
    const plus = e.target.closest("[data-dazu]"), minus = e.target.closest("[data-weg]");
    if (plus) {
      const key = plus.dataset.dazu;
      B.zettel.dazu(key, null, plus);
      const t = $(`[data-tun="${CSS.escape(key)}"] button[data-dazu]`, liste);
      if (t) t.focus();
    } else if (minus) {
      const key = minus.dataset.weg;
      B.zettel.weg(key);
      const t = $(`[data-tun="${CSS.escape(key)}"] button`, liste);
      if (t) t.focus();
    }
  });

  // Nur die betroffenen Knöpfe neu zeichnen, damit nichts springt
  document.addEventListener("zettel", () => {
    $$("[data-tun]", liste).forEach((el) => {
      const p = B.speisen.get(el.dataset.tun);
      const neu = tun(p);
      if (el.innerHTML !== neu) el.innerHTML = neu;
    });
  });

  // Schnellwahl
  schnell.innerHTML = SCHNELL.map(([t, id]) => `<button type="button" class="schnell-chip" data-oeffne="${id}">${esc(t)}</button>`).join("");
  schnell.addEventListener("click", (e) => {
    const b = e.target.closest("[data-oeffne]");
    if (!b) return;
    if (sucht()) {
      suche = ""; $("[data-suche]").value = ""; filter = {};
      $$("[data-filter]").forEach((f) => f.setAttribute("aria-pressed", "false"));
      leerKnopf.hidden = true;
      zeichnen();
    }
    oeffne(b.dataset.oeffne);
  });

  $$("[data-filter]").forEach((b) => {
    b.setAttribute("aria-pressed", String(!!filter[b.dataset.filter]));
    b.addEventListener("click", () => {
      filter[b.dataset.filter] = !filter[b.dataset.filter];
      b.setAttribute("aria-pressed", String(filter[b.dataset.filter]));
      zeichnen();
    });
  });
  let warte;
  const feld = $("[data-suche]");
  const leerKnopf = $("[data-suche-leeren]");
  feld.addEventListener("input", (e) => {
    leerKnopf.hidden = !e.target.value;
    clearTimeout(warte);
    warte = setTimeout(() => { suche = e.target.value.trim(); zeichnen(); }, 120);
  });
  leerKnopf.addEventListener("click", () => { feld.value = ""; leerKnopf.hidden = true; suche = ""; zeichnen(); feld.focus(); });

  // Sprungmarke (#gang-id), etwa von der Startseite
  const ziel = location.hash && decodeURIComponent(location.hash.slice(1));
  if (ziel && NACH_ID.has(ziel)) offen = ziel;
  zeichnen();
  if (offen) setTimeout(() => B.scrollZu($(`#${CSS.escape(offen)}`, liste)), 150);

  // Titel steigt beim Öffnen sanft auf
  const titel = $("[data-titel]");
  if (!ruhig && titel.animate) {
    titel.animate([{ transform: "translateY(30px)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: 1100, easing: "cubic-bezier(.16,1,.3,1)" });
  }
})();
