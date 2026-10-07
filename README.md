# Bombay · Freising — Website

Neugestaltung der Website des indischen Restaurants **Bombay**, Obere Hauptstraße 67, 85354 Freising.
Live-Vorschau: https://kebronkg-cmyk.github.io/inder/ · Speisekarte: https://kebronkg-cmyk.github.io/inder/speisekarte.html

Gestaltung „Safran-Editorial“: ein Food-Magazin in Bewegung. Weißer Grund, Bodoni Moda und Hanken Grotesk,
jedes Lieblingsgericht bekommt ein eigenes, sattes Farbfeld (Pfauenblau, Safran, Kardamomgrün, Rani-Pink).
Die Schale bleibt, die Welt um sie herum wechselt die Farbe.

## Funktionen

- **Heute-Status** live nach Freisinger Uhrzeit („Jetzt geöffnet“, „Mittagspause, ab 17:30“, „Heute Ruhetag“ …), der heutige Tag ist in den Öffnungszeiten markiert.
- **Lieblinge** – eine Farbscheibe flutet beim Scrollen den Schirm; vier Gerichte als freigestellte Schalen, jedes mit Herkunft, Geschichte, Preis und „Auf den Bestellzettel“. Fortschrittsleiste, Einrasten an jedem Gericht.
- **Speisekarte als eigene Seite** – alle 141 Gerichte, Suche (Name, Zutat, Nummer), Filter vegetarisch / vegan möglich / scharf, Plus an jedem Gericht. Gänge-Liste links auf breiten Schirmen, auf dem Handy hinter einem Knopf („Gänge“) – nichts klebt quer im Weg.
- **Bestellzettel** – Menge und Schärfe (mild · pikant · scharf · sehr scharf) pro Gericht, Abholen oder Liefern, Name, Telefon, Adresse, Wunschzeit. Daraus wird eine fertige **WhatsApp-Nachricht** an das Restaurant; alternativ **anrufen** oder **Text kopieren**. Bleibt im Browser gespeichert.
- **Reservier-Assistent** – Personen → Tag (Dienstag gesperrt, 21 Tage) → Uhrzeit (nur in den Öffnungszeiten) → Name. Abschluss als WhatsApp-Anfrage, Anruf oder vorformulierte E-Mail. Kein Backend; die Seite sagt klar, dass erst die Zusage des Restaurants gilt.
- **Lehmofen, Raum, Besuch, Stimmen** – Tandoor-Foto mit Fakten, der Gastraum öffnet sich beim Scrollen, Adresse mit Route, Öffnungszeiten, Google-Bewertung mit kurzen Auszügen.
- `prefers-reduced-motion` (ruhige Fassung ohne Pin und Flut), Tastaturbedienung, keine Cookies, keine Drittanbieter-Ressourcen (GSAP, ScrollTrigger und Lenis liegen in `js/vendor/`).

## Aufbau

```
index.html                  Startseite (Bühne mit den Lieblingen, Lehmofen, Karte, Raum, Besuch, Reservieren, Stimmen)
speisekarte.html            ganze Karte mit Suche, Filtern und Bestellzettel
impressum.html, datenschutz.html
css/site.css                Grundlage: Farben, Schrift, Kopf, Knöpfe, Bestellzettel, Fuß
css/start.css, css/karte.css  Startseite und Speisekarte
js/site.js                  Status, Kopf, Menü, Lenis, Bestellzettel + WhatsApp-Text (Einstellungen in BOMBAY.cfg)
js/start.js                 Bühne der Lieblinge und Scroll-Animationen (GSAP)
js/karte.js                 Speisekarte
js/reservierung.js          Reservier-Assistent
js/logo.js                  Logo als Vektor (erzeugt von tools/logo.py)
menu-data.js                komplette Speisekarte mit Nummern und Preisen
tools/teile.py              setzt Icons und Fuß aus tools/teile/ in alle Seiten ein
fonts/                      Bodoni Moda, Hanken Grotesk (selbst gehostet, SIL OFL)
img/                        Fotos (WebP), freigestellte Schalen in img/gerichte/, logo.svg, favicon.svg
.claude/                    Design-Skills und Agents (aus dem Potential System übernommen)
PRODUCT.md, DESIGN.md       Produkt- und Gestaltungsgrundlagen
```

Gemeinsame Teile (Icons, Fuß) nur in `tools/teile/` ändern, dann `python3 tools/teile.py` ausführen.

## Lokal ansehen

```bash
python3 -m http.server 8080
# http://localhost:8080 und http://localhost:8080/speisekarte.html
```

Deployment: GitHub Pages über `.github/workflows/deploy-pages.yml` (bei Push auf `main` und auf den Arbeitsbranch).

## Vor dem Livegang prüfen

- **WhatsApp-Nummer** in `js/site.js` (`BOMBAY.cfg.whatsapp`): vorläufig die Festnetznummer 08161 4965102. Mit dem Restaurant klären, ob dort WhatsApp Business läuft, sonst eine Handynummer eintragen.
- Impressum und Datenschutz (gelb markierte Stellen), Fotorechte des Gastraumfotos (siehe `img/QUELLEN.md`).
- Bewertungszahl und Zitate mit dem aktuellen Google-Profil abgleichen.
- Preise und Speisekarte mit der aktuellen Karte abgleichen (Stand Oktober 2026).
