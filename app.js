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
    nouveauContenant: 'Nouveau contenant', ajouterContenantBtn: '+ Nouveau pot', aucunContenant: 'Aucun contenant pour l’instant.',
    exNomContenant: 'ex. Petit pot', poidsVerse: 'Poids total versé (g)', exPoids: 'ex. 135',
    volumeEau: 'Contenance en eau (ml), optionnel', convertir: f => `Poids = ml × ${f}`,
    mecheConseillee: 'Mèche conseillée', exMeche: 'ex. ECO 6', exNotesContenant: 'Fournisseur, dimensions…',
    contenantEnregistre: 'Contenant enregistré', nomEtPoids: 'Indiquez un nom et un poids',
    supprimerContenant: n => `Supprimer le contenant « ${n} » ?`,
    reglages: 'Réglages', langue: 'Langue',
    versionApp: v => `Version V${v}`, voirNouveautes: 'Voir les nouveautés', nouveautes: 'Nouveautés', retourReglages: '← Réglages',
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
    modifier: 'Modifier', retour: '‹ Formules', photos: 'Photos', ajouterPhotos: '+ Ajouter des photos',
    aucunePhoto: 'Pas encore de photo.', supprimerPhoto: 'Supprimer cette photo ?', photoAjoutee: n => `${n} photo(s) ajoutée(s)`,
    photoImpossible: 'Impossible d’ajouter cette photo', fermer: 'Fermer',
    photosAide: 'Les photos se gèrent depuis la fiche de la recette, une fois enregistrée.',
    aPeser: 'À peser', coutEstime: 'Coût estimé', notesTitre: 'Notes', favoris: 'Favoris', toutesLesAutres: 'Toutes les autres',
    aRacheter: 'À racheter', calculTitre: 'Calcul', venteCourt: 'vente',
    tEnStock: 'En stock', tBougiesPretes: 'bougies prêtes', tValeur: 'Valeur du stock', tAuCout: 'au coût de revient',
    tVendues: 'Vendues', tDepuisDebut: 'depuis le début', tEncaisse: 'Encaissé', tTotalVentes: 'total des ventes',
    tVentesRecettes: 'ventes et recettes', tAchatsDepenses: 'achats et dépenses', tSoldeNeg: 'dépensé en plus des ventes', tSoldePos: 'gagné en plus des dépenses',
    autreRecette: '+ Autre recette dans la même fournée', retirerRecette: 'Retirer cette recette',
    fourneeDe: n => `Fournée de ${n} recettes`, fabricationDe: n => `${n} recettes`, fondreEnUneFois: 'à fondre en une fois', saPart: 'sa part',
    enUneFoisPour: l => `en une fois, pour ${l}`, uneCasserole: 'Une casserole par cire.',
    etPeserParfums: 'Pendant que la cire fond : peser les parfums, un verre par recette',
    etPartager: 'Partager la cire fondue : un pichet par recette',
    phaseEnsemble: 'Ensemble', phaseFinir: 'Pour finir', recettesRangees: n => `${n} bougie(s) ajoutée(s) à Mes bougies, notes rangées dans chaque recette`,
    fabriquer: '▶ Lancer la fabrication', fabrication: 'Fabrication', reprendre: 'Reprendre la fabrication',
    enCours: n => `Fabrication en cours : ${n}`, etapesFaites: (a, b) => `${a} / ${b} étapes`,
    rappelProchaineFois: 'Rappel de la dernière fois',
    etPot: tp => `Préchauffer les pots à ${tp} °C (pas plus)`,
    etPeserCire: 'Peser la cire', etFondre: tp => `Faire fondre la cire à ${tp} °C`,
    etCouleur: tp => `Ajouter la couleur à ${tp} °C`,
    etPeserParfum: 'Peser les parfums (préparer le mélange)',
    etParfum: tp => `Ajouter le parfum à ${tp} °C et mélanger doucement 2 minutes`,
    etRepartir: 'Répartir le mélange de parfums par couche',
    etCouler: tp => `Couler à ${tp} °C`, etCoulerDetail: 'Poids à verser dans chaque pot :',
    etFinir: 'Laisser refroidir, puis décorer',
    notesFournee: 'Comment s’est passée cette fournée ?', exNotesFournee: 'Ce qui a marché, ce qu’il faut changer…',
    terminer: 'Terminer et enregistrer', abandonner: 'Abandonner',
    abandonnerConfirmer: 'Abandonner cette fabrication ?', fourneeEnregistree: 'Fournée notée dans la recette',
    fournee: (d, n) => `${d}, ${n} bougie(s)`,
    temperatures: 'Températures de fabrication (°C)',
    tPot: 'Préchauffer les pots', tFonte: 'Fonte de la cire', tCouleur: 'Ajout de la couleur', tParfum: 'Ajout du parfum', tCoulage: 'Coulage',
    pourCouche: n => `couche ${n}`,
    fabricationRecette: 'Fabrication', tempsAide: 'Laissez vide pour utiliser les températures par défaut (Réglages).',
    chargerRecettes: 'Charger mes recettes', chargerAide: 'Ajoute les recettes et les pots intégrés à l’app (protégés par un mot de passe). Rien n’est remplacé.',
    demanderMdp: 'Mot de passe des recettes :', mdpFaux: 'Mot de passe incorrect', recettesChargees: (f, c) => `${f} recette(s) et ${c} pot(s) ajoutés`,
    etapesPerso: 'Étapes particulières', exEtapesPerso: 'Une étape par ligne, ex. « Fouetter la cire à 45 °C pour la couche du dessus »',
    navStock: 'Stock', choisir: '— Choisir —', nouvelleSenteur: '+ Nouvelle senteur…', nouvelleCire: '+ Nouvelle cire…',
    nomSenteur: 'Nom de la nouvelle senteur :', nomCire: 'Nom de la nouvelle cire :',
    stock: 'Stock', stockAide: 'Vos achats de cire, senteurs, couleurs, pots et mèches. Le prix moyen sert à estimer le coût de chaque bougie.',
    nouvelArticle: '+ Nouvel article', depuisRecettes: 'Créer depuis mes recettes', aucunArticle: 'Aucun article pour l’instant. Ajoutez vos achats de cire, senteurs, pots et mèches, ou créez-les d’un coup depuis vos recettes.',
    articlesCrees: n => `${n} article(s) ajouté(s)`,
    types: { cire: 'Cires', parfum: 'Senteurs', couleur: 'Couleurs', pot: 'Pots', meche: 'Mèches', autre: 'Autres' },
    type: 'Type', typeNom: { cire: 'Cire', parfum: 'Senteur', couleur: 'Couleur', pot: 'Pot', meche: 'Mèche', autre: 'Autre' },
    unites: { g: 'g', ml: 'ml', u: 'pièce(s)' },
    nouvelArticleTitre: 'Nouvel article', enStock: 'En stock', potLie: 'Contenant correspondant', aucun: '(aucun)',
    exNomArticle: 'ex. Cire de soja, Vanille Bourbon…', exNotesArticle: 'Fournisseur, référence…',
    achats: 'Achats', nouvelAchat: 'Nouvel achat', date: 'Date', quantiteAchetee: u => `Quantité achetée (${u})`, prixPaye: 'Prix payé (€)',
    ajouterAchat: '+ Ajouter l’achat', achatAjoute: 'Achat ajouté au stock', quantiteEtPrix: 'Indiquez une quantité et un prix',
    aucunAchat: 'Aucun achat noté.', prixMoyen: 'Prix moyen', epuise: 'épuisé', nommerArticle: 'Donnez un nom à l’article',
    articleEnregistre: 'Article enregistré', supprimerArticle: n => `Supprimer « ${n} » du stock ?`, supprimerAchat: 'Supprimer cet achat ? (le stock n’est pas modifié)',
    retourStock: '‹ Stock',
    cout: 'Coût des consommables (estimation)', parBougie: 'par bougie', prixInconnu: 'prix ?', pasEnStock: 'pas dans le stock',
    stockInsuffisant: 'stock insuffisant', coutAide: 'Prix moyen de vos achats. Les couleurs ne sont pas comptées.',
    coutManquant: 'Ajoutez les achats manquants dans Stock pour un coût complet.',
    densiteParfum: 'Densité des senteurs (g par ml)', stockMisAJour: 'Stock mis à jour',
    potOuMoule: 'Pot ou moule', pots: 'Pots', moules: 'Moules', genre: 'Type', genrePot: 'Pot', genreMoule: 'Moule',
    contenantsAide2: 'Vos pots et vos moules, avec le poids total (cire + parfum + colorant) versé dans chacun.',
    nouveauMoule: 'Nouveau moule', photosContenant: 'Les photos s’ajoutent une fois le pot ou le moule enregistré.',
    colorants: 'Colorants', colorantsAide: 'Part de chaque colorant en % du poids total de la bougie (ex. 0,5).',
    ajouterColorant: '+ Colorant', nouveauColorant: '+ Nouveau colorant…', nomColorant: 'Nom du nouveau colorant :',
    coutAide2: 'Prix moyen de vos achats. Les moules ne sont pas comptés (ils resservent).',
    navBougies: 'Mes bougies', mesBougies: 'Mes bougies',
    mesBougiesAide: 'Les bougies terminées en mode fabrication arrivent ici, rangées par recette et par pot ou moule.',
    aucuneBougie: 'Aucune bougie terminée pour l’instant. Elles s’ajoutent quand vous terminez une fabrication.',
    enStockN: n => `${n} en stock`, coutUnite: 'coût', prixVente: 'Prix de vente (€)', vendu: 'Vendu',
    demanderPrixVente: 'Prix de vente (€) :', venteNotee: 'Vente notée', plusEnStock: 'Plus aucune en stock',
    resumeBougies: (n, v) => `${n} bougie(s) en stock · valeur (coût) ${v}`,
    resumeVentes: (n, ca) => `${n} vendue(s) · ${ca} encaissés`,
    fabriquees: 'Fabriquées', ventes: 'Ventes', aucuneVente: 'Pas encore de vente.',
    bougiesAjoutees: n => `${n} bougie(s) ajoutée(s) à Mes bougies`, supprimerBougie: n => `Supprimer « ${n} » de Mes bougies ?`,
    retourBougies: '‹ Mes bougies', bougieEnregistree: 'Enregistré', annulerVente: 'Annuler cette vente ? (la bougie revient en stock)',
    navAlertes: 'Alertes', alertes: 'Alertes de stock', seuil: u => `M’alerter en dessous de (${u})`,
    aucuneAlerte: 'Rien à racheter pour l’instant.', alertesAide: 'Articles passés sous leur seuil d’alerte. Le seuil se règle dans chaque article du stock.',
    reste: q => `il reste ${q}`, racheter: 'Noter un achat', stockBas: n => `${n} article(s) à racheter : voir Stock`,
    navRapport: 'Rapport', rapport: 'Rapport', rapportAide: 'Ce qui entre (ventes) et ce qui sort (achats du stock et autres dépenses).',
    annee: 'Année', entrees: 'Entrées', sorties: 'Sorties', solde: 'Solde', mois: 'Mois', mouvements: 'Mouvements',
    aucunMouvement: 'Aucun mouvement sur cette année.', autreMouvement: 'Autre dépense ou recette',
    sortie: 'Dépense', entree: 'Recette', libelle: 'Libellé', exLibelle: 'ex. Frais de marché, étiquettes…', montant: 'Montant (€)',
    ajouterMouvement: '+ Ajouter', mouvementAjoute: 'Mouvement ajouté', libelleMontant: 'Indiquez un libellé et un montant',
    supprimerMouvement: 'Supprimer ce mouvement ?', exporterCsv: 'Exporter pour Excel', exportCree: 'Fichier créé',
    achatDe: n => `Achat : ${n}`, venteDe: n => `Vente : ${n}`,
    devise: 'Devise', paiement: 'Paiement',
    taux: (de, vers) => `Taux ${de} → ${vers}`, tauxDu: d => `cours du ${d}`, tauxHorsLigne: 'pas de connexion : dernier taux connu, à vérifier',
    tauxInconnu: 'pas de connexion : saisissez le taux', tauxManquant: 'Indiquez le taux de change', soit: 'soit', origine: 'Montant d’origine', modes: { especes: 'Espèces', carte: 'Carte', virement: 'Virement', cheque: 'Chèque', autre: 'Autre' },
    venteTitre: n => `Vente : ${n}`, quantiteVendue: 'Quantité vendue', prixUnBougie: 'Prix par bougie (€)', totalVente: (n, m) => `${n} bougie(s) · total ${m}`, valider: 'Valider',
    idees: 'Que faire avec mon stock ?', ideesCourt: 'Idées selon mon stock',
    ideesAide: 'Les recettes possibles avec les senteurs en stock (la cire, les pots et les mèches ne sont pas comptés). Touchez une taille pour la calculer.',
    ideesAvec: 'Avec la senteur', toutes: 'Toutes',
    faisables: 'Faisables maintenant', presque: 'Il manque peu', senteursLibres: 'Senteurs en stock sans recette',
    senteursLibresAide: 'Une idée pour une nouvelle recette ?',
    maxBougies: n => `jusqu’à ${n}`, limitePar: n => `Limité par : ${n}`,
    manque: n => `Manque : ${n}`, pasAssez: n => `${n} (pas assez)`,
    aucuneIdee: 'Aucune recette n’est faisable avec le stock actuel.',
    ideesSansStock: 'Ajoutez d’abord vos senteurs dans le Stock pour voir les idées.',
    ideesSansContenant: 'Ajoutez vos contenants pour voir combien de bougies sont possibles.',
    nonSuivi: n => `Pas suivi dans le stock : ${n}`,
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
    versionApp: v => `Version V${v}`, voirNouveautes: 'See what’s new', nouveautes: 'What’s new (in French)', retourReglages: '← Settings',
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
    modifier: 'Edit', retour: '‹ Recipes', photos: 'Photos', ajouterPhotos: '+ Add photos',
    aucunePhoto: 'No photos yet.', supprimerPhoto: 'Delete this photo?', photoAjoutee: n => `${n} photo(s) added`,
    photoImpossible: 'Could not add this photo', fermer: 'Close',
    photosAide: 'Photos are managed from the recipe page once it is saved.',
    aPeser: 'To weigh', coutEstime: 'Estimated cost', notesTitre: 'Notes', favoris: 'Favourites', toutesLesAutres: 'All the others',
    aRacheter: 'To restock', calculTitre: 'Calculation', venteCourt: 'sale',
    tEnStock: 'In stock', tBougiesPretes: 'candles ready', tValeur: 'Stock value', tAuCout: 'at cost price',
    tVendues: 'Sold', tDepuisDebut: 'since the start', tEncaisse: 'Received', tTotalVentes: 'total sales',
    tVentesRecettes: 'sales and income', tAchatsDepenses: 'purchases and expenses', tSoldeNeg: 'spent beyond sales', tSoldePos: 'earned beyond expenses',
    autreRecette: '+ Another recipe in the same batch', retirerRecette: 'Remove this recipe',
    fourneeDe: n => `Batch of ${n} recipes`, fabricationDe: n => `${n} recipes`, fondreEnUneFois: 'melt in one go', saPart: 'its share',
    enUneFoisPour: l => `in one go, for ${l}`, uneCasserole: 'One pan per wax.',
    etPeserParfums: 'While the wax melts: weigh the scents, one glass per recipe',
    etPartager: 'Split the melted wax: one jug per recipe',
    phaseEnsemble: 'Together', phaseFinir: 'To finish', recettesRangees: n => `${n} candle(s) added to My candles, notes saved in each recipe`,
    fabriquer: '▶ Start making', fabrication: 'Making', reprendre: 'Resume making',
    enCours: n => `In progress: ${n}`, etapesFaites: (a, b) => `${a} / ${b} steps`,
    rappelProchaineFois: 'Reminder from last time',
    etPot: tp => `Pre-warm the jars to ${tp} °C (not hotter)`,
    etPeserCire: 'Weigh the wax', etFondre: tp => `Melt the wax at ${tp} °C`,
    etCouleur: tp => `Add colour at ${tp} °C`,
    etPeserParfum: 'Weigh the scents (prepare the blend)',
    etParfum: tp => `Add the scent at ${tp} °C and stir gently for 2 minutes`,
    etRepartir: 'Split the scent blend between layers',
    etCouler: tp => `Pour at ${tp} °C`, etCoulerDetail: 'Weight to pour into each jar:',
    etFinir: 'Let it cool, then decorate',
    notesFournee: 'How did this batch go?', exNotesFournee: 'What worked, what to change…',
    terminer: 'Finish and save', abandonner: 'Cancel',
    abandonnerConfirmer: 'Cancel this batch?', fourneeEnregistree: 'Batch noted in the recipe',
    fournee: (d, n) => `${d}, ${n} candle(s)`,
    temperatures: 'Making temperatures (°C)',
    tPot: 'Pre-warm jars', tFonte: 'Melt wax', tCouleur: 'Add colour', tParfum: 'Add scent', tCoulage: 'Pour',
    pourCouche: n => `layer ${n}`,
    fabricationRecette: 'Making', tempsAide: 'Leave empty to use the default temperatures (Settings).',
    chargerRecettes: 'Load my recipes', chargerAide: 'Adds the recipes and jars built into the app (password protected). Nothing is replaced.',
    demanderMdp: 'Recipes password:', mdpFaux: 'Wrong password', recettesChargees: (f, c) => `${f} recipe(s) and ${c} jar(s) added`,
    etapesPerso: 'Extra steps', exEtapesPerso: 'One step per line, e.g. “Whip the wax at 45 °C for the top layer”',
    navStock: 'Stock', choisir: '— Choose —', nouvelleSenteur: '+ New scent…', nouvelleCire: '+ New wax…',
    nomSenteur: 'Name of the new scent:', nomCire: 'Name of the new wax:',
    stock: 'Stock', stockAide: 'Your purchases of wax, scents, colours, jars and wicks. The average price is used to estimate the cost of each candle.',
    nouvelArticle: '+ New item', depuisRecettes: 'Create from my recipes', aucunArticle: 'No items yet. Add your wax, scents, jars and wicks, or create them all at once from your recipes.',
    articlesCrees: n => `${n} item(s) added`,
    types: { cire: 'Waxes', parfum: 'Scents', couleur: 'Colours', pot: 'Jars', meche: 'Wicks', autre: 'Other' },
    type: 'Type', typeNom: { cire: 'Wax', parfum: 'Scent', couleur: 'Colour', pot: 'Jar', meche: 'Wick', autre: 'Other' },
    unites: { g: 'g', ml: 'ml', u: 'unit(s)' },
    nouvelArticleTitre: 'New item', enStock: 'In stock', potLie: 'Matching jar size', aucun: '(none)',
    exNomArticle: 'e.g. Soy wax, Bourbon vanilla…', exNotesArticle: 'Supplier, reference…',
    achats: 'Purchases', nouvelAchat: 'New purchase', date: 'Date', quantiteAchetee: u => `Quantity bought (${u})`, prixPaye: 'Price paid (€)',
    ajouterAchat: '+ Add purchase', achatAjoute: 'Purchase added to stock', quantiteEtPrix: 'Enter a quantity and a price',
    aucunAchat: 'No purchases yet.', prixMoyen: 'Average price', epuise: 'out of stock', nommerArticle: 'Give the item a name',
    articleEnregistre: 'Item saved', supprimerArticle: n => `Remove “${n}” from stock?`, supprimerAchat: 'Delete this purchase? (stock is not changed)',
    retourStock: '‹ Stock',
    cout: 'Cost of materials (estimate)', parBougie: 'per candle', prixInconnu: 'price ?', pasEnStock: 'not in stock',
    stockInsuffisant: 'not enough stock', coutAide: 'Average price of your purchases. Colours are not counted.',
    coutManquant: 'Add the missing purchases in Stock for a complete cost.',
    densiteParfum: 'Scent density (g per ml)', stockMisAJour: 'Stock updated',
    potOuMoule: 'Jar or mould', pots: 'Jars', moules: 'Moulds', genre: 'Type', genrePot: 'Jar', genreMoule: 'Mould',
    contenantsAide2: 'Your jars and moulds, with the total weight (wax + scent + dye) poured into each.',
    nouveauMoule: 'New mould', photosContenant: 'Photos can be added once the jar or mould is saved.',
    colorants: 'Dyes', colorantsAide: 'Share of each dye as % of the candle’s total weight (e.g. 0.5).',
    ajouterColorant: '+ Dye', nouveauColorant: '+ New dye…', nomColorant: 'Name of the new dye:',
    coutAide2: 'Average price of your purchases. Moulds are not counted (they are reused).',
    navBougies: 'My candles', mesBougies: 'My candles',
    mesBougiesAide: 'Candles finished in making mode land here, grouped by recipe and by jar or mould.',
    aucuneBougie: 'No finished candles yet. They are added when you finish a batch.',
    enStockN: n => `${n} in stock`, coutUnite: 'cost', prixVente: 'Selling price (€)', vendu: 'Sold',
    demanderPrixVente: 'Selling price (€):', venteNotee: 'Sale recorded', plusEnStock: 'None left in stock',
    resumeBougies: (n, v) => `${n} candle(s) in stock · value (cost) ${v}`,
    resumeVentes: (n, ca) => `${n} sold · ${ca} received`,
    fabriquees: 'Made', ventes: 'Sales', aucuneVente: 'No sales yet.',
    bougiesAjoutees: n => `${n} candle(s) added to My candles`, supprimerBougie: n => `Remove “${n}” from My candles?`,
    retourBougies: '‹ My candles', bougieEnregistree: 'Saved', annulerVente: 'Cancel this sale? (the candle goes back in stock)',
    navAlertes: 'Alerts', alertes: 'Stock alerts', seuil: u => `Alert me below (${u})`,
    aucuneAlerte: 'Nothing to restock for now.', alertesAide: 'Items below their alert level. Set the level in each stock item.',
    reste: q => `${q} left`, racheter: 'Record a purchase', stockBas: n => `${n} item(s) to restock: see Stock`,
    navRapport: 'Report', rapport: 'Report', rapportAide: 'Money in (sales) and money out (stock purchases and other expenses).',
    annee: 'Year', entrees: 'In', sorties: 'Out', solde: 'Balance', mois: 'Month', mouvements: 'Entries',
    aucunMouvement: 'No entries this year.', autreMouvement: 'Other expense or income',
    sortie: 'Expense', entree: 'Income', libelle: 'Description', exLibelle: 'e.g. Market fee, labels…', montant: 'Amount (€)',
    ajouterMouvement: '+ Add', mouvementAjoute: 'Entry added', libelleMontant: 'Enter a description and an amount',
    supprimerMouvement: 'Delete this entry?', exporterCsv: 'Export for Excel', exportCree: 'File created',
    achatDe: n => `Purchase: ${n}`, venteDe: n => `Sale: ${n}`,
    devise: 'Currency', paiement: 'Payment',
    taux: (de, vers) => `Rate ${de} → ${vers}`, tauxDu: d => `rate of ${d}`, tauxHorsLigne: 'offline: last known rate, please check',
    tauxInconnu: 'offline: enter the rate', tauxManquant: 'Enter the exchange rate', soit: 'i.e.', origine: 'Original amount', modes: { especes: 'Cash', carte: 'Card', virement: 'Transfer', cheque: 'Cheque', autre: 'Other' },
    venteTitre: n => `Sale: ${n}`, quantiteVendue: 'Quantity sold', prixUnBougie: 'Price per candle (€)', totalVente: (n, m) => `${n} candle(s) · total ${m}`, valider: 'Confirm',
    idees: 'What can I make with my stock?', ideesCourt: 'Ideas from my stock',
    ideesAide: 'Recipes you can make with the scents in stock (wax, jars and wicks are not counted). Tap a size to calculate it.',
    ideesAvec: 'With the scent', toutes: 'All',
    faisables: 'Possible now', presque: 'Almost there', senteursLibres: 'Scents in stock with no recipe',
    senteursLibresAide: 'An idea for a new recipe?',
    maxBougies: n => `up to ${n}`, limitePar: n => `Limited by: ${n}`,
    manque: n => `Missing: ${n}`, pasAssez: n => `${n} (not enough)`,
    aucuneIdee: 'No recipe can be made with the current stock.',
    ideesSansStock: 'Add your scents to the Stock first to see ideas.',
    ideesSansContenant: 'Add your containers to see how many candles are possible.',
    nonSuivi: n => `Not tracked in stock: ${n}`,
  },
};

// Les textes écrivent « € » ; on affiche la devise choisie dans les Réglages.
function t(cle, ...args) {
  const v = TEXTES[etat.reglages.langue][cle] ?? TEXTES.fr[cle];
  const r = typeof v === 'function' ? v(...args) : v;
  return typeof r === 'string' ? r.replace(/€/g, etat.reglages.devise) : r;
}

// ---------- Données ----------

const CLE = 'bougies-donnees-v1';
const RAPPEL_SAUVEGARDE_JOURS = 14;

function etatVide() {
  return {
    version: 2,
    formules: [],
    contenants: [],
    stock: [],
    produits: [],
    mouvements: [],
    taux: {},
    derniereSauvegarde: null,
    reglages: {
      langue: (navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en',
      dosageDefaut: 8,
      densite: 0.9,
      densiteParfum: 1,
      devise: 'CHF',
      // Valeurs de ses notes (Violet Lemonade).
      temperatures: { pot: '35-40', fonte: '70', couleur: '65', parfum: '60-65', coulage: '55-60' },
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
  // Object.assign ci-dessus a remplacé vide.reglages par celui des données : on repart des valeurs par défaut.
  e.reglages = Object.assign(etatVide().reglages, donnees.reglages);
  e.reglages.temperatures = Object.assign(etatVide().reglages.temperatures, e.reglages.temperatures);
  e.ui = e.ui || {};
  e.stock = e.stock || [];
  e.produits = e.produits || [];
  e.mouvements = e.mouvements || [];
  e.taux = e.taux || {};
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

// ---------- Photos ----------
// Trop lourdes pour localStorage : elles vont dans IndexedDB, réduites en JPEG.
// La formule ne garde que la liste de leurs identifiants (formule.photos).

const PHOTO_COTE_MAX = 1400;
let baseDePhotos;

function basePhotos() {
  baseDePhotos = baseDePhotos || new Promise((ok, ko) => {
    const req = indexedDB.open('bougies-photos', 1);
    req.onupgradeneeded = () => req.result.createObjectStore('photos');
    req.onsuccess = () => ok(req.result);
    req.onerror = () => ko(req.error);
  });
  return baseDePhotos;
}

async function photos(mode, action) {
  const db = await basePhotos();
  return new Promise((ok, ko) => {
    const tx = db.transaction('photos', mode);
    const req = action(tx.objectStore('photos'));
    tx.oncomplete = () => ok(req?.result);
    tx.onerror = () => ko(tx.error);
  });
}

const lirePhoto = id => photos('readonly', s => s.get(id));
const ecrirePhoto = (id, dataUrl) => photos('readwrite', s => s.put(dataUrl, id));
const effacerPhotos = ids => photos('readwrite', s => { ids.forEach(id => s.delete(id)); });

function reduirePhoto(fichier) {
  return new Promise((ok, ko) => {
    const img = new Image();
    const url = URL.createObjectURL(fichier);
    img.onload = () => {
      const echelle = Math.min(1, PHOTO_COTE_MAX / Math.max(img.width, img.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * echelle);
      canvas.height = Math.round(img.height * echelle);
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      ok(canvas.toDataURL('image/jpeg', 0.82));
    };
    img.onerror = () => { URL.revokeObjectURL(url); ko(new Error('image')); };
    img.src = url;
  });
}

async function ajouterPhotos(formule, fichiers) {
  let ajoutees = 0;
  for (const fichier of fichiers) {
    try {
      const id = nouvelId();
      await ecrirePhoto(id, await reduirePhoto(fichier));
      formule.photos = [...(formule.photos || []), id];
      ajoutees++;
    } catch (e) {
      toast(t('photoImpossible'));
    }
  }
  enregistrer();
  if (ajoutees) toast(t('photoAjoutee', ajoutees));
}

// Remplit les <img data-photo="id"> une fois les photos lues.
function afficherPhotos() {
  app.querySelectorAll('img[data-photo]').forEach(async img => {
    img.src = (await lirePhoto(img.dataset.photo)) || '';
  });
}

function nombre(v) {
  const n = parseFloat(String(v ?? '').replace(',', '.').replace(/\s/g, ''));
  return Number.isFinite(n) ? n : 0;
}

function locale() {
  if (etat.reglages.langue === 'en') return 'en-GB';
  return etat.reglages.devise === 'CHF' ? 'fr-CH' : 'fr-FR';
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

// Icônes Phosphor (licence MIT), en SVG pour garder l'app sans dépendance.
const ICONES = {
  etoile: '<svg class="ic" aria-hidden="true" viewBox="0 0 256 256" fill="currentColor"><path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"/></svg>',
  etoilePleine: '<svg class="ic" aria-hidden="true" viewBox="0 0 256 256" fill="currentColor"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"/></svg>',
  croix: '<svg class="ic" aria-hidden="true" viewBox="0 0 256 256" fill="currentColor"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/></svg>',
  crayon: '<svg class="ic" aria-hidden="true" viewBox="0 0 256 256" fill="currentColor"><path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"/></svg>',
};

const formuleParId = id => etat.formules.find(f => f.id === id);
const contenantParId = id => etat.contenants.find(c => c.id === id);

function formulesTriees() {
  return [...etat.formules].sort((a, b) => (b.favori - a.favori) || a.nom.localeCompare(b.nom, 'fr'));
}

// ---------- Calcul ----------

// Parfum = poids total × dosage ; cire = le reste. Chaque parfum prend sa part du mélange.
// Les colorants sont en % du poids total, comme le parfum, et la cire est le reste.
function calculer(formule, poidsTotal) {
  const parfum = poidsTotal * nombre(formule.dosage) / 100;
  const melange = formule.parfums.filter(l => l.nom || l.pct);
  const sommeMelange = melange.reduce((s, l) => s + nombre(l.pct), 0);
  const colorants = (formule.colorants || []).filter(l => l.nom || l.pct)
    .map(l => ({ nom: l.nom, pct: nombre(l.pct), g: poidsTotal * nombre(l.pct) / 100 }));
  const colorant = colorants.reduce((s, l) => s + l.g, 0);
  return {
    poidsTotal,
    parfum,
    colorants,
    cire: poidsTotal - parfum - colorant,
    sommeMelange,
    lignes: melange.map(l => ({ nom: l.nom, pct: nombre(l.pct), g: parfum * nombre(l.pct) / 100 })),
  };
}

// Part de cire dans un poids donné (pour une couche).
const partCire = (formule, poids) => poids ? calculer(formule, poids).cire : 0;

// ---------- Stock et coûts ----------

const TYPES = ['cire', 'parfum', 'couleur', 'pot', 'meche', 'autre'];
const UNITE = { cire: 'g', parfum: 'ml', couleur: 'g', pot: 'u', meche: 'u', autre: 'u' };

const articleParId = id => etat.stock.find(a => a.id === id);
const memeNom = (a, b) => String(a || '').trim().toLowerCase() === String(b || '').trim().toLowerCase();
const articleNomme = (type, nom) => nom && etat.stock.find(a => a.type === type && memeNom(a.nom, nom));

// Seuil d'alerte proposé pour un nouvel article, modifiable ensuite.
const SEUIL = { cire: 1000, parfum: 100, couleur: 5, pot: 6, meche: 6, autre: 0 };

function creerArticle(type, nom, extra = {}) {
  const a = { id: nouvelId(), type, nom, quantite: 0, seuil: SEUIL[type], achats: [], notes: '', ...extra };
  etat.stock.push(a);
  return a;
}

// ---------- Devises ----------
// Les montants sont enregistrés dans la devise des Réglages (CHF). Un achat payé dans une
// autre devise est converti au cours du jour de l'achat (BCE, via frankfurter), et garde
// son montant d'origine.

const DEVISES = ['CHF', 'EUR'];

async function tauxDuJour(date, de, vers) {
  const cle = `${date}:${de}>${vers}`;
  if (etat.taux[cle]) return { taux: etat.taux[cle], date: etat.taux[cle + ':date'] || date };
  const jour = date > new Date().toISOString().slice(0, 10) ? 'latest' : date;
  for (const url of [`https://api.frankfurter.app/${jour}?from=${de}&to=${vers}`,
    `https://api.frankfurter.dev/v1/${jour}?base=${de}&symbols=${vers}`]) {
    try {
      const r = await (await fetch(url)).json();
      if (r.rates?.[vers]) {
        etat.taux[cle] = r.rates[vers];
        etat.taux[cle + ':date'] = r.date;
        etat.taux[`dernier:${de}>${vers}`] = r.rates[vers];
        enregistrer();
        return { taux: r.rates[vers], date: r.date };
      }
    } catch (e) { /* essai suivant */ }
  }
  const dernier = etat.taux[`dernier:${de}>${vers}`];
  return dernier ? { taux: dernier, horsLigne: true } : null;
}

// Prix, devise et, si la devise diffère, le taux. Le préfixe distingue les formulaires.
function champMontant(prefixe, libelle) {
  return `<div><label for="${prefixe}-prix">${libelle}</label>
    <div class="stepper">
      <input id="${prefixe}-prix" inputmode="decimal" data-conv="${prefixe}" style="max-width:none">
      <select id="${prefixe}-devise" data-conv="${prefixe}" aria-label="${t('devise')}" style="width:auto">
        ${DEVISES.map(d => `<option ${d === etat.reglages.devise ? 'selected' : ''}>${d}</option>`).join('')}
      </select>
    </div>
    <div id="${prefixe}-conv" class="conv" hidden>
      <label for="${prefixe}-taux" id="${prefixe}-taux-label"></label>
      <input id="${prefixe}-taux" inputmode="decimal" data-conv="${prefixe}" data-taux-manuel="">
      <p class="muted" id="${prefixe}-resultat"></p>
    </div></div>`;
}

async function majConversion(prefixe, source) {
  const zone = document.getElementById(prefixe + '-conv');
  if (!zone) return;
  const de = document.getElementById(prefixe + '-devise').value;
  const vers = etat.reglages.devise;
  zone.hidden = de === vers;
  if (de === vers) return;
  const champTaux = document.getElementById(prefixe + '-taux');
  const info = document.getElementById(prefixe + '-resultat');
  document.getElementById(prefixe + '-taux-label').textContent = t('taux', de, vers);
  if (source === champTaux) champTaux.dataset.tauxManuel = '1';
  // Nouveau taux à chaque changement de devise ou de date, sauf s'il a été saisi à la main.
  if (!champTaux.dataset.tauxManuel && (source?.id?.endsWith('-devise') || source?.type === 'date' || !champTaux.value)) {
    const date = document.getElementById(prefixe + '-date').value || new Date().toISOString().slice(0, 10);
    champTaux.dataset.note = '…';
    const r = await tauxDuJour(date, de, vers);
    champTaux.value = r ? String(Math.round(r.taux * 10000) / 10000) : '';
    champTaux.dataset.note = r ? (r.horsLigne ? t('tauxHorsLigne') : t('tauxDu', new Date(r.date).toLocaleDateString(locale()))) : t('tauxInconnu');
  }
  const montant = nombre(document.getElementById(prefixe + '-prix').value) * nombre(champTaux.value);
  info.textContent = [champTaux.dataset.note, montant ? `${t('soit')} ${euros(montant)}` : ''].filter(Boolean).join(' · ');
}

// Montant converti dans la devise des Réglages, ou null si le taux manque.
function lireMontant(prefixe) {
  const brut = nombre(document.getElementById(prefixe + '-prix').value);
  const devise = document.getElementById(prefixe + '-devise').value;
  if (devise === etat.reglages.devise) return { montant: brut };
  const taux = nombre(document.getElementById(prefixe + '-taux').value);
  if (!(taux > 0)) return null;
  return { montant: Math.round(brut * taux * 100) / 100, origine: { montant: brut, devise, taux } };
}

const origineTexte = o => o ? ` <span class="pct">(${o.montant.toLocaleString(locale(), { style: 'currency', currency: o.devise })})</span>` : '';

// Prix moyen pondéré de tous les achats, par g, ml ou pièce.
function coutUnitaire(a) {
  const q = (a?.achats || []).reduce((s, x) => s + nombre(x.quantite), 0);
  const p = (a?.achats || []).reduce((s, x) => s + nombre(x.prix), 0);
  return q > 0 ? p / q : null;
}

// Seulement les articles déjà achetés au moins une fois : un nom tout juste créé n'alerte pas.
const enAlerte = () => etat.stock.filter(a => (a.achats.length || a.quantite > 0) && nombre(a.quantite) <= nombre(a.seuil));

function majBadge() {
  const n = enAlerte().length;
  const badge = document.getElementById('badge-alertes');
  if (badge) { badge.textContent = n || ''; badge.hidden = !n; }
}

function euros(x) {
  return x.toLocaleString(locale(), { style: 'currency', currency: etat.reglages.devise });
}

function quantiteTexte(q, unite) {
  return `${q.toLocaleString(locale(), { maximumFractionDigits: 1 })} ${t('unites')[unite]}`;
}

// Le prix d'une cire se lit mieux au kilo, le reste à l'unité.
function prixUnitaireTexte(a) {
  const c = coutUnitaire(a);
  if (c === null) return '';
  return a.type === 'cire' ? `${euros(c * 1000)}/kg` : `${euros(c)}/${UNITE[a.type] === 'u' ? t('unites').u.replace(/\(s\)$/, '') : UNITE[a.type]}`;
}

// Ce que consomme une fournée, avec le prix de chaque poste quand le stock le connaît.
function consommation(f, lignes) {
  const poidsTotal = lignes.reduce((s, l) => s + l.p * l.n, 0);
  const r = calculer(f, poidsTotal);
  const postes = [];
  const ajouter = (type, nom, quantite) => {
    if (!nom || !(quantite > 0)) return;
    const a = type === 'pot' ? etat.stock.find(x => x.type === 'pot' && x.contenant === nom) : articleNomme(type, nom);
    const deja = postes.find(p => p.type === type && (p.article ? p.article === a : memeNom(p.nom, nom)));
    if (deja) { deja.quantite += quantite; return; }
    postes.push({ type, nom: a?.nom || (type === 'pot' ? contenantParId(nom)?.nom : nom), article: a, quantite });
  };
  ajouter('cire', f.cire, r.cire);
  r.lignes.forEach(l => ajouter('parfum', l.nom, l.g / (nombre(etat.reglages.densiteParfum) || 1)));
  r.colorants.forEach(l => ajouter('couleur', l.nom, l.g));
  lignes.forEach(l => {
    if (l.contenant === 'perso') return;
    if (contenantParId(l.contenant)?.genre !== 'moule') ajouter('pot', l.contenant, l.n);
    ajouter('meche', contenantParId(l.contenant)?.meche, l.n);
  });
  postes.forEach(p => {
    const c = coutUnitaire(p.article);
    p.cout = c === null ? null : c * p.quantite;
    p.manque = p.article && p.article.quantite < p.quantite - 1e-6;
  });
  return { postes, total: postes.reduce((s, p) => s + (p.cout || 0), 0), complet: postes.every(p => p.cout !== null) };
}

function coutHtml(f, lignes, nbBougies) {
  const { postes, total, complet } = consommation(f, lignes);
  if (!postes.length) return '';
  return `<h3>${t('cout')}</h3>
    <table class="result petit">
      ${postes.map(p => `<tr><td>${esc(p.nom)}<span class="pct">${quantiteTexte(p.quantite, UNITE[p.type])}${p.manque ? ` · <span class="warn">${t('stockInsuffisant')}</span>` : ''}</span></td>
        <td class="num">${p.cout !== null ? euros(p.cout) : `<span class="muted">${p.article ? t('prixInconnu') : t('pasEnStock')}</span>`}</td></tr>`).join('')}
      <tr class="total"><td>${t('total')}${nbBougies > 1 ? `<span class="pct">${euros(total / nbBougies)} ${t('parBougie')}</span>` : ''}</td><td class="num">${complet ? '' : '≥ '}${euros(total)}</td></tr>
    </table>
    <p class="muted">${t('coutAide2')}${complet ? '' : ' ' + t('coutManquant')}</p>`;
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
  const [page, id, mode] = location.hash.replace(/^#\/?/, '').split('/');
  document.querySelectorAll('.topbar nav a').forEach(a => {
    const onglet = a.dataset.tab;
    const actif = onglet === page || (onglet === 'formules' && (page === 'formule' || page === 'idees')) || (onglet === 'contenants' && page === 'contenant') || (onglet === 'bougies' && page === 'bougie') || (onglet === 'stock' && page === 'facture') || (onglet === 'reglages' && page === 'versions') || (onglet === 'calcul' && !['formules', 'formule', 'idees', 'contenants', 'contenant', 'stock', 'facture', 'rapport', 'bougies', 'bougie', 'reglages', 'versions'].includes(page));
    a.classList.toggle('active', actif);
    if (actif) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
  window.scrollTo(0, 0);
  majBadge();
  switch (page) {
    case 'formules': return vueFormules();
    case 'idees': return vueIdees();
    case 'formule': return mode === 'modifier' || !formuleParId(id) ? vueFormule(id) : vueFiche(id);
    case 'contenants': return vueContenants();
    case 'contenant': return vueContenant(id);
    case 'stock': return id ? vueArticle(id) : vueStock();
    case 'facture': return vueFacture();
    case 'alertes': return aller('#/stock');
    case 'rapport': return vueRapport();
    case 'bougies': return vueBougies();
    case 'bougie': return vueBougie(id);
    case 'reglages': return vueReglages();
    case 'versions': return vueVersions();
    case 'fabrication': return vueFabrication();
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
  ui.autres = (Array.isArray(ui.autres) ? ui.autres : []).filter(x => formuleParId(x.formule)).slice(0, LETTRES.length - 1);
  const nbLots = 1 + ui.autres.length;
  for (let k = 0; k < nbLots; k++) {
    const lot = lotUi(k);
    if (!Array.isArray(lot.lignes) || !lot.lignes.length) lot.lignes = [{ contenant: parDefaut, poids: '', n: 1 }];
    lot.lignes.forEach(l => { if (l.contenant !== 'perso' && !contenantParId(l.contenant)) l.contenant = parDefaut; });
  }
  const carte = k => { const lot = lotUi(k); return `<div class="card lot">
      ${k ? `<button class="retirer-lot" data-action="retirer-recette" data-lot="${k}" aria-label="${t('retirerRecette')}">${ICONES.croix}</button>` : ''}
      <label for="c-formule-${k}" style="margin-top:0">${nbLots > 1 ? `<span class="lettre l${LETTRES[k]}">${LETTRES[k]}</span> ` : ''}${t('formule')}</label>
      <select id="c-formule-${k}" data-lot-formule="${k}">
        ${formulesTriees().map(f => `<option value="${f.id}" ${f.id === lot.formule ? 'selected' : ''}>${f.favori ? '★ ' : ''}${esc(f.nom)}</option>`).join('')}
      </select>
      ${lot.lignes.map((l, i) => `
        <div class="grid2 pot">
          <div>
            <label for="c-contenant-${k}-${i}">${t('potOuMoule')}</label>
            <select id="c-contenant-${k}-${i}" data-lot="${k}" data-pot="${i}" data-champ-pot="contenant">
              ${[['pot', t('pots')], ['moule', t('moules')]].map(([g, titre]) => {
                const liste = contenantsTries().filter(c => (c.genre || 'pot') === g);
                return liste.length ? `<optgroup label="${titre}">${liste.map(c => `<option value="${c.id}" ${c.id === l.contenant ? 'selected' : ''}>${esc(c.nom)} (${grammes(nombre(c.poids))})</option>`).join('')}</optgroup>` : '';
              }).join('')}
              <option value="perso" ${l.contenant === 'perso' ? 'selected' : ''}>${t('autrePoids')}</option>
            </select>
            ${l.contenant === 'perso' ? `<label for="c-poids-${k}-${i}">${t('poidsParBougie')}</label>
              <input id="c-poids-${k}-${i}" data-lot="${k}" data-pot="${i}" data-champ-pot="poids" inputmode="decimal" value="${esc(l.poids)}" placeholder="${t('exPoids')}">` : ''}
          </div>
          <div>
            <label for="c-nombre-${k}-${i}">${t('nombre')}</label>
            <div class="stepper">
              <button data-action="moins" data-lot="${k}" data-i="${i}" aria-label="−1">−</button>
              <input id="c-nombre-${k}-${i}" data-lot="${k}" data-pot="${i}" data-champ-pot="n" inputmode="numeric" value="${l.n}">
              <button data-action="plus" data-lot="${k}" data-i="${i}" aria-label="+1">+</button>
              ${lot.lignes.length > 1 ? `<button data-action="retirer-pot" data-lot="${k}" data-i="${i}" aria-label="${t('retirer')}">${ICONES.croix}</button>` : ''}
            </div>
          </div>
        </div>`).join('')}
      <div class="actions"><button class="small" data-action="ajouter-pot" data-lot="${k}">${t('ajouterPot')}</button></div>
    </div>`; };

  const fab = etat.ui.fabrication;
  app.innerHTML = `${bandeauSauvegarde()}
    ${fab && formuleParId(fab.formule) ? `<div class="card bandeau-fab"><span>${t('enCours', [fab, ...(fab.autres || [])].map(x => formuleParId(x.formule)).filter(Boolean).map(f => esc(f.nom)).join(' + '))}</span>
      <a class="btn primary small" href="#/fabrication">${t('reprendre')}</a></div>` : ''}
    <div class="duo calc">
    <div>
    ${Array.from({ length: nbLots }, (_, k) => carte(k)).join('')}
    ${nbLots < LETTRES.length && etat.formules.length > 1 ? `<button class="ajout-recette" data-action="ajouter-recette">${t('autreRecette')}</button>` : ''}
    <div id="notes-recette"></div>
    </div>
    <div class="card colle" id="resultat"></div>
    </div>`;
  afficherResultat();
}

// Une fournée = une ou plusieurs recettes, chacune avec ses pots. Lettres A, B, C pour s'y retrouver.
const LETTRES = 'ABCDEF';
const lotUi = k => k ? etat.ui.autres[k - 1] : etat.ui;
function lotsDe(src) {
  return [{ formule: src.formule, lignes: src.lignes }, ...(src.autres || [])]
    .map((x, idx) => ({ idx, f: formuleParId(x.formule), lignes: (x.lignes || []).map(l => ({ ...l, p: poidsLigne(l), n: Math.max(0, Math.round(nombre(l.n))) })).filter(l => l.p > 0 && l.n > 0) }))
    .filter(x => x.f && x.lignes.length)
    .map((x, k) => ({ ...x, lettre: LETTRES[k], poids: x.lignes.reduce((s, l) => s + l.p * l.n, 0), nb: x.lignes.reduce((s, l) => s + l.n, 0) }));
}
const pastilleLot = lot => `<span class="lettre l${lot.lettre}">${lot.lettre}</span>`;

function afficherFournee(zone, lots) {
  const total = lots.reduce((s, x) => s + x.poids, 0), nb = lots.reduce((s, x) => s + x.nb, 0);
  const cires = {};
  lots.forEach(x => { const r = calculer(x.f, x.poids); const nom = x.f.cire || t('cire'); cires[nom] = (cires[nom] || 0) + r.cire; });
  zone.innerHTML = `<p class="surtitre">${t('aPeser')}</p>
    <h3 class="titre-resultat">${t('fourneeDe', lots.length)}<span>${t('bougies', nb)} · ${grammes(total)}</span></h3>
    <table class="result pesee">${Object.entries(cires).map(([nom, g]) => `<tr class="fort"><td>${esc(nom)}<span class="pct">${t('fondreEnUneFois')}</span></td><td class="num">${grammes(g)}</td></tr>`).join('')}</table>
    ${lots.map(x => { const r = calculer(x.f, x.poids); return `<div class="bloc-lot"><h4>${pastilleLot(x)} ${esc(x.f.nom)} <span class="pct">${x.lignes.map(l => `${l.n} × ${esc(nomLigne(l))}`).join(', ')}</span></h4>
      <table class="result pesee">
        <tr><td>${esc(x.f.cire || t('cire'))}<span class="pct">${t('saPart')}</span></td><td class="num">${grammes(r.cire)}</td></tr>
        <tr><td>${t('parfumTotal')}<span class="pct">${pourcent(nombre(x.f.dosage))}</span></td><td class="num">${grammes(r.parfum)}</td></tr>
        ${r.lignes.map(l => `<tr class="sous"><td>${esc(l.nom)}<span class="pct">${pourcent(l.pct)}</span></td><td class="num">${grammes(l.g)}</td></tr>`).join('')}
        ${r.colorants.map(l => `<tr><td>${esc(l.nom)}</td><td class="num">${grammes(l.g)}</td></tr>`).join('')}
      </table></div>`; }).join('')}
    <button class="primary large" data-action="fabriquer">${t('fabriquer')}</button>
    ${coutFournee(lots)}`;
  const zoneNotes = document.getElementById('notes-recette');
  if (zoneNotes) zoneNotes.innerHTML = lots.some(x => x.f.prochaineFois) ? `<div class="card rappel note-fois"><h3>${t('prochaineFois')}</h3>${lots.filter(x => x.f.prochaineFois).map(x => `<p>${pastilleLot(x)} <span style="white-space:pre-wrap">${esc(x.f.prochaineFois)}</span></p>`).join('')}</div>` : '';
}

// Coût de toute la fournée, replié, avec le détail de chaque recette.
function coutFournee(lots) {
  const c = lots.map(x => consommation(x.f, x.lignes));
  if (!c.some(y => y.postes.length)) return '';
  const total = c.reduce((s, y) => s + y.total, 0), nb = lots.reduce((s, x) => s + x.nb, 0);
  return `<details class="repli"><summary><span>${t('coutEstime')} · ${euros(total / nb)} ${t('parBougie')}</span><strong>${c.every(y => y.complet) ? '' : '≥ '}${euros(total)}</strong></summary>
    ${lots.map(x => `<h4 class="titre-lot">${pastilleLot(x)} ${esc(x.f.nom)}</h4>${coutHtml(x.f, x.lignes, x.nb).replace(/<h3>.*?<\/h3>/, '').replace(/<p class="muted">.*?<\/p>/s, '')}`).join('')}</details>`;
}

// Étapes d'une fournée à plusieurs recettes : d'abord tout ce qui se fait en commun,
// puis chaque recette de la couleur au coulage, pour ne pas laisser refroidir un pichet.
function etapesFournee(lots) {
  const tpDe = f => { const tp = { ...etat.reglages.temperatures }; Object.entries(f.temperatures || {}).forEach(([k, v]) => { if (v) tp[k] = v; }); return tp; };
  const liste = items => `<table class="result petit">${items.map(([nom, g]) => `<tr><td>${nom}</td><td class="num">${g}</td></tr>`).join('')}</table>`;
  const groupes = cle => { const m = new Map(); lots.forEach(x => { const v = tpDe(x.f)[cle]; m.set(v, [...(m.get(v) || []), x]); }); return [...m]; };
  const titreTemp = (cle, fn) => groupes(cle).map(([v, ls]) => fn(v) + (groupes(cle).length > 1 ? ` (${ls.map(x => x.lettre).join(', ')})` : '')).join(' · ');
  const calc = lots.map(x => calculer(x.f, x.poids));
  const cires = new Map();
  lots.forEach((x, k) => { const nom = x.f.cire || t('cire'); cires.set(nom, [...(cires.get(nom) || []), [x, calc[k].cire]]); });
  const partage = [...cires.values()].some(v => v.length > 1);
  const etapes = [];
  etapes.push({ titre: titreTemp('pot', v => t('etPot', v)), detail: liste(lots.flatMap(x => x.lignes.map(l => [`${pastilleLot(x)} ${l.n} × ${esc(nomLigne(l))}`, '']))) });
  etapes.push({ titre: t('etPeserCire'), detail: [...cires].map(([nom, v]) => liste([[`<strong>${esc(nom)}</strong>${v.length > 1 ? ' <span class="pct">' + t('enUneFoisPour', v.map(([x]) => x.lettre).join(' + ')) + '</span>' : ' ' + pastilleLot(v[0][0])}`, `<strong>${grammes(v.reduce((s, y) => s + y[1], 0))}</strong>`]])).join('') });
  etapes.push({ titre: titreTemp('fonte', v => t('etFondre', v)), detail: partage ? '' : `<p class="muted">${t('uneCasserole')}</p>` });
  etapes.push({ titre: t('etPeserParfums'), detail: lots.map((x, k) => `<h4>${pastilleLot(x)} ${esc(x.f.nom)}</h4>` + liste([...calc[k].lignes.map(l => [`${esc(l.nom)} <span class="pct">${pourcent(l.pct)}</span>`, grammes(l.g)]), [`<strong>${t('total')}</strong>`, grammes(calc[k].parfum)]])).join('') });
  if (partage) etapes.push({ titre: t('etPartager'), detail: liste(lots.map((x, k) => [`${pastilleLot(x)} ${esc(x.f.nom)}`, grammes(calc[k].cire)])) });
  lots.forEach((x, k) => {
    const tp = tpDe(x.f), r = calc[k], couches = (x.f.couches || []).filter(c => c.nom || c.pct);
    if (x.f.design || couches.length || r.colorants.length) etapes.push({ lot: x, titre: t('etCouleur', tp.couleur),
      detail: (r.colorants.length ? liste(r.colorants.map(l => [esc(l.nom), grammes(l.g)])) : '') + (x.f.design ? `<p class="muted">${esc(x.f.design)}</p>` : '') });
    etapes.push({ lot: x, titre: t('etParfum', tp.parfum) });
    etapes.push({ lot: x, titre: t('etCouler', tp.coulage), detail: liste(x.lignes.map(l => [`${l.n} × ${esc(nomLigne(l))}`, grammes(l.p)])) });
    (x.f.etapes || '').split('\n').map(e => e.trim()).filter(Boolean).forEach(e => etapes.push({ lot: x, titre: esc(e) }));
  });
  etapes.push({ titre: t('etFinir') });
  return etapes;
}

function vueFournee(fab, lots) {
  const etapes = etapesFournee(lots);
  fab.nbEtapes = etapes.length;
  const faites = etapes.filter((_, i) => fab.coches[i]).length;
  const courante = etapes.findIndex((_, k) => !fab.coches[k]);
  app.innerHTML = `
    <h2>${t('fabrication')} : ${t('fabricationDe', lots.length)}</h2>
    <p class="muted">${lots.map(x => `${pastilleLot(x)} ${esc(x.f.nom)} <span class="pct">${t('bougies', x.nb)}</span>`).join(' &nbsp; ')} · <span id="progression">${t('etapesFaites', faites, etapes.length)}</span></p>
    ${lots.some(x => x.f.prochaineFois) ? `<div class="card rappel"><strong>${t('rappelProchaineFois')}</strong>${lots.filter(x => x.f.prochaineFois).map(x => `<p style="margin:6px 0 0">${pastilleLot(x)} <span style="white-space:pre-wrap">${esc(x.f.prochaineFois)}</span></p>`).join('')}</div>` : ''}
    <div class="progres" aria-hidden="true"><i style="width:${faites / etapes.length * 100}%"></i></div>
    <div class="duo fab">
    <ol class="etapes">
      ${etapes.map((e, i) => `${i === 0 ? `<li class="phase">${t('phaseEnsemble')}</li>` : e.lot && etapes[i - 1].lot !== e.lot ? `<li class="phase">${pastilleLot(e.lot)} ${esc(e.lot.f.nom)}</li>` : !e.lot && etapes[i - 1].lot ? `<li class="phase">${t('phaseFinir')}</li>` : ''}
      <li class="etape card ${fab.coches[i] ? 'faite' : ''} ${i === courante ? 'courante' : ''} ${e.lot ? 'du-lot l' + e.lot.lettre : ''}">
        <label class="coche"><input type="checkbox" data-etape="${i}" ${fab.coches[i] ? 'checked' : ''}>
          <span><span class="num-etape">${i + 1}</span> ${e.titre}</span></label>
        ${e.detail ? `<div class="detail-etape">${e.detail}</div>` : ''}
      </li>`).join('')}
    </ol>
    <div class="colle">
    ${(c => c ? `<div class="card cout-fournee">${c}</div>` : '')(coutFournee(lots))}
    <div class="card">
      <h3>${t('notesFournee')}</h3>
      ${lots.map(x => `<label for="notes-${x.lettre}">${pastilleLot(x)} ${esc(x.f.nom)}</label>
      <textarea id="notes-${x.lettre}" data-note-lot="${x.idx}" placeholder="${t('exNotesFournee')}" style="min-height:70px">${esc((fab.notesLots || {})[x.idx] || '')}</textarea>`).join('')}
      <div class="actions">
        <button class="primary" data-action="terminer-fabrication">${t('terminer')}</button>
        <button class="danger" data-action="abandonner-fabrication">${t('abandonner')}</button>
      </div>
    </div>
    </div>
    </div>`;
}

function afficherResultat() {
  const zone = document.getElementById('resultat');
  if (!zone) return;
  if ((etat.ui.autres || []).length) { const lots = lotsDe(etat.ui); if (lots.length > 1) return afficherFournee(zone, lots); }
  const f = formuleParId(etat.ui.formule);
  const lignes = etat.ui.lignes
    .map(l => ({ ...l, p: poidsLigne(l), n: Math.max(0, Math.round(nombre(l.n))) }))
    .filter(l => l.p > 0 && l.n > 0);
  const nbBougies = lignes.reduce((s, l) => s + l.n, 0);
  const poidsTotal = lignes.reduce((s, l) => s + l.p * l.n, 0);
  const zoneNotes = document.getElementById('notes-recette');
  if (!poidsTotal) { zone.innerHTML = `<p class="muted">${t('indiquerPoids')}</p>`; if (zoneNotes) zoneNotes.innerHTML = ''; return; }

  const r = calculer(f, poidsTotal);
  const couches = (f.couches || []).filter(c => c.nom || c.pct);
  const meches = [...new Set(lignes.map(l => contenantParId(l.contenant)?.meche).filter(Boolean))];
  const plusieursPots = lignes.length > 1 || nbBougies > 1;

  zone.innerHTML = `
    <p class="surtitre">${t('aPeser')}</p>
    <h3 class="titre-resultat">${esc(f.nom)}<span>${t('bougies', nbBougies)} · ${grammes(poidsTotal)}</span></h3>
    ${Math.abs(r.sommeMelange - 100) > 0.05 ? `<p class="warn">${t('melangeFaux', pourcent(r.sommeMelange).replace(' %', ''))}</p>` : ''}
    <table class="result pesee">
      <tr class="fort"><td>${esc(f.cire || t('cire'))}</td><td class="num">${grammes(r.cire)}</td></tr>
      <tr class="fort"><td>${t('parfumTotal')}<span class="pct">${pourcent(nombre(f.dosage))} ${t('duPoidsTotal')}</span></td><td class="num">${grammes(r.parfum)}</td></tr>
      ${r.lignes.map(l => `<tr class="sous"><td>${esc(l.nom)}<span class="pct">${pourcent(l.pct)}</span></td><td class="num">${grammes(l.g)}</td></tr>`).join('')}
      ${r.colorants.map(l => `<tr><td>${esc(l.nom)}<span class="pct">${pourcent(l.pct)} ${t('duPoidsTotal')}</span></td><td class="num">${grammes(l.g)}</td></tr>`).join('')}
      <tr class="total"><td>${t('total')}</td><td class="num">${grammes(poidsTotal)}</td></tr>
    </table>
    ${couches.length ? `<h3>${t('couches')}</h3><table class="result petit">
      ${couches.map(c => {
        const p = poidsTotal * nombre(c.pct) / 100;
        return `<tr><td>${esc(c.nom)}<span class="pct">${pourcent(nombre(c.pct))}</span></td>
          <td class="num">${grammes(p)} <span class="pct">(${t('cire').toLowerCase()} ${grammes(partCire(f, p))})</span></td></tr>`;
      }).join('')}</table>` : ''}
    ${plusieursPots ? `<h3>${t('parPot')}</h3><table class="result petit">
      ${lignes.map(l => {
        const rp = calculer(f, l.p);
        return `<tr><td>${l.n} × ${esc(nomLigne(l))}</td>
          <td class="num">${t('cire').toLowerCase()} ${grammes(rp.cire)} · ${t('parfumTotal').toLowerCase()} ${grammes(rp.parfum)}</td></tr>`;
      }).join('')}</table>` : ''}
    <button class="primary large" data-action="fabriquer">${t('fabriquer')}</button>
    ${(() => { const c = consommation(f, lignes); if (!c.postes.length) return '';
      return `<details class="repli"><summary><span>${t('coutEstime')}${nbBougies > 1 ? ` · ${euros(c.total / nbBougies)} ${t('parBougie')}` : ''}</span><strong>${c.complet ? '' : '≥ '}${euros(c.total)}</strong></summary>
        ${coutHtml(f, lignes, nbBougies).replace(/<h3>.*?<\/h3>/, '')}</details>`; })()}`;
  if (zoneNotes) zoneNotes.innerHTML = (f.prochaineFois ? `<div class="card rappel note-fois"><h3>${t('prochaineFois')}</h3><p style="white-space:pre-wrap">${esc(f.prochaineFois)}</p></div>` : '')
    + (meches.length || f.design || f.notes ? `<div class="card texte-fiche">
      ${meches.length ? `<h3>${t('meche')}</h3><p>${meches.map(esc).join(', ')}</p>` : ''}
      ${f.design ? `<h3>${t('design')}</h3><p>${esc(f.design)}</p>` : ''}
      ${f.notes ? `<h3>${t('notesTitre')}</h3><p class="muted" style="white-space:pre-wrap">${esc(f.notes)}</p>` : ''}</div>` : '');
}

// --- Formules ---

// Une pastille par senteur ; la teinte dépend du nom, donc une senteur garde toujours la même couleur.
function pastilles(parfums) {
  const liste = parfums.filter(p => p.nom);
  if (!liste.length) return '';
  const teinte = nom => [...nom.toLowerCase()].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7) % 4;
  return `<div class="pastilles">${liste.map(p => `<span class="pastille t${teinte(p.nom)}">${esc(p.nom)}${p.pct ? ` <b>${esc(p.pct)} %</b>` : ''}</span>`).join('')}</div>`;
}

function vueFormules(filtre = '') {
  const q = filtre.trim().toLowerCase();
  const liste = formulesTriees().filter(f => !q || [f.nom, f.cire, ...f.parfums.map(p => p.nom)].join(' ').toLowerCase().includes(q));
  app.innerHTML = `<h2>${t('formules')}</h2>
    <div class="actions" style="margin:0 0 16px">
      <input id="recherche" type="search" placeholder="${t('rechercher')}" value="${esc(filtre)}" style="flex:1">
      <a class="btn primary" href="#/formule/nouveau">${t('nouvelle')}</a>
      ${etat.formules.length ? `<a class="btn" href="#/idees">${t('ideesCourt')}</a>` : ''}
    </div>
    ${liste.length ? [[t('favoris'), liste.filter(f => f.favori)], [liste.some(f => f.favori) ? t('toutesLesAutres') : '', liste.filter(f => !f.favori)]].filter(g => g[1].length).map(([titre, groupe]) => `${titre ? `<h3>${titre} <span class="compte">${groupe.length}</span></h3>` : ''}<ul class="list recettes">${groupe.map(f => `
      <li>
        <button class="star" data-action="favori" data-id="${f.id}" aria-label="${t('favori')}" aria-pressed="${!!f.favori}">${f.favori ? ICONES.etoilePleine : ICONES.etoile}</button>
        <a class="row" href="#/formule/${f.id}">
          ${(f.photos || []).length ? `<img class="mini" data-photo="${f.photos[0]}" alt="">` : ''}
          <div class="grow">
          <div class="title">${esc(f.nom)}</div>
          <div class="sub senteurs">${f.parfums.filter(p => p.nom).map(p => `${esc(p.nom)}${p.pct ? ` <b>${esc(p.pct)}</b>` : ''}`).join('<i> · </i>')}</div>
        </div></a>
        <button class="small" data-action="calculer" data-id="${f.id}">${t('calculer')}</button>
      </li>`).join('')}</ul>`).join('')
      : `<div class="empty">${etat.formules.length ? t('aucuneCorrespond') : t('aucuneFormule')}</div>`}`;
  afficherPhotos();
  const champ = document.getElementById('recherche');
  champ.addEventListener('input', () => {
    const pos = champ.selectionStart;
    vueFormules(champ.value);
    const nouveau = document.getElementById('recherche');
    nouveau.focus();
    nouveau.setSelectionRange(pos, pos);
  });
}

// Noms connus pour un type : ceux du stock et ceux déjà utilisés dans les recettes.
function nomsConnus(type) {
  const noms = etat.stock.filter(a => a.type === type).map(a => a.nom);
  etat.formules.forEach(f => (type === 'cire' ? [f.cire] : type === 'couleur' ? (f.colorants || []).map(l => l.nom) : f.parfums.map(l => l.nom))
    .forEach(n => n && !noms.some(x => memeNom(x, n)) && noms.push(n)));
  return noms.sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
}

// Menu déroulant avec, en bas, une option pour créer un nouveau nom.
function menuNoms(type, valeur, attributs) {
  const noms = nomsConnus(type);
  if (valeur && !noms.some(n => n === valeur)) noms.unshift(valeur);
  return `<select ${attributs} data-menu="${type}" data-avant="${esc(valeur)}">
    <option value="">${t('choisir')}</option>
    ${noms.map(n => `<option value="${esc(n)}" ${n === valeur ? 'selected' : ''}>${esc(n)}</option>`).join('')}
    <option value="__nouveau__">${{ cire: t('nouvelleCire'), couleur: t('nouveauColorant') }[type] || t('nouvelleSenteur')}</option>
  </select>`;
}

const MENU_LIGNE = { parfums: 'parfum', colorants: 'couleur' };

function lignesHtml(cle, lignes, exemple) {
  return lignes.map((l, i) => `<div class="line">
      ${MENU_LIGNE[cle] ? menuNoms(MENU_LIGNE[cle], l.nom, `data-ligne="${cle}" data-i="${i}" data-champ="nom" aria-label="${t('nom')}"`)
        : `<input data-ligne="${cle}" data-i="${i}" data-champ="nom" placeholder="${exemple}" value="${esc(l.nom)}">`}
      <input data-ligne="${cle}" data-i="${i}" data-champ="pct" inputmode="decimal" placeholder="%" value="${esc(l.pct)}">
      <button data-action="retirer" data-cle="${cle}" data-i="${i}" aria-label="${t('retirer')}">${ICONES.croix}</button>
    </div>`).join('');
}

// Fiche en lecture seule ; le bouton Modifier ouvre le formulaire.
function vueFiche(id) {
  const f = formuleParId(id);
  const melange = f.parfums.filter(l => l.nom || l.pct);
  const couches = (f.couches || []).filter(c => c.nom || c.pct);
  const somme = melange.reduce((s, l) => s + nombre(l.pct), 0);
  const texte = (titre, valeur) => valeur ? `<h3>${titre}</h3><p style="white-space:pre-wrap">${esc(valeur)}</p>` : '';
  app.innerHTML = `
    <div class="entete-fiche">
      <a class="btn small" href="#/formules">${t('retour')}</a>
      <div class="actions" style="margin:0">
        <button class="small" data-action="calculer" data-id="${f.id}">${t('calculer')}</button>
        <a class="btn small primary" href="#/formule/${f.id}/modifier">${ICONES.crayon} ${t('modifier')}</a>
      </div>
    </div>
    <h2><button class="star" data-action="favori" data-id="${f.id}" aria-label="${t('favori')}" aria-pressed="${!!f.favori}">${f.favori ? ICONES.etoilePleine : ICONES.etoile}</button>${esc(f.nom)}</h2>
    <div class="duo">
    <div class="card">
      <table class="result">
        <tr><td>${esc(f.cire || t('cire'))}</td><td class="num">${pourcent(100 - nombre(f.dosage) - (f.colorants || []).reduce((s, c) => s + nombre(c.pct), 0))}</td></tr>
        <tr><td>${t('parfumTotal')}<span class="pct">${t('duPoidsTotal')}</span></td><td class="num">${pourcent(nombre(f.dosage))}</td></tr>
      </table>
      <h3>${t('melange')}</h3>
      ${Math.abs(somme - 100) > 0.05 ? `<p class="warn">${t('melangeFaux', pourcent(somme).replace(' %', ''))}</p>` : ''}
      <table class="result">
        ${melange.map(l => `<tr><td>${esc(l.nom)}</td><td class="num">${pourcent(nombre(l.pct))}</td></tr>`).join('')}
      </table>
      ${couches.length ? `<h3>${t('couches')}</h3><table class="result">
        ${couches.map(c => `<tr><td>${esc(c.nom)}</td><td class="num">${pourcent(nombre(c.pct))}</td></tr>`).join('')}</table>` : ''}
      ${(f.colorants || []).length ? `<h3>${t('colorants')}</h3><table class="result">
        ${f.colorants.map(c => `<tr><td>${esc(c.nom)}<span class="pct">${t('duPoidsTotal')}</span></td><td class="num">${pourcent(nombre(c.pct))}</td></tr>`).join('')}</table>` : ''}
    </div>
    <div>
    ${f.design || f.prochaineFois || f.notes || f.etapes || Object.values(f.temperatures || {}).some(Boolean) ? `<div class="card texte-fiche">
      ${texte(t('design'), f.design)}${texte(t('prochaineFois'), f.prochaineFois)}${texte(t('notes'), f.notes)}${texte(t('etapesPerso'), f.etapes)}
      ${texte(t('temperatures'), [['pot', 'tPot'], ['fonte', 'tFonte'], ['couleur', 'tCouleur'], ['parfum', 'tParfum'], ['coulage', 'tCoulage']]
        .filter(([k]) => f.temperatures?.[k]).map(([k, l]) => `${t(l)} : ${f.temperatures[k]} °C`).join('\n'))}
    </div>` : ''}
    <div class="card">
      <h3 style="margin-top:0">${t('photos')}</h3>
      ${(f.photos || []).length ? `<div class="galerie">
        ${f.photos.map(p => `<button class="vignette" data-action="voir-photo" data-id="${p}"><img data-photo="${p}" alt=""></button>`).join('')}
      </div>` : `<p class="muted">${t('aucunePhoto')}</p>`}
      <div class="actions">
        <button data-action="ajouter-photos">${t('ajouterPhotos')}</button>
        <input type="file" id="fichier-photos" accept="image/*" multiple hidden>
      </div>
    </div>
    </div>
    </div>`;
  afficherPhotos();
  document.getElementById('fichier-photos').addEventListener('change', async ev => {
    await ajouterPhotos(f, [...ev.target.files]);
    vueFiche(id);
  });
}

function voirPhoto(objet, photoId, rafraichir) {
  const fond = document.createElement('div');
  fond.className = 'visionneuse';
  fond.innerHTML = `<img data-photo="${photoId}" alt="">
    <div class="actions">
      <button class="danger" data-v="supprimer">${t('supprimer')}</button>
      <button class="primary" data-v="fermer">${t('fermer')}</button>
    </div>`;
  document.body.appendChild(fond);
  lirePhoto(photoId).then(src => { fond.querySelector('img').src = src || ''; });
  fond.addEventListener('click', async ev => {
    const choix = ev.target.dataset.v;
    if (choix === 'supprimer') {
      if (!confirm(t('supprimerPhoto'))) return;
      objet.photos = objet.photos.filter(p => p !== photoId);
      enregistrer();
      await effacerPhotos([photoId]);
      fond.remove();
      rafraichir();
    } else if (choix === 'fermer' || ev.target === fond) {
      fond.remove();
    }
  });
}

function vueFormule(id) {
  if (!brouillon || brouillon.id !== id) {
    const existante = formuleParId(id);
    brouillon = existante ? structuredClone(existante) : {
      id: nouvelId(), nom: '', cire: '', dosage: etat.reglages.dosageDefaut, favori: false,
      parfums: [{ nom: '', pct: '' }], couches: [], colorants: [], design: '', prochaineFois: '', notes: '',
    };
    brouillon.couches = brouillon.couches || [];
    brouillon.colorants = brouillon.colorants || [];
    brouillon.estNouvelle = !existante;
    if (!existante) history.replaceState(null, '', `#/formule/${brouillon.id}/modifier`);
  }
  const f = brouillon;
  const somme = f.parfums.reduce((s, l) => s + nombre(l.pct), 0);
  app.innerHTML = `
    <h2>${f.estNouvelle ? t('nouvelleFormule') : esc(f.nom)}</h2>
    <div class="card">
      <label for="f-nom">${t('nom')}</label>
      <input id="f-nom" data-champ="nom" value="${esc(f.nom)}" placeholder="${t('exNomFormule')}">
      <div class="grid2">
        <div><label for="f-cire">${t('typeCire')}</label>
          ${menuNoms('cire', f.cire, 'id="f-cire" data-champ="cire"')}</div>
        <div><label for="f-dosage">${t('dosage')}</label>
          <input id="f-dosage" data-champ="dosage" inputmode="decimal" value="${esc(f.dosage)}" placeholder="8"></div>
      </div>
    </div>
    <div class="card lines">
      <h3 style="margin-top:0">${t('melange')}</h3>
      <p class="muted">${t('melangeAide')}</p>
      ${lignesHtml('parfums', f.parfums, t('nom'))}
      <div class="actions" style="margin-top:8px;align-items:center">
        <button class="small" data-action="ajouter" data-cle="parfums">${t('ajouterParfum')}</button>
        <span id="somme-melange" class="${Math.abs(somme - 100) > 0.05 ? 'warn' : 'muted'}">${t('total')} : ${pourcent(somme)}</span>
      </div>
      <h3>${t('couches')}</h3>
      <p class="muted">${t('couchesAide')}</p>
      ${lignesHtml('couches', f.couches, t('exCouche'))}
      <button class="small" data-action="ajouter" data-cle="couches">${t('ajouterCouche')}</button>
      <h3>${t('colorants')}</h3>
      <p class="muted">${t('colorantsAide')}</p>
      ${lignesHtml('colorants', f.colorants, '')}
      <button class="small" data-action="ajouter" data-cle="colorants">${t('ajouterColorant')}</button>
    </div>
    <div class="card">
      <label for="f-design" style="margin-top:0">${t('design')}</label>
      <textarea id="f-design" data-champ="design" placeholder="${t('exDesign')}">${esc(f.design)}</textarea>
      <label for="f-prochaine">${t('prochaineFois')}</label>
      <textarea id="f-prochaine" data-champ="prochaineFois" placeholder="${t('exProchaineFois')}">${esc(f.prochaineFois)}</textarea>
      <label for="f-notes">${t('notes')}</label>
      <textarea id="f-notes" data-champ="notes" placeholder="${t('exNotes')}">${esc(f.notes)}</textarea>
    </div>
    <div class="card">
      <h3 style="margin-top:0">${t('fabricationRecette')}</h3>
      <p class="muted">${t('tempsAide')}</p>
      <div class="grid-temp">
        ${[['pot', 'tPot'], ['fonte', 'tFonte'], ['couleur', 'tCouleur'], ['parfum', 'tParfum'], ['coulage', 'tCoulage']].map(([k, l]) => `
          <div><label for="f-t-${k}">${t(l)} (°C)</label>
            <input id="f-t-${k}" data-champ-temp="${k}" value="${esc(f.temperatures?.[k])}" placeholder="${esc(etat.reglages.temperatures[k])}"></div>`).join('')}
      </div>
      <label for="f-etapes">${t('etapesPerso')}</label>
      <textarea id="f-etapes" data-champ="etapes" placeholder="${t('exEtapesPerso')}">${esc(f.etapes)}</textarea>
    </div>
    <div class="actions">
      <button class="primary" data-action="enregistrer-formule">${t('enregistrer')}</button>
      ${f.estNouvelle ? '' : `<button data-action="dupliquer-formule">${t('dupliquer')}</button>
        <button class="danger" data-action="supprimer-formule">${t('supprimer')}</button>`}
      <a class="btn" href="${f.estNouvelle ? '#/formules' : `#/formule/${f.id}`}">${t('annuler')}</a>
    </div>
    <p class="muted">${t('photosAide')}</p>`;
}

function lireFormulaire() {
  if (!brouillon) return;
  app.querySelectorAll('[data-champ]:not([data-ligne])').forEach(el => { brouillon[el.dataset.champ] = el.value.trim(); });
  app.querySelectorAll('[data-ligne]').forEach(el => { brouillon[el.dataset.ligne][el.dataset.i][el.dataset.champ] = el.value.trim(); });
  app.querySelectorAll('[data-champ-temp]').forEach(el => {
    brouillon.temperatures = brouillon.temperatures || {};
    brouillon.temperatures[el.dataset.champTemp] = el.value.trim();
  });
}

// --- Contenants (pots et moules) ---

function vueContenants() {
  const ligne = c => `<li><a class="row" href="#/contenant/${c.id}">
      ${(c.photos || []).length ? `<img class="mini" data-photo="${c.photos[0]}" alt="">` : ''}
      <div class="grow">
        <div class="title">${esc(c.nom)}</div>
        <div class="sub">${grammes(nombre(c.poids))}${c.volume ? ` · ${esc(c.volume)} ml` : ''}${c.meche ? ` · ${t('meche').toLowerCase()} ${esc(c.meche)}` : ''}</div>
      </div></a></li>`;
  app.innerHTML = `<h2>${t('contenants')}</h2>
    <p class="muted">${t('contenantsAide2')}</p>
    <div class="actions" style="margin:0 0 16px">
      <a class="btn primary" href="#/contenant/nouveau">${t('ajouterContenantBtn')}</a>
      <a class="btn" href="#/contenant/nouveau-moule">+ ${t('nouveauMoule')}</a>
    </div>
    ${etat.contenants.length ? [['pot', t('pots')], ['moule', t('moules')]].map(([g, titre]) => {
      const liste = contenantsTries().filter(c => (c.genre || 'pot') === g);
      return liste.length ? `<h3>${titre}</h3><ul class="list">${liste.map(ligne).join('')}</ul>` : '';
    }).join('') : `<div class="empty">${t('aucunContenant')}</div>`}`;
  afficherPhotos();
}

function vueContenant(id) {
  if (!brouillon || brouillon.id !== id) {
    const existant = contenantParId(id);
    brouillon = existant ? structuredClone(existant)
      : { id: nouvelId(), genre: id === 'nouveau-moule' ? 'moule' : 'pot', nom: '', poids: '', volume: '', meche: '', notes: '', photos: [] };
    brouillon.genre = brouillon.genre || 'pot';
    brouillon.estNouvelle = !existant;
    if (!existant) history.replaceState(null, '', '#/contenant/' + brouillon.id);
  }
  const c = brouillon;
  app.innerHTML = `<h2>${c.estNouvelle ? (c.genre === 'moule' ? t('nouveauMoule') : t('nouveauContenant')) : esc(c.nom)}</h2>
    <div class="card">
      <div class="grid2">
        <div><label for="k-genre" style="margin-top:0">${t('genre')}</label>
          <select id="k-genre" data-champ="genre">
            <option value="pot" ${c.genre === 'pot' ? 'selected' : ''}>${t('genrePot')}</option>
            <option value="moule" ${c.genre === 'moule' ? 'selected' : ''}>${t('genreMoule')}</option>
          </select></div>
        <div><label for="k-nom" style="margin-top:0">${t('nom')}</label>
          <input id="k-nom" data-champ="nom" value="${esc(c.nom)}" placeholder="${t('exNomContenant')}"></div>
      </div>
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
    <div class="card">
      <h3 style="margin-top:0">${t('photos')}</h3>
      ${c.estNouvelle ? `<p class="muted">${t('photosContenant')}</p>` : `
        ${(c.photos || []).length ? `<div class="galerie">
          ${c.photos.map(ph => `<button class="vignette" data-action="voir-photo" data-id="${ph}"><img data-photo="${ph}" alt=""></button>`).join('')}
        </div>` : `<p class="muted">${t('aucunePhoto')}</p>`}
        <div class="actions">
          <button data-action="ajouter-photos">${t('ajouterPhotos')}</button>
          <input type="file" id="fichier-photos" accept="image/*" multiple hidden>
        </div>`}
    </div>
    <div class="actions">
      <button class="primary" data-action="enregistrer-contenant">${t('enregistrer')}</button>
      ${c.estNouvelle ? '' : `<button class="danger" data-action="supprimer-contenant">${t('supprimer')}</button>`}
      <a class="btn" href="#/contenants">${t('annuler')}</a>
    </div>`;
  afficherPhotos();
  document.getElementById('fichier-photos')?.addEventListener('change', async ev => {
    lireFormulaire();
    const enregistre = contenantParId(c.id);
    await ajouterPhotos(enregistre, [...ev.target.files]);
    brouillon.photos = [...(enregistre.photos || [])];
    vueContenant(c.id);
  });
}

// --- Mes bougies (bougies terminées, prêtes à vendre) ---

const produitParId = id => etat.produits.find(p => p.id === id);
const somme = (liste, cle) => liste.reduce((s, x) => s + nombre(x[cle]), 0);

// Coût moyen d'une bougie sur toutes ses fournées.
function coutProduit(p) {
  const n = somme(p.entrees, 'n');
  return n ? somme(p.entrees, 'cout') / n : null;
}

// Range les bougies d'une fournée terminée : une ligne par recette et par pot ou moule.
function rangerBougies(f, lignes) {
  const date = new Date().toISOString().slice(0, 10);
  let total = 0;
  lignes.forEach(l => {
    const cle = l.contenant === 'perso' ? 'perso:' + nombre(l.poids) : l.contenant;
    let p = etat.produits.find(x => x.formule === f.id && x.contenant === cle);
    if (!p) {
      p = { id: nouvelId(), formule: f.id, contenant: cle, nom: `${f.nom} · ${nomLigne(l)}`, quantite: 0, prixVente: '', entrees: [], ventes: [] };
      etat.produits.push(p);
    }
    const c = consommation(f, [l]);
    p.entrees.push({ date, n: l.n, cout: c.total, complet: c.complet });
    p.quantite += l.n;
    total += l.n;
  });
  return total;
}

function vueBougies() {
  const liste = [...etat.produits].sort((a, b) => (!b.quantite - !a.quantite) || a.nom.localeCompare(b.nom, 'fr'));
  const enStock = somme(etat.produits, 'quantite');
  const valeur = etat.produits.reduce((s, p) => s + (coutProduit(p) || 0) * p.quantite, 0);
  const ventes = etat.produits.flatMap(p => p.ventes);
  app.innerHTML = `<h2>${t('mesBougies')}</h2>
    <p class="muted">${t('mesBougiesAide')}</p>
    ${liste.length ? `<div class="tuiles">
      <div class="tuile"><span class="l">${t('tEnStock')}</span><span class="v">${enStock}</span><span class="d">${t('tBougiesPretes')}</span></div>
      <div class="tuile"><span class="l">${t('tValeur')}</span><span class="v">${euros(valeur)}</span><span class="d">${t('tAuCout')}</span></div>
      <div class="tuile"><span class="l">${t('tVendues')}</span><span class="v">${somme(ventes, 'n')}</span><span class="d">${t('tDepuisDebut')}</span></div>
      <div class="tuile"><span class="l">${t('tEncaisse')}</span><span class="v">${euros(somme(ventes, 'prix'))}</span><span class="d">${t('tTotalVentes')}</span></div></div>
      <ul class="list bougies">${liste.map(p => {
        const cout = coutProduit(p);
        const incomplet = p.entrees.some(e => !e.complet);
        return `<li class="${p.quantite ? '' : 'vide'}"><a class="row" href="#/bougie/${p.id}"><span class="nb">${p.quantite}</span><div class="grow">
          <div class="title">${esc(p.nom.split(' · ')[0])}</div>
          <div class="sub">${esc(p.nom.split(' · ').slice(1).join(' · '))}${cout !== null ? ' · ' : ''}${cout !== null ? `${t('coutUnite')} ${incomplet ? '≥ ' : ''}${euros(cout)}` : ''}${p.prixVente !== '' ? ` · ${t('venteCourt')} ${euros(nombre(p.prixVente))}` : ''}</div>
        </div></a>
        <button class="small doux" data-action="vendre" data-id="${p.id}" ${p.quantite ? '' : 'disabled'}>${t('vendu')}</button></li>`;
      }).join('')}</ul>`
      : `<div class="empty">${t('aucuneBougie')}</div>`}`;
}

function vueBougie(id) {
  const p = produitParId(id);
  if (!p) return aller('#/bougies');
  const date = d => new Date(d).toLocaleDateString(locale());
  app.innerHTML = `
    <div class="entete-fiche"><a class="btn small" href="#/bougies">${t('retourBougies')}</a>
      <button class="primary small" data-action="vendre" data-id="${p.id}" ${p.quantite ? '' : 'disabled'}>${t('vendu')}</button></div>
    <h2>${esc(p.nom)}</h2>
    <div class="card">
      <div class="grid2">
        <div><label for="b-quantite" style="margin-top:0">${t('enStock')}</label>
          <input id="b-quantite" inputmode="numeric" value="${p.quantite}"></div>
        <div><label for="b-prix" style="margin-top:0">${t('prixVente')}</label>
          <input id="b-prix" inputmode="decimal" value="${esc(p.prixVente)}"></div>
      </div>
      <div class="actions">
        <button class="primary" data-action="enregistrer-bougie" data-id="${p.id}">${t('enregistrer')}</button>
        <button class="danger" data-action="supprimer-bougie" data-id="${p.id}">${t('supprimer')}</button>
      </div>
    </div>
    <div class="card">
      <h3 style="margin-top:0">${t('fabriquees')}</h3>
      <table class="result petit">${[...p.entrees].reverse().map(e => `<tr><td>${date(e.date)}<span class="pct">${t('bougies', e.n)}</span></td>
        <td class="num">${e.complet ? '' : '≥ '}${euros(e.cout / e.n)} <span class="pct">/ ${t('coutUnite')}</span></td></tr>`).join('')}</table>
      <h3>${t('ventes')}</h3>
      ${p.ventes.length ? `<table class="result petit">${p.ventes.map((v, i) => [v, i]).reverse().map(([v, i]) => `<tr><td>${date(v.date)}<span class="pct">× ${v.n}${v.mode ? ' · ' + t('modes')[v.mode] : ''}</span></td>
        <td class="num">${euros(nombre(v.prix))} <button class="small" data-action="annuler-vente" data-id="${p.id}" data-i="${i}" aria-label="${t('supprimer')}">${ICONES.croix}</button></td></tr>`).join('')}</table>`
        : `<p class="muted">${t('aucuneVente')}</p>`}
    </div>`;
}

// --- Stock ---

// --- Idées selon le stock ---

// Pour une recette et un contenant : combien de bougies le stock permet, et ce qui bloque.
// Une senteur absente du stock bloque ; une cire, couleur, un pot ou une mèche jamais
// ajouté au stock ne bloque pas (on ne sait pas s'il en reste) mais est signalé.
function possibles(f, contenant) {
  const p = nombre(contenant.poids);
  // Seules les senteurs comptent : cire, couleurs, pots et mèches sont ignorés.
  const postes = consommation(f, [{ contenant: contenant.id, p, n: 1 }]).postes.filter(x => x.type === 'parfum');
  let max = Infinity;
  const limites = [];
  const manquants = [];
  const nonSuivis = [];
  postes.forEach(x => {
    if (!x.article) {
      if (x.type === 'parfum') { manquants.push(x.nom); max = 0; } else nonSuivis.push(x.nom);
      return;
    }
    const n = Math.floor(Math.max(0, nombre(x.article.quantite)) / x.quantite + 1e-9);
    if (n < max) { max = n; limites.length = 0; }
    if (n === max) limites.push(x.type === 'pot' ? t('typeNom').pot.toLowerCase() + 's' : x.type === 'meche' ? `${t('typeNom').meche.toLowerCase()} ${x.nom}` : x.nom);
    if (n === 0) manquants.push(x.type === 'parfum' && nombre(x.article.quantite) > 0 ? t('pasAssez', x.nom) : x.nom);
  });
  return { max: max === Infinity ? null : max, limites, manquants, nonSuivis };
}

function vueIdees() {
  const ui = etat.ui;
  const senteursStock = etat.stock.filter(a => a.type === 'parfum' && nombre(a.quantite) > 0)
    .sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));
  if (ui.ideeSenteur && !senteursStock.some(a => memeNom(a.nom, ui.ideeSenteur))) ui.ideeSenteur = '';
  const contenants = contenantsTries().filter(c => nombre(c.poids) > 0);
  const filtre = ui.ideeSenteur;
  const formules = formulesTriees().filter(f => !filtre || f.parfums.some(l => memeNom(l.nom, filtre)));

  const faisables = [];
  const presque = [];
  formules.forEach(f => {
    if (!contenants.length) {
      // Sans contenant, on regarde seulement si les senteurs sont en stock.
      const manquants = f.parfums.filter(l => l.nom && !etat.stock.some(a => a.type === 'parfum' && memeNom(a.nom, l.nom) && nombre(a.quantite) > 0)).map(l => l.nom);
      (manquants.length ? presque : faisables).push({ f, tailles: [], manquants, nonSuivis: [] });
      return;
    }
    const tailles = contenants.map(c => ({ c, ...possibles(f, c) }));
    const ok = tailles.filter(x => x.max === null || x.max > 0);
    const nonSuivis = [...new Set(tailles.flatMap(x => x.nonSuivis))];
    if (ok.length) {
      const limites = ok.filter(x => x.limites.length).map(x => `${x.c.nom} → ${x.limites.join(', ')}`);
      faisables.push({ f, tailles: ok, limites, nonSuivis, grammes: Math.max(...ok.map(x => x.max === null ? Infinity : x.max * nombre(x.c.poids))) });
    } else {
      // Ce qui manque pour la plus petite taille.
      presque.push({ f, tailles: [], manquants: tailles[0].manquants, nonSuivis });
    }
  });
  // D'abord les favoris, puis celles qui permettent de couler le plus.
  faisables.sort((a, b) => (b.f.favori - a.f.favori) || (b.grammes - a.grammes) || a.f.nom.localeCompare(b.f.nom, 'fr'));
  presque.sort((a, b) => (a.manquants.length - b.manquants.length) || a.f.nom.localeCompare(b.f.nom, 'fr'));
  const presqueAffiches = presque.filter(x => x.manquants.length && x.manquants.length <= 2);

  const libres = senteursStock.filter(a => !etat.formules.some(f => f.parfums.some(l => memeNom(l.nom, a.nom))));

  const tailleBouton = (f, x) => `<button class="small" data-action="calculer-idee" data-id="${f.id}" data-contenant="${x.c.id}" data-n="${x.max || 1}">
      ${esc(x.c.nom)} · ${x.max === null ? '∞' : t('maxBougies', x.max)}</button>`;
  const carte = (x, faisable) => `<li><div class="grow">
      <a class="title" href="#/formule/${x.f.id}" style="color:inherit">${x.f.favori ? '★ ' : ''}${esc(x.f.nom)}</a>
      ${pastilles(x.f.parfums)}
      ${faisable && x.tailles.length ? `<div class="actions" style="margin-top:10px">${x.tailles.map(tt => tailleBouton(x.f, tt)).join('')}</div>` : ''}
      ${faisable && x.limites?.length ? `<div class="sub">${t('limitePar', x.limites.map(esc).join(' · '))}</div>` : ''}
      ${!faisable ? `<div class="sub warn">${t('manque', x.manquants.map(esc).join(', '))}</div>` : ''}
    </div>${!faisable || !x.tailles.length ? `<button class="small" data-action="calculer" data-id="${x.f.id}">${t('calculer')}</button>` : ''}</li>`;

  app.innerHTML = `<p><a href="#/formules">${t('retour')}</a></p>
    <h2>${t('idees')}</h2>
    <p class="muted">${t('ideesAide')}</p>
    ${!etat.stock.some(a => a.type === 'parfum') ? `<div class="card rappel">${t('ideesSansStock')} <a href="#/stock">${t('stock')}</a></div>` : ''}
    ${!contenants.length ? `<div class="card rappel">${t('ideesSansContenant')} <a href="#/contenants">${t('navContenants')}</a></div>` : ''}
    ${senteursStock.length ? `<label for="idee-senteur">${t('ideesAvec')}</label>
      <select id="idee-senteur" data-ui="ideeSenteur" style="max-width:420px">
        <option value="">${t('toutes')}</option>
        ${senteursStock.map(a => `<option value="${esc(a.nom)}" ${memeNom(a.nom, filtre) ? 'selected' : ''}>${esc(a.nom)} (${quantiteTexte(a.quantite, 'ml')})</option>`).join('')}
      </select>` : ''}
    <h3>${t('faisables')}</h3>
    ${faisables.length ? `<ul class="list">${faisables.map(x => carte(x, true)).join('')}</ul>` : `<div class="empty">${t('aucuneIdee')}</div>`}
    ${presqueAffiches.length ? `<h3>${t('presque')}</h3><ul class="list">${presqueAffiches.map(x => carte(x, false)).join('')}</ul>` : ''}
    ${libres.length && !filtre ? `<h3>${t('senteursLibres')}</h3><p class="muted">${t('senteursLibresAide')}</p>
      <div class="pastilles">${libres.map(a => `<span class="pastille">${esc(a.nom)} <b>${quantiteTexte(a.quantite, 'ml')}</b></span>`).join('')}</div>` : ''}`;
}

function vueStock() {
  app.innerHTML = `<h2>${t('stock')}</h2>
    <p class="muted">${t('stockAide')}</p>
    ${alertesHtml()}
    <div class="actions" style="margin:0 0 16px">
      <a class="btn primary" href="#/stock/nouveau">${t('nouvelArticle')}</a>
      <a class="btn" href="#/facture">${t('lireFacture')}</a>
      <span class="pousse"></span>
      <button class="lien" data-action="stock-depuis-recettes">${t('depuisRecettes')}</button>
      ${etat.formules.length && etat.stock.length ? `<a class="btn lien" href="#/idees">${t('ideesCourt')}</a>` : ''}
    </div>
    ${etat.stock.length ? TYPES.filter(ty => etat.stock.some(a => a.type === ty)).map(ty => `
      <h3>${t('types')[ty]} <span class="compte">${etat.stock.filter(a => a.type === ty).length}</span></h3>
      <ul class="list serre">${etat.stock.filter(a => a.type === ty).sort((a, b) => a.nom.localeCompare(b.nom, 'fr')).map(a => `
        <li><a class="row" href="#/stock/${a.id}"><div class="grow">
          <div class="title">${esc(a.nom)}</div>
          <div class="sub">${prixUnitaireTexte(a) || t('aucunAchat')}</div>
        </div>
        <div class="qte ${a.quantite <= nombre(a.seuil) ? 'bas' : ''}">${a.quantite > 0 ? quantiteTexte(a.quantite, UNITE[a.type]).replace('pièce(s)', 'p.') : t('epuise')}</div></a></li>`).join('')}
      </ul>`).join('')
      : `<div class="empty">${t('aucunArticle')}</div>`}`;
}

function vueArticle(id) {
  if (!brouillon || brouillon.id !== id) {
    const existant = articleParId(id);
    brouillon = existant ? structuredClone(existant)
      : { id: nouvelId(), type: 'parfum', nom: '', quantite: 0, seuil: SEUIL.parfum, achats: [], notes: '' };
    brouillon.estNouvelle = !existant;
    if (!existant) history.replaceState(null, '', '#/stock/' + brouillon.id);
  }
  const a = brouillon;
  const u = t('unites')[UNITE[a.type]];
  const aujourdhui = new Date().toISOString().slice(0, 10);
  app.innerHTML = `
    <div class="entete-fiche"><a class="btn small" href="#/stock">${t('retourStock')}</a></div>
    <h2>${a.estNouvelle ? t('nouvelArticleTitre') : esc(a.nom)}</h2>
    <div class="card">
      <div class="grid2">
        <div><label for="s-type">${t('type')}</label>
          <select id="s-type" data-champ="type">
            ${TYPES.map(ty => `<option value="${ty}" ${ty === a.type ? 'selected' : ''}>${t('typeNom')[ty]}</option>`).join('')}
          </select></div>
        <div><label for="s-nom">${t('nom')}</label>
          <input id="s-nom" data-champ="nom" value="${esc(a.nom)}" placeholder="${t('exNomArticle')}"></div>
      </div>
      ${a.type === 'pot' ? `<label for="s-contenant">${t('potLie')}</label>
        <select id="s-contenant" data-champ="contenant">
          <option value="">${t('aucun')}</option>
          ${contenantsTries().filter(c => c.genre !== 'moule').map(c => `<option value="${c.id}" ${c.id === a.contenant ? 'selected' : ''}>${esc(c.nom)}</option>`).join('')}
        </select>` : ''}
      <div class="grid2">
        <div><label for="s-quantite">${t('enStock')} (${u})</label>
          <input id="s-quantite" data-champ="quantite" inputmode="decimal" value="${esc(Math.round(nombre(a.quantite) * 10) / 10)}"></div>
        <div><label for="s-seuil">${t('seuil', u)}</label>
          <input id="s-seuil" data-champ="seuil" inputmode="decimal" value="${esc(a.seuil)}"></div>
      </div>
      <label for="s-notes">${t('notes')}</label>
      <textarea id="s-notes" data-champ="notes" placeholder="${t('exNotesArticle')}">${esc(a.notes)}</textarea>
    </div>
    <div class="card">
      <h3 style="margin-top:0">${t('nouvelAchat')}</h3>
      <div class="grid3">
        <div><label for="a-date">${t('date')}</label><input id="a-date" type="date" data-conv="a" value="${aujourdhui}"></div>
        <div><label for="a-qte">${t('quantiteAchetee', u)}</label><input id="a-qte" inputmode="decimal"></div>
        ${champMontant('a', t('prixPaye').replace(/ \(.*\)$/, ''))}
      </div>
      <div class="actions"><button data-action="ajouter-achat">${t('ajouterAchat')}</button></div>
      <h3>${t('achats')}${coutUnitaire(a) !== null ? ` <span class="muted" style="font-weight:400">· ${t('prixMoyen')} ${prixUnitaireTexte(a)}</span>` : ''}</h3>
      ${a.achats.length ? `<table class="result petit">${[...a.achats].map((x, i) => [x, i]).reverse().map(([x, i]) => `
        <tr><td>${new Date(x.date).toLocaleDateString(locale())}<span class="pct">${quantiteTexte(nombre(x.quantite), UNITE[a.type])}</span></td>
          <td class="num">${euros(nombre(x.prix))}${origineTexte(x.origine)} <button class="small" data-action="supprimer-achat" data-i="${i}" aria-label="${t('supprimer')}">${ICONES.croix}</button></td></tr>`).join('')}
      </table>` : `<p class="muted">${t('aucunAchat')}</p>`}
    </div>
    <div class="actions">
      <button class="primary" data-action="enregistrer-article">${t('enregistrer')}</button>
      ${a.estNouvelle ? '' : `<button class="danger" data-action="supprimer-article">${t('supprimer')}</button>`}
      <a class="btn" href="#/stock">${t('annuler')}</a>
    </div>`;
}

// Enregistre le brouillon d'article dans le stock. Renommer une cire ou une senteur
// renomme aussi les recettes qui l'utilisent, pour que le lien vers les prix tienne.
function sauverArticle() {
  lireFormulaire();
  const { estNouvelle, ...a } = brouillon;
  if (a.type === 'pot' && !a.nom && a.contenant) a.nom = contenantParId(a.contenant)?.nom || '';
  if (!a.nom) { toast(t('nommerArticle')); return null; }
  a.quantite = nombre(a.quantite);
  a.seuil = nombre(a.seuil);
  if (a.type !== 'pot') delete a.contenant;
  const ancien = articleParId(a.id);
  if (ancien && ancien.type === a.type && !memeNom(ancien.nom, a.nom)) {
    etat.formules.forEach(f => {
      if (a.type === 'cire' && memeNom(f.cire, ancien.nom)) f.cire = a.nom;
      if (a.type === 'parfum') f.parfums.forEach(l => { if (memeNom(l.nom, ancien.nom)) l.nom = a.nom; });
      if (a.type === 'couleur') (f.colorants || []).forEach(l => { if (memeNom(l.nom, ancien.nom)) l.nom = a.nom; });
    });
  }
  const idx = etat.stock.findIndex(x => x.id === a.id);
  if (idx >= 0) etat.stock[idx] = a; else etat.stock.push(a);
  brouillon = { ...structuredClone(a), estNouvelle: false };
  enregistrer();
  return a;
}

// Ajoute au stock les cires, senteurs, pots et mèches déjà utilisés ailleurs.
function stockDepuisRecettes() {
  let n = 0;
  const ajouter = (type, nom, extra) => { if (nom && !articleNomme(type, nom)) { creerArticle(type, nom, extra); n++; } };
  nomsConnus('cire').forEach(nom => ajouter('cire', nom));
  nomsConnus('parfum').forEach(nom => ajouter('parfum', nom));
  nomsConnus('couleur').forEach(nom => ajouter('couleur', nom));
  etat.contenants.forEach(c => {
    if (c.genre !== 'moule' && !etat.stock.some(a => a.type === 'pot' && a.contenant === c.id)) { creerArticle('pot', c.nom, { contenant: c.id }); n++; }
    ajouter('meche', c.meche);
  });
  enregistrer();
  toast(t('articlesCrees', n));
  vueStock();
}

// Articles à racheter, affichés en haut de la page Stock.
function alertesHtml() {
  const liste = enAlerte();
  return liste.length ? `<div class="card rappel compact"><h3>${t('aRacheter')} <span class="compte">${liste.length}</span></h3>
    <div class="puces">${[...liste].sort((a, b) => a.quantite - b.quantite).map(a => `<a class="puce ${a.quantite > 0 ? '' : 'vide'}" href="#/stock/${a.id}"><strong>${esc(a.nom)}</strong> ${a.quantite > 0 ? quantiteTexte(a.quantite, UNITE[a.type]).replace('pièce(s)', 'p.') : t('epuise')}</a>`).join('')}</div></div>` : '';
}

// --- Rapport (entrées et sorties) ---

// Tous les mouvements d'argent : achats du stock, ventes de bougies, et ceux ajoutés à la main.
function tousMouvements() {
  return [
    ...etat.stock.flatMap(a => a.achats.map(x => ({ date: x.date, libelle: t('achatDe', a.nom), montant: -nombre(x.prix), origine: x.origine }))),
    ...etat.produits.flatMap(p => p.ventes.map(v => ({ date: v.date, libelle: t('venteDe', p.nom), montant: nombre(v.prix), mode: v.mode }))),
    ...etat.mouvements.map(m => ({ ...m, manuel: true, montant: m.sens === 'sortie' ? -nombre(m.montant) : nombre(m.montant) })),
  ].sort((a, b) => b.date.localeCompare(a.date));
}

function vueRapport() {
  const tous = tousMouvements();
  const annees = [...new Set([String(new Date().getFullYear()), ...tous.map(m => m.date.slice(0, 4))])].sort().reverse();
  const annee = annees.includes(etat.ui.annee) ? etat.ui.annee : annees[0];
  const liste = tous.filter(m => m.date.startsWith(annee));
  const totaux = l => ({ e: l.filter(m => m.montant > 0).reduce((s, m) => s + m.montant, 0), s: -l.filter(m => m.montant < 0).reduce((s, m) => s + m.montant, 0) });
  const an = totaux(liste);
  const mois = [...new Set(liste.map(m => m.date.slice(0, 7)))].sort().reverse();
  const nomMois = m => new Date(m + '-15').toLocaleDateString(locale(), { month: 'long' });
  const signe = x => `<span class="${x < 0 ? 'warn' : ''}">${euros(x)}</span>`;
  app.innerHTML = `<h2>${t('rapport')}</h2>
    <p class="muted">${t('rapportAide')}</p>
    <div class="actions" style="margin:0 0 16px;align-items:center">
      <select data-ui="annee" aria-label="${t('annee')}" style="width:auto">${annees.map(a => `<option ${a === annee ? 'selected' : ''}>${a}</option>`).join('')}</select>
      <button data-action="exporter-csv">${t('exporterCsv')}</button>
    </div>
    <div class="tuiles">
      <div class="tuile"><span class="l">${t('entrees')}</span><span class="v">${euros(an.e)}</span><span class="d">${t('tVentesRecettes')}</span></div>
      <div class="tuile"><span class="l">${t('sorties')}</span><span class="v">${euros(an.s)}</span><span class="d">${t('tAchatsDepenses')}</span></div>
      <div class="tuile ${an.e - an.s < 0 ? 'neg' : 'pos'}"><span class="l">${t('solde')}</span><span class="v">${euros(an.e - an.s)}</span><span class="d">${an.e - an.s < 0 ? t('tSoldeNeg') : t('tSoldePos')}</span></div>
    </div>
    ${mois.length ? `<div class="card"><h3 style="margin-top:0">${t('mois')}</h3><table class="result petit moisT">
        <tr><td></td><td></td><td class="num muted">${t('entrees')}</td><td class="num muted">${t('sorties')}</td><td class="num muted">${t('solde')}</td></tr>
        ${(() => { const max = Math.max(...mois.map(m => { const x = totaux(liste.filter(v => v.date.startsWith(m))); return Math.max(x.e, x.s); }), 1);
          return mois.map(m => { const x = totaux(liste.filter(v => v.date.startsWith(m))); return `<tr><td>${nomMois(m)}</td>
          <td class="barres"><i class="e" style="width:${x.e / max * 100}%"></i><i class="s" style="width:${x.s / max * 100}%"></i></td>
          <td class="num">${euros(x.e)}</td><td class="num">${euros(x.s)}</td><td class="num">${signe(x.e - x.s)}</td></tr>`; }).join(''); })()}
      </table></div>` : ''}
    <details class="card repli saisie">
      <summary><span>+ ${t('autreMouvement')}</span></summary>
      <div class="grid2">
        <div><label for="m-sens">${t('type')}</label>
          <select id="m-sens"><option value="sortie">${t('sortie')}</option><option value="entree">${t('entree')}</option></select></div>
        <div><label for="m-date">${t('date')}</label><input id="m-date" type="date" data-conv="m" value="${new Date().toISOString().slice(0, 10)}"></div>
      </div>
      <div class="grid3">
        <div><label for="m-libelle">${t('libelle')}</label><input id="m-libelle" placeholder="${t('exLibelle')}"></div>
        ${champMontant('m', t('montant').replace(/ \(.*\)$/, ''))}
        <div><label for="m-mode">${t('paiement')}</label><select id="m-mode">${optionsModes(etat.reglages.dernierMode || 'especes')}</select></div>
      </div>
      <div class="actions"><button class="primary" data-action="ajouter-mouvement">${t('ajouterMouvement')}</button></div>
    </details>
    <div class="card">
      <h3 style="margin-top:0">${t('mouvements')}</h3>
      ${liste.length ? `<table class="result petit journal">${liste.map((m, k) => `${k === 0 || liste[k - 1].date.slice(0, 7) !== m.date.slice(0, 7) ? `<tr class="mois"><td colspan="2">${nomMois(m.date.slice(0, 7))}</td></tr>` : ''}<tr>
        <td><span class="jour">${new Date(m.date).toLocaleDateString(locale(), { day: '2-digit', month: '2-digit' })}</span>${esc(m.libelle)}<span class="pct">${m.mode ? t('modes')[m.mode] : ''}</span></td>
        <td class="num">${signe(m.montant)}${origineTexte(m.origine)}${m.manuel ? ` <button class="small" data-action="supprimer-mouvement" data-id="${m.id}" aria-label="${t('supprimer')}">${ICONES.croix}</button>` : ''}</td></tr>`).join('')}
      </table>` : `<p class="muted">${t('aucunMouvement')}</p>`}
    </div>`;
}

const optionsModes = choisi => Object.entries(t('modes')).map(([k, v]) => `<option value="${k}" ${k === choisi ? 'selected' : ''}>${v}</option>`).join('');

// Le livre des recettes demande le moyen de paiement de chaque vente.
function fenetreVente(p) {
  const fond = document.createElement('div');
  fond.className = 'visionneuse';
  const prix = p.prixVente === '' ? '' : String(p.prixVente).replace('.', locale() === 'fr-FR' ? ',' : '.');
  fond.innerHTML = `<div class="card fenetre">
    <h3 style="margin-top:0">${t('venteTitre', esc(p.nom))}</h3>
    <label for="v-n">${t('quantiteVendue')} <span class="muted" style="font-weight:500">· ${t('enStockN', p.quantite)}</span></label>
    <div class="stepper">
      <button data-v="moins" aria-label="−1">−</button>
      <input id="v-n" inputmode="numeric" value="1">
      <button data-v="plus" aria-label="+1">+</button>
    </div>
    <div class="grid2">
      <div><label for="v-prix">${t('prixUnBougie')}</label><input id="v-prix" inputmode="decimal" value="${esc(prix)}"></div>
      <div><label for="v-mode">${t('paiement')}</label><select id="v-mode">${optionsModes(etat.reglages.dernierMode || 'especes')}</select></div>
    </div>
    <p class="total-vente" id="v-total"></p>
    <div class="actions">
      <button class="primary" data-v="valider">${t('valider')}</button>
      <button data-v="annuler">${t('annuler')}</button>
    </div></div>`;
  document.body.appendChild(fond);
  fond.querySelector('#v-prix').focus();
  // Jamais plus que ce qui est en stock, jamais moins d'une.
  const champN = fond.querySelector('#v-n');
  const lireN = () => Math.min(Math.max(1, Math.round(nombre(champN.value)) || 1), Math.max(1, p.quantite));
  const majTotal = () => { fond.querySelector('#v-total').textContent = t('totalVente', lireN(), euros(lireN() * nombre(fond.querySelector('#v-prix').value))); };
  fond.addEventListener('input', majTotal);
  champN.addEventListener('change', () => { champN.value = lireN(); majTotal(); });
  majTotal();
  fond.addEventListener('click', ev => {
    const choix = ev.target.closest('[data-v]')?.dataset.v;
    if (choix === 'annuler' || ev.target === fond) { fond.remove(); return; }
    if (choix === 'plus' || choix === 'moins') { champN.value = lireN() + (choix === 'plus' ? 1 : -1); champN.value = lireN(); majTotal(); return; }
    if (choix !== 'valider') return;
    const n = lireN();
    const montant = nombre(fond.querySelector('#v-prix').value);
    const mode = fond.querySelector('#v-mode').value;
    // Le prix enregistré est le total de la vente ; le prix par bougie sert de proposition la prochaine fois.
    p.ventes.push({ date: new Date().toISOString().slice(0, 10), n, prix: montant * n, mode });
    p.quantite = Math.max(0, p.quantite - n);
    if (p.prixVente === '' && montant) p.prixVente = montant;
    etat.reglages.dernierMode = mode;
    enregistrer();
    fond.remove();
    toast(p.quantite ? t('venteNotee') : `${t('venteNotee')} · ${t('plusEnStock')}`);
    route();
  });
}

// Point-virgule en français ; virgule décimale seulement pour Excel réglé en France.
function exporterCsv() {
  const fr = etat.reglages.langue === 'fr';
  const sep = fr ? ';' : ',';
  const virgule = fr && etat.reglages.devise === 'EUR';
  const cellule = v => `"${String(v).replace(/"/g, '""')}"`;
  const nb = x => virgule ? x.toFixed(2).replace('.', ',') : x.toFixed(2);
  const lignes = [[t('date'), t('libelle'), t('paiement'), t('montant'), t('origine')].map(cellule).join(sep),
    ...tousMouvements().map(m => [m.date, cellule(m.libelle), cellule(m.mode ? t('modes')[m.mode] : ''), nb(m.montant),
      cellule(m.origine ? `${nb(m.origine.montant)} ${m.origine.devise} (${t('taux', m.origine.devise, etat.reglages.devise)} ${m.origine.taux})` : '')].join(sep))];
  const nom = `bougies-rapport-${new Date().toISOString().slice(0, 10)}.csv`;
  partagerFichier(new File(['﻿' + lignes.join('\r\n')], nom, { type: 'text/csv' }))
    .then(ok => ok && toast(t('exportCree')))
    .catch(() => toast(t('sauvegardeEchouee')));
}

// --- Réglages et sauvegarde ---

function vueReglages() {
  const r = etat.reglages;
  const d = etat.derniereSauvegarde ? new Date(etat.derniereSauvegarde).toLocaleDateString(locale(), { dateStyle: 'long' }) : t('jamais');
  app.innerHTML = `<h2>${t('reglages')}</h2>
    <div class="card reg"><div class="grid2"><div>
      <label for="r-langue" style="margin-top:0">${t('langue')}</label>
      <select id="r-langue" data-reglage="langue">
        <option value="fr" ${r.langue === 'fr' ? 'selected' : ''}>Français</option>
        <option value="en" ${r.langue === 'en' ? 'selected' : ''}>English</option>
      </select></div><div>
      <label for="r-devise" style="margin-top:0">${t('devise')}</label>
      <select id="r-devise" data-reglage="devise">
        ${['CHF', 'EUR'].map(d => `<option ${r.devise === d ? 'selected' : ''}>${d}</option>`).join('')}
      </select></div></div></div>
    <div class="card reg"><h3 style="margin-top:0">${t('calculTitre')}</h3>
      <div class="grid2 trois">
        <div><label for="r-dosage">${t('dosageDefaut')}</label>
          <input id="r-dosage" data-reglage="dosageDefaut" inputmode="decimal" value="${esc(r.dosageDefaut)}"></div>
        <div><label for="r-densite">${t('densite')}</label>
          <input id="r-densite" data-reglage="densite" inputmode="decimal" value="${esc(r.densite)}"></div>
        <div><label for="r-densite-parfum">${t('densiteParfum')}</label>
          <input id="r-densite-parfum" data-reglage="densiteParfum" inputmode="decimal" value="${esc(r.densiteParfum)}"></div>
      </div></div>
    <div class="card reg">
      <h3 style="margin-top:0">${t('temperatures')}</h3>
      <div class="grid-temp">
        ${[['pot', 'tPot'], ['fonte', 'tFonte'], ['couleur', 'tCouleur'], ['parfum', 'tParfum'], ['coulage', 'tCoulage']].map(([k, l]) => `
          <div><label for="r-t-${k}">${t(l)}</label>
            <input id="r-t-${k}" data-temp="${k}" value="${esc(r.temperatures[k])}"></div>`).join('')}
      </div>
    </div>
    <div class="card">
      <h3 style="margin-top:0">${t('sauvegarde')}</h3>
      <p>${t('sauvegardeTexte')}</p>
      <p class="muted">${t('chargerAide')}</p>
      <p class="muted">${t('derniereSauvegarde')} : ${d} · ${t('compte', etat.formules.length, etat.contenants.length)}</p>
      <div class="actions">
        <button class="primary" data-action="exporter">${t('sauvegarderDonnees')}</button>
        <button data-action="importer">${t('restaurer')}</button>
        <button data-action="charger-recettes">${t('chargerRecettes')}</button>
        <input type="file" id="fichier-import" accept=".json,application/json" hidden>
      </div>
    </div>
    <div class="card version-app">
      <span class="muted">${t('versionApp', VERSIONS[0].v)}</span>
      <a class="btn" href="#/versions">${t('voirNouveautes')}</a>
    </div>`;
  document.getElementById('fichier-import').addEventListener('change', importer);
}

function vueVersions() {
  const date = d => new Date(d + 'T12:00:00').toLocaleDateString(locale(), { dateStyle: 'long' });
  app.innerHTML = `<p><a href="#/reglages">${t('retourReglages')}</a></p>
    <h2>${t('nouveautes')}</h2>
    ${VERSIONS.map(x => `<div class="card">
      <h3 style="margin-top:0">V${esc(x.v)} · ${esc(x.titre)}</h3>
      <p class="muted">${date(x.date)}</p>
      <ul>${x.details.map(l => `<li>${esc(l)}</li>`).join('')}</ul>
    </div>`).join('')}`;
}

async function exporter() {
  const { ui, ...donnees } = etat;
  donnees.photos = {};
  for (const id of [...etat.formules, ...etat.contenants].flatMap(x => x.photos || [])) {
    const photo = await lirePhoto(id);
    if (photo) donnees.photos[id] = photo;
  }
  const date = new Date().toISOString().slice(0, 10);
  const nom = `bougies-sauvegarde-${date}.json`;
  const fichier = new File([JSON.stringify(donnees, null, 2)], nom, { type: 'application/json' });
  try {
    if (!await partagerFichier(fichier)) return;
    etat.derniereSauvegarde = new Date().toISOString();
    enregistrer();
    vueReglages();
    toast(t('sauvegardeCreee'));
  } catch (e) {
    toast(t('sauvegardeEchouee'));
  }
}

// Sur iPad, la feuille de partage permet d'enregistrer dans Fichiers ; ailleurs, un téléchargement.
// Renvoie false si la personne a fermé la feuille sans rien faire.
async function partagerFichier(fichier) {
  try {
    if (navigator.canShare && navigator.canShare({ files: [fichier] })) {
      await navigator.share({ files: [fichier], title: fichier.name });
    } else {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(fichier);
      a.download = fichier.name;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 5000);
    }
    return true;
  } catch (e) {
    if (e.name === 'AbortError') return false;
    throw e;
  }
}

// Recettes intégrées : le dépôt est public, donc le fichier est chiffré
// (PBKDF2 + AES-GCM) et ne se lit qu'avec le mot de passe.
async function chargerRecettes() {
  const mdp = prompt(t('demanderMdp'));
  if (!mdp) return;
  try {
    const chiffre = await (await fetch('recettes.chiffre.json', { cache: 'no-cache' })).json();
    const octets = b64 => Uint8Array.from(atob(b64), c => c.charCodeAt(0));
    const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(mdp), 'PBKDF2', false, ['deriveKey']);
    const cle = await crypto.subtle.deriveKey(
      { name: 'PBKDF2', salt: octets(chiffre.sel), iterations: chiffre.iterations, hash: 'SHA-256' },
      base, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
    let clair;
    try {
      clair = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: octets(chiffre.iv) }, cle, octets(chiffre.donnees));
    } catch (e) {
      toast(t('mdpFaux'));
      return;
    }
    const donnees = depuisDonnees(JSON.parse(new TextDecoder().decode(clair)));
    const nouvellesF = donnees.formules.filter(f => !formuleParId(f.id));
    const nouveauxC = donnees.contenants.filter(c => !contenantParId(c.id));
    etat.formules.push(...nouvellesF);
    etat.contenants.push(...nouveauxC);
    enregistrer();
    toast(t('recettesChargees', nouvellesF.length, nouveauxC.length));
    vueReglages();
  } catch (e) {
    toast(t('fichierInvalide'));
  }
}

function importer(ev) {
  const fichier = ev.target.files[0];
  if (!fichier) return;
  const lecteur = new FileReader();
  lecteur.onload = async () => {
    try {
      const donnees = JSON.parse(lecteur.result);
      if (!Array.isArray(donnees.formules) || !Array.isArray(donnees.contenants)) throw new Error('format');
      if (!confirm(t('confirmerRestauration', donnees.formules.length, donnees.contenants.length))) return;
      await photos('readwrite', s => s.clear());
      for (const [id, photo] of Object.entries(donnees.photos || {})) await ecrirePhoto(id, photo);
      delete donnees.photos;
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

// --- Fabrication ---

function etapesFabrication(f, lignes) {
  // Une température vide dans la recette reprend celle des Réglages.
  const tp = { ...etat.reglages.temperatures };
  Object.entries(f.temperatures || {}).forEach(([k, v]) => { if (v) tp[k] = v; });
  const poidsTotal = lignes.reduce((s, l) => s + l.p * l.n, 0);
  const r = calculer(f, poidsTotal);
  const couches = (f.couches || []).filter(c => c.nom || c.pct);
  const liste = items => `<table class="result petit">${items.map(([nom, g]) => `<tr><td>${nom}</td><td class="num">${grammes(g)}</td></tr>`).join('')}</table>`;
  const etapes = [{ titre: t('etPot', tp.pot) }];
  etapes.push({
    titre: t('etPeserCire'),
    detail: couches.length
      ? liste(couches.map(c => [esc(c.nom), partCire(f, poidsTotal * nombre(c.pct) / 100)]))
      : liste([[esc(f.cire || t('cire')), r.cire]]),
  });
  etapes.push({ titre: t('etFondre', tp.fonte) });
  if (f.design || couches.length || r.colorants.length) etapes.push({
    titre: t('etCouleur', tp.couleur),
    detail: (r.colorants.length ? liste(r.colorants.map(l => [`${esc(l.nom)} <span class="pct">${pourcent(l.pct)}</span>`, l.g])) : '')
      + (f.design ? `<p class="muted">${esc(f.design)}</p>` : ''),
  });
  etapes.push({ titre: t('etPeserParfum'), detail: liste([...r.lignes.map(l => [`${esc(l.nom)} <span class="pct">${pourcent(l.pct)}</span>`, l.g]), [`<strong>${t('total')}</strong>`, r.parfum]]) });
  if (couches.length > 1) etapes.push({ titre: t('etRepartir'), detail: liste(couches.map(c => [esc(c.nom), r.parfum * nombre(c.pct) / 100])) });
  etapes.push({ titre: t('etParfum', tp.parfum) });
  etapes.push({
    titre: t('etCouler', tp.coulage),
    detail: `<p class="muted">${t('etCoulerDetail')}</p>` + liste(lignes.map(l => [`${l.n} × ${esc(nomLigne(l))}`, l.p])),
  });
  (f.etapes || '').split('\n').map(e => e.trim()).filter(Boolean).forEach(e => etapes.push({ titre: esc(e) }));
  etapes.push({ titre: t('etFinir') });
  return { etapes, poidsTotal, nb: lignes.reduce((s, l) => s + l.n, 0) };
}

let verrouEcran;
async function garderEcranAllume() {
  try { verrouEcran = await navigator.wakeLock?.request('screen'); } catch (e) { /* pas grave */ }
}
function liberer() {
  verrouEcran?.release?.();
  verrouEcran = null;
}

function vueFabrication() {
  const fab = etat.ui.fabrication;
  const f = fab && formuleParId(fab.formule);
  if (!f) { delete etat.ui.fabrication; return aller('#/calcul'); }
  const lignes = fab.lignes
    .map(l => ({ ...l, p: poidsLigne(l), n: Math.max(0, Math.round(nombre(l.n))) }))
    .filter(l => l.p > 0 && l.n > 0);
  if ((fab.autres || []).length) { vueFournee(fab, lotsDe(fab)); return garderEcranAllume(); }
  const { etapes, poidsTotal, nb } = etapesFabrication(f, lignes);
  fab.nbEtapes = etapes.length;
  const faites = etapes.filter((_, i) => fab.coches[i]).length;
  app.innerHTML = `
    <h2>${t('fabrication')} : ${esc(f.nom)}</h2>
    <p class="muted">${t('bougies', nb)}, ${grammes(poidsTotal)} · <span id="progression">${t('etapesFaites', faites, etapes.length)}</span></p>
    ${f.prochaineFois ? `<div class="card rappel"><strong>${t('rappelProchaineFois')} :</strong>
      <span style="white-space:pre-wrap">${esc(f.prochaineFois)}</span></div>` : ''}
    <div class="progres" aria-hidden="true"><i style="width:${faites / etapes.length * 100}%"></i></div>
    <div class="duo fab">
    <ol class="etapes">
      ${etapes.map((e, i) => `<li class="etape card ${fab.coches[i] ? 'faite' : ''} ${i === etapes.findIndex((_, k) => !fab.coches[k]) ? 'courante' : ''}">
        <label class="coche"><input type="checkbox" data-etape="${i}" ${fab.coches[i] ? 'checked' : ''}>
          <span><span class="num-etape">${i + 1}</span> ${e.titre}</span></label>
        ${e.detail ? `<div class="detail-etape">${e.detail}</div>` : ''}
      </li>`).join('')}
    </ol>
    <div class="colle">
    ${(c => c ? `<div class="card">${c.replace('<h3>', '<h3 style="margin-top:0">')}</div>` : '')(coutHtml(f, lignes, nb))}
    <div class="card">
      <label for="notes-fournee" style="margin-top:0">${t('notesFournee')}</label>
      <textarea id="notes-fournee" placeholder="${t('exNotesFournee')}">${esc(fab.notes)}</textarea>
      <div class="actions">
        <button class="primary" data-action="terminer-fabrication">${t('terminer')}</button>
        <button class="danger" data-action="abandonner-fabrication">${t('abandonner')}</button>
      </div>
    </div>
    </div>
    </div>`;
  garderEcranAllume();
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
      const k = Number(el.dataset.lot) || 0;
      const l = lotUi(k).lignes[i];
      l.n = Math.max(1, Math.round(nombre(l.n)) + (action === 'plus' ? 1 : -1));
      document.getElementById(`c-nombre-${k}-${i}`).value = l.n;
      enregistrer();
      afficherResultat();
      break;
    }
    case 'ajouter-pot':
      lotUi(Number(el.dataset.lot) || 0).lignes.push({ contenant: contenantsTries()[0]?.id || 'perso', poids: '', n: 1 });
      enregistrer();
      vueCalcul();
      break;
    case 'retirer-pot':
      lotUi(Number(el.dataset.lot) || 0).lignes.splice(i, 1);
      enregistrer();
      vueCalcul();
      break;
    case 'ajouter-recette': {
      // Propose une recette pas encore dans la fournée.
      const prises = [etat.ui.formule, ...etat.ui.autres.map(x => x.formule)];
      const libre = formulesTriees().find(f => !prises.includes(f.id)) || formulesTriees()[0];
      etat.ui.autres.push({ formule: libre.id, lignes: [{ contenant: contenantsTries()[0]?.id || 'perso', poids: '', n: 1 }] });
      enregistrer();
      vueCalcul();
      document.getElementById(`c-formule-${etat.ui.autres.length}`)?.scrollIntoView({ block: 'center' });
      break;
    }
    case 'retirer-recette':
      etat.ui.autres.splice(Number(el.dataset.lot) - 1, 1);
      enregistrer();
      vueCalcul();
      break;
    case 'favori': {
      const f = formuleParId(id);
      f.favori = !f.favori;
      enregistrer();
      const recherche = document.getElementById('recherche');
      if (recherche) vueFormules(recherche.value); else route();
      break;
    }
    case 'calculer-idee':
      etat.ui.formule = id;
      etat.ui.autres = [];
      etat.ui.lignes = [{ contenant: el.dataset.contenant, poids: '', n: Math.max(1, nombre(el.dataset.n)) }];
      enregistrer();
      aller('#/calcul');
      break;
    case 'calculer':
      etat.ui.formule = id;
      etat.ui.autres = [];
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
      f.colorants = f.colorants.filter(l => l.nom || l.pct);
      const idx = etat.formules.findIndex(x => x.id === f.id);
      if (idx >= 0) etat.formules[idx] = f; else etat.formules.push(f);
      enregistrer();
      brouillon = null;
      toast(t('formuleEnregistree'));
      aller('#/formule/' + f.id);
      break;
    }
    case 'dupliquer-formule': {
      lireFormulaire();
      const { estNouvelle, ...f } = brouillon;
      const copie = { ...structuredClone(f), id: nouvelId(), nom: `${f.nom} ${t('copie')}`, favori: false, photos: [] };
      // Chaque copie a ses propres photos, pour que supprimer l'une ne vide pas l'autre.
      (f.photos || []).forEach(p => {
        const id = nouvelId() + copie.photos.length;
        copie.photos.push(id);
        lirePhoto(p).then(photo => photo && ecrirePhoto(id, photo));
      });
      etat.formules.push(copie);
      enregistrer();
      brouillon = null;
      toast(t('formuleDupliquee'));
      aller('#/formule/' + copie.id);
      break;
    }
    case 'supprimer-formule':
      if (!confirm(t('supprimerFormule', brouillon.nom))) return;
      effacerPhotos(brouillon.photos || []);
      etat.formules = etat.formules.filter(f => f.id !== brouillon.id);
      enregistrer();
      brouillon = null;
      aller('#/formules');
      break;
    case 'ajouter-photos':
      document.getElementById('fichier-photos').click();
      break;
    case 'voir-photo': {
      const [, page, cible] = location.hash.split('/');
      if (page === 'contenant') {
        voirPhoto(contenantParId(cible), id, () => { lireFormulaire(); brouillon.photos = [...contenantParId(cible).photos]; vueContenant(cible); });
      } else {
        voirPhoto(formuleParId(cible), id, () => vueFiche(cible));
      }
      break;
    }
    case 'fabriquer':
      etat.ui.fabrication = { formule: etat.ui.formule, lignes: structuredClone(etat.ui.lignes), autres: structuredClone(etat.ui.autres || []), coches: [], notes: '', notesLots: {} };
      enregistrer();
      aller('#/fabrication');
      break;
    case 'terminer-fabrication':
    case 'abandonner-fabrication': {
      const fab = etat.ui.fabrication;
      if (action === 'abandonner-fabrication' && !confirm(t('abandonnerConfirmer'))) return;
      const f = formuleParId(fab.formule);
      const lots = lotsDe(fab);
      if (action === 'terminer-fabrication' && lots.length) {
        const plusieurs = (fab.autres || []).length > 0;
        const date = new Date().toLocaleDateString(locale());
        let ajoutees = 0, notees = false;
        // Les quantités à retirer du stock sont calculées avant de toucher au stock.
        const retraits = lots.map(x => consommation(x.f, x.lignes).postes.filter(p => p.article));
        lots.forEach((x, k) => {
          const note = (plusieurs ? (fab.notesLots || {})[x.idx] : fab.notes)?.trim();
          if (note) { x.f.notes = [x.f.notes, `${t('fournee', date, x.nb)} : ${note}`].filter(Boolean).join('\n'); notees = true; }
          retraits[k].forEach(p => { p.article.quantite = Math.max(0, nombre(p.article.quantite) - p.quantite); });
          ajoutees += rangerBougies(x.f, x.lignes);
        });
        const bas = enAlerte().length;
        toast(plusieurs ? t('recettesRangees', ajoutees) : notees ? t('fourneeEnregistree') : t('bougiesAjoutees', ajoutees));
        if (bas) setTimeout(() => toast(t('stockBas', bas)), 2400);
      }
      delete etat.ui.fabrication;
      enregistrer();
      liberer();
      aller(action !== 'terminer-fabrication' || !f ? '#/calcul' : (fab.autres || []).length ? '#/bougies' : '#/formule/' + f.id);
      break;
    }
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
      effacerPhotos(contenantParId(brouillon.id)?.photos || []);
      etat.contenants = etat.contenants.filter(c => c.id !== brouillon.id);
      enregistrer();
      brouillon = null;
      aller('#/contenants');
      break;
    case 'vendre':
      fenetreVente(produitParId(id));
      break;
    case 'annuler-vente': {
      if (!confirm(t('annulerVente'))) return;
      const p = produitParId(id);
      p.quantite += nombre(p.ventes[i].n);
      p.ventes.splice(i, 1);
      enregistrer();
      vueBougie(id);
      break;
    }
    case 'enregistrer-bougie': {
      const p = produitParId(id);
      p.quantite = Math.max(0, Math.round(nombre(document.getElementById('b-quantite').value)));
      const prix = document.getElementById('b-prix').value.trim();
      p.prixVente = prix === '' ? '' : nombre(prix);
      enregistrer();
      toast(t('bougieEnregistree'));
      aller('#/bougies');
      break;
    }
    case 'supprimer-bougie': {
      const p = produitParId(id);
      if (!confirm(t('supprimerBougie', p.nom))) return;
      etat.produits = etat.produits.filter(x => x !== p);
      enregistrer();
      aller('#/bougies');
      break;
    }
    case 'exporter-csv':
      exporterCsv();
      break;
    case 'ajouter-mouvement': {
      const libelle = document.getElementById('m-libelle').value.trim();
      const lu = lireMontant('m');
      if (!libelle || !(nombre(document.getElementById('m-prix').value) > 0)) { toast(t('libelleMontant')); return; }
      if (!lu) { toast(t('tauxManquant')); return; }
      const montant = lu.montant;
      etat.mouvements.push({ id: nouvelId(), date: document.getElementById('m-date').value || new Date().toISOString().slice(0, 10),
        sens: document.getElementById('m-sens').value, libelle, montant, mode: document.getElementById('m-mode').value, ...(lu.origine && { origine: lu.origine }) });
      enregistrer();
      toast(t('mouvementAjoute'));
      vueRapport();
      break;
    }
    case 'supprimer-mouvement':
      if (!confirm(t('supprimerMouvement'))) return;
      etat.mouvements = etat.mouvements.filter(m => m.id !== id);
      enregistrer();
      vueRapport();
      break;
    case 'stock-depuis-recettes':
      stockDepuisRecettes();
      break;
    case 'enregistrer-article':
      if (sauverArticle()) { brouillon = null; toast(t('articleEnregistre')); aller('#/stock'); }
      break;
    case 'ajouter-achat': {
      const quantite = nombre(document.getElementById('a-qte').value);
      if (!(quantite > 0) || document.getElementById('a-prix').value.trim() === '') { toast(t('quantiteEtPrix')); return; }
      const lu = lireMontant('a');
      if (!lu) { toast(t('tauxManquant')); return; }
      // L'achat s'ajoute à la quantité affichée, que sauverArticle relit.
      const champ = document.getElementById('s-quantite');
      const avant = champ.value;
      champ.value = Math.round((nombre(avant) + quantite) * 10) / 10;
      brouillon.achats.push({ date: document.getElementById('a-date').value || new Date().toISOString().slice(0, 10), quantite, prix: lu.montant, ...(lu.origine && { origine: lu.origine }) });
      if (!sauverArticle()) { brouillon.achats.pop(); champ.value = avant; return; }
      toast(t('achatAjoute'));
      majBadge();
      vueArticle(brouillon.id);
      break;
    }
    case 'supprimer-achat':
      if (!confirm(t('supprimerAchat'))) return;
      lireFormulaire();
      brouillon.achats.splice(i, 1);
      if (sauverArticle()) vueArticle(brouillon.id);
      break;
    case 'supprimer-article':
      if (!confirm(t('supprimerArticle', brouillon.nom))) return;
      etat.stock = etat.stock.filter(a => a.id !== brouillon.id);
      enregistrer();
      brouillon = null;
      aller('#/stock');
      break;
    case 'exporter':
      exporter();
      break;
    case 'importer':
      document.getElementById('fichier-import').click();
      break;
    case 'charger-recettes':
      chargerRecettes();
      break;
  }
});

app.addEventListener('input', ev => {
  const el = ev.target;
  if (el.dataset.conv) { majConversion(el.dataset.conv, el); return; }
  // Écran Calculer : on recalcule à chaque frappe.
  if (el.dataset.ui) {
    etat.ui[el.dataset.ui] = el.value;
    enregistrer();
    if (el.dataset.ui === 'annee') vueRapport(); else if (el.dataset.ui === 'ideeSenteur') vueIdees(); else afficherResultat();
  } else if (el.dataset.lotFormule !== undefined) {
    lotUi(Number(el.dataset.lotFormule)).formule = el.value;
    enregistrer();
    afficherResultat();
  } else if (el.dataset.noteLot !== undefined) {
    const fab = etat.ui.fabrication;
    fab.notesLots = { ...fab.notesLots, [el.dataset.noteLot]: el.value };
    enregistrer();
  } else if (el.dataset.pot !== undefined) {
    lotUi(Number(el.dataset.lot) || 0).lignes[el.dataset.pot][el.dataset.champPot] = el.value;
    enregistrer();
    if (el.dataset.champPot === 'contenant') vueCalcul(); else afficherResultat();
  } else if (el.dataset.temp) {
    etat.reglages.temperatures[el.dataset.temp] = el.value.trim();
    enregistrer();
  } else if (el.dataset.etape !== undefined) {
    const fab = etat.ui.fabrication;
    fab.coches[el.dataset.etape] = el.checked;
    enregistrer();
    el.closest('.etape').classList.toggle('faite', el.checked);
    const faites = fab.coches.filter(Boolean).length;
    document.getElementById('progression').textContent = t('etapesFaites', faites, fab.nbEtapes);
    const barre = document.querySelector('.progres i');
    if (barre) barre.style.width = `${faites / fab.nbEtapes * 100}%`;
    // L'étape mise en avant est toujours la première qui reste à faire.
    const etapes = [...document.querySelectorAll('.etape')];
    etapes.forEach(e => e.classList.remove('courante'));
    etapes.find(e => !e.querySelector('[data-etape]').checked)?.classList.add('courante');
  } else if (el.id === 'notes-fournee') {
    etat.ui.fabrication.notes = el.value;
    enregistrer();
  } else if (el.dataset.reglage) {
    const cle = el.dataset.reglage;
    etat.reglages[cle] = cle === 'langue' || cle === 'devise' ? el.value : nombre(el.value);
    enregistrer();
    if (cle === 'langue' || cle === 'devise') route();
  } else if (el.dataset.ligne === 'parfums') {
    // Total du mélange mis à jour en direct dans le formulaire.
    const somme = [...app.querySelectorAll('[data-ligne="parfums"][data-champ="pct"]')].reduce((s, x) => s + nombre(x.value), 0);
    const zone = document.getElementById('somme-melange');
    zone.textContent = `${t('total')} : ${pourcent(somme)}`;
    zone.className = Math.abs(somme - 100) > 0.05 ? 'warn' : 'muted';
  }
});

app.addEventListener('change', ev => {
  const el = ev.target;
  if (el.id === 's-type') {
    lireFormulaire();
    if (!articleParId(brouillon.id)) brouillon.seuil = SEUIL[brouillon.type];
    vueArticle(brouillon.id);
  } else if (el.dataset.menu && el.value === '__nouveau__') {
    const type = el.dataset.menu;
    const nom = prompt({ cire: t('nomCire'), couleur: t('nomColorant') }[type] || t('nomSenteur'))?.trim();
    lireFormulaire();
    const valeur = nom ? (articleNomme(type, nom)?.nom || creerArticle(type, nom).nom) : el.dataset.avant;
    if (nom) enregistrer();
    if (el.dataset.ligne) brouillon[el.dataset.ligne][el.dataset.i].nom = valeur; else brouillon.cire = valeur;
    vueFormule(brouillon.id);
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
  if (!/^#\/(formule\/[^/]+\/modifier|contenant\/|stock\/)/.test(location.hash)) brouillon = null;
  route();
});
// Après le chargement de tous les scripts (facture.js complète app.js).
document.addEventListener('DOMContentLoaded', route);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

// Demande au navigateur de ne pas effacer les données quand l'espace manque.
navigator.storage?.persist?.();
