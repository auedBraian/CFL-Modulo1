

function buscarMax(vector){ 
    let maximo=0;

    let v1 =0; //falta el let

    for(v1; v1 < vector.length; v1++){ //v1< vector.lenght, v++
            
        if(vector[v1] > maximo){ //vector[v1] > maximo  (la consigna tiene el signo al reves)
    
                maximo = vector[v1]; //maximo=vector[v1] -->un solo igual
            } 
            
        }
        return maximo; //maximo -->afuera del for
     }


     let arreglo = new Array(2,3,4,5,6,7,8,9,10);

     let maximo=buscarMax(arreglo);

     console.log(maximo);

