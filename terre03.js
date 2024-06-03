//Recupere l'argument
let { argv } = require("process");
let letter = argv.splice(2);

//Convertir l'argument en ASCII
let asciiValues = letter.map((word) =>
  word.split("").map((char) => char.charCodeAt(0))
);

//Converti le tableau en number
let asciiTrueValue = asciiValues.toString();
let asciiNumberValue = Number(asciiTrueValue);
//console.log(asciiNumberValue);

let lastLetter = 123;
let result = "";

for (let i = asciiNumberValue; i < lastLetter; i++) {
  let letterSequence = String.fromCharCode(i);
  result = result + letterSequence;
}
console.log(result);
