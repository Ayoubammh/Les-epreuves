let { argv } = require("process");

console.log(argv.splice(1).pop()?.split("/").pop());
