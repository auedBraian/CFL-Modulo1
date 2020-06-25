function cargarArreglo(Array){

    for(let i=0; i<Array.length;i++){

        Array[i]=Math.floor(Math.random()*10);

    }
    return Array;

}


function metodo2(v,s){

    let i,d, aux;
    i=0;
    d=s-1;

    while(i<d){

        metodo1(v,i,d);
        i=i+1;
        d=d-1;
    }
}

function metodo1(arr,x,y){

    let ax;
    ax=arr[x];
    arr[x]=arr[y];
    arr[y] = ax;
}


let readlineSync = require("readline-sync");
 
let dimension = readlineSync.questionInt("ingrese dimension");

let arreglo = new Array(dimension);

cargarArreglo(arreglo);

console.log(arreglo);

metodo2(arreglo,dimension);

console.log(arreglo);



//esta funcion invierte las posiciones de un arreglo (es decir, el numero de la primer posicion pasa a la ultima, el de la ultima a la primera; el segundo pasa a la anteultima posicion, el de la anteultima posicion para a la segunda posicion, y asi sucesivamente)