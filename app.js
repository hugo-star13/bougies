'use strict';

// ---------- Textes (français / anglais) ----------

const TEXTES = {
  fr: {
    navCalcul: 'Calculer', navFormules: 'Formules', navContenants: 'Contenants', navReglages: 'Réglages',
    bienvenue: 'Bienvenue',
    bienvenueTexte: 'Commencez par créer vos contenants (tailles de pots), puis vos formules. Vous pouvez aussi restaurer une sauvegarde dans Réglages.',
    ajouterContenant: 'Ajouter un contenant', creerFormule: 'Créer une formule',
    formule: 'Formule', contenant: 'Contenant', nombre: 'Nombre', autrePoids: 'Autre poids…',
    poidsParBougie: 'Poids par bougie (g)', ajouterPot: '+ Autre pot dans la fournée', retirer: 'Retirer',
    indiquerPoids: 'Indiquez un poids pour voir les quantités.',
    bougies: n => `${n} bougie${n > 1 ? 's' : ''}`,
    cire: 'Cire', parfumTotal: 'Parfum', dont: 'dont', total: 'Total',
    duPoidsTotal: 'du poids total', duMelange: 'du mélange',
    melangeFaux: s => `Le mélange fait ${s} % au lieu de 100 % : vérifiez la formule.`,
    couches: 'Couches', parPot: 'Par pot', meche: 'Mèche', design: 'Design', prochaineFois: 'La prochaine fois',
    rappelJamais: 'Aucune sauvegarde pour l’instant.',
    rappelJours: j => `Dernière sauvegarde il y a ${j} jours.`,
    rappelTexte: 'Pensez à sauvegarder vos formules.', sauvegarder: 'Sauvegarder',
    formules: 'Formules', rechercher: 'Rechercher un nom ou une senteur', nouvelle: '+ Nouvelle', calculer: 'Calculer',
    aucuneFormule: 'Aucune formule pour l’instant.', aucuneCorrespond: 'Aucune formule ne correspond.', favori: 'Favori',
    nouvelleFormule: 'Nouvelle formule', nom: 'Nom', exNomFormule: 'ex. Hazelnut Mocha',
    typeCire: 'Cire', exCire: 'ex. Soja',
    dosage: 'Parfum (% du poids total)',
    melange: 'Mélange de parfums', melangeAide: 'Part de chaque parfum dans le mélange. Le total doit faire 100 %.',
    ajouterParfum: '+ Parfum',
    couchesAide: 'Optionnel : part de chaque couche dans le pot (ex. 80 % blanche, 20 % rose).',
    ajouterCouche: '+ Couche', exCouche: 'ex. Blanche',
    exDesign: 'Couleurs, décorations…', exProchaineFois: 'Ce qu’il faut changer au prochain essai',
    notes: 'Notes', exNotes: 'Températures, astuces, essais…',
    enregistrer: 'Enregistrer', dupliquer: 'Dupliquer', supprimer: 'Supprimer', annuler: 'Annuler',
    copie: '(copie)', formuleEnregistree: 'Formule enregistrée', formuleDupliquee: 'Formule dupliquée',
    nommerFormule: 'Donnez un nom à la formule', supprimerFormule: n => `Supprimer la formule « ${n} » ?`,
    contenants: 'Contenants', contenantsAide: 'Vos tailles de pots, avec le poids total (cire + parfum) que vous versez dedans.',
    nouveauContenant: 'Nouveau contenant', ajouterContenantBtn: '+ Nouveau contenant', aucunContenant: 'Aucun contenant pour l’instant.',
    exNomContenant: 'ex. Petit pot', poidsVerse: 'Poids total versé (g)', exPoids: 'ex. 135',
    volumeEau: 'Contenance en eau (ml), optionnel', convertir: f => `Poids = ml × ${f}`,
    mecheConseillee: 'Mèche conseillée', exMeche: 'ex. ECO 6', exNotesContenant: 'Fournisseur, dimensions…',
    contenantEnregistre: 'Contenant enregistré', nomEtPoids: 'Indiquez un nom et un poids',
    supprimerContenant: n => `Supprimer le contenant « ${n} » ?`,
    reglages: 'Réglages', langue: 'Langue',
    dosageDefaut: 'Parfum par défaut pour une nouvelle formule (% du poids total)',
    densite: 'Conversion ml d’eau → g de cire (densité)',
    sauvegarde: 'Sauvegarde',
    sauvegardeTexte: 'Les formules sont enregistrées <strong>uniquement sur cet iPad</strong>. Si l’app est supprimée de l’écran d’accueil ou si les données de Safari sont effacées, elles disparaissent. Sauvegardez régulièrement le fichier dans Fichiers ou iCloud Drive.',
    derniereSauvegarde: 'Dernière sauvegarde', jamais: 'jamais',
    compte: (f, c) => `${f} formule(s), ${c} contenant(s)`,
    sauvegarderDonnees: 'Sauvegarder mes données', restaurer: 'Restaurer une sauvegarde',
    sauvegardeCreee: 'Sauvegarde créée', sauvegardeEchouee: 'La sauvegarde a échoué',
    confirmerRestauration: (f, c) => `Remplacer les données actuelles par cette sauvegarde (${f} formules, ${c} contenants) ?`,
    sauvegardeRestauree: 'Sauvegarde restaurée', fichierInvalide: 'Ce fichier n’est pas une sauvegarde valide',
    enregistrementImpossible: 'Impossible d’enregistrer sur cet appareil',
  },
  en: {
    navCalcul: 'Calculate', navFormules: 'Recipes', navContenants: 'Jars', navReglages: 'Settings',
    bienvenue: 'Welcome',
    bienvenueTexte: 'Start by adding your jars (sizes), then your recipes. You can also restore a backup in Settings.',
    ajouterContenant: 'Add a jar', creerFormule: 'Create a recipe',
    formule: 'Recipe', contenant: 'Jar', nombre: 'Quantity', autrePoids: 'Other weight…',
    poidsParBougie: 'Weight per candle (g)', ajouterPot: '+ Another jar in this batch', retirer: 'Remove',
    indiquerPoids: 'Enter a weight to see the amounts.',
    bougies: n => `${n} candle${n > 1 ? 's' : ''}`,
    cire: 'Wax', parfumTotal: 'Scent', dont: 'of which', total: 'Total',
    duPoidsTotal: 'of total weight', duMelange: 'of the blend',
    melangeFaux: s => `The blend adds up to ${s} % instead of 100 %: check the recipe.`,
    couches: 'Layers', parPot: 'Per jar', meche: 'Wick', design: 'Design', prochaineFois: 'Next time',
    rappelJamais: 'No backup yet.',
    rappelJours: j => `Last backup ${j} days ago.`,
    rappelTexte: 'Remember to back up your recipes.', sauvegarder: 'Back up',
    formules: 'Recipes', rechercher: 'Search a name or a scent', nouvelle: '+ New', calculer: 'Calculate',
    aucuneFormule: 'No recipes yet.', aucuneCorrespond: 'No recipe matches.', favori: 'Favourite',
    nouvelleFormule: 'New recipe', nom: 'Name', exNomFormule: 'e.g. Hazelnut Mocha',
    typeCire: 'Wax', exCire: 'e.g. Soy',
    dosage: 'Scent (% of total weight)',
    melange: 'Scent blend', melangeAide: 'Share of each scent in the blend. The total must be 100 %.',
    ajouterParfum: '+ Scent',
    couchesAide: 'Optional: share of each layer in the jar (e.g. 80 % white, 20 % pink).',
    ajouterCouche: '+ Layer', exCouche: 'e.g. White',
    exDesign: 'Colours, decorations…', exProchaineFois: 'What to change next time',
    notes: 'Notes', exNotes: 'Temperatures, tips, tests…',
    enregistrer: 'Save', dupliquer: 'Duplicate', supprimer: 'Delete', annuler: 'Cancel',
    copie: '(copy)', formuleEnregistree: 'Recipe saved', formuleDupliquee: 'Recipe duplicated',
    nommerFormule: 'Give the recipe a name', supprimerFormule: n => `Delete the recipe “${n}”?`,
    contenants: 'Jars', contenantsAide: 'Your jar sizes, with the total weight (wax + scent) you pour into each.',
    nouveauContenant: 'New jar', ajouterContenantBtn: '+ New jar', aucunContenant: 'No jars yet.',
    exNomContenant: 'e.g. Small jar', poidsVerse: 'Total weight poured (g)', exPoids: 'e.g. 135',
    volumeEau: 'Water capacity (ml), optional', convertir: f => `Weight = ml × ${f}`,
    mecheConseillee: 'Recommended wick', exMeche: 'e.g. ECO 6', exNotesContenant: 'Supplier, size…',
    contenantEnregistre: 'Jar saved', nomEtPoids: 'Enter a name and a weight',
    supprimerContenant: n => `Delete the jar “${n}”?`,
    reglages: 'Settings', langue: 'Language',
    dosageDefaut: 'Default scent for a new recipe (% of total weight)',
    densite: 'Water ml → wax g conversion (density)',
    sauvegarde: 'Backup',
    sauvegardeTexte: 'Recipes are stored <strong>only on this iPad</strong>. If the app is removed from the home screen or Safari data is cleared, they are lost. Back up the file regularly to Files or iCloud Drive.',
    derniereSauvegarde: 'Last backup', jamais: 'never',
    compte: (f, c) => `${f} recipe(s), ${c} jar(s)`,
    sauvegarderDonnees: 'Back up my data', restaurer: 'Restore a backup',
    sauvegardeCreee: 'Backup created', sauvegardeEchouee: 'Backup failed',
    confirmerRestauration: (f, c) => `Replace the current data with this backup (${f} recipes, ${c} jars)?`,
    sauvegardeRestauree: 'Backup restored', fichierInvalide: 'This file is not a valid backup',
    enregistrementImpossible: 'Could not save on this device',
  },
};

function t(cle, ...args) {
  const v = TEXTES[etat.reglages.langue][cle] ?? TEXTES.fr[cle];
  return typeof v === 'function' ? v(...args) : v;
}

// ---------- Données ----------

const CLE = 'bougies-donnees-v1';
const RAPPEL_SAUVEGARDE_JOURS = 14;

function etatVide() {
  return {
    version: 2,
    formules: [],
    contenants: [],
    derniereSauvegarde: null,
    reglages: {
      langue: (navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en',
      dosageDefaut: 8,
      densite: 0.9,
    },
    ui: {},
  };
}

// Version 1 : parfums en % du poids de cire, additifs séparés.
// Version 2 : un dosage global (% du poids total) et un mélange de parfums en % qui fait 100.
function migrer(donnees) {
  if ((donnees.version || 1) >= 2) return donnees;
  donnees.formules = (donnees.formules || []).map(f => {
    const somme = (f.parfums || []).reduce((s, l) => s + nombre(l.pct), 0);
    const notes = [f.notes, f.tempAjout && `Parfum à ${f.tempAjout} °C`,
      ...(f.additifs || []).filter(a => a.nom).map(a => `${a.nom} : ${a.pct} %`)].filter(Boolean).join('\n');
    return {
      id: f.id, nom: f.nom, cire: f.cire || '', favori: !!f.favori,
      dosage: f.mode === 'total' ? somme : Math.round(somme / (1 + somme / 100) * 10) / 10,
      parfums: (f.parfums || []).map(l => ({ nom: l.nom, pct: somme ? Math.round(nombre(l.pct) / somme * 1000) / 10 : '' })),
      couches: [], design: '', prochaineFois: '', notes,
    };
  });
  donnees.version = 2;
  return donnees;
}

function depuisDonnees(donnees) {
  const vide = etatVide();
  const e = Object.assign(vide, migrer(donnees));
  e.reglages = Object.assign(vide.reglages, donnees.reglages);
  e.ui = e.ui || {};
  return e;
}

function charger() {
  try {
    const brut = localStorage.getItem(CLE);
    return brut ? depuisDonnees(JSON.parse(brut)) : etatVide();
  } catch (e) {
    return etatVide();
  }
}

let etat = charger();

function enregistrer() {
  try {
    localStorage.setItem(CLE, JSON.stringify(etat));
  } catch (e) {
    toast(t('enregistrementImpossible'));
  }
}

function nouvelId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function nombre(v) {
  const n = parseFloat(String(v ?? '').replace(',', '.').replace(/\s/g, ''));
  return Number.isFinite(n) ? n : 0;
}

function locale() {
  return etat.reglages.langue === 'en' ? 'en-GB' : 'fr-FR';
}

function grammes(x) {
  return x.toLocaleString(locale(), { maximumFractionDigits: 1, minimumFractionDigits: 1 }) + ' g';
}

function pourcent(x) {
  return x.toLocaleString(locale(), { maximumFractionDigits: 2 }) + ' %';
}

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

const formuleParId = id => etat.formules.find(f => f.id === id);
const contenantParId = id => etat.contenants.find(c => c.id === id);

function formulesTriees() {
  return [...etat.formules].sort((a, b) => (b.favori - a.favori) || a.nom.localeCompare(b.nom, 'fr'));
}

// ---------- Calcul ----------

// Parfum = poids total × dosage ; cire = le reste. Chaque parfum prend sa part du mélange.
function calculer(formule, poidsTotal) {
  const parfum = poidsTotal * nombre(formule.dosage) / 100;
  const melange = formule.parfums.filter(l => l.nom || l.pct);
  const sommeMelange = melange.reduce((s, l) => s + nombre(l.pct), 0);
  return {
    poidsTotal,
    parfum,
    cire: poidsTotal - parfum,
    sommeMelange,
    lignes: melange.map(l => ({ nom: l.nom, pct: nombre(l.pct), g: parfum * nombre(l.pct) / 100 })),
  };
}

// ---------- Rendu ----------

const app = document.getElementById('app');
let brouillon = null; // formule ou contenant en cours d'édition

function traduireEntete() {
  document.documentElement.lang = etat.reglages.langue;
  document.querySelectorAll('[data-t]').forEach(el => { el.textContent = t(el.dataset.t); });
}

function route() {
  traduireEntete();
  const [page, id] = location.hash.replace(/^#\/?/, '').split('/');
  document.querySelectorAll('.topbar nav a').forEach(a => {
    const onglet = a.dataset.tab;
    a.classList.toggle('active', onglet === page || (onglet === 'formules' && page === 'formule') || (onglet === 'contenants' && page === 'contenant'));
  });
  window.scrollTo(0, 0);
  switch (page) {
    case 'formules': return vueFormules();
    case 'formule': return vueFormule(id);
    case 'contenants': return vueContenants();
    case 'contenant': return vueContenant(id);
    case 'reglages': return vueReglages();
    default: return vueCalcul();
  }
}

function aller(hash) {
  if (location.hash === hash) route(); else location.hash = hash;
}

// --- Calculer ---

function bandeauSauvegarde() {
  if (!etat.formules.length) return '';
  const derniere = etat.derniereSauvegarde ? new Date(etat.derniereSauvegarde) : null;
  const jours = derniere ? (Date.now() - derniere) / 864e5 : Infinity;
  if (jours < RAPPEL_SAUVEGARDE_JOURS) return '';
  return `<div class="card"><span class="warn">${derniere ? t('rappelJours', Math.floor(jours)) : t('rappelJamais')}</span>
    ${t('rappelTexte')} <a href="#/reglages">${t('sauvegarder')}</a></div>`;
}

function contenantsTries() {
  return [...etat.contenants].sort((a, b) => nombre(a.poids) - nombre(b.poids));
}

function poidsLigne(l) {
  return l.contenant === 'perso' ? nombre(l.poids) : nombre(contenantParId(l.contenant)?.poids);
}

function nomLigne(l) {
  return l.contenant === 'perso' ? grammes(nombre(l.poids)) : contenantParId(l.contenant)?.nom;
}

function vueCalcul() {
  if (!etat.formules.length) {
    app.innerHTML = `<div class="empty"><h2>${t('bienvenue')}</h2>
      <p>${t('bienvenueTexte')}</p>
      <div class="actions" style="justify-content:center">
        <a class="btn" href="#/contenant/nouveau">${t('ajouterContenant')}</a>
        <a class="btn primary" href="#/formule/nouveau">${t('creerFormule')}</a>
      </div></div>`;
    return;
  }
  const ui = etat.ui;
  if (!formuleParId(ui.formule)) ui.formule = formulesTriees()[0].id;
  const parDefaut = contenantsTries()[0]?.id || 'perso';
  if (!Array.isArray(ui.lignes) || !ui.lignes.length) ui.lignes = [{ contenant: parDefaut, poids: '', n: 1 }];
  ui.lignes.forEach(l => { if (l.contenant !== 'perso' && !contenantParId(l.contenant)) l.contenant = parDefaut; });

  app.innerHTML = `${bandeauSauvegarde()}
    <div class="card">
      <label for="c-formule">${t('formule')}</label>
      <select id="c-formule" data-ui="formule">
        ${formulesTriees().map(f => `<option value="${f.id}" ${f.id === ui.formule ? 'selected' : ''}>${f.favori ? '★ ' : ''}${esc(f.nom)}</option>`).join('')}
      </select>
      ${ui.lignes.map((l, i) => `
        <div class="grid2 pot">
          <div>
            <label for="c-contenant-${i}">${t('contenant')}</label>
            <select id="c-contenant-${i}" data-pot="${i}" data-champ-pot="contenant">
              ${contenantsTries().map(c => `<option value="${c.id}" ${c.id === l.contenant ? 'selected' : ''}>${esc(c.nom)} (${grammes(nombre(c.poids))})</option>`).join('')}
              <option value="perso" ${l.contenant === 'perso' ? 'selected' : ''}>${t('autrePoids')}</option>
            </select>
            ${l.contenant === 'perso' ? `<label for="c-poids-${i}">${t('poidsParBougie')}</label>
              <input id="c-poids-${i}" data-pot="${i}" data-champ-pot="poids" inputmode="decimal" value="${esc(l.poids)}" placeholder="${t('exPoids')}">` : ''}
          </div>
          <div>
            <label for="c-nombre-${i}">${t('nombre')}</label>
            <div class="stepper">
              <button data-action="moins" data-i="${i}" aria-label="−1">−</button>
              <input id="c-nombre-${i}" data-pot="${i}" data-champ-pot="n" inputmode="numeric" value="${l.n}">
              <button data-action="plus" data-i="${i}" aria-label="+1">+</button>
              ${ui.lignes.length > 1 ? `<button data-action="retirer-pot" data-i="${i}" aria-label="${t('retirer')}">✕</button>` : ''}
            </div>
          </div>
        </div>`).join('')}
      <div class="actions"><button class="small" data-action="ajouter-pot">${t('ajouterPot')}</button></div>
    </div>
    <div class="card" id="resultat"></div>`;
  afficherResultat();
}

function afficherResultat() {
  const zone = document.getElementById('resultat');
  if (!zone) return;
  const f = formuleParId(etat.ui.formule);
  const lignes = etat.ui.lignes
    .map(l => ({ ...l, p: poidsLigne(l), n: Math.max(0, Math.round(nombre(l.n))) }))
    .filter(l => l.p > 0 && l.n > 0);
  const nbBougies = lignes.reduce((s, l) => s + l.n, 0);
  const poidsTotal = lignes.reduce((s, l) => s + l.p * l.n, 0);
  if (!poidsTotal) { zone.innerHTML = `<p class="muted">${t('indiquerPoids')}</p>`; return; }

  const r = calculer(f, poidsTotal);
  const couches = (f.couches || []).filter(c => c.nom || c.pct);
  const meches = [...new Set(lignes.map(l => contenantParId(l.contenant)?.meche).filter(Boolean))];
  const plusieursPots = lignes.length > 1 || nbBougies > 1;

  zone.innerHTML = `
    <h3 style="margin-top:0">${esc(f.nom)} — ${t('bougies', nbBougies)}, ${grammes(poidsTotal)}</h3>
    ${Math.abs(r.sommeMelange - 100) > 0.05 ? `<p class="warn">${t('melangeFaux', pourcent(r.sommeMelange).replace(' %', ''))}</p>` : ''}
    <table class="result">
      <tr><td>${esc(f.cire || t('cire'))}</td><td class="num">${grammes(r.cire)}</td></tr>
      <tr><td>${t('parfumTotal')}<span class="pct">${pourcent(nombre(f.dosage))} ${t('duPoidsTotal')}</span></td><td class="num">${grammes(r.parfum)}</td></tr>
      ${r.lignes.map(l => `<tr class="sous"><td>${esc(l.nom)}<span class="pct">${pourcent(l.pct)}</span></td><td class="num">${grammes(l.g)}</td></tr>`).join('')}
      <tr class="total"><td>${t('total')}</td><td class="num">${grammes(poidsTotal)}</td></tr>
    </table>
    ${couches.length ? `<h3>${t('couches')}</h3><table class="result petit">
      ${couches.map(c => {
        const p = poidsTotal * nombre(c.pct) / 100;
        return `<tr><td>${esc(c.nom)}<span class="pct">${pourcent(nombre(c.pct))}</span></td>
          <td class="num">${grammes(p)} <span class="pct">(${t('cire').toLowerCase()} ${grammes(p - p * nombre(f.dosage) / 100)})</span></td></tr>`;
      }).join('')}</table>` : ''}
    ${plusieursPots ? `<h3>${t('parPot')}</h3><table class="result petit">
      ${lignes.map(l => {
        const rp = calculer(f, l.p);
        return `<tr><td>${l.n} × ${esc(nomLigne(l))}</td>
          <td class="num">${t('cire').toLowerCase()} ${grammes(rp.cire)} · ${t('parfumTotal').toLowerCase()} ${grammes(rp.parfum)}</td></tr>`;
      }).join('')}</table>` : ''}
    ${meches.length ? `<p><strong>${t('meche')} :</strong> ${meches.map(esc).join(', ')}</p>` : ''}
    ${f.design ? `<p><strong>${t('design')} :</strong> ${esc(f.design)}</p>` : ''}
    ${f.prochaineFois ? `<p><strong>${t('prochaineFois')} :</strong> <span style="white-space:pre-wrap">${esc(f.prochaineFois)}</span></p>` : ''}
    ${f.notes ? `<p class="muted" style="white-space:pre-wrap">${esc(f.notes)}</p>` : ''}`;
}

// --- Formules ---

function vueFormules(filtre = '') {
  const q = filtre.trim().toLowerCase();
  const liste = formulesTriees().filter(f => !q || [f.nom, f.cire, ...f.parfums.map(p => p.nom)].join(' ').toLowerCase().includes(q));
  app.innerHTML = `<h2>${t('formules')}</h2>
    <div class="actions" style="margin:0 0 16px">
      <input id="recherche" type="search" placeholder="${t('rechercher')}" value="${esc(filtre)}" style="flex:1">
      <a class="btn primary" href="#/formule/nouveau">${t('nouvelle')}</a>
    </div>
    ${liste.length ? `<ul class="list">${liste.map(f => `
      <li>
        <button class="star" data-action="favori" data-id="${f.id}" aria-label="${t('favori')}">${f.favori ? '★' : '☆'}</button>
        <a class="row" href="#/formule/${f.id}"><div class="grow">
          <div class="title">${esc(f.nom)}</div>
          <div class="sub">${esc(f.parfums.filter(p => p.nom).map(p => `${p.nom} ${p.pct} %`).join(' · '))}</div>
        </div></a>
        <button class="small" data-action="calculer" data-id="${f.id}">${t('calculer')}</button>
      </li>`).join('')}</ul>`
      : `<div class="empty">${etat.formules.length ? t('aucuneCorrespond') : t('aucuneFormule')}</div>`}`;
  const champ = document.getElementById('recherche');
  champ.addEventListener('input', () => {
    const pos = champ.selectionStart;
    vueFormules(champ.value);
    const nouveau = document.getElementById('recherche');
    nouveau.focus();
    nouveau.setSelectionRange(pos, pos);
  });
}

function suggestions() {
  const noms = new Set();
  etat.formules.forEach(f => f.parfums.forEach(l => l.nom && noms.add(l.nom)));
  const cires = new Set(etat.formules.map(f => f.cire).filter(Boolean));
  return `<datalist id="dl-parfums">${[...noms].sort().map(n => `<option value="${esc(n)}">`).join('')}</datalist>
    <datalist id="dl-cires">${[...cires].map(n => `<option value="${esc(n)}">`).join('')}</datalist>`;
}

function lignesHtml(cle, lignes, liste, exemple) {
  return lignes.map((l, i) => `<div class="line">
      <input data-ligne="${cle}" data-i="${i}" data-champ="nom" ${liste ? `list="${liste}"` : ''} placeholder="${exemple}" value="${esc(l.nom)}">
      <input data-ligne="${cle}" data-i="${i}" data-champ="pct" inputmode="decimal" placeholder="%" value="${esc(l.pct)}">
      <button data-action="retirer" data-cle="${cle}" data-i="${i}" aria-label="${t('retirer')}">✕</button>
    </div>`).join('');
}

function vueFormule(id) {
  if (!brouillon || brouillon.id !== id) {
    const existante = formuleParId(id);
    brouillon = existante ? structuredClone(existante) : {
      id: nouvelId(), nom: '', cire: '', dosage: etat.reglages.dosageDefaut, favori: false,
      parfums: [{ nom: '', pct: '' }], couches: [], design: '', prochaineFois: '', notes: '',
    };
    brouillon.couches = brouillon.couches || [];
    brouillon.estNouvelle = !existante;
    if (!existante) history.replaceState(null, '', '#/formule/' + brouillon.id);
  }
  const f = brouillon;
  const somme = f.parfums.reduce((s, l) => s + nombre(l.pct), 0);
  app.innerHTML = `${suggestions()}
    <h2>${f.estNouvelle ? t('nouvelleFormule') : esc(f.nom)}</h2>
    <div class="card">
      <label for="f-nom">${t('nom')}</label>
      <input id="f-nom" data-champ="nom" value="${esc(f.nom)}" placeholder="${t('exNomFormule')}">
      <div class="grid2">
        <div><label for="f-cire">${t('typeCire')}</label>
          <input id="f-cire" data-champ="cire" list="dl-cires" value="${esc(f.cire)}" placeholder="${t('exCire')}"></div>
        <div><label for="f-dosage">${t('dosage')}</label>
          <input id="f-dosage" data-champ="dosage" inputmode="decimal" value="${esc(f.dosage)}" placeholder="8"></div>
      </div>
    </div>
    <div class="card lines">
      <h3 style="margin-top:0">${t('melange')}</h3>
      <p class="muted">${t('melangeAide')}</p>
      ${lignesHtml('parfums', f.parfums, 'dl-parfums', t('nom'))}
      <div class="actions" style="margin-top:8px;align-items:center">
        <button class="small" data-action="ajouter" data-cle="parfums">${t('ajouterParfum')}</button>
        <span id="somme-melange" class="${Math.abs(somme - 100) > 0.05 ? 'warn' : 'muted'}">${t('total')} : ${pourcent(somme)}</span>
      </div>
      <h3>${t('couches')}</h3>
      <p class="muted">${t('couchesAide')}</p>
      ${lignesHtml('couches', f.couches, null, t('exCouche'))}
      <button class="small" data-action="ajouter" data-cle="couches">${t('ajouterCouche')}</button>
    </div>
    <div class="card">
      <label for="f-design" style="margin-top:0">${t('design')}</label>
      <textarea id="f-design" data-champ="design" placeholder="${t('exDesign')}">${esc(f.design)}</textarea>
      <label for="f-prochaine">${t('prochaineFois')}</label>
      <textarea id="f-prochaine" data-champ="prochaineFois" placeholder="${t('exProchaineFois')}">${esc(f.prochaineFois)}</textarea>
      <label for="f-notes">${t('notes')}</label>
      <textarea id="f-notes" data-champ="notes" placeholder="${t('exNotes')}">${esc(f.notes)}</textarea>
    </div>
    <div class="actions">
      <button class="primary" data-action="enregistrer-formule">${t('enregistrer')}</button>
      ${f.estNouvelle ? '' : `<button data-action="dupliquer-formule">${t('dupliquer')}</button>
        <button class="danger" data-action="supprimer-formule">${t('supprimer')}</button>`}
      <a class="btn" href="#/formules">${t('annuler')}</a>
    </div>`;
}

function lireFormulaire() {
  if (!brouillon) return;
  app.querySelectorAll('[data-champ]:not([data-ligne])').forEach(el => { brouillon[el.dataset.champ] = el.value.trim(); });
  app.querySelectorAll('[data-ligne]').forEach(el => { brouillon[el.dataset.ligne][el.dataset.i][el.dataset.champ] = el.value.trim(); });
}

// --- Contenants ---

function vueContenants() {
  app.innerHTML = `<h2>${t('contenants')}</h2>
    <p class="muted">${t('contenantsAide')}</p>
    <div class="actions" style="margin:0 0 16px"><a class="btn primary" href="#/contenant/nouveau">${t('ajouterContenantBtn')}</a></div>
    ${etat.contenants.length ? `<ul class="list">${contenantsTries().map(c => `<li><a class="row" href="#/contenant/${c.id}"><div class="grow">
        <div class="title">${esc(c.nom)}</div>
        <div class="sub">${grammes(nombre(c.poids))}${c.volume ? ` · ${esc(c.volume)} ml` : ''}${c.meche ? ` · ${t('meche').toLowerCase()} ${esc(c.meche)}` : ''}</div>
      </div></a></li>`).join('')}</ul>`
      : `<div class="empty">${t('aucunContenant')}</div>`}`;
}

function vueContenant(id) {
  if (!brouillon || brouillon.id !== id) {
    const existant = contenantParId(id);
    brouillon = existant ? structuredClone(existant) : { id: nouvelId(), nom: '', poids: '', volume: '', meche: '', notes: '' };
    brouillon.estNouvelle = !existant;
    if (!existant) history.replaceState(null, '', '#/contenant/' + brouillon.id);
  }
  const c = brouillon;
  app.innerHTML = `<h2>${c.estNouvelle ? t('nouveauContenant') : esc(c.nom)}</h2>
    <div class="card">
      <label for="k-nom">${t('nom')}</label>
      <input id="k-nom" data-champ="nom" value="${esc(c.nom)}" placeholder="${t('exNomContenant')}">
      <div class="grid2">
        <div><label for="k-volume">${t('volumeEau')}</label>
          <div class="stepper">
            <input id="k-volume" data-champ="volume" inputmode="decimal" value="${esc(c.volume)}" placeholder="180" style="max-width:none">
            <button class="small" data-action="convertir" style="width:auto;padding:0 12px;font-size:15px">${t('convertir', etat.reglages.densite)}</button>
          </div></div>
        <div><label for="k-poids">${t('poidsVerse')}</label>
          <input id="k-poids" data-champ="poids" inputmode="decimal" value="${esc(c.poids)}" placeholder="${t('exPoids')}"></div>
      </div>
      <label for="k-meche">${t('mecheConseillee')}</label>
      <input id="k-meche" data-champ="meche" value="${esc(c.meche)}" placeholder="${t('exMeche')}">
      <label for="k-notes">${t('notes')}</label>
      <textarea id="k-notes" data-champ="notes" placeholder="${t('exNotesContenant')}">${esc(c.notes)}</textarea>
    </div>
    <div class="actions">
      <button class="primary" data-action="enregistrer-contenant">${t('enregistrer')}</button>
      ${c.estNouvelle ? '' : `<button class="danger" data-action="supprimer-contenant">${t('supprimer')}</button>`}
      <a class="btn" href="#/contenants">${t('annuler')}</a>
    </div>`;
}

// --- Réglages et sauvegarde ---

function vueReglages() {
  const r = etat.reglages;
  const d = etat.derniereSauvegarde ? new Date(etat.derniereSauvegarde).toLocaleDateString(locale(), { dateStyle: 'long' }) : t('jamais');
  app.innerHTML = `<h2>${t('reglages')}</h2>
    <div class="card">
      <label for="r-langue" style="margin-top:0">${t('langue')}</label>
      <select id="r-langue" data-reglage="langue">
        <option value="fr" ${r.langue === 'fr' ? 'selected' : ''}>Français</option>
        <option value="en" ${r.langue === 'en' ? 'selected' : ''}>English</option>
      </select>
      <div class="grid2">
        <div><label for="r-dosage">${t('dosageDefaut')}</label>
          <input id="r-dosage" data-reglage="dosageDefaut" inputmode="decimal" value="${esc(r.dosageDefaut)}"></div>
        <div><label for="r-densite">${t('densite')}</label>
          <input id="r-densite" data-reglage="densite" inputmode="decimal" value="${esc(r.densite)}"></div>
      </div>
    </div>
    <div class="card">
      <h3 style="margin-top:0">${t('sauvegarde')}</h3>
      <p>${t('sauvegardeTexte')}</p>
      <p class="muted">${t('derniereSauvegarde')} : ${d} · ${t('compte', etat.formules.length, etat.contenants.length)}</p>
      <div class="actions">
        <button class="primary" data-action="exporter">${t('sauvegarderDonnees')}</button>
        <button data-action="importer">${t('restaurer')}</button>
        <input type="file" id="fichier-import" accept=".json,application/json" hidden>
      </div>
    </div>`;
  document.getElementById('fichier-import').addEventListener('change', importer);
}

async function exporter() {
  const { ui, ...donnees } = etat;
  const date = new Date().toISOString().slice(0, 10);
  const nom = `bougies-sauvegarde-${date}.json`;
  const fichier = new File([JSON.stringify(donnees, null, 2)], nom, { type: 'application/json' });
  try {
    if (navigator.canShare && navigator.canShare({ files: [fichier] })) {
      await navigator.share({ files: [fichier], title: nom });
    } else {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(fichier);
      a.download = nom;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 5000);
    }
    etat.derniereSauvegarde = new Date().toISOString();
    enregistrer();
    vueReglages();
    toast(t('sauvegardeCreee'));
  } catch (e) {
    if (e.name !== 'AbortError') toast(t('sauvegardeEchouee'));
  }
}

function importer(ev) {
  const fichier = ev.target.files[0];
  if (!fichier) return;
  const lecteur = new FileReader();
  lecteur.onload = () => {
    try {
      const donnees = JSON.parse(lecteur.result);
      if (!Array.isArray(donnees.formules) || !Array.isArray(donnees.contenants)) throw new Error('format');
      if (!confirm(t('confirmerRestauration', donnees.formules.length, donnees.contenants.length))) return;
      // La langue choisie sur cet appareil reste celle en cours.
      const langue = etat.reglages.langue;
      etat = depuisDonnees(donnees);
      etat.reglages.langue = langue;
      etat.ui = {};
      enregistrer();
      toast(t('sauvegardeRestauree'));
      aller('#/calcul');
    } catch (e) {
      toast(t('fichierInvalide'));
    }
  };
  lecteur.readAsText(fichier);
}

// ---------- Événements ----------

app.addEventListener('click', ev => {
  const el = ev.target.closest('[data-action]');
  if (!el) return;
  const { action, id, cle } = el.dataset;
  const i = Number(el.dataset.i);

  switch (action) {
    case 'plus':
    case 'moins': {
      const l = etat.ui.lignes[i];
      l.n = Math.max(1, Math.round(nombre(l.n)) + (action === 'plus' ? 1 : -1));
      document.getElementById('c-nombre-' + i).value = l.n;
      enregistrer();
      afficherResultat();
      break;
    }
    case 'ajouter-pot':
      etat.ui.lignes.push({ contenant: contenantsTries()[0]?.id || 'perso', poids: '', n: 1 });
      enregistrer();
      vueCalcul();
      break;
    case 'retirer-pot':
      etat.ui.lignes.splice(i, 1);
      enregistrer();
      vueCalcul();
      break;
    case 'favori': {
      const f = formuleParId(id);
      f.favori = !f.favori;
      enregistrer();
      vueFormules(document.getElementById('recherche').value);
      break;
    }
    case 'calculer':
      etat.ui.formule = id;
      enregistrer();
      aller('#/calcul');
      break;
    case 'ajouter':
      lireFormulaire();
      brouillon[cle].push({ nom: '', pct: '' });
      vueFormule(brouillon.id);
      app.querySelector(`[data-ligne="${cle}"][data-i="${brouillon[cle].length - 1}"]`)?.focus();
      break;
    case 'retirer':
      lireFormulaire();
      brouillon[cle].splice(i, 1);
      vueFormule(brouillon.id);
      break;
    case 'enregistrer-formule': {
      lireFormulaire();
      if (!brouillon.nom) { toast(t('nommerFormule')); return; }
      const { estNouvelle, ...f } = brouillon;
      f.parfums = f.parfums.filter(l => l.nom || l.pct);
      f.couches = f.couches.filter(l => l.nom || l.pct);
      const idx = etat.formules.findIndex(x => x.id === f.id);
      if (idx >= 0) etat.formules[idx] = f; else etat.formules.push(f);
      enregistrer();
      brouillon = null;
      toast(t('formuleEnregistree'));
      aller('#/formules');
      break;
    }
    case 'dupliquer-formule': {
      lireFormulaire();
      const { estNouvelle, ...f } = brouillon;
      const copie = { ...structuredClone(f), id: nouvelId(), nom: `${f.nom} ${t('copie')}`, favori: false };
      etat.formules.push(copie);
      enregistrer();
      brouillon = null;
      toast(t('formuleDupliquee'));
      aller('#/formule/' + copie.id);
      break;
    }
    case 'supprimer-formule':
      if (!confirm(t('supprimerFormule', brouillon.nom))) return;
      etat.formules = etat.formules.filter(f => f.id !== brouillon.id);
      enregistrer();
      brouillon = null;
      aller('#/formules');
      break;
    case 'convertir': {
      const ml = nombre(document.getElementById('k-volume').value);
      if (ml) document.getElementById('k-poids').value = Math.round(ml * nombre(etat.reglages.densite) * 10) / 10;
      break;
    }
    case 'enregistrer-contenant': {
      lireFormulaire();
      if (!brouillon.nom || !nombre(brouillon.poids)) { toast(t('nomEtPoids')); return; }
      const { estNouvelle, ...c } = brouillon;
      const idx = etat.contenants.findIndex(x => x.id === c.id);
      if (idx >= 0) etat.contenants[idx] = c; else etat.contenants.push(c);
      enregistrer();
      brouillon = null;
      toast(t('contenantEnregistre'));
      aller('#/contenants');
      break;
    }
    case 'supprimer-contenant':
      if (!confirm(t('supprimerContenant', brouillon.nom))) return;
      etat.contenants = etat.contenants.filter(c => c.id !== brouillon.id);
      enregistrer();
      brouillon = null;
      aller('#/contenants');
      break;
    case 'exporter':
      exporter();
      break;
    case 'importer':
      document.getElementById('fichier-import').click();
      break;
  }
});

app.addEventListener('input', ev => {
  const el = ev.target;
  // Écran Calculer : on recalcule à chaque frappe.
  if (el.dataset.ui) {
    etat.ui[el.dataset.ui] = el.value;
    enregistrer();
    afficherResultat();
  } else if (el.dataset.pot !== undefined) {
    etat.ui.lignes[el.dataset.pot][el.dataset.champPot] = el.value;
    enregistrer();
    if (el.dataset.champPot === 'contenant') vueCalcul(); else afficherResultat();
  } else if (el.dataset.reglage) {
    const cle = el.dataset.reglage;
    etat.reglages[cle] = cle === 'langue' ? el.value : nombre(el.value);
    enregistrer();
    if (cle === 'langue') route();
  } else if (el.dataset.ligne === 'parfums') {
    // Total du mélange mis à jour en direct dans le formulaire.
    const somme = [...app.querySelectorAll('[data-ligne="parfums"][data-champ="pct"]')].reduce((s, x) => s + nombre(x.value), 0);
    const zone = document.getElementById('somme-melange');
    zone.textContent = `${t('total')} : ${pourcent(somme)}`;
    zone.className = Math.abs(somme - 100) > 0.05 ? 'warn' : 'muted';
  }
});

let minuteurToast;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(minuteurToast);
  minuteurToast = setTimeout(() => el.classList.remove('show'), 2200);
}

window.addEventListener('hashchange', () => {
  // Quitter un formulaire sans enregistrer abandonne le brouillon.
  if (!/^#\/(formule|contenant)\//.test(location.hash)) brouillon = null;
  route();
});
route();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

// Demande au navigateur de ne pas effacer les données quand l'espace manque.
navigator.storage?.persist?.();
