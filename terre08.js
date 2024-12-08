const arguments = process.argv.splice(2);

//recuperer le premier nombre et l'exposant et les convertir en nombre
const baseNumber = arguments[0];
const exponent = arguments[1];

if (baseNumber === undefined){
    console.log("vous n'avez rien mis ! ");

} else if(arguments.length !== 2 ){
    console.log("Il ne faut avoir que deux nombres !");


}else if(exponent < 0){
    console.log("L'exposant doit etre positif !");

}else if(!Number(baseNumber) || !Number(exponent)){
    console.log("Vous devez mettre que des nombres !");
    
}else{
    let puissance = baseNumber ;
for(let i = 1; i < exponent; i++){
      
    puissance *= baseNumber
      
     };
     console.log(puissance);
    
}


