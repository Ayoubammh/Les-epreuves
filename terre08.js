const argument = process.argv.splice(2);

//recuperer le premier nombre et l'exposant et les convertir en nombre
const firstNumber = Number(argument[0])
const exhibitor = Number(argument[1])



if(argument[0] === undefined ){
    console.log("vous n'avez rien mis !");
    
}else if(!Number(argument[0]) || !Number(argument[1]) ){
    console.log("Vous devez mettre que des nombres !");
}else if(argument.length !== 2){
    console.log("Il ne faut avoir que deux nombre !");
}else if(exhibitor < 0){
    console.log("L'exposant doit etre positif !");
}else{
    let puissance = firstNumber ;
for(let i = 1; i < exhibitor; i++){
      puissance *= firstNumber
      
     };
     console.log(puissance );
    
}








