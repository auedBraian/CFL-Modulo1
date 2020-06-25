
let sueldoActual;
let sueldoConAumento;
let aumento;

let readlineSync=require("readline-sync");

sueldoActual=readlineSync.questionFloat("ingrese el sueldo actual ");


if(sueldoActual<=0){
    console.log("salario ingresado no es valido");
}
else{

    if( sueldoActual <= 15000){
         
        aumento=0.20;
        sueldoConAumento = (sueldoActual*(1+aumento));
        console.log("corresponde aplicar un aumento del 20%, su nuevo sueldo es " + sueldoConAumento);
        console.log("usted obtuvo un aumento de: "+(sueldoConAumento - sueldoActual));
    
        //actualizo el nuevo sueldo
        sueldoActual=sueldoConAumento;
    }

    else{
        if( sueldoActual <= 20000){
         
        aumento=0.10;
        sueldoConAumento = (sueldoActual*(1+aumento));
        console.log("corresponde aplicar un aumento del 10%, su nuevo sueldo es " + sueldoConAumento);
        console.log("usted obtuvo un aumento de: "+(sueldoConAumento - sueldoActual));
        
        //actualizo el nuevo sueldo
        sueldoActual=sueldoConAumento;
        }
        else{
            if(sueldoActual <= 25000){
              
            aumento=0.05;
            sueldoConAumento = (sueldoActual*(1+aumento));
            console.log("corresponde aplicar un aumento del 5%, su nuevo sueldo es " + sueldoConAumento);
            console.log("usted obtuvo un aumento de: "+(sueldoConAumento - sueldoActual));
            
            //actualizo el nuevo sueldo
            sueldoActual=sueldoConAumento;
            }
            else{
                if(sueldoActual > 25000){
                console.log("no corresponde aplicar aumento, su sueldo seguira siendo de " + sueldoActual);
                }
            }
            }
    }

}
