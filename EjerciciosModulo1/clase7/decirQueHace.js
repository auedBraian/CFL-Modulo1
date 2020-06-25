
function metodo1(arr,x,y){

    let ax;
    ax=arr[x];
    arr[x]=arr[y];
    arr[y] = ax;
}

let readlineSync = require("readline-sync");
 
let dimension = readlineSync.questionInt("ingrese dimension");


let arreglo = new Array(dimension);

for(let i=0;i<dimension;i++){

arreglo[i]= i;

}

console.log(arreglo);

metodo1(arreglo,2,3);

console.log(arreglo);


//la funcion cambian la posicion de los elementos del arreglo