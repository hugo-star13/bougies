// ---------- Lecture des factures ----------
// Une photo (ou un PDF) de facture fournisseur est lue par Claude, l'IA d'Anthropic,
// qui propose les lignes d'achat. Rien n'entre dans le stock avant que la personne
// ait vérifié et validé les lignes.
//
// La clé API est gardée à part, seulement sur cet iPad : elle n'est ni dans les
// données sauvegardées ni dans le dépôt (qui est public).

const CLE_API = 'bougies-cle-claude';
const MODELE_FACTURE = 'claude-opus-5-5';
const FACTURE_COTE_MAX = 1568; // au-delà, l'IA réduit l'image elle-même : inutile d'envoyer plus
const DEVISES_FACTURE = ['CHF', 'EUR', 'USD', 'GBP'];
const FRAIS = ['repartir', 'depense', 'ignorer'];

const TEXTES_FACTURE = {
  fr: {
    lireFacture: 'Lire une facture',
    factureTitre: 'Lire une facture',
    factureAide: 'Prenez en photo la facture (ou choisissez une capture d’écran ou un PDF). Les lignes sont pré-remplies : vérifiez-les, puis validez. Le stock ne change qu’après validation.',
    choisirFacture: 'Choisir la photo ou le PDF',
    plusieursPages: 'Plusieurs pages ? Sélectionnez-les ensemble.',
    lectureEnCours: 'Lecture de la facture… (environ 20 secondes)',
    cleManquante: 'Pour lire les factures, l’app a besoin d’une clé API Claude. Elle se règle une seule fois.',
    cleAide: 'Créez un compte sur console.anthropic.com, achetez un petit crédit (quelques centimes par facture), puis créez une clé dans « API Keys » et collez-la ici. Elle reste sur cet iPad et n’est pas incluse dans les sauvegardes.',
    cleApi: 'Clé API Claude', cleEnregistree: 'Clé enregistrée', cleSupprimee: 'Clé supprimée',
    enregistrerCle: 'Enregistrer la clé', supprimerCle: 'Supprimer la clé', cleOk: 'Clé enregistrée sur cet iPad.',
    cleInvalide: 'Cette clé ne ressemble pas à une clé Claude (elle commence par sk-ant-).',
    reglagesFacture: 'Lecture des factures',
    fournisseur: 'Fournisseur',
    lignesLues: n => `${n} ligne(s) lue(s). Vérifiez chaque ligne : quantité dans l’unité du stock, prix total payé pour la ligne.`,
    inclure: 'Ajouter', lu: 'Sur la facture', article: 'Article du stock',
    nouvelArticleNom: n => `+ Nouvel article : ${n}`, nomNouvel: 'Nom du nouvel article',
    quantiteStock: u => `Quantité (${u})`, prixLigne: d => `Prix de la ligne (${d})`,
    fraisLus: d => `Frais de port et autres frais (${d})`, fraisQuoi: 'Ces frais',
    fraisChoix: { repartir: 'Répartir sur les articles (coût plus juste)', depense: 'Noter comme dépense dans Rapport', ignorer: 'Ne pas compter' },
    totalLignes: 'Total des lignes', totalFacture: 'Total de la facture', ecart: 'écart à vérifier',
    ajouterAuStock: n => `Ajouter ${n} achat(s) au stock`, aucuneLigne: 'Aucune ligne cochée',
    lignesAjoutees: n => `${n} achat(s) ajouté(s) au stock`, fraisDe: n => `Frais de port : ${n}`,
    autreFacture: 'Lire une autre facture', recommencer: 'Réessayer',
    ligneIncomplete: n => `Ligne ${n} : indiquez une quantité, un prix et un nom`,
    erreurCle: 'La clé API est refusée. Vérifiez-la dans Réglages.',
    erreurCredit: 'Le crédit du compte Claude est épuisé. Rechargez-le sur console.anthropic.com.',
    erreurOccupe: 'Le service est surchargé. Réessayez dans une minute.',
    erreurReseau: 'Pas de connexion internet : la lecture des factures en a besoin.',
    erreurLecture: 'La facture n’a pas pu être lue. Essayez une photo plus nette, bien à plat.',
    erreurAutre: m => `Erreur : ${m}`,
    abandonnerFacture: 'Abandonner cette facture ? Rien n’a été ajouté au stock.',
    depuisFacture: f => `Facture ${f}`,
  },
  en: {
    lireFacture: 'Read an invoice',
    factureTitre: 'Read an invoice',
    factureAide: 'Take a photo of the invoice (or pick a screenshot or a PDF). The lines are filled in for you: check them, then confirm. Stock only changes after you confirm.',
    choisirFacture: 'Choose the photo or PDF',
    plusieursPages: 'Several pages? Select them together.',
    lectureEnCours: 'Reading the invoice… (about 20 seconds)',
    cleManquante: 'To read invoices, the app needs a Claude API key. You only set it once.',
    cleAide: 'Create an account at console.anthropic.com, buy a small credit (a few cents per invoice), then create a key under “API Keys” and paste it here. It stays on this iPad and is not included in backups.',
    cleApi: 'Claude API key', cleEnregistree: 'Key saved', cleSupprimee: 'Key removed',
    enregistrerCle: 'Save the key', supprimerCle: 'Remove the key', cleOk: 'Key saved on this iPad.',
    cleInvalide: 'This does not look like a Claude key (it starts with sk-ant-).',
    reglagesFacture: 'Invoice reading',
    fournisseur: 'Supplier',
    lignesLues: n => `${n} line(s) read. Check each line: quantity in the stock unit, total price paid for the line.`,
    inclure: 'Add', lu: 'On the invoice', article: 'Stock item',
    nouvelArticleNom: n => `+ New item: ${n}`, nomNouvel: 'Name of the new item',
    quantiteStock: u => `Quantity (${u})`, prixLigne: d => `Line price (${d})`,
    fraisLus: d => `Shipping and other fees (${d})`, fraisQuoi: 'These fees',
    fraisChoix: { repartir: 'Spread over the items (truer cost)', depense: 'Record as an expense in Report', ignorer: 'Do not count' },
    totalLignes: 'Lines total', totalFacture: 'Invoice total', ecart: 'difference to check',
    ajouterAuStock: n => `Add ${n} purchase(s) to stock`, aucuneLigne: 'No line ticked',
    lignesAjoutees: n => `${n} purchase(s) added to stock`, fraisDe: n => `Shipping: ${n}`,
    autreFacture: 'Read another invoice', recommencer: 'Try again',
    ligneIncomplete: n => `Line ${n}: enter a quantity, a price and a name`,
    erreurCle: 'The API key was refused. Check it in Settings.',
    erreurCredit: 'The Claude account has run out of credit. Top it up at console.anthropic.com.',
    erreurOccupe: 'The service is overloaded. Try again in a minute.',
    erreurReseau: 'No internet connection: reading invoices needs one.',
    erreurLecture: 'The invoice could not be read. Try a sharper photo, taken flat.',
    erreurAutre: m => `Error: ${m}`,
    abandonnerFacture: 'Drop this invoice? Nothing has been added to stock.',
    depuisFacture: f => `Invoice ${f}`,
  },
};
Object.assign(TEXTES.fr, TEXTES_FACTURE.fr);
Object.assign(TEXTES.en, TEXTES_FACTURE.en);

function cleApi() {
  try { return localStorage.getItem(CLE_API) || ''; } catch (e) { return ''; }
}

// Facture en cours de vérification. Gardée en mémoire seulement : si l'app est fermée,
// on recommence la lecture.
let facture = null;

// --- Envoi à Claude ---

const SCHEMA_FACTURE = {
  type: 'object',
  additionalProperties: false,
  required: ['fournisseur', 'date', 'devise', 'total', 'frais', 'lignes'],
  properties: {
    fournisseur: { type: 'string' },
    date: { type: 'string', description: 'Date de la facture au format AAAA-MM-JJ, ou chaîne vide.' },
    devise: { type: 'string', enum: DEVISES_FACTURE },
    total: { type: 'number', description: 'Total payé, toutes taxes et frais compris.' },
    frais: { type: 'number', description: 'Frais de port, d’emballage, de douane… toutes taxes comprises. 0 si aucun.' },
    lignes: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['description', 'type', 'article_id', 'nom', 'quantite', 'detail_quantite', 'prix'],
        properties: {
          description: { type: 'string' },
          type: { type: 'string', enum: TYPES },
          article_id: { type: 'string' },
          nom: { type: 'string' },
          quantite: { type: 'number' },
          detail_quantite: { type: 'string' },
          prix: { type: 'number' },
        },
      },
    },
  },
};

function consigneFacture() {
  const articles = etat.stock.map(a => ({ id: a.id, type: a.type, nom: a.nom, unite: UNITE[a.type] }));
  return `Tu lis une facture d'achat de matériel pour une fabrication artisanale de bougies (en Suisse).
Rends chaque article acheté sous forme de ligne.

Pour chaque ligne :
- description : le texte de la ligne tel qu'écrit sur la facture.
- type : cire, parfum (huiles parfumées, senteurs, huiles essentielles), couleur (colorants, pigments), pot (pots, contenants, verrines, couvercles vendus avec le pot), meche (mèches, supports de mèche), autre (tout le reste : étiquettes, emballages, outils, moules).
- article_id : l'id de l'article du stock existant qui correspond à ce produit (même produit, même senteur, même taille), sinon "". Ne rapproche pas deux produits différents.
- nom : un nom court et clair pour le stock, en français, sans la référence ni le conditionnement (ex. « Cire de soja », « Vanille Bourbon », « Pot ambré 180 ml »). Si article_id est rempli, reprends le nom de cet article.
- quantite : la quantité TOTALE achetée sur cette ligne, convertie dans l'unité du stock : grammes pour cire et couleur, millilitres pour parfum, pièces pour pot, meche et autre. Multiplie par le nombre d'unités commandées (ex. 3 × flacon 100 ml = 300 ; 2 × sac 5 kg = 10000 ; lot de 12 pots × 2 = 24). Pour un parfum vendu au poids, compte ${etat.reglages.densiteParfum || 1} g par ml.
- detail_quantite : le calcul en clair (ex. « 2 × 5 kg »).
- prix : le prix TOTAL payé pour cette ligne, remises déduites, TVA comprise. Si la facture montre des prix hors taxe avec une TVA globale, répartis la TVA au prorata des lignes.

Les frais de port, d'emballage ou de douane ne sont pas des lignes : additionne-les dans frais (TVA comprise).
total : le montant total payé indiqué sur la facture.
date : la date de la facture (AAAA-MM-JJ). devise : la devise de la facture.
Si un chiffre est illisible, fais au mieux : la personne vérifiera chaque ligne.

Articles déjà dans le stock (JSON) :
${JSON.stringify(articles)}`;
}

function lireEnBase64(fichier) {
  return new Promise((ok, ko) => {
    const lecteur = new FileReader();
    lecteur.onload = () => ok(lecteur.result);
    lecteur.onerror = () => ko(lecteur.error);
    lecteur.readAsDataURL(fichier);
  });
}

async function blocsFacture(fichiers) {
  const blocs = [];
  const apercus = [];
  for (const f of fichiers) {
    if (f.type === 'application/pdf') {
      const url = await lireEnBase64(f);
      blocs.push({ type: 'document', source: { type: 'base64', media_type: 'application/pdf', data: url.split(',')[1] } });
      apercus.push({ pdf: f.name });
    } else {
      const url = await reduireImage(f, FACTURE_COTE_MAX, 0.85);
      blocs.push({ type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: url.split(',')[1] } });
      apercus.push({ image: url });
    }
  }
  return { blocs, apercus };
}

function reduireImage(fichier, coteMax, qualite) {
  return new Promise((ok, ko) => {
    const img = new Image();
    const url = URL.createObjectURL(fichier);
    img.onload = () => {
      const echelle = Math.min(1, coteMax / Math.max(img.width, img.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * echelle);
      canvas.height = Math.round(img.height * echelle);
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#fff'; // fond blanc pour les captures PNG transparentes
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      ok(canvas.toDataURL('image/jpeg', qualite));
    };
    img.onerror = () => { URL.revokeObjectURL(url); ko(new Error('image')); };
    img.src = url;
  });
}

class ErreurFacture extends Error {}

// Avec secours, un refus de la part de l'IA est relancé automatiquement sur un autre
// modèle. Si cette option (récente) est refusée, on renvoie la demande sans elle.
async function envoyerAClaude(blocs, avecSecours) {
  return fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': cleApi(),
      'anthropic-version': '2023-06-01',
      // Appel direct depuis l'app, sans serveur : la clé est celle de l'utilisatrice, sur son iPad.
      'anthropic-dangerous-direct-browser-access': 'true',
      ...(avecSecours && { 'anthropic-beta': 'server-side-fallback-2026-07-01' }),
    },
    body: JSON.stringify({
      model: MODELE_FACTURE,
      max_tokens: 16000,
      ...(avecSecours && { fallbacks: 'default' }),
      output_config: { effort: 'low', format: { type: 'json_schema', schema: SCHEMA_FACTURE } },
      messages: [{ role: 'user', content: [...blocs, { type: 'text', text: consigneFacture() }] }],
    }),
  });
}

async function demanderAClaude(blocs) {
  let rep;
  try {
    rep = await envoyerAClaude(blocs, true);
    if (rep.status === 400) {
      const message = (await rep.clone().json().catch(() => ({}))).error?.message || '';
      if (/fallback|beta/i.test(message)) rep = await envoyerAClaude(blocs, false);
    }
  } catch (e) {
    try { rep = await envoyerAClaude(blocs, false); } catch (e2) { throw new ErreurFacture(t('erreurReseau')); }
  }
  const corps = await rep.json().catch(() => ({}));
  if (!rep.ok) {
    const message = corps.error?.message || `HTTP ${rep.status}`;
    if (rep.status === 401 || rep.status === 403) throw new ErreurFacture(t('erreurCle'));
    if (/credit balance/i.test(message)) throw new ErreurFacture(t('erreurCredit'));
    if (rep.status === 429 || rep.status === 529 || rep.status >= 500) throw new ErreurFacture(t('erreurOccupe'));
    throw new ErreurFacture(t('erreurAutre', message));
  }
  if (corps.stop_reason === 'refusal' || corps.stop_reason === 'max_tokens') throw new ErreurFacture(t('erreurLecture'));
  const texte = (corps.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
  try {
    return JSON.parse(texte);
  } catch (e) {
    throw new ErreurFacture(t('erreurLecture'));
  }
}

async function lireFacture(fichiers) {
  facture = { etape: 'lecture', apercus: [] };
  vueFacture();
  try {
    const { blocs, apercus } = await blocsFacture(fichiers);
    facture.apercus = apercus;
    vueFacture();
    const lu = await demanderAClaude(blocs);
    preparerVerification(lu, apercus);
  } catch (e) {
    facture = { etape: 'erreur', erreur: e instanceof ErreurFacture ? e.message : t('erreurLecture'), apercus: facture?.apercus || [] };
  }
  if (location.hash.startsWith('#/facture')) vueFacture();
}

function preparerVerification(lu, apercus) {
  const aujourdhui = new Date().toISOString().slice(0, 10);
  facture = {
    etape: 'verif',
    apercus,
    fournisseur: lu.fournisseur || '',
    date: /^\d{4}-\d{2}-\d{2}$/.test(lu.date) && lu.date <= aujourdhui ? lu.date : aujourdhui,
    devise: DEVISES_FACTURE.includes(lu.devise) ? lu.devise : etat.reglages.devise,
    taux: '',
    tauxNote: '',
    total: nombre(lu.total),
    frais: nombre(lu.frais),
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
        nom: l.nom || l.description || '',
        quantite: nombre(l.quantite) || '',
        prix: nombre(l.prix) || '',
      };
    }),
  };
  majTauxFacture();
}

// --- Écran de vérification ---

function vueFacture() {
  const retour = `<div class="entete-fiche"><a class="btn small" href="#/stock">${t('retourStock')}</a></div>`;
  if (!cleApi()) {
    app.innerHTML = `${retour}<h2>${t('factureTitre')}</h2>
      <div class="card"><p style="margin-top:0">${t('cleManquante')}</p>${champCleHtml()}</div>`;
    return;
  }
  if (!facture || facture.etape === 'choix') {
    app.innerHTML = `${retour}<h2>${t('factureTitre')}</h2>
      <div class="card"><p style="margin-top:0">${t('factureAide')}</p>
        <div class="actions"><button class="primary" data-action="choisir-facture">${t('choisirFacture')}</button></div>
        <p class="muted">${t('plusieursPages')}</p>
        <input type="file" id="fichier-facture" accept="image/*,application/pdf" multiple hidden>
      </div>`;
    document.getElementById('fichier-facture').addEventListener('change', ev => {
      const fichiers = [...ev.target.files];
      if (fichiers.length) lireFacture(fichiers);
    });
    return;
  }
  if (facture.etape === 'lecture') {
    app.innerHTML = `${retour}<h2>${t('factureTitre')}</h2>
      <div class="card"><p style="margin-top:0" class="attente">${t('lectureEnCours')}</p>${apercusHtml()}</div>`;
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
    </div>
    <p class="muted">${t('lignesLues', f.lignes.length)}</p>
    ${f.lignes.map((l, i) => {
      const articles = etat.stock.filter(a => a.type === l.type).sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));
      return `<div class="card ligne-facture ${l.inclure ? '' : 'exclue'}">
        <label class="coche"><input type="checkbox" data-fl="inclure" data-i="${i}" ${l.inclure ? 'checked' : ''}> ${t('inclure')}</label>
        <p class="lu"><span class="muted">${t('lu')} :</span> ${esc(l.description)}${l.detail ? ` <span class="muted">(${esc(l.detail)})</span>` : ''}</p>
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
          <input id="fl-nom-${i}" data-fl="nom" data-i="${i}" value="${esc(l.nom)}">`}
        <div class="grid2">
          <div><label for="fl-qte-${i}">${t('quantiteStock', unite(l.type))}</label>
            <input id="fl-qte-${i}" data-fl="quantite" data-i="${i}" inputmode="decimal" value="${esc(l.quantite)}"></div>
          <div><label for="fl-prix-${i}">${t('prixLigne', f.devise)}</label>
            <input id="fl-prix-${i}" data-fl="prix" data-i="${i}" inputmode="decimal" value="${esc(l.prix)}"></div>
        </div>
      </div>`;
    }).join('')}
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
  if (!liste.length) return '';
  return `<div class="apercus-facture">${liste.map(a => a.image
    ? `<img src="${a.image}" alt="">`
    : `<span class="pastille">PDF · ${esc(a.pdf)}</span>`).join('')}</div>`;
}

function montantFacture(x, devise = facture.devise) {
  return x.toLocaleString(locale(), { style: 'currency', currency: devise });
}

function majResumeFacture() {
  const zone = document.getElementById('resume-facture');
  if (!zone) return;
  const f = facture;
  const cochees = f.lignes.filter(l => l.inclure);
  const somme = f.lignes.reduce((s, l) => s + nombre(l.prix), 0);
  const calcule = somme + nombre(f.frais);
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
  if (!f || f.etape !== 'verif') return false;
  if (el.dataset.f) {
    f[el.dataset.f] = el.value;
    if (el.dataset.f === 'taux') f.tauxNote = '';
    if (el.dataset.f === 'devise' || el.dataset.f === 'date') { f.taux = ''; majTauxFacture(); }
    if (el.dataset.f === 'devise') vueFacture(); else majResumeFacture();
    return true;
  }
  if (el.dataset.fl) {
    const l = f.lignes[el.dataset.i];
    const champ = el.dataset.fl;
    l[champ] = champ === 'inclure' ? el.checked : el.value;
    if (champ === 'type') l.cible = articleNomme(l.type, l.nom)?.id || '';
    if (champ === 'cible' && l.cible) l.nom = articleParId(l.cible)?.nom || l.nom;
    if (champ === 'type' || champ === 'cible') { vueFacture(); return true; }
    if (champ === 'inclure') el.closest('.ligne-facture').classList.toggle('exclue', !el.checked);
    majResumeFacture();
    return true;
  }
  return false;
}

// --- Réglages : la clé API ---

function champCleHtml() {
  const presente = !!cleApi();
  return `<p class="muted">${t('cleAide')} <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener">console.anthropic.com</a></p>
    ${presente ? `<p>${t('cleOk')}</p>
      <div class="actions"><button class="danger" data-action="supprimer-cle">${t('supprimerCle')}</button></div>`
    : `<label for="cle-api">${t('cleApi')}</label>
      <input id="cle-api" type="password" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="sk-ant-…">
      <div class="actions"><button class="primary" data-action="enregistrer-cle">${t('enregistrerCle')}</button></div>`}`;
}

function reglagesFactureHtml() {
  return `<div class="card"><h3 style="margin-top:0">${t('reglagesFacture')}</h3>${champCleHtml()}</div>`;
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
    case 'valider-facture':
      validerFacture();
      break;
    case 'abandonner-facture':
      if (!confirm(t('abandonnerFacture'))) return;
      facture = null;
      aller('#/stock');
      break;
    case 'enregistrer-cle': {
      const cle = document.getElementById('cle-api').value.trim();
      if (!cle.startsWith('sk-ant-')) { toast(t('cleInvalide')); return; }
      try { localStorage.setItem(CLE_API, cle); } catch (e) { return; }
      toast(t('cleEnregistree'));
      route();
      break;
    }
    case 'supprimer-cle':
      try { localStorage.removeItem(CLE_API); } catch (e) { /* rien */ }
      toast(t('cleSupprimee'));
      route();
      break;
  }
});

app.addEventListener('input', ev => { lireChampFacture(ev.target); });

app.addEventListener('change', ev => { if (ev.target.type === 'checkbox') lireChampFacture(ev.target); });
