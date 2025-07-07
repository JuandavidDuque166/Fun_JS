/*========== Operadores ========== */
// Operadores de asignación

let a = 1;

document. writeln ("El valor de a = ", a);
document. writeln ( "<br>"); //se crea etiqueta zbr> desde el escritorio javascrip como elemento HTML para hacer saltos de paginacion
console. log ("El valor de a =", a );

a++; //El operador ++ aumenta o incrementa el valor en uno 
document. writeln ("El valor de a = ", a);
console. log ("el valor de a =", a);
document.writeln ("<br>");

a+=5; // El operador suma el valor de la variable dependiendo del valor que se ponga luego del igual
document. writeln ("El valor de a = ", a ,"<br>");
console. log ("El valor de a =", a);



a--; // El operador -- decrementa el valor en uno 
document.writeln ("El valor de a = ", a, "<br>");
console.log("El valor de a =", a);

a-=2; //El operador -= resta el valor de la variable dependiendo del valor que se ponga luego del igual
document.writeln ("El valor de a = ", a, "<br>");
console.log("El valor de a =", a);

a*=2; //El operador multiplica el valor de la variable dependiendo que se quiera multiplicar
document.writeln ("El valor de a = ", a, "<br>" );
console.log("El valor de a =", a);

a/=4; //El operador /= divide el valor de la variable dependiendo lo que quieras dividir 
document.writeln ("El valor de a = ", a, "<br>");
console.log("El valor de a =", a);

a**=3; 
document.writeln ("El valor de a = ", a, "<br>");
console.log("El valor de a =", a);

// Operadores de comparación

//Los operadores de comparacion sirven para comparar cantidades o valores entre variables 

/*
= es el operador de asignacion 
> es el operador mayor que 
< es el oprearador menor que 
-- es el operador igual que 
!- es el operador diferente de 
>- es el operador mayor o igual que 
<- es el operador menor o igual que 
*/

let valorUno, valorDos; // se declaran las variables 
//utilidad del operador de agsinacion 
valorUno - 20; // se inicia la variable con un valor de tipo entero 
valorDos = 10; // se inicializa la variable con un valor de tipo entero 

// Operador mayor que 
document. writeln(valorUno > valorDos);
console.log(valorUno > valorDos);
// El sistema verifica si la variable uno es mayor que la dos y devorvera un resultado es decir falso o verdadero (true or false).

//operadormayor que <
document.writeln(valorUno < valorDos, "<br>");
console.log(valorUno < valorDos);
//el sistema verifica si la variable uno es menor que la dos y devolvera un resultado boleano es decir falso o verdadero (true o false).

//operador == igual que 
document.writeln(valorUno == valorDos, "<br>");
console.log(valorUno == valorDos);
//el sistema verifica si las varibles son iguales de lo contrario dara falso

//operador != diferente de
document.writeln(valorUno != valorDos, "<br>");
console.log(valorUno != valorDos);
// el sistema verifica si las variables son diferentes en caso que si lo sea dara tru

//operador mayoro igual que >=
document.writeln(valorUno >= valorDos);
console.log(valorUno >= valorDos);
// el sistema verifica si la variable uno es mayor o igual que la dos y dara un resultado bo

//operador menor igual que <=
document.writeln(valorUno <= valorDos);
console.log(valorUno <= valorDos);
// el sistema verifica si la variable uno es menor o igual que la dos y dara un resultado bo
