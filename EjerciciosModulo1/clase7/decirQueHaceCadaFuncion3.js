

function c(a, i, j) { 
   
    let r; 
   
    if (a[i] === a[j]) { 
    r = 0;
    } 
    else if (a[i] < a[j]) { 
    
            r = -1; 
            }
            else { 
                r = 1;
             }
    return r;
    }
    
    let arreglo = new Array(2,3,4,5,6,7,8,9,10);

    let variable=c(arreglo,6,0);

console.log(variable);

//esta funcion recibe un arreglo y 2 posiciones de ese arreglo...analiza si el elemento de la primer posicion que recibio es menor o mayor al elemento de la segunda posicion que recibio, y en base a eso devuelve un 1 o un -1 dependiendo de si el primer elemento es mayor o menor al segundo elemento