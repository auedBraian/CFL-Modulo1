
let multiplicando;
let multiplicador;

let readlineSync = require("readline-Sync");

multiplicando = readlineSync.questionInt("Ingrese el mulplicando ");

multiplicador = readlineSync.questionInt("ingrese el multiplicador ");

let resultado = 0;

for( let contador = 1; contador <= multiplicador; contador++){

    
    resultado = (multiplicando*contador)

    console.log("el resultado de multiplicar " + multiplicando + " por " + contador + " es " + resultado);

   
}