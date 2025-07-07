function tiempofinalizado(){
    alert('¡Se ha agotado el tiempo!')
}
function cuentaregresiva(){
    let elegirsegundos = document.getElementById
    ('tiempoconometro').value;


let contador = document.getElementById('contador')
let textoTiempo = document.getElementById('textiempoo')
let sonidoAlarma = document.getElementById('audioalarma')
textoTiempo.style.display = "blueviolet";
textoTiempo.style.display = "none";

if(!elegirsegundos || elegirsegundos <= 0){
    alert('Ingrese un tiempo válido')
    return
}
textoTiempo.style.display = "blok";
textoTiempo.textContent = "¡Tiempo Inicializado!";
textoTiempo.style.display = "green";

function actualizarContador(segundosrestantes){
    contador.textContent = segundosrestantes;
}

    if(segundosRestantes >  0){
        setTimeout(()=> actualizarContador(segundosrestantes -1),1000)

    }else{
        document.getElementById('tiempoCronometro')
        audioAlarma.play()

        textoTiempo.textContent = '¡Tiempo finalizado!';
        textoTiempo.style.color = 'blueviolet';

        setTimeout(()=> alert('¡Se ha agotado el tiempo!'),1000)
    }

actualizarContador(elegirsegundos);
}