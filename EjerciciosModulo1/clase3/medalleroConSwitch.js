
let readlineSync = require('readline-sync');

let posicionLlegada = readlineSync.questionInt("Indicar posicion de llegada del competidor ");


if(posicionLlegada<=0){
    console.log("ingrese un valor positivo");
}
else{
        
switch(posicionLlegada){

    case 1:
            console.log("entregar medalla de oro ");
            break;
    
    case 2:
             console.log("entregar medalla de plata ");
              break;

     case 3:
            console.log("entregar medalla de bronce ");
            break;
    
    default:
            console.log("Entregar mencion de participacion ");
}
}