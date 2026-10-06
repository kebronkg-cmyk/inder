/* ═══════════════════════════════════════════════════════════
   Bombay — gemeinsame Logik beider Entwürfe
   Heute-Status, Öffnungszeiten, Reservier-Assistent,
   Geschmacks-Finder, Speisekarte, Merkzettel, Galerie,
   Scroll-Reveals und der Raum-Fortschritt.
   Kein Backend: Reservierungen und Bestellungen laufen über
   Telefon, E-Mail und den bestehenden Online-Shop.
   ═══════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const BOMBAY = (window.BOMBAY = window.BOMBAY || {});
  const CFG = (BOMBAY.cfg = {
    tel: "+4981614965102",
    telAnzeige: "08161 4965102",
    mail: "arunmunich@yahoo.com",
    shop: "https://www.bombayrestaurant-freising.de/order_type",
  });

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const euro = (n) => n.toFixed(2).replace(".", ",") + " €";
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ico = (id) => `<svg class="ico" aria-hidden="true"><use href="#i-${id}"/></svg>`;
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* privat oder voll */ } },
  };
  BOMBAY.util = { $, $$, reduce, euro, esc, ico };

  document.documentElement.classList.add("js");

  /* ───────────── Zeit in Freising ───────────── */
  const TAGE = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
  const TAGE_KURZ = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
  const MONATE = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
  const RUHETAG = 2; // Dienstag
  const FENSTER = [[11 * 60 + 30, 14 * 60], [17 * 60 + 30, 22 * 60]];
  const hhmm = (m) => String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0");

  function berlinJetzt() {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Berlin", year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).formatToParts(new Date());
    const p = Object.fromEntries(parts.map((x) => [x.type, x.value]));
    // Kalenderdatum als UTC-Mittag, damit Tageswechsel nie an Zeitzonen scheitern
    const datum = new Date(Date.UTC(+p.year, +p.month - 1, +p.day, 12));
    return { datum, wt: datum.getUTCDay(), min: +p.hour * 60 + +p.minute };
  }
  const plusTage = (d, n) => new Date(d.getTime() + n * 864e5);
  const isoTag = (d) => d.toISOString().slice(0, 10);
  const offen = (wt) => wt !== RUHETAG;
  BOMBAY.zeit = { berlinJetzt, TAGE, MONATE, FENSTER, hhmm, offen };

  function statusText() {
    const { wt, min } = berlinJetzt();
    const naechster = () => {
      for (let i = 1; i <= 7; i++) {
        const t = (wt + i) % 7;
        if (offen(t)) return i === 1 ? "morgen ab 11:30" : TAGE[t] + " ab 11:30";
      }
    };
    if (!offen(wt)) return { auf: false, text: "Heute Ruhetag", zusatz: "Wieder " + naechster() };
    const [m, a] = FENSTER;
    if (min < m[0]) return { auf: false, text: "Öffnet heute um 11:30", zusatz: "Mittags bis 14:00, abends 17:30–22:00" };
    if (min < m[1]) return { auf: true, text: "Jetzt geöffnet", zusatz: "Mittagstisch bis 14:00" };
    if (min < a[0]) return { auf: false, text: "Mittagspause", zusatz: "Ab 17:30 wieder für Sie da" };
    if (min < a[1]) return { auf: true, text: "Jetzt geöffnet", zusatz: "Heute bis 22:00" };
    return { auf: false, text: "Für heute geschlossen", zusatz: "Wieder " + naechster() };
  }

  function statusZeigen() {
    const s = statusText();
    $$("[data-status]").forEach((el) => {
      el.classList.toggle("is-open", s.auf);
      el.classList.toggle("is-closed", !s.auf);
      el.innerHTML = `<span class="status-punkt" aria-hidden="true"></span><span class="status-text">${s.text}</span>` +
        (el.hasAttribute("data-status-zusatz") ? `<span class="status-zusatz">${s.zusatz}</span>` : "");
    });
    const heute = berlinJetzt().wt;
    $$("[data-tag]").forEach((tr) => tr.classList.toggle("is-heute", +tr.dataset.tag === heute));
  }
  statusZeigen();
  setInterval(statusZeigen, 60 * 1000);

  /* ───────────── Kopfzeile & Navigation ───────────── */
  const kopf = $("[data-kopf]");
  if (kopf) {
    let letzte = 0;
    const kopfScroll = () => {
      const y = window.scrollY;
      kopf.classList.toggle("is-gescrollt", y > 12);
      kopf.classList.toggle("is-weg", y > 500 && y > letzte && !kopf.classList.contains("is-menu"));
      letzte = y;
    };
    window.addEventListener("scroll", kopfScroll, { passive: true });
    kopfScroll();
  }
  const menuKnopf = $("[data-menu-knopf]");
  if (menuKnopf && kopf) {
    const zu = () => { kopf.classList.remove("is-menu"); menuKnopf.setAttribute("aria-expanded", "false"); document.body.classList.remove("ist-gesperrt"); };
    menuKnopf.addEventListener("click", () => {
      const auf = !kopf.classList.contains("is-menu");
      kopf.classList.toggle("is-menu", auf);
      menuKnopf.setAttribute("aria-expanded", String(auf));
      document.body.classList.toggle("ist-gesperrt", auf);
    });
    $$("[data-nav] a").forEach((a) => a.addEventListener("click", zu));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") zu(); });
  }

  /* ───────────── Scroll-Reveals ───────────── */
  const reveals = $$("[data-reveal]");
  if (reveals.length && "IntersectionObserver" in window && !reduce) {
    document.documentElement.classList.add("js-reveal");
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    }), { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    reveals.forEach((el) => io.observe(el));
  }

  /* ───────────── Scroll-Fortschritt für gepinnte Bühnen ─────────────
     Elemente mit [data-fortschritt] bekommen --p (0…1), solange ihr
     klebender Inhalt durch den Bildschirm wandert. */
  const buehnen = $$("[data-fortschritt]");
  if (buehnen.length) {
    let tick = false;
    const messen = () => {
      tick = false;
      const vh = window.innerHeight;
      buehnen.forEach((el) => {
        const r = el.getBoundingClientRect();
        const lauf = Math.max(1, r.height - vh);
        const p = Math.min(1, Math.max(0, -r.top / lauf));
        el.style.setProperty("--p", reduce ? 1 : p.toFixed(4));
        el.dispatchEvent(new CustomEvent("fortschritt", { detail: p }));
      });
    };
    const anfordern = () => { if (!tick) { tick = true; requestAnimationFrame(messen); } };
    window.addEventListener("scroll", anfordern, { passive: true });
    window.addEventListener("resize", anfordern);
    messen();
  }

  /* ───────────── Speisekarte: Daten ───────────── */
  const KARTE = window.BOMBAY_KARTE || [];
  const SPEISEN = new Map();
  KARTE.forEach((g) => g.posten.forEach((p) => {
    p.key = p.nr || p.name;
    p.gang = g.id;
    p.speise = !["getraenke", "wein"].includes(g.id);
    SPEISEN.set(p.key, p);
  }));
  BOMBAY.speisen = SPEISEN;
  const SCHAERFE = ["mild", "pikant", "scharf", "sehr scharf"];
  BOMBAY.SCHAERFE = SCHAERFE;

  /* ───────────── Merkzettel ───────────── */
  let merk = store.get("bombay-merkzettel", {});
  for (const k of Object.keys(merk)) if (!SPEISEN.has(k)) delete merk[k];

  const lade = document.createElement("div");
  lade.className = "lade";
  lade.innerHTML = `
    <div class="lade-schleier" data-lade-zu></div>
    <section class="lade-panel" role="dialog" aria-modal="true" aria-labelledby="lade-titel" tabindex="-1">
      <header class="lade-kopf"><h2 id="lade-titel">Ihr Merkzettel</h2>
        <button class="lade-zu" type="button" data-lade-zu aria-label="Merkzettel schließen">${ico("zu")}</button></header>
      <ul class="lade-liste" data-lade-liste></ul>
      <footer class="lade-fuss" data-lade-fuss></footer>
    </section>`;
  const fab = document.createElement("button");
  fab.type = "button";
  fab.className = "merk-fab";
  fab.setAttribute("aria-haspopup", "dialog");
  fab.innerHTML = `${ico("schale")}<span>Merkzettel</span><span class="zahl" data-merk-zahl>0</span>`;
  document.body.append(lade, fab);
  const daumen = $(".daumen");
  if (daumen) {
    const d = document.createElement("button");
    d.type = "button";
    d.className = "daumen-merk";
    d.setAttribute("data-merkzettel-oeffnen", "");
    d.innerHTML = `${ico("schale")}<span>Merkzettel</span><span class="daumen-zahl" data-merk-zahl-daumen hidden></span>`;
    daumen.insertBefore(d, daumen.lastElementChild);
  }

  let ladeVorher = null;
  const ladeAuf = () => {
    ladeVorher = document.activeElement;
    ladeZeichnen();
    lade.classList.add("is-offen");
    document.body.classList.add("ist-gesperrt");
    setTimeout(() => $(".lade-panel", lade).focus(), 50);
  };
  const ladeZu = () => {
    if (!lade.classList.contains("is-offen")) return;
    lade.classList.remove("is-offen");
    document.body.classList.remove("ist-gesperrt");
    if (ladeVorher) ladeVorher.focus();
  };
  fab.addEventListener("click", ladeAuf);
  $$("[data-lade-zu]", lade).forEach((b) => b.addEventListener("click", ladeZu));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") ladeZu(); });
  document.addEventListener("click", (e) => { if (e.target.closest("[data-merkzettel-oeffnen]")) ladeAuf(); });
  BOMBAY.merkzettelOeffnen = ladeAuf;

  function merkText() {
    const zeilen = Object.entries(merk).map(([k, v]) => {
      const p = SPEISEN.get(k);
      return `${v.menge} × ${p.nr ? "Nr. " + p.nr + " " : ""}${p.name}${p.speise ? " (" + v.scharf + ")" : ""}`;
    });
    return "Bestellung Restaurant Bombay\n" + zeilen.join("\n");
  }

  function ladeZeichnen() {
    const liste = $("[data-lade-liste]", lade);
    const fuss = $("[data-lade-fuss]", lade);
    const eintraege = Object.entries(merk);
    if (!eintraege.length) {
      liste.innerHTML = `<li class="lade-leer">Noch nichts gemerkt. Tippen Sie in der Karte oder bei den Lieblingsgerichten auf „Merken“. So haben Sie Ihre Auswahl beim Bestellen oder am Telefon parat.</li>`;
      fuss.innerHTML = "";
      return;
    }
    let summe = 0;
    liste.innerHTML = eintraege.map(([k, v]) => {
      const p = SPEISEN.get(k);
      summe += p.preis * v.menge;
      const sel = p.speise ? `<label><span class="sr">Schärfe für ${esc(p.name)}</span><select data-merk-scharf="${esc(k)}">${SCHAERFE.map((s) => `<option${s === v.scharf ? " selected" : ""}>${s}</option>`).join("")}</select></label>` : "<span></span>";
      return `<li>
        <span class="n">${p.nr ? `<small>Nr. ${p.nr}</small>` : ""}${esc(p.name)}</span>
        <span class="tab">${euro(p.preis * v.menge)}</span>
        ${sel}
        <span class="menge"><button type="button" data-merk-minus="${esc(k)}" aria-label="Eins weniger">−</button><output>${v.menge}</output><button type="button" data-merk-plus="${esc(k)}" aria-label="Eins mehr">+</button></span>
      </li>`;
    }).join("");
    fuss.innerHTML = `
      <div class="lade-summe"><span>Summe laut Karte</span><span>${euro(summe)}</span></div>
      <a class="knopf knopf--haupt" href="${CFG.shop}" target="_blank" rel="noopener">${ico("tasche")}Im Online-Shop bestellen</a>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <a class="knopf knopf--linie" href="tel:${CFG.tel}">${ico("telefon")}Anrufen</a>
        <button class="knopf knopf--linie" type="button" data-merk-kopieren>${ico("kopie")}Liste kopieren</button>
      </div>
      <p class="lade-hinweis">Der Merkzettel bleibt auf Ihrem Gerät. Im Shop wählen Sie die Gerichte noch einmal aus, die Nummern helfen beim Finden. Am Telefon einfach vorlesen.</p>`;
  }

  lade.addEventListener("click", (e) => {
    const t = e.target.closest("button");
    if (!t) return;
    if (t.dataset.merkPlus) { merk[t.dataset.merkPlus].menge++; merkSpeichern(); }
    if (t.dataset.merkMinus) {
      const k = t.dataset.merkMinus;
      if (--merk[k].menge <= 0) delete merk[k];
      merkSpeichern();
    }
    if (t.hasAttribute("data-merk-kopieren")) {
      const fertig = () => { t.innerHTML = `${ico("haken")}Kopiert`; setTimeout(() => (t.innerHTML = `${ico("kopie")}Liste kopieren`), 1800); };
      if (navigator.clipboard) navigator.clipboard.writeText(merkText()).then(fertig, () => {});
    }
  });
  lade.addEventListener("change", (e) => {
    const k = e.target.dataset.merkScharf;
    if (k && merk[k]) { merk[k].scharf = e.target.value; store.set("bombay-merkzettel", merk); }
  });

  function merkSpeichern(hupf) {
    store.set("bombay-merkzettel", merk);
    const n = Object.values(merk).reduce((a, v) => a + v.menge, 0);
    $("[data-merk-zahl]").textContent = n;
    const dz = $("[data-merk-zahl-daumen]");
    if (dz) { dz.textContent = n; dz.hidden = n === 0; if (hupf) dz.animate([{ transform: "scale(1.5)" }, { transform: "none" }], { duration: 400, easing: "cubic-bezier(.23,1,.32,1)" }); }
    fab.classList.toggle("is-da", n > 0);
    fab.setAttribute("aria-label", `Merkzettel öffnen, ${n} ${n === 1 ? "Gericht" : "Gerichte"}`);
    if (hupf) { fab.classList.remove("is-hupf"); void fab.offsetWidth; fab.classList.add("is-hupf"); }
    $$("[data-merken]").forEach((b) => {
      const an = !!merk[b.dataset.merken];
      b.setAttribute("aria-pressed", String(an));
      const label = $("[data-merk-label]", b);
      if (label) label.textContent = an ? "Gemerkt" : (b.dataset.merkText || "Merken");
      const use = $("use", b);
      if (use) use.setAttribute("href", an ? "#i-haken" : "#i-plus");
      b.title = an ? "Gemerkt. Noch einmal tippen zum Entfernen." : "";
    });
    if (lade.classList.contains("is-offen")) ladeZeichnen();
  }

  function flug(von) {
    if (reduce || !von || !fab.classList.contains("is-da")) return;
    const a = von.getBoundingClientRect(), b = fab.getBoundingClientRect();
    const dot = document.createElement("span");
    dot.style.cssText = `position:fixed;left:${a.left + a.width / 2 - 7}px;top:${a.top + a.height / 2 - 7}px;width:14px;height:14px;border-radius:50%;background:var(--accent);z-index:120;pointer-events:none`;
    document.body.append(dot);
    const dx = b.left + b.width - 30 - (a.left + a.width / 2), dy = b.top + b.height / 2 - (a.top + a.height / 2);
    dot.animate([
      { transform: "translate(0,0) scale(1)" },
      { transform: `translate(${dx * 0.5}px, ${dy * 0.5 - 90}px) scale(1.2)`, offset: 0.5 },
      { transform: `translate(${dx}px, ${dy}px) scale(.5)`, opacity: 0.6 },
    ], { duration: 650, easing: "cubic-bezier(.5,0,.4,1)" }).onfinish = () => dot.remove();
  }

  BOMBAY.merken = function (key, scharf, quelle) {
    if (!SPEISEN.has(key)) return;
    if (merk[key] && !scharf) delete merk[key];
    else merk[key] = { menge: merk[key] ? merk[key].menge : 1, scharf: scharf || (merk[key] && merk[key].scharf) || "pikant" };
    const neu = !!merk[key];
    merkSpeichern(neu);
    if (neu) requestAnimationFrame(() => flug(quelle));
  };
  BOMBAY.istGemerkt = (k) => !!merk[k];

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-merken]");
    if (!b) return;
    const an = b.getAttribute("aria-pressed") === "true";
    BOMBAY.merken(b.dataset.merken, an ? null : b.dataset.scharf || "pikant", b);
  });
  BOMBAY.merkKnopf = (k, extra = "") =>
    `<button type="button" class="merk-knopf ${extra}" data-merken="${esc(k)}" aria-pressed="${!!merk[k]}">${ico(merk[k] ? "haken" : "plus")}<span data-merk-label>${merk[k] ? "Gemerkt" : "Merken"}</span></button>`;

  /* ───────────── Speisekarte: Darstellung ───────────── */
  const karteEl = $("[data-karte]");
  if (karteEl && KARTE.length) {
    const FILTER = [["veg", "Vegetarisch"], ["vegan", "Vegan möglich"], ["scharf", "Üblich scharf"]];
    let filter = store.get("bombay-filter", {});
    let gang = KARTE[0].id;
    let suche = "";
    const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ß/g, "ss");

    karteEl.innerHTML = `
      <div class="karte-werkzeug">
        <label class="karte-suche">${ico("lupe")}<span class="sr">Speisekarte durchsuchen</span>
          <input type="search" placeholder="Gericht, Zutat oder Nummer, z. B. Paneer" autocomplete="off" enterkeyhint="search" data-karte-suche></label>
        <div class="karte-filter" role="group" aria-label="Filter">${FILTER.map(([k, l]) => `<button type="button" class="karte-chip" data-filter="${k}" aria-pressed="${!!filter[k]}">${l}</button>`).join("")}</div>
        <nav class="karte-gaenge" aria-label="Gänge" data-karte-gaenge></nav>
      </div>
      <p class="karte-zaehler" aria-live="polite" data-karte-zaehler></p>
      <div data-karte-inhalt></div>`;
    const inhalt = $("[data-karte-inhalt]", karteEl);
    const gaenge = $("[data-karte-gaenge]", karteEl);
    const zaehler = $("[data-karte-zaehler]", karteEl);

    const passt = (p) => {
      if (filter.veg && !p.veg) return false;
      if (filter.vegan && !p.vegan) return false;
      if (filter.scharf && !p.scharf) return false;
      if (suche) {
        const h = norm(`${p.nr} ${p.name} ${p.text}`);
        return norm(suche).split(/\s+/).every((w) => h.includes(w));
      }
      return true;
    };
    const postenHTML = (p) => `
      <li class="posten" id="nr-${esc(p.key)}">
        <span class="posten-nr">${p.nr || ""}</span>
        <span><span class="posten-name">${esc(p.name)}</span><span class="posten-tags">${p.veg ? '<span class="tag tag--veg">veg</span>' : ""}${p.vegan ? '<span class="tag tag--vegan">vegan möglich</span>' : ""}${p.scharf ? '<span class="tag tag--scharf">scharf</span>' : ""}</span></span>
        <span class="posten-preis">${euro(p.preis)}</span>
        ${p.text ? `<span class="posten-text">${esc(p.text)}</span>` : '<span class="posten-text"></span>'}
        <span class="posten-merken">${BOMBAY.merkKnopf(p.key)}</span>
      </li>`;

    function zeichnen() {
      const treffer = KARTE.map((g) => ({ g, ps: g.posten.filter(passt) }));
      const gesamt = treffer.reduce((a, t) => a + t.ps.length, 0);
      const aktiv = suche || filter.veg || filter.vegan || filter.scharf;
      gaenge.innerHTML = treffer.filter((t) => t.ps.length || !aktiv).map((t) =>
        `<a href="#gang-${t.g.id}" data-gang="${t.g.id}" class="${!suche && t.g.id === gang ? "is-aktiv" : ""}">${esc(t.g.titel)}${aktiv ? ` <span class="tab">${t.ps.length}</span>` : ""}</a>`).join("");
      if (suche) {
        zaehler.textContent = gesamt ? `${gesamt} ${gesamt === 1 ? "Treffer" : "Treffer"} für „${suche}“` : "";
        inhalt.innerHTML = gesamt ? treffer.filter((t) => t.ps.length).map((t) => gangHTML(t.g, t.ps)).join("")
          : `<p class="karte-leer">Nichts gefunden für „${esc(suche)}“. Versuchen Sie es mit einer Zutat wie „Spinat“ oder einer Nummer.</p>`;
        return;
      }
      let t = treffer.find((x) => x.g.id === gang);
      if (aktiv && (!t || !t.ps.length)) { t = treffer.find((x) => x.ps.length); if (t) gang = t.g.id; }
      zaehler.textContent = aktiv ? `${gesamt} Gerichte passen zu Ihrer Auswahl` : "";
      inhalt.innerHTML = t && t.ps.length ? gangHTML(t.g, t.ps) : `<p class="karte-leer">Keine Gerichte für diese Auswahl.</p>`;
      $$("a", gaenge).forEach((a) => a.classList.toggle("is-aktiv", a.dataset.gang === gang));
    }
    const gangHTML = (g, ps) => `
      <section class="karte-gang" id="gang-${g.id}" aria-labelledby="h-${g.id}">
        <h3 id="h-${g.id}">${esc(g.titel)}</h3>${g.hinweis ? `<p class="hinweis">${esc(g.hinweis)}</p>` : ""}
        <ul class="posten-liste" role="list">${ps.map(postenHTML).join("")}</ul>
      </section>`;

    gaenge.addEventListener("click", (e) => {
      const a = e.target.closest("a[data-gang]");
      if (!a) return;
      e.preventDefault();
      if (suche) { suche = ""; $("[data-karte-suche]", karteEl).value = ""; }
      gang = a.dataset.gang;
      zeichnen();
      gaenge.scrollTo({ left: a.offsetLeft - (gaenge.clientWidth - a.offsetWidth) / 2, behavior: reduce ? "auto" : "smooth" });
      const top = karteEl.getBoundingClientRect().top + window.scrollY - 70;
      if (window.scrollY > top) window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    });
    $$("[data-filter]", karteEl).forEach((b) => b.addEventListener("click", () => {
      filter[b.dataset.filter] = !filter[b.dataset.filter];
      b.setAttribute("aria-pressed", String(filter[b.dataset.filter]));
      store.set("bombay-filter", filter);
      zeichnen();
    }));
    let warte;
    $("[data-karte-suche]", karteEl).addEventListener("input", (e) => {
      clearTimeout(warte);
      warte = setTimeout(() => { suche = e.target.value.trim(); zeichnen(); }, 120);
    });
    BOMBAY.karteZeige = (gangId) => { gang = gangId; suche = ""; zeichnen(); };
    zeichnen();
  }

  /* ───────────── Geschmacks-Finder ───────────── */
  const finderEl = $("[data-finder]");
  if (finderEl) {
    const FRAGEN = [
      { k: "p", f: "Worauf haben Sie Lust?", o: [["huhn", "Hähnchen"], ["lamm", "Lamm"], ["ente", "Ente"], ["meer", "Fisch & Garnelen"], ["veg", "Vegetarisch"]] },
      { k: "art", f: "Wie darf die Soße sein?", o: [["cremig", "Cremig, rund"], ["kraeftig", "Kräftig, würzig"], ["egal", "Überraschen Sie mich"]] },
      { k: "s", f: "Und wie scharf?", o: SCHAERFE.map((s) => [s, s[0].toUpperCase() + s.slice(1)]) },
    ];
    const wahl = {};
    let runde = 0;
    const kandidaten = () => {
      let c = [...SPEISEN.values()].filter((p) => p.p === wahl.p);
      if (wahl.art && wahl.art !== "egal") {
        const enger = c.filter((p) => p.art === wahl.art);
        if (enger.length) c = enger;
      }
      const heiss = wahl.s === "scharf" || wahl.s === "sehr scharf";
      // Fotogerichte sind die Lieblinge des Hauses, sie kommen zuerst
      return c.sort((a, b) => (!!b.bild - !!a.bild) || (heiss ? (!!b.scharf - !!a.scharf) : (!!a.scharf - !!b.scharf)) || (+a.nr - +b.nr));
    };
    function zeichnen() {
      let html = "";
      for (let i = 0; i < FRAGEN.length; i++) {
        const q = FRAGEN[i];
        if (i > 0 && !wahl[FRAGEN[i - 1].k]) break;
        html += `<div class="finder-schritt" role="group" aria-label="${q.f}"><p class="finder-frage">${q.f}</p><div class="finder-optionen">` +
          q.o.map(([v, l]) => `<button type="button" class="finder-opt" data-k="${q.k}" data-v="${v}" aria-pressed="${wahl[q.k] === v}">${l}</button>`).join("") + "</div></div>";
      }
      if (wahl.s) {
        const c = kandidaten();
        const p = c[runde % c.length];
        const alt = c.filter((x) => x !== p).slice(0, 2);
        html += `<div class="finder-ergebnis" aria-live="polite">
          <div class="finder-treffer">
            ${p.bild ? `<img class="finder-bild" src="img/${p.bild}-480.webp" alt="" width="150" height="150" loading="lazy">` : `<span class="finder-ohnebild" aria-hidden="true">${esc(p.name[0])}</span>`}
            <div>
              <p class="finder-name">${esc(p.name)}</p>
              <p>${esc(p.text)}. <span class="tab">Nr. ${p.nr} · ${euro(p.preis)}</span></p>
              <p class="finder-scharf">Bestellen Sie es <b>${wahl.s}</b>, wir würzen genau so.</p>
            </div>
          </div>
          <div class="res-nav">
            <button type="button" class="knopf knopf--haupt" data-merken="${esc(p.key)}" data-scharf="${wahl.s}">${ico("plus")}<span>Auf den Merkzettel</span></button>
            ${c.length > 1 ? `<button type="button" class="knopf knopf--linie" data-finder-neu>${ico("drehen")}Anderer Vorschlag</button>` : ""}
          </div>
          ${alt.length ? `<p class="finder-alt">Passt auch: ${alt.map((a) => `<button type="button" data-finder-nr="${esc(a.key)}">${esc(a.name)}</button>`).join(" oder ")}</p>` : ""}
        </div>`;
      }
      finderEl.innerHTML = `<div class="finder">${html}</div>`;
    }
    finderEl.addEventListener("click", (e) => {
      const o = e.target.closest(".finder-opt");
      if (o) {
        wahl[o.dataset.k] = o.dataset.v;
        runde = 0;
        const idx = FRAGEN.findIndex((q) => q.k === o.dataset.k);
        // eine geänderte frühere Antwort lässt spätere stehen, solange sie passen
        zeichnen();
        const naechste = $$(".finder-schritt", finderEl)[idx + 1] || $(".finder-ergebnis", finderEl);
        if (naechste && !reduce) naechste.animate([{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "none" }], { duration: 420, easing: "cubic-bezier(.23,1,.32,1)" });
        return;
      }
      if (e.target.closest("[data-finder-neu]")) { runde++; zeichnen(); return; }
      const alt = e.target.closest("[data-finder-nr]");
      if (alt) {
        const c = kandidaten();
        runde = c.findIndex((x) => x.key === alt.dataset.finderNr);
        zeichnen();
      }
    });
    zeichnen();
  }

  /* ───────────── Reservier-Assistent ───────────── */
  const resEl = $("[data-reservierung]");
  if (resEl) {
    const r = { personen: null, tag: null, zeit: null, name: "", tel: "", notiz: "" };
    let schritt = 0;
    const SCHRITTE = 4;

    const slots = () => {
      const out = [];
      FENSTER.forEach(([a, b]) => { for (let m = a; m <= b - 30; m += 30) out.push(m); });
      return out;
    };
    const tagFrei = (d) => {
      if (!offen(d.getUTCDay())) return false;
      const j = berlinJetzt();
      if (isoTag(d) !== isoTag(j.datum)) return true;
      return slots().some((m) => m > j.min + 30);
    };
    const tagLang = (iso) => {
      const d = new Date(iso + "T12:00:00Z");
      return `${TAGE[d.getUTCDay()]}, ${d.getUTCDate()}. ${MONATE[d.getUTCMonth()]}`;
    };
    const zusammenfassung = () => `${tagLang(r.tag)} · ${hhmm(r.zeit)} Uhr · ${r.personen} ${r.personen === 1 ? "Person" : "Personen"}`;

    function zeichnen(richtung) {
      const fort = `<ol class="res-schritte" aria-hidden="true">${Array.from({ length: SCHRITTE }, (_, i) => `<li class="${i < schritt ? "is-done" : i === schritt ? "is-now" : ""}"></li>`).join("")}</ol>`;
      let html = "";
      if (schritt === 0) {
        html = `<p class="res-frage" id="res-f">Für wie viele Personen?</p>
          <div class="res-chips" role="group" aria-labelledby="res-f">${[1, 2, 3, 4, 5, 6, 7, 8].map((n) => `<button type="button" class="res-chip" data-personen="${n}" aria-pressed="${r.personen === n}">${n}</button>`).join("")}
          <button type="button" class="res-chip" data-personen="9" aria-pressed="${r.personen >= 9}">9 und mehr</button></div>
          ${r.personen >= 9 ? `<p class="res-hinweis">Für Gruppen ab 9 Personen sprechen wir das Menü gern vorab mit Ihnen ab. Rufen Sie am besten direkt an: <a href="tel:${CFG.tel}">${CFG.telAnzeige}</a>.</p>` : ""}`;
      } else if (schritt === 1) {
        const j = berlinJetzt();
        const tage = Array.from({ length: 21 }, (_, i) => plusTage(j.datum, i));
        html = `<p class="res-frage" id="res-f">An welchem Tag?</p>
          <div class="res-tage" role="group" aria-labelledby="res-f">${tage.map((d, i) => {
            const iso = isoTag(d), frei = tagFrei(d), ruhe = !offen(d.getUTCDay());
            const kopf = i === 0 ? "Heute" : i === 1 ? "Morgen" : TAGE_KURZ[d.getUTCDay()];
            return `<button type="button" class="res-chip res-tag" data-tag-iso="${iso}" aria-pressed="${r.tag === iso}" ${frei ? "" : "disabled"} aria-label="${tagLang(iso)}${ruhe ? ", Ruhetag" : frei ? "" : ", keine Zeiten mehr frei"}">
              <small>${kopf}</small><b>${d.getUTCDate()}.</b><small>${ruhe ? "Ruhetag" : MONATE[d.getUTCMonth()].slice(0, 3)}</small></button>`;
          }).join("")}</div>
          <p class="res-hinweis">Dienstags ist Ruhetag.</p>`;
      } else if (schritt === 2) {
        const j = berlinJetzt();
        const heute = r.tag === isoTag(j.datum);
        const knopf = (m) => {
          const vorbei = heute && m <= j.min + 30;
          return `<button type="button" class="res-chip" data-zeit="${m}" aria-pressed="${r.zeit === m}" ${vorbei ? "disabled" : ""}>${hhmm(m)}</button>`;
        };
        const s = slots();
        html = `<p class="res-frage" id="res-f">Um wie viel Uhr? <span class="res-hinweis" style="font-family:var(--font-body);font-size:1rem">${tagLang(r.tag)}</span></p>
          <p class="res-gruppe">Mittags</p><div class="res-chips" role="group" aria-label="Mittags">${s.filter((m) => m < 15 * 60).map(knopf).join("")}</div>
          <p class="res-gruppe">Abends</p><div class="res-chips" role="group" aria-label="Abends">${s.filter((m) => m > 15 * 60).map(knopf).join("")}</div>`;
      } else if (schritt === 3) {
        html = `<p class="res-frage">Auf welchen Namen?</p>
          <label class="res-feld"><span>Name</span><input name="name" autocomplete="name" required value="${esc(r.name)}" placeholder="Vor- und Nachname"></label>
          <label class="res-feld"><span>Telefon für Rückfragen <small>(optional)</small></span><input name="tel" type="tel" autocomplete="tel" inputmode="tel" value="${esc(r.tel)}" placeholder="z. B. 0170 1234567"></label>
          <label class="res-feld"><span>Anmerkung <small>(optional)</small></span><textarea name="notiz" placeholder="Kinderstuhl, Terrasse, Geburtstag …">${esc(r.notiz)}</textarea></label>
          <p class="res-fehler" role="alert" data-res-fehler></p>`;
      } else {
        const body = `Guten Tag,\n\nich möchte gern einen Tisch reservieren:\n\n${zusammenfassung()}\nName: ${r.name}${r.tel ? "\nTelefon: " + r.tel : ""}${r.notiz ? "\nAnmerkung: " + r.notiz : ""}\n\nBitte bestätigen Sie mir die Reservierung.\n\nVielen Dank!`;
        const mail = `mailto:${CFG.mail}?subject=${encodeURIComponent("Reservierungsanfrage " + zusammenfassung())}&body=${encodeURIComponent(body)}`;
        html = `<p class="res-frage">Fast geschafft, ${esc(r.name.split(" ")[0])}.</p>
          <div class="res-zusammen"><strong>${hhmm(r.zeit)} Uhr</strong><span>${tagLang(r.tag)}</span><span>${r.personen} ${r.personen === 1 ? "Person" : "Personen"} · ${esc(r.name)}</span>${r.notiz ? `<span class="res-hinweis">${esc(r.notiz)}</span>` : ""}</div>
          <div class="res-nav">
            <a class="knopf knopf--haupt" href="tel:${CFG.tel}">${ico("telefon")}Anrufen und bestätigen</a>
            <a class="knopf knopf--linie" href="${mail}">${ico("brief")}Als E-Mail senden</a>
          </div>
          <p class="res-hinweis">Ihr Tisch ist reserviert, sobald wir zugesagt haben: am Telefon sofort, per E-Mail mit unserer Antwort. Telefon ${CFG.telAnzeige}.</p>`;
      }
      const weiter = schritt < 3 ? "" : schritt === 3 ? `<button type="submit" class="knopf knopf--haupt">Weiter zur Übersicht ${ico("pfeil")}</button>` : "";
      resEl.innerHTML = `<form class="res" novalidate>${fort}<div class="res-schritt" ${richtung === -1 ? 'style="animation-name:schritt-zurueck"' : ""}>${html}</div>
        <div class="res-nav">${weiter}${schritt > 0 ? `<button type="button" class="res-zurueck" data-res-zurueck>Zurück</button>` : ""}</div></form>`;
    }
    const geh = (n) => {
      const r0 = schritt; schritt = n; zeichnen(n < r0 ? -1 : 1);
      const ziel = $(".res-frage", resEl);
      if (ziel) { ziel.setAttribute("tabindex", "-1"); ziel.focus({ preventScroll: true }); }
    };
    resEl.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b || b.disabled) return;
      if (b.dataset.personen) {
        r.personen = +b.dataset.personen;
        if (r.personen >= 9) { zeichnen(); return; }
        setTimeout(() => geh(1), 160);
      } else if (b.dataset.tagIso) {
        if (r.tag !== b.dataset.tagIso) r.zeit = null;
        r.tag = b.dataset.tagIso; setTimeout(() => geh(2), 160);
      } else if (b.dataset.zeit) {
        r.zeit = +b.dataset.zeit; setTimeout(() => geh(3), 160);
      } else if (b.hasAttribute("data-res-zurueck")) {
        geh(Math.max(0, schritt - 1));
      }
      if (b.dataset.personen || b.dataset.tagIso || b.dataset.zeit) {
        $$("[aria-pressed]", b.parentElement).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      }
    });
    resEl.addEventListener("input", (e) => { if (e.target.name) r[e.target.name] = e.target.value; });
    resEl.addEventListener("submit", (e) => {
      e.preventDefault();
      if (schritt !== 3) return;
      const f = $("[data-res-fehler]", resEl);
      if (r.name.trim().length < 2) { f.textContent = "Bitte geben Sie einen Namen an, damit wir den Tisch zuordnen können."; $("input[name=name]", resEl).focus(); return; }
      if (r.tel && r.tel.replace(/\D/g, "").length < 6) { f.textContent = "Die Telefonnummer scheint unvollständig. Lassen Sie das Feld leer oder ergänzen Sie sie."; $("input[name=tel]", resEl).focus(); return; }
      r.name = r.name.trim();
      geh(4);
    });
    zeichnen();
  }

  /* ───────────── Galerie-Großansicht ───────────── */
  const galerie = $$("[data-gross]");
  if (galerie.length) {
    const box = document.createElement("div");
    box.className = "ansicht";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "Foto");
    box.innerHTML = `<figure><img alt=""><figcaption></figcaption></figure>
      <button type="button" class="zu" aria-label="Schließen">${ico("zu")}</button>
      <button type="button" class="vor" aria-label="Vorheriges Foto">${ico("links")}</button>
      <button type="button" class="nach" aria-label="Nächstes Foto">${ico("rechts")}</button>`;
    document.body.append(box);
    const img = $("img", box), cap = $("figcaption", box);
    let i = 0, vorher = null;
    const zeig = (n) => {
      i = (n + galerie.length) % galerie.length;
      const b = galerie[i], bi = $("img", b);
      img.src = b.dataset.gross; img.alt = bi ? bi.alt : "";
      cap.textContent = b.dataset.titel || (bi ? bi.alt : "");
    };
    const auf = (n) => { vorher = document.activeElement; zeig(n); box.classList.add("is-offen"); document.body.classList.add("ist-gesperrt"); $(".zu", box).focus(); };
    const zu = () => { box.classList.remove("is-offen"); document.body.classList.remove("ist-gesperrt"); if (vorher) vorher.focus(); };
    galerie.forEach((b, n) => b.addEventListener("click", () => auf(n)));
    $(".zu", box).addEventListener("click", zu);
    $(".vor", box).addEventListener("click", () => zeig(i - 1));
    $(".nach", box).addEventListener("click", () => zeig(i + 1));
    box.addEventListener("click", (e) => { if (e.target === box) zu(); });
    document.addEventListener("keydown", (e) => {
      if (!box.classList.contains("is-offen")) return;
      if (e.key === "Escape") zu();
      if (e.key === "ArrowLeft") zeig(i - 1);
      if (e.key === "ArrowRight") zeig(i + 1);
    });
  }

  $$("[data-jahr]").forEach((el) => (el.textContent = new Date().getFullYear()));
  merkSpeichern();
})();
