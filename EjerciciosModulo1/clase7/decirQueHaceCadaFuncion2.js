

function b(v,m){ 
    let r = [];
    let b=0; 
    
    for(let i=0; i<v.length; i++){ 

        if(v[i] % m==0){
    
            r[b] = v[i];
            b++; 
            } 
       
    }

    return r;

} 
    
let arreglo = new Array(2,3,4,5,6,7,8,9,10);
let arreglo2 = new Array();
arreglo2=b(arreglo,3);

console.log(arreglo2);

//esta funcion recibe por parametro un arreglo y un valor, y empieza a ver cuantos elementos de ese
//arreglo son multiplos del valor pasado por parametro, y a los que son multiplos los almacena en otro arreglo