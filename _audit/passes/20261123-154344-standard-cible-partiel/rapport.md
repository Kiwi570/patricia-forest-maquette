# Rapport d’audit

Projet : `patricia-forest-maquette` · 23/11/2026 16:47:52 · 4 min · 6 page(s) · audit standard ciblé sur /,/404,/la-praticienne,/la-reflexologie,/rendez-vous,/seances-et-tarifs (étapes : fichiers, mesures, mouvement)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261123-154344-standard-cible-partiel` · version ?v=1
- Échecs : **2**
- À regarder : **19**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (66), balayage (5), mouvement (10), effets du plan (5), souris immobile (4)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-151645-rapide | rapide | toutes | toutes | 258 | 16 | 1 | échecs |
| 20261123-152243-rapide-partiel | rapide | toutes | fichiers, mesures, films, fluidite | 1 | 12 | 0 | échecs |
| 20261123-152524-standard | standard | toutes | toutes | 21 | 26 | 1 | échecs |
| **20261123-154344-standard-cible-partiel** (celle-ci) | standard | /,/404,/la-praticienne,/la-reflexologie,/rendez-vous,/seances-et-tarifs | fichiers, mesures, mouvement | 2 | 19 | 0 | échecs |

## Échecs

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/seances-et-tarifs` — div.ouv-prix-texte > h1.ouv-prix-titre > span.hl:nth-of-type(1) > span.hl-in.prix-geant « 60 € » — avec div.ouv-prix-texte > h1.ouv-prix-titre > span.hl:nth-of-type(2) > span.hl-in « la séance d'une heure, chez vous. » _(844×390 normal)_
- **textes qui se chevauchent** — `/seances-et-tarifs` — section#debut > div.ouv-prix-texte > p.sur « SÉANCES ET TARIFS » — avec div.ouv-prix-texte > h1.ouv-prix-titre > span.hl:nth-of-type(1) > span.hl-in.prix-geant « 60 € » _(1920×1080 normal)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `index.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (16)

- **section sans visuel** — `/` — section#tarifs « TARIFS Une heure pour vous À domicile À La Crau Ch » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **section sans visuel** — `/` — section#avis « ILS EN PARLENT Très efficace et très professionnel » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/` — section#tarifs « TARIFS Une heure pour vous Chez vous, dans onze co » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/la-praticienne` — section#parcours « SON PARCOURS De Bangkok à la plante des pieds 1986 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/la-praticienne` — section#lieux « OÙ ELLE PRATIQUE Chez vous, ou à La Crau À domicil » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/la-reflexologie` — section#principe « LE PRINCIPE Le corps, en miniature Le pied est une » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/la-reflexologie` — section#histoire « LA PETITE HISTOIRE Quatre mille ans de pieds Des t » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/la-reflexologie` — section#cadre « CE QU'ELLE EST, ET N'EST PAS Du bien-être, en comp » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/rendez-vous` — section#demande « DEMANDE EN LIGNE Votre demande 4 étapes : le lieu, » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/rendez-vous` — section#contact « EN DIRECT Appeler, écrire PAR TÉLÉPHONE 06 47 96 9 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/seances-et-tarifs` — section#premiere « LA PREMIÈRE SÉANCE Prendre le temps de faire conna » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/seances-et-tarifs` — section#tarifs « TARIFS Chez vous ou à La Crau À domicile À La Crau » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **section sans visuel** — `/seances-et-tarifs` — section#bon-cadeau « OFFRIR Composer un bon cadeau Choisissez la séance » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/seances-et-tarifs` — section#groupes « EN GROUPE Ateliers et pauses bien-être Pour des at » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/seances-et-tarifs` — section#questions « QUESTIONS PRATIQUES Avant de réserver La réflexolo » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/seances-et-tarifs` — section#tarifs « TARIFS Chez vous ou à La Crau Chez vous, dans onze » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### typographie française (1)

- **typographie française** — `/rendez-vous` — section#demande > div.conteneur.demande-grille > aside.recap > p.recap-tel:nth-of-type(2) « Appeler : 06 47 96 99 86 » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 53 min de travail pour 115 min de budget, 7 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /la-praticienne, /la-reflexologie, /rendez-vous, /seances-et-tarifs.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/seances-et-tarifs --seulement=fichiers,mesures
```
