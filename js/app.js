// Agregar evento click a los títulos de las secciones
document.addEventListener('DOMContentLoaded', () => {
    const secciones = document.querySelectorAll('section h2');
    secciones.forEach((seccion) => {
        seccion.addEventListener('click', () => {
            alert(`Has clicado en ${seccion.textContent}`);
        });
    });
});
