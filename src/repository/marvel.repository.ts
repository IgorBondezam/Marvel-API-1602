import { Character } from "../domain/character.domain";
import { Comic } from "../domain/comic.domain";
import { Creator } from "../domain/creator.domain";

export class MarvelRepository{
    

    public async getCharacters(): Promise<Character[]>{
        return fetch(`${process.env.API_MARVEL_DEFAULT}/characters?series=489&${process.env.API_MARVEL_KEY}`)
        .then(response => response.json())
        .then(json => json.data?.results?.map(p => new Character(p.id, p.name, p.description, p.modified, p.resourceURI, p.urls, p.thumbnail, false)) ?? []);
    }

    public async getComics(): Promise<Comic[]>{
        return fetch(`${process.env.API_MARVEL_DEFAULT}/comics?series=489&${process.env.API_MARVEL_KEY}`)
        .then(response => response.json())
        .then(json => json.data?.results?.map(p => new Comic(p.id, p.digitalId, p.title, p.issueNumber, p.variantDescription, p.description, p.modified, p.isbn, p.upc, p.diamondCode, p.ean, p.issn, p.format, p.textObjects, p.resourceURI, p.urls, p.dates, p.prices, p.thumbnail, p.images, false)) ?? []);
    }

    public async getCreators(): Promise<Creator[]>{
        return fetch(`${process.env.API_MARVEL_DEFAULT}/creators?series=489&${process.env.API_MARVEL_KEY}`)
        .then(response => response.json())
        .then(json => json.data?.results?.map(p => new Creator(p.id, p.firstName, p.middleName, p.lastName, p.suffix, p.fullName, p.modified, p.resourceURI, p.urls, p.thumbnail, false)) ?? []);
    }

    public async getCharactersById(id: number): Promise<Character>{
        return fetch(`${process.env.API_MARVEL_DEFAULT}/characters/${id}?series=489&${process.env.API_MARVEL_KEY}`)
        .then(response => response.json())
        .then(json => json.data?.results?.map(p => new Character(p.id, p.name, p.description, p.modified, p.resourceURI, p.urls, p.thumbnail, false)) ?? {});
    }

    public async getComicsById(id: number): Promise<Comic>{
        return fetch(`${process.env.API_MARVEL_DEFAULT}/comics/${id}?series=489&${process.env.API_MARVEL_KEY}`)
        .then(response => response.json())
        .then(json => json.data?.results?.map(p => new Comic(p.id, p.digitalId, p.title, p.issueNumber, p.variantDescription, p.description, p.modified, p.isbn, p.upc, p.diamondCode, p.ean, p.issn, p.format, p.textObjects, p.resourceURI, p.urls, p.dates, p.prices, p.thumbnail, p.images, false)) ?? {});
    }

    public async getCreatorsById(id: number): Promise<Creator>{
        return fetch(`${process.env.API_MARVEL_DEFAULT}/creators/${id}?series=489&${process.env.API_MARVEL_KEY}`)
        .then(response => response.json())
        .then(json => json.data?.results?.map(p => new Creator(p.id, p.firstName, p.middleName, p.lastName, p.suffix, p.fullName, p.modified, p.resourceURI, p.urls, p.thumbnail, false)) ?? {});
    }

    public async getGetDigitalComic(): Promise<Comic[]>{
        console.log(`${process.env.API_MARVEL_DEFAULT}/comics?hasDigitalIssue=true&series=489&${process.env.API_MARVEL_KEY}`)
        return fetch(`${process.env.API_MARVEL_DEFAULT}/comics?hasDigitalIssue=true&series=489&${process.env.API_MARVEL_KEY}`)
        .then(response => response.json())
        .then(json => json.data?.results?.map(p => new Comic(p.id, p.digitalId, p.title, p.issueNumber, p.variantDescription, p.description, p.modified, p.isbn, p.upc, p.diamondCode, p.ean, p.issn, p.format, p.textObjects, p.resourceURI, p.urls, p.dates, p.prices, p.thumbnail, p.images, false)) ?? []);
    }

    public async getCharactersByComic(id: number): Promise<Comic[]>{
        return fetch(`${process.env.API_MARVEL_DEFAULT}/comics?characters=${id}&series=489&${process.env.API_MARVEL_KEY}`)
        .then(response => response.json())
        .then(json => json.data?.results?.map(p => new Comic(p.id, p.digitalId, p.title, p.issueNumber, p.variantDescription, p.description, p.modified, p.isbn, p.upc, p.diamondCode, p.ean, p.issn, p.format, p.textObjects, p.resourceURI, p.urls, p.dates, p.prices, p.thumbnail, p.images, false)) ?? []);
    }

    public async getComicsByCreator(id: number): Promise<Comic[]>{
        return fetch(`${process.env.API_MARVEL_DEFAULT}/comics?creators=${id}&series=489&${process.env.API_MARVEL_KEY}`)
        .then( response => response.json())
        .then(json => json.data?.results?.map(p => new Comic(p.id, p.digitalId, p.title, p.issueNumber, p.variantDescription, p.description, p.modified, p.isbn, p.upc, p.diamondCode, p.ean, p.issn, p.format, p.textObjects, p.resourceURI, p.urls, p.dates, p.prices, p.thumbnail, p.images, false)) ?? []);
    }

    public async getCharactersModifiedAfter2010(): Promise<Comic[]>{
        return fetch(`${process.env.API_MARVEL_DEFAULT}/characters?modifiedSince=2010-01-01&series=489&${process.env.API_MARVEL_KEY}`)
        .then( response => response.json())
        .then(json => json.data?.results?.map(p => new Character(p.id, p.name, p.description, p.modified, p.resourceURI, p.urls, p.thumbnail, false)) ?? {});
    }

}

export default new MarvelRepository();