# Rapport d’audit

Projet : `patricia-forest-maquette` · 23/11/2026 16:24:20 · 2 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison (étapes : fichiers, mesures, films, fluidite)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261123-152243-rapide-partiel` · version ?v=1
- Échecs : **1**
- À regarder : **12**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (6), films d’ouverture (2), films de transition (2), fluidité (2), défilement selon l’appareil (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-151645-rapide | rapide | toutes | toutes | 258 | 16 | 1 | échecs |
| **20261123-152243-rapide-partiel** (celle-ci) | rapide | toutes | fichiers, mesures, films, fluidite | 1 | 12 | 0 | échecs |

## Échecs

### texte coupé (1)

- **texte coupé** — `/` — figure.zone-carte > svg.littoral.trace-fini > g.epingle:nth-of-type(3) > text — coupé par section#zone > div.conteneur.zone-grille > figure.zone-carte > svg.littoral.trace-fini « Plan du littoral varois : la zone des séances à do » _(390×844 normal, 390×844 sansWebgl)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `index.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### texte de contenu sous 13 px (ordinateur) (5)

- **texte de contenu sous 13 px (ordinateur)** — `/` — ol.seance-etapes > li.etape:nth-of-type(1) > figure.media.etape-photo > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ol.seance-etapes > li.etape:nth-of-type(2) > figure.media.etape-photo > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ol.seance-etapes > li.etape:nth-of-type(3) > figure.media.etape-photo > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#praticienne > div.conteneur.praticienne-grille > figure.media.praticienne-image > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#appel > figure.media.appel-photo-image > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### section sans visuel (3)

- **section sans visuel** — `/` — section#tarifs « TARIFS Une heure pour vous À domicile À La Crau Ch » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **section sans visuel** — `/` — section#avis « ILS EN PARLENT Très efficace et très professionnel » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **section sans visuel** — `/` — section#tarifs « TARIFS Une heure pour vous Chez vous, dans onze co » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 320×568 sansJs)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 79 ms (différence 25 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/la-reflexologie` — à 50 ms (différence 26 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 42 min de travail pour 75 min de budget, 8 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films » 10 min pour 5 prévues.
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2905 ms depuis le premier octet
- Ouverture / (390×844) : 2854 ms depuis le premier octet
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 398, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1424, tâche la plus longue 0 ms

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --pages=/ --seulement=fichiers,mesures
```
