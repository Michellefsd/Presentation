export function crearNodo(etiqueta, clase, clase1, contenido, lugar) {
    let caja = document.createElement(etiqueta);
    caja.classList.add(clase, clase1);
    caja.textContent = contenido ;
    lugar.appendChild(caja);
}