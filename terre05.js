const { argv, loadEnvFile } = require("process");

//recupérer les 2 arguments et les transformer en number
const firstNumber = Number(argv[2]);
const secondNumber = Number(argv[3]);

//diviser les arguments et leurs restes
const resultat = firstNumber / secondNumber;
const reste = firstNumber % secondNumber;

//fonction qui affiche le resultat des arguments diviser en fonction des attentes

if (firstNumber > secondNumber && reste >= 0) {
  console.log(`resultat : ${resultat}`);
  console.log(`reste : ${reste}`);
} else if (firstNumber < secondNumber || secondNumber === 0) {
  console.log("erreur.");
}

