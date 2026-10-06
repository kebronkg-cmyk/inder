# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Statisches HTML/CSS/JS ohne Build-Schritt (vom Inhaber bestätigt), Deployment über GitHub Pages (`.github/workflows/deploy-pages.yml`).

## Users

- **Gäste aus Freising und Umgebung**, oft mobil, die mittags schnell etwas essen oder abends einen Tisch wollen. Ihr Job: in Sekunden sehen, ob heute offen ist, was es gibt, und reservieren oder bestellen.
- **Bestellkunden** (Abholung ca. 30 min, Lieferung ca. 60 min), die direkt über den hauseigenen Shop bestellen.
- **Studierende und Pendler** (TU München / Weihenstephan, Flughafen-Nähe) — preisbewusst, mittags.

## Product Purpose

Die Website des Restaurants Bombay, Obere Hauptstraße 67, 85354 Freising. Sie soll die indische Küche des Hauses hochwertig zeigen, die Lieblingsgerichte in Szene setzen, Reservierungen anstoßen und Bestellungen in den bestehenden Shop leiten. Erfolg: mehr Reservierungen und Direktbestellungen statt Plattformbestellungen, ein Auftritt, der dem Essen gerecht wird.

## Positioning

Indische Küche mitten in der Freisinger Altstadt: Tandoor-Gerichte und Naan aus dem Holzkohlelehmofen, Currys mit bis zu 13 selbst gemischten Gewürzen, jedes Gericht in vier Schärfegraden (mild, pikant, scharf, sehr scharf). Gastraum mit Taj-Mahal-Wandbild, roten Polsterbänken und Sternlaternen; Terrasse.

## Operating Context

- Öffnungszeiten: Mo und Mi–So 11:30–14:00 und 17:30–22:00, Dienstag Ruhetag. Lieferung zu den Öffnungszeiten.
- Reservierung: telefonisch (08161 4965102); die Seite bietet einen Reservier-Assistenten (Personen → Tag/Uhrzeit innerhalb der Öffnungszeiten → Name), der per Anruf, WhatsApp oder vorformulierter E-Mail abschließt. Kein Backend.
- Bestellung: bestehender Karvi-Shop `https://www.bombayrestaurant-freising.de/order_type` (0 % Provision) sowie iOS-/Android-App. Die Seite führt dorthin, sie ersetzt ihn nicht.

## Capabilities and Constraints

- Vollständige Speisekarte mit Nummern, Preisen, vegetarisch/vegan-Markierungen (`menu-data.js`).
- Keine eigene Zahlungs- oder Bestellabwicklung; keine Server-Komponente.
- Rollstuhlgerechter Eingang nicht vorhanden — ehrlich angeben.

## Brand Commitments

- Name „Bombay“, Logo: Kuppel mit Spitze über einem Bogen, darunter die Wortmarke. Das Logo bleibt erkennbar, wird aber hochwertig neu gezeichnet.
- Sprache: Deutsch, Sie-Form, warm und gastfreundlich, keine Floskeln.

## Evidence on Hand

- Gerichtfotos des Restaurants (Studio-Food-Fotos) und Gästefotos aus dem Google-Profil in `img/`.
- Google: 4,5 von 5 Sternen, über 400 Bewertungen (Stand Oktober 2026). Zitate nur als kurze, namenlose Auszüge.
- Keine erfundenen Auszeichnungen, Presse oder Bewertungen.

## Product Principles

1. „Heute offen?“ und „Tisch / Bestellen“ sind auf jedem Bildschirm einen Daumen weit entfernt.
2. Das Essen und der Raum sind die Hauptdarsteller — Gestaltung rahmt, sie konkurriert nicht.
3. Indische Kultur echt zeigen (Handwerk, Gewürze, Tandoor, Thali), ohne Klischee-Kitsch.
4. Nichts erfinden: Zeiten, Preise, Bewertungen stammen aus belegten Quellen.

## Accessibility & Inclusion

WCAG 2.1 AA: Kontraste, Tastaturbedienung, `prefers-reduced-motion` respektieren, sinnvolle Alternativtexte.
