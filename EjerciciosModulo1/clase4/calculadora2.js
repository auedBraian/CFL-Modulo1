

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


if(operacion==1){

    dibujarLinea(5);
    console.log("el resultado de la suma es "+(numero1+numero2));
    dibujarLinea(8);

}
else{
    if(operacion==2){
    dibujarLinea(6);
    console.log("el resultado de la suma es "+(numero1-numero2));
    dibujarLinea(3);
    }
    else{
        if(operacion!=1 && operacion!=2){

            
    }
}
}

