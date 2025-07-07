//Funciones
// function saludo() {
//   document.writeln("Hola mijo como vamos ", "<br");
//   console.log("Hola mijo como va");
// }
// saludo();

// function despedida() {
//   document.writeln("Nos vamos ", "<br");
//   console.log("Adiós");
// }
// despedida();

//funciones que reciben parametros
// function saludarUsuario(nombreUsuario, apellidoUsuario){
//     document.writeln ('hola', nombreUsuario,' ',apellidoUsuario, 'Bienvenido(a)' )

// }

// let nombre = prompt('dime tu nombre')
// let apellido = prompt('dime tu apellido')

// saludarUsuario(nombre, apellido);

//funcioes con calculos simples

// function calcularAreaRectangulo(base, altura){
// let area = base * altura;
// return area;

// }
// console.log('El area del rectangulo es :', area = calcularAreaRectangulo(5,10));

// function esMayor_o_esMenor(edad){
//     if(edad >=18) {
//         console.log('es mayor de edad')
//     } else {
//         console.log('es menor de edad')
//     }

// }
// esMayor_o_esMenor(20)
// esMayor_o_esMenor(12)

// function suma() {
//   let a = parseInt(prompt("ingrese el primer numero a sumar "));
//   let b = parseInt(prompt("ingrese el segundo  numero a sumar "));
//   return a + b; //Devuelve la suma con los numeros ingresados por el usuario
// }
// document.writeln("el resultado de la suma es :", suma(), "<br>");

function verColor() {
  valor = parseInt(prompt("por favor ingrese entre 1 y 3 para activar el semaforo..."));

  switch (valor) {
    case 1:
      return "BIEN ECHO CACHORO rojo";
    case 2:
      return "BIEN ECHO CACHORO verde";
    case 3:
      return "BIEN ECHO CACHORO amarillo";
    default:
      return "NO HAGAS LO QUE SE TE DE LA GANA";
  }
}
document.writeln(verColor());
