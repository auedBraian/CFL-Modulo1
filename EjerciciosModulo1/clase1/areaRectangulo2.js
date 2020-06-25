
let readlineSync = require('readline-sync');
let base = readlineSync.question('ingrese medida de la base en cm: ');
let altura = readlineSync.question('ingrese medida de la altura en cm: ');

console.log('el area del rectangulo es: '+ (base*altura));

