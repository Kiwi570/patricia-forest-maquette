/* La réflexologie : grand titre puis bandeau photo, le principe, la carte du pied à toucher, la petite histoire, le cadre. */
import { html } from '../../outils/gabarit.mjs';
import { pieds, legendeZones, symboles, medaillon } from '../gabarits/pied.mjs';
import { appel } from '../gabarits/sections.mjs';

export const page = { cle: 'la-reflexologie', fichier: 'la-reflexologie', imagePartage: 'grok/reflexologie-sentier-1280.webp' };

export default (c) => html`
${symboles()}
<section class="ouv-bandeau" id="debut">
  <div class="conteneur ouv-bandeau-tete">
    <div>
      <p class="sur" data-anime="gsap">${c.t('reflexo.tete.sur')}</p>
      <h1 class="ouv-titre" data-anime="gsap"><span class="hl"><span class="hl-in">${c.t('reflexo.tete.titre1')}</span></span> <span class="hl"><em class="hl-in">${c.t('reflexo.tete.titre2')}</em></span></h1>
    </div>
    <div class="ouv-bandeau-cote" data-anime="gsap">
      <p class="masque-ecran-tres-bas">${c.t('reflexo.tete.texte')}</p>
      <p class="actions">${c.lien('rendez-vous', { ancre: 'demande', classe: 'bouton', texte: c.t('reflexo.tete.action'), attrs: 'data-action-principale' })}</p>
      <p class="info-cle" data-info-cle>${c.t('reflexo.tete.info')}</p>
    </div>
  </div>
  ${c.media({ nom: 'grok/reflexologie-sentier', alt: c.donnees.images['grok/reflexologie-sentier'].alt, priorite: true, classe: 'ouv-bandeau-image', cadrage: '50% 62%', cadrageMobile: '50% 60%', sizes: '100vw', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="8"' })}
</section>

<section class="section principe theme-argile" id="principe">
  <div class="conteneur principe-grille">
    <div>
      <p class="sur">${c.t('reflexo.principe.sur')}</p>
      <h2 data-anime="lignes">${c.t('reflexo.principe.titre')}</h2>
    </div>
    <div class="principe-texte" data-anime="cascade">
      <p class="principe-grand">${c.t('reflexo.principe.p1')}</p>
      <p>${c.t('reflexo.principe.p2')}</p>
      <p class="principe-retenu">${c.t('reflexo.principe.p3')}</p>
    </div>
  </div>
</section>

<section class="section carte-outil" id="carte">
  <div class="conteneur carte-outil-grille" data-carte-outil>
    <div class="carte-outil-visuel">
      ${pieds(c, { classe: 'pieds--outil', attrs: 'data-effet="zones"', numeros: true })}
      <p class="zones-note">${c.t('pied.legende')}</p>
    </div>
    <div class="carte-outil-panneau">
      <p class="sur">${c.t('reflexo.carte.sur')}</p>
      <h2 data-anime="lignes">${c.t('reflexo.carte.titre')}</h2>
      <p class="carte-aide"><span class="aide-toucher">${c.t('pied.aide')}</span><span class="aide-souris">${c.t('pied.aideSouris')}</span></p>
      ${legendeZones(c)}
      <div class="zone-detail" aria-live="polite" data-zone-detail>
        ${c.donnees.zones.map((z, i) => html`<div class="zone-fiche" data-zone-fiche="${z.id}"${i === 3 ? '' : html` hidden`}><p class="zone-fiche-nom">${z.nom}</p><p>${z.texte}</p></div>`)}
      </div>
    </div>
  </div>
</section>

<section class="section pause theme-argile" id="pause">
  <div class="conteneur pause-grille">
    <div class="pause-texte">
      <p class="sur">${c.t('reflexo.pause.sur')}</p>
      <h2 data-anime="lignes">${c.t('reflexo.pause.titre')}</h2>
      <p data-anime>${c.t('reflexo.pause.texte')}</p>
      <p class="actions" data-anime><button type="button" class="bouton" data-souffle-bouton aria-pressed="false" data-commencer="${c.s('reflexo.pause.commencer')}" data-arreter="${c.s('reflexo.pause.arreter')}" data-recommencer="${c.s('reflexo.pause.recommencer')}">${c.t('reflexo.pause.commencer')}</button></p>
      <p class="pause-note">${c.t('reflexo.pause.note')}</p>
    </div>
    <div class="souffle" data-souffle data-inspirez="${c.s('reflexo.pause.inspirez')}" data-expirez="${c.s('reflexo.pause.expirez')}" data-fin="${c.s('reflexo.pause.fin')}">
      <div class="souffle-cercle" data-visuel>
        <span class="souffle-anneau souffle-anneau--1" aria-hidden="true" data-souffle-anneau></span>
        <span class="souffle-anneau souffle-anneau--2" aria-hidden="true"></span>
        <div class="souffle-coeur" data-souffle-coeur data-effet="souffle">${medaillon({ classe: 'medaillon medaillon--souffle' })}</div>
      </div>
      <p class="souffle-consigne" aria-live="polite" data-souffle-consigne>${c.t('reflexo.pause.pret')}</p>
      <p class="souffle-compte" aria-hidden="true"><span data-souffle-compte>0</span> / 6</p>
    </div>
  </div>
</section>

<section class="section histoire theme-pin" id="histoire">
  <div class="conteneur">
    <div class="histoire-tete">
      <p class="sur">${c.t('reflexo.histoire.sur')}</p>
      <h2 data-anime="lignes">${c.t('reflexo.histoire.titre')}</h2>
      <p data-anime>${c.t('reflexo.histoire.texte')}</p>
    </div>
    <div class="frise">
      <svg class="frise-trait" viewBox="0 0 1000 20" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M0 10H1000" fill="none" stroke="currentColor" stroke-width="2"/></svg>
      <ol class="frise-liste" data-anime="cascade">${c.donnees.histoire.map((h) => html`<li class="frise-item"><p class="frise-quand">${h.quand}</p><h3>${h.titre}</h3><p>${h.texte}</p></li>`)}</ol>
    </div>
  </div>
</section>

<section class="section cadre" id="cadre">
  <div class="conteneur cadre-grille">
    <div>
      <p class="sur">${c.t('reflexo.cadre.sur')}</p>
      <h2 data-anime="lignes">${c.t('reflexo.cadre.titre')}</h2>
      <p class="cadre-ffr" data-anime>${c.t('reflexo.cadre.ffr')}</p>
    </div>
    <ul class="cadre-liste" data-anime="cascade">
      <li class="cadre-oui">${c.t('reflexo.cadre.oui1')}</li>
      <li class="cadre-oui">${c.t('reflexo.cadre.oui2')}</li>
      <li class="cadre-non">${c.t('reflexo.cadre.non1')}</li>
      <li class="cadre-non">${c.t('reflexo.cadre.non2')}</li>
    </ul>
  </div>
</section>

${appel(c)}
`;
