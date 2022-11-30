
import { person } from "./class.js/objects/person.js";


//Funciones

import { crearNodo } from './functions/crearNodo.js';
import { crearIconos } from './functions/crearIconos.js';
import { contenedor, agregarImagen } from './functions/crearImagen.js';


agregarImagen('./img/cv.jpg');
crearNodo("h1", "logo-nombre","centrar-texto", person.firstname + person.lastname, contenedor);

//aside

const contactIcon1 = document.createElement('div');
contactIcon1.classList.add('inline')
const contactIcon2 = document.createElement('div');
contactIcon1.classList.add('inline')
const contactIcon3 = document.createElement('div');
contactIcon1.classList.add('inline')

const card1 = document.querySelector('#card1');
crearNodo('h4', 'white', 'centrar-texto', 'Contact', card1);
// const lista = document.createElement('ul');
// const listado = card1.appendChild(lista);


const iconHome = document.createElement('i');
iconHome.classList.add('fa-location-dot', 'inline', 'margin', 'fa-solid');
crearIconos(contactIcon1, iconHome);
crearNodo('li', 'white', 'inline', person.residence, contactIcon1);

const iconPhone = document.createElement('i');
iconPhone.classList.add('fa-phone', 'inline', 'margin', 'fa-solid');
crearIconos(contactIcon2, iconPhone);
crearNodo('li', 'inline', 'white', person.Phone, contactIcon2);

const iconMail = document.createElement('i');
iconMail.classList.add('fa-envelope', 'inline', 'margin', 'fa-solid');
crearIconos(contactIcon3, iconMail);
crearNodo('li', 'white', 'inline', person.email, contactIcon3);

card1.appendChild(contactIcon1);
card1.appendChild(contactIcon2);
card1.appendChild(contactIcon3);

const card2 = document.querySelector('#card2');
crearNodo('h4', 'white', 'centrar-texto', 'Soft-Skills', card2);
const lista1 = document.createElement('ul');
const listado1 = card2.appendChild(lista1);

crearNodo('li', 'white', 'margin', person.languages[0], listado1);
crearNodo('li', 'margin', 'white', person.languages[1], listado1);
crearNodo('li', 'white', 'margin', person.languages[2], listado1);
crearNodo('li', 'white', 'margin', person.motivation, listado1);
crearNodo('li', 'margin', 'white', person.personality, listado1);
crearNodo('li', 'white', 'margin', person.sociability, listado1);

const card3 = document.querySelector('#card3');
crearNodo('p', 'margin', 'white', 'This Currículum was made by Michelle Rodríguez, with HTML, CSS, and lots of Javascript', card3);


//main

const seccion1 = document.querySelector('#seccion1');
crearNodo('h3', 'margin', 'centrar-texto', 'Studies', seccion1);
crearNodo('h5', 'margin-esp', 'centrar-texto', 'Udemy: Web Development and Javascript', seccion1);
// crearNodo('p', 'margin-esp', 'centrar-texto', person.education[1].course, seccion1);



const separador1 = document.createElement('div');
separador1.classList.add('equilibrium');

const icon1 = document.createElement('i');
icon1.classList.add('fa-html5', 'fa-2x', 'fa-brands');
separador1.appendChild(icon1);

const separador2 = document.createElement('div');
separador2.classList.add('equilibrium');

const icon2 = document.createElement('i');
icon2.classList.add('fa-css3-alt', 'fa-2x', 'fa-brands');
separador2.appendChild(icon2);

const separador3 = document.createElement('div');
separador3.classList.add('equilibrium');

const icon3 = document.createElement('i');
icon3.classList.add('fa-js', 'fa-2x', 'fa-brands');
separador3.appendChild(icon3);

const separador4 = document.createElement('div');
separador4.classList.add('equilibrium');

const icon4 = document.createElement('i');
icon4.classList.add('fa-php', 'fa-2x', 'fa-brands');
separador4.appendChild(icon4);

const separador5 = document.createElement('div');
separador5.classList.add('equilibrium');

const icon5 = document.createElement('i');
icon5.classList.add('fa-database', 'fa-2x', 'fa-solid');
separador5.appendChild(icon5);

const separador6 = document.createElement('div');
separador6.classList.add('equilibrium');

const icon6 = document.createElement('i');
icon6.classList.add('fa-github', 'fa-2x', 'fa-brands');
separador6.appendChild(icon6);


const seccion2 = document.querySelector('#seccion2');
const cardCont = document.createElement('div');
cardCont.classList.add('seccion-iconos');

const cardCont1 = document.createElement('div');
const cardCont2 = document.createElement('div');
const cardCont3 = document.createElement('div');
const cardCont4 = document.createElement('div');
const cardCont5 = document.createElement('div');
const cardCont6 = document.createElement('div');

crearNodo('h3', 'no-margin', 'centrar-texto', 'Skills' , seccion2);

seccion2.appendChild(cardCont);

cardCont.appendChild(cardCont1);
cardCont.appendChild(cardCont2);
cardCont.appendChild(cardCont3);
cardCont.appendChild(cardCont4);
cardCont.appendChild(cardCont5);
cardCont.appendChild(cardCont6);

crearNodo('p', 'margin', 'centrar-texto', 'HTML', cardCont1);
crearIconos(cardCont1, separador1);
crearNodo('p', 'margin', 'centrar-texto', 'CSS and Sass', cardCont2);
crearIconos(cardCont2, separador2);
crearNodo('p', 'margin', 'centrar-texto', 'Javascript', cardCont3);
crearIconos(cardCont3, separador3);

crearNodo('p', 'margin', 'centrar-texto', 'PHP', cardCont4);
crearIconos(cardCont4, separador4);
crearNodo('p', 'margin', 'centrar-texto', 'MySQL', cardCont5);
crearIconos(cardCont5, separador5);
crearNodo('p', 'margin', 'centrar-texto', 'GitHub', cardCont6);
crearIconos(cardCont6, separador6);





const seccion3 = document.querySelector('#seccion3');
const proyectos = document.createElement('div');
crearNodo('h3', 'margin-esp', 'centrar-texto', 'Jobs & Projects', seccion3);
crearNodo('p', null, 'contenedor', 'Builiding web pages, based on Clients necessities, creating a nice interaction for user, and builiding a strong and safe acces to DataBase.', proyectos);
crearNodo('p', null, 'contenedor', 'Layout Development and Programming, with Responsive Design.', proyectos);
crearNodo('p', null, 'contenedor', 'Knowledge of AJAX  and VUE.', proyectos);

crearNodo('p', null, 'contenedor', 'Check my Projects here : https://github.com/Michellefsd.', proyectos);
seccion3.appendChild(proyectos);
