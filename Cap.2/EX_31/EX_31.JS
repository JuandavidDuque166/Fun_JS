/*
JSON
Un archivo .json es como una hoja de apuentes ordenada donde se guardan t¿datos de manera clara que una persona o un programa los pueda leer, entender y utilizar.

EJ: haga cuenta que es como un cuaderno o libreta de notas dond usted escribe informacion importante de alguien como por ejemplo su nombre, edad, direccion, telefono y esta informacion lo maniene en el mismo formato y bien organizada para cuando usted o alguien que requiera dicha informcion la necesite y pueda encontrarla facil mente

EJ: tecnio entidad personal o direccion de personas 

{
"Nombre":"Amauri Martinez",
"Edad": "21",
"direccion": "calle #13 sin salida",
"telefono": "3105084000",
"email": "elbicho07@cr7.com",
}


Ejemplo de un menu en archivo.json:


{
    "plato": "hamburguesa",
    "precio":"40.00",
    "ingredientes": ["carne", "pan", "queso"],
    "disponible": "true",
}
    */

let persona ={
    "Nombre":"Amauri Martinez",
    "Edad": "21",
"direccion": "calle #13 sin salida",
"telefono": "3105084000",
"email": "elbicho07@cr7.com",
"apredinz": "false",
"departamento": "valle del cauca",   
}

let elementoTexto = document.
getElementById('Nombre');

elementoTexto.textContent = persona.Nombre;