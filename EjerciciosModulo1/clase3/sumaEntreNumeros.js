

let numero1;
let numero2;

let readlineSync = require("readline-Sync");

numero1 = readlineSync.questionInt("ingrese primer numero ");

numero2 = readlineSync.questionInt("ingrese el segundo numero ");

      
let menor;
let mayor;

if(numero1>numero2){
        mayor= numero1;
        menor=numero2;
        }
        else{
                mayor= numero2;
                menor=numero1;
}


console.log("el mayor es " + mayor);
console.log("el menor es " + menor);


let suma=0;

        for(let contador = menor ; contador<=mayor;contador++){

                suma = suma + contador;
                menor=suma;
                
                }

                console.log("la suma es " + suma );

    
        

