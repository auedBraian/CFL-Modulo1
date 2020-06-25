
let valorIngresado;

let numeroMinimo = 0;

let readlineSync = require("readline-Sync");

valorIngresado=readlineSync.questionFloat("ingrese un valor ");

while(valorIngresado != 0){    

    console.log("el valor ingresado es " + valorIngresado);

        if((valorIngresado<numeroMinimo)){
                
            numeroMinimo = valorIngresado;
            }
            
            valorIngresado=readlineSync.questionFloat("ingrese un valor para continuar, ingrese 0 para salir ");
    
        }

      
// este ciclo lo pongo porque si ingreso 0 de entrada, sale del ciclo y me imprime que el numero minimo ingresasdo fue 0; y la consiga es que si se ingresa un cero se termina el programa.

if(numeroMinimo==0){
   
    }
    else{

    console.log("el numero minimo ingresado fue " + numeroMinimo);
    }