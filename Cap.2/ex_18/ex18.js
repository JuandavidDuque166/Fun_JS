let contro = 0;
let contraseña = 'santo_seña';

function verificar(){
    let clave = document.getElementById('clave').value;


if(clave != contraseña || clave == ''){
    alert('Contraseña incorrecta o vacia, intentelo de nuevo');
    control++;

    if(control>=3){
        alert('Ha superado el limite de intentos, por favor contacte con el administrador')
    }
} else {
    window.open('http://www.google.com')
}

}