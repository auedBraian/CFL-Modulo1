

function esMultiplo(multiplo1,multiplo2){

    if((multiplo1 % multiplo2) == 0){
     
        return true;
     }
        else{
            return false;
    }
}


    let readlineSync = require("readline-sync");

    
    let cantidadDeDivisores =0;

    let multiplo1=readlineSync.questionInt("ingrese valor a analizar ");

    
    for(let i=1; i <= multiplo1; i++){
    
        if(esMultiplo(multiplo1,i)){

         cantidadDeDivisores = cantidadDeDivisores + 1;
        }
    }

console.log(cantidadDeDivisores);

