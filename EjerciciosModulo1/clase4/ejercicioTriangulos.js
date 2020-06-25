
let base=0;
let altura=0;

let readlineSync = require("readline-sync");

base=readlineSync.questionInt("ingrese base ");

altura=readlineSync.questionInt("ingrese altura ");

let linea = '-';


function calcularArea(base,altura){

    let area;
     area=((base*altura)/2);
       
    return area;
       } 



function dibujarLinea(cantidadGuiones){

    let i;

    let linea = '-';

    for(i = 1 ; i <cantidadGuiones; i++){

    linea = linea + '-';
}
    console.log(linea);
}




for(let i=0; i<7; i++){
            
    base = base + 1;
    altura= altura + 2;        
    
    area=((base*altura)/2);
    dibujarLinea(30);        
    console.log("el area de una triangulo de base " + base + " y altura " + altura + " es "+ calcularArea(base,altura) );

    }
