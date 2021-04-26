var apiKey = '180afe7f';

var json = [
  {
    id: '1',
    title: 'Inception',
    photo: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    url: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
  },
  {
    id: '2',
    title: 'The Matrix',
    photo: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg',
    url: 'https://www.youtube.com/watch?v=vKQi3bBA1y8',
  },
  {
    id: '3',
    title: 'Avatar',
    photo: 'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpgx',
    url: 'https://www.youtube.com/watch?v=6ziBFh3V1aM',
  },
  {
    id: '4',
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    photo:
      'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    url: 'https://www.youtube.com/watch?v=JNwNXF9Y6kY',
  },
  {
    id: '5',
    title: 'Interstellar',
    photo: 'https://i.pinimg.com/originals/11/1c/5c/111c5c9ad99661af2d80e38948cf29d8.jpg',
    url: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
  },
  {
    id: '6',
    title: 'The Prestige',
    photo: 'https://www.scope.dk/shared/1/666/touchstone-pictures-the-prestige_400x600c.jpg',
    url: 'https://www.youtube.com/watch?v=ObGVA1WOqyE',
  },
  {
    id: '7',
    title: 'Terminator 2: Judgment Day',
    photo:
      'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    url: 'https://www.youtube.com/watch?v=CRRlbK5w8AE',
  },
  {
    id: '8',
    title: 'Back to the Future',
    photo: 'https://static.posters.cz/image/1300/plakater/back-to-the-future-i2795.jpg',
    url: 'https://www.youtube.com/watch?v=qvsgGtivCgs',
  },
];

var json2 = [
  {
    poster: '',
    director: '',
    released: '',
    genre: '',
    actors: '',
  },
];

var list = document.getElementById('wrapper');

for (var i = 0; i < json.length; i++) {
  var outerDiv = document.createElement('div');
  outerDiv.className = 'column';
  var img = document.createElement('img');
  img.className = 'movie-photo';
  img.src = json[i].photo;
  img.alt = json[i].title;
  var innerDiv = document.createElement('div1');
  innerDiv.className = 'movie-title';
  innerDiv.innerHTML = json[i].title;
  outerDiv.appendChild(img);
  outerDiv.appendChild(innerDiv);
  list.appendChild(outerDiv);
}

document.onclick = function (e) {
  if (e.target.tagName == 'IMG') {
    getMovie(e.target.alt);
  } else if (e.target.tagName == 'DIV1') {
    getMovie(e.target.innerHTML);
  }
};

/*document.onclick = function(e){
    if(e.target.tagName == 'div'){
        console.log(e.target.innerHTML)
        getMovie(e.target.innerHTML)
    }
} */

async function getMovie(title) {
  var url = new URL('http://www.omdbapi.com/'),
    params = { t: title, apikey: apiKey };
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  sessionStorage.setItem('movie', JSON.stringify(data));
  console.log(sessionStorage.getItem('movie'));
  newPage();
}

function newPage() {
  window.location.href = 'movie.html';
}

/*function movieTemplate(movie) {
    return `

            <div class="column">
            <img class="movie-photo" src="${movie.photo}">
                <div class="movie-title">${movie.title}</div>
            </div>
  `;
}

list.innerHTML = `
${json.map(movieTemplate).join("")}
`;
*/
