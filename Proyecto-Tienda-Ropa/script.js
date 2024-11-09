function redirigir() {
    const select = document.getElementById("tipo_prenda");
    const selectedPage = select.value;
    if (selectedPage) {
        window.location.href = selectedPage;
    }
}

function getURLParameter(name) {
    return new URLSearchParams(window.location.search).get(name);
}

// Función para cargar los datos del producto en venta.html
function cargarDatosProducto() {
    // Obtenemos los valores de cada parámetro de la URL
    const imgSrc = getURLParameter('img');
    const nombre = getURLParameter('nombre');
    const talla = getURLParameter('talla');
    const dueño = getURLParameter('dueño');
    const precio = getURLParameter('precio');

    // Verificar que estamos en venta.html antes de asignar
    if (window.location.pathname.includes("venta.html")) {
        // Insertamos los valores obtenidos en los elementos correspondientes
        document.querySelector('#venta img').src = imgSrc;
        document.querySelector('.datos h4').textContent = nombre;
        document.querySelector('.datos p').textContent = `Talla ${talla} - ${dueño}`;
        document.querySelector('.boton-articulo2').textContent = `$${precio}`;
    }
    else if(window.location.pathname.includes("estilo.html")){
        document.querySelector('#venta img').src = imgSrc;
        document.querySelector('.datos h4').textContent = nombre;
        document.querySelector('.datos p').textContent = `Talla ${talla} - ${dueño}`;
    }
}

// Llama a cargarDatosProducto cuando se carga la página de venta.html
window.onload = cargarDatosProducto;