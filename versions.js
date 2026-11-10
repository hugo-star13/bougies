// Historique des versions affiché dans Réglages > « Voir les nouveautés ».
// Numéro : V2.<numéro de la PR mergée> depuis la V2.0 (avant : V1.<numéro de PR>). À CHAQUE nouvelle PR, ajouter une entrée
// EN HAUT de la liste (la première entrée donne la version affichée dans l'app).
const VERSIONS = [
  { v: '2.0', date: '2026-11-11', titre: 'Nouvelle présentation et fournées à plusieurs recettes', details: [
    'Toute l’app a été remise en ordre : cartes plus claires, titres plus discrets, chiffres importants en grand.',
    'Menu : Calculer, Formules, Mes bougies, Stock et Rapport. Contenants et Réglages sont en bas du menu (en haut à droite quand l’iPad est à la verticale).',
    'Calculer : les grammes à peser sont en gros, la note « La prochaine fois » s’affiche avant la pesée, et le coût tient sur une ligne (toucher pour voir le détail).',
    'Nouveau : plusieurs recettes dans la même fournée avec « + Autre recette dans la même fournée ». Chaque recette a sa lettre (A, B, C).',
    'Le mode fabrication regroupe alors ce qui se fait ensemble (pots, cire, fonte, pesée des parfums), puis guide recette par recette pour la couleur, le parfum et le coulage.',
    'À la fin d’une fournée à plusieurs recettes, chaque recette reçoit ses notes, ses bougies et son décompte de stock.',
    'Fabrication : une barre de progression, et l’étape à faire est mise en avant.',
    'Formules : liste plus compacte, favoris en haut. Stock : les articles à racheter sont regroupés en haut, les quantités basses sont en rose.',
    'Mes bougies et Rapport : les chiffres clés en haut, les mouvements rangés par mois.',
    'Vendre plusieurs bougies d’un coup : la fenêtre « Vendu » demande la quantité et le prix par bougie.',
  ] },
  { v: '1.17', date: '2026-11-08', titre: 'Idées : seulement les senteurs', details: [
    'Les idées de bougies ne dépendent plus que des senteurs en stock : la cire, les couleurs, les pots et les mèches ne sont plus comptés.',
  ] },
  { v: '1.16', date: '2026-11-08', titre: 'Idées de bougies selon le stock', details: [
    'Formules (ou Stock) > « Idées selon mon stock » : les recettes faisables avec les senteurs, la cire, les couleurs, les pots et les mèches en stock.',
    'Pour chaque recette, le nombre maximum de bougies par taille de pot. Toucher une taille ouvre le calcul.',
    'Les recettes où il manque une ou deux senteurs, et les senteurs en stock qui ne sont dans aucune recette.',
    'Un filtre pour voir les recettes avec une senteur précise.',
  ] },
  { v: '1.14', date: '2026-11-06', titre: 'Numéro de version et nouveautés', details: [
    'Le numéro de version est affiché en bas des Réglages.',
    'Le bouton « Voir les nouveautés » liste tout ce qui a changé depuis la première version.',
  ] },
  { v: '1.13', date: '2026-11-06', titre: 'Produits offerts sur les factures', details: [
    'Un article à 0.00 ou marqué « offert », « gratuit », « cadeau » ou « échantillon » entre aussi dans le stock, à prix 0.',
    'La livraison offerte reste ignorée.',
  ] },
  { v: '1.12', date: '2026-11-06', titre: 'Lire une facture PDF pour remplir le stock', details: [
    'Stock > « Lire une facture » : la facture PDF est lue directement sur l’iPad, sans IA et sans rien envoyer sur internet.',
    'Les articles, quantités, prix, frais de port et TVA sont proposés, puis vérifiés et validés avant d’entrer dans le stock.',
  ] },
  { v: '1.11', date: '2026-10-27', titre: 'Nouvelle interface « Sauge et rose poudré »', details: [
    'Nouvelles couleurs, polices, icônes et mode sombre assorti.',
    'iPad à l’horizontale : menu sur le côté ; à la verticale : onglets en bas.',
    'Bouton « Lancer la fabrication » placé juste sous la pesée.',
    'Nouvelle icône de l’app.',
  ] },
  { v: '1.10', date: '2026-10-27', titre: 'Correctif : page Calculer vide', details: [
    'La page Calculer restait vide avec les données déjà enregistrées : c’est corrigé.',
  ] },
  { v: '1.9', date: '2026-10-27', titre: 'Onglet Rapport et francs suisses', details: [
    'Onglet Rapport : entrées, sorties et solde par mois, export pour Excel.',
    'Dépenses et recettes ajoutées à la main, moyen de paiement noté à chaque vente.',
    'Devise réglable, francs suisses par défaut ; achats en euros convertis au cours du jour.',
    'Les alertes de stock passent en haut de la page Stock.',
  ] },
  { v: '1.8', date: '2026-10-27', titre: 'Moules, colorants et ventes', details: [
    'Contenants : pots et moules, avec photos.',
    'Colorants dans les recettes, comptés dans le coût et le stock.',
    'Mes bougies : les bougies terminées avec leur coût, et un bouton Vendu.',
  ] },
  { v: '1.7', date: '2026-10-27', titre: 'Stock et coût des bougies', details: [
    'Onglet Stock : cire, senteurs, couleurs, pots et mèches, avec les achats et leurs prix.',
    'Coût estimé de chaque bougie.',
    'Le stock diminue à la fin d’une fabrication, avec des alertes quand il est bas.',
    'Senteurs et cire choisies dans un menu déroulant.',
  ] },
  { v: '1.6', date: '2026-10-27', titre: 'Recettes intégrées', details: [
    'Réglages > « Charger mes recettes » ajoute les recettes, protégées par un mot de passe.',
  ] },
  { v: '1.5', date: '2026-10-27', titre: 'Mode fabrication guidé', details: [
    'Étapes à cocher, de la pesée au coulage, avec les températures.',
    'Rappel « La prochaine fois » et notes de fournée ajoutées à la recette.',
    'L’écran reste allumé pendant la fabrication.',
  ] },
  { v: '1.4', date: '2026-10-27', titre: 'Mises à jour plus rapides', details: [
    'Les nouvelles versions de l’app arrivent dès qu’elle est rouverte.',
  ] },
  { v: '1.3', date: '2026-10-27', titre: 'Fiche recette et photos', details: [
    'Une recette s’ouvre en lecture seule, avec un bouton Modifier.',
    'Photos sur les recettes, incluses dans la sauvegarde.',
  ] },
  { v: '1.2', date: '2026-10-27', titre: 'Calcul selon sa méthode, français et anglais', details: [
    'Parfum en % du poids total, mélange de senteurs en % qui fait 100, cire = le reste.',
    'Choix de la langue : français ou anglais.',
  ] },
  { v: '1.1', date: '2026-10-27', titre: 'Première version', details: [
    'Formules, contenants, calcul des quantités selon le pot et le nombre de bougies.',
    'Fonctionne hors ligne, sauvegarde et restauration des données.',
  ] },
];
