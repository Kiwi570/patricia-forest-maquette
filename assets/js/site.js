/* Effets propres à Patricia Forest (direction « Reprendre pied »). Le socle gère l'ouverture, le voile, l'en-tête,
   le menu, les mesures et la bibliothèque d'effets posés par attributs. Ici :
   - trace-pied : l'intro trace le pied et allume ses points, puis glisse vers le médaillon de la page ;
   - manifeste : les mots s'allument au défilement ;
   - zones : les zones réflexes s'allument une à une (accueil) ou se touchent (la réflexologie) ;
   - littoral : la côte se trace, la zone se remplit, l'épingle de La Crau tombe ;
   - rouleaux : les prix roulent quand on change de lieu ;
   - bon cadeau qui se compose, demande de rendez-vous en étapes, FAQ qui s'ouvre en douceur. */
import { demarrer, versObjet, quand, boucle } from './socle/index.js?v=1';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ── Premier écran : blocs et lignes de titre ───────────────── */
const blocsOuverture = () => $$('main > section:first-of-type [data-anime="gsap"]').filter((el) => !el.matches('h1'));
const titreOuverture = () => $('main h1[data-anime="gsap"]');
const lignesOuverture = () => $$('main h1 .hl-in');

function animerOuverture(tl, t0) {
  const h1 = titreOuverture();
  if (h1) tl.set(h1, { opacity: 1 }, 0);
  tl.fromTo(lignesOuverture(), { yPercent: 118 }, { yPercent: 0, y: 0, duration: 0.9, stagger: 0.12, ease: 'power4.out' }, t0);
  const blocs = blocsOuverture();
  const medias = blocs.filter((b) => b.matches('.media'));
  const textes = blocs.filter((b) => !b.matches('.media'));
  if (textes.length) tl.fromTo(textes, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out' }, t0 + 0.15);
  if (medias.length) tl.fromTo(medias, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' }, t0 - 0.1);
  return tl;
}

function etatFinalOuverture() {
  const h1 = titreOuverture();
  if (h1) gsap.set(h1, { opacity: 1 });
  gsap.set(lignesOuverture(), { yPercent: 0, y: 0 });
  gsap.set(blocsOuverture(), { opacity: 1, y: 0 });
  $$('.medaillon--intro .trait-pied').forEach((p) => { p.style.strokeDashoffset = '0'; });
}

/* ── Médaillon de l'accueil : le texte circulaire tourne au défilement ── */
function medaillonHero() {
  const texte = $('.medaillon-texte');
  if (!texte || !gsap) return;
  /* Une seule source pour la rotation : le temps (lent) plus le défilement. */
  const tourner = gsap.quickSetter(texte, 'rotation', 'deg');
  let angle = 0, scrollAvant = window.scrollY;
  boucle(texte, (dt) => {
    const y = window.scrollY;
    angle += dt * 9 + (y - scrollAvant) * 0.12;
    scrollAvant = y;
    tourner(angle % 360);
  });
}

/* ── Manifeste : les mots s'allument au défilement ───────────── */
function manifeste() {
  const p = $('[data-manifeste]');
  if (!p || !ST) return;
  const mots = $$('.mm', p);
  let avant = -1;
  ST.create({
    trigger: p, start: 'top 82%', end: 'bottom 48%', scrub: true,
    onUpdate: (s) => {
      const n = Math.max(avant, Math.round(s.progress * mots.length));
      if (n === avant) return;
      avant = n;
      mots.forEach((m, i) => m.classList.toggle('allume', i < n));
    },
  });
}

/* ── Zones réflexes ──────────────────────────────────────────── */
function allumerZone(svg, id, { garderVues = false, ordre = [] } = {}) {
  $$('.zone', svg).forEach((z) => {
    const actif = z.dataset.zone === id;
    z.classList.toggle('allumee', actif);
    if (garderVues) z.classList.toggle('vue', !actif && ordre.indexOf(z.dataset.zone) > -1 && ordre.indexOf(z.dataset.zone) < ordre.indexOf(id));
  });
}

function zonesDefile() {
  const bloc = $('[data-zones-defile]');
  if (!bloc || !ST) return;
  const svg = $('svg.pieds', bloc);
  const items = $$('[data-zone-item]', bloc);
  const ordre = items.map((i) => i.dataset.zoneItem);
  let avant = '';
  ST.create({
    trigger: bloc, start: 'top 75%', end: 'bottom 35%', scrub: true,
    onUpdate: (s) => {
      const i = Math.min(ordre.length - 1, Math.floor(s.progress * ordre.length));
      const id = ordre[i];
      if (id === avant) return;
      avant = id;
      allumerZone(svg, id, { garderVues: true, ordre });
      items.forEach((it) => it.classList.toggle('allumee', it.dataset.zoneItem === id));
    },
  });
}

function zonesOutil() {
  const outil = $('[data-carte-outil]');
  if (!outil) return;
  const svg = $('svg.pieds', outil);
  const boutons = $$('[data-zone-bouton]', outil);
  const fiches = $$('[data-zone-fiche]', outil);
  let demo = null;
  const choisir = (id) => {
    allumerZone(svg, id);
    boutons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.zoneBouton === id)));
    fiches.forEach((f) => { f.hidden = f.dataset.zoneFiche !== id; });
    $$('[data-zone-numero]', svg).forEach((n) => n.classList.toggle('actif', n.dataset.zoneNumero === id));
  };
  const arreterDemo = () => { if (demo) { demo.kill(); demo = null; } };
  boutons.forEach((b) => b.addEventListener('click', () => { arreterDemo(); choisir(b.dataset.zoneBouton); }));
  $$('.zone', svg).forEach((z) => {
    z.addEventListener('click', () => { arreterDemo(); choisir(z.dataset.zone); });
    z.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { arreterDemo(); choisir(z.dataset.zone); } });
  });
  ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((ev) => outil.addEventListener(ev, arreterDemo, { passive: true }));
  choisir('plexus');
  if (!ST) return;
  /* À l'entrée : la carte passe une fois sur toutes les zones, puis s'arrête sur le plexus solaire. */
  ST.create({
    trigger: outil, start: 'top 70%', once: true,
    onEnter: () => {
      const ids = boutons.map((b) => b.dataset.zoneBouton);
      demo = gsap.timeline({ onComplete: () => { demo = null; choisir('plexus'); } });
      ids.forEach((id, i) => demo.call(() => choisir(id), null, i * 0.22));
      demo.call(() => {}, null, ids.length * 0.22 + 0.1);
    },
  });
}

/* ── Littoral ────────────────────────────────────────────────── */
function echelleCartes() {
  const cartes = $$('svg.littoral');
  if (!cartes.length) return;
  const regler = () => cartes.forEach((s) => {
    const w = s.getBoundingClientRect().width || 780;
    s.style.setProperty('--k', String(Math.min(3, Math.max(0.8, 780 / w))));
  });
  regler();
  if ('ResizeObserver' in window) new ResizeObserver(regler).observe(cartes[0]);
}

function littoral() {
  if (!ST) return;
  $$('svg.littoral').forEach((svg) => {
    const cote = $('[data-littoral-cote]', svg), zone = $('[data-littoral-zone]', svg);
    const communes = $$('.commune', svg), epingle = $('.epingle-corps', svg), nomCrau = $('.epingle text', svg);
    const tl = gsap.timeline({ paused: true, onComplete: () => svg.classList.add('trace-fini') });
    tl.fromTo(cote, { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.5, ease: 'power2.inOut' })
      .fromTo(zone, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1.1, ease: 'power2.out' }, 0.7)
      .fromTo(communes, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 }, 1.1)
      .fromTo(epingle, { opacity: 0, y: -60 }, { opacity: 1, y: 0, duration: 0.9, ease: 'bounce.out' }, 1.5)
      .fromTo(nomCrau, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 2.0);
    ST.create({ trigger: svg, start: 'top 78%', once: true, onEnter: () => tl.play() });
  });
}

/* ── Tarifs : bascule domicile / La Crau, prix à rouleaux ────── */
function poserPrix(p, valeur, delai = 0) {
  const r = $('.prix-rouleaux', p), absent = $('[data-prix-absent]', p), texte = $('[data-prix-texte]', p);
  const tarif = p.closest('.tarif');
  if (!valeur) {
    tarif && tarif.classList.add('sans-prix');
    if (absent) { absent.hidden = false; absent.classList.remove('cache'); }
    if (texte) texte.textContent = absent ? absent.textContent : '';
    return;
  }
  tarif && tarif.classList.remove('sans-prix');
  if (absent) absent.classList.add('cache');
  if (texte) texte.textContent = `${valeur} €`;
  if (!r) return;
  const chiffres = valeur.padStart(3, ' ').split('');
  $$('.rouleau', r).forEach((rou, i) => {
    const ch = chiffres[i];
    rou.toggleAttribute('data-vide', ch === ' ');
    const piste = $('.rouleau-piste', rou);
    piste.style.setProperty('--d', `${delai + i * 0.08}s`);
    piste.style.setProperty('--n', ch === ' ' ? '0' : ch);
  });
}

function tarifs() {
  $$('[data-tarifs]').forEach((bloc) => {
    const prix = $$('[data-prix]', bloc);
    const bascule = $('.bascule', bloc);
    let lieu = 'domicile';
    const appliquer = (l, delai = 0) => {
      lieu = l;
      bascule && (bascule.dataset.lieuActif = l);
      $$('.bascule-choix', bloc).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lieu === l)));
      /* Visibilité seulement : la hauteur des cartes ne change pas (les déclencheurs plus bas restent justes). */
      $$('[data-note-lieu]', bloc).forEach((n) => { n.hidden = false; n.classList.toggle('cache', n.dataset.noteLieu !== l); });
      $$('[data-note-forfait]', bloc).forEach((n) => { n.classList.toggle('cache', l === 'crau'); });
      prix.forEach((p, i) => poserPrix(p, p.dataset[l], delai + i * 0.1));
    };
    $$('.bascule-choix', bloc).forEach((b) => b.addEventListener('click', () => appliquer(b.dataset.lieu)));
    /* À l'entrée : les rouleaux partent de zéro et tournent jusqu'au prix. */
    prix.forEach((p) => $$('.rouleau-piste', p).forEach((pi) => pi.style.setProperty('--n', '0')));
    if (ST) ST.create({ trigger: bloc.querySelector('.tarifs-grille'), start: 'top 85%', once: true, onEnter: () => appliquer(lieu, 0.25) });
    else appliquer(lieu);
    quand('pret', () => { if (!ST) appliquer(lieu); });
  });
}

/* ── Bon cadeau qui se compose ───────────────────────────────── */
function bonCadeau() {
  const bon = $('[data-bon]');
  if (!bon) return;
  const s = $('[data-bon-seance]', bon), l = $('[data-bon-lieu]', bon), pour = $('[data-bon-pour]', bon), de = $('[data-bon-de]', bon);
  const lien = $('[data-bon-lien]', bon);
  const prixDe = (seance, lieu) => {
    const p = document.querySelector(`[data-tarif="${seance}"] [data-prix]`);
    return p ? p.dataset[lieu] : '';
  };
  const maj = () => {
    if (s.value === 'forfait' && l.value === 'crau') l.value = 'domicile';
    $$('option[value="crau"]', l).forEach((o) => { o.disabled = s.value === 'forfait'; });
    $('[data-bon-affiche-seance]', bon).textContent = s.options[s.selectedIndex].text;
    $('[data-bon-affiche-lieu]', bon).textContent = l.options[l.selectedIndex].text;
    const p = prixDe(s.value, l.value);
    $('[data-bon-affiche-prix]', bon).textContent = p ? `${p} €` : '';
    $('[data-bon-affiche-pour]', bon).textContent = pour.value.trim() || pour.placeholder;
    $('[data-bon-affiche-de]', bon).textContent = de.value.trim() || de.placeholder;
    if (lien) {
      const u = new URL(lien.href, location.href);
      u.searchParams.set('lieu', 'bon'); u.searchParams.set('seance', s.value);
      lien.href = u.pathname + u.search + u.hash;
    }
  };
  [s, l, pour, de].forEach((c) => c.addEventListener('input', maj));
  maj();
}

/* ── Demande de rendez-vous en étapes ────────────────────────── */
function demande() {
  const f = $('[data-etapes]');
  if (!f) return;
  const cadre = $('[data-etapes-cadre]', f);
  const etapes = $$('[data-etape]', f);
  const prec = $('[data-etape-precedent]', f), suiv = $('[data-etape-suivant]', f), envoyer = $('[data-etape-envoyer]', f);
  const progression = $$('.etapes-progression li', f);
  const tarifsF = JSON.parse(f.dataset.tarifs || '{}');
  let n = 1;
  const valeur = (nom) => { const c = f.querySelector(`[name="${nom}"]:checked`); return c ? c.value : ''; };
  const libelle = (nom) => { const c = f.querySelector(`[name="${nom}"]:checked`); return c ? c.closest('label').querySelector('.choix-titre').textContent.trim() : ''; };
  const sauter2 = () => valeur('lieu') === 'groupe';
  const recap = () => {
    $('[data-recap-lieu]').textContent = libelle('lieu') + (valeur('lieu') === 'domicile' && f.commune.value.trim() ? ` · ${f.commune.value.trim()}` : '');
    $('[data-recap-seance]').textContent = sauter2() ? '—' : libelle('seance') + (f.premiere.checked ? ' · 1re séance' : '');
    const jours = $$('[name="jours"]:checked', f).map((c) => c.nextElementSibling.textContent);
    const moments = $$('[name="moment"]:checked', f).map((c) => c.nextElementSibling.textContent.toLowerCase());
    $('[data-recap-quand]').textContent = [jours.join(', '), moments.join(', ')].filter(Boolean).join(' · ') || '—';
    const lieu = valeur('lieu') === 'crau' ? 'crau' : 'domicile';
    const p = sauter2() ? null : (tarifsF[lieu] || {})[valeur('seance')];
    $('[data-recap-prix]').textContent = valeur('lieu') === 'groupe' ? 'Sur devis' : (p ? `${p} €` : 'Forfait proposé à domicile');
    $$('[data-si-lieu]', f).forEach((el) => { el.hidden = el.dataset.siLieu !== valeur('lieu'); });
    const forfait = f.querySelector('[name="seance"][value="forfait"]');
    if (forfait) { forfait.disabled = valeur('lieu') === 'crau'; if (forfait.disabled && forfait.checked) f.querySelector('[name="seance"][value="s60"]').checked = true; }
  };
  const aller = (m, focus = true) => {
    const h0 = cadre.offsetHeight;
    n = m;
    etapes.forEach((e) => { e.hidden = Number(e.dataset.etape) !== n; });
    progression.forEach((li, i) => li.classList.toggle('actif', i < n));
    prec.hidden = n === 1; suiv.hidden = n === 4; envoyer.hidden = n !== 4;
    const h1 = cadre.offsetHeight;
    if (gsap && h0 && h1 !== h0) gsap.fromTo(cadre, { height: h0 }, { height: h1, duration: 0.45, ease: 'power3.out', clearProps: 'height' });
    if (focus) {
      const legende = etapes[n - 1];
      legende.setAttribute('tabindex', '-1');
      legende.focus({ preventScroll: true });
      const haut = f.getBoundingClientRect().top;
      if (haut < 0) window.scrollBy({ top: haut - 120, behavior: 'smooth' });
    }
  };
  suiv.addEventListener('click', () => aller(n === 1 && sauter2() ? 3 : n + 1));
  prec.addEventListener('click', () => aller(n === 3 && sauter2() ? 1 : n - 1));
  f.addEventListener('input', recap);
  f.addEventListener('change', recap);
  recap();
  aller(1, false);
}

/* ── FAQ : ouverture et fermeture animées ────────────────────── */
function faq() {
  if (!gsap) return;
  $$('.faq-item').forEach((d) => {
    const s = $('summary', d), r = $('.faq-reponse', d);
    s.addEventListener('click', (e) => {
      e.preventDefault();
      if (d.open) {
        gsap.to(r, { height: 0, duration: 0.35, ease: 'power2.inOut', onComplete: () => { d.open = false; gsap.set(r, { clearProps: 'height' }); } });
      } else {
        d.open = true;
        gsap.fromTo(r, { height: 0 }, { height: r.scrollHeight, duration: 0.45, ease: 'power3.out', onComplete: () => gsap.set(r, { clearProps: 'height' }) });
      }
    });
  });
}

demarrer({
  preparer() {
    [medaillonHero, manifeste, zonesDefile, zonesOutil, echelleCartes, littoral, tarifs, bonCadeau, demande, faq]
      .forEach((f) => { try { f(); } catch (err) { console.error('[site]', f.name, err); } });
  },
  /* Intro (moins de 3 s) : le pied se trace d'un trait, ses points s'allument en vague, le nom apparaît ;
     le médaillon glisse jusqu'à l'objet d'ouverture de la page et la page s'ouvre en cercle depuis lui. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const traits = $$('.medaillon--intro .trait-pied');
    const points = $$('.medaillon--intro .point-pied');
    tl.fromTo(traits, { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.75, stagger: 0.05, ease: 'power2.inOut' }, 0.05)
      .fromTo(points, { scale: 0 }, { scale: 1, duration: 0.35, stagger: 0.07, ease: 'back.out(3)' }, 0.55)
      .fromTo('.ouverture-nom, .ouverture-ligne', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.08 }, 0.25)
      .to('.ouverture-nom, .ouverture-ligne', { opacity: 0, duration: 0.25 }, 1.05);
    versObjet(tl, { a: 1.05, duree: 0.5, ouverture: 0.75 });
    animerOuverture(tl, 1.6);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    etatFinalOuverture();
  },
  /* Arrivée par un lien interne : le premier écran se met en place pendant que le voile se retire. */
  arrivee() {
    if (!gsap) return;
    animerOuverture(gsap.timeline({ delay: 0.12 }), 0.15);
  },
});
