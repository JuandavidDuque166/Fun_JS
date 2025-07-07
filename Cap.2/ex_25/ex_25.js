function focalizar(){
    document.getElementById('nombre').value='';
    document.getElementById('nombre').style.border='';
    document.getElementById('nombre').style.borderRadius='8px';

}

function validarvacios(){
    if(document.getElementById('nombre').value==''){
        document.getElementById('nombre').style.boder='2px sold red';
        document.getElementById('nombre').style.borderRadius='8px';
        swal('¡debe de ingresar el nombre!')
    }
    }