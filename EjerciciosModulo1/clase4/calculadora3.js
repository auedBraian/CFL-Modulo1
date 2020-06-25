



let readlineSync = require("readline-sync");

let numero1 = readlineSync.questionInt("ingrese numero 1 ");

let numero2 = readlineSync.questionInt("ingrese numero 2 ");

let operacion = readlineSync.questionInt('ingrese 1 para sumar y 2 para restar ');



function dibujarLinea(cantidadGuiones){

    let i;

    let linea = '-';

    for(i = 1 ; i <cantidadGuiones; i++){

    linea = linea + '-';
}
    console.log(linea);
}



function calcularResultado(numero1,numero2,operacion){

    let resultado =0;

    if(operacion==1){
       resultado=(numero1+numero2);
       return resultado;
        }

    else{
        if(operacion==2){
       
        resultado=(numero1-numero2);
        return resultado;
        }
        else{
            if(operacion!=1 && operacion!=2){
                
                console.log("el valor ingresado no es correcto");
                
        }
    }
    }
    
    


}


let resultado= calcularResultado(numero1,numero2,operacion);
dibujarLinea(30);
console.log("el resultado es "+ resultado);
dibujarLinea(30);