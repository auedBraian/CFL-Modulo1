
let numero1;
let numero2;
let numero3;

let readlineSync=require("readline-sync");

numero1=readlineSync.questionFloat("ingrese el primer numero ");

numero2=readlineSync.questionFloat("ingrese el segundo numero ");

numero3=readlineSync.questionFloat("ingrese el tercer numero");



if(numero1==numero2 && numero1==numero3){
    console.log("los 3 numeros son iguales");
    }
    else{

        if(numero1>numero2 && numero1>numero3){
            console.log("el numero mas grande es el numero 1: "+numero1);
        }
        else{
            if(numero2>numero1 && numero2>numero3){
            console.log("el numero 2 es el mas grande: "+numero2);
            }
            else{
                if(numero3>numero1 && numero3>numero2){
                console.log("el numero mas grande es el 3: " + numero3);
                    }
                }
            }
        }