//Pedir datos a un usuario (como ejercicio pues cuando se piden datos se utiliza inputs).

let nombre, edad, direccion, movil, email; // Se pueden crear tantas variables como se necesiten con una declaracion let.

//promt es una palabra reservada que despliega una funcion y se sale un mensaje de tipo alert para pedir datos.

nombre = prompt("ingrese su alias"); //se pide los datos al usuario
document.writeln ("su nombre es: ", nombre + "<br>"); // se imprime los datos proporcionados por el usuario 
 
edad = prompt (" Digite su edad "); //se pide los datos al usuario
document.writeln ("Tu edad es: ", edad + "<br>");// se imprime los datos proporcionados por el usuario 

direccion = prompt (" Digite su direccion "); //se pide los datos al usuario
document.writeln ("Tu direccion es: ", direccion + "<br>");// se imprime los datos proporcionados por el usuario 

movil = prompt (" Digite su numero de movil "); //se pide los datos al usuario
document.writeln ("Tu numero de movil es: ", movil + "<br>");// se imprime los datos proporcionados por el usuario 

email = prompt (" Digite su correo electronico "); // se pide los datos al usuario
document.writeln ("Tu correo electronico es: ", email + "<br>");//se pide los datos al usuario

console.log ("su nombre es: ", nombre , "<br>");
console.log ("tu edad es: ", edad , "<br>");
console.log ("tu direccion es: ", direccion , "<br>");
console.log ("tu numero de movil es: ", movil , "<br");
    console.log ("tu correo electronico es: ", email , "<br>");
    //console.log es una funcion que imprime en la consola del navegador los datos que s