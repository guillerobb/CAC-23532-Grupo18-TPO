let header= `
<nav>
<a href="index.html"><img src="img/encabezado.jpg"></a>
<a href="index.html">Home</a>
<a href="mundiales.html">Mundiales</a>
<a href="jugadores.html">Jugadores</a>
<a href="partidos.html">Partidos</a>
<a href="about.html">Acerca de</a>
<a href="contact.html">Contacto</a>
<a href="gallery.html">Gallery</a>
</nav>
`

document.getElementById("header").innerHTML= header;

let tituloIndex = `
<!--<div class="contenedor-imgHeader">
    <img src="img/encabezado.jpg" class="imgEncabezadoIndex">
    <p>Argentina Mundial!</p>
</div> -->
<h6>Sitio no oficial sobre la Selección Argentina de Fútbol</h6>
`
document.getElementById("tituloIndex").innerHTML= tituloIndex;

let footer = `
<p>Derechos Reservados @Grupo 18 FullStack Python Comisión 23532 &#169;2023</p>
`
document.getElementById("footer").innerHTML= footer;

