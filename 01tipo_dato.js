/**
 * Ejemplos js
 */
var nombre = "Carlos";
console.log(nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "993385621" // Quedo string pero puede ser number
}

console.log(objeto)

// Utilizaremos otra funcion para saber el tipo de dato
// esta es "typeof", reutilizaremos la var nombre
nombre = 10
// podemos ver que nos dice tipo number, asi se puede hacer con muchos más...
console.log(typeof nombre);

/* por esta razón se habla que js es dinamico,
   ya que nos permite modificar las variables a
   nuestro antojo... ya que no debemos asignar el
   tipo de dato de la variable por obligación
*/

//Tipo de dato boolean (true, false)
var bandera = true;
console.log(typeof bandera);

//Tipo de dato function
// nos permitira ejecutar más de una linea de código
function miFuncion(){}
console.log(typeof miFuncion)

//Tipo de dato Symbol (avanzado)
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//Tipo undefined
var x;
// ya que no le asignamos un tipo de dato lo asigna como tipo indefinido
console.log(typeof x);

//null = ausencia de valor
var y = null;
// si a un valor lo asignamos como null le diremos que no tiene valor alguno
console.log(y);
// en cambio si vemos el tipo de dato es object asi que debemos tener cuidado en su uso
console.log(typeof y);

//Arreglo en js
// tener en cuenta que no es un nuevo tipo de dato
var autos = ['BMW','Audi','Volvo'];
// Sino que es un tipo object de js
console.log(autos);
console.log(typeof autos);

// Tambien podemos definir variables con cadenas vacias
var z = '';
// Podemos ver que dice empty string (cadena vacia)
console.log(z);
console.log(typeof z);