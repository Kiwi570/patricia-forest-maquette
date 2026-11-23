/* Accueil · direction « Reprendre pied ». */
import { html, brut } from '../../outils/gabarit.mjs';
import { medaillon, pieds, legendeZones, littoral, symboles } from '../gabarits/pied.mjs';
import { tarifs } from '../gabarits/sections.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'patricia-ouverture-1300.webp' };

/* Mots du manifeste en spans écrits dans la page (pas de découpe au chargement) : ils s'allument au défilement. */
const motsManifeste = (texte) => brut(texte.split(' ').map((m) => `<span class="mm">${m}</span>`).join(' '));

export default (c) => html`
${symboles()}
<section class="hero-accueil ecran" id="debut">
  <div class="hero-texte">
    <p class="sur hero-sur" data-anime="gsap">${c.t('accueil.hero.sur')}</p>
    <h1 class="hero-titre" data-anime="gsap"><span class="hl"><span class="hl-in">${c.t('accueil.hero.titre1')}</span></span> <span class="hl"><em class="hl-in">${c.t('accueil.hero.titre2')}</em></span></h1>
    <p class="hero-intro masque-ecran-tres-bas" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
    <div class="hero-bas" data-anime="gsap">
      <p class="actions">
        ${c.lien('rendez-vous', { ancre: 'demande', classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
        <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
      </p>
      <p class="info-cle" data-info-cle><span>${c.t('accueil.hero.info')}</span> <strong>${c.t('accueil.hero.infoPrix')}</strong></p>
    </div>
  </div>
  <div class="hero-visuel">
    ${c.media({ nom: 'patricia-ouverture', alt: c.donnees.images['patricia-ouverture'].alt, cadrage: '50% 30%', priorite: true, classe: 'hero-photo', sizes: '(max-width: 760px) 92vw, 44vw', attrs: 'data-anime="gsap" data-boucle-css' })}
    <div class="hero-medaillon" data-iris-centre="disque" data-superpose data-effet="trace-pied">
      ${medaillon({ classe: 'medaillon medaillon--hero' })}
      <svg class="medaillon-texte" viewBox="0 0 200 200" aria-hidden="true" data-audit-ignorer><defs><path id="cercle-texte" d="M100 100m-84 0a84 84 0 1 1 168 0a84 84 0 1 1 -168 0"/></defs><text><textPath href="#cercle-texte" textLength="524" lengthAdjust="spacing">Réflexologie plantaire · Var · Réflexologie plantaire · Var · </textPath></text></svg>
    </div>
  </div>
</section>

<section class="section carte-corps theme-argile" id="principe">
  <div class="conteneur carte-corps-grille">
    <div class="carte-corps-texte">
      <p class="sur">${c.t('accueil.carte.sur')}</p>
      <h2 data-anime="lignes">${c.t('accueil.carte.titre')}</h2>
      <p class="manifeste" data-manifeste data-effet="manifeste">${motsManifeste(c.s('accueil.carte.manifeste'))}</p>
      <p class="petit-medical" data-anime>${c.t('commun.medical')}</p>
      <p data-anime>${c.lien('la-reflexologie', { ancre: 'carte', classe: 'lien-fleche', texte: html`${c.t('accueil.carte.lien')} →` })}</p>
    </div>
    <div class="carte-corps-visuel" data-zones-defile>
      ${pieds(c, { attrs: 'data-effet="zones"' })}
      ${legendeZones(c, { interactive: false })}
      <p class="zones-note">${c.t('pied.legende')}</p>
    </div>
  </div>
</section>

<section class="section seance" id="seance">
  <div class="conteneur">
    <div class="seance-tete">
      <p class="sur">${c.t('accueil.seance.sur')}</p>
      <h2 data-anime="lignes">${c.t('accueil.seance.titre')}</h2>
    </div>
    <ol class="seance-etapes">
      ${[['seance-connaissance', 'e1'], ['accueil-salon', 'e2'], ['seance-pieds', 'e3']].map(([img, e], i) => html`<li class="etape" style="--i:${String(i)}">
        ${c.media({ nom: `grok/${img}`, alt: c.donnees.images[`grok/${img}`].alt, classe: 'etape-photo', sizes: '(max-width: 760px) 92vw, 40vw', attrs: 'data-anime="rideau"' })}
        <div class="etape-texte">
          <p class="etape-num" aria-hidden="true">0${String(i + 1)}</p>
          <h3 data-anime="lignes">${c.t(`accueil.seance.${e}t`)}</h3>
          <p data-anime>${c.t(`accueil.seance.${e}`)}</p>
        </div>
      </li>`)}
    </ol>
    <p class="seance-lien" data-anime>${c.lien('seances-et-tarifs', { classe: 'lien-fleche', texte: html`${c.t('accueil.seance.lien')} →` })}</p>
  </div>
</section>

<section class="section zone theme-argile" id="zone">
  <div class="conteneur zone-grille">
    <div class="zone-texte">
      <p class="sur">${c.t('accueil.zone.sur')}</p>
      <h2 data-anime="lignes">${c.t('accueil.zone.titre')}</h2>
      <p data-anime>${c.t('accueil.zone.texte')}</p>
      <ul class="zone-legende" data-anime="cascade">
        <li><span class="pastille pastille--zone" aria-hidden="true"></span><span><strong>${c.t('commun.domicile')}</strong> · ${c.t('commun.surRdv')}</span></li>
        <li><span class="pastille pastille--crau" aria-hidden="true"></span><span><strong>${c.t('commun.ouLaCrau')}</strong> · ${c.site.contact.adresse}</span></li>
      </ul>
      <p data-anime>${c.lien('rendez-vous', { ancre: 'demande', params: 'lieu=domicile', classe: 'bouton', texte: c.t('accueil.zone.action') })}</p>
    </div>
    <figure class="zone-carte" data-visuel>
      ${littoral(c)}
      <figcaption>${c.t('commun.planSimplifie')}</figcaption>
    </figure>
  </div>
</section>

${tarifs(c)}

<section class="section praticienne-accueil" id="praticienne">
  <div class="conteneur praticienne-grille">
    ${c.media({ nom: 'grok/praticienne-racines', alt: c.donnees.images['grok/praticienne-racines'].alt, classe: 'praticienne-image', sizes: '(max-width: 760px) 92vw, 46vw', attrs: 'data-fx="parallaxe"' })}
    <div>
      <p class="sur">${c.t('accueil.praticienne.sur')}</p>
      <h2 data-anime="lignes">${c.t('accueil.praticienne.titre')}</h2>
      <p data-anime>${c.t('accueil.praticienne.texte')}</p>
      <ul class="reperes" data-anime="cascade">
        <li><strong class="repere-chiffre"><span data-compteur="500">500</span> h</strong><span>${c.t('accueil.praticienne.c1')}</span></li>
        <li><strong class="repere-chiffre">1986</strong><span>${c.t('accueil.praticienne.c2')}</span></li>
        <li><strong class="repere-chiffre">FFR</strong><span>${c.t('accueil.praticienne.c3')}</span></li>
      </ul>
      <p data-anime>${c.lien('la-praticienne', { classe: 'lien-fleche', texte: html`${c.t('accueil.praticienne.lien')} →` })}</p>
    </div>
  </div>
</section>

<section class="section avis theme-argile" id="avis">
  <div class="conteneur avis-contenu">
    <p class="sur">${c.t('accueil.avis.sur')}</p>
    <blockquote class="avis-citation">
      <p data-anime="mots">${c.t('accueil.avis.citation')}</p>
      <footer data-anime>${c.t('accueil.avis.auteur')}</footer>
    </blockquote>
  </div>
</section>

<section class="appel-photo" id="appel">
  ${c.media({ nom: 'grok/accueil-pins', alt: c.donnees.images['grok/accueil-pins'].alt, classe: 'appel-photo-image', sizes: '100vw', attrs: 'data-fx="zoom"' })}
  <div class="conteneur appel-photo-grille">
    <div class="appel-photo-texte">
      <p class="sur">${c.t('commun.appel.sur')}</p>
      <h2 data-anime="lignes">${c.t('commun.appel.titre')}</h2>
      <p data-anime>${c.t('commun.appel.texte')}</p>
      <p class="actions" data-anime>
        ${c.lien('rendez-vous', { ancre: 'demande', classe: 'bouton bouton--clair', texte: c.t('commun.appel.action'), attrs: 'data-survol="magnetique"' })}
        <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
      </p>
    </div>
    <form class="guide" data-formulaire data-anime>
      <p class="guide-titre">${c.t('accueil.guide.titre')}</p>
      <p class="guide-texte">${c.t('accueil.guide.texte')}</p>
      <div class="champ guide-champ">
        <label for="guide-email">${c.t('accueil.guide.email')}</label>
        <div class="guide-ligne"><input id="guide-email" name="email" type="email" autocomplete="email" required><button class="bouton" type="submit">${c.t('accueil.guide.action')}</button></div>
      </div>
      <p class="mention-donnees">${c.t('accueil.guide.donnees')}</p>
      <p data-message-envoi data-texte="${c.s('accueil.guide.merci')}" hidden tabindex="-1"></p>
    </form>
  </div>
</section>
`;
