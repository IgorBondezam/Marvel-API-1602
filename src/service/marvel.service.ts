import { Character } from "../domain/character.domain";
import { Comic } from "../domain/comic.domain";
import { Creator } from "../domain/creator.domain";
import marvelRepository, { MarvelRepository } from "../repository/marvel.repository";
import { validarId } from "./validators/type-id.validator";

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
        validarId(id);
        return await this.marvelRepository.getCharactersById(id);
    }

    public async getComicsById(id: number): Promise<Comic>{
        validarId(id);
        return await this.marvelRepository.getComicsById(id);
    }

    public async getCreatorsById(id: number): Promise<Creator>{
        validarId(id);
        return await this.marvelRepository.getCreatorsById(id);
    }

    public async getDigitalComics(): Promise<Comic[]>{
        return await this.marvelRepository.getGetDigitalComic();
    }

    public async getCharactersByComic(id: number): Promise<Comic[]>{
        return await this.marvelRepository.getCharactersByComic(id);
    }

    public async getComicsByCreator(id: number): Promise<Comic[]>{
        return await this.marvelRepository.getComicsByCreator(id);
    }

    public async getComicsCheapThan3HalfDollars(): Promise<Comic[]>{
        const comics = await this.marvelRepository.getComics();
        return comics.filter(c => c.prices.find(p => p.type === "printPrice").price <= 3.5);
    }
}

export default new MarvelService();