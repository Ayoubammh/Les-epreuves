
const argument = process.argv.splice(2);

if(argument[0] === undefined){
   console.log("Vous n'avez rien mit !");
   
} else if( !Number(argument[0])){
   console.log("Vous devez mettre un nombre !");
   
} else if(argument.length != 1){
   console.log("Il ne doit avoir que un nombre !");
   
}else{


   let squareRoot = argument[0]
for(let i = 0; i * i  <=  argument[0]; i++){
   squareRoot = i

}
console.log(squareRoot);

}




