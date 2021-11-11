const button = document.querySelector(".responsive-icon");

const menu = document.querySelector(".resposive-menu");

const logoResponsive = document.querySelector(".brand-responsive");

const logo = document.querySelector(".wrapper .brand");

function openMenu (){
    menu.classList.toggle("desplegado");
}

function removeMenu (){
    menu.classList.remove("desplegado");
}

function recargarPagina(){
    location.href = "index.html";
}

button.addEventListener('click', openMenu);

const opcion = document.querySelectorAll(".resposive-menu .menu-option");
opcion.forEach(key => key.addEventListener('click', removeMenu));

logoResponsive.addEventListener('click', recargarPagina);
logo.addEventListener('click', recargarPagina);