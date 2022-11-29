
document.addEventListener('DOMContentLoaded',  function(){

    const email = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }

    //Seleccionar los elementos de la interfaz
    const inputName = document.querySelector('#name');
    const inputEmail = document.querySelector('#email');
    const inputPhone = document.querySelector('#phone');
    const inputMessage = document.querySelector('#message');
    const formulario = document.querySelector('.formulario');
    const btnSubmit = document.querySelector('#send');
    const spinner = document.querySelector('#spinner')
    //Asignar evenntos
    inputName.addEventListener('input', validar);
    inputEmail.addEventListener('blur', validar);
    inputPhone.addEventListener('blur', validar);
    inputMessage.addEventListener('input', validar);
    formulario.addEventListener('submit', enviarEmail); 

    async function enviarEmail(e){
        e.preventDefault();
        const form = new FormData(this);
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                'Accept': 'application/json'
            }
        })
        //spinner 
        setTimeout(() => spinner.classList.remove('hidden'), 600)
        setTimeout(() => {
            spinner.classList.add('hidden'); 
            crearAlerta()
        }, 3300);
        email.name = '';
        email.email = '';
        email.phone = '';
        email.message = '';
        formulario.reset();
        comprobarEmail();
    }
    function crearAlerta() {
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('alerta-exito');
            alertaExito.textContent = `Thanks... We'll Be In Touch`;
            formulario.appendChild(alertaExito)
            setTimeout(() => alertaExito.remove(), 4000)
    }
    function validar(e) {
    //  e.target.parentElement.nextElementSibling
        if(e.target.value.trim() === '') {
            mostrarAlerta(`The Field \"${e.target.id}\" Must Be Filled Correctly`, e.target.parentElement)
            email[e.target.id] = '';
            comprobarEmail();
            return;
        }
        if(e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('This Is Not A Valid Email', e.target.parentElement);
            email[e.target.id] = '';
            comprobarEmail();
            return;
        }
        if(e.target.id === 'phone' && !validarPhone(e.target.value)) {
            mostrarAlerta('This Is Not A Valid Phone', e.target.parentElement);
            email[e.target.id] = '';
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement)

        // asignar los valores
        email[e.target.id] = e.target.value.trim().toLowerCase();
        // comprobar el onjeto de email
        comprobarEmail()
    }
    function mostrarAlerta(message, reference) {
        limpiarAlerta(reference)
       
        const error = document.createElement('P');
        error.classList.add('centrar-texto');
        error.classList.add('alerta');
        error.textContent = message;
        reference.appendChild(error);
    }
    function limpiarAlerta(reference){
        const alerta = reference.querySelector('.alerta');
        if(alerta) {
            alerta.remove();
        }
    }
    function validarEmail(email) {
        const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const resultado = regex.test(email);
        return resultado;
    }
    function validarPhone(phone) {
        const validateNumber = /((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/
        const resultado = validateNumber.test(phone);
        return resultado;
    }
    function comprobarEmail() {
        // console.log(email)
        if(Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity');
            btnSubmit.disabled = true;
            return
        }
        btnSubmit.classList.remove('opacity');
        btnSubmit.disabled = false;     
    }

});
