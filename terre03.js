//Recupere l'argument
const { argv } = require("process");
const letter = argv.splice(2);

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
console.log(result);
