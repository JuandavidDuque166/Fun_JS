// Ejercicio de contador 

let contador = 0;

function atualizarVista(){
document.getElementById("valorcontador").textcontent = 'valor: ${contador}';
}

function incrementar(){
    contador++;
    atualizarVista();
}

function decrementar(){
    contador--;
    atualizarVista();
}