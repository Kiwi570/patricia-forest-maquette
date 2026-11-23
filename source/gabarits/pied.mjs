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
<circle class="medaillon-disque" cx="100" cy="100" r="98"/>
<g class="medaillon-pied" transform="translate(66 22) scale(.36)">
<path class="trait-pied" d="${SEMELLE}" pathLength="1"/>${orteils(' class="trait-pied" pathLength="1"')}
${points ? POINTS.map(([x, y], i) => `<circle class="point-pied" style="--i:${i}" cx="${x}" cy="${y}" r="9"/>`).join('') : ''}
</g></svg>`);
}

/* Paire de pieds vus par en dessous, avec leurs zones réflexes (données : donnees/zones.json). */
const ZONES = {
  tete: () => orteils(),
  cou: () => '<ellipse cx="148" cy="124" rx="24" ry="11"/>',
  poitrine: () => '<path d="M30 128H200V190H30Z"/>',
  plexus: () => '<circle cx="112" cy="204" r="13"/>',
  digestion: () => '<path d="M30 218H200V340H30Z"/>',
  reins: () => '<ellipse cx="110" cy="270" rx="15" ry="20"/><ellipse cx="146" cy="334" rx="10" ry="12"/>',
  colonne: () => '<path d="M172 126C172 170 152 236 146 272C140 306 148 340 152 382" fill="none" stroke-width="12" stroke-linecap="round"/>',
  bassin: () => '<path d="M30 364H200V470H30Z"/>',
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
const COTE = 'M-10 205C-4 206 16 202 24 214C32 226 29 262 40 277C51 292 73 299 90 306C107 313 127 323 143 321C159 319 175 300 186 292C197 284 198 275 211 272C224 269 246 277 262 276C278 275 303 271 306 268C309 265 289 259 280 256C271 253 264 253 254 252C244 251 230 251 220 250C210 249 200 250 194 246C188 242 181 234 186 228C191 222 209 216 222 212C235 208 251 203 263 205C275 207 283 216 294 222C305 228 318 238 331 243C344 248 358 250 372 252C386 254 402 254 417 256C432 258 446 262 460 262C474 262 489 259 503 258C517 257 534 257 545 256C556 255 565 246 571 252C577 258 580 278 580 290C580 302 578 313 574 322C570 331 552 336 554 342C556 348 574 353 586 356C598 359 611 361 623 360C635 359 651 355 660 352C669 349 679 344 678 340C677 336 659 331 652 326C645 321 640 318 636 312C632 306 632 297 630 290C628 283 618 275 623 268C628 261 646 253 660 248C674 243 692 239 709 236C726 233 743 230 760 228C777 226 802 225 810 224';
const TERRE = `${COTE}L810 0L-10 0Z`;
export function littoral(c, { classe = '' } = {}) {
  const id = `terre-${c.page.cle}`;
  return brut(`<svg class="littoral ${classe}" viewBox="10 110 780 280" role="img" aria-label="${c.s('accueil.zone.carte')}" data-effet="littoral">
<defs>
<clipPath id="${id}"><path d="${TERRE}"/></clipPath>
<pattern id="houle-${c.page.cle}" width="18" height="10" patternUnits="userSpaceOnUse"><path d="M0 6C4.5 2 9 2 13.5 6S18 8 18 6" fill="none" class="houle"/></pattern>
</defs>
<rect class="mer" x="0" y="100" width="800" height="300"/>
<rect x="0" y="100" width="800" height="300" fill="url(#houle-${c.page.cle})"/>
<path class="terre" d="${TERRE}"/>
<g clip-path="url(#${id})"><path class="zone-domicile" data-littoral-zone d="M70 172C170 150 300 140 420 146C520 150 620 160 700 176L712 380L56 380Z"/></g>
<path class="cote" d="${COTE}" pathLength="1" data-littoral-cote/>
<g class="communes" data-littoral-communes>
<g class="commune" style="--i:0"><circle cx="100" cy="262" r="5"/><text x="112" y="246">Six-Fours</text></g>
<g class="commune" style="--i:1"><circle cx="262" cy="190" r="5"/><text x="262" y="176" text-anchor="middle">Toulon</text></g>
<g class="commune" style="--i:2"><circle cx="604" cy="206" r="5"/><text x="616" y="210">Hyères</text></g>
</g>
<g class="epingle" data-littoral-epingle transform="translate(506 166)"><g class="epingle-corps"><path d="M0 0C-12 -16 -18 -26 -18 -36A18 18 0 1 1 18 -36C18 -26 12 -16 0 0Z"/><circle cx="0" cy="-36" r="6.5" class="epingle-trou"/></g><text x="24" y="-4">La Crau</text></g>
<text class="mer-nom" x="300" y="336">Mer Méditerranée</text>
</svg>`);
}
