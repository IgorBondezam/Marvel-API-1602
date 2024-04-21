import { Character } from "../domain/character.domain";
import { Comic } from "../domain/comic.domain";
import { Creator } from "../domain/creator.domain";
import marvelRepository, { MarvelRepository } from "../repository/marvel.repository";

class MarvelService{
    private readonly marvelRepository: MarvelRepository;
    constructor(){
        this.marvelRepository = marvelRepository;
    }

    public async getCharacters(): Promise<Character[]>{
        return await this.marvelRepository.getCharacters();
    }

    public async getComics(): Promise<Comic[]>{
        return await this.marvelRepository.getComics();
    }

    public async getCreators(): Promise<Creator[]>{
        return await this.marvelRepository.getCreators();
    }
}

export default new MarvelService();