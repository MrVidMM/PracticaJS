// Empezaremos por el operador +
let a = 3, b = 2; // declaramos 2 variables con valores
let z = a + b; // declaramos z y hacemos la suma de a + b

// Incremento
// Pre-incremento (el operador ++ antes de la variable)
z = ++a;
// ya que a era igual a 3 sumo 1 y queda en 4
console.log(a);
// y z queda en 4 por que le definimos el valor de "++a"
console.log(z);

// Post-incremento (el operador ++ despues de la variable)
z = b++; // ya que es post, se esta definiendo que z sera 2
// y luego se incrementa b quedando en 3
console.log(b)
console.log(z)

// Decremento
//Predecremento
z = --a;
// anteriormente a quedo en 4 por ende ahora le resto 1 queda en 3
console.log(a);
// y ya que es la definición mediante al cambio queda z = 3
console.log(z);

//Postdecremento
z = b--;
// ya que b era 3 y el decremento esta despúes b sera = 2
console.log(b);
// y z quedara con la definición anterior que es = 3
console.log(z);