

function completar(limite){

    return Math.floor((Math.random()*limite))
}


function imprimirArray(array){

    for(let i=0; i<array.length; i++){
    
        console.log("el dato elegido por el usuario en la posicion "+ i + " fue " + array[i]);
    }

}




let readlineSync = require("readline-sync");

let arregloAlAzar = new Array(10);

let limite=readlineSync.questionInt("ingrese limite ");


for(let i=0; i<arregloAlAzar.length; i++){

    arregloAlAzar[i]=completar(limite);
    
}

imprimirArray(arregloAlAzar);




