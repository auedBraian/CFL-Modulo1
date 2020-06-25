/*
let haceFrio=false;
let estaLloviendo=true;
    

if(haceFrio){
    if(estaLloviendo){
                console.log("hace un muchisimo frio y esta lloviendo");
        }
            else{
                console.log("hace muchisimo frio")
        }
    }
else{
      if(estaLloviendo){
        console.log("no hace frio pero llueve");
      } 
      else{    
       console.log("no hace frio");
     }
    }
  */

  /*
  let readlineSync=require("readline-sync");
  let edad=readlineSync.questionInt("ingrese edad ");

  if(edad>=20){

    console.log("sos mayor de 20");    
  }
  else{

    console.log("sos menos de 20");

  }
  */
/*
 let readlineSync=require("readline-sync");
 let edad=readlineSync.questionInt("ingrese edad ");

 if(edad!=20){

   console.log("no tenes 20");    
 }
 else{

   console.log("tenes 20");

 }
*/ 

/*
let readlineSync=require("readline-sync");
 let edad=readlineSync.questionInt("ingrese edad ");


 if(edad==20){

   console.log(" tenes 20");    
 }
 else{
        if(edad<20){
            console.log("tenes menos de 20")
                    }
        else{    
   console.log(" tenes mas de 20");
            }

 }

 */

/*
let haceFrio=true;
let estaLloviendo=false;
    
//evaluo dos condiciones o mas
if(haceFrio && estaLloviendo ){
    
                console.log("hace un muchisimo frio y esta lloviendo");
        
        }
else{

        console.log("voy al gimnasio");
}
*/

let readlyneSync=require("readlyneSync");
let edad=readlyneSync.questionInt("ingrese edad");
let altura= readlyneSync.questionInt("ingrese su altura");

console.log(edad>18);
console.log(altura>170);
console.log(edad>18 && altura>170);

if(edad>18 && altura>170){
console.log("puede pasar");

}


