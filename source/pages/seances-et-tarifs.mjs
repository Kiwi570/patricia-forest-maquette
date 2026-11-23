/* Séances et tarifs : le prix en très grand, la première séance, la grille, le bon cadeau à composer, les groupes, les questions. */
import { html } from '../../outils/gabarit.mjs';
import { medaillon, symboles } from '../gabarits/pied.mjs';
import { tarifs, appel, faq } from '../gabarits/sections.mjs';

export const page = { cle: 'seances-et-tarifs', fichier: 'seances-et-tarifs', imagePartage: 'grok/tarifs-serviettes-960.webp' };

export default (c) => {
  const t = c.donnees.tarifs;
  const options = t.domicile.map((x) => html`<option value="${x.cle}"${x.cle === 's60' ? html` selected` : ''}>${c.t('tarifs.' + x.cle)}</option>`);
  return html`
${symboles()}
<section class="ouv-prix" id="debut">
  <div class="ouv-prix-texte">
    <p class="sur" data-anime="gsap">${c.t('seances.tete.sur')}</p>
    <h1 class="ouv-prix-titre" data-anime="gsap"><span class="hl"><span class="hl-in prix-geant">${c.t('seances.tete.prix')}</span></span> <span class="hl"><span class="hl-in">${c.t('seances.tete.titre')}</span></span></h1>
    <div data-anime="gsap">
      <p class="masque-ecran-tres-bas">${c.t('seances.tete.texte')}</p>
      <p class="actions">${c.lien('rendez-vous', { ancre: 'demande', classe: 'bouton', texte: c.t('seances.tete.action'), attrs: 'data-action-principale' })} <a class="bouton bouton--contour masque-ecran-tres-bas" href="#bon-cadeau" data-sans-transition>${c.t('bon.action')}</a></p>
      <p class="info-cle" data-info-cle>${c.t('seances.tete.info')}</p>
    </div>
  </div>
  ${c.media({ nom: 'grok/tarifs-serviettes', alt: c.donnees.images['grok/tarifs-serviettes'].alt, priorite: true, classe: 'ouv-prix-photo', cadrage: '45% 60%', sizes: '(max-width: 760px) 92vw, 40vw', attrs: 'data-iris-centre data-anime="gsap" data-fx="parallaxe" data-fx-force="6"' })}
</section>

<section class="section premiere theme-argile" id="premiere">
  <div class="conteneur premiere-grille">
    <div>
      <p class="sur">${c.t('seances.premiere.sur')}</p>
      <h2 data-anime="lignes">${c.t('seances.premiere.titre')}</h2>
      <p data-anime>${c.t('seances.premiere.texte')}</p>
    </div>
    <ol class="premiere-etapes" data-anime="cascade">
      <li><span class="premiere-num">1</span>${c.t('seances.premiere.d1')}</li>
      <li><span class="premiere-num">2</span>${c.t('seances.premiere.d2')}</li>
      <li class="premiere-total"><span class="premiere-num">≈</span>${c.t('seances.premiere.d3')}</li>
    </ol>
  </div>
</section>

${tarifs(c, { id: 'tarifs', sur: c.t('seances.grille.sur'), titre: c.t('seances.grille.titre'), lien: false, bon: false })}

<section class="section bon-cadeau" id="bon-cadeau">
  <div class="conteneur bon-grille" data-bon>
    <div class="bon-formulaire">
      <p class="sur">${c.t('bon.sur')}</p>
      <h2 data-anime="lignes">${c.t('seances.bon.titre')}</h2>
      <p data-anime>${c.t('seances.bon.texte')}</p>
      <div class="bon-champs" data-anime>
        <div class="champ"><label for="bon-seance">${c.t('bon.seance')}</label><select id="bon-seance" data-bon-seance>${options}</select></div>
        <div class="champ"><label for="bon-lieu">${c.t('bon.lieu')}</label><select id="bon-lieu" data-bon-lieu><option value="domicile">${c.t('tarifs.domicile')}</option><option value="crau">${c.t('tarifs.crau')}</option></select></div>
        <div class="champ"><label for="bon-pour">${c.t('bon.pour')}</label><input id="bon-pour" maxlength="24" placeholder="${c.s('bon.pourDefaut')}" data-bon-pour></div>
        <div class="champ"><label for="bon-de">${c.t('bon.de')}</label><input id="bon-de" maxlength="24" placeholder="${c.s('bon.deDefaut')}" data-bon-de></div>
      </div>
      <p class="actions" data-anime><a class="bouton" href="${c.url('rendez-vous', 'demande', 'lieu=bon&seance=s60')}" data-bon-lien data-libelle="${c.libelle('rendez-vous')}">${c.t('seances.bon.action')}</a></p>
      <p class="mention-donnees">${c.t('seances.bon.note')}</p>
    </div>
    <div class="bon-scene">
      <div class="bon-carte" data-fx="vitesse" data-fx-force="4" aria-live="polite">
        <div class="bon-carte-haut">
          ${medaillon({ classe: 'medaillon medaillon--bon', points: true })}
          <div><p class="bon-carte-titre">${c.t('bon.carteTitre')}</p><p class="bon-carte-nom">${c.site.nom} · ${c.t('commun.signature')}</p></div>
        </div>
        <p class="bon-carte-pour"><span>${c.t('bon.pour')}</span> <strong data-bon-affiche-pour>${c.t('bon.pourDefaut')}</strong></p>
        <p class="bon-carte-seance"><span data-bon-affiche-seance>${c.t('tarifs.s60')}</span> · <span data-bon-affiche-lieu>${c.t('tarifs.domicile')}</span></p>
        <p class="bon-carte-prix" data-bon-affiche-prix>60 €</p>
        <p class="bon-carte-bas"><span>${c.t('bon.de')} <strong data-bon-affiche-de>${c.t('bon.deDefaut')}</strong></span><span>${c.t('bon.carteValidite')}</span></p>
      </div>
      <p class="bon-exemple">${c.t('bon.exemple')}</p>
    </div>
  </div>
</section>

<section class="section groupes theme-argile" id="groupes">
  <div class="conteneur groupes-grille">
    <div>
      <p class="sur">${c.t('seances.groupes.sur')}</p>
      <h2 data-anime="lignes">${c.t('seances.groupes.titre')}</h2>
    </div>
    <div class="groupes-carte">
      <ul class="groupes-lieux" data-anime="cascade">
        <li>${c.t('seances.groupes.l1')}</li>
        <li>${c.t('seances.groupes.l2')}</li>
        <li>${c.t('seances.groupes.l3')}</li>
      </ul>
      <p data-anime>${c.t('seances.groupes.texte')}</p>
      <p data-anime>${c.lien('rendez-vous', { ancre: 'demande', params: 'lieu=groupe', classe: 'bouton', texte: c.t('seances.groupes.action') })}</p>
    </div>
  </div>
</section>

${faq(c, { sur: c.t('seances.faq.sur'), titre: c.t('seances.faq.titre') })}

${appel(c)}
`;
};
