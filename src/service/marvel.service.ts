import { Character } from "../domain/character.domain";
import marvelRepository, { MarvelRepository } from "../repository/marvel.repository";

class MarvelService{
    private readonly marvelRepository: MarvelRepository;
    constructor(){
        this.marvelRepository = marvelRepository;
    }

    public async getCharacters(): Promise<Character[]>{
        return await this.marvelRepository.getCharacters();
    }
}

export default new MarvelService();