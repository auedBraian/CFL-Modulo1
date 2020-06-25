


let valorDeUsuario;

let contador = 0;

let suma = 0;

let valorMinimo = 0;

let valorMaximo = 0;

let readlineSync = require("readline-Sync");


while(valorDeUsuario != 0){    

    valorDeUsuario=readlineSync.questionFloat("ingrese un valor ");

    console.log("el valor ingresado es " + valorDeUsuario);

    contador++;
    suma=suma+valorDeUsuario;

    if(valorDeUsuario>valorMaximo){
        
        valorMaximo=valorDeUsuario;
    }
    else{
        if(valorDeUsuario<valorMinimo){
            valorMinimo=valorDeUsuario;
        }
    }
}


console.log("el valor maximo ingresado es " + valorMaximo +", el valor minimo ingresado es "+valorMinimo+", la media de los valores ingresados es "+(suma/contador));