// operadores matematico

let a,b; // aqui va a dar un error es normal
let c, d; // Aqui las operaciones van a dar el resultado real
let suma, resta, mlt, div, reciduo, potencia;// variables para obtener los resultados de los operadores 

 a = prompt("ingrese un numero; ");
 b = prompt("ingrese otro numero; ");

//resultado de las operaciones 
suma = a + b ;
resta = a - b ;
mlt = a * b ;
div = a / b ;
reciduo = a % b ;
potencia = a ** b ;

document.writeln("La suma es : ", suma , "<br>");
document.writeln("La resta es : ", resta , "<br>");
document.writeln("La multiplicacion es : ", mlt ,  "</br>");
document.writeln("La division es : ", div , "<br>");
document.writeln("El reciduo es : ", reciduo , "<br>");
document.writeln("La potencia es : ", potencia , "<br>");
//document.writeln("La suma es : ", suma , "

// segunda operacion
//Para que las operaciones numericas se pueda dar correctamenta se debe convertir los datos ingresado con parseint o parsefloat

 c = parseInt(prompt("ingrese un numero: " ));
 d = parseFloat(prompt("ingrese otro numero: "));

 //resultado de las operaciones 
 suma = c + d;
 rest = c - d;
 mlt = c * d;
 div = c / d;
 reciduo = c % d;
 potencia = c ** d;

 document.writeln("La suma es : ", suma , "<br>");
 document.writeln("La resta es : ", rest , "<br>");
 document.writeln("La multiplicacion es : ", mlt ,  "</br>");
document.writeln("La division es : ", div , "<br>");
 document.writeln("El reciduo es : ", reciduo , "<br>");
 document.writeln("La potencia es : ", potencia , "<br>");
 document.writeln("La suma es : ", suma , "<br>");


