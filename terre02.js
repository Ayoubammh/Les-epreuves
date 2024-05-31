let { argv } = require("process");

let mot = argv.splice(2);
let phrase = mot;

for (let i = 0; i < phrase.length; i++) {
  let coupage = phrase[i];
  console.log(coupage);
}
