const url = new URL(location.href)
const movieId = url.searchParams.get("id")
const movieTitle = url.searchParams.get("title")
const APILINK = 'http://localhost:8000/api/v1/reviews/';

//variables from html
const cardBlock = document.getElementById('section-block')
const title = document.getElementById('title')


returnMovies(APILINK)
// console.log(returnVideo(APILINK))



function returnMovies(url){
    fetch(url).then(res=>res.json())
    .then(function(data){
        // console.log(data.results)
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            div_card.setAttribute('class','card');
            const div_row = document.createElement('div');
            div_row.setAttribute('class','row');
            const div_columns = document.createElement('div');
            div_columns.setAttribute('class','columns');
            const image = document.createElement('img');
            image.setAttribute('class','movie-img');
            const title = document.createElement('h3');
            title.setAttribute('class','movie-title');
            const center = document.createElement('center');
            center.setAttribute('class','center')

            title.innerHTML = `${element.title}<br><a href="movie.html?id=${element.id}&title=${element.title}">reviews</a>`;
            image.src = IMG_PATH + element.poster_path;

            center.appendChild(image);
            div_card.appendChild(center)
            div_card.appendChild(title)
            div_columns.appendChild(div_card)
            div_row.appendChild(div_columns);
            cardBlock.appendChild(div_row);
        });
    })
}



// console.log(returnMovies())