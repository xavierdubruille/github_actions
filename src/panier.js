// Panier d'une boutique en ligne.
//
// Volontairement minuscule : ce TP porte sur le pipeline, pas sur ce code.
// Vous devez pouvoir comprendre ce fichier en une minute. Si ce n'est pas le
// cas, dites-le, c'est un bug de l'énoncé et pas de votre part.

const TAUX_TVA = 0.21;


/** Arrondit un montant en euros à deux décimales. */
function arrondir(montant) {
  return Math.round(montant * 100) / 100;
}

/** Somme des lignes du panier, hors TVA et hors remise. */
function sousTotal(lignes) {
  return lignes.reduce((somme, ligne) => somme + ligne.prix * ligne.quantite, 0);
}

/** Applique une remise exprimée en pourcentage (0 à 100). */
function appliquerRemise(montant, pourcentage) {
  if (pourcentage < 0 || pourcentage > 100) {
    throw new Error('Pourcentage de remise invalide');
  }
  return montant * (1 - pourcentage / 100);
}

/** Ajoute la TVA à un montant hors taxes. */
function avecTva(montant) {
  return arrondir(montant * (1 + TAUX_TVA));
}

/** Total à payer : sous-total, puis remise, puis TVA. */
function total(lignes, pourcentageRemise = 0) {
  return avecTva(appliquerRemise(sousTotal(lignes), pourcentageRemise));
}

module.exports = {
  TAUX_TVA,
  arrondir,
  sousTotal,
  appliquerRemise,
  avecTva,
  total,
};




