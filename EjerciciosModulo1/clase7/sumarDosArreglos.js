/*
• Hacer la suma de tres arreglos y dejarlo en
otro arreglo
• La dimensión de los arreglos es solicitada al 
usuario
• Los dos arreglos son cargados al azar

*/

function cargarArregloAlAzar(arreglo,dimension){

    for(let i=0; i<dimension; i++){

        arreglo[i]= Math.floor(Math.random()*10);
    }
    
    return arreglo;
}


function sumarArreglos(array1,array2,array3,dimension){

    for(let i=0;i<dimension;i++){

        array3[i]=array1[i]+array2[i];
    }

    return array3;
}



function mostrarArreglo(arreglo,dimension){

    for(let i=0; i<dimension; i++){

        console.log("posicion "+i+" del arreglo: "+arreglo[i]);
    }
    
 }






let readlineSync = require("readline-sync");

let dimension = readlineSync.questionInt("ingrese dimension de los arreglos ");

let arreglo1 = new Array(dimension);

let arreglo2 = new Array(dimension);

let arregloSumatoria = new Array(dimension);

cargarArregloAlAzar(arreglo1,dimension);

cargarArregloAlAzar(arreglo2,dimension);

sumarArreglos(arreglo1,arreglo2,arregloSumatoria,dimension);

console.log("elementos del arreglo1 ");
mostrarArreglo(arreglo1,dimension);

console.log("elementos del arreglo2 ");
mostrarArreglo(arreglo2,dimension);

console.log("elementos del arregloSumatoria ");
mostrarArreglo(arregloSumatoria,dimension);