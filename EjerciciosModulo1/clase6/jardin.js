
let readlineSync = require("readline-sync");

let cantidadDeInfantes=readlineSync.questionInt("ingrese cantidad de Infantes ");

let salaAzul = 40;
let salaVerde = 35;
let salaAmarilla =30;


if(cantidadDeInfantes < salaAmarilla){

console.log("amarilla");
}

else{

    if(cantidadDeInfantes<salaVerde){
        console.log("verde");
    }

    else{

        if(cantidadDeInfantes<salaAzul){
            console.log("azul");
        }
    }
}