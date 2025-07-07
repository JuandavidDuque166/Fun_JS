// // Mostrar los nuemros del 1 a 5
// // Se usa cuando sabemos cuántas veces queremos repetir algo.
// for (let numero = 1; numero <= 5; numero++) {
//   console.log("Número actual", numero);
// }

// // mostrar los datos de una persona
// // Se usa para recorrer las propiedades de un objeto.
// let persona = {
//   nombre: "Amauri",
//   apellido: "Martinez",
//   edad: 21,
//   ciudad: "Medellin",
// };

// for (let propiedad in persona) {
//   console.log(propiedad, ":", persona[propiedad]);
// }

// // Contar hasta 3 con un while
// // Se usa cuando no sabemos cuantas veces, pero tenemos una condición que se evalúa antes de entrar.
// let contador = 1;
// while (contador <= 3) {
//   console.log("contador", contador);
//   contador++;
// }

// // Igual que While pero siempre ejecutando al menos una vez.
// // Mostrar el menú hasta que el usuario elija "salir"
// let opcion = "";

// do {
//   opcion = prompt("Escribe una opción (Escribe 'Salir' para terminar)");
//   console.log("Elegiste: ", opcion);
// } while (opcion !== "Salir");

// // Este se usa para recorrer valores de arreglos (no objetos).
// // Recorrer una lista de frutas
// let listaDeFrutas = ["manzana", "banana", "uva"];

// for (let fruta of listaDeFrutas) {
//   console.log("Fruta: ", fruta);
// }

// // // Ciclo de numeros pares
// // document.writeln("Ciclo de numeros pares<br>");
// // for (let x = 2; x <= 20; x += 2) {
// //   document.writeln(`Valor de x = ${x}`, "<br>");

// let usuario, clave, control;

// control = 0;
// usuario = prompt("Ingrese su usuario...");
// clave = prompt("Ingrese su contraseña...");

// do{
//     if(clave != 'MiContraseña'){
//         clave = prompt('Contraseña incorrecta, intenta de nuevo...')
//         control = 0; //continuará valiendo cero mientras la clave digitada sea diferente a la establecida en el sistema.
//     } else {
//         control = 1; //Control valdra uno cuando la contraseña ingresada sea la correcta.
//     }
// } while (control != 1); //La contrseña es verificada por el control, si vale 1 le dara acceso al sistema pidiendola hasta que la condicion o usted programe los intentos.
// document.writeln('Acceso concedido!, Bienvenido');

// // Sabaer cuantas vocales tiene la palabra murcielago.

let palabra = "murcielago";
let vocal = 0; // en esta variable vocal se van a guaradar la cantidad de vocales que se encuentren en la palabra.

for(let p in palabra) {
  if(palabra [p]== "a" || palabra [p] == "e" || palabra [p]== "i" || palabra [p]== "o" || palabra [p]=="u") // El ciclo analiza en cada vuelta si la letra es igual a una de las vocales definidas en la busqueda.
{
  
    vocal++;
}
}
document . writeln ("cantidad de vocales que tiene la palabra murcielago es :" 
  palabra
vocal); 