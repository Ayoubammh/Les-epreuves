const argument = process.argv.slice(2)


// recupere les heures et minutes
const heures = argument[0].slice(0, 2)
const minutes = argument[0].slice(3, 5)


if(argument.length != 1 ){
    console.log("Un argument stp !");
    
}

else if(heures > 24){
    console.log("Nous n'avons que 24H dans une journée.");

}else if(argument[0] !== Number(heures) + ":" + Number(minutes)){
    console.log("Mettez le bon format !");
    

   
    
} else if(heures > 12){
    console.log((Number(heures) - 12 ) + argument[0].slice(2, 5)+ "pm");
    
} else if(heures < 12){
    console.log(argument[0] + "am");
    
} 

