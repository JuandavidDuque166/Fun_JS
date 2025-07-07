/* CONDICIONALES

funciones que permiten mejorar la toma de decisiones en la ejecucion del codigo, esta decicion se basan en evaluar si una o mas condiciones son verdaderas o falsas, es decir, si se cumple algo en ciertas situacione, parametros o condiciones especificas.

ahora bien, se puede verificar si se cumple una condicion determinada tiene un resultado especifico, el programa se ejecutara dentro de las instrucciones dadas. */

// condiciones if() else{}

let nombre, edad ;
nombre = prompt("ingresa tu nombre");
edad = prompt("ingrese su edad");

if (edad >= 18) { 
    document . writeln("ya puede prestar servicio o trabaje mijo ");
    console.log("edad digitada :", edad, "puede prestar servicio");
}else {
document . writeln("todavia no puedes prestar servicio");
console.log("edad digitada :", edad, "no puede prestar servicio");
}
