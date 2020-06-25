

let meses = new Array(12);

meses[0] = 'Enero';
meses[1] = 'Febrero';
meses[2] = 'Marzo';
meses[3] = 'Abril';
meses[4] = 'Mayo';
meses[5] = 'Junio';
meses[6] = 'Julio';
meses[7] = 'Agosto';
meses[8] = 'Septiembre';
meses[9] = 'Octubre';
meses[10] = 'Noviembre';
meses[11] = 'Diciembre';

let readlineSync = require("readline-sync");

mesAeleccion = readlineSync.questionInt("ingrese el numero de mes que quiere imprimir");

while(mesAeleccion<0 || mesAeleccion>12){

mesAeleccion = readlineSync.questionInt("ingrese el numero de mes que quiere imprimir");

}

if(mesAeleccion>0 && mesAeleccion<=10){

    console.log("el mes elegido es " + meses[mesAeleccion-1]);


}    

    
    

