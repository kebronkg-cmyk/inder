---
name: Bombay Freising
description: Indische Küche in der Freisinger Altstadt. Zwei Entwürfe auf einer gemeinsamen Bausteinschicht, Thema A „Ajrakh-Blockdruck“ und Thema B „Thali & Masala-Dabba“.
colors:
  ajrakh-krapp: "#6e1518"
  ajrakh-indigo: "#17204a"
  ajrakh-indigo-tief: "#10173a"
  ajrakh-kohle: "#18100e"
  ajrakh-reserve: "#f3e7d3"
  ajrakh-reserve-gedaempft: "rgba(243, 231, 211, 0.76)"
  ajrakh-linie: "rgba(243, 231, 211, 0.24)"
  ajrakh-tinte: "#1d1310"
  ajrakh-kurkuma: "#edb23a"
  ajrakh-kurkuma-hell: "#f6c65e"
  ajrakh-auf-kurkuma: "#1a100c"
  ajrakh-offen: "#9fe0a8"
  thali-tawa: "#120e0b"
  thali-tawa-2: "#1b1511"
  thali-milch: "#efe6d8"
  thali-milch-gedaempft: "rgba(239, 230, 216, 0.74)"
  thali-linie: "rgba(239, 230, 216, 0.18)"
  thali-champagner: "#ecd2ad"
  thali-kupfer-hell: "#d79a69"
  thali-kurkuma: "#e7a92f"
  thali-kurkuma-hell: "#f3bf55"
  thali-auf-kurkuma: "#1a120c"
  thali-chili: "#d23d22"
  thali-lasur: "#5f2a12"
  thali-gravur: "#1c1a18"
  thali-offen: "#9fdba6"
  schaerfe-hinweis: "#ff9a76"
typography:
  ajrakh-display:
    fontFamily: "Rozha One, Georgia, serif"
    fontSize: "clamp(2.6rem, 6.4vw, 5.6rem)"
    fontWeight: 400
    lineHeight: 0.98
  ajrakh-headline:
    fontFamily: "Rozha One, Georgia, serif"
    fontSize: "clamp(2.3rem, 5.2vw, 4.4rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  ajrakh-title:
    fontFamily: "Rozha One, Georgia, serif"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.1
  ajrakh-body:
    fontFamily: "Mukta, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  ajrakh-label:
    fontFamily: "Mukta, Segoe UI, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 700
    letterSpacing: "0.05em"
  thali-display:
    fontFamily: "Kalnia, Georgia, serif"
    fontSize: "clamp(2.6rem, 5.4vw, 4.6rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.015em"
  thali-headline:
    fontFamily: "Kalnia, Georgia, serif"
    fontSize: "clamp(2.2rem, 5vw, 4.2rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  thali-title:
    fontFamily: "Kalnia, Georgia, serif"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.1
  thali-body:
    fontFamily: "Anek Latin, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  thali-label:
    fontFamily: "Anek Latin, Segoe UI, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 700
    letterSpacing: "0.05em"
rounded:
  ajrakh: "3px"
  thali: "14px"
  thali-tablett: "30px"
  pille: "999px"
  rund: "50%"
spacing:
  rand: "clamp(16px, 4vw, 48px)"
  max: "1240px"
  kopf: "72px"
  kopf-mobil: "64px"
  daumen: "68px"
  abschnitt: "clamp(80px, 11vw, 140px)"
  spalten: "clamp(32px, 6vw, 96px)"
  chip-abstand: "8px"
components:
  ajrakh-knopf-haupt:
    backgroundColor: "{colors.ajrakh-kurkuma}"
    textColor: "{colors.ajrakh-auf-kurkuma}"
    rounded: "{rounded.ajrakh}"
    padding: "0.7em 1.35em"
    height: "48px"
  ajrakh-knopf-haupt-hover:
    backgroundColor: "{colors.ajrakh-kurkuma-hell}"
  ajrakh-knopf-linie:
    backgroundColor: "transparent"
    textColor: "{colors.ajrakh-reserve}"
    rounded: "{rounded.ajrakh}"
    padding: "0.7em 1.35em"
    height: "48px"
  ajrakh-knopf-auf-tuch:
    backgroundColor: "{colors.ajrakh-krapp}"
    textColor: "{colors.ajrakh-reserve}"
    rounded: "{rounded.ajrakh}"
    padding: "0.7em 1.35em"
  ajrakh-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ajrakh-tinte}"
    rounded: "{rounded.ajrakh}"
    padding: "0.4em 0.9em"
    height: "48px"
  ajrakh-chip-gewaehlt:
    backgroundColor: "{colors.ajrakh-krapp}"
    textColor: "{colors.ajrakh-reserve}"
  thali-knopf-haupt:
    backgroundColor: "{colors.thali-kurkuma}"
    textColor: "{colors.thali-auf-kurkuma}"
    rounded: "{rounded.pille}"
    padding: "0.7em 1.35em"
    height: "48px"
  thali-knopf-haupt-hover:
    backgroundColor: "{colors.thali-kurkuma-hell}"
  thali-knopf-linie:
    backgroundColor: "transparent"
    textColor: "{colors.thali-milch}"
    rounded: "{rounded.pille}"
    padding: "0.7em 1.35em"
    height: "48px"
  thali-knopf-auf-stahl:
    backgroundColor: "{colors.thali-lasur}"
    textColor: "#fbe9d6"
    rounded: "{rounded.pille}"
  thali-chip:
    backgroundColor: "rgba(255, 255, 255, 0.28)"
    textColor: "{colors.thali-gravur}"
    rounded: "12px"
    padding: "0.4em 0.9em"
    height: "48px"
  thali-chip-gewaehlt:
    backgroundColor: "{colors.thali-lasur}"
    textColor: "#fbe9d6"
  finder-option:
    rounded: "{rounded.pille}"
    padding: "0.5em 1.05em"
    height: "48px"
  karte-filter-chip:
    rounded: "{rounded.pille}"
    padding: "0.3em 0.95em"
    height: "40px"
  eingabefeld:
    backgroundColor: "transparent"
    rounded: "{rounded.ajrakh}"
    padding: "0.65em 0.8em"
    height: "48px"
---

# Design System: Bombay Freising

> **Stand der Abnahme.** Die Website existiert in zwei Entwürfen, zwischen denen der Inhaber noch wählt. Beide teilen eine Bausteinschicht (`css/base.css`, `js/core.js`, `js/lieblinge.js`); jedes Thema setzt dieselben Rollen-Variablen (`--bg`, `--fg`, `--muted`, `--line`, `--accent`, `--on-accent`, `--panel`, `--on-panel`, `--focus`, `--radius`, `--font-display`, `--font-body`) und seinen eigenen Charakter. Tokens mit Präfix `ajrakh-` gehören zu Thema A (`index.html`, `css/ajrakh.css`), Tokens mit Präfix `thali-` zu Thema B (`thali.html`, `css/thali.css`), alles ohne Präfix ist gemeinsam. Nach der Wahl wird das nicht gewählte Thema mit seinen Tokens gestrichen.
>
> **Nur für die Abnahme:** der Umschalter A/B (Navigationslink „Entwurf B · Thali“ bzw. „Entwurf A · Ajrakh“ und der Fußzeilen-Hinweis „Abnahme: …“) ist kein Teil des Systems und wird nach der Wahl entfernt, samt seiner Regeln in `base.css`.

## Overview

**Creative North Star: „Was auf dem Tisch liegt“**

Beide Themen holen ihre Gestaltung aus einem echten Gegenstand der indischen Esskultur statt aus einem Restaurant-Stil. Thema A ist ein handbedrucktes Ajrakh-Tuch: Abschnitte sind vollflächig bedruckte Bahnen in Krapprot, Indigo und Kohle, mit einem Rosetten-Jaal als Rapport, Punktbordüren zwischen den Bahnen und Fotos in Bogenfenstern, die aus dem Logo geschnitten sind. Bewegung ist das Aufdrücken eines Stempels. Thema B ist ein gedeckter Tisch: Tawa-Schwarz, gehämmertes Kupfer, konzentrisch gebürsteter Edelstahl. Die Lieblingsgerichte liegen in Katoris auf einer drehbaren Thali-Platte, die Gewürze in einer Masala-Dabba, deren Deckel beim Scrollen abgleitet. Bewegung ist Licht, das angeht, und Metall, das sich dreht.

Gemeinsam ist beiden die Ordnung: Das Essen und der Raum sind die Hauptdarsteller, die Gestaltung rahmt. Kurkuma ist in beiden Welten die einzige Handlungsfarbe. Die Dichte ist großzügig (Abschnitte 80 bis 140 px Innenabstand), die Seite liest sich als eine Folge ganzer Bahnen, nicht als Kartenraster. „Heute offen?“ und „Tisch reservieren“ sind auf jedem Bildschirm einen Daumen weit entfernt: oben im Kopf, auf Mobilgeräten in der Daumenleiste.

Abgelehnt sind in beiden Verträgen das schwarz-goldene „Luxus-Inder“-Klischee und das Foodfoto- bzw. Kartenraster.

**Key Characteristics:**
- Ein Gegenstand pro Thema (Tuch oder Tisch), aus dem Farbe, Form, Textur und Bewegung abgeleitet sind.
- Vollflächige Bahnen statt Karten; Abgrenzung durch Feldwechsel, Bordüren und Linien.
- Kurkuma nur für Handlungen; alle anderen Farben sind Material.
- Dunkle, warme Grundflächen mit hellem Lesetext; helle Flächen nur für das Formular (Tuch bzw. Stahltablett) und die Merkzettel-Schublade in A.
- Display-Schrift als Stempel (A) bzw. Gravur (B), humanistische Grotesk als Lesetext.
- Material entsteht aus Code: Inline-SVG-Rapporte in A, mit `tools/materialien.py` gerenderte Raster in B. Keine Fremdbilder für Material.

## Colors

Beide Paletten sind warm-dunkel mit einer einzigen gelben Handlungsfarbe; A ist farbig-textil, B ist metallisch-zurückhaltend.

### Primary
- **Kurkuma** (`ajrakh-kurkuma` / `thali-kurkuma`): die Handlungsfarbe. Hauptknöpfe („Tisch reservieren“), Merkzettel-Knopf und -Pille, Mittelfeld der Daumenleiste („Bestellen“), gewählte Finder-Optionen, Fortschrittsbalken des Reservier-Assistenten, Fokusring. In A zusätzlich als kleine Punkte zwischen den Wegen der Bühne und den Gewürzen im Gewürzband und als Linie über den Zitaten; in B als Fokusring um die gewählte Katori und Schale. Zustand „geschlossen“ im Heute-Status.
- **Kurkuma hell** (`*-kurkuma-hell`): ausschließlich Hover des Hauptknopfs.
- **Text auf Kurkuma** (`*-auf-kurkuma`): fast schwarzes Braun, nie Weiß.

### Secondary
- **Krapprot** (`ajrakh-krapp`, A): Grundfarbe der Bühne, des Finders, der Galerie und der Reservierung; auf dem hellen Tuch die Handlungsfarbe (gewählte Chips, Knöpfe, Links).
- **Indigo** (`ajrakh-indigo`, A): zweite Bahnfarbe für Lieblinge, Speisekarte und Besuch. **Indigo tief** (`ajrakh-indigo-tief`) ist der Hintergrund der klebenden Kartenwerkzeuge.
- **Gehämmertes Kupfer** (B): kein Farbwert, sondern das gerenderte Raster `img/kupfer-gehaemmert.webp` (400 px Kachel) unter einer Lasur `rgba(40, 12, 3, .6)`; als Seitenverlauf hinter der Gewürzdose und der Reservierung. Wo Text steht, ist die Lasur dunkler.
- **Lasurbraun** (`thali-lasur`, B): Handlungsfarbe auf dem hellen Stahltablett (Hauptknopf, gewählter Chip, Fokus), weil Kurkuma auf Stahl nicht trägt.

### Tertiary
- **Champagner** (`thali-champagner`, B): Logo, Gangüberschriften der Karte, Hindi-Namen der Gewürze.
- **Kupfer hell** (`thali-kupfer-hell`, B): Trennlinie und Vorschlagszeile des Finder-Ergebnisses.
- **Chili** (`thali-chili`, B): nur die Schärfe-Schoten; mischt sich pro Stufe mit Gelb (`color-mix` in OKLab).
- **Schärfe-Hinweis** (`schaerfe-hinweis`): Farbe des „scharf“-Etiketts in der Speisekarte, beide Themen.
- **Offen-Grün** (`ajrakh-offen` / `thali-offen`): nur der pulsierende Punkt „jetzt geöffnet“ und, leicht verschoben, das Veg-Etikett.

### Neutral
- **Kohle** (`ajrakh-kohle`, A): Seitengrund, Handwerk-, Stimmen- und Fußbahn, Kopf beim Scrollen (`rgba(24,16,14,.9)` mit Blur), Gewürzband. Nie flach: Kohlebahnen tragen den Kohle-Jaal.
- **Reserve / Baumwollweiß** (`ajrakh-reserve`, A): Lesetext, Linien, Logo; als Fläche für das Reservier-Tuch und die Merkzettel-Schublade.
- **Reserve gedämpft** (`ajrakh-reserve-gedaempft`) und **Linie** (`ajrakh-linie`): Nebentext und Haarlinien auf den farbigen Bahnen.
- **Tinte** (`ajrakh-tinte`, A): Text auf dem hellen Tuch und in der Schublade.
- **Tawa** (`thali-tawa`, B): Seitengrund, Bühne-Abblendung, Finder, Stimmen, Fuß, Kopf beim Scrollen (`rgba(18,14,11,.88)` mit Blur). **Tawa 2** (`thali-tawa-2`): Galerie, Speisekarte, Schublade.
- **Milch** (`thali-milch`, B) mit **Milch gedämpft** und **Linie**: Lesetext, Nebentext, Haarlinien.
- **Gravur** (`thali-gravur`, B): Text auf dem Stahltablett, mit 1 px hellem Lichtschatten darunter.

### Named Rules
**Die Kurkuma-Regel.** Kurkuma bedeutet „hier handeln“. Jede Fläche in Kurkuma ist klickbar oder zeigt einen gewählten Zustand; Dekor in Kurkuma ist auf die kleinen Trennpunkte und Zitatlinien in A beschränkt. Auf hellen Flächen (Tuch, Stahl) übernimmt Krapprot bzw. Lasurbraun diese Rolle.

**Die Material-statt-Farbe-Regel (B).** Stahl und Kupfer sind gerenderte Raster aus `tools/materialien.py`, nie CSS-Verläufe in Grau oder Orange. Neue Metallflächen werden im Skript gerendert und in `img/QUELLEN.md` belegt.

**Die Nie-flach-Regel (A).** Jede Bahn trägt ihren Rapport: Krapp und Indigo den Jaal, Bühne und Lieblinge den dichten Jaal, Kohle den Kohle-Jaal, darüber ein ruhendes Korn (`multiply`, 55 %). Eine einfarbige Bahn ohne Druck gibt es nicht.

## Typography

**Thema A, Display:** Rozha One (Georgia als Fallback), immer Gewicht 400.
**Thema A, Lesetext:** Mukta 400/500/700 (Segoe UI, system-ui).
**Thema B, Display:** Kalnia, variabel 300–700, verwendet mit 500 (Georgia).
**Thema B, Lesetext:** Anek Latin, variabel in Gewicht und Breite (Segoe UI, system-ui); Fakten-Unterzeilen mit `font-stretch: 90%`.

**Character:** In A ist die Display-Schrift ein Druckstempel: kräftige Kontraste, eng gesetzt, mit Stempel-Animation. In B ist sie eine Gravur: feiner, leicht negativ gesperrt, auf Stahl mit Prägeschatten. Der Lesetext ist in beiden eine ruhige, indisch entworfene Grotesk.

### Hierarchy
- **Display** (A: Rozha 400, `clamp(2.6rem, 6.4vw, 5.6rem)`, 0.98; B: Kalnia 500, `clamp(2.6rem, 5.4vw, 4.6rem)`, 0.98): nur der Name des gerade gezeigten Lieblingsgerichts.
- **Headline** (A: `clamp(2.3rem, 5.2vw, 4.4rem)`, −0.01em; B: `clamp(2.2rem, 5vw, 4.2rem)`, 1.02, −0.015em): Abschnittsüberschriften `h2`, je eine pro Bahn, ohne Dachzeile darüber.
- **Title** (`clamp(1.5rem, 3vw, 2rem)`, 1.1): Fragen des Reservier-Assistenten und des Finders, Ganglisten-Überschriften (`clamp(1.7rem, 3.2vw, 2.5rem)`), Adresse, Zitate (`clamp(1.25rem, 1.9vw, 1.65rem)`, 1.3). Preise des Lieblingsgerichts in Display-Schrift, 2.2rem, tabellarische Ziffern.
- **Body** (`1.0625rem`, 1.6; unter 620 px `1rem`): Lesetext, Absätze auf 42–52ch begrenzt, Speisekarten-Hinweise auf 62ch. Nebentext `.93rem` in gedämpfter Farbe.
- **Label** (`.7rem`, 700, `.05em`, VERSALIEN): nur die Speisekarten-Etiketten veg/vegan/scharf; ihr Verwandter ist die Gruppenbezeichnung „Mittags“/„Abends“ im Zeitschritt (`.85rem`, `.06em`, Versalien, 75 % Deckkraft).

### Named Rules
**Die Ziffern-Regel.** Preise, Nummern, Uhrzeiten, Zähler und die Öffnungszeiten-Tabelle stehen in tabellarischen Ziffern.

**Die Eine-Überschrift-Regel.** Eine Bahn hat genau eine Überschrift in Display-Schrift; Kontext steht im Absatz darunter, nicht in einer Kleinzeile darüber.

## Layout

Ein Container `min(100% - 2 × rand, 1240px)` mit Seitenrand `clamp(16px, 4vw, 48px)`. Jede Bahn ist vollflächig und hat vertikal `clamp(80px, 11vw, 140px)` (Galerie und Stimmen etwas weniger). Innerhalb einer Bahn ist das Grundmuster eine asymmetrische Zweispalte (`.8fr/1.2fr` bis `1.15fr/.85fr`, Spaltenabstand `clamp(32px, 6vw, 96px)`): links Überschrift und Absatz, im Finder klebend (`top: kopf + 32px`), rechts die Bühne des Bausteins, getrennt durch eine Haarlinie links (A gestrichelt, B durchgezogen). Die Speisekarte läuft zweispaltig im Zeitungssatz (`columns: 2`, 56 px) und wird unter 1080 px einspaltig.

Zwei Bahnen pro Thema sind scrollgesteuerte Bühnen mit `position: sticky`: in A der Raum (280vh, das Bogenfenster weitet sich von `min(40vw, 50vh)` bis zur Vollfläche), in B die Gewürzdose (210vh, der Deckel gleitet ab). Mit `prefers-reduced-motion` werden beide zu statischen Bahnen.

Brüche: 1080 px (Karte einspaltig), 900 px (alle Zweispalten einspaltig, Kopf 64 px, Vollbild-Menü, Daumenleiste 68 px erscheint, Merkzettel-Pille weicht ihr), 620 px (Lesetext 1rem, engere Speisekarte). Ankersprünge berücksichtigen die Kopfhöhe (`scroll-padding-top: kopf + 12px`).

## Elevation & Depth

Thema A ist flach wie Stoff: Tiefe entsteht durch Feldwechsel, Bordüren und den versetzten Weißdruck, Schatten sind weich und selten. Thema B ist physisch: Platte, Katoris, Dose, Deckel und Tablett werfen lange, weiche Schlagschatten und tragen innen eine Einwölbung, weil sie Gegenstände auf einem Tisch sind.

### Shadow Vocabulary
- **Druckknopf A** (`0 1px 0 rgba(0,0,0,.25), 0 8px 22px -10px rgba(0,0,0,.6)`; Hover `0 14px 28px -12px`): Hauptknopf auf den Bahnen.
- **Tuch A** (`0 30px 60px -30px rgba(0,0,0,.6)`): das Reservier-Tuch liegt auf der Bahn.
- **Druckknopf B** (`inset 0 1px 0 rgba(255,255,255,.35), 0 10px 24px -12px rgba(0,0,0,.7)`): Kurkuma mit Glanzkante.
- **Gegenstand B** (Thali `0 50px 90px -30px rgba(0,0,0,.9)`, Dose `0 40px 70px -26px rgba(0,0,0,.7)`, Tablett `… 0 40px 70px -30px rgba(0,0,0,.85)`): große Metallobjekte.
- **Schälchen B** (`0 1.6cqw 2.4cqw -0.6cqw rgba(0,0,0,.6)` plus `inset 0 .8cqw 1.6cqw rgba(0,0,0,.55)` in der Mulde): Katori und Gewürzschale, in Containereinheiten, damit Schatten mit dem Objekt skalieren.
- **Schublade und Pille** (gemeinsam: `-20px 0 60px -20px rgba(0,0,0,.5)`, `0 10px 30px -8px rgba(0,0,0,.45)`): schwebende Ebenen über der Seite.

### Named Rules
**Die Gegenstand-Regel.** Ein Schatten bedeutet „das ist ein Ding“. In B tragen ihn Metallobjekte und das Tablett, in A nur Tuch, Hauptknopf und die schwebenden Ebenen. Flächen, Karten oder Textblöcke bekommen keinen.

## Shapes

**Thema A:** fast eckig (3 px). Die Signaturform ist das **Bogenfenster** aus dem Logo, ein Zwiebelbogen über geradem Schaft (Seitenverhältnis 100:130), als SVG-Maske; dahinter ein Reserve-Rand (5 px) und ein Bordüren-Rahmen (16 px). Linien sind gestrichelt wie Reservelinien im Druck (Speisekarte, Fakten, Finder, Handwerk); Rund nur für Stempel-Medaillons (76 px, Bordürenring) und Pillen.

**Thema B:** „Alles Runde ist eine Platte oder ein Schälchen.“ Knöpfe, Navigation, Suche, Filter sind Pillen (999 px), Bausteinflächen weich (14 px), das Stahltablett 30 px, Galerie-Bilder 22 px, die Schublade links 26 px. Metallobjekte sind Kreise mit gerendertem Ringschliff. Linien sind durchgezogen.

**Gemeinsam:** Finder-Optionen, Kartenfilter, Merkzettel-Knöpfe und Mengensteller sind Pillen in beiden Themen; Finder-Bilder sind Kreise.

## Components

### Buttons
Ein Druckknopf-Grundtyp (`.knopf`): mindestens 48 px hoch, `.7em 1.35em`, fett, Icon links mit `.55em` Abstand, beim Drücken `scale(.97)` in 160 ms.
- **Haupt:** Kurkuma mit dunklem Text; Hover Kurkuma hell (nur bei `hover: hover`). A eckig, B Pille mit Glanzkante.
- **Linie:** transparent, Textfarbe, `inset 0 0 0 1.5px currentColor`; Hover 10 % Lesetextfarbe als Fläche.
- **Klein:** 42 px, `.55em 1.1em`, `.95rem`, im Kopf.
- **Auf heller Fläche:** auf Tuch (A) Krapprot mit Reserve, auf Stahltablett (B) Lasurbraun mit `#fbe9d6`.
- **Rund (B):** 52 px Stahlknopf aus dem Dabba-Raster für Drehpfeile der Thali.

### Chips
- **Reservier-Chip:** 52 × 48 px Minimum, Haarlinie, Radius des Themas (auf dem Stahltablett 12 px mit 28 % Weiß). Gewählt: Handlungsfarbe der Fläche. Gesperrt: 35 % Deckkraft und durchgestrichen. Tageschips zeigen Wochentag klein, Datum in Display-Schrift.
- **Finder-Option:** Pille, 48 px, Haarlinie; Hover Linie in Textfarbe; gewählt Kurkuma.
- **Kartenfilter:** Pille, 40 px; gewählt invertiert (Textfarbe als Fläche), nicht Kurkuma, weil Filtern keine Handlung zum Ziel ist.
- **Schärfegrad:** Pille, 44 px, `inset 1px` Linie; gewählt Reserve/Milch-Fläche mit dunklem Text. A zeigt 1–4 Chili-Icons, B eine Schote, deren Farbe von Gelb zu Chili mischt.

### Cards / Containers
Es gibt keine Karten. Inhalt sitzt direkt auf der Bahn. Die zwei Ausnahmen sind das **Reservier-Tuch** (A: Reserve-Fläche, innen Doppelrahmen aus 1.5 px Krapplinie und gestrichelter Außenlinie, Abstand 10 px) und das **Stahltablett** (B: gerendertes `stahl-tablett.webp`, 30 px, Gravurtext). Beide setzen ihre Rollenvariablen lokal um (`--fg`, `--line`, `--accent`, `--focus`), sodass die gemeinsamen Bausteine ohne Sonderregeln darauf funktionieren.

### Inputs / Fields
- **Stil:** 48 px, `.65em .8em`, 1 px Haarlinie, Radius des Themas, transparent (auf Stahl 45 % Weiß).
- **Fokus:** Linie in Handlungsfarbe plus `0 0 0 3px` Ring aus 30 % Handlungsfarbe.
- **Suche der Speisekarte:** Lupe links, ganze Zeile reagiert auf `:focus-within`; in B Pille.
- **Fehler:** Text in `--fehler` des Themas (A auf Tuch `#a3141a`, B auf Stahl `#8a1c0c`), keine roten Rahmen.
- **Globaler Fokus:** 2 px Kontur in `--focus`, 3 px Abstand.

### Navigation
- **Kopf:** fest, 72 px, über der Bühne transparent mit ausgeblendeter Wortmarke; nach dem Scrollen dunkle 88–90-%-Fläche mit Blur und Wortmarke; beim Abwärtsscrollen weicht er nach oben. Rechts immer „Tisch reservieren“ (klein, Haupt).
- **Links:** Mukta/Anek 500, `.98rem`, gedämpft. Hover A: Kurkuma-Unterstrich wächst von links (1.5 px, 350 ms). Hover B: Pille mit 8 % Milch.
- **Mobil (≤ 900 px):** Vollbild-Menü in Display-Schrift (`~2rem`), Einträge durch Haarlinien getrennt (A gestrichelt auf Jaal-Krapp, B durchgezogen auf Tawa), darunter die Telefonnummer in Kurkuma.
- **Daumenleiste (≤ 900 px):** fest unten, 68 px plus Safe Area, dunkel 94 % mit Blur; drei Felder (Tisch, Bestellen in der Mitte in Kurkuma, Anrufen), sobald etwas gemerkt ist ein viertes für den Merkzettel mit Zähler. Ersetzt die schwebende Merkzettel-Pille.

### Heute-Status
Punkt in Statusfarbe plus Text in Lesetext-Weiß, fett, dahinter der Zusatz („bis 22:00“ / „Wieder Mittwoch 11:30“) gedämpft nach einem Mittelpunkt. Geöffnet: grüner Punkt mit Puls (2.4 s, Ring wächst auf 2.8×). Geschlossen: Kurkuma-Punkt, kein Puls. Unter 620 px bricht der Zusatz in eine eigene Zeile.

### Reservier-Assistent
Vier Schritte (Personen → Tag → Uhrzeit → Name), oben als Segmentbalken (3 px, füllt sich in Handlungsfarbe von links). Jeder Schritt gleitet 14 px von rechts ein (450 ms). Abschluss als Zusammenfassung mit Display-Zeile; dann Anruf oder vorformulierte E-Mail. Uhrzeiten außerhalb der Öffnungszeiten sind gesperrt, nicht versteckt.

### Geschmacks-Finder
Nummerierte Fragen (Nummer im Kreis aus 1.5 px Innenlinie), noch nicht erreichte Schritte bei 42 %. Ergebnis: rundes Gerichtsfoto (96–150 px) mit Display-Name; in A mit Kohle- und Reservering, in B in einem Stahl-Katori-Rand.

### Speisekarte
Klebende Werkzeugleiste unter dem Kopf (Suche, Filter, Gänge-Leiste mit ausblendendem rechtem Rand), Zähler. Posten als Raster `Nummer | Name + Text | Preis`, Trennlinie unten (A gestrichelt). Merken-Knopf als Pille, gewählt in Handlungsfarbe.

### Merkzettel-Schublade
Rechts einfahrende Schublade (max. 440 px, 450 ms), Schleier 55 %. A: helles Baumwolltuch mit Krapprot als Handlungsfarbe. B: Tawa 2 mit runder Innenkante. Mengensteller als Pille, Summe fett in tabellarischen Ziffern.

### Lightbox
Vollfläche `rgba(8,5,3,.92)`, Bild auf 92vw/82vh, 4 px Radius, öffnet mit leichtem Heranzoomen; runde 52-px-Knöpfe mit 8 % Weiß.

### Signatur A: Bogenfenster und Stempelreihe
Fotos stehen ausschließlich im Bogenfenster; die Lieblinge haben darunter eine Stempelreihe runder Medaillons mit Bordürenring, gewählt mit 3-px-Kurkuma-Ring und 4 px angehoben. Das Gewürzband ist eine Kohlezeile in Display-Schrift mit Kurkuma-Punkten im Reserve-Ring zwischen den Wörtern, eingefasst von zwei Bordüren.

### Signatur B: Thali und Masala-Dabba
Die Thali ist eine Stahlplatte (bis 660 px) mit Katoris auf einem Ring; ziehen oder Pfeile drehen sie (`--R`, 1 s, `cubic-bezier(.2,.9,.25,1)`), das gewählte Schälchen wächst auf 1.24 mit Kurkuma-Ring und Dampf. Die Mitte trägt den Gerichtsnamen als Gravur. Die Dabba zeigt sieben Gewürzschalen; der Deckel gleitet scrollgesteuert vollständig und undurchsichtig von der Dose, nie als Geist darüber.

## Do's and Don'ts

### Do:
- **Do** jede neue Fläche über die Rollenvariablen des Themas (`--bg`, `--fg`, `--line`, `--accent`, `--focus`) aufbauen, damit die gemeinsamen Bausteine unverändert funktionieren; helle Inseln setzen ihre Rollen lokal um wie Tuch und Tablett.
- **Do** Kurkuma nur für Handlungen und gewählte Zustände verwenden; auf hellen Flächen Krapprot (A) bzw. Lasurbraun (B).
- **Do** in A jede Bahn mit ihrem Jaal und dem Korn bedrucken und Bahnen mit der Punktbordüre (30 px hoch, 44 px Rapport) trennen.
- **Do** in A Fotos im Bogenfenster aus dem Logo zeigen; in B Gerichte in Stahl-Katoris oder als hohe Bänder mit 22 px Radius.
- **Do** neue Metall- oder Gewürzflächen in B mit `tools/materialien.py` rendern und in `img/QUELLEN.md` eintragen; das Logo nur über `tools/logo.py` ändern (erzeugt `js/logo.js`).
- **Do** Treffflächen von mindestens 44 px (Knöpfe und Chips 48 px) einhalten und `:hover` nur unter `@media (hover: hover)` setzen.
- **Do** jede Bewegung mit `prefers-reduced-motion` zu einem ruhigen Endzustand machen; scrollgesteuerte Bühnen werden statisch.
- **Do** `--ease-out` (`cubic-bezier(0.23, 1, 0.32, 1)`) für Ein- und Auftritte verwenden; in A den Stempel-Überschwinger (`cubic-bezier(.3, 1.4, .5, 1)`), in B das Lichtangehen der Bühne.

### Don't:
- **Don't** das schwarz-goldene „Luxus-Inder“-Klischee bauen (Gold auf Schwarz als Schmuck, Ornamentrahmen ohne Herkunft).
- **Don't** Inhalte in Kartenraster oder ein Foodfoto-Raster legen; Inhalt sitzt auf der Bahn.
- **Don't** Stahl oder Kupfer in B als CSS-Grauverlauf oder flaches Orange nachahmen.
- **Don't** in A eine Bahn flach einfärben oder Schatten auf Textblöcke legen; Tiefe kommt aus Druck und Feldwechsel.
- **Don't** Kurkuma als Dekorfläche oder für Filterzustände verwenden; Filter sind invertiert.
- **Don't** eine Kleinzeile oder Dachzeile über Abschnittsüberschriften setzen.
- **Don't** die beiden Themen mischen: keine Bogenfenster in B, keine Stahlobjekte oder Pillenknöpfe in A.
- **Don't** den A/B-Umschalter (Navigationslink und Fußzeilen-Hinweis) als Bestandteil übernehmen; er ist nur für die Abnahme.
