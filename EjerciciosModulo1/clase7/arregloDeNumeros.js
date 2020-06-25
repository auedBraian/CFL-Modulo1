/*

Crear un arreglo llamado num que almacene los siguientes datos:
20, 14, 8, 0, 5, 19 y 24 y se los muestre al usuario

Al utilizar arreglos en base cero los elementos validos van de 0 a
n-1, donde n es el tamaño del arreglo

En el ejemplo 1 las posiciones / índice del num entonces van
desde 0 a 7-1, es decir de 0 a 6


*/


let num = new Array(20,14,8,0,5,19,24);

let indice = 0;

while(indice<num.length){

    console.log("el numero en la posicion "+indice+" es "+ num[indice]);
    indice ++;
}