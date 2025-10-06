function filtraseleccion(categoria, botonSeleccionado) {
    // 1. OBTENER Y DESACTIVAR TODOS LOS BOTONES
    // Usamos el selector de la clase 'boton' para obtener todos los botones.
    const botones = document.querySelectorAll('.boton');
    
    // Eliminamos la clase 'active' de todos los botones.
    botones.forEach(btn => btn.classList.remove('active'));
    
    // 2. ACTIVAR EL BOTÓN SELECCIONADO
    // Añadimos la clase 'active' al botón que fue pulsado (pasado como argumento).
    botonSeleccionado.classList.add('active');
    
    // 3. FILTRAR MANUALES/SERIES
    // Obtenemos todos los elementos que tienen la clase 'filtro'.
    const series = document.querySelectorAll('.filtro'); 

    series.forEach(serie => {
        // Obtenemos las clases del elemento, ya que allí está el nombre de la plataforma.
        // Las clases de 'serie' se ven así: "filtro Netflix" o "filtro HBO MAX".
        
        // Convertimos las clases a un string para buscar si contiene la categoría.
        const clasesSerie = serie.className; 

        // Condición para mostrar:
        // Si la categoría es 'all' (para Inicio/Todos) O si la clase contiene el nombre de la categoría.
        if (categoria === 'all' || clasesSerie.includes(categoria)) {
            // Mostrar elemento
            serie.style.display = 'block';
        } else {
            // Ocultar elemento
            serie.style.display = 'none';
        }
    });
}