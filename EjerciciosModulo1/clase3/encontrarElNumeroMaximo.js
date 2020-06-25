
let valorIngresado;

let numeroMaximo = 0;

let readlineSync = require("readline-Sync");

valorIngresado=readlineSync.questionFloat("ingrese un valor ");

numeroMaximo=valorIngresado;


while(valorIngresado != 0){    

    console.log("el valor ingresado es " + valorIngresado);

    if(valorIngresado>numeroMaximo){

        numeroMaximo = valorIngresado;
    }

    valorIngresado=readlineSync.questionFloat("ingrese un valor para continuar, ingrese 0 para salir ");  
}


// este ciclo lo pongo porque si ingreso 0 de entrada, sale del ciclo y me imprime que el numero maximo ingresasdo fue 0; y la consiga es que si se ingresa un cero se termina el programa.

if(numeroMaximo==0){
   
    }
    else{
        console.log("el numero maximo ingresado fue " + numeroMaximo);
    }