import { Character } from '../domain/character.domain';
import characterSchema from '../schema/character.schema'

class CharacterService{

    async create(character: Character) {
        const createdCharacter = await characterSchema.create(character);
        return createdCharacter;
    }

    public async findById(id: string) {
        const findedCharacter = await characterSchema.findById(id);
        return findedCharacter;
    }

    public async findAll() {
        const findedCharacters = await characterSchema.find();
        return findedCharacters;
    }

    async update(id: string, character: Character) {
        character.editable = true;
        const updatedCharacter = await characterSchema.findByIdAndUpdate(id, {
            id: id,
            name: character.name,
            description: character.description,
            modified: new Date(),
            resourceURI: character.resourceURI,
            urls: character.urls,
            thumbnail: character.thumbnail
        }, { new: true });

        return updatedCharacter;
    }

    public async delete(id: string) {
        await characterSchema.findByIdAndDelete(id);
        return 'Livro Removido com Sucesso';
    }
}

export default new CharacterService();