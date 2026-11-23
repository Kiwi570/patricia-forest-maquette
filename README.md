# Patricia Forest · maquette du site (v2)

Maquette de présentation du futur site de Patricia Forest, réflexologue (réflexologie plantaire à domicile dans le Var et au cabinet de La Crau). Direction « Reprendre pied » : sable, vert pin, terre cuite ; titres DM Serif Display, texte Figtree.

Adresse de la maquette : https://patricia-forest-maquette.vercel.app

## Pages

- Accueil : « Reprendre pied. », le pied comme carte du corps, une séance en trois temps, la zone (de Six-Fours à Hyères) et le cabinet de La Crau, les tarifs domicile / La Crau, la praticienne, un témoignage, l'appel final et le guide malin offert.
- La réflexologie : le principe, la carte du pied à toucher, « Ralentir, pour commencer » (une minute de respiration guidée), la petite histoire, ce qu'elle est et n'est pas.
- La praticienne : parcours (Bangkok 1986, EPRP, centre Mireille Meunier, plus de 500 h, FFR), pourquoi les pieds, où elle pratique.
- Séances et tarifs : 60 € l'heure à domicile, la première séance, la grille, le bon cadeau à composer, les ateliers et pauses en entreprise, les questions pratiques.
- Rendez-vous : demande en quatre étapes (simulée), la zone et le cabinet, téléphone, e-mail, Facebook.
- 404 : « Vous avez perdu pied ? ».

## Ce que le client doit fournir (à compléter)

| Information | Où | Remarque |
|---|---|---|
| Mentions légales : nom ou raison sociale, adresse, SIRET, directeur de la publication | pied de page | « à compléter » dans la maquette |
| Hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis | mentions légales | adresse à revérifier sur vercel.com au moment de la mise en ligne |
| Politique de confidentialité (RGPD) | pied de page, formulaires | « à compléter » |
| Assurance responsabilité civile professionnelle | mentions légales | non indiquée sur le site actuel |
| Logo | en-tête, favicon, partage | le site actuel n'a pas de logo : la maquette utilise une signature typographique et un médaillon dessiné (pied tracé) |
| Liste des onze communes desservies à domicile | accueil, rendez-vous | le site actuel dit seulement « de Six-Fours à Toulon et Hyères » : la carte ne nomme que Six-Fours, Toulon, Hyères et La Crau |
| Jours et horaires | partout | le site actuel se contredit (« tous les jours, 10 h - 19 h » sur l'accueil, « du lundi au samedi » sur la page contact, « le samedi à La Crau » sur la page praticienne) ; la maquette n'affiche aucune heure : « sur rendez-vous, du lundi au samedi » |
| Jours de présence au cabinet de La Crau | rendez-vous, praticienne | non précisés de façon sûre |
| Prix de la première séance (1 h 30) | séances et tarifs | non indiqué : la maquette dit seulement de prévoir 1 h 30 |
| Forfait de 5 séances au cabinet de La Crau | tarifs | non indiqué : la maquette le dit « proposé à domicile » |
| Moyens de paiement | séances et tarifs | non indiqués |
| Second témoignage du carrousel actuel, et d'autres avis réels | accueil | un seul témoignage (Lud M.) repris tel quel |
| Niveau RNCP | la praticienne | le site dit « niveau II » (ancienne nomenclature, aujourd'hui niveau 6) : la maquette dit « certifiée RNCP » sans niveau |
| Validation de la carte du pied | accueil, la réflexologie | schéma simplifié d'après les cartes classiques de réflexologie plantaire, à faire valider par Patricia |
| Crédits des illustrations générées | partout | toutes les images marquées « Illustration générée » ont été créées avec Grok : la mention reste sur le site final |

## Ce qui a été retiré ou reformulé

- Les promesses de l'accueil actuel (sommeil, digestion, migraines, problèmes féminins, système immunitaire, élimination des toxines, circulation) ne sont pas reprises : une pratique de bien-être ne peut pas promettre d'effets sur la santé. La maquette s'en tient à ce que dit la page « La réflexologie plantaire » : détente profonde, mieux-être, gestion du stress, technique complémentaire qui ne remplace ni l'avis d'un médecin ni un traitement.
- Les photos de banque d'images du site actuel (bouddhas, galets empilés, lotus, pissenlit, dos de femme, pied tenu par des mains) sont écartées. La seule vraie photo (Patricia en séance) ouvre l'accueil et la page « La praticienne ».
- La phrase sur l'idéogramme du pied est reprise comme la raconte Patricia (« selon Patricia »).

## À retirer ou remplacer à la mise en ligne définitive

- La consigne noindex dans chaque page (meta robots) et l'en-tête X-Robots-Tag de vercel.json.
- Les formulaires simulés (demande de rendez-vous, lettre d'information, bon cadeau) : à brancher sur un vrai envoi.
- Les mentions « à compléter » du pied de page et des formulaires.
- Garder la mention « Illustration générée » sur chaque image créée avec Grok.

## Technique

- Site statique (HTML, CSS, JavaScript), généré depuis `donnees/` et `source/` par `node outils/generer.mjs`. Ne jamais modifier à la main les pages produites.
- Images : `plan-images.json` puis le pipeline de la bibliothèque (`produire.mjs`), images de partage par `partage.mjs`.
- Audit : `node _audit/audit.mjs` (rapport dans `_audit/rapport/`).
