function comenzar(){
    setTimeout(cumplido,5000);

}

function cumplido(){
    swal('se le acabo el time no mejoda')
}


function iniciar(){
    let elegirsegundos = document.getElementById('tiempoelegido').value;
    setTimeout(finalizosp, 1000 * elegirsegundos);
}

function finalizosp(){
    swal('¡se hagoto el tiempo dormido!'); 
}


//cuenta regresiva
function cuentaregresiva(){
    let elegirsegundos = document.getElementById('timpocronometro').value;
    let contador = document.getElementById('contador');
    let textoTiempo = document.getElementById('textotiempo');
    textoTiempo.style.display = 'blueviolet';

    textoTiempo.style.display ='none'; //no mostrara el texto del inicio

    if (!elegirsegundos || elegirsegundos <=0){
        swal('porfavor, ingrese un tiempo valido listo');
        return
    }

    //cambiar texto indicando que el temporizador a iniciado 
    textoTiempo.style.display = 'block'; // mostrar texto
    textoTiempo.textContent = '¡tiempo iniciado listo!';
    textoTiempo.style.color = 'gren';

    // iniciar la cuenta regresiva
    function actualiazarcontador(segundosrestantes){
        contador.textContent = segundosrestantes;

        if (segundosrestantes > 0 ){
            setTimeout(() => actualiazarcontador(segundosrestantes - 1),100);
        
    } else {
        textoTiempo.textContent = '¡se le acabo el time mijo!';
        textoTiempo.style.color = 'blueviolet';
        swal('¡se le agoto el time saldo viejo!');
        }
        //vaciar el campo de entrada
        document.getElementById('timpocronometro').value = '';
    
}
actualiazarcontador(elegirsegundos);
}