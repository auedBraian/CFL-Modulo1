

let readlineSync= require("readline-sync");

let contador=1;


let palabraClave;

while(contador<=3 && palabraClave != 'Eureka'){

    palabraClave = readlineSync.question('Ingrese clave');
    if(palabraClave=='Eureka'){
        console.log('Acertaste');
    }
    else{
        if(contador != 3){
            console.log('Incorrecto, ingrese su clave nuevamente');
        }
        contador++;
    }
    

};
    if(palabraClave!='Eureka'){
        console.log('Se te acabaron las oportunidades');
};


