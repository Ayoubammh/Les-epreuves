const argument = process.argv.slice(2)



const number = argument[0]


const tableNumber = String(number).split('').map(Number)

//boucle qui addition tous les nombres a plus de 2 chiffres pour savoir si ils sont divisible par 3 ou 9
let totalNumber = 0
for(let i in tableNumber){
    totalNumber += tableNumber[i];
}

// pour recuperer le dernier chiffre d'un nombre et savoir si il est divisble par 2 ou 5
lastDigit = number % 10;

 if(!Number(number)){
    console.log("Vous devez mettre un nombre.");
    
}else if(argument.length !==  1){
console.log("Vous devez mettre juste un nombre.");

} else if( number == 1){
    console.log("Le chiffre  1 n'est pas prit en compte.");
    
}

 else if(number == 2 || number == 3 || number == 5){
    console.log(`Oui, ${number} est un nombre premier.`);
    
}else if(lastDigit == 0 || lastDigit == 5){
   
    console.log(`Non, ${number} n'est pas un nombre premier.`);
    
} else if(lastDigit % 2 == 0){
   
    console.log(`Non, ${number} n'est pas un nombre premier.`);

} else if(totalNumber % 3 == 0 || tableNumber % 9 == 0){
    
    console.log(`Non, ${number} n'est pas un nombre premier.`);
} else {
   
    console.log(`Oui, ${number} est un nombre premier.`);
    
}




