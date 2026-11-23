# Rapport d’audit

Projet : `patricia-forest-maquette` · 23/11/2026 16:59:14 · 4 min · 4 page(s) · audit complet ciblé sur /,/404,/la-praticienne,/seances-et-tarifs (étapes : fichiers, mesures)

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261123-155533-complet-cible-partiel` · version ?v=1
- Échecs : **3**
- À regarder : **13**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (156), balayage (3)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-151645-rapide | rapide | toutes | toutes | 258 | 16 | 1 | échecs |
| 20261123-152243-rapide-partiel | rapide | toutes | fichiers, mesures, films, fluidite | 1 | 12 | 0 | échecs |
| 20261123-152524-standard | standard | toutes | toutes | 21 | 26 | 1 | échecs |
| 20261123-154344-standard-cible-partiel | standard | /,/404,/la-praticienne,/la-reflexologie,/rendez-vous,/seances-et-tarifs | fichiers, mesures, mouvement | 2 | 19 | 0 | échecs |
| 20261123-154802-standard-cible-partiel | standard | /,/seances-et-tarifs | fichiers, mesures | 1 | 11 | 0 | échecs |
| 20261123-154901-standard-cible-partiel | standard | /seances-et-tarifs | fichiers, mesures | 0 | 8 | 0 | complet |
| 20261123-154931-complet-partiel | complet | toutes | mesures, ecran | 12 | 17 | 0 | échecs |
| **20261123-155533-complet-cible-partiel** (celle-ci) | complet | /,/404,/la-praticienne,/seances-et-tarifs | fichiers, mesures | 3 | 13 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > div.hero-bas > p.info-cle:nth-of-type(2) « À domicile, de Six-Fours à Hyères 1 h · 60 € » _(844×390 sansJs)_

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/` — ul.tarifs-grille > li.tarif:nth-of-type(3) > p.tarif-prix:nth-of-type(2) > span.prix-texte:nth-of-type(1) « 250 € » — avec div.conteneur > ul.tarifs-grille > li.tarif:nth-of-type(3) > p.tarif-note:nth-of-type(3) « soit 50 € la séance » _(1280×720 sansJs, 1366×768 sansJs, 1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, 2560×1440 sansJs)_
- **textes qui se chevauchent** — `/seances-et-tarifs` — ul.tarifs-grille > li.tarif:nth-of-type(3) > p.tarif-prix:nth-of-type(2) > span.prix-texte:nth-of-type(1) « 250 € » — avec div.conteneur > ul.tarifs-grille > li.tarif:nth-of-type(3) > p.tarif-note:nth-of-type(3) « soit 50 € la séance » _(1280×720 sansJs, 1366×768 sansJs, 1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, 2560×1440 sansJs)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `index.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (11)

- **section sans visuel** — `/` — section#tarifs « TARIFS Une heure pour vous À domicile À La Crau Ch » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +20)_
- **section sans visuel** — `/` — section#avis « ILS EN PARLENT Très efficace et très professionnel » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/` — section#tarifs « TARIFS Une heure pour vous Chez vous, dans onze co » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs, +7)_
- **section sans visuel** — `/la-praticienne` — section#parcours « SON PARCOURS De Bangkok à la plante des pieds 1986 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/la-praticienne` — section#lieux « OÙ ELLE PRATIQUE Chez vous, ou à La Crau À domicil » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/seances-et-tarifs` — section#premiere « LA PREMIÈRE SÉANCE Prendre le temps de faire conna » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/seances-et-tarifs` — section#tarifs « TARIFS Chez vous ou à La Crau À domicile À La Crau » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +20)_
- **section sans visuel** — `/seances-et-tarifs` — section#bon-cadeau « OFFRIR Composer un bon cadeau Choisissez la séance » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/seances-et-tarifs` — section#groupes « EN GROUPE Ateliers et pauses bien-être Pour des at » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/seances-et-tarifs` — section#questions « QUESTIONS PRATIQUES Avant de réserver La réflexolo » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/seances-et-tarifs` — section#tarifs « TARIFS Chez vous ou à La Crau Chez vous, dans onze » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs, +7)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 53 min de travail pour 115 min de budget, 7 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/seances-et-tarifs --seulement=fichiers,mesures
```
