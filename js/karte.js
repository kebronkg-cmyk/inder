/* Speisekarte: alle Gänge untereinander, Suche, Filter und ein
   Plus an jedem Gericht. Die Gänge-Liste steht links (breit) oder
   in einem Blatt hinter einem Knopf (schmal), nie quer im Weg. */
(function () {
  "use strict";
  const B = window.BOMBAY;
  const { $, $$, euro, esc, ico, speicher, ruhig } = B.u;
  const KARTE = window.BOMBAY_KARTE || [];
  const liste = $("[data-liste]");
  const nav = $("[data-gaenge-nav]");
  const blatt = $("[data-gaenge-blatt]");
  const blattListe = $("[data-gaenge-blatt-liste]");
  const blattKnopf = $("[data-gaenge-knopf]");

  // Freigestellte Schalen als stille Begleiter einzelner Gänge
  const SCHALE = {
    "huehnerfleisch-spezialitaeten": "butter-chicken",
    "vegetarische-spezialitaeten": "karahi-paneer",
    "fisch-spezialitaeten": "jheenga-curry",
  };

  let filter = speicher.lies("bombay-filter", {});
  let suche = "";
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ß/g, "ss");
  const passt = (p) => {
    if (filter.veg && !p.veg) return false;
    if (filter.vegan && !p.vegan) return false;
    if (filter.scharf && !p.scharf) return false;
    if (!suche) return true;
    const h = norm(`${p.nr} ${p.name} ${p.text}`);
    return norm(suche).split(/\s+/).every((w) => h.includes(w));
  };

  function tun(p) {
    const n = B.zettel.menge(p.key);
    return n
      ? `<span class="stepper" role="group" aria-label="${esc(p.name)} im Bestellzettel"><button type="button" data-weg="${esc(p.key)}" aria-label="Eins weniger">−</button><output aria-live="polite">${n}</output><button type="button" data-dazu="${esc(p.key)}" aria-label="Eins mehr">+</button></span>`
      : `<button type="button" class="plus" data-dazu="${esc(p.key)}" aria-label="${esc(p.name)} zum Bestellzettel">${ico("plus")}</button>`;
  }

  function zeichnen() {
    const gaenge = KARTE.map((g) => ({ g, ps: g.posten.filter(passt) })).filter((x) => x.ps.length);
    const navHTML = gaenge.map(({ g, ps }) => `<a href="#${g.id}" data-gang="${g.id}"><span>${esc(g.titel)}</span><span class="tab">${ps.length}</span></a>`).join("");
    nav.innerHTML = navHTML;
    blattListe.innerHTML = navHTML;
    if (!gaenge.length) {
      liste.innerHTML = `<div class="karte-leer"><strong>Nichts gefunden.</strong><p>Versuchen Sie es mit einer Zutat wie „Spinat“ oder „Mango“, mit einer Nummer, oder nehmen Sie einen Filter heraus.</p></div>`;
      return;
    }
    liste.innerHTML = gaenge.map(({ g, ps }) => `
      <section class="gang" id="${g.id}" aria-labelledby="h-${g.id}">
        <div class="gang-kopf">
          <h2 id="h-${g.id}">${esc(g.titel)}</h2>
          ${SCHALE[g.id] ? `<img class="gang-schale" src="img/gerichte/${SCHALE[g.id]}-640.webp" alt="" width="640" height="628" loading="lazy">` : "<span></span>"}
          ${g.hinweis ? `<p class="gang-hinweis">${esc(g.hinweis)}</p>` : ""}
        </div>
        <ul class="posten-liste" role="list">${ps.map((p) => `
          <li class="posten">
            <span class="posten-nr">${p.nr || ""}</span>
            <div>
              <h3 class="posten-name">${esc(p.name)}</h3>
              ${p.text ? `<p class="posten-text">${esc(p.text)}</p>` : ""}
              ${p.veg || p.vegan || p.scharf ? `<span class="posten-marken">${p.veg ? '<span class="marke-chip marke-chip--veg">vegetarisch</span>' : ""}${p.vegan ? '<span class="marke-chip marke-chip--veg">vegan möglich</span>' : ""}${p.scharf ? '<span class="marke-chip marke-chip--scharf">scharf</span>' : ""}</span>` : ""}
            </div>
            <span class="posten-preis">${euro(p.preis)}</span>
            <span class="posten-tun" data-tun="${esc(p.key)}">${tun(p)}</span>
          </li>`).join("")}
        </ul>
      </section>`).join("");
    beobachten();
  }

  // Nur die betroffenen Knöpfe neu zeichnen, damit nichts springt
  document.addEventListener("zettel", () => {
    $$("[data-tun]", liste).forEach((el) => {
      const p = B.speisen.get(el.dataset.tun);
      const neu = tun(p);
      if (el.innerHTML !== neu) el.innerHTML = neu;
    });
  });
  liste.addEventListener("click", (e) => {
    const plus = e.target.closest("[data-dazu]"), minus = e.target.closest("[data-weg]");
    if (plus) {
      const k = plus.dataset.dazu;
      B.zettel.dazu(k, null, plus);
      const t = $(`[data-tun="${CSS.escape(k)}"] button[data-dazu]`, liste);
      if (t) t.focus();
    } else if (minus) {
      const k = minus.dataset.weg;
      B.zettel.weg(k);
      const t = $(`[data-tun="${CSS.escape(k)}"] button`, liste);
      if (t) t.focus();
    }
  });

  $$("[data-filter]").forEach((b) => {
    b.setAttribute("aria-pressed", String(!!filter[b.dataset.filter]));
    b.addEventListener("click", () => {
      filter[b.dataset.filter] = !filter[b.dataset.filter];
      b.setAttribute("aria-pressed", String(filter[b.dataset.filter]));
      speicher.schreib("bombay-filter", filter);
      zeichnen();
    });
  });
  let warte;
  $("[data-suche]").addEventListener("input", (e) => {
    clearTimeout(warte);
    warte = setTimeout(() => { suche = e.target.value.trim(); zeichnen(); }, 110);
  });

  // Welcher Gang ist gerade im Blick?
  let io;
  function beobachten() {
    if (io) io.disconnect();
    if (!("IntersectionObserver" in window)) return;
    io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        $$("a", nav).forEach((a) => a.classList.toggle("is-aktiv", a.dataset.gang === e.target.id));
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    $$(".gang", liste).forEach((s) => io.observe(s));
  }

  // Gänge-Blatt auf schmalen Schirmen
  const blattZu = () => { blatt.classList.remove("is-offen"); blattKnopf.setAttribute("aria-expanded", "false"); };
  blattKnopf.addEventListener("click", () => { blatt.classList.add("is-offen"); blattKnopf.setAttribute("aria-expanded", "true"); const a = $("a", blattListe); if (a) a.focus(); });
  $("[data-gaenge-zu]").addEventListener("click", blattZu);
  blattListe.addEventListener("click", (e) => { if (e.target.closest("a")) blattZu(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") blattZu(); });

  zeichnen();

  // Titel steigt beim Öffnen sanft auf
  const titel = $("[data-titel]");
  if (!ruhig && titel.animate) {
    titel.animate([{ transform: "translateY(30px)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: 1100, easing: "cubic-bezier(.16,1,.3,1)" });
  }
  // Sprungmarke aus der Startseite (#gang-id)
  if (location.hash) {
    const ziel = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (ziel) setTimeout(() => B.scrollZu(ziel), 120);
  }
})();
