const button = document.querySelector(".responsive-icon");

const menu = document.querySelector(".resposive-menu");

const logoResponsive = document.querySelector(".brand-responsive");

const logo = document.querySelector(".wrapper .brand");

//const botonForm = document.querySelector(".contact-form .btn-submit");

/*var status = document.getElementById("status");

status.style= "padding:20px; background-color: #252525; animation: status 4s ease forwards;color: black; text-align: center; font-weight: bold; width: 100vw;";
status.innerHTML = "Tu mensaje se envió correctamente. ¡Gracias por contactarte!";
setTimeout(()=>{
    status.style.display = "none";
},2000);*/

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
//botonForm.addEventListener('click', mostrarMensaje);
