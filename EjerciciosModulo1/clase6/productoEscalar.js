
function completarArreglo(array){

    let readlineSync = require("readline-sync");

    for(let i=0; i<array.length; i++){
    
     array[i]=readlineSync.questionInt("ingrese numero deseado para la posicion " + i + " : ");   

    }
}


function multiplicarArreglos(array1,array2){

    let suma =0;
    let resultado =0;

    for(let i=0; i<array1.length; i++ ){

     resultado=array1[i]*array2[i];

     suma=suma+resultado;

    }

    return suma;

}

let readlineSync = require("readline-sync");

let dimension=readlineSync.questionInt("ingrese dimension de los arreglos ");

let arregloNumero1 = new Array(dimension);

let arregloNumero2 = new Array(dimension);


console.log("complete el arreglo numero1");

completarArreglo(arregloNumero1);

console.log("complete el arreglo numero2");

completarArreglo(arregloNumero2);

let productoEscalar=multiplicarArreglos(arregloNumero1,arregloNumero2);


console.log("el producto escalar de los dos arreglos es "+ productoEscalar);












