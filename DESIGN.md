---
name: Bombay Freising
description: Safran-Editorial. Ein Food-Magazin zum Antippen; die Schale liegt auf dem Rangoli-Ring, die Welt wechselt die Farbe, wenn der Gast es will.
colors:
  weiss: "#ffffff"
  porzellan: "#f3f3f5"
  tinte: "#17110e"
  tinte-2: "rgba(23, 17, 14, 0.78)"
  tinte-3: "rgba(23, 17, 14, 0.6)"
  linie: "rgba(23, 17, 14, 0.12)"
  rani: "#c4145d"
  pink: "#d42f73"
  pfau: "#0d5a60"
  safran: "#ff8a1c"
  kardamom: "#2c6b45"
  gruen-ok: "#1f8a4c"
  wa-gruen: "#177a41"
  fehler: "#b3123f"
  veg-grund: "#e6f2e9"
  veg-text: "#1f6b3a"
  scharf-grund: "#fde8e4"
  scharf-text: "#b3261b"
typography:
  display-buehne:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(3rem, 5.4vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "'SOFT' 40"
  display:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(3.2rem, 7.4vw, 7.4rem)"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-0.045em"
    fontVariation: "'SOFT' 40"
  headline:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.8rem, 5.6vw, 5.8rem)"
    fontWeight: 560
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontVariation: "'SOFT' 40"
  gericht:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.3rem, 3.6vw, 3.6rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "'SOFT' 40"
  zitat:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.7rem, 2.9vw, 3rem)"
    fontWeight: 480
    lineHeight: 1.18
    letterSpacing: "-0.02em"
    fontVariation: "'SOFT' 40"
  title:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)"
    fontWeight: 560
    lineHeight: 1.1
    letterSpacing: "-0.025em"
    fontVariation: "'SOFT' 40"
  posten:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "1.32rem"
    fontWeight: 560
    lineHeight: 1.2
    letterSpacing: "-0.01em"
    fontVariation: "'SOFT' 40"
  body:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 420
    lineHeight: 1.6
    letterSpacing: "normal"
  lead:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 420
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  knopf:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    letterSpacing: "0.005em"
rounded:
  feld: "14px"
  kachel: "18px"
  karte: "20px"
  panel: "22px"
  bild: "28px"
  pille: "999px"
spacing:
  rand: "clamp(20px, 4.2vw, 64px)"
  max: "max(1440px, 76vw)"
  kopf: "76px"
  kopf-mobil: "64px"
  abschnitt: "clamp(90px, 11vw, 160px)"
components:
  pille-voll:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.weiss}"
    typography: "{typography.knopf}"
    rounded: "{rounded.pille}"
    padding: "0 1.55em"
    height: "52px"
  pille-voll-hover:
    backgroundColor: "#33261f"
  pille-rand:
    textColor: "{colors.tinte}"
    typography: "{typography.knopf}"
    rounded: "{rounded.pille}"
    padding: "0 1.55em"
    height: "52px"
  pille-hell:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.pille}"
    padding: "0 1.55em"
    height: "52px"
  pille-klein:
    rounded: "{rounded.pille}"
    padding: "0 1.15em"
    height: "42px"
  waehler-tab:
    rounded: "{rounded.pille}"
    padding: "5px 18px 5px 5px"
    height: "54px"
  waehler-licht:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.pille}"
  tafel-pfeil:
    rounded: "{rounded.pille}"
    size: "54px"
  feld:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.feld}"
    padding: "0.7em 1em"
    height: "50px"
  suche:
    backgroundColor: "{colors.porzellan}"
    rounded: "{rounded.pille}"
    padding: "0 20px"
    height: "54px"
  segment:
    backgroundColor: "{colors.porzellan}"
    rounded: "{rounded.pille}"
    padding: "4px"
  schnell-chip:
    backgroundColor: "{colors.safran}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.pille}"
    padding: "0 1.25em"
    height: "48px"
  schnell-chip-pfau:
    backgroundColor: "{colors.pfau}"
    textColor: "{colors.weiss}"
  schnell-chip-rani:
    backgroundColor: "{colors.rani}"
    textColor: "{colors.weiss}"
  schnell-chip-hover:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.weiss}"
  filter-chip:
    textColor: "{colors.tinte}"
    rounded: "{rounded.pille}"
    padding: "0 1.1em"
    height: "44px"
  filter-chip-aktiv:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.weiss}"
  dazu-chip:
    textColor: "{colors.tinte}"
    rounded: "{rounded.pille}"
    padding: "0 1em"
    height: "40px"
  res-chip-aktiv:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.rani}"
    rounded: "{rounded.pille}"
    height: "52px"
  marke-chip:
    backgroundColor: "{colors.porzellan}"
    textColor: "{colors.tinte-2}"
    rounded: "{rounded.pille}"
    padding: "0.2em 0.65em"
  marke-chip-veg:
    backgroundColor: "{colors.veg-grund}"
    textColor: "{colors.veg-text}"
  marke-chip-scharf:
    backgroundColor: "{colors.scharf-grund}"
    textColor: "{colors.scharf-text}"
  gang-zeichen:
    textColor: "{colors.tinte}"
    rounded: "{rounded.pille}"
    size: "40px"
  gang-zeichen-offen:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.weiss}"
  plus:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.weiss}"
    rounded: "{rounded.pille}"
    size: "44px"
  plus-hover:
    backgroundColor: "{colors.rani}"
  stepper:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.weiss}"
    rounded: "{rounded.pille}"
    height: "44px"
  schublade-panel:
    backgroundColor: "{colors.weiss}"
    rounded: "{rounded.panel}"
    width: "min(460px, calc(100% - 20px))"
  reservieren:
    backgroundColor: "{colors.rani}"
    textColor: "{colors.weiss}"
  fuss:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.weiss}"
---

# Design System: Bombay Freising

## Overview

**Creative North Star: "Die Schale bleibt, die Welt wechselt die Farbe"**

Safran-Editorial ist ein Food-Magazin zum Antippen. Reines Weiß ist der Grund, Tinte trägt Text und Handlungen, Rani aus dem Logo ist die Markenfarbe, und jedes der vier Lieblingsgerichte besitzt eine eigene satte Vollfläche. Auf der Startseite liegt die freigestellte Schale auf einem fein gezeichneten Rangoli-Ring, mitten in ihrer Farbe: Butter Chicken in Rani-Pink, Karahi Paneer in Pfauenblau, Dal Makhni in Safran, Jheenga Curry in Kardamom. Gewechselt wird nur, wenn der Gast es will; dann wächst die neue Farbe als Kreis von der Stelle aus, an der er getippt hat.

Die Seite ist ruhig und groß gesetzt: wenige Elemente pro Bildschirm, Fraunces mit weichen Enden (SOFT 40) für Titel, Namen, Zitate und Preise, Hanken Grotesk für alles Lesbare, runde Pillen in Tinte. Das Essen ist der Hauptdarsteller. Der indische Ton kommt aus selbst gezeichneter feiner Linienarbeit (Rangoli, Blüte, Ranke, Paisley, Jali, Toran mit Laternen) und nie aus Requisiten, Metallglanz oder Bogenrahmen. Verworfen sind die dunkle Restaurant-Bühne, Fotoraster, Kupfer und Messing, Gewürzdose und Thali-Platte, Bögen und Masken sowie staubige Farben.

**Key Characteristics:**
- Weißer Grund, Tinte (#17110e) für Text und Knöpfe, Rani (#c4145d) aus dem Logo als Markenfarbe.
- Vier satte Gerichtsflächen, je eine pro Bildschirm, immer vollflächig; Safran (#ff8a1c) ist ein klares Orange.
- Fraunces variabel mit automatischer Optik-Achse und SOFT 40; Hanken Grotesk 420 für Lauftext.
- Freigestellte Schalen mit weichem Schlagschatten statt Fotokacheln; ein einziges echtes Foto (Chicken Tikka).
- Ornamente als feine, selbst gezeichnete Inline-SVG-Linien in currentColor oder Palettenfarben.
- Alles Bedienbare ist rund: Pillen, Kreise, Ringe.
- Bewegung antwortet auf den Gast (Tippen, Wischen, Scrollen) und fällt ohne Bewegung zu sofortigen Wechseln zusammen.

## Colors

Weiß und Tinte tragen die Seite; Farbe kommt als ganze Fläche oder als dünne Linie, nie als Akzent-Streusel.

### Primary
- **Tinte** (#17110e): Text, volle Pillen, Plus-Knopf, Stepper, aktiver Filter-Chip, Gang-Ring im offenen Zustand, Linie über jeder Menügruppe, Schnüre der Laternen, Fuß. Hover der Pille: #33261f.
- **Rani** (#c4145d): Markenfarbe aus dem Logo. Logo im Kopf, Zähler-Plakette, `::selection`, Fokusring, Heute-Plakette, Hover des Plus-Knopfs, Gruppentitel und Blüte der Speisekarte, Ranke über „141 Gerichte“, große Note „4,5“, die vollflächige Reservieren-Sektion (weißer Text, 5,8:1).

### Secondary: die vier Gerichtsflächen
Jede Fläche hat einen festen Textton (`data-ton`), in dieser Reihenfolge auf der Bühne:
- **Rani-Pink** (#d42f73, Butter Chicken): Text weiß (4,7:1). Erste Fläche und `theme-color`.
- **Pfauenblau** (#0d5a60, Karahi Paneer): Text weiß (7,9:1).
- **Safran** (#ff8a1c, Dal Makhni): Text in Tinte (etwa 7,9:1); weiß auf Safran fällt durch (2,4:1). Auch Schnellwahl-Chip, Sterne, Ringelblumen im Toran, Blütenblätter der Gruppen-Rosette (70 % gemischt).
- **Kardamom** (#2c6b45, Jheenga Curry): Text weiß (6,4:1). Auch Mangoblätter im Toran.

Außerhalb der Bühne tauchen die Gerichtsfarben nur als ganze kleine Flächen auf: Schnellwahl-Chips (Safran, Pfau, Rani im Wechsel) und die Farbfelder der Laternen.

### Neutral
- **Weiß** (#ffffff): Grund jeder Seite außer Bühne, Reservieren und Fuß; Schublade, Felder, Menüfläche, fester Kopf (Weiß .97).
- **Porzellan** (#f3f3f5): stille Mulden für Bedienelemente: Suchfeld, Segment, Mengenwahl, Schärfewahl, Schließen-Kreis, Marken-Chip, Hover des Gang-Rings.
- **Tinte-2** (rgba 23,17,14 / .78): Untertitel, Beschreibungen, Probenamen der Gänge, Feld-Labels, Status.
- **Tinte-3** (rgba 23,17,14 / .6): Nummern, Platzhalter, Hinweise.
- **Linie** (rgba 23,17,14 / .12): 1px-Trennlinien in Listen, Feldränder, Filter-Kontur, Kopf-Unterkante.

### Funktionsfarben
- **Grün-OK** (#1f8a4c): nur der atmende Offen-Punkt.
- **WhatsApp-Grün** (#177a41, weißer Text 5,4:1): nur die Pille „Per WhatsApp senden“.
- **Fehler** (#b3123f): Fehlermeldungen in Formularen (auf Rani: weiß, fett).
- **Veg** (#e6f2e9 / #1f6b3a) und **Scharf** (#fde8e4 / #b3261b): Marken-Chips der Speisekarte.

### Named Rules
**Die Ein-Feld-Regel.** Pro Bildschirm herrscht höchstens eine Gerichtsfläche, und sie füllt die volle Breite. Gerichtsfarben werden nie zu Kacheln, Rahmen oder Textfarben auf Weiß; kleine ganze Flächen (Chip, Laterne, Blüte) sind erlaubt.

**Die Ton-Regel.** Safran trägt Tinte; Rani-Pink, Pfauenblau und Kardamom tragen Weiß. Kopf, Pillen, Wähler-Licht und Pfeile folgen dem Ton (`data-ton`, `is-hell`).

**Die Tinte-handelt-Regel.** Auf Weiß ist jede Handlung Tinte. Rani markiert Marke und Zustände (Zähler, Heute, Fokus, Gruppentitel), ist aber auf weißem Grund keine Knopffüllung. Ausnahme ist die Schnellwahl, deren Chips bewusst farbig sind.

## Typography

**Display Font:** Fraunces, variabel (opsz, wght 100–900, SOFT), Fallback Georgia, Times New Roman
**Body Font:** Hanken Grotesk, variabel 300–700, Fallback Helvetica Neue, Arial

**Character:** Eine warme, weich gerundete Antiqua mit Gewicht 560–600 und enger Laufweite gegen eine sachliche Grotesk, die alles Lesbare und Bedienbare übernimmt. Die Wurzelgröße wächst fließend mit dem Fenster: `clamp(16px, calc(12.4px + .25vw), 19.5px)`.

### Hierarchy
- **Display-Bühne** (600, clamp(3rem, 5.4vw, 6rem), 0.98, -0.035em): der Intro-Titel auf der Bühne.
- **Display** (600, clamp(3.2rem, 7.4vw, 7.4rem), 0.9, -0.045em): Titel der Speisekarte; „141 Gerichte …“ mit 560, clamp(2.8rem, 6.4vw, 7rem), -0.035em.
- **Headline** (560, clamp(2.6–2.8rem, ~5–6vw, 5.4–6.2rem), 1, -0.025em): Sektionstitel (Lehmofen, Laternen, Besuch, Reservieren).
- **Gericht** (600, clamp(2.3rem, 3.6vw, 3.6rem), -0.03em): Gerichtsname auf der Bühne; Preis daneben 560, 1.9rem, tabellarisch.
- **Zitat** (480, clamp(1.7rem, 2.9vw, 3rem), 1.18, -0.02em): Stimmen der Gäste.
- **Note** (600, clamp(6rem, 12vw, 12rem), 0.8, -0.05em, Rani): die große „4,5“.
- **Title** (560, clamp(1.6rem, 2.6vw, 2.4rem), 1.1, -0.025em): Gang-Titel der Speisekarte; Gruppentitel 560 clamp(1.5rem, 2vw, 1.9rem) in Rani; Schnellwahl-Frage clamp(1.5rem, 2.2vw, 2.1rem); Fakten im Lehmofen 1.55rem; Reservier-Frage clamp(1.9rem, 3.4vw, 2.8rem).
- **Posten** (560, 1.32rem, 1.2, -0.01em): Gerichtsnamen in der Karte; Formulartitel 1.45rem.
- **Zahlen von Gewicht** in Fraunces, tabellarisch: Summe 1.7rem, Kalendertag 1.6rem, Reservier-Karte 2.4rem.
- **Body** (420, 1.0625rem, 1.6): Lauftext; Leads 1.08–1.15rem mit 40–46ch.
- **Label** (600, 0.85rem): Feld-Labels; Chips 0.74–1rem/600; Hinweise 0.82rem in Tinte-3.
- **Kleine Überschriften** in Hanken 600, 1–1.1rem, Satzschreibung: Fußspalten, Öffnungszeiten, Notentext.
- **Handschrift-Hinweis**: Fraunces 500, 1.05rem, SOFT 100, mit gezeichnetem Pfeil; nur einmal auf der Bühne.

### Named Rules
**Die Weiche-Fraunces-Regel.** Fraunces steht immer mit `font-optical-sizing: auto` und `font-variation-settings: "SOFT" 40`: kräftige Striche klein, feine groß, weiche Enden. Jede neue Fraunces-Klasse kommt in die SOFT-Liste in `site.css`. Titel tragen 560–600, nie unter 480.

**Die Zwei-Stimmen-Regel.** Fraunces für Namen, Überschriften, Zitate und Zahlen von Gewicht; Hanken für alles andere. Keine Versalien mit Sperrung, keine Überzeilen über Titeln: Ergänzende Zeilen (Herkunft, Nummer, Status) stehen unter dem Titel oder den Knöpfen.

## Layout

- **Wrap:** `width: min(100% - 2 * var(--rand), var(--max))`, zentriert. Der Rahmen wächst auf großen Schirmen mit (`--max` mindestens 1440px, sonst 76vw). `--rand` ist der einzige Seitenrand; vollflächige Elemente ziehen sich mobil mit `calc(var(--rand) * -1)` an die Kante.
- **Kopf:** fest, 76px (mobil 64px); Inhalte beginnen mit `calc(var(--kopf) + …)`.
- **Bühne:** mindestens 100svh, zweispaltig 5fr/6fr: links unten Intro und darunter das Gericht (Name, Satz, Preis, Pille, Herkunft) über einer 1.5px-Linie, rechts die Tafel (Ring, Schale, Pfeile, Größe min(56vh, 36vw, 720px)) und darunter der Wähler. Mobil eine Spalte, zentriert: Titel, Tafel, Gericht, Wähler, dann Unterzeile und Knöpfe.
- **Sektionsrhythmus:** vertikal clamp(90px, 11vw, 150–160px); Lehmofen und Zur Karte enger (clamp(48–64px … 96–128px)). Zweispaltige Raster mit leicht ungleichen Spalten (1.05/.95, .85/1.15, .8/1.2).
- **Listen statt Karten:** Fakten, Gänge, Öffnungszeiten, Menügänge, Posten, Zitate und Bestellzettel sind Zeilen mit Linie, keine Kästen.
- **Speisekarte:** Kopf zweispaltig (Titel / Unterzeile), darunter Schnellwahl und Werkzeugzeile (Suche, Filter, Treffer). Gruppen zweispaltig: Gruppentitel links (minmax(160px, .28fr)), Gänge rechts; über jeder Gruppe eine 1.5px-Tintenlinie. Mobil eine Spalte, Schnellwahl als waagrechter Streifen randlos.
- **Breakpoints:** 860px (einspaltig, Burger, Bühne gestapelt, Pfeile ausgeblendet, zwei Laternen ausgeblendet), 600px (Schublade wird Bodenblatt); Höhen-Abfragen auf der Bühne (unter 820px bzw. 720px entfällt der Gerichtssatz, unter 800px schrumpft die Tafel).

## Elevation & Depth

Flächen sind flach; Schatten gehören Gegenständen. Die Schalen, Schälchen und Laternen werfen weiche Schlagschatten, schwebende Bedienteile heben sich mit langen, weichen Schatten ab, alles andere trennt sich über Linie und Porzellan.

### Shadow Vocabulary
- **Schale auf der Bühne** (`filter: drop-shadow(0 30px 30px rgba(20,12,6,.34)) drop-shadow(0 7px 9px rgba(20,12,6,.2))`).
- **Schälchen und kleine Schalen** (`drop-shadow(0 4px 5px rgba(20,12,6,.3))` im Wähler; `drop-shadow(0 10px 10px rgba(20,12,6,.25))` im Gang; `drop-shadow(0 24px 30px rgba(23,17,14,.3))` Zeiger-Schale).
- **Laterne** (`drop-shadow(0 16px 14px rgba(20,12,6,.16))`).
- **Schwebender Knopf** (`0 18px 40px -14px rgba(23,17,14,.5)`): Bestellzettel-Knopf.
- **Schublade** (`0 30px 80px -20px rgba(23,17,14,.45)`) über einem Schleier rgba(23,17,14,.38).
- **Gleiter** (`0 2px 8px -2px rgba(23,17,14,.2)` Segment; `0 1px 3px rgba(23,17,14,.15)` Schärfewahl).
- **Kopf fest** (Weiß .97, `backdrop-filter: saturate(1.4) blur(10px)`, `0 1px 0` Linie).

### Named Rules
**Die Gegenstand-Regel.** Nur was man greifen, essen oder aufhängen kann, wirft Schatten. Keine harten Versatzschatten, keine Schatten auf Text, Ornamenten oder Sektionen.

## Shapes

Alles Bedienbare ist rund: Pillen (999px), Kreise (Pfeile 54px, Plus 44px, Schließen 44px, Burger 46px, Gang-Ring 40px), der Wähler als Pille mit wanderndem Licht. Das einzige Foto ist ein sanft gerundetes Quadrat (28px) auf Weiß und läuft mobil randlos ohne Rundung. Panels und Blätter 22px (mobil nur oben), Reservier-Karte 20px, Kalendertag 18px, Felder 14px. Geometrische Bildmasken (Bogen, Rippe, Kuppel, Radialverlauf) gibt es nicht; die Kuppel bleibt dem Logo vorbehalten. Der einzige Kreis-Clip ist die wachsende Farbe beim Gerichtswechsel.

### Ornamente
Alle Verzierungen sind selbst gezeichnete Inline-SVG-Linien (Strich 0.6–1.7), meist in `currentColor`, damit sie dem Ton folgen:
- **Rangoli-Ring** hinter der Schale: Punktkreis, 24 Blütenblätter, Zackenkreis; Deckkraft .42 (auf hellem Ton .34).
- **Blüte** (`#i-bluete`, acht Blätter): vor jedem Gruppentitel der Karte, Linie Rani, Blätter Safran 70 %.
- **Ranke** (Linie, Schleife, Rosette, Schleife, Linie), 210px in Rani, über „141 Gerichte“; zeichnet sich beim Hereinscrollen.
- **Paisley** als Wasserzeichen in der Reservieren-Fläche (Weiß .2, -16°); zeichnet sich selbst.
- **Jali-Band** (Sternmuster, 40px hoch, Weiß .16) an der Oberkante des Fußes.
- **Toran** aus Ringelblumen (Safran mit Rani-Kern) und Mangoblättern (Kardamom) an einer Tintenschnur, darunter Laternen: Akash-Kandil-Sterne und durchbrochene Jali-Metalllaternen in Tintenlinie mit Farbfeldern aus der Palette.

## Components

### Pillen
Ruhig, griffig, immer rund.
- **Shape:** 999px, Höhe 52px, Innenabstand 0 1.55em, Hanken 600 1rem; `:active` scale(.97) mit `--aus`.
- **`--voll`:** Tinte mit Weiß; Hover #33261f. Auf Rani und hellem Bühnenton weiß mit Rani- bzw. Tintentext.
- **`--rand`:** transparent, Innenkontur 1.5px currentColor; Hover Tinte 6 % (auf der Bühne: Glas).
- **`--hell`:** Weiß mit Tinte, für Farbflächen.
- **`--dazu`** (Bühne): „Auf den Bestellzettel“ mit SVG-Plus; gedrückt Glas mit Kontur und Haken.
- **`--klein`:** 42px, 0 1.15em, .94rem; im Kopf mobil 40px.
- **Zähler:** 22px-Plakette in Rani, tabellarisch, hüpft beim Hinzufügen.
- **Pfeil-Link:** Text 600 mit SVG-Pfeil, der bei Hover 4px nach rechts rückt.

### Bühne: Tafel und Wähler (Signatur)
- **Farbfläche:** volle Fläche je Gericht; Reihenfolge Butter Chicken, Karahi Paneer, Dal Makhni, Jheenga Curry.
- **Tafel:** Rangoli-Ring (138 % der Tafel), Schale, zwei Pfeilkreise 54px in Glas (Weiß .34 bzw. .14 auf hellem Ton), Hover Tinte bzw. Weiß. Die Schale lässt sich waagrecht ziehen (folgt mit Widerstand, dreht mit; ab 70px oder Schwung wechselt das Gericht, sonst federt sie zurück).
- **Wähler:** `tablist` als Glas-Pille, vier Tabs mit 44px-Schälchen und Namen; ein Licht (Tinte, auf hellem Ton Weiß) gleitet in .55s `--aus` unter die Wahl. Hover kippt das Schälchen (-14°, 1.08). Pfeiltasten, Home und End nach WAI-ARIA. Mobil vier gleich breite Spalten, Schälchen über dem Namen.
- **Wechsel:** nur auf Eingabe. Die neue Farbe wächst als Kreis vom Tipppunkt (.85s, `power3.inOut`); der Ton wechselt nach .32s; die alte Schale rollt in Laufrichtung hinaus (vorwärts gegen den Uhrzeigersinn, 70°, .5s), die neue rollt von der anderen Seite herein (80° → 0, .95s `expo.out`); der Ring dreht 45° mit (1.2s); die Textzeilen tauschen gestaffelt. Schnelle Eingaben werden gepuffert und der laufende Wechsel mit timeScale 2.6 beendet. Ohne Bewegung: sofortiger Wechsel.
- **Hinweis:** handschriftlicher Satz mit gezeichnetem Pfeil über dem Wähler, nach 2.2s, nur bis zum ersten Wechsel und nur einmal (localStorage `bombay-hinweis`).

### Kopf
- **Ruhe:** transparent; Logo in Rani (118px, mobil 100px); Navigation als Text-Pillen mit Hover Tinte 6 %, aktuelle Seite fett; Status mit Punkt; Pille „Bestellen“ bzw. „Bestellzettel“ mit Zähler. Auf der Startseite ist der Status verborgen, solange der Kopf nicht fest ist.
- **`is-fest`** (ab 8px Scroll): Weiß .97, Blur 10px, 1px-Unterkante.
- **`is-weg`** (ab 600px beim Runterscrollen): translateY(-105%) mit `--aus` .5s; kommt beim Hochscrollen zurück und nimmt mobil den schwebenden Zettel-Knopf mit.
- **`is-hell`** (auf weißtoniger Gerichtsfläche, solange nicht fest): Text, Logo und Status weiß, Pille weiß mit Tinte.
- **`is-menu`** (mobil): weißer Kopf, Menüfläche darunter mit Fraunces-Links 2.6rem; Burger aus zwei Strichen, die zum Kreuz drehen.

### Speisekarte: Gänge zum Aufklappen
- **Gruppen** in der Reihenfolge eines Essens (Zum Anfang, Hauptgerichte, Dazu, Zum Schluss), Titel in Rani mit Blüte.
- **Gang-Zeile** ist ein Knopf: Fraunces-Titel, darunter drei Probenamen in Tinte-2 (einzeilig gekürzt), rechts Anzahl und „ab“-Preis tabellarisch, optional eine freigestellte Schale (92px, erscheint bei Hover und offen), ganz rechts ein 40px-Ring mit Plus. Hover: Titel rückt 6px, Ring Porzellan.
- **Offen:** Ring Tinte voll, dreht 180°, Plus wird Minus; Inhalt klappt über `grid-template-rows` 0fr → 1fr (.55s `--aus`), Kinder blenden mit 8px Hub ein. Immer nur ein Gang offen; der Wechsel schließt den anderen ohne Übergang, damit nichts springt.
- **Posten:** Nummer in Tinte-3, Fraunces-Name, Beschreibung, Marken-Chips, Preis 650 tabellarisch, Plus bzw. Stepper.
- **„Dazu passt“:** unter Hauptgerichten eine Zeile mit Fraunces-Label und Kontur-Chips (40px, Kontur Tinte, Hover Tinte voll), die den passenden Gang öffnen.
- **Suche und Filter:** öffnen alle Treffer in einer kompakten Fassung (kleinere Titel, ohne Proben, Meta, Schale und Hinweis). Filter werden nicht gespeichert; die Karte beginnt immer kompakt.

### Chips
- **Schnellwahl** („Worauf haben Sie Lust?“): 48px-Pillen, 600 1rem, im Wechsel Safran mit Tinte, Pfau mit Weiß, Rani mit Weiß; Hover Tinte; `:active` scale(.95).
- **Filter-Chip:** 44px, Innenkontur 1.5px Linie, 600 .95rem; Hover Kontur Tinte; gewählt Tinte voll mit Weiß.
- **Res-Chip** (auf Rani): 52px, Kontur Weiß 45 %; Hover Kontur Weiß; gewählt Weiß mit Rani-Text; gesperrt .35 Deckkraft. Kalendertage als 70×84px-Kacheln (18px) mit Fraunces-Zahl.
- **Marken-Chip:** .74rem/600 Pille in Porzellan; vegetarisch/vegan Grün-Tönung, scharf Rot-Tönung.

### Felder
- **Style:** Label .85rem/600 Tinte-2 über dem Feld; Feld weiß, 1px Linie, 14px, min. 50px, .7em 1em; Textarea min. 80px.
- **Fokus:** Rand Tinte plus 4px-Halo Tinte 8 %; kein Outline.
- **Fehler:** .88rem in Fehler-Rot, Platz reserviert (min-height 1.2em).
- **Auf Rani:** Feld Weiß 10 %, Rand Weiß 35 %, Fokus Weiß mit Halo Weiß 18 %.
- **Suche (Karte):** Porzellan-Pille 54px mit Lupe; bei Fokus weiß mit 1.5px Tintenkontur und 6px-Halo; eigener Leeren-Knopf (34px-Tintenkreis mit SVG-Kreuz) statt des Browser-Kreuzes.

### Plus und Stepper
- **Plus:** 44px-Kreis in Tinte mit SVG-Plus 20px; Hover Rani; `:active` scale(.9).
- **Stepper:** nach dem ersten Hinzufügen klappt der Kreis per `clip-path` (.4s `--aus`) von rechts zur 44px-Tintenpille mit Minus, Menge (700, tabellarisch) und Plus auf.

### Bestellzettel (Schublade)
- **Knopf:** schwebende Tintenpille unten rechts mit Zähler; fährt erst beim ersten Gericht herein (.6s `--aus`). Auf der Karte am Desktop sitzt er stattdessen im Kopf.
- **Panel:** weiß, 22px, 10px vom Rand, bis 460px breit; gleitet in .55s `--schublade` von rechts, unter 600px als Bodenblatt (max 92svh). Fraunces-Titel 2rem, Schließen-Kreis in Porzellan.
- **Zeilen:** Name 600, Nummer in Tinte-3, Preis tabellarisch; Mengenwahl (Porzellan-Pille, 38px-Kreise) und Schärfewahl (Porzellan-Mulde, gewählter Wert als weiße Pille).
- **Abschluss:** Summe mit Fraunces-Zahl 1.7rem; „Per WhatsApp senden“ in WhatsApp-Grün, darunter zwei Rand-Pillen (Anrufen, Text kopieren). Segment Abholen/Liefern als Porzellan-Mulde mit weißem Gleiter (.45s `--aus`).

### Stimmen
Links die große Rani-„4,5“, darunter SVG-Sterne in Safran (1.6rem, ein halber) und der Notentext in Hanken 600; rechts zwei Fraunces-Zitate untereinander, getrennt durch eine 1.5px-Tintenlinie.

### Laternen und Fuß
- **Laternen-Band:** Toran an der Oberkante, sieben Laternen an Tintenschnüren unterschiedlicher Länge (mobil fünf, kürzer). Jede schwingt als gedämpftes Pendel mit der Scrollgeschwindigkeit (höchstens ±11°; lange Schnüre schwingen langsamer) und hängt sonst still.
- **Fuß:** Tinte-Fläche mit Jali-Band oben, Text Weiß .86; großes Logo in Weiß; Spaltenüberschriften Hanken 600 1rem; Unterzeile .86rem Weiß .55 über einer Linie Weiß 14 %.

### Bewegung
- **Easing:** `--aus` cubic-bezier(.23, 1, .32, 1) für Antworten (Pillen, Pfeile, Gleiter, Licht, Kopf, Aufklappen); `--schublade` cubic-bezier(.32, .72, 0, 1) für Schublade und Blätter. In GSAP: `expo.out` für Auftritte, `power3.inOut` für Farbe und Ring.
- **Auftritt beim Laden:** Ring wächst und dreht aus -60° herein (1.8s), Schale aus -50° (1.5s), Titelzeilen steigen gestaffelt, der Rest blendet nach.
- **Enthüllungen:** Überschriften mit `data-zeilen` steigen Zeile für Zeile aus ihrer Maske (1.2s, stagger .08, ab „top 86%“); `data-auf` blendet mit 28px Hub ein; Ornamente mit `data-zeichnen` zeichnen ihre Linien (2.2s). Das Lehmofen-Foto dreht sich beim Scrollen von -7° und 1.14 ins Lot.
- **Kleine Rückmeldungen:** ein Rani-Punkt fliegt zum Bestellzettel, die Zahl hüpft; der Offen-Punkt atmet (2.6s).
- **Weiches Scrollen:** Lenis (lerp .11) nur bei feinem Zeiger.
- **Ohne Bewegung** (`prefers-reduced-motion` oder ohne GSAP): Gerichte wechseln sofort, keine Auftritte, kein Zeichnen, kein Pendel, kein Lenis; CSS-Übergänge auf 0.01ms.

## Do's and Don'ts

### Do:
- **Do** Weiß (#ffffff) als Grund und Tinte (#17110e) für Text und Knöpfe verwenden.
- **Do** Gerichte als freigestellte Schalen mit weichem Schlagschatten zeigen; Fotos sparsam (heute eines: Chicken Tikka) in 28px-Rundung auf Weiß.
- **Do** Fraunces immer mit automatischer Optik-Achse und SOFT 40 setzen, Titel in 560–600.
- **Do** Ornamente als feine, selbst gezeichnete Inline-SVG-Linien in currentColor oder Palettenfarben bauen (Rangoli, Blüte, Ranke, Paisley, Jali, Toran, Laternen).
- **Do** ergänzende Zeilen (Herkunft, Nummer, Status) unter Titel oder Knöpfe stellen.
- **Do** Icons als Inline-SVG aus dem Sprite (`#i-…`) setzen, auch Sterne, Plus, Minus und Kreuz.
- **Do** Bewegung nur auf Eingabe des Gastes auslösen und jede Bewegung mit einer sofortigen Fassung für reduzierte Bewegung bauen.
- **Do** lange Listen kompakt halten: Gänge klappen auf, immer nur einer offen, ohne Layoutsprung.

### Don't:
- **Don't** Kupfer, Messing oder metallische Töne verwenden.
- **Don't** Gewürzdose, Thali-Platte oder andere Klischee-Requisiten als Bildmotiv einsetzen.
- **Don't** Bögen, Rippen, Kuppelformen oder geometrische Bildmasken (auch keine Radialverläufe als Maske) bauen; die Kuppel bleibt dem Logo vorbehalten.
- **Don't** staubige, entsättigte Farben einführen; Flächen sind satt.
- **Don't** Überzeilen/Kicker in Versalien über Titel setzen.
- **Don't** Unicode-Zeichen als Icons verwenden (Sterne, Pfeile, Häkchen, Plus).
- **Don't** eine klebende In-Page-Navigation über den Inhalt legen.
- **Don't** auf der Bühne Scroll-Jacking, Pinning, Einrasten oder selbstständiges Drehen einsetzen.
- **Don't** Gerichtsfarben als Kacheln, Rahmen oder Textfarbe auf Weiß nutzen.
- **Don't** Fotos zu Rastern oder Galerien stapeln; keine dunkle Restaurant-Bühne.
