const baseURL = 'https://ghibliapi.herokuapp.com/films';

function fetchData() {
    //console.log("START FETCH");
    fetch(baseURL)
        .then(response => {
            console.log(response);
            return response.json();  
    })
        .then(data => {
        console.log(data);
        const html = data.map(films => {
            return `
            <div class="container">
            <div class="filmTitles">
                <p>${films.original_title}
                <br> ${films.title}
                <br> Run Time: ${films.running_time}
                <br> Director: ${films.director}</p> 
            </div>
            <div class="about">
            <p>${films.description}</p>
            </div>
            </div>`
        }).join('');
        console.log(html);
        document.querySelector('#title').insertAdjacentHTML('afterbegin', html);
    }).catch(error => {
        console.log(error);
    })

}


fetchData();