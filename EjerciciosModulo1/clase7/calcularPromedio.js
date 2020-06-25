/*

• El DT de los infantiles del equipo de futbol desea
saber el promedio de la edad de los chicos

• La edad de los chicos va de 3 a 7 años. Las 
edades son cargadas al azar (use la función
aleatorio(menorValor,mayorValor), es decir
aleatorio(3,7))

• Muestre todas las edades y el promedio de las
mismas

*/


function aleatorio(minimo, maximo, array,dimension){

    for(let i=0; i<dimension;i++){

        array[i]= Math.floor(Math.random()*(maximo-minimo))+minimo;
    }
    return array;
}


function imprimirArray(array,dimension){

    for(let i=0; i<dimension; i++){

        console.log("la edad del jugador "+ i + " es "+array[i]);
    }
}


function sumaTotal(array,dimension){

    let suma =0;

        for(let i = 0; i<dimension; i++){

            suma=suma+array[i];
        }

    return suma
    }


let edadMinima = 3;

let edadMaxima = 7;

let dimension;

let readlineSync = require("readline-sync");

dimension= readlineSync.questionInt("ingrese cantidad de jugadores ");

let jugadores = new Array(dimension);

let suma;

aleatorio(edadMinima,edadMaxima,jugadores,dimension);

imprimirArray(jugadores,dimension);

suma=sumaTotal(jugadores,dimension);

let promedio = (suma/dimension);

console.log("el promedio de edad es "+promedio);


