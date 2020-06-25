


let valorDeUsuario;

let suma = 0;

let valorMinimo = 0;

let valorMaximo = 0;
 
let cantDeValores = 0;



let readlineSync = require("readline-Sync");

valorDeUsuario = readlineSync.questionInt("ingrese un valor");

    while (valorDeUsuario !=0) {

            if(valorDeUsuario>valorMaximo){

                valorMaximo = valorDeUsuario;
            }
            else{
                if(valorDeUsuario<valorMinimo){

                    valorMinimo=valorDeUsuario;
                    }
                }

    cantDeValores = cantDeValores +1;
        
    suma = suma + valorDeUsuario;


    valorDeUsuario = readlineSync.questionInt("ingrese un valor distinto de 0 para continuar, o 0 para finalizar ");
    
}


let media = (suma/cantDeValores);


console.log("valor maximo "+ valorMaximo);
console.log("valor minimo "+ valorMinimo);
console.log("valor de la media "+ media);