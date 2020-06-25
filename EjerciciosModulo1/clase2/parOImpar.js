let numeroIngresado;

let readlineSync=require("readline-sync");

numeroIngresado=readlineSync.questionInt("ingrese el numero a verificar ");


if(numeroIngresado == 0){
    console.log("el numero ingresado es cero " + numeroIngresado);
    }
    else{
        if((numeroIngresado % 2)==0){
            console.log("el numero ingresado es par"); 
        }
        else{
             console.log("el numero ingresado es impar: " + numeroIngresado);
                         }
        }
    


