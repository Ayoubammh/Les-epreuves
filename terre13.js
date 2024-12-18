const argument = process.argv.slice(2)


const firstInteger = Number(argument[0])
const secondInteger = Number(argument[1])
const thirdInteger = Number(argument[2])


if(argument.length != 3){
    console.log("Mettez 3 nombres svp.");

}else if(isNaN(firstInteger) || isNaN(secondInteger) || isNaN(thirdInteger)){ 

     console.log("Met que des chiffres !");
     


 } else if(firstInteger ===  secondInteger || secondInteger === thirdInteger || thirdInteger === firstInteger){
        console.log('erreurs.');
        
    
    
} else if((firstInteger > secondInteger && secondInteger > thirdInteger ) || (firstInteger < secondInteger && secondInteger < thirdInteger )) 

{
    console.log(secondInteger);
    
} else if((firstInteger < secondInteger && thirdInteger < firstInteger ) || (firstInteger > secondInteger && firstInteger < thirdInteger) ){
    console.log(firstInteger);
    


} else if((firstInteger > secondInteger && secondInteger < thirdInteger ) || (firstInteger < secondInteger && secondInteger > thirdInteger)){
    console.log(thirdInteger);
    
} 