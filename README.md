# Bombay · Freising — Website

Neugestaltung der Website des indischen Restaurants **Bombay**, Obere Hauptstraße 67, 85354 Freising.
Live-Vorschau: https://kebronkg-cmyk.github.io/inder/ · Speisekarte: https://kebronkg-cmyk.github.io/inder/speisekarte.html

Gestaltung „Safran-Editorial“: ein Food-Magazin zum Anfassen. Weißer Grund, Fraunces und Hanken Grotesk,
jedes Lieblingsgericht bekommt ein eigenes, sattes Farbfeld (Safran, Pfauenblau, Kardamomgrün, Rani-Pink).
Der Gast wählt selbst; die neue Farbe wächst von der Stelle aus, an der er tippt.

## Funktionen

- **Heute-Status** live nach Freisinger Uhrzeit („Jetzt geöffnet“, „Mittagspause, ab 17:30“, „Heute Ruhetag“ …), der heutige Tag ist in den Öffnungszeiten markiert.
- **Lieblinge** – vier Gerichte als freigestellte Schalen auf einem Rangoli-Ring, jedes auf eigener Farbfläche. Wechseln per Schälchen-Wähler, Pfeil, Wischen/Ziehen oder Pfeiltasten; die Schale dreht sich dabei einmal an ihren Platz. Beim ersten Besuch zeigt ein handschriftlicher Hinweis, wie es geht. Kein Scroll-Zwang.
- **Speisekarte als eigene Seite** – kompakt: die Gänge in Essensreihenfolge (Zum Anfang, Hauptgerichte, Dazu, Zum Schluss), jede Zeile mit Anzahl, Preis ab und drei Beispielen. Ein Tipp klappt genau einen Gang auf. Schnellwahl „Worauf haben Sie Lust?“, „Dazu passt“-Vorschläge, Suche und Filter öffnen alle Treffer. Plus an jedem Gericht.
- **Bestellzettel** – Menge und Schärfe (mild · pikant · scharf · sehr scharf) pro Gericht, Abholen oder Liefern, Name, Telefon, Adresse, Wunschzeit. Daraus wird eine fertige **WhatsApp-Nachricht** an das Restaurant; alternativ **anrufen** oder **Text kopieren**. Bleibt im Browser gespeichert.
- **Reservier-Assistent** – Personen → Tag (Dienstag gesperrt, 21 Tage) → Uhrzeit (nur in den Öffnungszeiten) → Name. Abschluss als WhatsApp-Anfrage, Anruf oder vorformulierte E-Mail. Kein Backend; die Seite sagt klar, dass erst die Zusage des Restaurants gilt.
- **Lehmofen, Laternen, Besuch, Stimmen** – Tandoor-Foto mit Fakten, gezeichnete Laternen (Akash Kandil, durchbrochene Metalllaternen), die beim Scrollen pendeln, Adresse mit Route, Öffnungszeiten, Google-Bewertung mit kurzen Auszügen.
- **Verzierungen** – Rangoli-Ring, Rosette als Zeichen für aufgeklappte Gänge, Paisley in der Reservierung, Jali-Band im Fuß, alles als eigene Linienzeichnung.
- `prefers-reduced-motion` (ruhige Fassung ohne Pin und Flut), Tastaturbedienung, keine Cookies, keine Drittanbieter-Ressourcen (GSAP, ScrollTrigger und Lenis liegen in `js/vendor/`).

## Aufbau

```
index.html                  Startseite (Bühne mit den Lieblingen, Lehmofen, Karte, Raum, Besuch, Reservieren, Stimmen)
speisekarte.html            ganze Karte mit Suche, Filtern und Bestellzettel
impressum.html, datenschutz.html
css/site.css                Grundlage: Farben, Schrift, Kopf, Knöpfe, Bestellzettel, Fuß
css/start.css, css/karte.css  Startseite und Speisekarte
js/site.js                  Status, Kopf, Menü, Lenis, Bestellzettel + WhatsApp-Text (Einstellungen in BOMBAY.cfg)
js/start.js                 Gerichte-Wähler, Laternen-Pendel, Verzierungen, Scroll-Auftritte (GSAP)
js/karte.js                 Speisekarte
js/reservierung.js          Reservier-Assistent
js/logo.js                  Logo als Vektor (erzeugt von tools/logo.py)
menu-data.js                komplette Speisekarte mit Nummern und Preisen
tools/teile.py              setzt Icons und Fuß aus tools/teile/ in alle Seiten ein
fonts/                      Fraunces, Hanken Grotesk (selbst gehostet, SIL OFL)
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
- Impressum und Datenschutz (gelb markierte Stellen).
- Laternenbild: stammt aus einem Gästefoto (siehe `img/QUELLEN.md`); Einwilligung einholen oder eine Laterne im Restaurant selbst fotografieren.
- Weitere echte Bewertungen: Das Bewertungsband (`index.html`, Abschnitt „Stimmen“) nimmt beliebig viele Karten auf; nur belegte Zitate eintragen.
- Bewertungszahl und Zitate mit dem aktuellen Google-Profil abgleichen.
- Preise und Speisekarte mit der aktuellen Karte abgleichen (Stand Oktober 2026).
