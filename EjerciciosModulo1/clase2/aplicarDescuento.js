

let cantidad;
let precio;
let descuento = 0.1;

let readlineSync=require("readline-sync");

cantidad=readlineSync.questionInt("ingrese la cantidad que va a comprar ");

precio=readlineSync.questionInt("ingrese el precio unitario del producto ");

let total=(precio*cantidad);



if(total<=0 || precio<0 || cantidad<0){
    console.log("los datos ingresados no son correctos");
}
else{
    if(total>1000){
        console.log("el total es "+total);
        console.log("corresponde aplicar descuento, el total de su compra es " +(total*(1-descuento)));
    }
    else{
        console.log("el total es "+total);
        console.log("no corresponde aplicar el descuento, el total es "+ total);
     }
    }
