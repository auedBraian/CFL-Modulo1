

function esMultiplo(multiplo1,multiplo2){

    if((multiplo1 % multiplo2) == 0){
     
    return true;
    }
    else{
        return false;
    }
}



let readlineSync = require("readline-sync");

let multiplo1;

let multiplo2;



    multiplo1=readlineSync.questionInt("ingrese multiplo1 ");

    multiplo2=readlineSync.questionInt("ingrese multiplo2 ");
   
    
  
    console.log("el primer numero "+multiplo1+" es multiplo del segundo numero "+multiplo2+" : " +esMultiplo(multiplo1,multiplo2));