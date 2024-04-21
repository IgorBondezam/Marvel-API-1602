import { Character } from "../domain/character.domain";

export class MarvelRepository{
    

    public async getCharacters(): Promise<Character[]>{
        return fetch(`${process.env.API_MARVEL_DEFAULT}/characters?${process.env.API_MARVEL_KEY}`)
        .then(response => response.json())
        .then(data => data.data.results.map(p => new Character(p.id, p.name, p.description, p.modified, p.resourceURI, p.urls, p.thumbnail)))
    }

}

export default new MarvelRepository();