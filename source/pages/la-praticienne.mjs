/* La praticienne : ouverture scindée (grande photo, nom), parcours, pourquoi les pieds, où elle pratique. */
import { html, brut } from '../../outils/gabarit.mjs';
import { symboles } from '../gabarits/pied.mjs';
import { ASHI } from '../gabarits/ideogramme.mjs';
import { appel } from '../gabarits/sections.mjs';

export const page = { cle: 'la-praticienne', fichier: 'la-praticienne', imagePartage: 'patricia-seance-1280.webp' };

const ICONES = {
  domicile: '<path d="M6 22 24 8l18 14M11 18v20h26V18M20 38V27h8v11"/>',
  crau: '<path d="M12 40V10h24v30M8 40h32M29 26v.5"/><path d="M18 16h12"/>',
  groupes: '<circle cx="16" cy="16" r="5"/><circle cx="32" cy="16" r="5"/><path d="M6 38c1-8 5-12 10-12s9 4 10 12M22 38c1-8 5-12 10-12s9 4 10 12"/>',
};

export default (c) => html`
${symboles()}
<section class="ouv-scindee" id="debut">
  ${c.media({ nom: 'patricia-seance', alt: c.donnees.images['patricia-seance'].alt, priorite: true, classe: 'ouv-scindee-photo', cadrage: '58% 40%', cadrageMobile: '55% 35%', sizes: '(max-width: 760px) 100vw, 56vw', attrs: 'data-iris-centre data-anime="gsap" data-fx="parallaxe" data-fx-force="6"' })}
  <div class="ouv-scindee-texte">
    <p class="sur" data-anime="gsap">${c.t('praticienne.tete.sur')}</p>
    <h1 class="ouv-titre" data-anime="gsap"><span class="hl"><span class="hl-in">${c.t('praticienne.tete.titre1')}</span></span> <span class="hl"><em class="hl-in">${c.t('praticienne.tete.titre2')}</em></span></h1>
    <div data-anime="gsap" class="ouv-scindee-bas">
      <p class="masque-ecran-tres-bas">${c.t('praticienne.tete.texte')}</p>
      <p class="actions">${c.lien('rendez-vous', { ancre: 'demande', classe: 'bouton', texte: c.t('praticienne.tete.action'), attrs: 'data-action-principale' })}</p>
      <p class="info-cle" data-info-cle>${c.t('praticienne.tete.info')}</p>
    </div>
  </div>
</section>

<section class="section parcours" id="parcours">
  <div class="conteneur parcours-grille">
    <div class="parcours-tete">
      <p class="sur">${c.t('praticienne.parcours.sur')}</p>
      <h2 data-anime="lignes">${c.t('praticienne.parcours.titre')}</h2>
    </div>
    <div class="parcours-liste-cadre">
      <svg class="parcours-trait" viewBox="0 0 20 1000" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M10 0V1000" fill="none" stroke="currentColor" stroke-width="2"/></svg>
      <ol class="parcours-liste">${c.donnees.parcours.map((p) => html`<li class="parcours-item" data-anime><p class="parcours-quand">${p.quand}</p><div><h3>${p.titre}</h3><p>${p.texte}</p></div></li>`)}</ol>
    </div>
  </div>
</section>

<section class="section pourquoi theme-argile" id="pourquoi">
  <div class="conteneur pourquoi-grille">
    ${c.media({ nom: 'grok/praticienne-racines', alt: c.donnees.images['grok/praticienne-racines'].alt, classe: 'pourquoi-image', sizes: '(max-width: 760px) 92vw, 44vw', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="sur">${c.t('praticienne.pourquoi.sur')}</p>
      <h2 data-anime="lignes">${c.t('praticienne.pourquoi.titre')}</h2>
      <p data-anime>${c.t('praticienne.pourquoi.texte')}</p>
      <figure class="ideo" data-anime>
        <svg class="ideo-signe" viewBox="0 0 1000 1000" role="img" aria-label="Idéogramme chinois du pied">${brut(`<path d="${ASHI}"/>`)}</svg>
        <figcaption>${c.t('praticienne.pourquoi.ideoTexte')}</figcaption>
      </figure>
    </div>
  </div>
</section>

<section class="section lieux" id="lieux">
  <div class="conteneur">
    <p class="sur">${c.t('praticienne.lieux.sur')}</p>
    <h2 data-anime="lignes">${c.t('praticienne.lieux.titre')}</h2>
    <ul class="lieux-grille" data-anime="cascade">
      ${['domicile', 'crau', 'groupes'].map((k) => html`<li class="lieu-carte">
        <svg class="lieu-icone" viewBox="0 0 48 48" aria-hidden="true">${brut(ICONES[k])}</svg>
        <h3>${c.t(`praticienne.lieux.${k}T`)}</h3>
        <p>${c.t(`praticienne.lieux.${k}`)}</p>
      </li>`)}
    </ul>
  </div>
</section>

${appel(c)}
`;
