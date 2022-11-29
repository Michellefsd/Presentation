
document.addEventListener('DOMContentLoaded',  function(){
    //Seleccionar los elementos de la interfaz
    const inputName = document.querySelector('#Name');
    const inputEmail = document.querySelector('#Email');
    const inputPhone = document.querySelector('#Phone');
    const inputMessage = document.querySelector('#Message');
    const formulario = document.querySelector('.formulario h4');
    //Asignar evenntos
    inputName.addEventListener('blur', validar)
    inputEmail.addEventListener('blur', validar)
    inputPhone.addEventListener('blur', validar)
    inputMessage.addEventListener('blur', validar)
    
    function validar(e) {
    //    e.target.parentElement.nextElementSibling
        if(e.target.value.trim() == '') {
           mostrarAlerta(`The Field \"${e.target.id}\" Must Be Filled Correctly`, e.target.parentElement)
            return;
        }
    }
    function mostrarAlerta(message, referencia) {
        const alerta = referencia.querySelector('.alerta');
        if(alerta) {
            alerta.remove();
        }
        const error = document.createElement('P');
        error.classList.add('centrar-texto');
        error.classList.add('alerta');
        error.textContent = message;
        referencia.appendChild(alerta);
    }
});
