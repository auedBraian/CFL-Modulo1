

function imprimirRecursivo(array,indice,dimension){

    if(indice<=dimension){
    
         console.log("posicion "+indice+" valor "+ imprimirRecursivo(array,indice+1,dimension));
    }
    return array[indice-1];
    
    }





let readlineSync = require("readline-sync");

let dimension = readlineSync.questionInt("ingrese dimension del arreglo ");

let valoresUsuario = new Array(dimension); 

let indice=0;

    for(let i=0; i<dimension;i++){

        valoresUsuario[i]=(readlineSync.questionInt("ingrese un valor entero "));

    }


imprimirRecursivo(valoresUsuario,indice,dimension);

