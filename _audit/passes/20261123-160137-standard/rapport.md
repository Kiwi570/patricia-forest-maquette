# Rapport d’audit

Projet : `patricia-forest-maquette` · 23/11/2026 17:18:58 · 17 min · 6 page(s) · audit standard

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261123-160137-standard` · version ?v=1
- Échecs : **1**
- À regarder : **27**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (10), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (5), souris immobile (4), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ⚠ à regarder | voile par défaut (glisse) |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

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
| **20261123-160137-standard** (celle-ci) | standard | toutes | toutes | 1 | 27 | 1 | échecs |

## Échecs

### positions non recalculées après un changement de hauteur (1)

- **positions non recalculées après un changement de hauteur** — `/seances-et-tarifs` — À domicile — décalage de 11 px _(1366×768)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `index.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : voile par défaut (point 3) (1)

- **grille : voile par défaut (point 3)** — formeVoile « glisse » : la grille demande la forme du monde du client (iris, vague, rideau dans le socle, ou une forme propre). Si la glisse est voulue (page qu’on tourne, store qui descend), le déclarer dans config.json (grille.dispenses.voile)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (16)

- **section sans visuel** — `/` — section#tarifs « TARIFS Une heure pour vous À domicile À La Crau Ch » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **section sans visuel** — `/` — section#avis « ILS EN PARLENT Très efficace et très professionnel » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/` — section#tarifs « TARIFS Une heure pour vous Chez vous, dans onze co » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/la-praticienne` — section#parcours « SON PARCOURS De Bangkok à la plante des pieds 1986 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/la-praticienne` — section#lieux « OÙ ELLE PRATIQUE Chez vous, ou à La Crau À domicil » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/la-reflexologie` — section#principe « LE PRINCIPE Le corps, en miniature Le pied est une » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/la-reflexologie` — section#histoire « LA PETITE HISTOIRE Quatre mille ans de pieds Des t » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/la-reflexologie` — section#cadre « CE QU'ELLE EST, ET N'EST PAS Du bien-être, en comp » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/rendez-vous` — section#demande « DEMANDE EN LIGNE Votre demande 4 étapes : le lieu, » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/rendez-vous` — section#contact « EN DIRECT Appeler, écrire PAR TÉLÉPHONE 06 47 96 9 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/seances-et-tarifs` — section#premiere « LA PREMIÈRE SÉANCE Prendre le temps de faire conna » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 320×568 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/seances-et-tarifs` — section#tarifs « TARIFS Chez vous ou à La Crau À domicile À La Crau » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 320×568 normal, 390×844 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **section sans visuel** — `/seances-et-tarifs` — section#bon-cadeau « OFFRIR Composer un bon cadeau Choisissez la séance » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 320×568 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/seances-et-tarifs` — section#groupes « EN GROUPE Ateliers et pauses bien-être Pour des at » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 320×568 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/seances-et-tarifs` — section#questions « QUESTIONS PRATIQUES Avant de réserver La réflexolo » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 320×568 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/seances-et-tarifs` — section#tarifs « TARIFS Chez vous ou à La Crau Chez vous, dans onze » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### typographie française (1)

- **typographie française** — `/rendez-vous` — section#demande > div.conteneur.demande-grille > aside.recap > p.recap-tel:nth-of-type(2) « Appeler : 06 47 96 99 86 » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 70 ms (différence 25 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/la-reflexologie` — à 58 ms (différence 26 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/seances-et-tarifs` — écran différent à la même position après rechargement (4.6 %), voir comparaisons/rechargement-seances-et-tarifs-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 53 min de travail pour 115 min de budget, 7 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /la-praticienne, /la-reflexologie, /rendez-vous, /seances-et-tarifs.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2805 ms depuis le premier octet
- Ouverture /la-praticienne (1366×768) : 2750 ms depuis le premier octet
- Ouverture /la-reflexologie (1366×768) : 2766 ms depuis le premier octet
- Ouverture /rendez-vous (1366×768) : 2778 ms depuis le premier octet
- Ouverture /seances-et-tarifs (1366×768) : 2771 ms depuis le premier octet
- Ouverture / (390×844) : 2788 ms depuis le premier octet
- Ouverture /la-praticienne (390×844) : 2785 ms depuis le premier octet
- Ouverture /la-reflexologie (390×844) : 2796 ms depuis le premier octet
- Ouverture /rendez-vous (390×844) : 2757 ms depuis le premier octet
- film de l'ouverture /rendez-vous 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /seances-et-tarifs (390×844) : 2758 ms depuis le premier octet
- Bords de l’écran : 489 images d’intro, 20 de voile et 129 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-praticienne : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-reflexologie : aucune section épinglée ou plein écran.
- Tient dans l'écran /rendez-vous : aucune section épinglée ou plein écran.
- Tient dans l'écran /seances-et-tarifs : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 392, tâche la plus longue 0 ms
- Fluidité /la-praticienne 1366×768 (molette) : 0 % d'images lentes sur 215, tâche la plus longue 0 ms
- Fluidité /la-reflexologie 1366×768 (molette) : 0 % d'images lentes sur 222, tâche la plus longue 0 ms
- Fluidité /rendez-vous 1366×768 (molette) : 0 % d'images lentes sur 156, tâche la plus longue 0 ms
- Fluidité /seances-et-tarifs 1366×768 (molette) : 0 % d'images lentes sur 271, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1431, tâche la plus longue 0 ms
- Fluidité /la-praticienne 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /la-reflexologie 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /rendez-vous 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /seances-et-tarifs 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Vitesse / : 0.44 s de calcul au chargement (téléphone ralenti).
- Vitesse /la-praticienne : 0.23 s de calcul au chargement (téléphone ralenti).
- Vitesse /la-reflexologie : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /rendez-vous : 0.32 s de calcul au chargement (téléphone ralenti).
- Vitesse /seances-et-tarifs : 0.31 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/seances-et-tarifs --seulement=fichiers,parcours
```
