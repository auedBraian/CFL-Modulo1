/*
1.1	Construya un método que permita cargar una cantidad N de personas con sus estados civiles.
Siendo N la cantidad de personas que el usuario desee.
1.2	Construya un método buscarEstado que reciba como parámetro el nombre de una persona y devuelva su estado civil.
1.3	Construya un Algoritmo que consuma/invoque los dos subprocesos anteriores y muestre por pantalla el nombre y estado civil de la persona que deseamos buscar.

*/

function cargarArreglo(array){

for(let i=0; i<array.length;i++){

array[i]=readlineSync.question("ingrese dato ");

}

return array;

}


function buscarEstado(arreglo1,arreglo2,nombre){
    
    let resultado;

    for(let i=0;i<arreglo1;i++){

        if(nombre == arreglo1[i]){

            resultado = arreglo2[i];
        }

            }

       return resultado;     
    }


let readlineSync=require("readline-sync");

let dimension = readlineSync.questionInt("ingrese dimension de los arreglos ");

let personas = new Array(dimension);

let estadoCivil = new Array(dimension);

console.log("ingrese nombre de las personas ");

personas=cargarArreglo(personas);

console.log("ingrese estado civil de cada persona cargada cargada ");

estadoCivil=cargarArreglo(estadoCivil);

let nombreBuscado = readlineSync.question("ingrese el nombre del cual quiere saber el estado civil");

let resultado = buscarEstado(personas,estadoCivil,nombreBuscado)

console.log(resultado);


