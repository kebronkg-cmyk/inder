# Bombay · Freising — Website

Neugestaltung der Website des indischen Restaurants **Bombay**, Obere Hauptstraße 67, 85354 Freising.
Zwei vollständige Entwürfe zum Vergleichen, beide mit denselben Funktionen und Inhalten:

| Entwurf | Datei | Welt |
|---|---|---|
| **A · Ajrakh-Blockdruck** | `index.html` | Die Seite als handbedrucktes Tuch: Krapprot und Indigo, Reservelinien, Kurkuma für Handlungen. Fotos sitzen in Bogenfenstern aus dem Logo. |
| **B · Thali & Masala-Dabba** | `thali.html` | Ein gedeckter Tisch: gebürsteter Stahl, gehämmertes Kupfer. Der Gastraum als Bühne, die Lieblingsgerichte auf einer drehbaren Thali-Platte. |

In der Navigation und im Fuß verlinkt jeder Entwurf auf den anderen (nur für die Abnahme: `.kopf-nav-entwurf` und `.entwurf-hinweis` nach der Entscheidung entfernen).

## Funktionen

- **Heute-Status** live nach Freisinger Uhrzeit: „Jetzt geöffnet“, „Mittagspause, ab 17:30“, „Heute Ruhetag“ …, der heutige Tag ist in den Öffnungszeiten markiert.
- **Lieblinge des Hauses** – die neun Gerichte mit Foto, jeweils mit Herkunft, Zubereitung, einer kurzen Geschichte und einem **Schärfe-Regler** (mild · pikant · scharf · sehr scharf).
  - A: Druckbühne mit Stempelreihe; jeder Wechsel wird kreisförmig „aufgedruckt“, die Feldfarbe folgt dem Gericht, Wischen auf dem Foto.
  - B: **drehbare Thali** mit Katoris (ziehen, Pfeile, Tastatur oder Tipp aufs Schälchen); das Gericht im Fokus wird groß und dampft.
- **Was passt zu mir?** – Geschmacks-Finder: drei Fragen (Zutat, Soße, Schärfe) → Vorschlag aus allen 141 Posten, mit Alternativen.
- **Der Raum** – A: das Gastraumfoto öffnet sich beim Scrollen durch das Kuppelbogen-Fenster bis zur vollen Fläche, dazu erscheinen die Details (Taj-Mahal-Wandbild, Polsterbänke, Sternlaternen, Terrasse). B: der Gastraum ist die Startbühne, „das Licht geht an“.
- **Masala-Dabba** (B) – die Gewürzdose öffnet beim Scrollen ihren Deckel; sieben Gewürze mit Hindi-Namen und Rolle in der Küche.
- **Ganze Speisekarte** – Suche (auch nach Nummer oder Zutat), Filter vegetarisch / vegan möglich / üblich scharf, Gang-Navigation.
- **Merkzettel** (auf dem Handy in der Daumenleiste) – Gerichte merken, Menge und Schärfe pro Gericht, Summe laut Karte; weiter zum Online-Shop, anrufen oder Liste kopieren. Bleibt im Browser gespeichert.
- **Reservier-Assistent** – Personen → Tag (Dienstag gesperrt, 21 Tage) → Uhrzeit (nur innerhalb der Öffnungszeiten, vergangene Zeiten gesperrt) → Name. Abschluss per Anruf oder vorformulierter E-Mail. Kein Backend; die Seite sagt klar, dass erst die Zusage des Restaurants gilt.
- Mobile Daumenleiste (Tisch · Bestellen · Anrufen), `prefers-reduced-motion`, Tastaturbedienung, keine Cookies, keine Drittanbieter-Ressourcen.

## Aufbau

```
index.html, thali.html      die beiden Entwürfe
impressum.html, datenschutz.html
css/base.css                gemeinsame Bausteine (Reservierung, Finder, Karte, Merkzettel, Lightbox)
css/ajrakh.css, css/thali.css   die zwei Gestaltungswelten
js/core.js                  gemeinsame Logik
js/ajrakh.js, js/thali.js   die Signatur-Interaktionen
js/lieblinge.js             Geschichten zu den neun Lieblingsgerichten
js/logo.js                  Logo als Vektor (erzeugt von tools/logo.py)
menu-data.js                komplette Speisekarte mit Nummern und Preisen
fonts/                      selbst gehostete Schriften (Rozha One, Mukta, Kalnia, Anek Latin – SIL OFL)
img/                        Fotos (WebP in mehreren Größen), logo.svg, favicon.svg
.claude/                    Design-Skills und Agents (aus dem Potential System übernommen)
PRODUCT.md, DESIGN.md       Produkt- und Gestaltungsgrundlagen
```

Die Materialien von Entwurf B (Thali-Platte, Katori-Ränder, Gewürzdose mit Deckel, Gewürze, gehämmertes Kupfer, Stahltablett, geprägtes Stahl-Logo) sind gerenderte Rasterbilder aus `tools/materialien.py` (Höhenkarte, Normalen, Licht; Stahl mit Ringschliff), keine Fremdfotos.

Das Logo wurde als Vektor neu gezeichnet (Kuppel mit Kalash-Bekrönung, kalligrafisch auslaufender Bogen, Wortmarke aus Rozha One als Pfade). Neu erzeugen: `pip install fonttools && python3 tools/logo.py RozhaOne-Regular.ttf`.

## Lokal ansehen

```bash
python3 -m http.server 8080
# http://localhost:8080 (Entwurf A) bzw. http://localhost:8080/thali.html (Entwurf B)
```

Deployment: GitHub Pages über `.github/workflows/deploy-pages.yml` (bei Push auf `main`).

## Vor dem Livegang prüfen

- Impressum und Datenschutz (gelb markierte Stellen), Fotorechte der Gästefotos (siehe `img/QUELLEN.md`).
- Bewertungszahl und Zitate mit dem aktuellen Google-Profil abgleichen.
- Preise und Speisekarte mit der aktuellen Karte abgleichen (Stand Oktober 2026).
