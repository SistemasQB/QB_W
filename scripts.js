// Función para obtener los datos de los empleados y generar las tarjetas
function obtenerDatosYGenerarTarjetas() {
    // Cambia esta URL por la URL de tu servidor que proporciona los datos en formato JSON
    const url = 'https://tu-servidor.com/api/empleados';

    fetch(url)
        .then(response => response.json())
        .then(empleados => {
            // Guardar los empleados en una variable global para usarlos en la búsqueda
            window.empleados = empleados;
            // Inicialmente generar todas las tarjetas
            generarTarjetas(empleados);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}

// Función para generar las tarjetas a partir de un array de empleados
function generarTarjetas(empleados) {
    const contenedor = document.getElementById('employee-cards');
    contenedor.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas tarjetas

    empleados.forEach(empleado => {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${empleado.imagen_url}" class="card-img-top" alt="${empleado.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${empleado.nombre} ${empleado.apellidos}</h5>
                        <p class="card-text">${empleado.descripcion}</p>
                    </div>
                </div>
            </div>
        `;
        contenedor.innerHTML += card;
    });
}

// Función para filtrar los empleados basados en el término de búsqueda
function filtrarEmpleados() {
    const terminoBusqueda = document.getElementById('search-input').value.toLowerCase();
    if (!window.empleados) return;

    const empleadosFiltrados = window.empleados.filter(empleado => {
        const nombreCompleto = `${empleado.nombre} ${empleado.apellidos}`.toLowerCase();
        return nombreCompleto.includes(terminoBusqueda) || empleado.descripcion.toLowerCase().includes(terminoBusqueda);
    });

    generarTarjetas(empleadosFiltrados);
}

// Agregar event listener al formulario de búsqueda
document.addEventListener('DOMContentLoaded', () => {
    obtenerDatosYGenerarTarjetas();

    // Obtener el formulario de búsqueda y agregar un evento de escucha para el evento de entrada
    const formularioBusqueda = document.querySelector('form');
    formularioBusqueda.addEventListener('submit', event => {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
        filtrarEmpleados();
    });
});
