
function getDetails(id) {
    return fetch(`https://www.omdbapi.com/?apikey=b43843a0&i=${id}`)
        .then(res => res.json())
        .then(data => {
            let details = data
            return details
        })
}

export default getDetails;