/**
 * Concatenación de cadenas
 */

// definimos 2 variables
var nombre = 'Juan'
var appelido = 'Perez'

// Realizamos una union con '+'
var nombreCompleto = nombre + ' ' + appelido;
console.log(nombreCompleto);

// Tambien podemos agregarlo sin variables
var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto2);

// Ahora con datos numericos... analiza
var x = nombre + 219;
console.log(x);

// Ahora haremos lo mismo pero veremos algo interesante
var x = nombre + 2 + 4;
console.log(x);
// Al hacer concatenacion con la cadena "nombre"
// el resto de valores los convierte en cadena

// Si quisieramos que realmente sumaran hariamos esto:
x = nombre + (2 + 4);
// al estar entre parentesis toma prioridad a la suma
// por ende el resultado sera el nombre y la suma que es 6
console.log(x);

// Tambien si lo hicieramos en caso opuesto tomaria como prioridad
// los primeros valores en este caso la suma:
x = 2 + 4 + nombre;
// Dando como resultado "6Juan"
console.log(x);

// En js siempre las expreciones las vera de izquierda a derecha
// ------> es por eso que pasan aquellos sucesos

/* 
Tambien cabe aclarar que la extension de Quokka te puede mostrar
el valor sin agregar el console.log pero como buen programador
se recomienda acostumbrarse a agregar el console completo
*/