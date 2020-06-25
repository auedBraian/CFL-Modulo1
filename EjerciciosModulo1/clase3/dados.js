
let cantidadDeDados;

let readlineSync = require("readline-Sync");



cantidadDeDados=readlineSync.questionInt("ingrese cantidad de dados  a tirar en numeros positivos ")

while(cantidadDeDados<=0){

cantidadDeDados=readlineSync.questionInt("ingrese cantidad de dados  a tirar en numeros positivos ");

}
    
    let probabilidad = (1/(6**cantidadDeDados));

    console.log("la probabilidad de que salgan todos los dados con el numero 6 es "+ ((probabilidad*100).toFixed(6)+ " %"));

