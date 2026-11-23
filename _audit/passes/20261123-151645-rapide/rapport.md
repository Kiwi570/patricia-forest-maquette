# Rapport d’audit

Projet : `patricia-forest-maquette` · 23/11/2026 16:21:14 · 4 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison

## Résumé

- Statut : **258 échec(s)**
- Passe : `20261123-151645-rapide` · version ?v=1
- Échecs : **258**
- À regarder : **16**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (6), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (8), liens vers la page en cours (1), changements de hauteur (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (5), souris immobile (1), vitesse (1), captures (1)

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

## Échecs

### image de partage (5)

- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `la-praticienne.html` — fichier introuvable : /assets/partage/la-praticienne-fr.jpg
- **image de partage** — `la-reflexologie.html` — fichier introuvable : /assets/partage/la-reflexologie-fr.jpg
- **image de partage** — `rendez-vous.html` — fichier introuvable : /assets/partage/rendez-vous-fr.jpg
- **image de partage** — `seances-et-tarifs.html` — fichier introuvable : /assets/partage/seances-et-tarifs-fr.jpg

### texte coupé (21)

- **texte coupé** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(3) « 2 » — coupé par li.tarif:nth-of-type(1) > p.tarif-prix:nth-of-type(2) > span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) « 0 1 2 3 4 5 6 7 8 9 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(4) « 3 » — coupé par li.tarif:nth-of-type(1) > p.tarif-prix:nth-of-type(2) > span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) « 0 1 2 3 4 5 6 7 8 9 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(5) « 4 » — coupé par li.tarif:nth-of-type(1) > p.tarif-prix:nth-of-type(2) > span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) « 0 1 2 3 4 5 6 7 8 9 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(5) « 4 » — coupé par li.tarif:nth-of-type(1) > p.tarif-prix:nth-of-type(2) > span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) « 0 1 2 3 4 5 6 7 8 9 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(6) « 5 » — coupé par li.tarif:nth-of-type(1) > p.tarif-prix:nth-of-type(2) > span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) « 0 1 2 3 4 5 6 7 8 9 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(7) « 6 » — coupé par li.tarif:nth-of-type(1) > p.tarif-prix:nth-of-type(2) > span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) « 0 1 2 3 4 5 6 7 8 9 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(6) « 5 » — coupé par li.tarif:nth-of-type(2) > p.tarif-prix:nth-of-type(2) > span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) « 0 1 2 3 4 5 6 7 8 9 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(7) « 6 » — coupé par li.tarif:nth-of-type(2) > p.tarif-prix:nth-of-type(2) > span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) « 0 1 2 3 4 5 6 7 8 9 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(8) « 7 » — coupé par li.tarif:nth-of-type(2) > p.tarif-prix:nth-of-type(2) > span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) « 0 1 2 3 4 5 6 7 8 9 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(1) « 0 » — coupé par li.tarif:nth-of-type(2) > p.tarif-prix:nth-of-type(2) > span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) « 0 1 2 3 4 5 6 7 8 9 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(2) « 1 » — coupé par li.tarif:nth-of-type(2) > p.tarif-prix:nth-of-type(2) > span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) « 0 1 2 3 4 5 6 7 8 9 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(1) > span.rouleau-piste > span:nth-of-type(2) « 1 » — coupé par li.tarif:nth-of-type(3) > p.tarif-prix:nth-of-type(2) > span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(1) « 0 1 2 3 4 5 6 7 8 9 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(1) > span.rouleau-piste > span:nth-of-type(3) « 2 » — coupé par li.tarif:nth-of-type(3) > p.tarif-prix:nth-of-type(2) > span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(1) « 0 1 2 3 4 5 6 7 8 9 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(1) > span.rouleau-piste > span:nth-of-type(4) « 3 » — coupé par li.tarif:nth-of-type(3) > p.tarif-prix:nth-of-type(2) > span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(1) « 0 1 2 3 4 5 6 7 8 9 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(5) « 4 » — coupé par li.tarif:nth-of-type(3) > p.tarif-prix:nth-of-type(2) > span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) « 0 1 2 3 4 5 6 7 8 9 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(6) « 5 » — coupé par li.tarif:nth-of-type(3) > p.tarif-prix:nth-of-type(2) > span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) « 0 1 2 3 4 5 6 7 8 9 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(7) « 6 » — coupé par li.tarif:nth-of-type(3) > p.tarif-prix:nth-of-type(2) > span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) « 0 1 2 3 4 5 6 7 8 9 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(1) « 0 » — coupé par li.tarif:nth-of-type(3) > p.tarif-prix:nth-of-type(2) > span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) « 0 1 2 3 4 5 6 7 8 9 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(2) « 1 » — coupé par li.tarif:nth-of-type(3) > p.tarif-prix:nth-of-type(2) > span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) « 0 1 2 3 4 5 6 7 8 9 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/` — svg.littoral.trace-fini > g.communes:nth-of-type(2) > g.commune:nth-of-type(1) > text — coupé par section#zone > div.conteneur.zone-grille > figure.zone-carte > svg.littoral.trace-fini « Plan du littoral varois : la zone des séances à do » _(390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/` — figure.zone-carte > svg.littoral.trace-fini > g.epingle:nth-of-type(3) > text — coupé par section#zone > div.conteneur.zone-grille > figure.zone-carte > svg.littoral.trace-fini « Plan du littoral varois : la zone des séances à do » _(390×844 normal, 390×844 sansWebgl, 844×390 normal)_

### textes qui se chevauchent (191)

- **textes qui se chevauchent** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.sur.hero-sur:nth-of-type(1) « RÉFLEXOLOGIE PLANTAIRE · VAR » — avec div.hero-texte:nth-of-type(1) > h1.hero-titre > span.hl:nth-of-type(1) > span.hl-in « Reprendre » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur > div.tarifs-tete:nth-of-type(1) > div:nth-of-type(1) > h2 « Une heure pour vous » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(1) « 0 » _(1366×768 normal, 844×390 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur > div.tarifs-tete:nth-of-type(1) > div:nth-of-type(1) > h2 « Une heure pour vous » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(2) « 1 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur > div.tarifs-tete:nth-of-type(1) > div:nth-of-type(1) > h2 « Une heure pour vous » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(3) « 2 » _(1366×768 normal, 844×390 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur > div.tarifs-tete:nth-of-type(1) > div:nth-of-type(1) > h2 « Une heure pour vous » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(3) « 2 » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur > div.tarifs-tete:nth-of-type(1) > div:nth-of-type(1) > h2 « Une heure pour vous » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(4) « 3 » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — section#tarifs > div.conteneur > p.tarifs-lieu:nth-of-type(1) > span:nth-of-type(1) « Chez vous, dans onze communes du Var. » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(1) « 0 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — section#tarifs > div.conteneur > p.tarifs-lieu:nth-of-type(1) > span:nth-of-type(1) « Chez vous, dans onze communes du Var. » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(2) « 1 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — section#tarifs > div.conteneur > p.tarifs-lieu:nth-of-type(1) > span:nth-of-type(1) « Chez vous, dans onze communes du Var. » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(3) « 2 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — section#tarifs > div.conteneur > p.tarifs-lieu:nth-of-type(1) > span:nth-of-type(1) « Chez vous, dans onze communes du Var. » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(4) « 3 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur > ul.tarifs-grille.fx-fini > li.tarif:nth-of-type(1) > p.tarif-duree:nth-of-type(1) « 30 MIN » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(2) « 1 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur > ul.tarifs-grille.fx-fini > li.tarif:nth-of-type(1) > p.tarif-duree:nth-of-type(1) « 30 MIN » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(3) « 2 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur > ul.tarifs-grille.fx-fini > li.tarif:nth-of-type(1) > p.tarif-duree:nth-of-type(1) « 30 MIN » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(4) « 3 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur > ul.tarifs-grille.fx-fini > li.tarif:nth-of-type(1) > p.tarif-duree:nth-of-type(1) « 30 MIN » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(5) « 4 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur > ul.tarifs-grille.fx-fini > li.tarif:nth-of-type(1) > h3.tarif-nom « Séance de 30 minutes » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(2) « 1 » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur > ul.tarifs-grille.fx-fini > li.tarif:nth-of-type(1) > h3.tarif-nom « Séance de 30 minutes » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(3) « 2 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur > ul.tarifs-grille.fx-fini > li.tarif:nth-of-type(1) > h3.tarif-nom « Séance de 30 minutes » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(4) « 3 » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur > ul.tarifs-grille.fx-fini > li.tarif:nth-of-type(1) > h3.tarif-nom « Séance de 30 minutes » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(5) « 4 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(5) « 4 » — avec section#tarifs > div.conteneur > p.tarifs-premiere:nth-of-type(2) « Première séance : questionnaire de santé, puis la  » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(6) « 5 » — avec section#tarifs > div.conteneur > p.tarifs-premiere:nth-of-type(2) « Première séance : questionnaire de santé, puis la  » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(6) « 5 » — avec div.conteneur > div.tarifs-bas:nth-of-type(2) > a.carte-bon:nth-of-type(1) > span.carte-bon-sur:nth-of-type(1) « OFFRIR » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(7) « 6 » — avec div.conteneur > div.tarifs-bas:nth-of-type(2) > a.carte-bon:nth-of-type(1) > span.carte-bon-sur:nth-of-type(1) « OFFRIR » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(7) « 6 » — avec section#tarifs > div.conteneur > p.tarifs-premiere:nth-of-type(2) « Première séance : questionnaire de santé, puis la  » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(8) « 7 » — avec section#tarifs > div.conteneur > p.tarifs-premiere:nth-of-type(2) « Première séance : questionnaire de santé, puis la  » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(8) « 7 » — avec div.conteneur > div.tarifs-bas:nth-of-type(2) > a.carte-bon:nth-of-type(1) > span.carte-bon-titre:nth-of-type(2) « Un bon cadeau » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(8) « 7 » — avec div.conteneur > div.tarifs-bas:nth-of-type(2) > a.carte-bon:nth-of-type(1) > span.carte-bon-texte:nth-of-type(3) « Une séance à offrir, valable 6 mois. » _(1366×768 normal, 844×390 normal)_
- **textes qui se chevauchent** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(9) « 8 » — avec div.conteneur > div.tarifs-bas:nth-of-type(2) > a.carte-bon:nth-of-type(1) > span.carte-bon-titre:nth-of-type(2) « Un bon cadeau » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(9) « 8 » — avec div.conteneur > div.tarifs-bas:nth-of-type(2) > a.carte-bon:nth-of-type(1) > span.carte-bon-texte:nth-of-type(3) « Une séance à offrir, valable 6 mois. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(9) « 8 » — avec div.conteneur > div.tarifs-bas:nth-of-type(2) > a.carte-bon:nth-of-type(1) > span.carte-bon-action:nth-of-type(4) « Composer un bon cadeau → » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur > ul.tarifs-grille.fx-fini > li.tarif:nth-of-type(2) > p.tarif-duree:nth-of-type(1) « 1 H » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(5) « 4 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur > ul.tarifs-grille.fx-fini > li.tarif:nth-of-type(2) > p.tarif-duree:nth-of-type(1) « 1 H » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(6) « 5 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur > ul.tarifs-grille.fx-fini > li.tarif:nth-of-type(2) > h3.tarif-nom « Séance d'une heure » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(5) « 4 » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur > ul.tarifs-grille.fx-fini > li.tarif:nth-of-type(2) > h3.tarif-nom « Séance d'une heure » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(6) « 5 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(8) « 7 » — avec section#tarifs > div.conteneur > p.tarifs-premiere:nth-of-type(2) « Première séance : questionnaire de santé, puis la  » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(9) « 8 » — avec section#tarifs > div.conteneur > p.tarifs-premiere:nth-of-type(2) « Première séance : questionnaire de santé, puis la  » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(2) « 1 » — avec section#tarifs > div.conteneur > p.tarifs-premiere:nth-of-type(2) « Première séance : questionnaire de santé, puis la  » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(3) > span.rouleau-piste > span:nth-of-type(3) « 2 » — avec section#tarifs > div.conteneur > p.tarifs-premiere:nth-of-type(2) « Première séance : questionnaire de santé, puis la  » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur > ul.tarifs-grille.fx-fini > li.tarif:nth-of-type(3) > p.tarif-duree:nth-of-type(1) « 5 × 1 H » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(1) > span.rouleau-piste > span:nth-of-type(1) « 0 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur > ul.tarifs-grille.fx-fini > li.tarif:nth-of-type(3) > p.tarif-duree:nth-of-type(1) « 5 × 1 H » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(1) > span.rouleau-piste > span:nth-of-type(2) « 1 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur > ul.tarifs-grille.fx-fini > li.tarif:nth-of-type(3) > p.tarif-duree:nth-of-type(1) « 5 × 1 H » — avec span.prix-rouleaux:nth-of-type(2) > span.rouleau:nth-of-type(2) > span.rouleau-piste > span:nth-of-type(4) « 3 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- … et 151 autres (rapport.json)

### contraste insuffisant (37)

- **contraste insuffisant** — `/` — section#principe > div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.sur:nth-of-type(1) « LE PRINCIPE » — 4.33:1 (minimum 4.5:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(1) « Sur » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(2) « la » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(3) « plante » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(4) « du » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(5) « pied, » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(6) « chaque » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(7) « organe, » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(8) « chaque » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(9) « fonction » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(10) « a » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(11) « sa » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(12) « zone » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(13) « réflexe. » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(14) « Par » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(15) « des » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(16) « pressions » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(17) « ciblées » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(18) « et » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(19) « rythmées, » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(20) « je » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(21) « repère » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(22) « les » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(23) « tensions » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(24) « et » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(25) « j'invite » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(26) « le » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(27) « corps » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(28) « à » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(29) « se » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p.manifeste:nth-of-type(2) > span.mm:nth-of-type(30) « relâcher. » — 1.67:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur.carte-corps-grille > div.carte-corps-texte:nth-of-type(1) > p:nth-of-type(4) > a.lien-fleche « Toucher la carte du pied → » — 4.33:1 (minimum 4.5:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — div.carte-corps-visuel:nth-of-type(2) > ol.zones-liste > li.zone-item.allumee:nth-of-type(1) > span.zone-nom:nth-of-type(2) « Tête et sinus » — 4.33:1 (minimum 4.5:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — section#zone > div.conteneur.zone-grille > div.zone-texte > p.sur:nth-of-type(1) « OÙ JE VIENS » — 4.33:1 (minimum 4.5:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — div.conteneur > div.tarifs-tete:nth-of-type(1) > div.bascule:nth-of-type(2) > button.bascule-choix:nth-of-type(1) « À domicile » — 1.26:1 (minimum 4.5:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — div.conteneur > div.tarifs-bas:nth-of-type(2) > a.carte-bon:nth-of-type(1) > span.carte-bon-texte:nth-of-type(3) « Une séance à offrir, valable 6 mois. » — 1.48:1 (minimum 4.5:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#avis > div.conteneur.avis-contenu > p.sur « ILS EN PARLENT » — 4.33:1 (minimum 4.5:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### accessibilité (axe) : color-contrast (2)

- **accessibilité (axe) : color-contrast** — `/` — .carte-corps-texte > .sur ; a[href$="la-reflexologie#carte"] ; li[data-zone-item="bassin"] > .zone-nom — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/` — .carte-corps-texte > .sur ; a[href$="la-reflexologie#carte"] ; .zone-texte > .sur — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_

### retour avant : image isolée différente (flash) (1)

- **retour avant : image isolée différente (flash)** — `/la-reflexologie` — à 57 ms (films/retour-avant-1366.png) _(1366×768 retour avant)_

### fluidité (1)

- **fluidité** — `/` — 0 % d'images de plus de 50 ms, tâche la plus longue 265 ms _(390×844 défilement au doigt, processeur ralenti 4 fois)_

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

### texte de contenu sous 13 px (ordinateur) (5)

- **texte de contenu sous 13 px (ordinateur)** — `/` — ol.seance-etapes > li.etape:nth-of-type(1) > figure.media.etape-photo > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ol.seance-etapes > li.etape:nth-of-type(2) > figure.media.etape-photo > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ol.seance-etapes > li.etape:nth-of-type(3) > figure.media.etape-photo > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#praticienne > div.conteneur.praticienne-grille > figure.media.praticienne-image > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#appel > figure.media.appel-photo-image > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### section sans visuel (3)

- **section sans visuel** — `/` — section#tarifs « TARIFS Une heure pour vous À domicile À La Crau Ch » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **section sans visuel** — `/` — section#avis « ILS EN PARLENT Très efficace et très professionnel » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/` — section#tarifs « TARIFS Une heure pour vous Chez vous, dans onze co » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 320×568 sansJs)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 84 ms (différence 22 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

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
- Journal v1 : 4 étape(s) notée(s), 42 min de travail pour 75 min de budget, 8 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films » 10 min pour 5 prévues.
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2802 ms depuis le premier octet
- Ouverture / (390×844) : 2789 ms depuis le premier octet
- Bords de l’écran : 95 images d’intro, 4 de voile et 22 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 396, tâche la plus longue 52 ms
- Vitesse / : 0.43 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,films,fluidite
```
