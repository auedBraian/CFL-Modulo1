

let nota1,nota2,nota3,nota4,nota5,nota6,nota7,nota8,nota9,nota10;
let readlineSync=require("readline-sync");

nota1 = readlineSync.questionInt("ingrese nota 1 " );
nota2 = readlineSync.questionInt("ingrese nota 2 " );
nota3 = readlineSync.questionInt("ingrese nota 3 " );
nota4 = readlineSync.questionInt("ingrese nota 4 " );
nota5 = readlineSync.questionInt("ingrese nota 5 " );
nota6 = readlineSync.questionInt("ingrese nota 6 " );
nota7 = readlineSync.questionInt("ingrese nota 7 " );
nota8 = readlineSync.questionInt("ingrese nota 8 " );
nota9 = readlineSync.questionInt("ingrese nota 9 " );
nota10 = readlineSync.questionInt("ingrese nota 10 " );


let total = (nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8+nota9+nota10);

let Promedio = (total/10);

console.log("el promedio es " + Promedio);