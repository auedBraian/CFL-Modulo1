

let readlineSync=require("readline-sync");

let claveCorrecta="eureka";

let contador=1;

let claveIngresada = readlineSync.question("Ingrese su clave ");


while(claveIngresada != claveCorrecta && contador<3){

    console.log("ingrese clave");
    contador = contador + 1;
    console.log("por favor, reingrese su clave");
    claveIngresada = readlineSync.question("Ingrese su clave ");
    }

    if(claveIngresada==claveCorrecta){
        console.log("su clave es correcta")
    }
    else{   
        console.log("usted ya agoto los tres intentos");
    }

