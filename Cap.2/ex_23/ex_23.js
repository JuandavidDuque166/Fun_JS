let area = document.getElementById("comentario")
area.style.resize = 'none';

function comentar(){
    const comentario = document.getElementById("comentario")
    Value.trim();
}

if(comentario.length === 0){
    swal('usted no ha digitado ninguna letar, por favor escriba algo');
    }   
    else if(comentario.length > 100){
        swal('no te pases de 100 pss')
    }
else{
    swal('su comentario ha sido enviado con exito')
}