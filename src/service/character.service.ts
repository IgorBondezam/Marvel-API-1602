import mongoose from 'mongoose';
import { Character } from '../domain/character.domain';
import characterSchema from '../schema/character.schema'
import { validarId } from './validators/type-id.validator';
import characterRepository from '../repository/character.repository';
import { CharacterRes } from '../dto/character-res.dto';
import characterConverter from '../converter/character.converter';

class CharacterService{

    public async create(character: Character): Promise<CharacterRes> {
        const createdCharacter: Character = await characterSchema.create(character);
        return characterConverter.characterToResponse(createdCharacter);
    }

    public async findById(id: number): Promise<CharacterRes>{
        validarId(id);
        const findedCharacter: Character = await characterRepository.findById(id);
        return characterConverter.characterToResponse(findedCharacter);
    }

    public async findAll(): Promise<CharacterRes[]> {
        const findedCharacters = await characterSchema.find();
        return findedCharacters.map(c => characterConverter.characterToResponse(c));
    }

    public async update(id: number, character: Character) : Promise<CharacterRes>{
        validarId(id);
        character.editable = true;
        const updatedCharacter = characterRepository.updateCharacterById(id, character);
        return characterConverter.characterToResponse(await updatedCharacter);
    }

    public async delete(id: number): Promise<string> {
        validarId(id);
        await characterRepository.deleteById(id);
        return 'Character Removido com Sucesso';
    }
}

export default new CharacterService();