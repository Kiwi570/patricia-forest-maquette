/* Rendez-vous : ouverture (titre, téléphone, porte entrouverte), demande en quatre étapes avec récapitulatif,
   la zone et le cabinet, le contact direct. Tout est simulé : rien n'est envoyé. */
import { html } from '../../outils/gabarit.mjs';
import { littoral, symboles } from '../gabarits/pied.mjs';

export const page = { cle: 'rendez-vous', fichier: 'rendez-vous', imagePartage: 'grok/rdv-porte-960.webp' };

const choix = (c, nom, valeur, titre, detail, coche = false) => html`<label class="choix">
  <input type="radio" name="${nom}" value="${valeur}"${coche ? html` checked` : ''} required>
  <span class="choix-carte"><span class="choix-titre">${titre}</span>${detail ? html`<span class="choix-detail">${detail}</span>` : ''}</span>
</label>`;

export default (c) => {
  const f = (k) => c.t(`rdv.form.${k}`);
  const jours = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  const t = c.donnees.tarifs;
  const carteTarifs = JSON.stringify(Object.fromEntries(['domicile', 'crau'].map((l) => [l, Object.fromEntries(t[l].map((x) => [x.cle, x.prix]))])));
  return html`
${symboles()}
<section class="ouv-rdv" id="debut">
  <div class="ouv-rdv-texte">
    <p class="sur" data-anime="gsap">${c.t('rdv.tete.sur')}</p>
    <h1 class="ouv-titre" data-anime="gsap"><span class="hl"><span class="hl-in">${c.t('rdv.tete.titre1')}</span></span> <span class="hl"><em class="hl-in">${c.t('rdv.tete.titre2')}</em></span></h1>
    <div data-anime="gsap">
      <p class="masque-ecran-bas">${c.t('rdv.tete.texte')}</p>
      <p class="rdv-tel"><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
      <p class="actions"><a class="bouton" href="#demande" data-action-principale data-sans-transition>${c.t('rdv.tete.action')}</a></p>
      <p class="info-cle" data-info-cle>${c.t('rdv.tete.info')}</p>
    </div>
  </div>
  ${c.media({ nom: 'grok/rdv-porte', alt: c.donnees.images['grok/rdv-porte'].alt, priorite: true, classe: 'ouv-rdv-photo', cadrage: '55% 55%', sizes: '(max-width: 760px) 92vw, 38vw', attrs: 'data-iris-centre data-anime="gsap" data-fx="parallaxe" data-fx-force="6"' })}
</section>

<section class="section demande theme-argile" id="demande">
  <div class="conteneur demande-grille">
    <form class="demande-form" data-formulaire data-etapes data-tarifs="${carteTarifs}">
      <p class="sur">${f('sur')}</p>
      <h2 data-anime="lignes">${f('titre')}</h2>
      <p class="demande-annonce" data-anime>${f('etapes')}</p>
      <ol class="etapes-progression" aria-hidden="true" data-anime="cascade"><li class="actif"><span>1</span></li><li><span>2</span></li><li><span>3</span></li><li><span>4</span></li></ol>
      <div class="etapes-cadre" data-etapes-cadre>
        <fieldset class="etape-form" data-etape="1">
          <legend><span class="etape-compte">${c.t('rdv.form.etape', { n: '1' })}</span> ${f('q1')}</legend>
          <div class="choix-grille">
            ${choix(c, 'lieu', 'domicile', f('lieuDomicile'), f('lieuDomicileD'), true)}
            ${choix(c, 'lieu', 'crau', f('lieuCrau'), f('lieuCrauD'))}
            ${choix(c, 'lieu', 'bon', f('lieuBon'), f('lieuBonD'))}
            ${choix(c, 'lieu', 'groupe', f('lieuGroupe'), f('lieuGroupeD'))}
          </div>
          <div class="champ" data-si-lieu="domicile"><label for="rdv-commune">${f('commune')}</label><input id="rdv-commune" name="commune" autocomplete="address-level2"></div>
        </fieldset>
        <fieldset class="etape-form" data-etape="2" hidden>
          <legend><span class="etape-compte">${c.t('rdv.form.etape', { n: '2' })}</span> ${f('q2')}</legend>
          <div class="choix-grille">
            ${choix(c, 'seance', 's30', f('s30'), '', false)}
            ${choix(c, 'seance', 's60', f('s60'), '', true)}
            ${choix(c, 'seance', 'forfait', f('sForfait'), '', false)}
          </div>
          <label class="case"><input type="checkbox" name="premiere" value="oui"> <span>${f('sPremiere')}</span></label>
        </fieldset>
        <fieldset class="etape-form" data-etape="3" hidden>
          <legend><span class="etape-compte">${c.t('rdv.form.etape', { n: '3' })}</span> ${f('q3')}</legend>
          <p class="sous-legende" id="jours-titre">${f('jours')}</p>
          <div class="jetons" role="group" aria-labelledby="jours-titre">${jours.map((j) => html`<label class="jeton"><input type="checkbox" name="jours" value="${j}"><span>${f(j)}</span></label>`)}</div>
          <p class="sous-legende" id="moment-titre">${f('moment')}</p>
          <div class="jetons" role="group" aria-labelledby="moment-titre">${['matin', 'apresMidi', 'soir'].map((m) => html`<label class="jeton"><input type="checkbox" name="moment" value="${m}"><span>${f(m)}</span></label>`)}</div>
        </fieldset>
        <fieldset class="etape-form" data-etape="4" hidden>
          <legend><span class="etape-compte">${c.t('rdv.form.etape', { n: '4' })}</span> ${f('q4')}</legend>
          <div class="champ"><label for="rdv-nom">${f('nom')}</label><input id="rdv-nom" name="nom" autocomplete="name" required></div>
          <div class="champ"><label for="rdv-tel">${f('tel')}</label><input id="rdv-tel" name="tel" type="tel" autocomplete="tel" required></div>
          <div class="champ"><label for="rdv-email">${f('email')}</label><input id="rdv-email" name="email" type="email" autocomplete="email"></div>
          <div class="champ"><label for="rdv-message">${f('message')}</label><textarea id="rdv-message" name="message" rows="3"></textarea></div>
          <p class="mention-donnees">${f('donnees')}</p>
        </fieldset>
      </div>
      <div class="etapes-boutons">
        <button type="button" class="bouton bouton--contour" data-etape-precedent hidden>${f('precedent')}</button>
        <button type="button" class="bouton" data-etape-suivant>${f('suivant')}</button>
        <button type="submit" class="bouton" data-etape-envoyer hidden>${f('envoyer')}</button>
      </div>
      <p data-message-envoi data-texte="${c.s('rdv.form.merci')}" hidden tabindex="-1"></p>
    </form>
    <aside class="recap" aria-label="${c.s('rdv.form.recap')}" data-anime>
      <p class="recap-titre">${f('recap')}</p>
      <dl class="recap-liste" data-recap>
        <div><dt>${f('recapLieu')}</dt><dd data-recap-lieu>${f('lieuDomicile')}</dd></div>
        <div><dt>${f('recapSeance')}</dt><dd data-recap-seance>${f('s60')}</dd></div>
        <div><dt>${f('recapQuand')}</dt><dd data-recap-quand>—</dd></div>
        <div><dt>${f('recapPrix')}</dt><dd data-recap-prix>60 €</dd></div>
      </dl>
      <p class="recap-tel">${c.t('commun.appeler')}&nbsp;: <a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
    </aside>
  </div>
</section>

<section class="section zone" id="zone">
  <div class="conteneur zone-grille">
    <div class="zone-texte">
      <p class="sur">${c.t('rdv.zone.sur')}</p>
      <h2 data-anime="lignes">${c.t('rdv.zone.titre')}</h2>
      <p data-anime>${c.t('accueil.zone.texte')}</p>
      <ul class="zone-legende" data-anime="cascade">
        <li><span class="pastille pastille--zone" aria-hidden="true"></span><span><strong>${c.t('commun.domicile')}</strong> · ${c.t('commun.surRdv')}</span></li>
        <li><span class="pastille pastille--crau" aria-hidden="true"></span><span><strong>${c.t('commun.ouLaCrau')}</strong> · ${c.site.contact.adresse}</span></li>
      </ul>
    </div>
    <figure class="zone-carte" data-visuel>
      ${littoral(c)}
      <figcaption>${c.t('commun.planSimplifie')}</figcaption>
    </figure>
  </div>
</section>

<section class="section direct theme-pin" id="contact">
  <div class="conteneur">
    <p class="sur">${c.t('rdv.direct.sur')}</p>
    <h2 data-anime="lignes">${c.t('rdv.direct.titre')}</h2>
    <ul class="direct-grille" data-anime="cascade">
      <li class="direct-carte"><p class="direct-etiquette">${c.t('rdv.direct.tel')}</p><a class="direct-valeur" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></li>
      <li class="direct-carte"><p class="direct-etiquette">${c.t('rdv.direct.email')}</p><a class="direct-valeur direct-email" href="mailto:${c.site.contact.email}?subject=Je%20souhaite%20prendre%20rendez-vous">${c.site.contact.email}</a></li>
      <li class="direct-carte"><p class="direct-etiquette">${c.t('rdv.direct.facebook')}</p><a class="direct-valeur" href="${c.site.contact.facebook}" target="_blank" rel="noopener">ReflexologiePlantaireVar</a></li>
    </ul>
    <p class="faq-medical">${c.t('commun.medical')}</p>
  </div>
</section>
`;
};
