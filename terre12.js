const argument = process.argv.slice(2)

//recupere les heures et minutes

const heures = argument[0].slice(0, 2)
const minutes = argument[0].slice(3, 5)
const timeTable = argument[0].slice(5,7)
//console.log(timeTable);

//console.log(heures);

if(argument.length !== 1){
    console.log("Met un argument stp!");
    
} else if(heures > 24){
    console.log("Nous n'avons que 24H dans une journée.");
}else if(minutes >= 60){   
    console.log("Nous n'avons que 60 minutes dans une heure.");
    
}else if(argument[0] == "12:" + minutes + "PM"){
    console.log("00:" + minutes);
    
}

else if(timeTable == "AM"){
    console.log(argument[0].slice(0, 5));
    
} else if(timeTable == "PM"){
    console.log((Number(heures) + 12) + argument[0].slice(2, 5));
    
} else if(argument[0] !== Number(heures) + ":" + Number(minutes) + timeTable){
    console.log("Mettez le bon format !");
    
}
