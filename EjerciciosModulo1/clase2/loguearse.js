


let usuarioAlmacenado = "Juan";
let claveAlmacenada = "claveJuan";

let readlineSync=require("readline-sync");

let usuarioIngresado;
let claveIngresada;

usuarioIngresado = readlineSync.question("ingrese su usuario ");

claveIngresada = readlineSync.question("ingrese su clave ");

if( usuarioIngresado == usuarioAlmacenado && claveIngresada == claveAlmacenada ){

    console.log("usted se ha logueado correctamente");
    }

else{
    if(usuarioIngresado == usuarioAlmacenado && claveIngresada != claveAlmacenada ){ 
        console.log("su contraseña no es correcta, por favor reingrese su contraseña");
    }
    else{
        if(usuarioIngresado != usuarioAlmacenado && claveIngresada == claveAlmacenada){
            console.log("su usuario no es correcto, por favor reingrese su usuario");
        }
        else{
            if(usuarioIngresado != usuarioAlmacenado && claveIngresada != claveAlmacenada){
            
              console.log("su usuario y su contraseña son erroneas, por favor revise su usuario y su contraseña");  

            }
        }
    }    
}


