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