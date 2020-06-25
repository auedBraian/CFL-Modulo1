
function d(v){ 
    let r=0;
     for(let i=0; i<v.length; i++){ 
        r = v[i] +r;
     }
  
 return r/v.length;
 } 
    

 let arreglo = new Array(2,3,4,5,6,7,8,9,10);

 let promedio=d(arreglo);

 console.log(promedio);

 //esta funcion recibe un arreglo de numeros, hace la sumatoria de todos los valores del arreglo y luego los divide por la cantidad de posiciones del arreglo (calcula un promedio), y lo envia con el return.