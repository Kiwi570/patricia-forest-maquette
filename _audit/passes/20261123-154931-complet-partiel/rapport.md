# Rapport d’audit

Projet : `patricia-forest-maquette` · 23/11/2026 16:55:16 · 6 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **12 échec(s)**
- Passe : `20261123-154931-complet-partiel` · version ?v=1
- Échecs : **12**
- À regarder : **17**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5)

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
| **20261123-154931-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 12 | 17 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (4)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > div.hero-bas > p.info-cle:nth-of-type(2) « À domicile, de Six-Fours à Hyères 1 h · 60 € » _(1000×560 normal, 844×390 sansJs, 1000×560 sansJs, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte > div.introuvable-carte > p.info-cle:nth-of-type(4) « 06 47 96 99 86 » _(1000×560 normal, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/la-praticienne` — section#debut > div.ouv-scindee-texte > div.ouv-scindee-bas > p.info-cle:nth-of-type(3) « Plus de 500 heures de formation » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/seances-et-tarifs` — section#debut > div.ouv-prix-texte > div > p.info-cle:nth-of-type(3) « À La Crau : 50 € l'heure » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

### textes qui se chevauchent (6)

- **textes qui se chevauchent** — `/` — div.conteneur > ul.tarifs-grille > li.tarif:nth-of-type(1) > h3.tarif-nom « Séance de 30 minutes » — avec ul.tarifs-grille > li.tarif:nth-of-type(1) > p.tarif-prix:nth-of-type(2) > span.prix-texte:nth-of-type(1) « 35 € » _(844×390 sansJs, 768×1024 sansJs)_
- **textes qui se chevauchent** — `/` — div.conteneur > ul.tarifs-grille > li.tarif:nth-of-type(2) > h3.tarif-nom « Séance d'une heure » — avec ul.tarifs-grille > li.tarif:nth-of-type(2) > p.tarif-prix:nth-of-type(2) > span.prix-texte:nth-of-type(1) « 60 € » _(844×390 sansJs, 768×1024 sansJs)_
- **textes qui se chevauchent** — `/` — div.conteneur > ul.tarifs-grille > li.tarif:nth-of-type(3) > h3.tarif-nom « Forfait 5 séances d'une heure » — avec ul.tarifs-grille > li.tarif:nth-of-type(3) > p.tarif-prix:nth-of-type(2) > span.prix-texte:nth-of-type(1) « 250 € » _(844×390 sansJs, 768×1024 sansJs)_
- **textes qui se chevauchent** — `/seances-et-tarifs` — div.conteneur > ul.tarifs-grille > li.tarif:nth-of-type(1) > h3.tarif-nom « Séance de 30 minutes » — avec ul.tarifs-grille > li.tarif:nth-of-type(1) > p.tarif-prix:nth-of-type(2) > span.prix-texte:nth-of-type(1) « 35 € » _(844×390 sansJs, 768×1024 sansJs)_
- **textes qui se chevauchent** — `/seances-et-tarifs` — div.conteneur > ul.tarifs-grille > li.tarif:nth-of-type(2) > h3.tarif-nom « Séance d'une heure » — avec ul.tarifs-grille > li.tarif:nth-of-type(2) > p.tarif-prix:nth-of-type(2) > span.prix-texte:nth-of-type(1) « 60 € » _(844×390 sansJs, 768×1024 sansJs)_
- **textes qui se chevauchent** — `/seances-et-tarifs` — div.conteneur > ul.tarifs-grille > li.tarif:nth-of-type(3) > h3.tarif-nom « Forfait 5 séances d'une heure » — avec ul.tarifs-grille > li.tarif:nth-of-type(3) > p.tarif-prix:nth-of-type(2) > span.prix-texte:nth-of-type(1) « 250 € » _(844×390 sansJs, 768×1024 sansJs)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/` — div.hero-texte:nth-of-type(1) > div.hero-bas > p.actions:nth-of-type(1) > a.bouton:nth-of-type(1) « Prendre rendez-vous » _(1000×560 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/seances-et-tarifs` — div.ouv-prix-texte > div > p.actions:nth-of-type(2) > a.bouton:nth-of-type(1) « Prendre rendez-vous » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

## À regarder

### section sans visuel (16)

- **section sans visuel** — `/` — section#tarifs « TARIFS Une heure pour vous À domicile À La Crau Ch » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +20)_
- **section sans visuel** — `/` — section#avis « ILS EN PARLENT Très efficace et très professionnel » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/` — section#tarifs « TARIFS Une heure pour vous Chez vous, dans onze co » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs, +7)_
- **section sans visuel** — `/la-praticienne` — section#parcours « SON PARCOURS De Bangkok à la plante des pieds 1986 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/la-praticienne` — section#lieux « OÙ ELLE PRATIQUE Chez vous, ou à La Crau À domicil » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/la-reflexologie` — section#principe « LE PRINCIPE Le corps, en miniature Le pied est une » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/la-reflexologie` — section#histoire « LA PETITE HISTOIRE Quatre mille ans de pieds Des t » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/la-reflexologie` — section#cadre « CE QU'ELLE EST, ET N'EST PAS Du bien-être, en comp » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/rendez-vous` — section#demande « DEMANDE EN LIGNE Votre demande 4 étapes : le lieu, » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/rendez-vous` — section#contact « EN DIRECT Appeler, écrire PAR TÉLÉPHONE 06 47 96 9 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/seances-et-tarifs` — section#premiere « LA PREMIÈRE SÉANCE Prendre le temps de faire conna » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/seances-et-tarifs` — section#tarifs « TARIFS Chez vous ou à La Crau À domicile À La Crau » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +20)_
- **section sans visuel** — `/seances-et-tarifs` — section#bon-cadeau « OFFRIR Composer un bon cadeau Choisissez la séance » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/seances-et-tarifs` — section#groupes « EN GROUPE Ateliers et pauses bien-être Pour des at » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/seances-et-tarifs` — section#questions « QUESTIONS PRATIQUES Avant de réserver La réflexolo » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/seances-et-tarifs` — section#tarifs « TARIFS Chez vous ou à La Crau Chez vous, dans onze » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs, +7)_

### typographie française (1)

- **typographie française** — `/rendez-vous` — section#demande > div.conteneur.demande-grille > aside.recap > p.recap-tel:nth-of-type(2) « Appeler : 06 47 96 99 86 » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-praticienne : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-reflexologie : aucune section épinglée ou plein écran.
- Tient dans l'écran /rendez-vous : aucune section épinglée ou plein écran.
- Tient dans l'écran /seances-et-tarifs : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404,/la-praticienne,/seances-et-tarifs --seulement=fichiers,mesures
```
