function completarArreglo(array){

    let readlineSync = require("readline-sync");

    for(let i=0; i<array.length; i++){
    
     array[i]=readlineSync.questionInt("ingrese numero deseado para la posicion " + i + " : ");   

    }
}


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


let arregloNumeros = new Array(3);

let arregloNombres = new Array(2);


completarArreglo(arregloNumeros);

completarArregloString(arregloNombres);

imprimirArray(arregloNumeros);

imprimirArray(arregloNombres);


