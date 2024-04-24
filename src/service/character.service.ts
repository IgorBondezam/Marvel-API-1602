import mongoose from 'mongoose';
import { Character } from '../domain/character.domain';
import characterSchema from '../schema/character.schema'
import { validarId } from './validators/type-id.validator';

class CharacterService{

    public async create(character: Character): Promise<Character> {
        const createdCharacter: Character = await characterSchema.create(character);
        return createdCharacter;
    }

    public async findById(id: string): Promise<Character>{
        validarId(id);
        const findedCharacter: Character = await characterSchema.findById(id);
        return findedCharacter;
    }

    public async findAll(): Promise<Character[]> {
        const findedCharacters = await characterSchema.find();
        return findedCharacters;
    }

    public async update(id: string, character: Character) {
        validarId(id);
        character.editable = true;
        const updatedCharacter = await characterSchema.findByIdAndUpdate(id, {
            id: id,
            name: character.name,
            description: character.description,
            modified: new Date(),
            resourceURI: character.resourceURI,
            urls: character.urls,
            thumbnail: character.thumbnail,
            editable: character.editable
        }, { new: true });

        return updatedCharacter;
    }

    public async delete(id: string) {
        validarId(id);
        await characterSchema.findByIdAndDelete(id);
        return 'Character Removido com Sucesso';
    }
}

export default new CharacterService();