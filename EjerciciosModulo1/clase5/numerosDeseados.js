function completarArreglo(array){

    let readlineSync = require("readline-sync");

    for(let i=0; i<array.length; i++){
    
     array[i]=readlineSync.questionInt("ingrese numero deseado para la posicion " + i + " : ");   

    }
}

function imprimirArray(array){

    for(let i=0; i<array.length; i++){
    
        console.log("el dato elegido por el usuario en la posicion "+ i + " fue " + array[i]);
    }


}

let numerosDeseados = new Array(5);

completarArreglo(numerosDeseados);

imprimirArray(numerosDeseados);


