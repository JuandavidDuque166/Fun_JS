/* Las funciones Matemáticas en JavaScript utilizando la clase Math
Estas funciones permiten realizar operaciones dentro del código. */

var precio = Math.round(399.53); // Se declara la variable con valor decimal la función round la vuelve entero.

document.writeln("precio redondeado:", precio);
console.log("precio redondeado:", precio);

var precio = Math.round(399.53); // Se declara la variable con valor decimal la función round la vuelve entero.
document.writeln("precio redondeado:", precio, "<br>");
console.log("precio redondeado:", precio);

var precio = Math.ceil(299.28); //Se declara la variable con valor decimal la función ceil la vuelve entero al mas cercano deciaml.
document.writeln("precio redondeado:", precio);
console.log("precio redondeado:", precio);

var precio = Math.floor(299.28); //Se declara la variable con valor decimal la función floor la vuelve entero.
document.writeln("precio redondeado:", precio, "<br>");
console.log("precio redondeado:", precio);

var precio = Math.floor(540.93); //Se declara la variable con valor decimal la función floor la vuelve entero.
document.writeln("precio redondeado:", precio, "<br>");
console.log("precio redondeado:", precio);

var seno = Math.sin(45); //Se calcula el seno del ángulo de 45
document.writeln("El valor del seno de un ángulo de 45 es:", seno, "<br>");
console.log("Seno de 45:", seno);

var conseno = Math.cos(45); //Se calcula el coseno del ángulo de 45
document.writeln("El valor del coseno de un ángulo de 45 es:", conseno, "<br>");
console.log("Coseno de 45:", conseno);

var tangente = Math.tan(68); //Se calcula la tangente del ángulo de 68
document.writeln(
  "El valor de la tangente de un ángulo de 68 es:",
  tangente,
  "<br>"
);
console.log("Tangente de 68:", tangente);

var exponencial = Math.exp(2); //Se calcula la exponencial del numero 2
document.writeln("El valor de la exponencial de 2 es:", exponencial, "<br>");
console.log("Exponencial de 2:", exponencial);

var exponente = Math.pow(4, 2); //Se calcula la potencia del numero 4 elevado a 2
document.writeln(
  "El valor de la potencia de 4 elevado a 2 es:",
  exponente,
  "<br>"
);
console.log("Exponente de 4 elevado a 2:", exponente);

var logaritmo = Math.log(10); //Se calcula el logaritmo del numero 10
document.writeln("El valor del logaritmo de 10 es:", logaritmo, "<br>");
console.log("Logaritmo de 10:", logaritmo);

var adsoluto = Math.abs(-10); //Se calcula el valor absoluto del numero -10
document.writeln("El valor absoluto de -10 es:", adsoluto, "<br>");
console.log("Valor absoluto de -10:", adsoluto);

var raiz = Math.sqrt(81); //Se calcula la raiz cuadrada del numero 81
document.writeln("La raiz cuadrada de 81 es:", raiz, "<br>");
console.log("Raiz cuadrada de 81:", raiz);

var aleatorio = Math.random(); //Random siempre va desde 0.0 hasta 0.99999999 aleatorio
document.writeln("El valor aleatorio o random es:", aleatorio, "<br>");
console.log("Valor aleatorio es:", aleatorio);

var numRam = Math.floor(Math.random() * (15 - 5 + 1) + 5); //Se calcula un numero aleatorio entre 0 y 100
document.writeln("El valor aleatorio entre 5 y 15 es:", numRam, "<br>");
console.log("Valor aleatorio entre 5 y 15 es:", numRam);

//  Math.random()genera un número decimal entre 0y 1(incluye 0, pero nunca 1). Puede generar valores como 0.0, 0.5, 0.9999999, pero nunca exactamente 1.

//  Se multiplica el random generado por (Max - Min + 1), lo que da el tamaño del rango de números posibles. En este caso: 15 - 5 + 1 = 11, lo que significa que Math.random()se escalará a un valor entre 0 y 10.9999999.

// Se suma Min para desplazar el rango. Antes de sumar Min, los valores estan entre 0y 10.9999999. Posteriormente, al sumar 5, ahora los valores estarán entre 5y 15.9999999.

//  Math.floor()redondea hacia abajo para asegurar de obtener solo números enteros. Sin Math.floor(), se obtendrían decimales. Con Math.floor(), cualquier valor entre 5.000000 y 5.999999 se convierte en 5, entre 6.000000 y 6.999999 se convierte en 6, y así sucesivamente hasta 15.

//  El + 1 en (Max - Min + 1) se utiliza para incluir el límite superior (Max). Sin el + 1, Math.random() solo podría generar números hasta Max - 1. El + 1 permite que Math.random() * (Max - Min + 1) llegue hasta Max, garantizando que Max sea una posibilidad al hacer Math.floor().

// Ejemplo:

// Si Math.random() genera 0.999999, el cálculo es:
// Math.floor(0.999999 * (15 - 5 + 1) + 5);
// 1. 0.999999 * 11 = 10.99999
// 2. 10.99999 + 5 = 15.99999
// 3. Math.floor(15.99999) = 15✅
// Esto confirma que 15 puede ser generado.

// Si Math.random()se genera 0, el cálculo es:
// Math.floor(0 * (15 - 5 + 1) + 5);
// 1. 0 * 11 = 0
// 2. 0 + 5 = 5
// 3. Math.floor(5) = 5✅
// Esto confirma que 5 puede ser generado.
// */
