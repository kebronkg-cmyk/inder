---
name: Bombay Freising
description: Safran-Editorial. Ein Food-Magazin in Bewegung; die Schale bleibt, die Welt wechselt die Farbe.
colors:
  weiss: "#ffffff"
  porzellan: "#f3f3f5"
  tinte: "#17110e"
  tinte-2: "rgba(23, 17, 14, 0.68)"
  tinte-3: "rgba(23, 17, 14, 0.5)"
  linie: "rgba(23, 17, 14, 0.12)"
  rani: "#c4145d"
  pfau: "#0d5a60"
  safran: "#f3a11b"
  kardamom: "#2c6b45"
  pink: "#d42f73"
  gruen-ok: "#1f8a4c"
  wa-gruen: "#177a41"
  fehler: "#b3123f"
  veg-grund: "#e6f2e9"
  veg-text: "#1f6b3a"
  scharf-grund: "#fde8e4"
  scharf-text: "#b3261b"
typography:
  display-buehne:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, Georgia, serif"
    fontSize: "clamp(3.4rem, 8.2vw, 9.4rem)"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "-0.035em"
    fontVariation: "'opsz' 28"
  display:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, Georgia, serif"
    fontSize: "clamp(3.2rem, 6.4vw, 7rem)"
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontVariation: "'opsz' 28"
  headline:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, Georgia, serif"
    fontSize: "clamp(2.8rem, 5.6vw, 5.8rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.02em"
    fontVariation: "'opsz' 28"
  title:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, Georgia, serif"
    fontSize: "1.45rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.01em"
    fontVariation: "'opsz' 28"
  body:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  lead:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.55
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
  klein: "10px"
  feld: "14px"
  kachel: "18px"
  karte: "20px"
  panel: "22px"
  bild: "28px"
  pille: "999px"
spacing:
  rand: "clamp(20px, 4.2vw, 64px)"
  max: "1320px"
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
  feld:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.feld}"
    padding: "0.7em 1em"
    height: "50px"
  segment:
    backgroundColor: "{colors.porzellan}"
    rounded: "{rounded.pille}"
    padding: "4px"
  filter-chip:
    textColor: "{colors.tinte}"
    rounded: "{rounded.pille}"
    padding: "0 1.1em"
    height: "44px"
  filter-chip-aktiv:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.weiss}"
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
  fuss:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.weiss}"
---

# Design System: Bombay Freising

## Overview

**Creative North Star: "Die Schale bleibt, die Welt wechselt die Farbe"**

Safran-Editorial ist ein Food-Magazin in Bewegung. Reines Weiß ist der Grund, Tinte trägt Text und Handlungen, und jedes Lieblingsgericht bekommt eine eigene satte Vollfläche. Auf der Startseite liegt Karahi Paneer als freigestellte Schale auf einer angeschnittenen pfauenblauen Scheibe; beim Scrollen flutet die Scheibe den ganzen Bildschirm, die Schale bleibt stehen, und mit jedem Gericht wechselt die Fläche: Pfauenblau (Karahi Paneer), Safran (Dal Makhni), Kardamom (Jheenga Curry), Rani-Pink (Butter Chicken). Im Richtungsvertrag lag Butter Chicken auf der Scheibe; gebaut ist Karahi Paneer, weil das Butter-Chicken-Foto als einziges schräg und angeschnitten ist und das Motiv der stehenden Schale bricht. Butter Chicken schließt die Folge ab.

Die Seite ist ruhig und groß gesetzt: wenige Elemente pro Bildschirm, Bodoni Moda in Plakatgröße, Hanken Grotesk für alles Lesbare, runde Pillen in Tinte. Das Essen ist der Hauptdarsteller; die Gestaltung rahmt es. Verworfen sind die dunkle Restaurant-Bühne, das Fotoraster, Ornament-Kitsch, Kupfer, Gewürzdose, Bögen und staubige Farben.

**Key Characteristics:**
- Weißer Grund, Tinte (#17110e) für Text und Knöpfe, Rani (#c4145d) aus dem Logo als Markenfarbe.
- Vier satte Gerichtsflächen, je eine pro Bildschirm, immer vollflächig.
- Bodoni Moda mit fester Optik-Achse (opsz 28), Hanken Grotesk für Lauftext, Labels und kleine Überschriften.
- Freigestellte Schalen mit echtem Schattenwurf statt Fotokacheln; nur zwei echte Fotos.
- Alles Bedienbare ist rund: Pillen, Kreise, Scheiben.
- Bewegung ist weich und körperlich (GSAP, ScrollTrigger, Lenis) und fällt ohne Bewegung zu einer ruhigen Liste zusammen.

## Colors

Weiß und Tinte tragen die Seite; Farbe kommt als ganze Fläche, nie als Akzent-Streusel.

### Primary
- **Tinte** (#17110e): Text, Pillen `--voll`, Plus-Knopf, Stepper, aktiver Filter-Chip, aktiver Gang in der Seitennavigation, Fuß. Hover der Pille: #33261f.
- **Rani** (#c4145d): Markenfarbe aus dem Logo. Logo im Kopf, Zähler-Plakette im Bestellzettel-Knopf, `::selection`, Fokusring, Heute-Plakette in den Öffnungszeiten, Hover des Plus-Knopfs, der fliegende Punkt beim Hinzufügen und die vollflächige Reservieren-Sektion (weißer Text, 5,8:1).

### Secondary: die vier Gerichtsflächen
Jede Fläche nimmt einen festen Textton (`data-ton`):
- **Pfauenblau** (#0d5a60, Karahi Paneer): Text weiß (7,9:1). Auch die Ausgangsscheibe der Bühne.
- **Safran** (#f3a11b, Dal Makhni): Text in Tinte (8,8:1); Pillen werden dort Tinte-voll. Außerdem die Farbe der SVG-Sterne bei den Stimmen.
- **Kardamom** (#2c6b45, Jheenga Curry): Text weiß (6,4:1).
- **Rani-Pink** (#d42f73, Butter Chicken): Text weiß (4,7:1).

### Neutral
- **Weiß** (#ffffff): Grund jeder Seite und jeder Sektion außer Bühne, Reservieren und Fuß; Schublade, Felder, Menüfläche.
- **Porzellan** (#f3f3f5): stille Mulden für Bedienelemente: Segment, Mengenwahl, Schärfewahl, Suchfeld, Schließen-Kreis, Marken-Chip, Hover der Gänge-Navigation.
- **Tinte-2** (rgba 23,17,14 / .68): Untertitel, Beschreibungen, Feld-Labels, Status.
- **Tinte-3** (rgba 23,17,14 / .5): Nummern, Platzhalter, Hinweise.
- **Linie** (rgba 23,17,14 / .12): 1px-Trennlinien in Listen, Feldränder, Kopf-Unterkante.

### Funktionsfarben
- **Grün-OK** (#1f8a4c): nur der pulsierende Offen-Punkt.
- **WhatsApp-Grün** (#177a41, weißer Text 5,4:1): nur die Pille „Per WhatsApp senden“ im Bestellzettel.
- **Fehler** (#b3123f): Fehlermeldungen in Formularen (auf Rani: weiß, fett).
- **Veg** (#e6f2e9 / #1f6b3a) und **Scharf** (#fde8e4 / #b3261b): Marken-Chips der Speisekarte.

### Named Rules
**Die Ein-Feld-Regel.** Pro Bildschirm herrscht höchstens eine Gerichtsfläche, und sie füllt die volle Breite. Gerichtsfarben werden nie zu Kacheln, Rahmen oder Textfarben auf Weiß.

**Die Ton-Regel.** Safran trägt Tinte, Pfauenblau, Kardamom und Rani-Pink tragen Weiß. Der Kopf folgt dem Ton (`is-hell`).

**Die Tinte-handelt-Regel.** Auf Weiß ist jede Handlung Tinte. Rani markiert die Marke und Zustände (Zähler, Heute, Fokus), ist aber auf weißem Grund keine Knopffüllung.

## Typography

**Display Font:** Bodoni Moda, variabel 400–900 mit Kursiv (Fallback Didot, Bodoni 72, Georgia)
**Body Font:** Hanken Grotesk, variabel 300–700 (Fallback Helvetica Neue, Arial)

**Character:** Eine Didone in Plakatgröße, ruhig mit Gewicht 500 und enger Laufweite, gegen eine sachliche Grotesk, die alles Lesbare und Bedienbare übernimmt.

### Hierarchy
- **Display-Bühne** (500, clamp(3.4rem, 8.2vw, 9.4rem), 0.9, -0.035em): Gerichtsnamen auf der Bühne; Titel der Speisekarte clamp(3.6rem, 11vw, 10rem), -0.04em.
- **Display** (500, clamp(3.2rem, 6.4vw, 7rem), 0.95, -0.03em): Intro-Titel; ebenso „141 Gerichte …“.
- **Headline** (500, clamp(2.8rem, ~5.6vw, ~6rem), 0.98, -0.02em): Sektionstitel (Lehmofen, Besuch, Reservieren), Rechtsseiten-H1.
- **Zwischenstufe** (500, clamp(1.9rem–2.2rem … 2.8rem–4.4rem)): Gänge-Liste, Gang-Köpfe der Karte, Reservier-Frage, Raum-Bildunterschrift (1.1), Zitate (1.25).
- **Title** (500, 1.45rem, 1.15, -0.01em): Postennamen der Karte, Formulartitel; Fakten im Lehmofen 1.55rem.
- **Zahlen von Gewicht** in Bodoni, tabellarisch: Preis auf der Bühne (2.2rem), Summe (1.7rem), Tag im Kalender (1.6rem).
- **Body** (400, 1.0625rem, 1.6): Lauftext; Leads 1.1rem mit 40–54ch.
- **Label** (600, 0.85rem): Feld-Labels; Chips 0.72–0.95rem/600; Hinweise 0.82rem/400 in Tinte-3.
- **Kleine Überschriften** in Hanken 600, 1–1.05rem, Satzschreibung: Fußspalten, Öffnungszeiten, Stimmen-Zeile.

### Named Rules
**Die Opsz-28-Regel.** Bodoni wird immer mit `font-optical-sizing: none; font-variation-settings: "opsz" 28` gesetzt. Die automatische Optik-Achse macht die Haarstriche in Plakatgröße unsichtbar („141“ las sich als „1 1“); eine feste, kräftigere Optik gilt für alle Größen. Jede neue Bodoni-Klasse kommt in die opsz-Liste in `site.css`.

**Die Zwei-Stimmen-Regel.** Bodoni für Namen, Überschriften, Zitate und Zahlen von Gewicht; Hanken für alles andere. Keine Versalien mit Sperrung, keine Überzeilen über Titeln: Ergänzende Zeilen (Herkunft, Status) stehen unter dem Titel oder den Knöpfen.

## Layout

- **Wrap:** `width: min(100% - 2 * var(--rand), 1320px)`, zentriert. `--rand` = clamp(20px, 4.2vw, 64px) ist der einzige Seitenrand; vollflächige Elemente ziehen sich mobil mit `calc(var(--rand) * -1)` an die Kante.
- **Kopf:** fest, 76px (mobil 64px); Inhalte beginnen mit `calc(var(--kopf) + …)`.
- **Sektionsrhythmus:** vertikal clamp(90px, 11–12vw, 150–170px); Gitterabstände clamp(32–36px, 6vw, 100px). Zweispaltige Raster mit leicht ungleichen Spalten (1.05/.95, .9/1.1, .85/1.15).
- **Listen statt Karten:** Gänge, Fakten, Öffnungszeiten, Posten und Bestellzettel sind Zeilen mit 1px-Linie, keine Kästen.
- **Breakpoints:** 860px (alles einspaltig, Burger-Menü, Bühne mit Schale oben und Text unten, Gänge-Knopf statt Seitennavigation), 600px (Schublade wird Bodenblatt), plus 860px × 700px Höhe (Beschreibungen auf der Bühne entfallen).
- **Speisekarte:** 220px-Seitennavigation (sticky, nur Desktop) neben der Liste; mobil ein schwebender Knopf, der ein Blatt öffnet, und der beim Runterscrollen mit dem Kopf verschwindet. Keine klebende Leiste quer über den Inhalt.

## Elevation & Depth

Flächen sind flach; Schatten gehören Gegenständen. Die Schalen werfen echte, weiche Schlagschatten, schwebende Bedienteile heben sich mit langen, weichen Schatten ab, alles andere trennt sich über Linie und Porzellan.

### Shadow Vocabulary
- **Schale auf der Bühne** (`filter: drop-shadow(0 34px 34px rgba(10,30,32,.38)) drop-shadow(0 8px 10px rgba(10,30,32,.2))`): die freigestellte Schale auf der Farbfläche.
- **Schale klein** (`drop-shadow(0 24px 30px rgba(23,17,14,.3))` Gänge-Vorschau; `drop-shadow(0 18px 18px rgba(23,17,14,.25))` Gang-Kopf der Karte).
- **Schwebender Knopf** (`0 18px 40px -14px rgba(23,17,14,.5)`): Bestellzettel-Knopf, Gänge-Knopf ähnlich.
- **Schublade** (`0 30px 80px -20px rgba(23,17,14,.45)`) über einem Schleier rgba(23,17,14,.38).
- **Gleiter** (`0 2px 8px -2px rgba(23,17,14,.2)` Segment; `0 1px 3px rgba(23,17,14,.15)` Schärfewahl): der weiße Gleiter in einer Porzellan-Mulde.
- **Kopf fest** (`0 1px 0` Linie, Weiß .86 mit `backdrop-filter: saturate(1.6) blur(14px)`).

### Named Rules
**Die Gegenstand-Regel.** Nur was man greifen oder essen kann, wirft Schatten. Keine harten Versatzschatten, keine Schatten auf Text oder Sektionen.

## Shapes

Alles Bedienbare ist rund: Pillen (999px), Kreise (Plus 44px, Schließen 44px, Burger 46px) und die große Scheibe der Bühne (`clip-path: circle(...)`). Fotos sind sanft gerundete Rechtecke (28px) und laufen mobil randlos ohne Rundung. Panels und Blätter 22px (mobil nur oben), Reservier-Karte 20px, Kalendertag 18px, Felder 14px, Navigationszeilen 10px. Der Raum-Ausschnitt öffnet sich aus einem gerundeten Inset; geometrische Masken (Bogen, Rippe, Radialverlauf) gibt es nicht.

## Components

### Pillen
Ruhig, griffig, immer rund.
- **Shape:** 999px, Höhe 52px, Innenabstand 0 1.55em, Hanken 600 1rem; `:active` scale(.97) mit `--aus`.
- **`--voll`:** Tinte mit Weiß; Hover #33261f. Auf Rani weiß mit Rani-Text; im Kopf über heller Bühne weiß mit Tinte.
- **`--rand`:** transparent, Innenkontur 1.5px currentColor; Hover Tinte 6 %.
- **`--hell`:** Weiß mit Tinte, für Farbflächen. Gedrückt (`aria-pressed`): Weiß 18 % mit Kontur. Auf Safran wird sie Tinte-voll.
- **`--klein`:** 42px, 0 1.15em, .94rem. Kopf mobil 40px.
- **Zähler** (`.zahl`): 22px-Plakette in Rani, tabellarisch, hüpft beim Hinzufügen.
- **Pfeil-Link:** Text 600 mit SVG-Pfeil, der bei Hover 4px nach rechts rückt.

### Kopf
- **Ruhe:** transparent über Weiß; Logo in Rani (118px, mobil 100px); Navigation als Text-Pillen mit Hover Tinte 6 %, aktuelle Seite fett; Status mit Punkt; Pille „Bestellen“.
- **`is-fest`** (ab 40px Scroll, nicht während der Bühne): Weiß .86, Blur 14px, 1px-Unterkante.
- **`is-weg`** (ab 600px beim Runterscrollen): translateY(-105%) mit `--aus` .5s; kommt beim Hochscrollen zurück. Setzt `body.is-runter`, das mobil die schwebenden Knöpfe mitnimmt.
- **`is-hell`** (auf weißtoniger Gerichtsfläche, solange nicht fest): Text, Logo und Status weiß, Pille weiß mit Tinte.
- **`is-menu`** (mobil): weißer Kopf, Menüfläche darunter mit Bodoni-Links in 2.6rem; Burger aus zwei Strichen, die zum Kreuz drehen.

### Bestellzettel (Schublade)
- **Knopf:** schwebende Tinte-Pille unten rechts mit Zähler; fährt erst beim ersten Gericht herein (translateY(160%) → 0, .6s `--aus`).
- **Panel:** weiß, 22px, 10px vom Rand, bis 460px breit; gleitet in .55s `--schublade` von rechts, unter 600px als Bodenblatt (max 92svh) von unten. Kopf mit Bodoni-Titel 2rem und Schließen-Kreis in Porzellan; Inhalt scrollt (`overscroll-behavior: contain`); Fuß mit Linie oben.
- **Zeilen:** Name 600, Nummer in Tinte-3, Preis tabellarisch; darunter Mengenwahl (Porzellan-Pille, 38px-Kreise) und Schärfewahl (Porzellan-Mulde, gewählter Wert als weiße Pille mit Gleiter-Schatten).
- **Leer:** Bodoni-Satz 1.6rem plus Tinte-2-Text.
- **Abschluss:** Summe mit Bodoni-Zahl 1.7rem; darunter die volle Pille „Per WhatsApp senden“ (WhatsApp-Grün), dann zwei Rand-Pillen nebeneinander (Anrufen, Text kopieren). Mengen-Knöpfe tragen SVG-Plus und -Minus, keine Textzeichen.

### Segment
Porzellan-Mulde, 999px, 4px Innenabstand, zwei gleiche Spalten; ein weißer Gleiter wandert mit .45s `--aus` unter die Wahl (Abholen / Liefern).

### Felder
- **Style:** Label .85rem/600 Tinte-2 über dem Feld; Feld weiß, 1px Linie, 14px, min. 50px, .7em 1em; Textarea min. 80px.
- **Fokus:** Rand Tinte plus 4px-Halo Tinte 8 %; kein Outline.
- **Fehler:** .88rem in #b3123f, Platz reserviert (min-height 1.2em).
- **Auf Rani:** Feld Weiß 10 %, Rand Weiß 35 %, Fokus Weiß mit Halo Weiß 18 %.
- **Suche (Karte):** Porzellan-Pille 54px mit Lupe; bei Fokus weiß mit 1.5px Tinten-Kontur und 6px-Halo.

### Chips
- **Filter-Chip (Karte):** 44px, Innenkontur 1.5px Linie, 600 .95rem; Hover Kontur Tinte; gewählt Tinte voll mit Weiß.
- **Res-Chip (Reservieren auf Rani):** 52px, Kontur Weiß 45 %; Hover Kontur Weiß; gewählt Weiß mit Rani-Text; gesperrt .35 Deckkraft. Kalendertage als 70×84px-Kacheln (18px) mit Bodoni-Zahl.
- **Marken-Chip:** .72rem/600 Pille in Porzellan; vegetarisch/vegan Grün-Tönung, scharf Rot-Tönung.

### Plus und Stepper
- **Plus:** 44px-Kreis in Tinte mit SVG-Plus 20px; Hover Rani; `:active` scale(.9).
- **Stepper:** nach dem ersten Hinzufügen klappt der Kreis per `clip-path`-Animation (.4s `--aus`) von rechts zur 44px-Tinten-Pille mit Minus, Menge (700, tabellarisch) und Plus auf.

### Gänge-Liste (Startseite)
Volle Zeilen mit 1px-Linie, Bodoni clamp(2rem, 4.6vw, 4.4rem), Anzahl in Tinte-2, SVG-Pfeil. Hover: Name rückt 18px, Pfeil 6px; die passende freigestellte Schale folgt dem Zeiger mit zufälliger leichter Drehung (nur feiner Zeiger).

### Gänge-Blatt (Karte, mobil)
Schwebender weißer Pillenknopf unten links mit Tinten-Kontur; öffnet ein Bodenblatt (22px oben, max 78svh, .5s `--schublade`) mit Gängen und Anzahl. Desktop: sticky Seitennavigation, aktiver Gang Tinte voll.

### Fuß
Tinte-Fläche, Weiß .86 für Text; großes Logo in Weiß; Spaltenüberschriften Hanken 600 1rem in Satzschreibung; Unterzeile .86rem Weiß .55 über einer Linie Weiß 14 %.

### Bewegung
- **Easing:** `--aus` cubic-bezier(.23, 1, .32, 1) für Antworten (Pillen, Pfeile, Gleiter, Kopf, Knopf-Einfahrt); `--schublade` cubic-bezier(.32, .72, 0, 1) für Schublade und Blätter. In GSAP: `expo.out` für Auftritte, `power2/3` für die Bühne.
- **Bühnen-Zeitleiste:** Auftritt beim Laden (Scheibe wächst 1.5s, Schale dreht aus -140° herein 1.9s, Titelzeilen steigen gestaffelt). Danach dreht die Schale in 160s einmal um sich selbst, mit leichter Zeiger-Parallaxe. Beim Scrollen wird die Fläche gepinnt (5,2 Bildschirmhöhen, scrub .9): die Scheibe flutet per `clip-path: circle()` den Bildschirm, das Intro tritt nach oben ab, die Schale wandert zur Mitte; je Gericht wechselt die Flächenfarbe (1s), die alte Schale dreht weg (55°, .55), die neue dreht herein (-75° → 0); Namen wechseln zeilenweise. Jede Station rastet ein (snap auf Labels). Eine Fortschrittsleiste unten zeigt die vier Gerichte.
- **Enthüllungen:** Überschriften mit `data-zeilen` steigen Zeile für Zeile aus ihrer Maske (yPercent 108 → 0, 1.2s, stagger .08, `expo.out`, ab „top 86%“). `data-auf` blendet mit 28px Hub ein. Lehmofen-Bild dreht sich beim Scrollen von -7° und 1.14 ins Lot; das Gastraumfenster öffnet sich aus einem gerundeten Inset.
- **Kleine Rückmeldungen:** ein Rani-Punkt fliegt vom Knopf zum Bestellzettel (700ms), die Zahl hüpft; der Offen-Punkt atmet (2.6s).
- **Weiches Scrollen:** Lenis (lerp .11) nur bei feinem Zeiger.
- **Ohne Bewegung** (`prefers-reduced-motion` oder ohne GSAP): `.ohne-bewegung` stellt die Bühne als ruhige Liste dar, jedes Gericht auf seiner eigenen Farbfläche untereinander; keine Scheibe, kein Pinning, kein Lenis, kein Flugpunkt; CSS-Übergänge auf 0.01ms.

## Do's and Don'ts

### Do:
- **Do** Weiß (#ffffff) als Grund und Tinte (#17110e) für Text und Knöpfe verwenden.
- **Do** Gerichte als freigestellte Schalen mit weichem Schlagschatten zeigen; Fotos sparsam (heute zwei: Chicken Tikka, Gastraum) und in 28px-Rundung.
- **Do** Bodoni immer mit opsz 28 setzen und neue Bodoni-Klassen in die opsz-Liste aufnehmen.
- **Do** ergänzende Zeilen (Herkunft, Nummer, Status) unter Titel oder Knöpfe stellen.
- **Do** Icons als Inline-SVG aus dem Sprite (`#i-…`) setzen, auch Sterne.
- **Do** jede Bühne mit einer ruhigen Fassung für reduzierte Bewegung bauen.
- **Do** die Speisekarte auf ihrer eigenen Seite halten; Bestellen und Reservieren sind auf jedem Bildschirm einen Daumen weit entfernt.

### Don't:
- **Don't** Kupfer, Messing oder metallische Töne verwenden.
- **Don't** Gewürzdose, Thali-Platte oder andere Klischee-Requisiten als Bildmotiv einsetzen.
- **Don't** Bögen, Rippen, Kuppelformen oder geometrische Bildmasken (auch keine Radialverläufe als Maske) bauen; die Kuppel bleibt dem Logo vorbehalten.
- **Don't** staubige, entsättigte Farben einführen; Flächen sind satt.
- **Don't** Überzeilen/Kicker in Versalien über Titel setzen.
- **Don't** Unicode-Zeichen als Icons verwenden (Sterne, Pfeile, Häkchen).
- **Don't** eine klebende In-Page-Navigation quer über den Inhalt legen; auf der Karte nur Seitennavigation (Desktop) oder Knopf mit Blatt (mobil).
- **Don't** Gerichtsfarben als Kacheln, Rahmen oder Textfarbe auf Weiß nutzen.
- **Don't** Fotos zu Rastern oder Galerien stapeln; keine dunkle Restaurant-Bühne.
