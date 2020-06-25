
function calcularPotencia (base,exponente){

        let resultado;

        resultado= (base**exponente)

        return resultado;
    }





let readlineSync = require("readline-sync");

let base;

let exponente; 



console.log("ingrese la base y el exponente");

base = readlineSync.questionInt("ingrese base ");

    while(exponente<0){
    
        exponente = readlineSync.questionInt("ingrese exponente ");

        }

    if(exponente>=0){

        console.log("el resultado es " + calcularPotencia(base,exponente));
        }
