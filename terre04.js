const { argv } = require("process");

//Récuperer l'argument et l'affecter en nombre
const numberParity = Number(argv[2]);


if (isNaN(numberParity)) {
  console.log("Tu ne me la mettras pas à l'envers.");
} else if (numberParity % 2 === 0) {
  console.log("pair");
} else if (numberParity % 2 !== 0) {
  console.log("impair");
}
