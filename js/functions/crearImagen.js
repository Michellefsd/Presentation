const contenedor = document.querySelector('#header');
function agregarImagen(variable) {
    const imagen = document.createElement('img');
    imagen.classList.add('border-radius1');
    imagen.classList.add('img-yocv');
    imagen.src = variable;
    contenedor.appendChild(imagen);
}

export {contenedor, agregarImagen};