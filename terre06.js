const { argv } = require("process");

//récuperer l'argument et l'affecter en string
const stringRedress = String(argv[2]);
//console.log(stringRedress);

//Boucle qui inverse l'argument string

let reverse = "";
for (let i = stringRedress.length - 1; i >= 0; i--) {
  reverse += stringRedress[i];
}

//Fonction qui gere les erreur si l'argument et un number ou vide
if (
  stringRedress == reverse.toString() ||
  stringRedress === "undefined" ||
  stringRedress === reverse
) {
  console.log("Erreur");
} else {
  console.log(reverse);
}
