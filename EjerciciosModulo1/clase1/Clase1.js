/*Clase 1 PDF 1.1 Filmina 7 ejercicio 1

Secuencia 
1)Declaro variable 1 (numero1) y la inicializo
2)Declaro variable 2 (numero2) y la inicializo
3)Declaro una variable llamada total donde voy a almacenar la suma de las 2 variables anteriores
4)Por ultimo imprimo el texto "el total es" junto con la variable total

Tambien esta la alternativa de declarar las variables numero1 y numero2 y darles valor con la funcion
*/

let numero1 = 10;
let numero2 =40;
let total = numero1 + numero2;
console.log("el total es" + total);


//Clase 1 PDF 1.1 Filmina 7 ejercicio 2

/*Secuencia*/


/*Declaro 10 variables que son representativas de los pasos que se deben seguir para realizar la tarta de frutilla. Luego completo esas variables con texto (String), y por ultimo las imprimo con un console.log concatenando cada uno de los pasos. Se va a imprimir con formato de parrafo. 
Otra manera mas sencilla de realizar el ejercicio es creando un arreglo y posteriormente recorrerlo e imprimirlo con un bucle for, pero aun no hemos llegado a esa parte en el curso

*/

let paso1="Mezclar 110g de manteca pomada, 135 g de azúcar, 5 g de sal, 2 cucharaditas de esencia de vainilla.";
let paso2="Incorporar 1 huevo, 250 g de harina y trabajamos con 2 cornets hasta tomar la masa.";
let paso3="Envolver con papel film y llevar a frío.";
let paso4="Forzar un molde de 24 cm y cocinar en horno a 180° a cocción completa con peso.";
let paso5="Perfumar 200 g de crema pastelera con 30 cc de kirsch y mezclar con 100 g de crema de leche a medio punto.";
let paso6="Disolver 50 g de gelatina de frutillas con 250 cc de agua caliente. Una vez disuelta, incorporar 250 cc de agua fría y mezclar bien."; 
let paso7="Después, lleva a baño de maría inverso hasta que comience a tomar cuerpo.";
let paso8="Rellenamos la masa cocida con la crema pastelera. Luego, incorporamos frutillas fileteadas.";
let paso9="Seguidamente, volcamos la gelatina de frutillas sobre la tarta y dejamos enfriar.";
let paso10="Terminamos con crema chantilly y pistachos rallados.";


console.log(paso1 + " " + paso2 + " "+ paso3 + " " +paso4 + " " +paso5 + " "+ paso6 + " "+ paso7 + " " + paso8 +" " +paso9+" "+ paso10);


//Clase 1 PDF 1.1 Filmina 7 ejercicio 3
/*Declaro 7 variables que son representativas de las secuencias que se deben seguir para realizar la toma de presion correctamente. Luego completo esas variables con texto (String).

Despues declaro 2 variables numericas y las inicializo (valor1 y valor2) donde voy a almacenar los valores de la presion tomada. 
Por ultimo las imprimo con un console.log concatenando cada uno de las secuencas. Se va a imprimir con formato de parrafo.
Al final de todo con un console.log imprimo los valores de la presion tomados.
*/

let secuencia1="Buscar y sentir el pulso en el pliegue del brazo izquierdo, colocando la cabeza del estetoscopio en esa zona";
let secuencia2="Colocar el brazalete del dispositivo 2 a 3 cm por encima del pliegue del mismo brazo, apretándola, de forma que la manguera del brazalete quede por encima del brazo";
let secuencia3="Cerrar la válvula de la bomba y con el estetoscopio en los oídos, llenar el brazalete hasta los 180 mmHg o hasta dejar de escuchar sonidos en el estetoscopio";
let secuencia4="Abrir la válvula lentamente, al mismo tiempo que se mira para el manómetro. En el momento en que oye el primer sonido, se debe registrar la presión indicada en el manómetro, ya que es el primer valor de la presión arterial";
let secuencia5="Continuar vaciando el brazalete hasta que se deje de escuchar el sonido. En el momento en que se deja de oír sonidos, se debe registrar la presión indicada en el manómetro, ya que es el segundo valor de la presión arterial.";
let secuencia6="Juntar el primer valor con el segundo para obtener la presión arterial. Por ejemplo, cuando el primer valor es 130 mmHg y el segundo es 70 mmHg, la presión arterial es de 13 x 7."

let valor1= 130;
let valor2=70;

let presionTotal=(valor1)+"x"+(valor2);
console.log(secuencia1 + " " + secuencia2 + " "+ secuencia3 + " " +secuencia4 + " " +secuencia5+ " "+secuencia6);
console.log("la presion es" + presionTotal); 


/*
Clase 1 PDF 1.1 Filmina 7 ejercicio 4
Llenar una cajita de huevos con 5 huevos que estan dentro de una bolsa

Secuencia 
1)Saco un huevo de la bolsa
2)Coloco el huevo que saque en una caja
3)Saco un huevo de la bolsa
4)Coloco el huevo que saque en una caja
5)Saco un huevo de la bolsa
6)Coloco el huevo que saque en una caja
7)Saco un huevo de la bolsa
8)Coloco el huevo que saque en una caja
9)Saco un huevo de la bolsa
10)Coloco el huevo que saque en una caja
*/


let bolsa = 5;
let caja =0;


for(let i = 0 ; i < 5 ; i++){

    bolsa = bolsa - 1;
    caja = caja + 1;
};


console.log('la cantadidad de huevos en la bolsa es ' + bolsa);
console.log('la cantadidad de huevos en la caja es ' + caja);



//Clase 1 PDF 1.1 Filmina 10
console.log(5*10);

console.log("hola Mundo");

//Clase 1 PDF 1.1 Filmina 23
