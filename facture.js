// ---------- Lecture des factures ----------
// Le PDF d'une facture fournisseur (reçu par mail) contient déjà son texte : il est lu
// sur l'iPad avec pdf.js, sans IA et sans rien envoyer sur internet. Des règles simples
// repèrent ensuite les lignes d'article, les prix, les quantités, la date et la devise.
// La lecture peut se tromper : rien n'entre dans le stock avant que la personne ait
// vérifié et validé les lignes.
//
// pdf.js (pdfjs-dist 3.11.174, licence Apache 2.0) est copié dans lib/pdfjs.

const DEVISES_FACTURE = ['CHF', 'EUR', 'USD', 'GBP'];
const FRAIS = ['repartir', 'depense', 'ignorer'];

const TEXTES_FACTURE = {
  fr: {
    lireFacture: 'Lire une facture',
    factureTitre: 'Lire une facture',
    factureAide: 'Choisissez le PDF de la facture reçu par mail (dans Fichiers, ou depuis Mail avec « Enregistrer dans Fichiers »). Les lignes sont pré-remplies : vérifiez-les, puis validez. Le stock ne change qu’après validation.',
    factureLocale: 'La lecture se fait sur cet iPad : rien n’est envoyé sur internet.',
    choisirFacture: 'Choisir le PDF',
    lectureEnCours: 'Lecture de la facture…',
    fournisseur: 'Fournisseur',
    lignesLues: n => `${n} ligne(s) repérée(s). La lecture automatique peut se tromper : comparez chaque ligne avec la facture (quantité dans l’unité du stock, prix total de la ligne).`,
    aucuneLigneLue: 'Aucune ligne d’article repérée. Ajoutez-les à la main avec le bouton ci-dessous, en vous aidant du texte lu.',
    inclure: 'Ajouter', lu: 'Sur la facture', article: 'Article du stock',
    nouvelArticleNom: n => `+ Nouvel article${n ? ` : ${n}` : ''}`, nomNouvel: 'Nom du nouvel article',
    quantiteStock: u => `Quantité (${u})`, prixLigne: d => `Prix de la ligne (${d})`,
    ajouterLigne: '+ Ajouter une ligne', ligneManuelle: 'ligne ajoutée à la main',
    texteLu: 'Texte lu sur la facture',
    fraisLus: d => `Frais de port et autres frais (${d})`, fraisQuoi: 'Ces frais',
    fraisChoix: { repartir: 'Répartir sur les articles (coût plus juste)', depense: 'Noter comme dépense dans Rapport', ignorer: 'Ne pas compter' },
    totalLignes: 'Total des lignes', totalFacture: 'Total lu sur la facture', ecart: 'écart à vérifier',
    ajouterAuStock: n => `Ajouter ${n} achat(s) au stock`, aucuneLigne: 'Aucune ligne cochée',
    lignesAjoutees: n => `${n} achat(s) ajouté(s) au stock`, fraisDe: n => `Frais de port : ${n}`,
    recommencer: 'Réessayer',
    ligneIncomplete: n => `Ligne ${n} : indiquez une quantité, un prix et un nom`,
    erreurLecture: 'Ce fichier n’a pas pu être lu. Vérifiez qu’il s’agit bien du PDF de la facture.',
    erreurScan: 'Ce PDF ne contient pas de texte (c’est une image scannée). Il faut le PDF envoyé par le fournisseur, ou saisir l’achat à la main dans l’article.',
    erreurChargement: 'Le lecteur de PDF n’a pas pu se charger. Vérifiez la connexion internet (nécessaire la première fois).',
    abandonnerFacture: 'Abandonner cette facture ? Rien n’a été ajouté au stock.',
    offertDetail: 'offert',
  },
  en: {
    lireFacture: 'Read an invoice',
    factureTitre: 'Read an invoice',
    factureAide: 'Choose the invoice PDF you got by email (in Files, or from Mail with “Save to Files”). The lines are filled in for you: check them, then confirm. Stock only changes after you confirm.',
    factureLocale: 'Reading happens on this iPad: nothing is sent over the internet.',
    choisirFacture: 'Choose the PDF',
    lectureEnCours: 'Reading the invoice…',
    fournisseur: 'Supplier',
    lignesLues: n => `${n} line(s) found. Automatic reading can be wrong: compare each line with the invoice (quantity in the stock unit, total price of the line).`,
    aucuneLigneLue: 'No item line found. Add them by hand with the button below, using the text that was read.',
    inclure: 'Add', lu: 'On the invoice', article: 'Stock item',
    nouvelArticleNom: n => `+ New item${n ? `: ${n}` : ''}`, nomNouvel: 'Name of the new item',
    quantiteStock: u => `Quantity (${u})`, prixLigne: d => `Line price (${d})`,
    ajouterLigne: '+ Add a line', ligneManuelle: 'line added by hand',
    texteLu: 'Text read from the invoice',
    fraisLus: d => `Shipping and other fees (${d})`, fraisQuoi: 'These fees',
    fraisChoix: { repartir: 'Spread over the items (truer cost)', depense: 'Record as an expense in Report', ignorer: 'Do not count' },
    totalLignes: 'Lines total', totalFacture: 'Total read on the invoice', ecart: 'difference to check',
    ajouterAuStock: n => `Add ${n} purchase(s) to stock`, aucuneLigne: 'No line ticked',
    lignesAjoutees: n => `${n} purchase(s) added to stock`, fraisDe: n => `Shipping: ${n}`,
    recommencer: 'Try again',
    ligneIncomplete: n => `Line ${n}: enter a quantity, a price and a name`,
    erreurLecture: 'This file could not be read. Check that it is the invoice PDF.',
    erreurScan: 'This PDF has no text (it is a scanned image). Use the PDF sent by the supplier, or enter the purchase by hand in the item.',
    erreurChargement: 'The PDF reader could not load. Check the internet connection (needed the first time).',
    abandonnerFacture: 'Drop this invoice? Nothing has been added to stock.',
    offertDetail: 'free',
  },
};
Object.assign(TEXTES.fr, TEXTES_FACTURE.fr);
Object.assign(TEXTES.en, TEXTES_FACTURE.en);

// Facture en cours. Gardée en mémoire seulement : si l'app est fermée, on relit la facture.
let facture = null;

// --- Chargement des bibliothèques, seulement quand on lit une facture ---

const scriptsCharges = {};
function chargerScript(src) {
  scriptsCharges[src] = scriptsCharges[src] || new Promise((ok, ko) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = ok;
    s.onerror = () => { delete scriptsCharges[src]; ko(new Error(src)); };
    document.head.appendChild(s);
  });
  return scriptsCharges[src];
}

async function pdfjs() {
  await chargerScript('lib/pdfjs/pdf.min.js');
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'lib/pdfjs/pdf.worker.min.js';
  return pdfjsLib;
}

class ErreurFacture extends Error {}

function apercu(source) {
  const echelle = Math.min(1, 900 / Math.max(source.width, source.height));
  const c = document.createElement('canvas');
  c.width = Math.round(source.width * echelle);
  c.height = Math.round(source.height * echelle);
  c.getContext('2d').drawImage(source, 0, 0, c.width, c.height);
  return c.toDataURL('image/jpeg', 0.8);
}

// Texte d'un PDF : les morceaux de même hauteur forment une ligne, de gauche à droite.
async function textePdf(fichier, apercus, lib) {
  const doc = await lib.getDocument({ data: new Uint8Array(await fichier.arrayBuffer()) }).promise;
  const lignes = [];
  for (let n = 1; n <= doc.numPages; n++) {
    const page = await doc.getPage(n);
    const vue = page.getViewport({ scale: 2 });
    const canvas = document.createElement('canvas');
    canvas.width = vue.width;
    canvas.height = vue.height;
    await page.render({ canvasContext: canvas.getContext('2d'), viewport: vue }).promise;
    apercus.push(apercu(canvas));
    const contenu = await page.getTextContent();
    const morceaux = contenu.items.filter(i => i.str.trim()).map(i => ({ x: i.transform[4], y: i.transform[5], fin: i.transform[4] + i.width, str: i.str }));
    if (!morceaux.length) continue;
    morceaux.sort((a, b) => b.y - a.y || a.x - b.x);
    let ligne = [];
    const finir = () => {
      if (!ligne.length) return;
      ligne.sort((a, b) => a.x - b.x);
      lignes.push(ligne.reduce((s, m, i) => s + (i && m.x - ligne[i - 1].fin > 2 ? '  ' : '') + m.str, ''));
      ligne = [];
    };
    for (const m of morceaux) {
      if (ligne.length && Math.abs(ligne[0].y - m.y) > 3) finir();
      ligne.push(m);
    }
    finir();
  }
  if (!lignes.length) throw new ErreurFacture(t('erreurScan'));
  return lignes;
}

async function lireFacture(fichiers) {
  facture = { etape: 'lecture', apercus: [] };
  vueFacture();
  try {
    let lib;
    try { lib = await pdfjs(); } catch (e) { throw new ErreurFacture(t('erreurChargement')); }
    const lignes = [];
    for (const f of fichiers) lignes.push(...await textePdf(f, facture.apercus, lib));
    preparerVerification(analyserFacture(lignes), facture.apercus, lignes);
  } catch (e) {
    console.error(e);
    facture = { etape: 'erreur', erreur: e instanceof ErreurFacture ? e.message : t('erreurLecture') };
  }
  if (location.hash.startsWith('#/facture')) vueFacture();
}

// --- Règles de lecture ---

const sansAccents = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// Montants à deux décimales : 45.00, 45,00, 1'234.50, 1 234,50, 1.234,50.
const MONTANT = /(?<![\d'’.,])(\d{1,3}(?:[ '’. ]\d{3})+|\d+)[.,](\d{2})(?![\d])(?!\s?%)/g;
const DATE_TEXTE = /\b\d{1,2}[./-]\d{1,2}[./-](?:20)?\d{2}\b|\b20\d{2}-\d{2}-\d{2}\b/g;
function montants(ligne) {
  const sansDates = ligne.replace(DATE_TEXTE, m => ' '.repeat(m.length));
  return [...sansDates.matchAll(MONTANT)].map(m => ({ valeur: Number(m[1].replace(/[^\d]/g, '') + '.' + m[2]), index: m.index, texte: m[0] }));
}

const MOTS_TYPE = {
  meche: ['meche', 'wick', 'docht', 'support de meche', 'pastille'],
  couleur: ['colorant', 'pigment', 'teinture', 'dye', 'farbe', 'mica'],
  parfum: ['parfum', 'fragrance', 'senteur', 'huile essentielle', 'huile parfumee', 'essential oil', 'duftol', 'duft', 'fragrance oil'],
  pot: ['pot', 'verrine', 'verre', 'bocal', 'jar', 'glas', 'contenant', 'boite', 'tin', 'couvercle', 'flacon vide'],
  cire: ['cire', 'wax', 'wachs', 'soja', 'soy', 'colza', 'paraffine', 'coco', 'abeille'],
};

// Le type dont un mot-clé apparaît en premier dans la ligne (le nom du produit vient d'abord).
function devinerType(description) {
  const texte = ' ' + sansAccents(description).replace(/[^a-z0-9]+/g, ' ') + ' ';
  let meilleur = { type: 'autre', pos: Infinity };
  for (const [type, mots] of Object.entries(MOTS_TYPE)) {
    for (const mot of mots) {
      const pos = texte.indexOf(' ' + mot);
      if (pos >= 0 && pos < meilleur.pos) meilleur = { type, pos };
    }
  }
  return meilleur.type;
}

const EXCLUS = /(sous[- ]?total|subtotal|zwischensumme|\btotal\b|\btotaux\b|summe|gesamt|\btva\b|\bmwst\b|\bvat\b|\btaxe|\bremise\b|\brabais\b|discount|\biban\b|\bbic\b|\bswift\b|acompte|deja paye|montant du|net a payer|a payer|solde|arrondi|\bpage\b|\btel\b|telephone|e-?mail|www\.|n° ?(de )?(tva|ide|facture|commande|client)|\bide\b|\bche-\d)/;
const FRAIS_MOTS = /(frais de port|\bport\b|livraison|expedition|envoi|shipping|versand|porto|emballage|douane|zoll|frais de traitement)/;
const TOTAL_MOTS = /(total|a payer|montant du|gesamt|summe|amount due)/;
// Produit offert (ligne à 0.00, ou mention « offert » sans prix) : ajouté au stock quand même (il sera utilisé), à prix 0.
const OFFERT = /(offert|gratuit|cadeau|echantillon|kostenlos|geschenk|gratis)/;
const NON_TOTAL = /(sous[- ]?total|subtotal|zwischensumme|hors taxe|\bht\b|netto|\btva\b|\bmwst\b|\bvat\b)/;

// Conditionnement écrit sur la ligne, ramené en g, ml ou pièces.
function conditionnement(description, type) {
  const d = sansAccents(description);
  if (['cire', 'couleur', 'parfum'].includes(type)) {
    const m = d.match(/(\d+(?:[.,]\d+)?)\s*(kg|kilo|g|gr|grammes?|l|litres?|cl|ml)\b/);
    if (!m) return null;
    const v = Number(m[1].replace(',', '.'));
    const u = m[2];
    const poids = /^kg|^kilo/.test(u) ? v * 1000 : /^g/.test(u) ? v : null;
    const volume = /^l/.test(u) ? v * 1000 : u === 'cl' ? v * 10 : u === 'ml' ? v : null;
    if (type === 'parfum') return { valeur: volume ?? poids / (nombre(etat.reglages.densiteParfum) || 1), texte: m[0] };
    // Un colorant liquide pèse environ 1 g par ml ; une cire, sa densité des Réglages.
    return { valeur: poids ?? volume * (type === 'couleur' ? 1 : (nombre(etat.reglages.densite) || 0.9)), texte: m[0] };
  }
  const m = d.match(/(?:lot|pack|set|carton|paquet|sachet|boite)\s*(?:de|of|a|von)?\s*(\d+)/) || d.match(/(\d+)\s*(?:pcs|pce|pc|pieces?|stk|stuck|unites|u\.)\b/) || d.match(/\bx\s?(\d+)\b/);
  return m ? { valeur: Number(m[1]), texte: m[0] } : null;
}

// Nombre d'unités commandées : quantité × prix unitaire = prix de la ligne, sinon « 3 x » ou le chiffre de début de ligne.
function nombreCommande(description, liste) {
  if (liste.length >= 2) {
    const total = liste[liste.length - 1].valeur;
    const unitaire = liste[liste.length - 2].valeur;
    const avant = description.slice(0, liste[liste.length - 2].index);
    for (const m of [...avant.matchAll(/(?<![\d.,'])(\d{1,4})(?:[.,]0+)?(?![\d.,'])/g)].reverse()) {
      const n = Number(m[1]);
      if (n > 0 && unitaire > 0 && Math.abs(n * unitaire - total) < 0.03) return n;
    }
    if (unitaire > 0 && unitaire < total) {
      const n = Math.round(total / unitaire);
      if (n > 1 && Math.abs(n * unitaire - total) < 0.03) return n;
    }
  }
  const m = description.match(/^\s*(\d{1,4})\s*(?:x|×|pce?s?|stk)?\s+\D/i) || description.match(/(?<![\d.,])(\d{1,4})\s*[x×]\s/i);
  return m ? Number(m[1]) : 1;
}

function nomPropose(description, liste, type) {
  let s = liste.length ? description.slice(0, liste[0].index) : description;
  // Le conditionnement n'est pas dans le nom (sauf pour un pot, où « 180 ml » est sa taille).
  if (type !== 'pot') s = s.replace(/[-–(,]?\s*(?:(?:lot|pack|set|carton|paquet|sachet|bo[iî]te|sac|bidon|flacon)\s*(?:de|of)?\s*)?\d+(?:[.,]\d+)?\s*(?:kg|g|gr|l|cl|ml|pcs|pi[eè]ces)?\b\)?\s*$/i, '')
    .replace(/[-–(,]?\s*(?:lot|pack|set|carton|paquet|sachet|bo[iî]te|sac|bidon|flacon)\s*(?:de|of)?\s*\d+\s*\)?/gi, ' ')
    .replace(/\d+(?:[.,]\d+)?\s*(?:kg|g|gr|l|cl|ml)\b/gi, ' ');
  s = s.replace(/^\s*\d{1,4}\s*(?:x|×|pce?s?|stk)?\s+/i, '')
    .replace(/\b(?=[A-Z0-9-]*\d)[A-Z0-9-]{4,}\b/g, ' ') // références
    .replace(/\b\d+\b/g, m => (/\d/.test(m) ? m : ''))
    .replace(/\b(chf|eur|usd|gbp|fr\.)\b|[€$£]/gi, ' ')
    .replace(/[-–(:]?\s*\b(offerte?s?|gratuite?s?|cadeau|gift|free|gratis|kostenlos)\b\s*\)?/gi, ' ')
    .replace(/\s{2,}.*$/, '') // colonnes après le libellé
    .replace(/[|_*]+/g, ' ').replace(/\s+/g, ' ').replace(/^[\s\-–:.,]+|[\s\-–:.,]+$/g, '');
  s = s.length > 50 ? s.slice(0, 50).replace(/\s\S*$/, '') : s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// L'article du stock dont le nom se retrouve le mieux dans la ligne.
function articleProche(description) {
  const mots = new Set(sansAccents(description).split(/[^a-z0-9]+/).filter(m => m.length >= 3));
  let meilleur = null;
  for (const a of etat.stock) {
    const siens = sansAccents(a.nom).split(/[^a-z0-9]+/).filter(m => m.length >= 3);
    if (!siens.length) continue;
    const score = siens.filter(m => mots.has(m)).length / siens.length;
    if (score >= 0.6 && (!meilleur || score > meilleur.score)) meilleur = { a, score };
  }
  return meilleur?.a || null;
}

const MOIS = ['janv', 'fevr', 'mars', 'avr', 'mai', 'juin', 'juil', 'aout', 'sept', 'oct', 'nov', 'dec'];
function trouverDate(texte) {
  const d = sansAccents(texte);
  let m = d.match(/\b(20\d{2})-(\d{2})-(\d{2})\b/);
  if (m) return `${m[1]}-${m[2]}-${m[3]}`;
  m = d.match(/\b(\d{1,2})[./-](\d{1,2})[./-](20\d{2}|\d{2})\b/);
  if (m && Number(m[2]) <= 12) return `${m[3].length === 2 ? '20' + m[3] : m[3]}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}`;
  m = d.match(new RegExp(`\\b(\\d{1,2})(?:er)?\\s+(${MOIS.join('|')})[a-z]*\\.?\\s+(20\\d{2})\\b`));
  if (m) return `${m[3]}-${String(MOIS.indexOf(m[2]) + 1).padStart(2, '0')}-${m[1].padStart(2, '0')}`;
  return '';
}

function trouverDevise(texte) {
  const compte = {
    CHF: (texte.match(/\bCHF\b|\bFr\.\s?\d|SFr/g) || []).length,
    EUR: (texte.match(/\bEUR\b|€/g) || []).length,
    USD: (texte.match(/\bUSD\b|US\$/g) || []).length,
    GBP: (texte.match(/\bGBP\b|£/g) || []).length,
  };
  const [devise, n] = Object.entries(compte).sort((a, b) => b[1] - a[1])[0];
  return n ? devise : etat.reglages.devise;
}

// Transforme les lignes de texte lues en proposition de facture (même forme pour photo et PDF).
function analyserFacture(lignesTexte) {
  const lignes = lignesTexte.map(l => l.replace(/\s+$/, '')).filter(l => l.trim());
  const texte = lignes.join('\n');
  const resultat = {
    fournisseur: (lignes.find(l => /[a-z]{3}/i.test(l) && !/facture|invoice|rechnung|^\s*(page|date)/i.test(l)) || '').trim().slice(0, 60),
    date: trouverDate(texte),
    devise: trouverDevise(texte),
    total: 0, frais: 0, lignes: [],
  };
  const totaux = [];
  let tva = 0;
  for (const ligne of lignes) {
    const liste = montants(ligne);
    const bas = sansAccents(ligne);
    const offert = OFFERT.test(bas);
    if (!liste.length && !offert) continue;
    const dernier = liste.length ? liste[liste.length - 1].valeur : 0;
    if (TOTAL_MOTS.test(bas) && !NON_TOTAL.test(bas)) { totaux.push(dernier); continue; }
    if (/\b(tva|mwst|vat)\b/.test(bas) && !/inclu|incl\b|enthalten|included/.test(bas)) { tva += dernier; continue; }
    if (FRAIS_MOTS.test(bas)) { resultat.frais += dernier; continue; }
    if (EXCLUS.test(bas) || (bas.match(/[a-z]/g) || []).length < 3) continue;
    const description = ligne.trim();
    const existant = articleProche(description);
    const type = existant?.type || devinerType(description);
    const nb = nombreCommande(description, liste);
    const cond = conditionnement(description, type);
    const quantite = cond ? nb * cond.valeur : (UNITE[type] === 'u' ? nb : 0);
    resultat.lignes.push({
      description, type,
      article_id: existant?.id || '',
      nom: existant?.nom || nomPropose(description, liste, type),
      quantite: Math.round(quantite * 10) / 10,
      detail_quantite: [cond ? `${nb} × ${cond.texte}` : (UNITE[type] === 'u' ? `${nb}` : '?'), !(dernier > 0) && t('offertDetail')].filter(Boolean).join(' · '),
      prix: dernier,
    });
  }
  resultat.total = totaux.length ? Math.max(...totaux) : 0;
  // Prix hors taxe + TVA à part : on répartit la TVA au prorata, pour garder le prix réellement payé.
  const ht = resultat.lignes.reduce((s, l) => s + l.prix, 0) + resultat.frais;
  if (tva > 0 && ht > 0 && resultat.total && Math.abs(ht + tva - resultat.total) < 0.06) {
    const k = (ht + tva) / ht;
    resultat.lignes.forEach(l => { l.prix = Math.round(l.prix * k * 100) / 100; });
    resultat.frais = Math.round(resultat.frais * k * 100) / 100;
  }
  return resultat;
}

function preparerVerification(lu, apercus, texte) {
  const aujourdhui = new Date().toISOString().slice(0, 10);
  facture = {
    etape: 'verif',
    apercus,
    texte,
    fournisseur: lu.fournisseur || '',
    date: /^\d{4}-\d{2}-\d{2}$/.test(lu.date) && lu.date <= aujourdhui && !isNaN(new Date(lu.date)) ? lu.date : aujourdhui,
    devise: DEVISES_FACTURE.includes(lu.devise) ? lu.devise : etat.reglages.devise,
    taux: '',
    tauxNote: '',
    total: nombre(lu.total),
    frais: Math.round(nombre(lu.frais) * 100) / 100,
    choixFrais: 'repartir',
    lignes: (lu.lignes || []).map(l => {
      const existant = l.article_id && articleParId(l.article_id);
      const type = existant ? existant.type : (TYPES.includes(l.type) ? l.type : 'autre');
      return {
        inclure: true,
        description: l.description || '',
        detail: l.detail_quantite || '',
        type,
        cible: existant ? existant.id : (articleNomme(type, l.nom)?.id || ''),
        nom: l.nom || '',
        quantite: nombre(l.quantite) || '',
        prix: l.prix === 0 ? 0 : (nombre(l.prix) || ''),
      };
    }),
  };
  majTauxFacture();
}

// --- Écran de vérification ---

function vueFacture() {
  const retour = `<div class="entete-fiche"><a class="btn small" href="#/stock">${t('retourStock')}</a></div>`;
  if (!facture || facture.etape === 'choix') {
    app.innerHTML = `${retour}<h2>${t('factureTitre')}</h2>
      <div class="card"><p style="margin-top:0">${t('factureAide')}</p>
        <div class="actions"><button class="primary" data-action="choisir-facture">${t('choisirFacture')}</button></div>
        <p class="muted">${t('factureLocale')}</p>
        <input type="file" id="fichier-facture" accept="application/pdf,.pdf" hidden>
      </div>`;
    document.getElementById('fichier-facture').addEventListener('change', ev => {
      const fichiers = [...ev.target.files];
      if (fichiers.length) lireFacture(fichiers);
    });
    return;
  }
  if (facture.etape === 'lecture') {
    app.innerHTML = `${retour}<h2>${t('factureTitre')}</h2>
      <div class="card"><p style="margin-top:0" class="attente" id="progression-facture">${t('lectureEnCours')}</p></div>`;
    return;
  }
  if (facture.etape === 'erreur') {
    app.innerHTML = `${retour}<h2>${t('factureTitre')}</h2>
      <div class="card"><p style="margin-top:0" class="warn">${esc(facture.erreur)}</p>
        <div class="actions"><button class="primary" data-action="autre-facture">${t('recommencer')}</button></div></div>`;
    return;
  }

  const f = facture;
  const unite = ty => t('unites')[UNITE[ty]];
  app.innerHTML = `${retour}
    <h2>${t('factureTitre')}</h2>
    <div class="card">
      <div class="grid3">
        <div><label for="f-fournisseur">${t('fournisseur')}</label>
          <input id="f-fournisseur" data-f="fournisseur" value="${esc(f.fournisseur)}"></div>
        <div><label for="f-date">${t('date')}</label>
          <input id="f-date" type="date" data-f="date" value="${esc(f.date)}"></div>
        <div><label for="f-devise">${t('devise')}</label>
          <select id="f-devise" data-f="devise">
            ${DEVISES_FACTURE.map(d => `<option ${d === f.devise ? 'selected' : ''}>${d}</option>`).join('')}
          </select></div>
      </div>
      ${f.devise !== etat.reglages.devise ? `
        <div class="grid2"><div><label for="f-taux">${t('taux', f.devise, etat.reglages.devise)}</label>
          <input id="f-taux" data-f="taux" inputmode="decimal" value="${esc(f.taux)}">
          <p class="muted" style="margin:4px 0 0">${esc(f.tauxNote)}</p></div></div>` : ''}
      ${apercusHtml()}
      ${f.texte?.length ? `<details class="texte-lu"><summary>${t('texteLu')}</summary><pre>${esc(f.texte.join('\n'))}</pre></details>` : ''}
    </div>
    <p class="muted">${f.lignes.length ? t('lignesLues', f.lignes.length) : t('aucuneLigneLue')}</p>
    ${f.lignes.map((l, i) => {
      const articles = etat.stock.filter(a => a.type === l.type).sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));
      return `<div class="card ligne-facture ${l.inclure ? '' : 'exclue'}">
        <label class="coche"><input type="checkbox" data-fl="inclure" data-i="${i}" ${l.inclure ? 'checked' : ''}> ${t('inclure')}</label>
        <p class="lu"><span class="muted">${t('lu')} :</span> ${l.description ? esc(l.description) : `<span class="muted">${t('ligneManuelle')}</span>`}${l.detail ? ` <span class="muted">(${esc(l.detail)})</span>` : ''}</p>
        <div class="grid2">
          <div><label for="fl-type-${i}">${t('type')}</label>
            <select id="fl-type-${i}" data-fl="type" data-i="${i}">
              ${TYPES.map(ty => `<option value="${ty}" ${ty === l.type ? 'selected' : ''}>${t('typeNom')[ty]}</option>`).join('')}
            </select></div>
          <div><label for="fl-cible-${i}">${t('article')}</label>
            <select id="fl-cible-${i}" data-fl="cible" data-i="${i}">
              <option value="" ${l.cible ? '' : 'selected'}>${esc(t('nouvelArticleNom', l.nom))}</option>
              ${articles.map(a => `<option value="${a.id}" ${a.id === l.cible ? 'selected' : ''}>${esc(a.nom)}</option>`).join('')}
            </select></div>
        </div>
        ${l.cible ? '' : `<label for="fl-nom-${i}">${t('nomNouvel')}</label>
          <input id="fl-nom-${i}" data-fl="nom" data-i="${i}" value="${esc(l.nom)}" placeholder="${t('exNomArticle')}">`}
        <div class="grid2">
          <div><label for="fl-qte-${i}">${t('quantiteStock', unite(l.type))}</label>
            <input id="fl-qte-${i}" data-fl="quantite" data-i="${i}" inputmode="decimal" value="${esc(l.quantite)}"></div>
          <div><label for="fl-prix-${i}">${t('prixLigne', f.devise)}</label>
            <input id="fl-prix-${i}" data-fl="prix" data-i="${i}" inputmode="decimal" value="${esc(l.prix)}"></div>
        </div>
      </div>`;
    }).join('')}
    <div class="actions" style="margin:0 0 16px"><button data-action="ajouter-ligne-facture">${t('ajouterLigne')}</button></div>
    <div class="card">
      <div class="grid2">
        <div><label for="f-frais">${t('fraisLus', f.devise)}</label>
          <input id="f-frais" data-f="frais" inputmode="decimal" value="${esc(f.frais || '')}"></div>
        <div><label for="f-choix-frais">${t('fraisQuoi')}</label>
          <select id="f-choix-frais" data-f="choixFrais">
            ${FRAIS.map(c => `<option value="${c}" ${c === f.choixFrais ? 'selected' : ''}>${t('fraisChoix')[c]}</option>`).join('')}
          </select></div>
      </div>
      <div id="resume-facture"></div>
    </div>
    <div class="actions">
      <button class="primary" data-action="valider-facture" id="bouton-valider-facture"></button>
      <button data-action="abandonner-facture">${t('annuler')}</button>
    </div>`;
  majResumeFacture();
}

function apercusHtml() {
  const liste = facture?.apercus || [];
  return liste.length ? `<div class="apercus-facture">${liste.map(src => `<a href="${src}" target="_blank" rel="noopener"><img src="${src}" alt=""></a>`).join('')}</div>` : '';
}

function montantFacture(x, devise = facture.devise) {
  return x.toLocaleString(locale(), { style: 'currency', currency: devise });
}

function majResumeFacture() {
  const zone = document.getElementById('resume-facture');
  if (!zone) return;
  const f = facture;
  const cochees = f.lignes.filter(l => l.inclure);
  const calcule = cochees.reduce((s, l) => s + nombre(l.prix), 0) + nombre(f.frais);
  const ecart = f.total && Math.abs(calcule - f.total) > 0.05;
  const enDevise = f.devise !== etat.reglages.devise && nombre(f.taux) > 0
    ? ` · ${t('soit')} ${euros(calcule * nombre(f.taux))}` : '';
  zone.innerHTML = `<table class="result petit">
    <tr><td>${t('totalLignes')}</td><td class="num">${montantFacture(calcule)}${enDevise}</td></tr>
    ${f.total ? `<tr class="total"><td>${t('totalFacture')}${ecart ? ` · <span class="warn">${t('ecart')}</span>` : ''}</td>
      <td class="num">${montantFacture(f.total)}</td></tr>` : ''}
  </table>`;
  const bouton = document.getElementById('bouton-valider-facture');
  bouton.textContent = t('ajouterAuStock', cochees.length);
  bouton.disabled = !cochees.length;
}

async function majTauxFacture() {
  const f = facture;
  if (!f || f.devise === etat.reglages.devise) return;
  f.tauxNote = '…';
  const r = await tauxDuJour(f.date, f.devise, etat.reglages.devise);
  if (facture !== f) return;
  f.taux = r ? String(Math.round(r.taux * 10000) / 10000) : '';
  f.tauxNote = r ? (r.horsLigne ? t('tauxHorsLigne') : t('tauxDu', new Date(r.date).toLocaleDateString(locale()))) : t('tauxInconnu');
  if (location.hash.startsWith('#/facture') && f.etape === 'verif') vueFacture();
}

// Écrit les lignes cochées dans le stock : seul endroit où la facture modifie les données.
function validerFacture() {
  const f = facture;
  const cochees = f.lignes.filter(l => l.inclure);
  if (!cochees.length) { toast(t('aucuneLigne')); return; }
  const incomplete = f.lignes.findIndex(l => l.inclure && (!(nombre(l.quantite) > 0) || String(l.prix).trim() === '' || (!l.cible && !l.nom.trim())));
  if (incomplete >= 0) { toast(t('ligneIncomplete', incomplete + 1)); return; }
  const autreDevise = f.devise !== etat.reglages.devise;
  const taux = autreDevise ? nombre(f.taux) : 1;
  if (!(taux > 0)) { toast(t('tauxManquant')); return; }

  const sommeCochees = cochees.reduce((s, l) => s + nombre(l.prix), 0);
  const frais = nombre(f.frais);
  const libelle = f.fournisseur.trim();
  for (const l of cochees) {
    let prix = nombre(l.prix);
    if (f.choixFrais === 'repartir' && frais > 0) {
      prix += sommeCochees > 0 ? frais * nombre(l.prix) / sommeCochees : frais / cochees.length;
    }
    const article = (l.cible && articleParId(l.cible)) || articleNomme(l.type, l.nom.trim()) || creerArticle(l.type, l.nom.trim());
    const quantite = nombre(l.quantite);
    article.quantite = Math.round((nombre(article.quantite) + quantite) * 10) / 10;
    article.achats.push({
      date: f.date, quantite,
      prix: Math.round(prix * taux * 100) / 100,
      ...(autreDevise && { origine: { montant: Math.round(prix * 100) / 100, devise: f.devise, taux } }),
      ...(libelle && { facture: libelle }),
    });
  }
  if (f.choixFrais === 'depense' && frais > 0) {
    etat.mouvements.push({
      id: nouvelId(), date: f.date, sens: 'sortie', libelle: t('fraisDe', libelle || t('fournisseur')),
      montant: Math.round(frais * taux * 100) / 100, mode: 'autre',
      ...(autreDevise && { origine: { montant: frais, devise: f.devise, taux } }),
    });
  }
  enregistrer();
  facture = null;
  majBadge();
  toast(t('lignesAjoutees', cochees.length));
  aller('#/stock');
}

// Relit un champ de l'écran de vérification dans la facture en cours.
function lireChampFacture(el) {
  const f = facture;
  if (!f || f.etape !== 'verif') return;
  if (el.dataset.f) {
    f[el.dataset.f] = el.value;
    if (el.dataset.f === 'taux') f.tauxNote = '';
    if (el.dataset.f === 'devise' || el.dataset.f === 'date') { f.taux = ''; majTauxFacture(); }
    if (el.dataset.f === 'devise') vueFacture(); else majResumeFacture();
    return;
  }
  if (el.dataset.fl) {
    const l = f.lignes[el.dataset.i];
    const champ = el.dataset.fl;
    l[champ] = champ === 'inclure' ? el.checked : el.value;
    if (champ === 'type') l.cible = articleNomme(l.type, l.nom)?.id || '';
    if (champ === 'cible' && l.cible) l.nom = articleParId(l.cible)?.nom || l.nom;
    if (champ === 'type' || champ === 'cible') { vueFacture(); return; }
    if (champ === 'inclure') el.closest('.ligne-facture').classList.toggle('exclue', !el.checked);
    majResumeFacture();
  }
}

// --- Évènements propres à cet écran ---

app.addEventListener('click', ev => {
  const el = ev.target.closest('[data-action]');
  if (!el) return;
  switch (el.dataset.action) {
    case 'choisir-facture':
      document.getElementById('fichier-facture').click();
      break;
    case 'autre-facture':
      facture = null;
      vueFacture();
      break;
    case 'ajouter-ligne-facture':
      facture.lignes.push({ inclure: true, description: '', detail: '', type: 'cire', cible: '', nom: '', quantite: '', prix: '' });
      vueFacture();
      document.getElementById(`fl-type-${facture.lignes.length - 1}`)?.focus();
      break;
    case 'valider-facture':
      validerFacture();
      break;
    case 'abandonner-facture':
      if (!confirm(t('abandonnerFacture'))) return;
      facture = null;
      aller('#/stock');
      break;
  }
});

app.addEventListener('input', ev => { lireChampFacture(ev.target); });
app.addEventListener('change', ev => { if (ev.target.type === 'checkbox') lireChampFacture(ev.target); });
