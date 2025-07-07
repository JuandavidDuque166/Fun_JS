// Acceder al archivo JSON
let datosJson;
let xhr = new XMLHttpRequest();
xhr.open('GET', 'persona.json', true); // 0 usa 'ex31.json' si prefieres ese archivo
xhr.responseType = 'json';
xhr.onload = function() {
    if (xhr.status === 200) {
        datosJson = xhr.response;
        document.getElementById('Nombre').textContent = datosJson.persona.nombre;
        document.getElementById('Edad').textContent = datosJson.persona.edad;
        document.getElementById('apredinz').textContent = datosJson.persona.aprendiz;
        document.getElementById('direccion').textContent = datosJson.persona.direccion.direccion;
        document.getElementById('telefono').textContent = datosJson.persona.telefono.telefono;
        document.getElementById('email').textContent = datosJson.persona.email.email;
        document.getElementById('departamento').textContent = datosJson.persona.departamento.departamento;
    console.log(datosJson);        
    } else {
        console.error('Error al cargar el archivo Json:', xhr.status);
    }
};

xhr.send()