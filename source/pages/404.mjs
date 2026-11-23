/* Page introuvable : « Vous avez perdu pied ? », traces de pas dans le sable. */
import { html } from '../../outils/gabarit.mjs';
import { symboles } from '../gabarits/pied.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
${symboles()}
<section class="introuvable ecran" id="debut">
  ${c.media({ nom: 'grok/page-404', alt: c.donnees.images['grok/page-404'].alt, priorite: true, classe: 'introuvable-image', cadrage: '30% 60%', cadrageMobile: '50% 70%', sizes: '100vw', attrs: 'data-iris-centre data-fx="zoom"' })}
  <div class="conteneur introuvable-texte"><div class="introuvable-carte">
    <p class="sur">404</p>
    <h1 data-anime="lignes">${c.t('introuvable.titre')}</h1>
    <p data-anime>${c.t('introuvable.texte')}</p>
    <p class="actions" data-anime>${c.lien('accueil', { classe: 'bouton bouton--clair', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })} ${c.lien('rendez-vous', { ancre: 'demande', classe: 'bouton bouton--contour', texte: c.t('introuvable.rdv') })}</p>
    <p class="info-cle" data-info-cle>${c.site.contact.telephone}</p>
  </div></div>
</section>
`;
