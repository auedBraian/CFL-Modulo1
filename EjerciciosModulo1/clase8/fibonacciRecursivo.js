


function completarAltura(array){
    
    for(let i=0; i<array.length; i++){
    
         array[i] = ((Math.random(2-1,5)+1));    

        }
}


function completarEdad(array){
    
    for(let i=0; i<array.length; i++){
    
         array[i] = ((Math.random(70)));    

        }
}







let readlineSync = require("readline-sync");

let dimension=readlineSync.questionInt("ingrese dimension de los arreglos ");

let nombres = new Array(dimension);

let altura = new Array(dimension);

let edad = new Array(dimension);

completarAltura(altura);
completarEdad(edad);


for(let i=0; i<=dimension-1; i++){

    nombres=readlineSync.question("Ingrese nombre");
}