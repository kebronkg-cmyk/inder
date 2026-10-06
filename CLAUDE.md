# Arbeitsregeln für dieses Repo

## Ergebnisse zeigen
- Websites und Entwürfe **nie als Claude-Artifact** veröffentlichen.
- Stattdessen immer committen und auf den Arbeitsbranch pushen. Der Workflow `.github/workflows/deploy-pages.yml` stellt die Seite auf GitHub Pages bereit.
- Dem Nutzer danach den GitHub-Pages-Link geben: https://kebronkg-cmyk.github.io/inder/ (Unterseiten relativ dazu, z. B. `…/inder/thali.html`). Arbeitet ein neuer Branch, ihn in der Workflow-Liste `on.push.branches` ergänzen.
- Vor dem Link prüfen, dass der Deploy-Lauf grün ist.

## Design
- Design-Skills liegen in `.claude/skills/` (Impeccable, Emil Kowalski, Animations-Skills). Für Gestaltungsarbeit den Skill `impeccable` verwenden.
- Produktfakten stehen in `PRODUCT.md`, das Gestaltungssystem in `DESIGN.md`.
- Sprache der Seite und der Commits: Deutsch.
