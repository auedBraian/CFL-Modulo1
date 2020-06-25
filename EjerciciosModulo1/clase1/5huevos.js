
/*
Clase 1 PDF 1.1 Filmina 7 ejercicio 4
Llenar una cajita de huevos con 5 huevos que estan dentro de una bolsa

Secuencia 
1)Saco un huevo de la bolsa
2)Coloco el huevo que saque en una caja
3)Saco un huevo de la bolsa
4)Coloco el huevo que saque en una caja
5)Saco un huevo de la bolsa
6)Coloco el huevo que saque en una caja
7)Saco un huevo de la bolsa
8)Coloco el huevo que saque en una caja
9)Saco un huevo de la bolsa
10)Coloco el huevo que saque en una caja
*/

/*Creo la variable bolsa y la inicializo con el numero 5, representando a los 5 huevos que contiene la bolsa.
Luego creo la variable caja y la inicializo con el numero 0, representando que la caja esta vacia. Con un bucle for voy achicando el valor de bolsa en 1, y agrandando el valor de caja en 1, durante 5 ciclos.
Finalmente imprimo en pantalla un texto con la cantidad de huevos que quedaron en bolsa y con la cantida de huevos que quedaron en caja.*/ 

let bolsa = 5;
let caja =0;


for(let i = 0 ; i < 5 ; i++){

    bolsa = bolsa - 1;
    caja = caja + 1;
};


console.log('la cantadidad de huevos en la bolsa es ' + bolsa);
console.log('la cantadidad de huevos en la caja es ' + caja);

