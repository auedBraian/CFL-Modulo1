
let entero;

let readlineSync=require("readline-sync");


entero=readlineSync.questionInt("ingrese numero a analizar ");



if(entero>20){
    console.log(entero + " es mayor que 20");
    }
else{
        if(entero==20){
            console.log(entero +" es 20");
            }
        else{    
            
            console.log(entero+" es menor que 20 ")
                
        }
    };