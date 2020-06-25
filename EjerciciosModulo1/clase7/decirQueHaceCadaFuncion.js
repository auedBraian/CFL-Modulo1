
function a(v){

    let r = [];
    let b=0;
    for(let i=0; i<v.length; i++){
    
        if(v[i] % 2==0){ 
            r[b] = v[i]; 
            b++; } 
        }
         return r;
    }
    
    let arreglo = new Array(2,3,4,5,6,7,8,9,10);

    arreglo=a(arreglo);

    console.log(arreglo);

    //esa funcion devuelve los numeros pares de un arreglo