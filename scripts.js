const baseURL = 'https://ghibliapi.herokuapp.com/films'

const searchForm = document.querySelector('form');
const filmNames = document.querySelector('ul');
console.log(searchForm, filmNames);

function fetchFilms() {
    event.preventDefault ();
    fetch(baseURL)
        .then(results => {
            console.log(results);
            return results.json();
        })
        .then(json => {
            console.log(json);
            displayOriginalTitle(json);
        })
        .catch(err => console.log(err))
}

function displayTitle(title){
    console.log("API Response: ", title);
    title.array.forEach(t => {
        console.log(t);
        let title = document.createElement('li');
        title.innerText = t.name;
        filmNames.appendChild(title);
    })
    let filmTitle = document.createElement('li');
    let originalTitle = document.createElement('li');
    let titleRomanised = document.createElement('li');
    
}