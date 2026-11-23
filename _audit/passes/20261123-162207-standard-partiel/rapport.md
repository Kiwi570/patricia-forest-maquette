# Rapport d’audit

Projet : `patricia-forest-maquette` · 23/11/2026 17:28:05 · 6 min · 6 page(s) · audit standard (étapes : fichiers, parcours, films)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261123-162207-standard-partiel` · version ?v=1
- Échecs : **0**
- À regarder : **3**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), films d’ouverture (10), films de transition (10), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (10), liens vers la page en cours (5), changements de hauteur (5)

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
| 20261123-155533-complet-cible-partiel | complet | /,/404,/la-praticienne,/seances-et-tarifs | fichiers, mesures | 3 | 13 | 0 | échecs |
| 20261123-155928-complet-cible-partiel | complet | /,/seances-et-tarifs | fichiers, mesures | 0 | 11 | 0 | complet |
| 20261123-160137-standard | standard | toutes | toutes | 1 | 27 | 1 | échecs |
| 20261123-161920-standard-cible-partiel | standard | /,/seances-et-tarifs | fichiers, parcours | 1 | 2 | 0 | échecs |
| **20261123-162207-standard-partiel** (celle-ci) | standard | toutes | fichiers, parcours, films | 0 | 3 | 0 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `index.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 85 ms (différence 25 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 53 min de travail pour 115 min de budget, 7 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /la-praticienne, /la-reflexologie, /rendez-vous, /seances-et-tarifs.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2888 ms depuis le premier octet
- Ouverture /la-praticienne (1366×768) : 2803 ms depuis le premier octet
- film de l'ouverture /la-praticienne 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /la-reflexologie (1366×768) : 2803 ms depuis le premier octet
- Ouverture /rendez-vous (1366×768) : 2777 ms depuis le premier octet
- Ouverture /seances-et-tarifs (1366×768) : 2754 ms depuis le premier octet
- Ouverture / (390×844) : 2808 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /la-praticienne (390×844) : 2775 ms depuis le premier octet
- Ouverture /la-reflexologie (390×844) : 2797 ms depuis le premier octet
- Ouverture /rendez-vous (390×844) : 2771 ms depuis le premier octet
- Ouverture /seances-et-tarifs (390×844) : 2790 ms depuis le premier octet
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
