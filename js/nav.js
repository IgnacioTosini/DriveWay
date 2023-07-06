window.onload = function () {
    // Obtener elementos del DOM
    const menuContainer = document.getElementById('menu-container');
    const button = document.querySelector('.Cabecera-button');
    const nav = document.querySelector('.Cabecera-nav');
    const links = document.querySelectorAll('.Cabecera-li');

    // Establecer estado inicial de menú y botón
    let menuOpen = false;
    let buttonOpen = false;

    // Función para alternar menú y botón
    function toggleMenu() {
        // Cambiar estado de menú y botón
        menuOpen = !menuOpen;
        buttonOpen = !buttonOpen;

        // Agregar o quitar clases según si el menú está abierto o cerrado
        menuContainer.classList.toggle('Active', menuOpen);
        button.classList.toggle('menuAbierto', buttonOpen);
        nav.classList.toggle('isActive', menuOpen);
    }

    // Agregar event listener al botón
    button.addEventListener('click', toggleMenu);
};

function enviarCorreo() {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let consulta = document.getElementById('consulta').value;

    let subject = 'Nuevo mensaje de contacto';
    let body = "Nombre: " + nombre + "\nEmail: " + email + "\nConsulta: " + consulta;

    let mailtoLink = "mailto:ignaciotosini2002@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
}

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 3000);

window.addEventListener('scroll', function() {
    var menuContainer = document.getElementById('menu-container');
    var menuHeight = menuContainer.offsetHeight;
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
  
    if (scrollTop > menuHeight) {
      menuContainer.classList.add('fixed-nav');
    } else {
      menuContainer.classList.remove('fixed-nav');
    }
  });
  