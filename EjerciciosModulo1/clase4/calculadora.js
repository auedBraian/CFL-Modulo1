
let readlineSync = require("readline-sync");

let numero1 = readlineSync.questionInt("ingrese numero 1 ");

let numero2 = readlineSync.questionInt("ingrese numero 2 ");

let operacion = readlineSync.questionInt('ingrese 1 para sumar y 2 para restar ');



function dibujarLinea(){

    let i;

    let linea = '-';

    for(i = 0 ; i <= 40; i++){

    linea = linea + '-';
}
    console.log(linea);
}


if(operacion==1){

    dibujarLinea();
    console.log("el resultado de la suma es "+(numero1+numero2));
    dibujarLinea();

}
else{
    if(operacion==2){
    dibujarLinea();
    console.log("el resultado de la suma es "+(numero1-numero2));
    dibujarLinea();
    }
    else{
        if(operacion!=1 && operacion!=2){

            
    }
}
}

