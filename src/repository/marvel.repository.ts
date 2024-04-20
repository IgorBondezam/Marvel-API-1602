class Marvel{
    

    getCharacters(){
        return fetch(`${process.env.API_MARVEL_DEFAULT}/characters?${process.env.API_MARVEL_KEY}`)
        .then(response => response.json())
        .then(data => data.data.results)
    }

}

export default new Marvel();