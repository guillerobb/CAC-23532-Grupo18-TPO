let header= `
<button id="abrir-menu" class="abrir-menu"><i class="bi bi-list"></i></button>
<nav id="nav">
<button id="cerrar-menu" class="cerrar-menu"><i class="bi bi-x-circle"></i></button>
<a href="index.html">Home</a>
<a href="mundiales.html">Mundiales</a>
<a href="jugadores.html">Jugadores</a>
<a href="partidos.html">Partidos</a>
<a href="gallery.html">Galeria</a>
<a href="contact.html">Contacto</a>
<a href="about.html">Acerca de</a>
</nav>
`
//<a href="index.html"><img src="img/encabezado.jpg"></a>
//<p>Argentina Mundial!</p>
document.getElementById("header").innerHTML= header;

let tituloIndex = `
<h4>Sitio no oficial sobre la Selección Argentina de Fútbol</h4>
`
document.getElementById("tituloIndex").innerHTML= tituloIndex;

let footer = `
<p>Derechos Reservados @Grupo 18 FullStack Python Comisión 23532 &#169;2023</p>
`
document.getElementById("footer").innerHTML= footer;

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir-menu")
const cerrar = document.querySelector("#cerrar-menu")

abrir.addEventListener("click", () => {
    nav.classList.add("nav-visible")
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("nav-visible")
})



