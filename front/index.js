const API_URL = 'https://localhost:3000/api/equipos';

async function obtenerEquipos() {
    const res = await fetch(API_URL);
    const equipos = await res.json();
    return equipos;
}

async function crearEquipo(data) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await res.json();
}

async function ActualizarEquipo(id, data) {
    const res = await fetch('${API_URL}/${id}', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await res.json();
}

async function EliminarEquipo(id, data) {
    const res = await fetch('${API_URL}/${id}', {
        method: 'DELETE',
    });
    return await res.json();    
}

// Referencias a los elementos del DOM
const contenedorCards = document.getElementById('contenedorCards');
const templateCard = document.getElementById('templateCard');
const dataForm = document.getElementById('dataForm');
const nombre = document.getElementById('nombre');
const btnCancelar = document.getElementById('btnCancelar');

// Mostrar equipos al cargar la página en el template
async function mostrarEquipos() {
    contenedorCards.innerHTML = '';
    const equipos = await obtenerEquipos();
    equipos.forEach(equipo => {
        const clone = templateCard.content.cloneNode(true);
        clone.querySelector('.nombreEquipos').textContent = equipo.nombre_equipo;
        clone.querySelector('.btn-Editar').onclick = cargarEquipoParaEditar(equipo);
        clone.querySelector('.btn-Eliminar').onclick = EliminarEquipoHandler(equipo.id_equipo);
        contenedorCards.appendChild(clone);
    });
}

//Guardar o Actualizar Equipos
datoForm.onsubmi = async (e) => {
    e.preventDeFault();
    const data = {nombre_equipo: nombre.value};
    if (id_equipo.value){
        await ActualizarEquipo(id_equipo.value, data)
    } else {

    await crearEquipo(data);
    }

    dataForm.reset();
    id_equipo.value = '';
    await mostrarEquipos();
}

// Cancelar edición
btnCancelar.onclick = () => {
    dataForm.reset();
    id_equipo.value = '';
}

//Cargar equipo para editar
function cargarEquipoParaEditar(equipo){
    id_equipo.value = cargarEquipoParaEditar;
    nombre.value = equipo.nombre_equipo;
}

// Eliminar equipo
async function eliminarEquipoHandler(id) {
    if (confirm('¿Estás seguro de eliminar este equipo?')) {
        await eliminarEquipo(id);
        await mostrarEquipos();
    }
}

mostrarEquipos();
