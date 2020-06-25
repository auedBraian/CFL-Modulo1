

let numeroIngresado;

let readlineSync=require("readline-sync");

numeroIngresado=readlineSync.questionInt("ingrese el numero a verificar ");


while (numeroIngresado<=0){
    
    numeroIngresado=readlineSync.questionInt("ingrese un numero mayor a cero ");
    }


    if((numeroIngresado % 2)==0 ){

    console.log("el numero ingresado es par " + numeroIngresado); 
    }

        else{
    
              console.log("el numero ingresado es impar " + numeroIngresado);
            }
    
    
    


