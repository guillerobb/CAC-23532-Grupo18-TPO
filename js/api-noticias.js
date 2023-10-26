let htmlNoticias = `<h3>Noticias</h3><br>`

// fetch('https://newsapi.org/v2/everything?q=argentina futbol&language=es&apiKey=b4a8308d1ff64fef8932bb6cb65ed9e9&sortBy=popularity&pageSize=5')
//     .then(res => {
//         console.log('Status', res.status)
//         console.log('statusText', res.statusText)
//         if (res.ok) {
//             console.log('Success Fetch API for retrieve news')
//             return res.json();
//         } else {
//             console.log('Error Trying to retrieve news')
//         }
//     })
//     .then(data => {
//         console.log('data', data);
//         htmlNoticias += `<div id="section-news" class="section-news">`
//         data.articles.forEach(pieceOfNews => {
//             //console.log(pieceOfNews);
//             htmlNoticias += `<section class="section-aside">
//                             <h5>${pieceOfNews.title}</h5>
//                             <!-- <p>${pieceOfNews.content}</p> -->
//                             <a href="${pieceOfNews.url}" target="_blank">Leer más...</a>
//                             </section>`;
//         })
//         htmlNoticias += `</div>`
//         document.getElementById("noticias").innerHTML = htmlNoticias
//     })
//     .catch(error => console.log(error));
   

 fetch('https://dummyjson.com/posts?limit=7&select=title,body')
     .then(res => {
         console.log('Status', res.status)
         console.log('statusText', res.statusText)
         if (res.ok) {
            console.log('Success Fetch API for retrieve news')
             return res.json();
         } else {
             console.log('Error Trying to retrieve news')
         }
     })
     .then(data => {
         console.log('data', data);
         htmlNoticias += `<div id="section-news" class="section-news">`
         data.posts.forEach(pieceOfNews => {
             //console.log(pieceOfNews);
             htmlNoticias += `<section class="section-aside">
                             <h4>${pieceOfNews.title}</h4>
                             <p>${pieceOfNews.body}</p>
                             <!-- <a href="${pieceOfNews.url}" target="_blank">Leer más...</a> -->
                             <a href="#" target="_blank">Leer más...</a>
                             </section>`;
         })
         htmlNoticias += `</div>`
         document.getElementById("noticias").innerHTML = htmlNoticias
     })
     .catch(error => console.log(error));