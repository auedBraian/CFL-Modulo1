
let readlineSync = require("readline-sync");

let dimension = readlineSync.questionInt("ingrese cantidad de elementos del arreglo ");

let arregloN = new Array(dimension);

let positivos = 0;
let negativos = 0;
let ceros = 0 ;

for(let i=0; i<arregloN.length; i++){

    arregloN[i]=readlineSync.questionInt("ingrese numero deseado para la posicion " + i + " : ");

    if(arregloN[i]>0){
       
        positivos = positivos + 1;
        }
       
        else{
             if(arregloN[i]<0){
        
                negativos= negativos + 1;
                }
                
                else{

                ceros = ceros + 1;
                }
            }        

} 

    console.log("cantidad de positivos " +positivos);
    console.log("cantidad de negativos " +negativos);
    console.log("cantidad de ceros " +ceros);

