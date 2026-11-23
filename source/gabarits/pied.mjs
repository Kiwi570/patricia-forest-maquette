/* Dessins du projet : le pied (contour d'un trait, points réflexes), la paire de pieds à zones, le médaillon,
   le littoral varois. Tout est en SVG, sans image : net à toutes les tailles, léger, animable. */
import { html, brut } from '../../outils/gabarit.mjs';

/* Pied droit vu par en dessous (gros orteil à droite), repère 0 0 200 470. */
export const SEMELLE = 'M100 452C72 452 54 430 54 398C54 362 60 332 58 298C56 264 46 238 44 206C42 178 46 152 62 140C86 124 126 110 152 114C172 118 178 144 174 170C168 206 150 238 144 272C138 306 146 340 150 374C154 422 132 452 100 452Z';
export const ORTEILS = [
  { cx: 150, cy: 74, rx: 23, ry: 32, r: 8 },
  { cx: 113, cy: 86, rx: 12.5, ry: 19, r: -4 },
  { cx: 88, cy: 97, rx: 11.5, ry: 17, r: -10 },
  { cx: 67, cy: 111, rx: 10.5, ry: 15, r: -18 },
  { cx: 51, cy: 128, rx: 9, ry: 12, r: -26 },
];
/* Cinq points réflexes de l'intro : tête, poitrine, plexus, voûte, talon. */
export const POINTS = [[150, 70], [116, 158], [112, 204], [106, 276], [100, 404]];

const orteils = (attrs = '') => ORTEILS.map((o) => `<ellipse cx="${o.cx}" cy="${o.cy}" rx="${o.rx}" ry="${o.ry}" transform="rotate(${o.r} ${o.cx} ${o.cy})"${attrs}/>`).join('');

/* Symboles réutilisés dans la page (une seule définition, en tête de body). */
export function symboles() {
  return brut(`<svg class="symboles" width="0" height="0" aria-hidden="true" focusable="false"><defs>
<symbol id="pied-trait" viewBox="20 30 170 432"><path d="${SEMELLE}" pathLength="1"/>${orteils(' pathLength="1"')}</symbol>
</defs></svg>`);
}

/* Médaillon : disque, pied tracé, cinq points. Sert d'objet d'ouverture (intro, en-tête, voile, premier écran). */
export function medaillon({ classe = 'medaillon', attrs = '', points = true } = {}) {
  return brut(`<svg class="${classe}" viewBox="0 0 200 200" aria-hidden="true" focusable="false"${attrs ? ' ' + attrs : ''}>
<circle class="medaillon-disque" cx="100" cy="100" r="98" pathLength="1"/>
<g class="medaillon-pied" transform="translate(66 22) scale(.36)">
<path class="trait-pied" d="${SEMELLE}" pathLength="1"/>${orteils(' class="trait-pied" pathLength="1"')}
${points ? POINTS.map(([x, y], i) => `<circle class="point-pied" style="--i:${i}" cx="${x}" cy="${y}" r="9"/>`).join('') : ''}
</g></svg>`);
}

/* Paire de pieds vus par en dessous, avec leurs zones réflexes (données : donnees/zones.json). */
const ZONES = {
  tete: () => orteils(),
  cou: () => '<path d="M124 118C132 112 160 110 172 118C172 128 160 134 146 134C134 134 124 128 124 118Z"/>',
  poitrine: () => '<path d="M30 122H200V182C168 198 124 203 84 198C60 195 42 190 30 184Z"/>',
  plexus: () => '<circle cx="112" cy="210" r="12"/>',
  digestion: () => '<path d="M30 192C46 200 70 206 100 207C140 208 172 202 200 190V340C170 350 132 354 100 353C70 352 48 348 30 342Z"/>',
  reins: () => '<path d="M98 252C106 244 122 246 124 260C126 276 118 290 108 290C98 290 92 278 94 266C95 260 96 255 98 252Z"/><ellipse cx="142" cy="330" rx="11" ry="13"/>',
  colonne: () => '<path d="M171 128C171 172 152 236 146 272C140 306 148 340 152 384" fill="none" stroke-width="11" stroke-linecap="round"/>',
  bassin: () => '<path d="M30 352C50 359 72 362 100 362C132 362 170 357 200 349V470H30Z"/>',
};
function unPied(zones, id, miroir) {
  const t = miroir ? ' transform="translate(420 0) scale(-1 1)"' : '';
  return `<g${t}>
<g clip-path="url(#${id})">${zones.map((z) => `<g class="zone" data-zone="${z.id}">${ZONES[z.id] ? ZONES[z.id]() : ''}</g>`).join('')}</g>
<path class="pied-contour" d="${SEMELLE}" pathLength="1"/>${orteils(' class="pied-contour" pathLength="1"')}
</g>`;
}
/* Repères numérotés des zones, sur le pied de gauche (carte à toucher). */
const REPERES = { tete: [150, 66], cou: [140, 124], poitrine: [84, 160], plexus: [112, 204], digestion: [76, 304], reins: [112, 268], colonne: [168, 172], bassin: [100, 412] };
export function pieds(c, { classe = '', attrs = '', numeros = false } = {}) {
  const zones = c.donnees.zones;
  const id = `semelle-${c.page.cle}`;
  const nums = numeros ? `<g class="pieds-numeros" aria-hidden="true">${zones.map((z, i) => { const [x, y] = REPERES[z.id] || [0, 0]; return `<g class="pieds-numero" data-zone-numero="${z.id}"><circle cx="${x}" cy="${y}" r="13"/><text x="${x}" y="${y + 5.5}" text-anchor="middle">${i + 1}</text></g>`; }).join('')}</g>` : '';
  return brut(`<svg class="pieds ${classe}" viewBox="20 30 380 432" role="img" aria-label="${c.s('pied.pieds')}"${attrs ? ' ' + attrs : ''}>
<defs><clipPath id="${id}"><path d="${SEMELLE}"/>${orteils()}</clipPath></defs>
${unPied(zones, id, false)}
${unPied(zones, id, true)}
${nums}
</svg>`);
}

/* Liste des zones, en boutons (clavier et toucher) : l'information reste visible sans interaction. */
export function legendeZones(c, { interactive = true } = {}) {
  return html`<ol class="zones-liste"${brut(interactive ? ' data-zones-liste' : '')}>${c.donnees.zones.map((z, i) => interactive
    ? html`<li><button type="button" class="zone-bouton" data-zone-bouton="${z.id}" aria-pressed="false"><span class="zone-num">${String(i + 1)}</span><span class="zone-nom">${z.nom}</span></button></li>`
    : html`<li class="zone-item" data-zone-item="${z.id}"><span class="zone-num">${String(i + 1)}</span><span class="zone-nom">${z.nom}</span></li>`)}</ol>`;
}

/* Littoral varois simplifié, de Sanary aux salins d'Hyères (repère 800 × 420).
   Communes nommées : seulement celles du site actuel (Six-Fours, Toulon, Hyères, La Crau). */
const COTE = 'M-10 205C-4 206 16 202 24 214C32 226 29 262 40 277C51 292 73 299 90 306C107 313 128 322 143 321C158 320 168 308 178 300C188 292 198 280 200 270C202 260 188 251 192 242C196 233 210 220 222 214C234 208 251 204 263 205C275 206 283 216 294 222C305 228 318 238 331 243C344 248 358 250 372 252C386 254 402 254 417 256C432 258 446 262 460 262C474 262 489 259 503 258C517 257 534 257 545 256C556 255 563 248 568 254C573 260 575 279 576 290C577 301 575 312 572 320C569 328 557 335 560 340C563 345 579 350 590 352C601 354 613 355 625 354C637 353 652 349 660 346C668 343 674 339 672 336C670 333 654 332 648 328C642 324 637 318 634 312C631 306 630 297 628 290C626 283 619 275 624 268C629 261 646 253 660 248C674 243 692 239 709 236C726 233 743 230 760 228C777 226 802 225 810 224';
const TERRE = `${COTE}L810 0L-10 0Z`;
export function littoral(c, { classe = '' } = {}) {
  const id = `terre-${c.page.cle}`;
  return brut(`<svg class="littoral ${classe}" viewBox="20 86 720 292" role="img" aria-label="${c.s('accueil.zone.carte')}" data-effet="littoral">
<defs>
<clipPath id="${id}"><path d="${TERRE}"/></clipPath>
<pattern id="houle-${c.page.cle}" width="18" height="10" patternUnits="userSpaceOnUse"><path d="M0 6C4.5 2 9 2 13.5 6S18 8 18 6" fill="none" class="houle"/></pattern>
</defs>
<rect class="mer" x="0" y="100" width="800" height="300"/>
<rect x="0" y="100" width="800" height="300" fill="url(#houle-${c.page.cle})"/>
<path class="terre" d="${TERRE}"/>
<g clip-path="url(#${id})"><path class="zone-domicile" data-littoral-zone d="M58 290C40 250 52 214 92 202C140 190 170 196 200 176C240 150 300 144 360 162C420 180 470 136 520 132C580 128 640 140 676 168C700 190 704 230 690 268L690 400L58 400Z"/></g>
<path class="cote" d="${COTE}" pathLength="1" data-littoral-cote/>
<g class="trajets" aria-hidden="true">
<path id="trajet-ouest-${c.page.cle}" class="trajet" data-trajet d="M506 160C430 150 330 168 262 190C200 206 150 226 100 262"/>
<path id="trajet-est-${c.page.cle}" class="trajet" data-trajet d="M506 160C540 168 576 184 604 206"/>
<circle class="voiture" r="6" data-voiture><animateMotion dur="6s" repeatCount="indefinite" begin="indefinite" rotate="auto"><mpath href="#trajet-ouest-${c.page.cle}"/></animateMotion></circle>
<circle class="voiture" r="6" data-voiture><animateMotion dur="3.2s" repeatCount="indefinite" begin="indefinite" rotate="auto"><mpath href="#trajet-est-${c.page.cle}"/></animateMotion></circle>
</g>
<g class="communes" data-littoral-communes>
<g class="commune" style="--i:0"><circle cx="100" cy="262" r="5"/><text x="112" y="246">Six-Fours</text></g>
<g class="commune" style="--i:1"><circle cx="262" cy="190" r="5"/><text x="262" y="176" text-anchor="middle">Toulon</text></g>
<g class="commune" style="--i:2"><circle cx="604" cy="206" r="5"/><text x="616" y="210">Hyères</text></g>
</g>
<g class="epingle" data-littoral-epingle transform="translate(506 166)"><g class="epingle-corps"><path d="M0 0C-12 -16 -18 -26 -18 -36A18 18 0 1 1 18 -36C18 -26 12 -16 0 0Z"/><circle cx="0" cy="-36" r="6.5" class="epingle-trou"/></g><text x="24" y="-4">La Crau</text></g>
<text class="mer-nom" x="300" y="336">Mer Méditerranée</text>
</svg>`);
}
