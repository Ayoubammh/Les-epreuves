const argument = process.argv.slice(2);




for (const element  of argument){
   if(isNaN(element)){
    console.log("erreur.");
    process.exit();
   }
   
}

if(argument.length <= 1){
      console.log("Veuillez mettre au minimum 2 argument!");
      
}


for(let i = 1; argument[i]; i++){
      
      if(Number(argument[i] < Number(argument[i - 1]))){
           
            console.log("Pas triéé");
            process.exit();
      } 
}

console.log("Triée!");

 