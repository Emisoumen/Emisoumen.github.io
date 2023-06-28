

// Obtenemos el elemento h1
var h1 = document.getElementById("cambiarTexto");

// Creamos un array con los textos que deseas mostrar
var textos = [" tu website", "tu empresa", "tu marca"];

// Inicializamos un contador para rastrear el índice actual del texto
var indice = 0;

// Definimos la función que cambiará el texto del h1 con efecto de transición
function cambiarTexto() {
    // Añadimos la clase "oculto" al h1 para activar la transición de opacidad
    h1.classList.add("oculto");

    // Esperamos 500 milisegundos antes de actualizar el texto y eliminar la clase "oculto"
    setTimeout(function () {
        // Actualizamos el texto del h1 con el texto actual del array
        h1.textContent = textos[indice];

        // Eliminamos la clase "oculto" para mostrar el texto con la transición de opacidad
        h1.classList.remove("oculto");

        // Incrementamos el índice
        indice++;

        // Si el índice es igual a la longitud del array, lo reiniciamos a 0
        if (indice === textos.length) {
            indice = 0;
        }
    }, 500); // 500 milisegundos para que coincida con la duración de la transición
}

// Ejecutamos la función cada 2 segundos (2000 milisegundos)
setInterval(cambiarTexto, 2000);


