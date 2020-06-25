
function completarArreglo (array){

    for(let i=0; i<array.length; i++){
    
     array[i]=readlineSync.questionInt("ingrese numero deseado para la posicion " + i + " : ");   

    }
}


let readlineSync = require("readline-sync");

let dimension = readlineSync.questionInt("ingrese cantidad de elementos del arreglo ");

let arregloALlenar = new Array(dimension);

completarArreglo(arregloALlenar);

console.log(arregloALlenar);



for(let i=arregloALlenar.length-1; i>=0; i-- ){

            console.log(arregloALlenar[i]);

        }