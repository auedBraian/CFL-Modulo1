function completarArreglo (array){

   
    for(let i=0; i<array.length; i++){
    
     array[i]=readlineSync.questionInt("ingrese numero deseado para la posicion " + i + " : ");   

    }
}


let readlineSync = require("readline-sync");

let dimension=readlineSync.questionInt("ingrese dimension del arreglo ");


let arreglo1 = new Array(dimension);

let arreglo2 = new Array(dimension);

let arregloSuma= new Array(dimension);

completarArreglo(arreglo1);

completarArreglo(arreglo2);

for(let i=0; i<dimension; i++){

    arregloSuma[i] = arreglo1[i] + arreglo2[i];

    console.log("la suma de los elementos de la posicion " + i + " de los arreglos 1 y arreglo 2 es: " + arregloSuma[i]);
}

 
    
