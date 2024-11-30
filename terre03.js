//Recupere l'argument
const { argv } = require("process");
let letter = argv.slice(2);

//Convertir l'argument en ASCII
const asciiValues = letter.map((word) =>
  word.split("").map((char) => char.charCodeAt(0))
);

//Converti le tableau en number
const asciiTrueValue = asciiValues.toString();
const asciiNumberValue = Number(asciiTrueValue);
//console.log(asciiNumberValue);

const lastLetter = 123;
let result = "";

for (let i = asciiNumberValue; i < lastLetter; i++) {
  let letterSequence = String.fromCharCode(i);
  result = result + letterSequence;
}

//Gerer le nombre d'argument en entrer et qu'ils prennent en compte que les valeurs ascii de A à z
if (letter.length !== 1 || !/^[a-zA-Z]$/.test(String(letter))) {
  console.log("Error");
} else {
  console.log(result);
}
