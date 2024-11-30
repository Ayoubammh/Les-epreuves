



//recuperer le premier argument afficher en tableau puis le transformer en string
const characters = process.argv.splice(2);




if(characters[0] === undefined || characters > characters[0] || Number(characters)){
    console.log("erreur.");
}else{
  
  
  let table = [];
  for(let letter in characters[0]){
   
   table.push(letter ) 
   //console.log(letter++);
   }
  console.log(Number(table.slice(-1)) + 1);
    
}
















