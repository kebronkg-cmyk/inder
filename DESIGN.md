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
  nacht: "#140d0a"
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
    fontSize: "clamp(3rem, 5.6vw, 6.2rem)"
    fontWeight: 340
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'SOFT' 20"
  display:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(3.2rem, 7.4vw, 7.4rem)"
    fontWeight: 320
    lineHeight: 0.9
    letterSpacing: "-0.035em"
    fontVariation: "'SOFT' 20"
  headline:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.8rem, 5.6vw, 5.8rem)"
    fontWeight: 360
    lineHeight: 1.02
    letterSpacing: "-0.022em"
    fontVariation: "'SOFT' 20"
  gericht:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.3rem, 3.6vw, 3.6rem)"
    fontWeight: 360
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontVariation: "'SOFT' 20"
  zitat:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.4rem, 1.8vw, 1.9rem)"
    fontWeight: 340
    lineHeight: 1.25
    letterSpacing: "-0.012em"
    fontVariation: "'SOFT' 20"
  title:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)"
    fontWeight: 380
    lineHeight: 1.1
    letterSpacing: "-0.025em"
    fontVariation: "'SOFT' 20"
  gruppe:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.4rem, 1.9vw, 1.8rem)"
    fontWeight: 360
    lineHeight: 1.02
    letterSpacing: "-0.022em"
    fontVariation: "'SOFT' 20"
  preis:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "1.8rem"
    fontWeight: 380
    lineHeight: 1
    fontFeature: "'tnum'"
    fontVariation: "'SOFT' 20"
  posten:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "1.32rem"
    fontWeight: 420
    lineHeight: 1.2
    letterSpacing: "-0.01em"
    fontVariation: "'SOFT' 20"
  note:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(5rem, 8vw, 7.5rem)"
    fontWeight: 300
    lineHeight: 0.85
    letterSpacing: "-0.05em"
  body:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  lead:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  knopf:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.96rem"
    fontWeight: 500
    letterSpacing: "0.015em"
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
    padding: "0 1.5em"
    height: "48px"
  pille-voll-hover:
    backgroundColor: "#33261f"
  pille-rand:
    textColor: "{colors.tinte}"
    typography: "{typography.knopf}"
    rounded: "{rounded.pille}"
    padding: "0 1.5em"
    height: "48px"
  pille-hell:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.tinte}"
    typography: "{typography.knopf}"
    rounded: "{rounded.pille}"
    padding: "0 1.5em"
    height: "48px"
  pille-klein:
    rounded: "{rounded.pille}"
    padding: "0 1.15em"
    height: "42px"
  waehler-tab:
    padding: "4px 6px 14px"
    size: "58px"
  waehler-strich:
    height: "1.5px"
    width: "36px"
  tafel-pfeil:
    rounded: "{rounded.pille}"
    size: "50px"
  rund-pfeil:
    textColor: "{colors.tinte}"
    rounded: "{rounded.pille}"
    size: "52px"
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
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.pille}"
    padding: "0 1.25em"
    height: "48px"
  schnell-chip-bild:
    padding: "0 1.25em 0 6px"
    size: "40px"
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
  stimme-karte:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.tinte}"
    typography: "{typography.zitat}"
    rounded: "{rounded.panel}"
    padding: "clamp(24px, 2.4vw, 36px)"
    width: "clamp(280px, 30vw, 460px)"
  stimme-note:
    backgroundColor: "{colors.porzellan}"
    textColor: "{colors.rani}"
    typography: "{typography.note}"
  stimme-einladung:
    backgroundColor: "{colors.rani}"
    textColor: "{colors.weiss}"
  schublade-panel:
    backgroundColor: "{colors.weiss}"
    rounded: "{rounded.panel}"
    width: "min(460px, calc(100% - 20px))"
  laternen-band:
    backgroundColor: "{colors.nacht}"
    textColor: "{colors.weiss}"
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

Safran-Editorial ist ein Food-Magazin zum Antippen. Reines Weiß ist der Grund, Tinte trägt Text und Handlungen, Rani aus dem Logo ist die Markenfarbe, und jedes der vier Lieblingsgerichte besitzt eine eigene satte Vollfläche. Auf der Startseite liegt die freigestellte Schale auf einem fein gezeichneten Rangoli-Ring, mitten in ihrer Farbe: Butter Chicken in Rani-Pink, Karahi Paneer in Pfauenblau, Dal Makhni in Safran, Jheenga Curry in Kardamom. Ein feiner Rahmen mit Rosetten in den Ecken fasst die Fläche wie eine Speisekarte, ein rundes Siegel trägt die Google-Note. Gewechselt wird nur, wenn der Gast es will; dann wächst die neue Farbe als Kreis von der Stelle aus, an der er getippt hat.

Die Seite ist ruhig, groß und leicht gesetzt: wenige Elemente pro Bildschirm, Fraunces in leichten Schnitten (320–420) mit sanft weichen Enden (SOFT 20) für Titel, Namen, Zitate und Preise, dazu ein kursiver Akzent aus der Fraunces Italic für einzelne Worte; Hanken Grotesk 400 für alles Lesbare; Konturen und Linien 1px; runde Pillen in Tinte. Das Essen ist der Hauptdarsteller: freigestellte Schalen liegen auf der Bühne, schauen vom Rand herein und drehen sich mit dem Scrollen. Der indische Ton kommt aus selbst gezeichneter feiner Linienarbeit (Rangoli, Rahmen mit Rosetten, Siegel, Blüte, Ranke, Paisley, Jali) und aus den echten Laternen des Gastraums, nie aus Requisiten, Metallglanz oder Bogenrahmen.

Verworfen sind die dunkle Restaurant-Bühne, Fotoraster, Kupfer und Messing, Gewürzdose und Thali-Platte, Bögen und Masken sowie staubige Farben. Die eine bewusste Ausnahme vom weißen Grund ist das Laternen-Band: ein schmales Nachtband, in dem die freigestellten Laternen aus dem Gastraum leuchten.

**Key Characteristics:**
- Weißer Grund, Tinte (#17110e) für Text und Knöpfe, Rani (#c4145d) aus dem Logo als Markenfarbe.
- Vier satte Gerichtsflächen, je eine pro Bildschirm, immer vollflächig; Safran (#ff8a1c) ist ein klares Orange.
- Fraunces leicht (320–420) mit automatischer Optik-Achse und SOFT 20; Fraunces Italic als Akzent; Hanken Grotesk 400 mit Zeilenhöhe 1.65.
- Freigestellte Schalen mit weichem Schlagschatten statt Fotokacheln; ein echtes Foto (Chicken Tikka) und die freigestellte Laterne aus einem Gastfoto.
- Ornamente als feine, selbst gezeichnete Inline-SVG-Linien in currentColor oder Palettenfarben; Konturen 1px.
- Alles Bedienbare ist rund: Pillen, Kreise, Ringe.
- Eine einzige dunkle Fläche neben dem Fuß: das Laternen-Band in Nacht (#140d0a).
- Bewegung antwortet auf den Gast (Tippen, Wischen, Scrollen, Zeiger) und fällt ohne Bewegung zu sofortigen Wechseln zusammen.

## Colors

Weiß und Tinte tragen die Seite; Farbe kommt als ganze Fläche oder als dünne Linie, nie als Akzent-Streusel.

### Primary
- **Tinte** (#17110e): Text, volle Pillen, Plus-Knopf, Stepper, aktiver Filter-Chip, Gang-Ring im offenen Zustand, Linie über jeder Menügruppe, Gruppentitel der Karte, Kontur der Stimmen-Pfeile, Fuß. Hover der Pille: #33261f.
- **Rani** (#c4145d): Markenfarbe aus dem Logo. Logo im Kopf, Zähler-Plakette, `::selection`, Fokusring, Heute-Plakette, Hover des Plus-Knopfs, Rosette vor den Gruppentiteln, Ranke über „141 Gerichte“, große Noten „4,5“ und „4,2“ in den Stimmen, die Einladungskarte „Waren Sie schon bei uns?“, die vollflächige Reservieren-Sektion (weißer Text, 5,8:1).

### Secondary: die vier Gerichtsflächen
Jede Fläche hat einen festen Textton (`data-ton`), in dieser Reihenfolge auf der Bühne:
- **Rani-Pink** (#d42f73, Butter Chicken): Text weiß (4,7:1). Erste Fläche und `theme-color`.
- **Pfauenblau** (#0d5a60, Karahi Paneer): Text weiß (7,9:1).
- **Safran** (#ff8a1c, Dal Makhni): Text in Tinte (etwa 7,9:1); weiß auf Safran fällt durch (2,4:1). Außerhalb der Bühne nur als Sterne der Noten und Blütenblätter der Gruppen-Rosette (70 % gemischt).
- **Kardamom** (#2c6b45, Jheenga Curry): Text weiß (6,4:1).

Außerhalb der Bühne tauchen die Gerichtsfarben nicht als Flächen auf; die Schnellwahl der Karte ist neutral.

### Neutral
- **Weiß** (#ffffff): Grund jeder Seite außer Bühne, Laternen-Band, Reservieren und Fuß; Schublade, Felder, Menüfläche, Stimmen-Karten, Schnellwahl-Chips, fester Kopf (Weiß .97).
- **Porzellan** (#f3f3f5): stille Mulden: Suchfeld, Segment, Mengenwahl, Schärfewahl, Schließen-Kreis, Marken-Chip, Hover des Gang-Rings, Noten-Karten der Stimmen.
- **Tinte-2** (rgba 23,17,14 / .78): Untertitel, Beschreibungen, Probenamen der Gänge, Feld-Labels, Quellen der Stimmen, Status.
- **Tinte-3** (rgba 23,17,14 / .6): Nummern, Platzhalter, Hinweise.
- **Linie** (rgba 23,17,14 / .12): 1px-Trennlinien in Listen, Feldränder, Kontur von Filter- und Schnellwahl-Chips und Stimmen-Karten, Kopf-Unterkante.
- **Nacht** (#140d0a): nur das Laternen-Band. Darauf Weiß für den Titel, Weiß .8 für Text, warmes Gold (#ffcf8a) für die Aufforderung „Stupsen Sie eine an.“; die Decke als 10px-Verlauf #2a1d15 → Nacht.

### Funktionsfarben
- **Grün-OK** (#1f8a4c): nur der atmende Offen-Punkt.
- **WhatsApp-Grün** (#177a41, weißer Text 5,4:1): nur die Pille „Per WhatsApp senden“.
- **Fehler** (#b3123f): Fehlermeldungen in Formularen (auf Rani: weiß, fett).
- **Veg** (#e6f2e9 / #1f6b3a) und **Scharf** (#fde8e4 / #b3261b): Marken-Chips der Speisekarte.

### Named Rules
**Die Ein-Feld-Regel.** Pro Bildschirm herrscht höchstens eine Gerichtsfläche, und sie füllt die volle Breite. Gerichtsfarben werden nie zu Kacheln, Chips, Rahmen oder Textfarben auf Weiß; erlaubt sind nur Sterne und die Blütenblätter der Rosette.

**Die Ton-Regel.** Safran trägt Tinte; Rani-Pink, Pfauenblau und Kardamom tragen Weiß. Kopf, Pillen, Rahmen, Siegel, Wähler-Strich und Pfeile folgen dem Ton (`data-ton`, `is-hell`, sonst `currentColor`).

**Die Tinte-handelt-Regel.** Auf Weiß ist jede Handlung Tinte. Rani markiert Marke und Zustände (Zähler, Heute, Fokus, Noten), ist aber auf weißem Grund keine Knopffüllung. Chips auf Weiß sind neutral: Weiß mit 1px-Linie und Tintentext.

**Die Eine-Nacht-Regel.** Weiß ist der Grund. Die einzige dunkle Sektion neben dem Fuß ist das Laternen-Band in Nacht (#140d0a), weil Laternen nur im Dunkeln leuchten. Keine weiteren dunklen Bänder; die Bühne bleibt immer Farbfläche.

## Typography

**Display Font:** Fraunces, variabel (opsz, wght 100–900, SOFT), Fallback Georgia, Times New Roman; dazu Fraunces Italic als eigene Datei (`fonts/fraunces-italic.woff2`, wght 300–600)
**Body Font:** Hanken Grotesk, variabel 300–700, Fallback Helvetica Neue, Arial

**Character:** Eine warme, leicht gesetzte Antiqua mit feinen Strichen und enger Laufweite, die mit der Größe leichter wird, gegen eine sachliche Grotesk, die alles Lesbare und Bedienbare übernimmt. Einzelne Worte kippen in die Kursive und geben dem Satz einen handgeschriebenen Ton. Die Wurzelgröße wächst fließend mit dem Fenster: `clamp(16px, calc(12.4px + .25vw), 19.5px)`.

### Hierarchy
- **Display-Bühne** (340, clamp(3rem, 5.6vw, 6.2rem), 0.98, -0.03em): der Intro-Titel auf der Bühne mit Akzent „frisch“.
- **Display** (320, clamp(3.2rem, 7.4vw, 7.4rem), 0.9, -0.035em): Titel der Speisekarte; „141 Gerichte …“ in Headline-Gewicht 360 mit clamp(2.8rem, 6.4vw, 7rem), -0.035em.
- **Headline** (360, clamp(2.6–2.8rem, ~5–6vw, 5.2–6.2rem), 1.02, -0.022em): Sektionstitel (Lehmofen, Laternen, Besuch, Reservieren, Stimmen mit Akzent „sagen.“). Grundgewicht aller h1–h3.
- **Gericht** (360, clamp(2.3rem, 3.6vw, 3.6rem), -0.025em): Gerichtsname auf der Bühne. **Preis** daneben 380, 1.8rem, tabellarisch.
- **Zitat** (kursiv 340, clamp(1.4rem, 1.8vw, 1.9rem), 1.25, -0.012em): Stimmen der Gäste. Einladung „Waren Sie schon bei uns?“ aufrecht 340, clamp(1.8rem, 2.4vw, 2.5rem).
- **Note** (300, clamp(5rem, 8vw, 7.5rem), 0.85, -0.05em, Rani): „4,5“ und „4,2“ in den Noten-Karten. Im Siegel 340, 30px.
- **Title** (380, clamp(1.6rem, 2.6vw, 2.4rem), 1.1, -0.025em): Gang-Titel der Speisekarte; Fakten im Lehmofen 1.55rem; Reservier-Frage clamp(1.9rem, 3.4vw, 2.8rem).
- **Gruppe** (kursiv 360, clamp(1.4rem, 1.9vw, 1.8rem), Tinte): Gruppentitel der Karte mit Rani-Rosette. Schnellwahl-Frage kursiv 360, clamp(1.5rem, 2.2vw, 2.1rem); „Dazu passt“ kursiv 380, 1.15rem; „Stupsen Sie eine an.“ kursiv 360, 1.2rem.
- **Posten** (420, 1.32rem, 1.2, -0.01em): Gerichtsnamen in der Karte; Formulartitel 1.45rem.
- **Zahlen von Gewicht** in Fraunces, tabellarisch: Summe 500 1.7rem, Kalendertag 400 1.6rem, Reservier-Karte 380 2.4rem.
- **Body** (400, 1.0625rem, 1.65): Lauftext; Leads 1.08–1.15rem mit 40–46ch.
- **Label** (600, 0.85rem): Feld-Labels; Marken-Chips .74rem/600; Hinweise 0.82rem in Tinte-3.
- **Knopf** (500, .96rem, +0.015em): Pillen; Schnellwahl-Chips 500 .98rem; Filter- und Dazu-Chips 600 .92–.95rem; Wähler-Namen 500 .86rem, +0.02em.
- **Kleine Überschriften** in Hanken 600, 1–1.1rem, Satzschreibung: Fußspalten, Öffnungszeiten.
- **Handschrift-Hinweis**: Fraunces 500, 1.05rem, SOFT 100, mit gezeichnetem Pfeil; nur einmal auf der Bühne.
- **Siegel-Kreisschrift**: Hanken 500, 8.4px, Versalien, +0.26em, auf einem Kreispfad; „bei Google“ 7.5px, +0.14em.

### Named Rules
**Die Leichte-Fraunces-Regel.** Fraunces steht immer mit `font-optical-sizing: auto` und `font-variation-settings: "SOFT" 20`; jede neue Fraunces-Klasse kommt in die SOFT-Liste in `site.css`. Größe trägt, nicht Gewicht: je größer, desto leichter. Display 320–340, Headline und Gericht 360, Gang und Preis 380, Posten 420; nur kleine Zahlen und der Handschrift-Hinweis gehen bis 500. Laufweite -0.022em bis -0.035em, große Noten -0.05em.

**Die Kursiv-Akzent-Regel.** Die Kursive ist ein bewusster Akzent aus der echten Fraunces Italic, nie eine schräg gerechnete Aufrechte. Sie steht für höchstens ein Wort in einem Titel (`<em class="akzent">`, Gewicht geerbt), für Gruppentitel, Schnellwahl-Frage, „Dazu passt“, die Laternen-Aufforderung und die Zitate der Gäste. Nie ganze Absätze, nie Lauftext, nie Knöpfe.

**Die Zwei-Stimmen-Regel.** Fraunces für Namen, Überschriften, Zitate und Zahlen von Gewicht; Hanken für alles andere. Keine Überzeilen über Titeln: Ergänzende Zeilen (Herkunft, Nummer, Status, Quelle) stehen unter dem Titel oder den Knöpfen. Versalien mit Sperrung gibt es nur in der Kreisschrift des Siegels, wie auf einem Prägestempel, nie als Zeile im Satz.

## Layout

- **Wrap:** `width: min(100% - 2 * var(--rand), var(--max))`, zentriert. Der Rahmen wächst auf großen Schirmen mit (`--max` mindestens 1440px, sonst 76vw). `--rand` ist der einzige Seitenrand; vollflächige Elemente ziehen sich mobil mit `calc(var(--rand) * -1)` an die Kante.
- **Kopf:** fest, 76px (mobil 64px); Inhalte beginnen mit `calc(var(--kopf) + …)`.
- **Bühne:** mindestens 100svh, zweispaltig 5fr/6fr: links unten Intro und darunter das Gericht (Name, Satz, Preis, Pille, Herkunft) über einer 1px-Linie in currentColor, rechts die Tafel (Ring, Siegel, Schale, Pfeile, Größe min(56vh, 36vw, 720px)) und darunter der Wähler. Der Rahmen sitzt knapp unter dem Kopf (`--kopf` - 4px) und clamp(10px, 1.6vw, 24px) von den Seiten. Mobil eine Spalte, zentriert: Titel, Tafel, Gericht, Wähler, dann Unterzeile und Knöpfe.
- **Sektionsrhythmus:** vertikal clamp(90px, 11vw, 150–160px); Lehmofen und Zur Karte enger (clamp(48–64px … 96–128px)). Zweispaltige Raster mit leicht ungleichen Spalten (1.05/.95, .85/1.15, 1/.8).
- **Listen statt Karten:** Fakten, Gänge, Öffnungszeiten, Menügänge, Posten und Bestellzettel sind Zeilen mit Linie, keine Kästen. Einzige Karten sind die Stimmen, und die liegen in einem waagrechten Band.
- **Laternen-Band:** volle Breite, mindestens clamp(600px, 50vw, 960px) hoch; Laternen absolut über die ganze Breite (x 5 % bis 87 %), Text rechts unten in der zweiten Spalte. Mobil hängen die Laternen in einer 330px hohen Zone über dem Text.
- **Stimmen-Band:** waagrecht scrollend, Innenabstand bündig mit dem Wrap (`max(var(--rand), (100vw - var(--max)) / 2)`), Einrasten am Kartenanfang, Abstand clamp(14px, 1.6vw, 24px).
- **Randschalen:** freigestellte Schalen ragen über die rechte Kante: auf der Startseite bei „Zur Karte“ (clamp(220px, 22vw, 420px), rechts -clamp(80px, 9vw, 200px)), auf der Karte hinter dem Kopf (clamp(300px, 36vw, 640px), rechts -clamp(90px, 10vw, 220px)). Text liegt darüber.
- **Speisekarte:** Kopf mit Titel und Unterzeile (bis 860px breit), darunter Schnellwahl und Werkzeugzeile (Suche, Filter, Treffer). Gruppen zweispaltig: Gruppentitel links (minmax(160px, .28fr)), Gänge rechts; über jeder Gruppe eine 1px-Tintenlinie. Mobil eine Spalte, Schnellwahl als waagrechter Streifen randlos.
- **Breakpoints:** 860px (einspaltig, Burger, Bühne gestapelt, Bühnen- und Stimmen-Pfeile ausgeblendet, Randschale der Startseite ausgeblendet, zwei Laternen ausgeblendet), 600px (Schublade wird Bodenblatt); Höhen-Abfragen auf der Bühne (unter 820px bzw. 720px entfällt der Gerichtssatz, unter 800px schrumpft die Tafel).

## Elevation & Depth

Flächen sind flach; Schatten gehören Gegenständen. Die Schalen und Schälchen werfen weiche Schlagschatten, schwebende Bedienteile heben sich mit langen, weichen Schatten ab, alles andere trennt sich über Linie und Porzellan. Im Nachtband entsteht Tiefe aus Licht statt Schatten.

### Shadow Vocabulary
- **Schale auf der Bühne** (`filter: drop-shadow(0 30px 30px rgba(20,12,6,.34)) drop-shadow(0 7px 9px rgba(20,12,6,.2))`).
- **Randschalen** (`drop-shadow(0 24px 24px rgba(20,12,6,.22))` Startseite; `drop-shadow(0 30px 30px rgba(20,12,6,.25))` Kopf der Karte).
- **Schälchen und kleine Schalen** (`drop-shadow(0 6px 6px rgba(20,12,6,.3))` im Wähler; `drop-shadow(0 3px 4px rgba(20,12,6,.22))` im Schnellwahl-Chip; `drop-shadow(0 10px 10px rgba(20,12,6,.25))` im Gang; `drop-shadow(0 24px 30px rgba(23,17,14,.3))` Zeiger-Schale).
- **Laternenlicht** (`radial-gradient(closest-side, rgba(255,190,105,.42), rgba(255,150,60,.14) 45%, transparent)`, `mix-blend-mode: screen`, 3,4-fache Laternenbreite): warmer Lichthof hinter jeder Laterne, flackert leicht; dazu 26 Lichtpunkte je Laterne (1,5–4px, Deckkraft .18–.63, `box-shadow: 0 0 6px` in ihrer Farbe).
- **Schwebender Knopf** (`0 18px 40px -14px rgba(23,17,14,.5)`): Bestellzettel-Knopf.
- **Schublade** (`0 30px 80px -20px rgba(23,17,14,.45)`) über einem Schleier rgba(23,17,14,.38).
- **Gleiter** (`0 2px 8px -2px rgba(23,17,14,.2)` Segment; `0 1px 3px rgba(23,17,14,.15)` Schärfewahl).
- **Kopf fest** (Weiß .97, `backdrop-filter: saturate(1.4) blur(10px)`, `0 1px 0` Linie).

### Named Rules
**Die Gegenstand-Regel.** Nur was man greifen, essen oder aufhängen kann, wirft Schatten oder Licht. Keine harten Versatzschatten, keine Schatten auf Text, Ornamenten, Karten oder Sektionen; Stimmen-Karten trennen sich über eine 1px-Linie.

## Shapes

Alles Bedienbare ist rund: Pillen (999px), Kreise und Ringe (Bühnen-Pfeile 50px, Stimmen-Pfeile 52px, Plus 44px, Schließen 44px, Burger 46px, Gang-Ring 40px). Das einzige Foto ist ein sanft gerundetes Quadrat (28px) auf Weiß und läuft mobil randlos ohne Rundung. Panels, Blätter und Stimmen-Karten 22px (Blätter mobil nur oben), Reservier-Karte 20px, Kalendertag 18px, Felder 14px. Geometrische Bildmasken (Bogen, Rippe, Kuppel, Radialverlauf) gibt es nicht; die Kuppel bleibt dem Logo vorbehalten. Der einzige Kreis-Clip ist die wachsende Farbe beim Gerichtswechsel.

### Named Rules
**Die Ein-Pixel-Regel.** Konturen, Ringe und Trennlinien sind 1px: Pillen-Rand, Pfeilringe, Gang-Ring, Chips, Karten, Gericht- und Gruppenlinie, Rahmen. Einzige stärkere Linie ist der 1.5px-Strich unter dem gewählten Gericht im Wähler, weil er eine Wahl markiert und keine Kante zieht.

### Ornamente
Alle Verzierungen sind selbst gezeichnete Inline-SVG-Linien (Strich 0.6–1.7), meist in `currentColor`, damit sie dem Ton folgen:
- **Rangoli-Ring** hinter der Schale: Punktkreis, 24 Blütenblätter, Zackenkreis; Deckkraft .42 (auf hellem Ton .34).
- **Rahmen** auf der Bühne: vier 1px-Linien in currentColor (Deckkraft .55), die 26px vor den Ecken enden; in jeder Ecke eine Rosette (`#i-bluete`, 22px, ohne Füllung).
- **Siegel** an der Tafel (25 % der Tafel, mindestens 92px; mobil 22 %, mindestens 66px), oben rechts über den Rand hinaus: zwei Kreise (Strich .8), Kreisschrift „Bombay · Obere Hauptstraße 67 · Freising ·“, in der Mitte „4,5“ und „bei Google“.
- **Blüte** (`#i-bluete`, acht Blätter): vor jedem Gruppentitel der Karte, Linie Rani, Blätter Safran 70 %; als Rosette in den Rahmenecken.
- **Ranke** (Linie, Schleife, Rosette, Schleife, Linie), 210px in Rani, über „141 Gerichte“; zeichnet sich beim Hereinscrollen.
- **Paisley** als Wasserzeichen in der Reservieren-Fläche (Weiß .2, -16°); zeichnet sich selbst.
- **Jali-Band** (Sternmuster, 40px hoch, Weiß .16) an der Oberkante des Fußes.

## Components

### Pillen
Ruhig, griffig, immer rund.
- **Shape:** 999px, Höhe 48px, Innenabstand 0 1.5em, Hanken 500 .96rem, +0.015em; `:active` scale(.97) mit `--aus`.
- **`--voll`:** Tinte mit Weiß; Hover #33261f. Auf Rani und hellem Bühnenton weiß mit Rani- bzw. Tintentext.
- **`--rand`:** transparent, Innenkontur 1px currentColor; Hover Tinte 6 % (auf der Bühne: Glas).
- **`--hell`:** Weiß mit Tinte, für Farbflächen.
- **`--dazu`** (Bühne): „Auf den Bestellzettel“ mit SVG-Plus; gedrückt Glas mit 1px-Kontur und Haken.
- **`--klein`:** 42px, 0 1.15em, .94rem; im Kopf mobil 40px.
- **Zähler:** 22px-Plakette in Rani, tabellarisch, hüpft beim Hinzufügen.
- **Pfeil-Link:** Text 600 mit SVG-Pfeil, der bei Hover 4px nach rechts rückt.

### Bühne: Tafel und Wähler (Signatur)
- **Farbfläche:** volle Fläche je Gericht; Reihenfolge Butter Chicken, Karahi Paneer, Dal Makhni, Jheenga Curry. Darüber Rahmen und Siegel im Ton der Fläche.
- **Tafel:** Rangoli-Ring (138 % der Tafel), Siegel, Schale, zwei Pfeilringe 50px (1px currentColor, Deckkraft .85), Hover voll Tinte mit Weiß bzw. auf hellem Ton Weiß mit Tinte. Die Schale lässt sich waagrecht ziehen (folgt mit Widerstand, dreht mit; ab 70px oder Schwung wechselt das Gericht, sonst federt sie zurück).
- **Wähler:** `tablist` ohne Leiste: vier Schälchen (58px, mobil 48px) mit Namen darunter (500 .86rem), nicht gewählte bei Deckkraft .8. Unter der Wahl gleitet ein 1.5px-Strich in currentColor (höchstens 36px bzw. 60 % der Tabbreite) in .55s `--aus`; das gewählte Schälchen hebt sich (-4px, 1.08). Hover kippt das Schälchen (-14°, 1.08). Pfeiltasten, Home und End nach WAI-ARIA. Mobil vier gleich breite Spalten.
- **Wechsel:** nur auf Eingabe. Die neue Farbe wächst als Kreis vom Tipppunkt (.85s, `power3.inOut`); der Ton wechselt nach .32s; die alte Schale rollt in Laufrichtung hinaus (vorwärts gegen den Uhrzeigersinn, 70°, .5s), die neue rollt von der anderen Seite herein (80° → 0, .95s `expo.out`); der Ring dreht 45° mit (1.2s); die Textzeilen tauschen gestaffelt. Schnelle Eingaben werden gepuffert und der laufende Wechsel mit timeScale 2.6 beendet. Ohne Bewegung: sofortiger Wechsel.
- **Hinweis:** handschriftlicher Satz mit gezeichnetem Pfeil über dem Wähler, nach 2.2s, nur bis zum ersten Wechsel und nur einmal (localStorage `bombay-hinweis`).

### Kopf
- **Ruhe:** transparent; Logo in Rani (118px, mobil 100px); Navigation als Text-Pillen (500 .97rem) mit Hover Tinte 6 %, aktuelle Seite 600; Status mit Punkt; Pille „Bestellen“ bzw. „Bestellzettel“ mit Zähler. Auf der Startseite ist der Status verborgen, solange der Kopf nicht fest ist.
- **`is-fest`** (ab 8px Scroll): Weiß .97, Blur 10px, 1px-Unterkante.
- **`is-weg`** (ab 600px beim Runterscrollen): translateY(-105%) mit `--aus` .5s; kommt beim Hochscrollen zurück und nimmt mobil den schwebenden Zettel-Knopf mit.
- **`is-hell`** (auf weißtoniger Gerichtsfläche, solange nicht fest): Text, Logo und Status weiß, Pille weiß mit Tinte.
- **`is-menu`** (mobil): weißer Kopf, Menüfläche darunter mit Fraunces-Links 2.6rem; Burger aus zwei Strichen, die zum Kreuz drehen.

### Speisekarte: Kopf und Gänge zum Aufklappen
- **Kopf:** Titel in Display 320; dahinter ragt eine große freigestellte Schale (Butter Chicken) über den rechten Rand, dreht beim Öffnen aus 28° herein (1.4s, cubic-bezier(.16,1,.3,1)) und beim Scrollen langsam mit (-0.06° und 0.12px je Pixel, bis 900px).
- **Gruppen** in der Reihenfolge eines Essens (Zum Anfang, Hauptgerichte, Dazu, Zum Schluss), Titel kursiv in Tinte mit Rani-Rosette.
- **Gang-Zeile** ist ein Knopf: Fraunces-Titel 380, darunter drei Probenamen in Tinte-2 (einzeilig gekürzt), rechts Anzahl und „ab“-Preis tabellarisch, optional eine freigestellte Schale (92px, aus kleinen 400px-Freistellern: Mango Chicken, Rogan Josh, Fisch Chili, Karahi Paneer; erscheint bei Hover und offen), ganz rechts ein 40px-Ring (1px Tinte) mit Plus. Hover: Titel rückt 6px, Ring Porzellan.
- **Offen:** Ring Tinte voll, dreht 180°, Plus wird Minus; Inhalt klappt über `grid-template-rows` 0fr → 1fr (.55s `--aus`), Kinder blenden mit 8px Hub ein. Immer nur ein Gang offen; der Wechsel schließt den anderen ohne Übergang, damit nichts springt.
- **Posten:** Nummer in Tinte-3, Fraunces-Name 420, Beschreibung, Marken-Chips, Preis 500 tabellarisch, Plus bzw. Stepper.
- **„Dazu passt“:** unter Hauptgerichten eine Zeile mit kursivem Fraunces-Label und Kontur-Chips, die den passenden Gang öffnen.
- **Suche und Filter:** öffnen alle Treffer in einer kompakten Fassung (kleinere Titel, ohne Proben, Meta, Schale und Hinweis). Filter werden nicht gespeichert; die Karte beginnt immer kompakt.

### Chips
- **Schnellwahl** („Worauf haben Sie Lust?“, kursive Frage): neutrale 48px-Pillen, Weiß mit 1px-Linie, Tinte 500 .98rem; die ersten vier mit 40px-Schälchen links (Innenabstand links 6px). Hover Kontur Tinte, Schälchen kippt (-16°, 1.1); `:active` scale(.96).
- **Filter-Chip:** 44px, Innenkontur 1px Linie, 600 .95rem; Hover Kontur Tinte; gewählt Tinte voll mit Weiß.
- **Dazu-Chip:** 40px, Kontur 1px Tinte, 600 .92rem; Hover Tinte voll.
- **Res-Chip** (auf Rani): 52px, Kontur 1px Weiß 45 %; Hover Kontur Weiß; gewählt Weiß mit Rani-Text; gesperrt .35 Deckkraft. Kalendertage als 70×84px-Kacheln (18px) mit Fraunces-Zahl.
- **Marken-Chip:** .74rem/600 Pille in Porzellan; vegetarisch/vegan Grün-Tönung, scharf Rot-Tönung.

### Felder
- **Style:** Label .85rem/600 Tinte-2 über dem Feld; Feld weiß, 1px Linie, 14px, min. 50px, .7em 1em; Textarea min. 80px.
- **Fokus:** Rand Tinte plus 4px-Halo Tinte 8 %; kein Outline.
- **Fehler:** .88rem in Fehler-Rot, Platz reserviert (min-height 1.2em).
- **Auf Rani:** Feld Weiß 10 %, Rand Weiß 35 %, Fokus Weiß mit Halo Weiß 18 %.
- **Suche (Karte):** Porzellan-Pille 54px mit Lupe; bei Fokus weiß mit Tintenring und 6px-Halo Tinte 6 %; eigener Leeren-Knopf (34px-Tintenkreis mit SVG-Kreuz) statt des Browser-Kreuzes.

### Plus und Stepper
- **Plus:** 44px-Kreis in Tinte mit SVG-Plus 20px; Hover Rani; `:active` scale(.9).
- **Stepper:** nach dem ersten Hinzufügen klappt der Kreis per `clip-path` (.4s `--aus`) von rechts zur 44px-Tintenpille mit Minus, Menge (700, tabellarisch) und Plus auf.

### Bestellzettel (Schublade)
- **Knopf:** schwebende Tintenpille unten rechts mit Zähler; fährt erst beim ersten Gericht herein (.6s `--aus`). Auf der Karte am Desktop sitzt er stattdessen im Kopf.
- **Panel:** weiß, 22px, 10px vom Rand, bis 460px breit; gleitet in .55s `--schublade` von rechts, unter 600px als Bodenblatt (max 92svh). Fraunces-Titel 2rem, Schließen-Kreis in Porzellan.
- **Zeilen:** Name 600, Nummer in Tinte-3, Preis tabellarisch; Mengenwahl (Porzellan-Pille, 38px-Kreise) und Schärfewahl (Porzellan-Mulde, gewählter Wert als weiße Pille).
- **Abschluss:** Summe mit Fraunces-Zahl 1.7rem; „Per WhatsApp senden“ in WhatsApp-Grün, darunter zwei Rand-Pillen (Anrufen, Text kopieren). Segment Abholen/Liefern als Porzellan-Mulde mit weißem Gleiter (.45s `--aus`).

### Stimmen
Ein waagrechtes Band aus Karten, das man mit Pfeilen (52px-Ringe, 1px Tinte, Hover Tinte voll, am Ende .3), mit der Maus (ziehen ab 4px, rastet beim Loslassen auf die nächste Karte) oder mit dem Finger verschiebt.
- **Karte:** Weiß, 22px, 1px-Linie innen, clamp(280px, 30vw, 460px) breit (mobil 82vw), mindestens clamp(260px, 22vw, 340px) hoch; oben das kursive Zitat, unten die Quelle in Tinte-2 mit fetter Plattform.
- **Noten-Karte:** Porzellan ohne Kontur; große Note in Rani (Note), darunter SVG-Sterne in Safran (1.5rem, leere bzw. halbe .28) und die Quelle.
- **Einladung:** Rani-Karte mit weißem Fraunces-Satz und Rand-Pille „Bewertung schreiben“.
- **Reihenfolge:** Google-Note, zwei Google-Zitate, Tripadvisor-Note, golocal-Zitat, Einladung. Nur belegte Zitate ohne Namen; darunter eine Quellzeile mit Stand.

### Laternen-Band (Signatur)
Die eine Nachtfläche. Echte, freigestellte Laternen aus einem Gastfoto des Gastraums (`img/laterne-364.webp`) hängen an feinen Lichtschnüren (1px, Verlauf von warmem Weiß .15 nach .5) von einer schmalen Decke.
- **Laternen:** sieben (mobil fünf), Schnüre 20–260px (mobil 45 %), Größe je Laterne 0,7–1,12 × clamp(96px, 8.6vw, 176px) (mobil × 84px), jede zweite gespiegelt; Bild leicht gesättigt (`saturate(1.15) contrast(1.06)`).
- **Licht:** pro Laterne ein Lichthof (siehe Elevation), der in 5s leicht flackert (Deckkraft .85–1, versetzt), und 26 Lichtpunkte in warmem Weiß, Rot, Blau und Grün wie durch farbiges Glas.
- **Pendel:** jede Laterne ist ein gedämpftes Pendel (Steifigkeit 24/(Schnur + 80), lange Schnüre schwingen langsamer; höchstens ±16°). Scrollen stößt alle an, ein vorbeistreifender Zeiger gibt den Laternen unter sich seinen Schwung, ein Tipp stößt eine an („Stupsen Sie eine an.“). Gerechnet wird nur, solange das Band sichtbar ist.
- **Text:** Titel weiß, Absatz Weiß .8, Aufforderung kursiv in warmem Gold.

### Fuß
Tinte-Fläche mit Jali-Band oben, Text Weiß .86; großes Logo in Weiß; Spaltenüberschriften Hanken 600 1rem; Unterzeile .86rem Weiß .55 über einer Linie Weiß 14 %.

### Bewegung
- **Easing:** `--aus` cubic-bezier(.23, 1, .32, 1) für Antworten (Pillen, Pfeile, Gleiter, Wähler-Strich, Kopf, Aufklappen); `--schublade` cubic-bezier(.32, .72, 0, 1) für Schublade und Blätter. In GSAP: `expo.out` für Auftritte, `power3.inOut` für Farbe und Ring.
- **Auftritt beim Laden:** Ring wächst und dreht aus -60° herein (1.8s), Schale aus -50° (1.5s), Titelzeilen steigen gestaffelt, der Rest blendet nach. Auf der Karte steigt der Titel 30px auf (1.1s), die Kopfschale dreht herein.
- **Enthüllungen:** Überschriften mit `data-zeilen` steigen Zeile für Zeile aus ihrer Maske (1.2s, stagger .08, ab „top 86%“); `data-auf` blendet mit 28px Hub ein; Ornamente mit `data-zeichnen` zeichnen ihre Linien (2.2s).
- **Scroll-gekoppelt (scrub):** das Lehmofen-Foto dreht sich von -7° und 1.14 ins Lot; die Randschale bei „Zur Karte“ dreht von 40° nach -25°; die Kopfschale der Karte dreht mit dem Scrollen.
- **Kleine Rückmeldungen:** ein Rani-Punkt fliegt zum Bestellzettel, die Zahl hüpft; der Offen-Punkt atmet (2.6s).
- **Weiches Scrollen:** Lenis (lerp .11) nur bei feinem Zeiger.
- **Ohne Bewegung** (`prefers-reduced-motion` oder ohne GSAP): Gerichte wechseln sofort, keine Auftritte, kein Zeichnen, kein Pendel, keine Lichtpunkte, keine Schalendrehung, kein Lenis; CSS-Übergänge und das Flackern auf 0.01ms.

## Do's and Don'ts

### Do:
- **Do** Weiß (#ffffff) als Grund und Tinte (#17110e) für Text und Knöpfe verwenden.
- **Do** Gerichte als freigestellte Schalen mit weichem Schlagschatten zeigen, auch vom Rand hereinschauend und mit dem Scrollen drehend; Fotos sparsam (heute: Chicken Tikka in 28px-Rundung auf Weiß, die freigestellte Laterne aus einem Gastfoto).
- **Do** Fraunces immer mit automatischer Optik-Achse und SOFT 20 setzen, leicht: Titel 320–380, Posten 420.
- **Do** den Kursiv-Akzent bewusst einsetzen: ein Wort pro Titel (`em.akzent`), Gruppentitel, Fragen, Zitate; immer aus der Fraunces Italic.
- **Do** Konturen, Ringe und Linien in 1px ziehen.
- **Do** Ornamente als feine, selbst gezeichnete Inline-SVG-Linien in currentColor oder Palettenfarben bauen (Rangoli, Rahmen mit Rosetten, Siegel, Blüte, Ranke, Paisley, Jali).
- **Do** ergänzende Zeilen (Herkunft, Nummer, Status, Quelle) unter Titel oder Knöpfe stellen.
- **Do** Icons als Inline-SVG aus dem Sprite (`#i-…`) setzen, auch Sterne, Plus, Minus und Kreuz.
- **Do** Bewegung nur auf Eingabe des Gastes (Tippen, Ziehen, Scrollen, Zeiger) auslösen und jede Bewegung mit einer sofortigen Fassung für reduzierte Bewegung bauen.
- **Do** lange Listen kompakt halten: Gänge klappen auf, immer nur einer offen, ohne Layoutsprung.
- **Do** in den Stimmen nur belegte Zitate und Noten mit Quelle zeigen.

### Don't:
- **Don't** Kupfer, Messing oder metallische Töne verwenden.
- **Don't** Gewürzdose, Thali-Platte oder andere Klischee-Requisiten als Bildmotiv einsetzen.
- **Don't** Bögen, Rippen, Kuppelformen oder geometrische Bildmasken (auch keine Radialverläufe als Maske) bauen; die Kuppel bleibt dem Logo vorbehalten.
- **Don't** staubige, entsättigte Farben einführen; Flächen sind satt.
- **Don't** Überzeilen/Kicker in Versalien über Titel setzen.
- **Don't** Unicode-Zeichen als Icons verwenden (Sterne, Pfeile, Häkchen, Plus).
- **Don't** eine klebende In-Page-Navigation über den Inhalt legen.
- **Don't** auf der Bühne Scroll-Jacking, Pinning, Einrasten oder selbstständiges Drehen einsetzen.
- **Don't** Gerichtsfarben als Kacheln, Chips, Rahmen oder Textfarbe auf Weiß nutzen.
- **Don't** Fotos zu Rastern oder Galerien stapeln; keine dunkle Restaurant-Bühne (das Laternen-Band ist die eine bewusste Nachtfläche, keine Vorlage für weitere).

## Nachtrag: Atmosphäre-Fotos, Goldsterne, Übergang (Runde 5)

- **Fotos sparsam und bearbeitet.** Vier Gästefotos, jeweils an genau einer Stelle mit Bezug: Naan mit Kupferschalen als zweite, leicht gedrehte Karte (7px weißer Rand, 22px) über dem Chicken-Tikka-Bild im Lehmofen; der gedeckte Tisch von oben unter „Ein Tisch für Sie.“ (22px, −1,5°); der Gastraum als abgedunkelter Nachthintergrund des Laternenbands; Reis und Naan neben der Gruppe „Dazu“ auf der Speisekarte (nur breit). Bearbeitung: Tonwerte, wärmer, mehr Farbe und Tiefe, Schärfe. Keine Raster, keine Galerien.
- **Goldsterne.** Gerundete Sternspitzen mit Goldverlauf (#ffe08a → #f6b73c → #d9861a), werden beim Erscheinen nacheinander eingesetzt (Federkurve) und einmal von einem Lichtschein überstrichen; halber Stern als Kontur plus halbe Füllung. Nur bei der Google-Note; die Tripadvisor-Karte zeigt die Zahl ohne Sterne, Quelle steht unten.
- **Übergang von der Bühne.** Beim Wegscrollen hebt sich die Bühne wie eine Karte ab: Seiten rücken 2,2 % (mobil 3 %) ein, die unteren Ecken runden sich auf 48px (mobil 30px), der Inhalt bleibt 9 % zurück, der Rahmen blendet aus.
- **Laternen.** Jede hat eine eigene Ruhelage (einige deutlich nach rechts geneigt), eigene Dämpfung, einen leisen unregelmäßigen Luftzug und gelegentliche Windstöße, die nur einzelne treffen.
- **Speisekarte mobil.** Kein Kopfbild; Titel, zwei Zeilen Text, Schnellwahl, Suche – die ersten Gänge stehen im ersten Bildschirm. Kein Plus-Zeichen im Fließtext.
