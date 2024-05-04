import { Character } from "../domain/character.domain";
import { Comic } from "../domain/comic.domain";
import { Creator } from "../domain/creator.domain";
import marvelRepository, { MarvelRepository } from "../repository/marvel.repository";
import characterSchema from "../schema/character.schema";
import comicSchema from "../schema/comic.schema";
import creatorSchema from "../schema/creator.schema";

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

    public async getCharactersModifiedAfter2010(): Promise<Character[]> {
        return await this.marvelRepository.getCharactersModifiedAfter2010();
    }

    public async populate(): Promise<void>{
        const creators = await this.marvelRepository.getCreators();
        const characters = await this.marvelRepository.getCharacters();
        const comics = await this.marvelRepository.getComics();
        creators.forEach(async (c) => await creatorSchema.create(c));
        characters.forEach(async (c) => await characterSchema.create(c));
        comics.forEach(async (c) => await comicSchema.create(c));
    }
}

export default new MarvelService();