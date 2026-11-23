/* Blocs qui reviennent d'une page à l'autre : même style, même code. */
import { html, brut } from '../../outils/gabarit.mjs';
import { medaillon } from './pied.mjs';

const euros = (n) => String(n);

/* Prix à rouleaux : un rouleau par chiffre, qui tourne quand le lieu change (effet « rouleaux »). */
function rouleaux(prix) {
  if (prix == null) return '';
  return html`<span class="prix-rouleaux" data-rouleaux="${euros(prix)}" aria-hidden="true" data-audit-ignorer>${[...euros(prix).padStart(3, ' ')].map((ch) => html`<span class="rouleau"${brut(ch === ' ' ? ' data-vide' : '')}><span class="rouleau-piste">${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => html`<span>${String(n)}</span>`)}</span></span>`)}<span class="prix-euro">€</span></span>`;
}

/* Grille des tarifs avec bascule domicile / La Crau. */
export function tarifs(c, { id = 'tarifs', titre, sur, lien = true, bon = true } = {}) {
  const t = c.donnees.tarifs;
  const carte = (x, i) => {
    const crau = t.crau[i];
    return html`<li class="tarif" data-tarif="${x.cle}">
    <p class="tarif-duree">${x.duree}</p>
    <h3 class="tarif-nom">${c.t('tarifs.' + x.cle)}</h3>
    <p class="tarif-prix" data-prix data-domicile="${euros(x.prix)}" data-crau="${crau.prix == null ? '' : euros(crau.prix)}">
      <span class="prix-texte" data-prix-texte>${euros(x.prix)} €</span>${rouleaux(x.prix)}
      <span class="prix-absent" data-prix-absent hidden>${c.t('tarifs.forfaitCrau')}</span>
    </p>
    ${x.cle === 'forfait' ? html`<p class="tarif-note" data-note-forfait>${c.t('tarifs.forfaitNote')}</p>` : ''}
  </li>`;
  };
  return html`<section class="section tarifs-section theme-pin" id="${id}" data-tarifs>
  <div class="conteneur">
    <div class="tarifs-tete">
      <div>
        <p class="sur">${sur || c.t('accueil.tarifs.sur')}</p>
        <h2 data-anime="lignes">${titre || c.t('accueil.tarifs.titre')}</h2>
      </div>
      <div class="bascule" role="group" aria-label="${c.s('tarifs.bascule')}">
        <button type="button" class="bascule-choix" data-lieu="domicile" aria-pressed="true">${c.t('tarifs.domicile')}</button>
        <button type="button" class="bascule-choix" data-lieu="crau" aria-pressed="false">${c.t('tarifs.crau')}</button>
        <span class="bascule-pastille" aria-hidden="true"></span>
      </div>
    </div>
    <p class="tarifs-lieu" aria-live="polite"><span data-note-lieu="domicile">${c.t('tarifs.noteDomicile')}</span><span data-note-lieu="crau" hidden>${c.t('tarifs.noteCrau')}</span></p>
    <ul class="tarifs-grille" data-anime="cascade" data-effet="rouleaux">${t.domicile.map(carte)}</ul>
    <p class="tarifs-premiere">${c.t('tarifs.premiere')}</p>
    ${bon ? html`<div class="tarifs-bas">
      <a class="carte-bon" href="${c.url('seances-et-tarifs', 'bon-cadeau')}" data-libelle="${c.libelle('seances-et-tarifs')}">
        <span class="carte-bon-sur">${c.t('bon.sur')}</span>
        <span class="carte-bon-titre">${c.t('bon.titre')}</span>
        <span class="carte-bon-texte">${c.t('bon.texte')}</span>
        <span class="carte-bon-action">${c.t('bon.action')} →</span>
      </a>
      ${lien ? c.lien('seances-et-tarifs', { classe: 'lien-fleche', texte: html`${c.t('accueil.tarifs.lien')} →` }) : ''}
    </div>` : ''}
  </div>
</section>`;
}

/* Appel final des pages intérieures : vert pin, pied qui se trace, deux actions. */
export function appel(c, { id = 'appel' } = {}) {
  return html`<section class="section appel theme-pin" id="${id}">
  <div class="conteneur appel-grille">
    <div>
      <p class="sur">${c.t('commun.appel.sur')}</p>
      <h2 data-anime="lignes">${c.t('commun.appel.titre')}</h2>
      <p class="appel-texte" data-anime>${c.t('commun.appel.texte')}</p>
      <p class="actions" data-anime>
        ${c.lien('rendez-vous', { ancre: 'demande', classe: 'bouton bouton--clair', texte: c.t('commun.appel.action'), attrs: 'data-survol="magnetique"' })}
        <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
      </p>
    </div>
    <div class="appel-dessin" data-fx="trace" data-visuel>${medaillon({ classe: 'medaillon medaillon--appel' })}</div>
  </div>
</section>`;
}

/* Questions pratiques (même liste sur la page des séances). */
export function faq(c, { id = 'questions', sur, titre } = {}) {
  return html`<section class="section faq-section" id="${id}">
  <div class="conteneur faq-grille">
    <div class="faq-tete">
      <p class="sur">${sur}</p>
      <h2 data-anime="lignes">${titre}</h2>
      <p class="faq-medical">${c.t('commun.medical')}</p>
    </div>
    <div class="faq-liste" data-anime="cascade">${c.donnees.faq.map((f) => html`<details class="faq-item"><summary><span>${f.q}</span><span class="faq-plus" aria-hidden="true"></span></summary><div class="faq-reponse"><p>${f.r}</p></div></details>`)}</div>
  </div>
</section>`;
}
