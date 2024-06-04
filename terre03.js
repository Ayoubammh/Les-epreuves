//Recupere l'argument
// Récupère l'argument
const { argv } = require("process");

try {
  // Vérifie s'il y a au moins un argument fourni
  if (argv.length < 3) {
    throw new Error("Aucun argument fourni. Veuillez fournir une lettre.");
  }

  const letter = argv[2];

  // Vérifie que l'argument est une lettre
  if (letter.length !== 1 || !/^[a-zA-Z]$/.test(letter)) {
    throw new Error("Argument invalide. Veuillez fournir une seule lettre.");
  }

  // Convertir l'argument en ASCII
  const asciiValue = letter.charCodeAt(0);

  const lastLetter = 123; // Valeur ASCII pour '{'
  let result = "";

  for (let i = asciiValue; i < lastLetter; i++) {
    let letterSequence = String.fromCharCode(i);
    result = result + letterSequence;
  }

  console.log(result);
} catch (error) {
  console.error(`Erreur: ${error.message}`);
}
