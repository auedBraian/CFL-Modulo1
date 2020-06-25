

function obtenerPosicion(arreglo, stringIngresado){ 
    
    let indice=0; //-->no inicializa indice
    
    for(indice; indice < arreglo.length;indice++){ //-->mal el signo.. es < , se deberia usar un for para que recorra el arreglo y se vea en q posicion esta la letra
    
        if(arreglo[indice] = stringIngresado){  //arreglo[indice] = stringIngresado
        
            return indice; //--> retorna indice porque necesita saber la posicion 
            }
         }
    } 
    
    
    let arreglo = new Array('a','b','c','d','e','f','g');

    let readlineSync=require("readline-sync");

    let letra=readlineSync.question("ingrese letra ");

    let posicion= obtenerPosicion(arreglo,letra);

    console.log(posicion);

    console.log("fin");
