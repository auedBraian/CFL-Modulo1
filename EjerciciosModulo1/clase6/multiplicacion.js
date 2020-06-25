

function completarArreglo(array){

    let readlineSync = require("readline-sync");

    for(let i=0; i<array.length; i++){
    
     array[i]=readlineSync.questionInt("ingrese numero para la posicion "+i+" ");   

    }
}


function calcularMultiplicacion(array1,array2,array3){

    for(let i=0; i<array1.length; i++){

        array3[i]=((array1[i]*array2[i]));
    }

    return array3;
}



let readlineSync = require("readline-sync");

let dimension=readlineSync.questionInt("ingrese dimension de los arreglos ");

let arreglo1 = new Array(dimension);

let arreglo2 = new Array(dimension);

let arreglo3 = new Array(dimension);

let arreglo4 = new Array(dimension);

let arregloMultiplicacion = new Array(dimension);

let arregloMultiplicacion2 = new Array(dimension);

let multiplicacionTotal = new Array(dimension);

console.log("cargue los valores del primer arreglo ");
completarArreglo(arreglo1);

console.log("cargue los valores del segundo arreglo ");
completarArreglo(arreglo2);

calcularMultiplicacion(arreglo1,arreglo2,arregloMultiplicacion);

console.log("cargue los valores del tercer arreglo ");
completarArreglo(arreglo3);

console.log("cargue los valores del cuarto arreglo ");
completarArreglo(arreglo4);

calcularMultiplicacion(arreglo3,arreglo4,arregloMultiplicacion2);

calcularMultiplicacion(arregloMultiplicacion,arregloMultiplicacion2,multiplicacionTotal);

console.log(multiplicacionTotal);