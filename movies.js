var movies = [
  {
    videoKey: 'Inception',
    embed: 'YoHD9XEInc0',
  },
  {
    videoKey: 'The Matrix',
    embed: 'vKQi3bBA1y8',
  },
  {
    videoKey: 'Avatar',
    embed: '5PSNL1qE6VY',
  },
  {
    videoKey: 'Star Wars: Episode V - The Empire Strikes Back',
    embed: 'JNwNXF9Y6kY',
  },
  {
    videoKey: 'Interstellar',
    embed: 'zSWdZVtXT7E',
  },
  {
    videoKey: 'The Prestige',
    embed: 'RLtaA9fFNXU',
  },
  {
    videoKey: 'Terminator 2: Judgment Day',
    embed: 'CRRlbK5w8AE',
  },
  {
    videoKey: 'Back to the Future',
    embed: 'qvsgGtivCgs',
  },
];

function get() {
  var first = sessionStorage.getItem('movie');
  first = JSON.parse(first);
  console.log(first.Actors);
}

var list = document.getElementById('wrapper');
var first = sessionStorage.getItem('movie');
first = JSON.parse(first);

var youtubeSrc = 'https://www.youtube.com/embed/';

var outerDiv = document.createElement('div');
outerDiv.className = 'column';

var img = document.createElement('img');
img.className = 'movie-photo';
img.src = first.Poster;
img.alt = first.title;

var innerDiv = document.createElement('h1');
innerDiv.className = 'movie-title';
innerDiv.innerHTML = first.Title;

var released = document.createElement('p');
released.innerHTML = 'Release: '  + first.Released;

var genre = document.createElement('p');
genre.innerHTML = 'Genre: ' + first.Genre;

var director = document.createElement('p');
director.innerHTML = 'Director: ' +  first.Director;

var actors = document.createElement('p');
actors.innerHTML = 'Actors: ' + first.Actors;

var youtube = document.createElement('iframe');
youtube.width = '560';
youtube.height = '315';

for (var i = 0; i < movies.length; i++) {
  if (movies[i].videoKey == first.Title) {
    youtube.src = youtubeSrc + movies[i].embed;
  }
}

outerDiv.appendChild(innerDiv);
outerDiv.appendChild(img);
outerDiv.appendChild(released);
outerDiv.appendChild(genre);
outerDiv.appendChild(director);
outerDiv.appendChild(actors);
outerDiv.appendChild(youtube);
list.appendChild(outerDiv);
