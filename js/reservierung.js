/* Tisch reservieren in vier Schritten: Personen, Tag, Uhrzeit, Name.
   Am Ende entsteht eine fertige Anfrage für WhatsApp, Telefon oder
   E-Mail. Kein Backend: der Tisch gilt erst mit der Zusage. */
(function () {
  "use strict";
  const B = window.BOMBAY;
  const el = document.querySelector("[data-reservierung]");
  if (!B || !el) return;
  const { $, $$, esc, ico, ruhig } = B.u;
  const { TAGE, MONATE, FENSTER, offen, hhmm, jetzt } = B.zeit;
  const CFG = B.cfg;
  const r = { personen: null, tag: null, zeit: null, name: "", tel: "", notiz: "" };
  let schritt = 0;

  const isoTag = (d) => d.toISOString().slice(0, 10);
  const plusTage = (d, n) => new Date(d.getTime() + n * 864e5);
  const zeiten = () => { const o = []; FENSTER.forEach(([a, b]) => { for (let m = a; m <= b - 30; m += 30) o.push(m); }); return o; };
  const tagFrei = (d) => {
    if (!offen(d.getUTCDay())) return false;
    const j = jetzt();
    return isoTag(d) !== isoTag(j.datum) || zeiten().some((m) => m > j.min + 30);
  };
  const tagLang = (iso) => { const d = new Date(iso + "T12:00:00Z"); return `${TAGE[d.getUTCDay()]}, ${d.getUTCDate()}. ${MONATE[d.getUTCMonth()]}`; };
  const pers = (n) => `${n} ${n === 1 ? "Person" : "Personen"}`;
  const text = () => [
    "Hallo Bombay, ich möchte gern einen Tisch reservieren:", "",
    `${tagLang(r.tag)}, ${hhmm(r.zeit)} Uhr`, pers(r.personen), `Name: ${r.name}`,
    r.tel ? `Telefon: ${r.tel}` : "", r.notiz ? `Anmerkung: ${r.notiz}` : "",
    "", "Bitte kurz bestätigen. Danke!",
  ].filter((x, i, a) => !(x === "" && a[i - 1] === "")).join("\n");

  function zeichnen(rueck) {
    const fort = `<ol class="res-schritte" aria-hidden="true">${[0, 1, 2, 3].map((i) => `<li class="${i < schritt ? "is-fertig" : i === schritt ? "is-jetzt" : ""}"></li>`).join("")}</ol>`;
    let h = "";
    if (schritt === 0) {
      h = `<p class="res-frage" id="res-f">Für wie viele Personen?</p>
        <div class="res-chips" role="group" aria-labelledby="res-f">${[1, 2, 3, 4, 5, 6, 7, 8].map((n) => `<button type="button" class="res-chip" data-p="${n}" aria-pressed="${r.personen === n}">${n}</button>`).join("")}
        <button type="button" class="res-chip" data-p="9" aria-pressed="${r.personen >= 9}">9 und mehr</button></div>
        ${r.personen >= 9 ? `<p class="res-hinweis">Für größere Gruppen sprechen wir das Menü gern vorab ab. Am besten direkt anrufen: <a href="tel:${CFG.tel}">${CFG.telAnzeige}</a>.</p>` : ""}`;
    } else if (schritt === 1) {
      const j = jetzt();
      h = `<p class="res-frage" id="res-f">An welchem Tag?<small>Dienstags ist Ruhetag.</small></p>
        <div class="res-tage" role="group" aria-labelledby="res-f">${Array.from({ length: 21 }, (_, i) => {
          const d = plusTage(j.datum, i), iso = isoTag(d), frei = tagFrei(d), ruhe = !offen(d.getUTCDay());
          const oben = i === 0 ? "Heute" : i === 1 ? "Morgen" : TAGE[d.getUTCDay()].slice(0, 2);
          return `<button type="button" class="res-chip res-tag" data-t="${iso}" aria-pressed="${r.tag === iso}" ${frei ? "" : "disabled"} aria-label="${tagLang(iso)}${ruhe ? ", Ruhetag" : frei ? "" : ", heute keine Zeiten mehr"}"><small>${oben}</small><b>${d.getUTCDate()}</b><small>${MONATE[d.getUTCMonth()].slice(0, 3)}</small></button>`;
        }).join("")}</div>`;
    } else if (schritt === 2) {
      const j = jetzt(), heute = r.tag === isoTag(j.datum);
      const k = (m) => `<button type="button" class="res-chip" data-z="${m}" aria-pressed="${r.zeit === m}" ${heute && m <= j.min + 30 ? "disabled" : ""}>${hhmm(m)}</button>`;
      h = `<p class="res-frage">Um wie viel Uhr?<small>${tagLang(r.tag)}</small></p>
        <p class="res-gruppe">Mittags</p><div class="res-chips">${zeiten().filter((m) => m < 900).map(k).join("")}</div>
        <p class="res-gruppe">Abends</p><div class="res-chips">${zeiten().filter((m) => m > 900).map(k).join("")}</div>`;
    } else if (schritt === 3) {
      h = `<p class="res-frage">Auf welchen Namen?</p>
        <label class="feld"><span>Name</span><input id="r-name" name="name" autocomplete="name" value="${esc(r.name)}"></label>
        <label class="feld"><span>Telefon <small>(optional, für Rückfragen)</small></span><input id="r-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" value="${esc(r.tel)}"></label>
        <label class="feld"><span>Anmerkung <small>(optional)</small></span><textarea id="r-notiz" name="notiz" placeholder="Kinderstuhl, Terrasse, Geburtstag …">${esc(r.notiz)}</textarea></label>
        <p class="fehler" role="alert" data-fehler></p>
        <div class="res-nav"><button type="submit" class="pille pille--voll">Weiter ${ico("pfeil")}</button></div>`;
    } else {
      h = `<p class="res-frage">Fast geschafft.</p>
        <div class="res-karte"><strong>${hhmm(r.zeit)} Uhr</strong><span>${tagLang(r.tag)}</span><span>${pers(r.personen)} · ${esc(r.name)}</span></div>
        <div class="res-nav">
          <a class="pille pille--voll" href="https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent(text())}" target="_blank" rel="noopener">${ico("wa")}Per WhatsApp anfragen</a>
          <a class="pille pille--rand" href="tel:${CFG.tel}">${ico("telefon")}Anrufen</a>
          <a class="pille pille--rand" href="mailto:${CFG.mail}?subject=${encodeURIComponent("Reservierung " + tagLang(r.tag) + ", " + hhmm(r.zeit) + " Uhr")}&body=${encodeURIComponent(text())}">${ico("brief")}E-Mail</a>
        </div>
        <p class="res-hinweis">Ihr Tisch ist reserviert, sobald das Restaurant zusagt. Telefon ${CFG.telAnzeige}.</p>`;
    }
    el.innerHTML = `<form class="res-form" novalidate>${fort}<div class="res-schritt">${h}</div>${schritt > 0 ? `<button type="button" class="res-zurueck" data-zurueck>Zurück</button>` : ""}</form>`;
    const inhalt = $(".res-schritt", el);
    if (!ruhig && inhalt.animate) inhalt.animate([{ opacity: 0, transform: `translateX(${rueck ? -18 : 18}px)` }, { opacity: 1, transform: "none" }], { duration: 480, easing: "cubic-bezier(.23,1,.32,1)" });
  }
  function geh(n) {
    const rueck = n < schritt;
    schritt = n;
    zeichnen(rueck);
    const f = $(".res-frage", el);
    if (f) { f.tabIndex = -1; f.focus({ preventScroll: true }); }
  }
  el.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b || b.disabled) return;
    const waehle = () => $$("[aria-pressed]", b.parentElement).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    if (b.dataset.p) { r.personen = +b.dataset.p; waehle(); if (r.personen >= 9) return zeichnen(); setTimeout(() => geh(1), 180); }
    else if (b.dataset.t) { if (r.tag !== b.dataset.t) r.zeit = null; r.tag = b.dataset.t; waehle(); setTimeout(() => geh(2), 180); }
    else if (b.dataset.z) { r.zeit = +b.dataset.z; waehle(); setTimeout(() => geh(3), 180); }
    else if (b.hasAttribute("data-zurueck")) geh(Math.max(0, schritt - 1));
  });
  el.addEventListener("input", (e) => { if (e.target.name in r) r[e.target.name] = e.target.value; });
  el.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = $("[data-fehler]", el);
    if (r.name.trim().length < 2) { f.textContent = "Bitte geben Sie einen Namen an."; $("#r-name").focus(); return; }
    if (r.tel && r.tel.replace(/\D/g, "").length < 6) { f.textContent = "Die Telefonnummer scheint unvollständig."; $("#r-tel").focus(); return; }
    r.name = r.name.trim();
    geh(4);
  });
  zeichnen();
})();
