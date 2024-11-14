const { log } = require("console");
const { argv } = require("process");

//récuperer l'argument et l'affecter en string
const reverseString = String(argv[2]);
const quotationMarks = [
  String.fromCodePoint(34) + reverseString + String.fromCodePoint(34),
];
let reverse = "";

//Fonction qui gere les erreur si l'argument et un number ou vide
if (
  (quotationMarks && Number(reverseString)) ||
  (reverseString !== reverse.toString() && reverseString === "undefined")
) {
  console.log("Erreur.");
} else {
  for (let i = reverseString.length - 1; i >= 0; i--) {
    reverse += reverseString[i];
  }
  console.log(reverse);
}
