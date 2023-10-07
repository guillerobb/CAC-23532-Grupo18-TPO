// Fuente de los datos: https://www.transfermarkt.es/argentina/rekordnationalspieler/verein/3437

let listaJugadores = [
{
    nombre:'Leo Messi',
    cantidadPartidos: 176,
    goles: 104,
    posicion: 'Extremo derecho',
    debut: '17/08/2005',
    foto: 'img/jugadores/Lionel-Messi-Argentina-2022-FIFA-World-Cup.jpg'
},
{
    nombre:'Javier Mascherano',
    cantidadPartidos: 147,
    goles: 3,
    posicion: 'Pivote',
    debut: '16/07/2003',
    foto: 'img/jugadores/javier-mascherano.jpg'
},
{
    nombre:'Javier Zanetti',
    cantidadPartidos: 143,
    goles: 5,
    posicion: 'Lateral derecho',
    debut: '16/11/1994',
    foto: 'img/jugadores/javier-zanetti.jpg'
},
{
    nombre:'Angel di María',
    cantidadPartidos: 134,
    goles: 29,
    posicion: 'Extremo derecho',
    debut: '06/09/2008',
    foto: 'img/jugadores/angel-di-maria.jpg'
},
{
    nombre:'Roberto Ayala',
    cantidadPartidos: 115,
    goles: 7,
    posicion: 'Defensa central',
    debut: '16/11/1994',
    foto: 'img/jugadores/roberto-ayala.jpg'
},
{
    nombre:'Diego Simeone',
    cantidadPartidos: 106,
    goles: 11,
    posicion: 'Mediocentro',
    debut: '14/07/1988',
    foto: 'img/jugadores/Diego_Simeone.jpg'
},{
    nombre:'Nicolás Otamendi',
    cantidadPartidos: 105,
    goles: 4,
    posicion: 'Defensa central',
    debut: '20/05/2009',
    foto: 'img/jugadores/nicolas-otamendi.jpg'
}
,{
    nombre:'Sergio Agüero',
    cantidadPartidos: 101,
    goles: 41,
    posicion: 'Delantero centro',
    debut: '02/09/2006',
    foto: 'img/jugadores/Sergio-Aguero.jpg'
},
{
    nombre:'Oscar Ruggeri',
    cantidadPartidos: 97,
    goles: 7,
    posicion: 'Defensa central',
    debut: '12/05/1983',
    foto: 'img/jugadores/oscar-ruggeri.jpeg'
},
{
    nombre:'Sergio Romero',
    cantidadPartidos: 96,
    goles: 0,
    posicion: 'Arquero',
    debut: '10/09/2009',
    foto: 'img/jugadores/sergio-romero.jpg'
}

]


console.log('Vamos a mostrar los jugadores')
if ( document.getElementById( "jugadores" )) {
    console.log('Se encontró Elemento Jugadores')
    // Vamos a mostrar los jugadores
    console.log(listaJugadores.length)
    let htmlJugadores = `<div class="perfilesequipo">`
    for(let i=0; i < listaJugadores.length; i++ ){
        console.log('i: ', i)
        htmlJugadores += `<article>`
            if (listaJugadores[i].foto == null) {
                htmlJugadores += `<img src="img/perfiles-equipo/imagen-perfil-2.jpg" alt="Jugador 1 del team desarrollo">`
            }else{
                
                htmlJugadores += `<img src="${listaJugadores[i].foto}">`
            }
            htmlJugadores += `<div class="card-text">
                    <h4>${listaJugadores[i].nombre}</h4>
                    <h5>${listaJugadores[i].posicion}</h5>
                    <br>
                    <p>Partidos: ${listaJugadores[i].cantidadPartidos}</p>
                    <p>Goles: ${listaJugadores[i].goles}</p>
                    <p>Debut: ${listaJugadores[i].debut}</p>
                    <!--<button class="card-btn">Ver perfil</button> -->
                </div>
            </article>
        `
    }
    htmlJugadores += `</div>`
    //console.log(htmlJugadores)
    document.getElementById("jugadores").innerHTML=htmlJugadores
}
