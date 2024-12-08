



//recuperer le premier argument afficher en tableau puis le transformer en string
const arguments = process.argv.splice(2);




if(arguments[0] === undefined){
  console.log("Vous n'avez rien mit");

}else if(arguments > arguments[0]){
  console.log("Tu a besoin que d'une chaine");


}else if(Number(arguments)){
  console.log("Les chiffres ne sont pas pris en compte");
  
}else{
        
  let table = [];
  
  
  for(let letter in arguments[0]){
   
   table.push(letter ) 
   }
  console.log(Number(table.slice(-1)) + 1);
    

}










