


let notaPractica= 0;

let notaTeoria = 0;

let notaProblemas=0;

let readlineSync = require("readline-Sync");

let NombreAlumno=readlineSync.question("ingrese nombre del Alumno ");

let notaAlumno;

while(NombreAlumno != ''){    
    
    console.log("el nombre del alumno es " + NombreAlumno);

    notaPractica=readlineSync.questionInt("ingrese nota Practica ");
    notaTeoria=readlineSync.questionInt("ingrese nota teorica  ");
    notaProblemas=readlineSync.questionInt("ingrese nota de problemas  ");
    
    
    if((notaPractica>0 && notaPractica<=10) && (notaProblemas>0 && notaProblemas<=10) && (notaTeoria>0 && notaTeoria<=10)){

        notaAlumno =(((notaPractica*10)+(notaProblemas*50)+(notaTeoria*40))/100);    
    
        console.log("la nota del alumno es " + notaAlumno);
    }
    else{

        console.log("los datos ingresados no son validos");
    }    
    
    NombreAlumno=readlineSync.question("ingrese nombre del Alumno ");    
}
