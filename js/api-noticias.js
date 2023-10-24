function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + 1;
}

/*
let newsByDefault =  fetch("https://newsapi.org/v2/everything?q=argentina futbol&language=es&apiKey=b4a8308d1ff64fef8932bb6cb65ed9e9&sortBy=popularity&pageSize=20")
.then(res => res.json())
.then(response => {
    console.log(response)
    return response
})
*/

let htmlNoticias = `<h3>Noticias</h3><br>`

fetch('https://newsapi.org/v2/everything?q=argentina futbol&language=es&apiKey=b4a8308d1ff64fef8932bb6cb65ed9e9&sortBy=popularity&pageSize=5')
    .then(res => {
        return res.json();
    })
    .then(data => {
        //console.log('data', data);
        htmlNoticias += `<div id="section-news" class="section-news">`
        data.articles.forEach(pieceOfNews => {
            //console.log(pieceOfNews);
            htmlNoticias += `<section class="section-aside">
                            <h5>${pieceOfNews.title}</h5>
                            <!-- <p>${pieceOfNews.content}</p> -->
                            <a href="${pieceOfNews.url}" target="_blank">Leer más...</a>
                            </section>`;
        })
        htmlNoticias += `</div>`
        document.getElementById("noticias").innerHTML = htmlNoticias
    })
    .catch(error => console.log(error));
    
