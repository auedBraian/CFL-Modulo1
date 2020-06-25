
let cantidad;

let precio;

let descuento = 0.15;

let mesDeCompra;

let readlineSync=require("readline-sync");

cantidad=readlineSync.questionInt("ingrese la cantidad comprada ");

precio=readlineSync.questionFloat("ingrese el precio unitario del producto ");

mesDeCompra=readlineSync.question("ingrese el mes de compra ");

let total=(precio*cantidad);

mesDeCompra=mesDeCompra.toLocaleUpperCase();

if(precio<=0 || cantidad<=0){
    console.log("los datos ingresados no son correctos");
    }
    else{
        if(mesDeCompra== "OCTUBRE"){
          console.log("corresponde aplicar descuento, el total de su compra es " +(total*(1-descuento)));
             }
                else{
                     console.log("no corresponde aplicar el descuento, el total es "+ total);
                     }

        }
