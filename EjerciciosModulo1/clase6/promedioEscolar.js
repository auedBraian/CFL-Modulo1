function completarArreglo(array1,array2){

    let readlineSync = require("readline-sync");

    for(let i=0; i<array1.length; i++){
    
     array1[i]=readlineSync.questionInt("ingrese nota para el alumno "+array2[i]+": ");   

    }
}


function completarArregloString (array){

    let readlineSync = require("readline-sync");

    for(let i=0; i<array.length; i++){
    
     array[i]=readlineSync.question("ingrese nombre del alumno para la posicion " + (i+1) + " : ");   

    }
}


function imprimirArray(array1,array2){

    for(let i=0; i<array1.length; i++){
    
    console.log("el promedio de las tres notas para el alumno "+array1[i]+" fue "+array2[i]);
    }
}


function calcularPromedio(array1,array2,array3,array4){

    for(let i=0; i<array1.length; i++){

        array4[i]=((array1[i]+array2[i]+array3[i])/3);
    }
        return array4;
}


let readlineSync = require("readline-sync");

let dimension=readlineSync.questionInt("ingrese dimension de los arreglos ");

let arregloAlumnos = new Array(dimension);

let arregloNota1 = new Array(dimension);
let arregloNota2 = new Array(dimension);
let arregloNota3 = new Array(dimension);
let arregloPromedio= new Array(dimension);

console.log("cargue los nombres de los alumnos");
completarArregloString(arregloAlumnos);

console.log("cargue las notas del primer trimestre");
completarArreglo(arregloNota1,arregloAlumnos);

console.log("cargue las notas del segundo trimestre");
completarArreglo(arregloNota2,arregloAlumnos);

console.log("cargue las notas del segundo trimestre");
completarArreglo(arregloNota3,arregloAlumnos);

arregloPromedio=calcularPromedio(arregloNota1,arregloNota2,arregloNota3,arregloPromedio);

imprimirArray(arregloAlumnos,arregloPromedio);



