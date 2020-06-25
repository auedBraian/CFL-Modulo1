
function completarArreglo(array){

    let suma = 0;

        for(let i=0; i<array.length; i++){

        array[i]=readlineSync.questionInt("ingrese numero para la posicion " + i + " : ");

        suma = suma + array[i];

        }
        return suma;
}


let readlineSync = require("readline-sync");

let dimension;

dimension=readlineSync.questionInt("ingrese cantidad de elementos del arreglo ");

let elementos = new Array(dimension);


console.log("la suma de los elementos del arreglo es " + completarArreglo(elementos));


