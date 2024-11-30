
let { argv } = require("process");

const mot = argv.splice(2);

for (let i = 0; i < mot.length; i++) {
  let coupage = mot[i];
  console.log(coupage);
}
