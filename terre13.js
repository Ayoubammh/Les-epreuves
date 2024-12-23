const argument = process.argv.slice(2)


const firstInteger = Number(argument[0])
const secondInteger = Number(argument[1])
const thirdInteger = Number(argument[2])

for (const element of argument){
    if(isNaN(element)){
        console.log("Met que des chiffres !");
        break
    }
}
    
if(argument.length != 3){
    console.log("Mettez 3 nombres svp.");



}else if(firstInteger ===  secondInteger || secondInteger === thirdInteger || thirdInteger === firstInteger){
        console.log('erreurs.');
        
    
    
} else if((firstInteger > secondInteger && secondInteger > thirdInteger ) || (firstInteger < secondInteger && secondInteger < thirdInteger )) 

{
    console.log(secondInteger);
    
} else if((firstInteger < secondInteger && thirdInteger < firstInteger ) || (firstInteger > secondInteger && firstInteger < thirdInteger) ){
    console.log(firstInteger);
    


} else if((firstInteger > secondInteger && secondInteger < thirdInteger ) || (firstInteger < secondInteger && secondInteger > thirdInteger)){
    console.log(thirdInteger);
    
} 