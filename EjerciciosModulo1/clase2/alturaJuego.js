let alturaPersona;

let alturaMinima=1.30;

let readlineSync=require("readline-sync");

alturaPersona=readlineSync.questionFloat("ingrese su altura ");


if(alturaPersona<=0){
    console.log("los datos ingresados no son validos");
}
else{
    if(alturaPersona>=alturaMinima){

        console.log("Su altura es "+ alturaPersona + " metros, puede entrar a la montaña rusa");
    }
    else{

        console.log("usted no puede ingresar a la montaña rusa por no medir mas de 1,30 metros");

        }
    }