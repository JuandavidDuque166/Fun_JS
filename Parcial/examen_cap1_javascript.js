/*
================================================================================
                    EXAMEN PARCIAL - FUNDAMENTOS DE JAVASCRIPT
                                CAPÍTULO 1
================================================================================

INSTRUCCIONES:
- Lea cuidadosamente cada ejercicio
- Complete el código donde se indique con "// TU CÓDIGO AQUÍ"
- Cada ejercicio tiene un valor de puntos específico
- Total del examen: 120 puntos
- Tiempo estimado: 90 minutos

================================================================================
*/

console.log("=== INICIANDO EXAMEN DE JAVASCRIPT - CAPÍTULO 1 ===");
document.writeln("<h1>EXAMEN PARCIAL - FUNDAMENTOS DE JAVASCRIPT</h1>");
document.writeln("<h2>Capítulo 1: Introducción a JavaScript</h2>");
document.writeln("<hr>");

// ================================================================================
// EJERCICIO 1: VARIABLES Y TIPOS DE DATOS (15 puntos)
// ================================================================================
document.writeln("<h3>EJERCICIO 1: Variables y Tipos de Datos (15 puntos)</h3>");

/*
INSTRUCCIONES:
1. Declare las siguientes variables con los tipos de datos apropiados:
   - nombre (string): Su nombre completo
   - edad (number): Su edad
   - altura (number): Su altura en metros (con decimales)
   - esEstudiante (boolean): true si es estudiante, false si no
   - hobbies (array): Un array con 3 de sus pasatiempos favoritos
   - direccion (object): Un objeto con propiedades: calle, ciudad, pais

2. Muestre en consola el tipo de dato de cada variable usando typeof
3. Muestre en pantalla toda la información usando document.writeln
*/


// TU CÓDIGO AQUÍ
let nombre = "Juan David Duque Gonzalez"; // (string)
document.writeln("Nombre: " + nombre + "<br>");
console.log("Tipo de dato de nombre:", typeof nombre);

let edad = "20"; //(number)
document.writeln("Edad: " + edad + "<br>");
console.log("Tipo de dato de edad:", typeof edad);

let altura = "1.76"; // (number)
document.writeln("Altura: " + altura + "<br>");
console.log("Tipo de dato de altura:", typeof altura);

let esEstudiante = verdadero;// (boolean)
document.writeln("Es estudiante: " + esEstudiante + "<br>");
console.log("Tipo de dato de esEstudiante:", typeof esEstudiante);

let hobbies = "Gym, Descansar, viajar";
document.writeln("Hobbies: " + hobbies.join(", ") + "<br>");
console.log("Tipo de dato de hobbies:", typeof hobbies);

let direccion = { // object
   calle: "Calle 12 # 26-17",
   ciudad: "Palmira valle",
}
document.writeln("Dirección: " + direccion.calle + ", " + direccion.ciudad + "<br>");
console.log("Tipo de dato de direccion:", typeof direccion);

// Declare las variables solicitadas:

// Muestre el tipo de dato de cada variable:

// Muestre la información en pantalla:

document.writeln("<hr>");

// ================================================================================
// EJERCICIO 2: OPERADORES MATEMÁTICOS Y CONVERSIÓN (15 puntos)
// ================================================================================
document.writeln("<h3>EJERCICIO 2: Operadores Matemáticos y Conversión (15 puntos)</h3>");

/*
INSTRUCCIONES:
1. Solicite al usuario dos números usando prompt()
2. Convierta los valores a números usando parseInt() y parseFloat()
3. Realice las siguientes operaciones:
   - Suma
   - Resta
   - Multiplicación
   - División
   - Módulo (residuo)
   - Potencia
4. Muestre los resultados en pantalla
5. Calcule el promedio de los dos números y redondee el resultado
*/

// TU CÓDIGO AQUÍ

let a,b; 
let c, d;  
let suma, resta, mlt, div, reciduo, potencia;
a = parseFloat(prompt("Ingrese un número: "));
b = parseFloat(prompt("Ingrese otro número: "));

// Realice las operaciones matemáticas
suma = a + b;
resta = a - b;
mlt = a * b;   
div = a / b;
reciduo = a % b;
potencia = a ** b;
// Muestre los resultados en pantalla
document.writeln("La suma es: " + suma + "<br>");
document.writeln("La resta es: " + resta + "<br>");
document.writeln("La multiplicación es: " + mlt + "<br>");
document.writeln("La división es: " + div + "<br>");
document.writeln("El residuo es: " + reciduo + "<br>");
document.writeln("La potencia es: " + potencia + "<br>");
// Calcule el promedio y redondee
let promedio = Math.round((a + b) / 2);
document.writeln("El promedio es: " + promedio + "<br>");
console.log("Resultados de las operaciones:");
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", mlt);
console.log("División:", div); 

// Solicite los números al usuario:

// Convierta los valores:

// Realice las operaciones matemáticas:

// Calcule el promedio y redondee:

document.writeln("<hr>");

// ================================================================================
// EJERCICIO 3: OPERADORES DE COMPARACIÓN Y LÓGICOS (15 puntos)
// ================================================================================
document.writeln("<h3>EJERCICIO 3: Operadores de Comparación y Lógicos (15 puntos)</h3>");

/*
INSTRUCCIONES:
1. Solicite al usuario su edad y si tiene licencia de conducir (sí/no)
2. Convierta la respuesta de licencia a boolean
3. Evalúe las siguientes condiciones:
   - Si es mayor de 18 años Y tiene licencia → "Puede conducir"
   - Si es mayor de 18 años PERO no tiene licencia → "Necesita obtener licencia"
   - Si es menor de 18 años → "No puede conducir aún"
4. Use operadores lógicos (&&, ||) para las evaluaciones
5. Muestre el resultado en pantalla
*/

// TU CÓDIGO AQUÍ
// Solicite la información al usuario:
let Edad = parseInt(prompt("¿Cuál es tu edad?"));
let tieneLicencia = prompt("¿Tienes licencia de conducir? (sí/no)").toLowerCase() === "sí";

let mensaje = "";

if (edad >= 18 && tieneLicencia) {
  mensaje = "Puede conducir";
} else if (edad >= 18 && !tieneLicencia) {
  mensaje = "Necesita obtener licencia";
} else {
  mensaje = "No puede conducir aún";
}

document.writeln(`<p>${mensaje}</p>`);
document.writeln("<hr>");

// Solicite la información al usuario:

// Convierta y evalúe las condiciones:

document.writeln("<hr>");

// ================================================================================
// EJERCICIO 4: FUNCIONES MATEMÁTICAS Y STRINGS (15 puntos)
// ================================================================================
document.writeln("<h3>EJERCICIO 4: Funciones Matemáticas y Strings (15 puntos)</h3>");

/*
INSTRUCCIONES:
1. Cree una función llamada calcularAreaCirculo que reciba el radio como parámetro
2. La función debe calcular el área usando Math.PI y Math.pow()
3. Redondee el resultado a 2 decimales usando Math.round()
4. Cree una función llamada formatearNombre que reciba nombre y apellido
5. La función debe convertir el nombre a mayúsculas y el apellido a minúsculas
6. Concatene ambos usando el método concat()
7. Pruebe las funciones con valores de ejemplo
*/

// TU CÓDIGO AQUÍ
// 1. Función para calcular el área de un círculo
function calcularAreaCirculo(radio) {
  let area = Math.PI * Math.pow(radio, 2);
  let areaRedondeada = Math.round(area * 100) / 100; // redondea a 2 decimales
  return areaRedondeada;
}

// 2. Función para formatear nombre y apellido
function formatearNombre(nombre, apellido) {
  let nombreFormateado = nombre.toUpperCase().concat(" ", apellido.toLowerCase());
  return nombreFormateado;
}

// 3. Pruebas de las funciones
let area = calcularAreaCirculo(5); // ejemplo con radio 5
console.log("Área del círculo:", area); // Debería mostrar: Área del círculo: 78.54

let nombreCompleto = formatearNombre("Carlos", "PÉREZ");
console.log("Nombre formateado:", nombreCompleto); // Debería mostrar: Nombre formateado: CARLOS pérez

// Función para calcular área del círculo:

// Función para formatear nombre:

// Pruebe las funciones:

document.writeln("<hr>");

// ================================================================================
// EJERCICIO 5: ESTRUCTURAS DE CONTROL (20 puntos)
// ================================================================================
document.writeln("<h3>EJERCICIO 5: Estructuras de Control (20 puntos)</h3>");

/*
INSTRUCCIONES:
1. Solicite al usuario un número del 1 al 7
2. Use switch-case para mostrar el día de la semana correspondiente:
   - 1 = Lunes, 2 = Martes, 3 = Miércoles, 4 = Jueves
   - 5 = Viernes, 6 = Sábado, 7 = Domingo
   - Cualquier otro valor = "Día inválido"
3. Solicite al usuario su calificación (0-100)
4. Use if-else if-else para determinar la nota:
   - 90-100 = A, 80-89 = B, 70-79 = C, 60-69 = D, 0-59 = F
5. Muestre ambos resultados en pantalla
*/

// TU CÓDIGO AQUÍ
// Switch para días de la semana:
// 1. Solicite al usuario un número del 1 al 7
  let numeroDia = parseInt(prompt("Ingrese un número del 1 al 7 para saber el día de la semana:"));

  // 2. Switch-case para mostrar el día de la semana
  let dia;
  switch (numeroDia) {
    case 1:
      dia = "Lunes";
      break;
    case 2:
      dia = "Martes";
      break;
    case 3:
      dia = "Miércoles";
      break;
    case 4:
      dia = "Jueves";
      break;
    case 5:
      dia = "Viernes";
      break;
    case 6:
      dia = "Sábado";
      break;
    case 7:
      dia = "Domingo";
      break;
    default:
      dia = "Día inválido";
  }


// If-else para calificaciones:
 let calificacion = parseInt(prompt("Ingrese su calificación (0 a 100):"));
  let nota;

  // 4. If-else if-else para determinar la nota
  if (calificacion >= 90 && calificacion <= 100) {
    nota = "A";
  } else if (calificacion >= 80) {
    nota = "B";
  } else if (calificacion >= 70) {
    nota = "C";
  } else if (calificacion >= 60) {
    nota = "D";
  } else if (calificacion >= 0) {
    nota = "F";
  } else {
    nota = "Calificación inválida";
  }

  // 5. Mostrar resultados
  document.writeln(`<p>Día de la semana: ${dia}</p>`);
  document.writeln(`<p>Nota obtenida: ${nota}</p>`);

document.writeln("<hr>");

// ================================================================================
// EJERCICIO 6: CICLOS Y ARRAYS (20 puntos)
// ================================================================================
document.writeln("<h3>EJERCICIO 6: Ciclos y Arrays (20 puntos)</h3>");

/*
INSTRUCCIONES:
1. Cree un array con 5 números aleatorios entre 1 y 100
2. Use un ciclo for para mostrar todos los números del array
3. Calcule la suma de todos los números del array
4. Encuentre el número mayor y el menor del array
5. Use un ciclo while para contar cuántos números son pares
6. Muestre todos los resultados en pantalla
*/

// TU CÓDIGO AQUÍ
// Cree el array con números aleatorios:
  let numeros = [];
  for (let i = 0; i < 5; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
  }
// Muestre todos los números:
  document.writeln("<p>Números del array:</p>");
  for (let i = 0; i < numeros.length; i++) {
    document.writeln(numeros[i] + "<br>");
  }
// Calcule la suma:
  let Suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
// Encuentre mayor y menor:
  let mayor = numeros[0];
  let menor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
// Cuente números pares:
  let pares = 0;
  let index = 0;
  while (index < numeros.length) {
    if (numeros[index] % 2 === 0) {
      pares++;
    }
    index++;
  }
document.writeln("<hr>");

// ================================================================================
// BONUS: PROGRAMACIÓN ORIENTADA A OBJETOS (10 puntos extra)
// ================================================================================
document.writeln("<h3>BONUS: Programación Orientada a Objetos (10 puntos extra)</h3>");

/*
INSTRUCCIONES:
1. Cree una clase llamada Estudiante con las siguientes propiedades:
   - nombre, edad, carrera, promedio
2. Agregue un método llamado mostrarInfo() que muestre toda la información
3. Agregue un método llamado calcularEstado() que retorne:
   - "Excelente" si promedio >= 4.5
   - "Bueno" si promedio >= 3.5
   - "Regular" si promedio >= 3.0
   - "Necesita mejorar" si promedio < 3.0
4. Cree una instancia de la clase y pruebe los métodos
*/

// TU CÓDIGO AQUÍ
// Defina la clase Estudiante:

// Cree una instancia y pruebe los métodos:

document.writeln("<hr>");
document.writeln("<h2>¡FIN DEL EXAMEN!</h2>");
document.writeln("<p>Revisa la consola para ver todos los resultados.</p>");

console.log("=== EXAMEN COMPLETADO ==="); 