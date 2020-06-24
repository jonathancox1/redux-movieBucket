
function getData(searchTerms) {
    return fetch(`https://www.omdbapi.com/?apikey=b43843a0&s=${searchTerms}`)
        .then(res => res.json())
        .then(data => {
            let movies = data.Search
            return movies
        })
}

export default getData;