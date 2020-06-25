
let posicion;

let readlineSync=require("readline-sync");

posicion=readlineSync.questionInt("ingrese su posicion ");



if(posicion<=0){

    console.log("la posicion ingresada no es valida");
}
else{

    if(posicion>=1 && posicion<=3){

        if(posicion==1){
            console.log("ganaste la medalla de oro");
        }
        else{
            if(posicion==2){
                console.log("ganaste la medalla de plata");
                             }
            else{
                console.log("ganaste la medalla de bronce");
                 }
            }
        }
    else{
        console.log("no ganaste medalla, recibis un certificado de participacion");
        }
    }