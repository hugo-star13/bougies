'use strict';

// ---------- Données ----------

const CLE = 'bougies-donnees-v1';
const RAPPEL_SAUVEGARDE_JOURS = 14;

function etatVide() {
  return { version: 1, formules: [], contenants: [], derniereSauvegarde: null, ui: {} };
}

function charger() {
  try {
    const brut = localStorage.getItem(CLE);
    if (!brut) return etatVide();
    return Object.assign(etatVide(), JSON.parse(brut));
  } catch (e) {
    return etatVide();
  }
}

let etat = charger();

function enregistrer() {
  try {
    localStorage.setItem(CLE, JSON.stringify(etat));
  } catch (e) {
    toast("Impossible d'enregistrer sur cet appareil");
  }
}

function nouvelId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function nombre(v) {
  const n = parseFloat(String(v ?? '').replace(',', '.').replace(/\s/g, ''));
  return Number.isFinite(n) ? n : 0;
}

function grammes(x) {
  return x.toLocaleString('fr-FR', { maximumFractionDigits: 1, minimumFractionDigits: x < 100 ? 1 : 0 }) + ' g';
}

function pourcent(x) {
  return x.toLocaleString('fr-FR', { maximumFractionDigits: 2 }) + ' %';
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

// mode "cire" : les % s'appliquent au poids de cire (parfum = cire × %).
// mode "total" : les % s'appliquent au poids total versé dans le contenant.
function calculer(formule, poidsUnitaire, nombreBougies) {
  const poidsTotal = poidsUnitaire * nombreBougies;
  const lignes = [
    ...formule.parfums.map(l => ({ ...l, type: 'Parfum' })),
    ...formule.additifs.map(l => ({ ...l, type: 'Additif' })),
  ].filter(l => l.nom || l.pct);
  const somme = lignes.reduce((s, l) => s + nombre(l.pct), 0) / 100;

  let cire;
  if (formule.mode === 'total') {
    lignes.forEach(l => { l.g = poidsTotal * nombre(l.pct) / 100; });
    cire = poidsTotal - lignes.reduce((s, l) => s + l.g, 0);
  } else {
    cire = poidsTotal / (1 + somme);
    lignes.forEach(l => { l.g = cire * nombre(l.pct) / 100; });
  }
  return { cire, lignes, poidsTotal, invalide: cire <= 0 };
}

// ---------- Rendu ----------

const app = document.getElementById('app');
let brouillon = null; // formule ou contenant en cours d'édition

function route() {
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
  return `<div class="card"><span class="warn">${derniere ? `Dernière sauvegarde il y a ${Math.floor(jours)} jours.` : 'Aucune sauvegarde pour l’instant.'}</span>
    Pensez à sauvegarder vos formules. <a href="#/reglages">Sauvegarder</a></div>`;
}

function vueCalcul() {
  if (!etat.formules.length) {
    app.innerHTML = `<div class="empty"><h2>Bienvenue</h2>
      <p>Commencez par créer vos contenants (tailles de pots), puis vos formules.</p>
      <div class="actions" style="justify-content:center">
        <a class="btn" href="#/contenant/nouveau">Ajouter un contenant</a>
        <a class="btn primary" href="#/formule/nouveau">Créer une formule</a>
      </div></div>`;
    return;
  }
  const ui = etat.ui;
  if (!formuleParId(ui.formule)) ui.formule = formulesTriees()[0].id;
  if (ui.contenant !== 'perso' && !contenantParId(ui.contenant)) ui.contenant = etat.contenants[0]?.id || 'perso';
  ui.nombre = ui.nombre || 1;

  app.innerHTML = `${bandeauSauvegarde()}
    <div class="card">
      <label for="c-formule">Formule</label>
      <select id="c-formule" data-ui="formule">
        ${formulesTriees().map(f => `<option value="${f.id}" ${f.id === ui.formule ? 'selected' : ''}>${f.favori ? '★ ' : ''}${esc(f.nom)}</option>`).join('')}
      </select>
      <div class="grid2">
        <div>
          <label for="c-contenant">Contenant</label>
          <select id="c-contenant" data-ui="contenant">
            ${etat.contenants.map(c => `<option value="${c.id}" ${c.id === ui.contenant ? 'selected' : ''}>${esc(c.nom)} (${grammes(nombre(c.poids))})</option>`).join('')}
            <option value="perso" ${ui.contenant === 'perso' ? 'selected' : ''}>Autre poids…</option>
          </select>
        </div>
        <div>
          <label for="c-nombre">Nombre de bougies</label>
          <div class="stepper">
            <button data-action="moins" aria-label="Une de moins">−</button>
            <input id="c-nombre" data-ui="nombre" inputmode="numeric" value="${ui.nombre}">
            <button data-action="plus" aria-label="Une de plus">+</button>
          </div>
        </div>
      </div>
      ${ui.contenant === 'perso' ? `<label for="c-poids">Poids total par bougie (g)</label>
        <input id="c-poids" data-ui="poidsPerso" inputmode="decimal" value="${esc(ui.poidsPerso || '')}" placeholder="ex. 200">` : ''}
    </div>
    <div class="card" id="resultat"></div>`;
  afficherResultat();
}

function afficherResultat() {
  const zone = document.getElementById('resultat');
  if (!zone) return;
  const ui = etat.ui;
  const f = formuleParId(ui.formule);
  const c = contenantParId(ui.contenant);
  const poids = ui.contenant === 'perso' ? nombre(ui.poidsPerso) : nombre(c?.poids);
  const n = Math.max(1, Math.round(nombre(ui.nombre)));
  if (!poids) { zone.innerHTML = '<p class="muted">Indiquez un poids pour voir les quantités.</p>'; return; }

  const r = calculer(f, poids, n);
  const meche = c?.meche || f.meche;
  zone.innerHTML = `
    <h3 style="margin-top:0">${esc(f.nom)} — ${n} × ${grammes(poids)}</h3>
    ${r.invalide ? '<p class="warn">Les pourcentages dépassent 100 % du poids : vérifiez la formule.</p>' : ''}
    <table class="result">
      <tr><td>${esc(f.cire || 'Cire')}</td><td class="num">${grammes(r.cire)}</td></tr>
      ${r.lignes.map(l => `<tr><td>${esc(l.nom || l.type)}<span class="pct">${pourcent(nombre(l.pct))}</span></td><td class="num">${grammes(l.g)}</td></tr>`).join('')}
      <tr class="total"><td>Total</td><td class="num">${grammes(r.poidsTotal)}</td></tr>
    </table>
    ${meche ? `<p><strong>Mèche :</strong> ${esc(meche)}</p>` : ''}
    ${f.tempAjout ? `<p><strong>Ajout du parfum :</strong> ${esc(f.tempAjout)} °C</p>` : ''}
    ${f.notes ? `<p class="muted" style="white-space:pre-wrap">${esc(f.notes)}</p>` : ''}
    <p class="muted">% calculés sur le ${f.mode === 'total' ? 'poids total' : 'poids de cire'}.</p>`;
}

// --- Formules ---

function vueFormules(filtre = '') {
  const q = filtre.trim().toLowerCase();
  const liste = formulesTriees().filter(f => !q || [f.nom, f.cire, ...f.parfums.map(p => p.nom)].join(' ').toLowerCase().includes(q));
  app.innerHTML = `<h2>Formules</h2>
    <div class="actions" style="margin:0 0 16px">
      <input id="recherche" type="search" placeholder="Rechercher un nom ou une senteur" value="${esc(filtre)}" style="flex:1">
      <a class="btn primary" href="#/formule/nouveau">+ Nouvelle</a>
    </div>
    ${liste.length ? `<ul class="list">${liste.map(f => `
      <li>
        <button class="star" data-action="favori" data-id="${f.id}" aria-label="Favori">${f.favori ? '★' : '☆'}</button>
        <a class="row" href="#/formule/${f.id}"><div class="grow">
          <div class="title">${esc(f.nom)}</div>
          <div class="sub">${esc([f.cire, ...f.parfums.map(p => p.nom)].filter(Boolean).join(' · '))}</div>
        </div></a>
        <button class="small" data-action="calculer" data-id="${f.id}">Calculer</button>
      </li>`).join('')}</ul>`
      : `<div class="empty">${etat.formules.length ? 'Aucune formule ne correspond.' : 'Aucune formule pour l’instant.'}</div>`}`;
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
  etat.formules.forEach(f => [...f.parfums, ...f.additifs].forEach(l => l.nom && noms.add(l.nom)));
  const cires = new Set(etat.formules.map(f => f.cire).filter(Boolean));
  return `<datalist id="dl-ingredients">${[...noms].map(n => `<option value="${esc(n)}">`).join('')}</datalist>
    <datalist id="dl-cires">${[...cires].map(n => `<option value="${esc(n)}">`).join('')}</datalist>`;
}

function lignesHtml(cle, lignes) {
  return lignes.map((l, i) => `<div class="line">
      <input data-ligne="${cle}" data-i="${i}" data-champ="nom" list="dl-ingredients" placeholder="Nom" value="${esc(l.nom)}">
      <input data-ligne="${cle}" data-i="${i}" data-champ="pct" inputmode="decimal" placeholder="%" value="${esc(l.pct)}">
      <button data-action="retirer" data-cle="${cle}" data-i="${i}" aria-label="Retirer">✕</button>
    </div>`).join('');
}

function vueFormule(id) {
  if (!brouillon || brouillon.id !== id) {
    const existante = formuleParId(id);
    brouillon = existante ? structuredClone(existante) : {
      id: nouvelId(), nom: '', cire: '', meche: '', tempAjout: '', notes: '', mode: 'cire', favori: false,
      parfums: [{ nom: '', pct: '' }], additifs: [],
    };
    brouillon.estNouvelle = !existante;
    if (!existante) history.replaceState(null, '', '#/formule/' + brouillon.id);
  }
  const f = brouillon;
  app.innerHTML = `${suggestions()}
    <h2>${f.estNouvelle ? 'Nouvelle formule' : esc(f.nom)}</h2>
    <div class="card">
      <label for="f-nom">Nom</label>
      <input id="f-nom" data-champ="nom" value="${esc(f.nom)}" placeholder="ex. Figue d'automne">
      <div class="grid2">
        <div><label for="f-cire">Cire</label>
          <input id="f-cire" data-champ="cire" list="dl-cires" value="${esc(f.cire)}" placeholder="ex. Soja C3"></div>
        <div><label for="f-meche">Mèche par défaut</label>
          <input id="f-meche" data-champ="meche" value="${esc(f.meche)}" placeholder="ex. ECO 6"></div>
      </div>
      <div class="grid2">
        <div><label for="f-mode">Les % sont calculés sur</label>
          <select id="f-mode" data-champ="mode">
            <option value="cire" ${f.mode !== 'total' ? 'selected' : ''}>le poids de cire</option>
            <option value="total" ${f.mode === 'total' ? 'selected' : ''}>le poids total</option>
          </select></div>
        <div><label for="f-temp">Température d'ajout du parfum (°C)</label>
          <input id="f-temp" data-champ="tempAjout" inputmode="decimal" value="${esc(f.tempAjout)}" placeholder="ex. 70"></div>
      </div>
    </div>
    <div class="card lines">
      <h3 style="margin-top:0">Parfums</h3>
      ${lignesHtml('parfums', f.parfums)}
      <button class="small" data-action="ajouter" data-cle="parfums">+ Parfum</button>
      <h3>Additifs</h3>
      ${lignesHtml('additifs', f.additifs)}
      <button class="small" data-action="ajouter" data-cle="additifs">+ Additif</button>
    </div>
    <div class="card">
      <label for="f-notes" style="margin-top:0">Notes</label>
      <textarea id="f-notes" data-champ="notes" placeholder="Étapes, astuces, fournisseurs…">${esc(f.notes)}</textarea>
    </div>
    <div class="actions">
      <button class="primary" data-action="enregistrer-formule">Enregistrer</button>
      ${f.estNouvelle ? '' : `<button data-action="dupliquer-formule">Dupliquer</button>
        <button class="danger" data-action="supprimer-formule">Supprimer</button>`}
      <a class="btn" href="#/formules">Annuler</a>
    </div>`;
}

function lireFormulaire() {
  if (!brouillon) return;
  app.querySelectorAll('[data-champ]:not([data-ligne])').forEach(el => { brouillon[el.dataset.champ] = el.value.trim(); });
  app.querySelectorAll('[data-ligne]').forEach(el => { brouillon[el.dataset.ligne][el.dataset.i][el.dataset.champ] = el.value.trim(); });
}

// --- Contenants ---

function vueContenants() {
  const liste = [...etat.contenants].sort((a, b) => nombre(a.poids) - nombre(b.poids));
  app.innerHTML = `<h2>Contenants</h2>
    <p class="muted">Vos tailles de pots, avec le poids total (cire + parfum) que vous versez dedans.</p>
    <div class="actions" style="margin:0 0 16px"><a class="btn primary" href="#/contenant/nouveau">+ Nouveau contenant</a></div>
    ${liste.length ? `<ul class="list">${liste.map(c => `<li><a class="row" href="#/contenant/${c.id}"><div class="grow">
        <div class="title">${esc(c.nom)}</div>
        <div class="sub">${grammes(nombre(c.poids))}${c.meche ? ' · mèche ' + esc(c.meche) : ''}</div>
      </div></a></li>`).join('')}</ul>`
      : '<div class="empty">Aucun contenant pour l’instant.</div>'}`;
}

function vueContenant(id) {
  if (!brouillon || brouillon.id !== id) {
    const existant = contenantParId(id);
    brouillon = existant ? structuredClone(existant) : { id: nouvelId(), nom: '', poids: '', meche: '', notes: '' };
    brouillon.estNouvelle = !existant;
    if (!existant) history.replaceState(null, '', '#/contenant/' + brouillon.id);
  }
  const c = brouillon;
  app.innerHTML = `<h2>${c.estNouvelle ? 'Nouveau contenant' : esc(c.nom)}</h2>
    <div class="card">
      <label for="k-nom">Nom</label>
      <input id="k-nom" data-champ="nom" value="${esc(c.nom)}" placeholder="ex. Pot ambré moyen">
      <div class="grid2">
        <div><label for="k-poids">Poids total versé (g)</label>
          <input id="k-poids" data-champ="poids" inputmode="decimal" value="${esc(c.poids)}" placeholder="ex. 180"></div>
        <div><label for="k-meche">Mèche conseillée</label>
          <input id="k-meche" data-champ="meche" value="${esc(c.meche)}" placeholder="ex. ECO 6"></div>
      </div>
      <label for="k-notes">Notes</label>
      <textarea id="k-notes" data-champ="notes" placeholder="Fournisseur, dimensions…">${esc(c.notes)}</textarea>
    </div>
    <div class="actions">
      <button class="primary" data-action="enregistrer-contenant">Enregistrer</button>
      ${c.estNouvelle ? '' : '<button class="danger" data-action="supprimer-contenant">Supprimer</button>'}
      <a class="btn" href="#/contenants">Annuler</a>
    </div>`;
}

// --- Sauvegarde ---

function vueReglages() {
  const d = etat.derniereSauvegarde ? new Date(etat.derniereSauvegarde).toLocaleDateString('fr-FR', { dateStyle: 'long' }) : 'jamais';
  app.innerHTML = `<h2>Sauvegarde</h2>
    <div class="card">
      <p>Les formules sont enregistrées <strong>uniquement sur cet iPad</strong>. Si l'app est supprimée de l'écran d'accueil ou si les données de Safari sont effacées, elles disparaissent.
      Sauvegardez régulièrement le fichier dans Fichiers ou iCloud Drive.</p>
      <p class="muted">Dernière sauvegarde : ${d} · ${etat.formules.length} formule(s), ${etat.contenants.length} contenant(s)</p>
      <div class="actions">
        <button class="primary" data-action="exporter">Sauvegarder mes données</button>
        <button data-action="importer">Restaurer une sauvegarde</button>
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
    toast('Sauvegarde créée');
  } catch (e) {
    if (e.name !== 'AbortError') toast('La sauvegarde a échoué');
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
      if (!confirm(`Remplacer les données actuelles par cette sauvegarde (${donnees.formules.length} formules, ${donnees.contenants.length} contenants) ?`)) return;
      etat = Object.assign(etatVide(), donnees, { ui: {} });
      enregistrer();
      toast('Sauvegarde restaurée');
      aller('#/calcul');
    } catch (e) {
      toast("Ce fichier n'est pas une sauvegarde valide");
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
    case 'moins':
      etat.ui.nombre = Math.max(1, Math.round(nombre(etat.ui.nombre)) + (action === 'plus' ? 1 : -1));
      document.getElementById('c-nombre').value = etat.ui.nombre;
      enregistrer();
      afficherResultat();
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
      if (!brouillon.nom) { toast('Donnez un nom à la formule'); return; }
      const { estNouvelle, ...f } = brouillon;
      f.parfums = f.parfums.filter(l => l.nom || l.pct);
      f.additifs = f.additifs.filter(l => l.nom || l.pct);
      const idx = etat.formules.findIndex(x => x.id === f.id);
      if (idx >= 0) etat.formules[idx] = f; else etat.formules.push(f);
      enregistrer();
      brouillon = null;
      toast('Formule enregistrée');
      aller('#/formules');
      break;
    }
    case 'dupliquer-formule': {
      lireFormulaire();
      const { estNouvelle, ...f } = brouillon;
      const copie = { ...structuredClone(f), id: nouvelId(), nom: f.nom + ' (copie)', favori: false };
      etat.formules.push(copie);
      enregistrer();
      brouillon = null;
      toast('Formule dupliquée');
      aller('#/formule/' + copie.id);
      break;
    }
    case 'supprimer-formule':
      if (!confirm(`Supprimer la formule « ${brouillon.nom} » ?`)) return;
      etat.formules = etat.formules.filter(f => f.id !== brouillon.id);
      enregistrer();
      brouillon = null;
      aller('#/formules');
      break;
    case 'enregistrer-contenant': {
      lireFormulaire();
      if (!brouillon.nom || !nombre(brouillon.poids)) { toast('Indiquez un nom et un poids'); return; }
      const { estNouvelle, ...c } = brouillon;
      const idx = etat.contenants.findIndex(x => x.id === c.id);
      if (idx >= 0) etat.contenants[idx] = c; else etat.contenants.push(c);
      enregistrer();
      brouillon = null;
      toast('Contenant enregistré');
      aller('#/contenants');
      break;
    }
    case 'supprimer-contenant':
      if (!confirm(`Supprimer le contenant « ${brouillon.nom} » ?`)) return;
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

// Champs de l'écran Calculer : on recalcule à chaque frappe.
app.addEventListener('input', ev => {
  const cle = ev.target.dataset.ui;
  if (!cle) return;
  etat.ui[cle] = ev.target.value;
  enregistrer();
  if (cle === 'contenant') vueCalcul(); else afficherResultat();
});

let minuteurToast;
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(minuteurToast);
  minuteurToast = setTimeout(() => t.classList.remove('show'), 2200);
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
