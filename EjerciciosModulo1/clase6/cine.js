
function completarArreglo(array){
    
    for(let i=0; i<array.length; i++){
    
         array[i] = ((Math.random()));    

             if(array[i]<0.5){

             array[i]=true;
             }
            else{

                array[i]=false;
            }

            }
        }


function imprimirArray(array){

    for(let i=0; i<array.length; i++){
       
            console.log(array[i]);
        }

        }


function contarVacias(array){

let contador=0;

    for(let i=0; i<array.length; i++){

        if(array[i]==false){

            contador=contador+1;
        }
    }

    return contador;
}



let readlineSync = require("readline-sync");

let dimension=readlineSync.questionInt("ingrese dimension de los arreglos ");

let butacas = new Array(dimension);

completarArreglo(butacas);

let butacasVacias=0;

butacasVacias= contarVacias(butacas);

imprimirArray(butacas);

console.log("la cantidad de butacas vacias es "+ butacasVacias);