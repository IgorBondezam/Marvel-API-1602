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

    public async getCharactersById(id: number): Promise<Character>{
        return (await this.marvelRepository.getCharactersById(id))[0];
    }

    public async getComicsById(id: number): Promise<Comic>{
        return (await this.marvelRepository.getComicsById(id))[0];
    }

    public async getCreatorsById(id: number): Promise<Creator>{
        return (await this.marvelRepository.getCreatorsById(id))[0];
    }
}

export default new MarvelService();