
function completarArregloString (array){

    let readlineSync = require("readline-sync");

    for(let i=0; i<array.length; i++){
    
     array[i]=readlineSync.question("ingrese nombre deseado para la posicion " + i + " : ");   

    }
}

function imprimirArray(array){

    for(let i=0; i<array.length; i++){
    
        console.log("el dato elegido por el usuario en la posicion "+ i + " fue " + array[i]);
    }

}


let readlineSync = require("readline-sync");

let dimension;

dimension=readlineSync.questionInt("ingrese cantidad de elementos del arreglo ");

let nombresDeseados = new Array(dimension);

completarArregloString(nombresDeseados);

imprimirArray(nombresDeseados);
