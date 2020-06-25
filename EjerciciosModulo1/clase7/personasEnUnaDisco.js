
/*
• Para tener control de la gente que hay en una disco el gerente quiere
saber cuantas personas de diferentes edades han entrado. 

• No se han permitido la entrada a menores de 18 ni mayores de 40.
Para la carga de los datos se usa la función aleatorio  (use la función
aleatorio(menorValor,mayorValor), es decir aleatorio(19,40))
• Se sabe que la cantidad total de personas dentro del local es de 270
• Se quiere saber: 
• Cuántas personas son menores de 21 años
• Cuántas personas mayores o igual a 21 años
• Cuántas personas en total

*/


function cargarArreglo(array,menorValor,mayorValor,){

for(let i = 0; i<array.length; i++ ){

    array[i] = ((Math.floor(Math.random()*(mayorValor-menorValor)))+menorValor);
}
    return array;

}


function contarMenores(array){

    let contar =0; 

    for(let i=0;i<array.length;i++){

        if(array[i]<21){

            contar = contar + 1;
        
       }
    }
    
    return contar;

}


let readlineSync = require("readline-sync");

let dimension = readlineSync.questionInt("ingrese capacidad de la disco ");

let personas = new Array(dimension);

let menorValor = 19;

let mayorValor = 40;

let menores21;

let mayores21;


cargarArreglo(personas,menorValor,mayorValor);


menores21 = contarMenores(personas);

mayores21 = (dimension - menores21); 


console.log("los menores de 21 son " + menores21);

console.log("los mayores de 21 son " + mayores21);

console.log("el total de personas en la disco es "+(menores21+mayores21));
