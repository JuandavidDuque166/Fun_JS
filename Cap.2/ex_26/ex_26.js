function pestan(){
    let pestan = open();
    pestan.document.writeln('se abrira una nueva pestaña');

}

function ventana (){
    let ventana = open("", "", "width=400, height=250" );
    ventana.document.writeln('se abrirá una nueva ventana');
}

function confirmar(){
    let respuesta = confirm("¿ahh no se va asalir?");
    if(respuesta == true){
        window.close();
    }
}

//Explicacion:
/*
let ventana = open("", "", "width=400, height=250" );

en este caso las comillas vacias indentifican que no se carga una url especifica, ademas, que debe desanclarse del navegador actual y crear una nueva ventana con las dimenciones especificas
*/

function Redireccionamineto(){
    if(window.confirm('¿te vas a salir de la pagina?')){
        window.location = 'https://www.google.com'
    }
}

//conteo y disponibilidad de caracteres
document.getElementById('texto').addEventListener('keyup', caracteres);

function caracteres(){
    let cant = document.getElementById('texto').Value.length;
    let disponible = 28 - parseInt(cant);
}

document.getElementById