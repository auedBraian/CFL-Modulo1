
let readlineSync = require('readline-sync');

let cantidadDeNotas=1;

let nota;

let suma = 0;

let promedio;

while (cantidadDeNotas<=10) {
     
    nota =  readlineSync.questionInt("ingrese nota del alumno");

    if(nota<=0 || nota>10){
        console.log("ingrese una nota mayor a cero y menor que 10");
    }
    else{ 

    suma = suma+nota;

    cantidadDeNotas= cantidadDeNotas + 1;
    }
} 

promedio = (suma/10) ;

console.log("el promedio es " + promedio);