/* ═══════════════════════════════════════════════════════════
   Bombay Freising — gemeinsame Logik
   Zeit in Freising, Kopfzeile, Menü, weiches Scrollen (Lenis),
   Zeilen-Enthüllung, Bestellzettel mit WhatsApp-Nachricht.
   ═══════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const B = (window.BOMBAY = window.BOMBAY || {});
  const CFG = (B.cfg = {
    tel: "+4981614965102",
    telAnzeige: "08161 4965102",
    // WhatsApp-Nummer des Restaurants. Vor dem Livegang bestätigen lassen
    // (Festnetznummern funktionieren nur mit WhatsApp Business).
    whatsapp: "4981614965102",
    mail: "arunmunich@yahoo.com",
  });

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const euro = (n) => n.toFixed(2).replace(".", ",") + " €";
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ico = (id) => `<svg class="ico" aria-hidden="true"><use href="#i-${id}"/></svg>`;
  const speicher = {
    lies(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    schreib(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* privat */ } },
  };
  B.u = { $, $$, ruhig, euro, esc, ico, speicher };
  document.documentElement.classList.add("js");

  /* ───────────── Zeit in Freising ───────────── */
  const TAGE = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
  const MONATE = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
  const FENSTER = [[11 * 60 + 30, 14 * 60], [17 * 60 + 30, 22 * 60]];
  const offen = (wt) => wt !== 2; // Dienstag Ruhetag
  const hhmm = (m) => String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0");
  function jetzt() {
    const p = Object.fromEntries(new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Berlin", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).formatToParts(new Date()).map((x) => [x.type, x.value]));
    const datum = new Date(Date.UTC(+p.year, +p.month - 1, +p.day, 12));
    return { datum, wt: datum.getUTCDay(), min: +p.hour * 60 + +p.minute };
  }
  B.zeit = { TAGE, MONATE, FENSTER, offen, hhmm, jetzt };

  function status() {
    const { wt, min } = jetzt();
    const naechster = () => {
      for (let i = 1; i <= 7; i++) { const t = (wt + i) % 7; if (offen(t)) return i === 1 ? "morgen ab 11:30" : TAGE[t] + " ab 11:30"; }
    };
    if (!offen(wt)) return { auf: false, kurz: "Heute Ruhetag", lang: "Heute Ruhetag, wieder " + naechster() };
    const [m, a] = FENSTER;
    if (min < m[0]) return { auf: false, kurz: "Ab 11:30 geöffnet", lang: "Heute ab 11:30 geöffnet" };
    if (min < m[1]) return { auf: true, kurz: "Geöffnet bis 14:00", lang: "Jetzt geöffnet, Mittagstisch bis 14:00" };
    if (min < a[0]) return { auf: false, kurz: "Wieder ab 17:30", lang: "Mittagspause, ab 17:30 wieder geöffnet" };
    if (min < a[1]) return { auf: true, kurz: "Geöffnet bis 22:00", lang: "Jetzt geöffnet, heute bis 22:00" };
    return { auf: false, kurz: "Wieder " + naechster(), lang: "Für heute geschlossen, wieder " + naechster() };
  }
  B.status = status;
  function statusZeigen() {
    const s = status();
    $$("[data-status]").forEach((el) => {
      el.classList.add("status");
      el.classList.toggle("is-open", s.auf);
      el.innerHTML = `<span class="status-punkt" aria-hidden="true"></span><span>${el.dataset.status === "lang" ? s.lang : s.kurz}</span>`;
    });
    const heute = jetzt().wt;
    $$("[data-tag]").forEach((tr) => tr.classList.toggle("is-heute", +tr.dataset.tag === heute));
  }
  statusZeigen();
  setInterval(statusZeigen, 60000);

  /* ───────────── Weiches Scrollen ─────────────
     Nur mit Maus/Trackpad; Touch scrollt nativ. */
  let lenis = null;
  if (!ruhig && window.Lenis && window.matchMedia("(pointer: fine)").matches) {
    lenis = new window.Lenis({ lerp: 0.11, wheelMultiplier: 1, smoothWheel: true });
    if (window.gsap) {
      if (window.ScrollTrigger) lenis.on("scroll", window.ScrollTrigger.update);
      window.gsap.ticker.add((t) => lenis.raf(t * 1000));
      window.gsap.ticker.lagSmoothing(0);
    } else {
      const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }
  B.lenis = lenis;
  const kopfH = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--kopf")) || 70;
  B.scrollZu = (ziel) => {
    const el = typeof ziel === "string" ? $(ziel) : ziel;
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -kopfH() + 1, duration: 1.2 });
    else el.scrollIntoView({ behavior: ruhig ? "auto" : "smooth" });
  };
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || a.getAttribute("href").length < 2) return;
    const el = $(a.getAttribute("href"));
    if (!el) return;
    e.preventDefault();
    menuZu();
    B.scrollZu(el);
    history.replaceState(null, "", a.getAttribute("href"));
  });

  /* ───────────── Kopfzeile ───────────── */
  const kopf = $("[data-kopf]");
  let letzte = 0;
  function kopfScroll() {
    if (!kopf) return;
    const y = window.scrollY;
    kopf.classList.toggle("is-fest", y > 40 && !kopf.dataset.buehne);
    kopf.classList.toggle("is-weg", y > 600 && y > letzte + 2 && !kopf.classList.contains("is-menu"));
    if (y < letzte - 2) kopf.classList.remove("is-weg");
    letzte = y;
  }
  window.addEventListener("scroll", kopfScroll, { passive: true });
  kopfScroll();
  B.kopf = kopf;

  const menuKnopf = $("[data-menu]");
  const menuFl = $("[data-menu-flaeche]");
  function menuZu() {
    if (!menuFl || !menuFl.classList.contains("is-offen")) return;
    menuFl.classList.remove("is-offen"); kopf.classList.remove("is-menu");
    menuKnopf.setAttribute("aria-expanded", "false"); document.body.classList.remove("ist-gesperrt");
    if (lenis) lenis.start();
  }
  if (menuKnopf && menuFl) {
    menuKnopf.addEventListener("click", () => {
      const auf = !menuFl.classList.contains("is-offen");
      if (!auf) return menuZu();
      menuFl.classList.add("is-offen"); kopf.classList.add("is-menu");
      menuKnopf.setAttribute("aria-expanded", "true"); document.body.classList.add("ist-gesperrt");
      if (lenis) lenis.stop();
    });
    $$("a", menuFl).forEach((a) => a.addEventListener("click", menuZu));
  }
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { menuZu(); zettelZu(); } });

  /* ───────────── Zeilen zerlegen ─────────────
     Teilt eine Überschrift in ihre gesetzten Zeilen, jede in einer
     Maske, damit sie einzeln aufsteigen können. */
  B.zeilen = function (el) {
    if (!el || el.dataset.zerlegt) return $$(".zeile > span", el);
    const text = el.textContent.trim().split(/\s+/);
    el.innerHTML = text.map((w) => `<span class="wort" style="display:inline-block">${esc(w)}</span>`).join(" ");
    const woerter = $$(".wort", el);
    const gruppen = [];
    let top = null;
    woerter.forEach((w) => {
      const t = Math.round(w.offsetTop);
      if (top === null || Math.abs(t - top) > 4) { gruppen.push([]); top = t; }
      gruppen[gruppen.length - 1].push(w.textContent);
    });
    el.innerHTML = gruppen.map((g) => `<span class="zeile"><span>${esc(g.join(" "))}</span></span>`).join("");
    el.setAttribute("aria-label", text.join(" "));
    el.dataset.zerlegt = "1";
    return $$(".zeile > span", el);
  };

  /* ───────────── Speisekarte als Daten ───────────── */
  const KARTE = window.BOMBAY_KARTE || [];
  const SPEISEN = new Map();
  KARTE.forEach((g) => g.posten.forEach((p) => {
    p.key = p.nr || p.name; p.gang = g.id; p.gangTitel = g.titel;
    p.speise = !["getraenke", "wein"].includes(g.id);
    SPEISEN.set(p.key, p);
  }));
  B.speisen = SPEISEN;
  B.SCHAERFE = ["mild", "pikant", "scharf", "sehr scharf"];

  /* ───────────── Bestellzettel ───────────── */
  let zettel = speicher.lies("bombay-zettel", {});
  for (const k of Object.keys(zettel)) if (!SPEISEN.has(k)) delete zettel[k];
  let daten = speicher.lies("bombay-zettel-daten", { art: "abholen", name: "", tel: "", adresse: "", zeit: "", notiz: "" });

  const knopf = document.createElement("button");
  knopf.type = "button";
  knopf.className = "pille pille--voll zettel-knopf";
  knopf.innerHTML = `${ico("tasche")}<span>Bestellzettel</span><span class="zahl" data-zettel-zahl>0</span>`;
  const sch = document.createElement("div");
  sch.className = "schublade";
  sch.innerHTML = `
    <div class="schublade-schleier" data-zettel-zu></div>
    <section class="schublade-panel" role="dialog" aria-modal="true" aria-labelledby="zettel-titel" tabindex="-1">
      <header class="schublade-kopf"><h2 id="zettel-titel">Ihr Bestellzettel</h2>
        <button type="button" class="rund-zu" data-zettel-zu aria-label="Schließen">${ico("zu")}</button></header>
      <div class="schublade-inhalt" data-zettel-inhalt></div>
      <footer class="schublade-fuss" data-zettel-fuss></footer>
    </section>`;
  document.body.append(knopf, sch);

  let vorher = null;
  function zettelAuf() {
    vorher = document.activeElement;
    zeichnen();
    sch.classList.add("is-offen");
    document.body.classList.add("ist-gesperrt");
    if (lenis) lenis.stop();
    setTimeout(() => $(".schublade-panel", sch).focus(), 60);
  }
  function zettelZu() {
    if (!sch.classList.contains("is-offen")) return;
    sch.classList.remove("is-offen");
    document.body.classList.remove("ist-gesperrt");
    if (lenis) lenis.start();
    if (vorher) vorher.focus();
  }
  B.zettelAuf = zettelAuf;
  knopf.addEventListener("click", zettelAuf);
  $$("[data-zettel-zu]", sch).forEach((b) => b.addEventListener("click", zettelZu));
  document.addEventListener("click", (e) => { if (e.target.closest("[data-zettel-oeffnen]")) { e.preventDefault(); zettelAuf(); } });

  const anzahl = () => Object.values(zettel).reduce((a, v) => a + v.menge, 0);
  const summe = () => Object.entries(zettel).reduce((a, [k, v]) => a + SPEISEN.get(k).preis * v.menge, 0);

  function zeichnen() {
    const inhalt = $("[data-zettel-inhalt]", sch), fuss = $("[data-zettel-fuss]", sch);
    const e = Object.entries(zettel);
    if (!e.length) {
      inhalt.innerHTML = `<div class="zettel-leer"><strong>Noch leer.</strong>Tippen Sie in der Speisekarte auf das Plus neben einem Gericht. Hier entsteht daraus Ihre Bestellung, fertig für WhatsApp oder das Telefon.</div>
        <a class="pille pille--voll" href="speisekarte.html">Zur Speisekarte ${ico("pfeil")}</a>`;
      fuss.innerHTML = "";
      return;
    }
    const st = status();
    inhalt.innerHTML = `<ul class="zettel-liste" role="list">${e.map(([k, v]) => {
      const p = SPEISEN.get(k);
      return `<li>
        <span class="zettel-name">${esc(p.name)}<small>${p.nr ? "Nr. " + p.nr + " · " : ""}${euro(p.preis)}</small></span>
        <span class="zettel-preis">${euro(p.preis * v.menge)}</span>
        <span class="zettel-zeile2">
          ${p.speise ? `<span class="schaerfe-wahl" role="group" aria-label="Schärfe für ${esc(p.name)}">${B.SCHAERFE.map((s) => `<button type="button" data-z-scharf="${esc(k)}" data-s="${s}" aria-pressed="${v.scharf === s}">${s}</button>`).join("")}</span>` : "<span></span>"}
          <span class="menge"><button type="button" data-z-minus="${esc(k)}" aria-label="Eins weniger">−</button><output>${v.menge}</output><button type="button" data-z-plus="${esc(k)}" aria-label="Eins mehr">+</button></span>
        </span></li>`;
    }).join("")}</ul>
    <form class="formular" data-zettel-form novalidate>
      <p class="formular-titel">Wie möchten Sie Ihr Essen?</p>
      <div class="segment" data-wert="${daten.art}" role="group" aria-label="Abholen oder liefern">
        <span class="segment-gleiter" aria-hidden="true"></span>
        <button type="button" data-art="abholen" aria-pressed="${daten.art === "abholen"}">Abholen · ca. 30 Min.</button>
        <button type="button" data-art="liefern" aria-pressed="${daten.art === "liefern"}">Liefern · ca. 60 Min.</button>
      </div>
      <label class="feld"><span>Name</span><input id="z-name" name="name" autocomplete="name" value="${esc(daten.name)}" required></label>
      <label class="feld"><span>Telefon für Rückfragen</span><input id="z-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" value="${esc(daten.tel)}" required></label>
      <label class="feld" ${daten.art === "liefern" ? "" : "hidden"} data-nur-liefern><span>Lieferadresse</span><input id="z-adresse" name="adresse" autocomplete="street-address" placeholder="Straße, Hausnummer, Ort" value="${esc(daten.adresse)}"></label>
      <label class="feld"><span>Wann?</span><select id="z-zeit" name="zeit">${zeitOptionen()}</select></label>
      <label class="feld"><span>Anmerkung <small>(optional)</small></span><textarea id="z-notiz" name="notiz" placeholder="Allergien, Klingel, Besteck …">${esc(daten.notiz)}</textarea></label>
      <p class="fehler" role="alert" data-zettel-fehler></p>
    </form>`;
    fuss.innerHTML = `
      <div class="summe"><span>Summe laut Karte</span><b>${euro(summe())}</b></div>
      <button type="button" class="pille pille--wa" data-senden="wa">${ico("wa")}Per WhatsApp senden</button>
      <div class="knopf-reihe">
        <a class="pille pille--rand pille--klein" href="tel:${CFG.tel}" data-senden="tel">${ico("telefon")}Anrufen</a>
        <button type="button" class="pille pille--rand pille--klein" data-senden="kopie">${ico("kopie")}Text kopieren</button>
      </div>
      <p class="hinweis">${st.auf ? "" : st.lang + ". "}Die Bestellung gilt, sobald das Restaurant sie bestätigt. Preise laut Karte, Lieferkosten bestätigt das Restaurant.</p>`;
  }

  function zeitOptionen() {
    const { min, wt } = jetzt();
    const opts = [`<option value="">So bald wie möglich</option>`];
    if (offen(wt)) FENSTER.forEach(([a, b]) => { for (let m = a + 30; m <= b - 15; m += 15) if (m > min + 30) opts.push(`<option${daten.zeit === hhmm(m) ? " selected" : ""}>${hhmm(m)}</option>`); });
    return opts.join("");
  }

  function nachricht() {
    const z = Object.entries(zettel).map(([k, v]) => {
      const p = SPEISEN.get(k);
      return `${v.menge} × ${p.nr ? "Nr. " + p.nr + " " : ""}${p.name}${p.speise ? " (" + v.scharf + ")" : ""}`;
    });
    return [
      "Hallo Bombay, ich möchte bestellen:", "", ...z, "",
      `Summe laut Karte: ${euro(summe())}`,
      daten.art === "liefern" ? `Lieferung an: ${daten.adresse}` : "Zum Abholen",
      `Zeit: ${daten.zeit || "so bald wie möglich"}`,
      `Name: ${daten.name}`, `Telefon: ${daten.tel}`,
      daten.notiz ? `Anmerkung: ${daten.notiz}` : "",
      "", "Bitte kurz bestätigen. Danke!",
    ].filter((x, i, a) => !(x === "" && a[i - 1] === "")).join("\n");
  }
  B.nachricht = nachricht;

  function pruefen() {
    const f = $("[data-zettel-fehler]", sch);
    const fokus = (n) => { const el = $(`[name=${n}]`, sch); if (el) el.focus(); };
    if (daten.name.trim().length < 2) { f.textContent = "Bitte geben Sie Ihren Namen an."; fokus("name"); return false; }
    if (daten.tel.replace(/\D/g, "").length < 6) { f.textContent = "Bitte geben Sie eine Telefonnummer für Rückfragen an."; fokus("tel"); return false; }
    if (daten.art === "liefern" && daten.adresse.trim().length < 6) { f.textContent = "Bitte geben Sie die Lieferadresse an."; fokus("adresse"); return false; }
    f.textContent = "";
    return true;
  }

  sch.addEventListener("input", (e) => {
    if (e.target.name && e.target.name in daten) { daten[e.target.name] = e.target.value; speicher.schreib("bombay-zettel-daten", daten); }
  });
  sch.addEventListener("change", (e) => { if (e.target.name === "zeit") { daten.zeit = e.target.value; speicher.schreib("bombay-zettel-daten", daten); } });
  sch.addEventListener("click", (e) => {
    const b = e.target.closest("button, a");
    if (!b) return;
    if (b.dataset.zPlus) { zettel[b.dataset.zPlus].menge++; aendern(); }
    else if (b.dataset.zMinus) { const k = b.dataset.zMinus; if (--zettel[k].menge <= 0) delete zettel[k]; aendern(); }
    else if (b.dataset.zScharf) { zettel[b.dataset.zScharf].scharf = b.dataset.s; aendern(); }
    else if (b.dataset.art) {
      daten.art = b.dataset.art; speicher.schreib("bombay-zettel-daten", daten);
      const seg = b.closest(".segment"); seg.dataset.wert = daten.art;
      $$("[data-art]", seg).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      $("[data-nur-liefern]", sch).hidden = daten.art !== "liefern";
    } else if (b.dataset.senden === "wa") {
      if (!pruefen()) return;
      window.open(`https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent(nachricht())}`, "_blank", "noopener");
    } else if (b.dataset.senden === "kopie") {
      const fertig = () => { b.innerHTML = `${ico("haken")}Kopiert`; setTimeout(() => (b.innerHTML = `${ico("kopie")}Text kopieren`), 1800); };
      if (navigator.clipboard) navigator.clipboard.writeText(nachricht()).then(fertig, () => {});
    }
  });

  function aendern(hupf) {
    speicher.schreib("bombay-zettel", zettel);
    const n = anzahl();
    $$("[data-zettel-zahl]").forEach((z) => (z.textContent = n));
    knopf.classList.toggle("is-da", n > 0 && !document.body.hasAttribute("data-kein-zettelknopf"));
    knopf.setAttribute("aria-label", `Bestellzettel öffnen, ${n} ${n === 1 ? "Gericht" : "Gerichte"}`);
    if (hupf) { knopf.classList.remove("is-hupf"); void knopf.offsetWidth; knopf.classList.add("is-hupf"); }
    document.dispatchEvent(new CustomEvent("zettel", { detail: zettel }));
    if (sch.classList.contains("is-offen")) {
      const y = $("[data-zettel-inhalt]", sch).scrollTop;
      zeichnen();
      $("[data-zettel-inhalt]", sch).scrollTop = y;
    }
  }
  B.zettel = {
    menge: (k) => (zettel[k] ? zettel[k].menge : 0),
    dazu(k, scharf, von) {
      if (!SPEISEN.has(k)) return;
      if (zettel[k]) zettel[k].menge++;
      else zettel[k] = { menge: 1, scharf: scharf || "pikant" };
      if (scharf) zettel[k].scharf = scharf;
      aendern(true);
      flug(von);
    },
    weg(k) { if (!zettel[k]) return; if (--zettel[k].menge <= 0) delete zettel[k]; aendern(); },
  };

  // Ein kleiner Punkt fliegt vom Knopf zum Bestellzettel
  function flug(von) {
    if (ruhig || !von || !knopf.classList.contains("is-da")) return;
    const a = von.getBoundingClientRect(), b = knopf.getBoundingClientRect();
    const d = document.createElement("span");
    d.style.cssText = `position:fixed;left:${a.left + a.width / 2 - 6}px;top:${a.top + a.height / 2 - 6}px;width:12px;height:12px;border-radius:50%;background:var(--rani);z-index:250;pointer-events:none`;
    document.body.append(d);
    const dx = b.right - 28 - (a.left + a.width / 2), dy = b.top + b.height / 2 - (a.top + a.height / 2);
    d.animate([
      { transform: "translate(0,0) scale(1)" },
      { transform: `translate(${dx * 0.55}px, ${dy * 0.5 - 120}px) scale(1.3)`, offset: 0.5 },
      { transform: `translate(${dx}px, ${dy}px) scale(.4)`, opacity: 0.5 },
    ], { duration: 700, easing: "cubic-bezier(.45,0,.35,1)" }).onfinish = () => d.remove();
  }

  $$("[data-jahr]").forEach((el) => (el.textContent = new Date().getFullYear()));
  aendern();
})();
