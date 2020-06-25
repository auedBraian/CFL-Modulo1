
let readlineSync = require('readline-sync');
let vuelta1 = readlineSync.questionFloat('ingrese el tiempo de la vuelta 1: ');
let vuelta2 = readlineSync.questionFloat('ingrese el tiempo de la vuelta 2: ');
let vuelta3 = readlineSync.questionFloat('ingrese el tiempo de la vuelta 3: ');
let vuelta4 = readlineSync.questionFloat('ingrese el tiempo de la vuelta 4: ');

let tiempoTotal = (vuelta1 + vuelta2 + vuelta3 + vuelta4);
let promedioVuelta= (tiempoTotal/4);


console.log('el tiempo total fue ' + tiempoTotal);
console.log('el tiempo promedio por vuelta fue ' + promedioVuelta);