import characterModel from '../schema/character.schema'

class CharacterService{

    async create(character: any) {
        const createdCharacter = await characterModel.create(character);

        return createdCharacter;
    }

    async findById(id: string) {
        const findedCharacter = await characterModel.findById(id);
        return findedCharacter;
    }

    async findAll() {
        const findedCharacters = await characterModel.find();
        return findedCharacters;
    }

    async update(id: string, character: any) {
        const updatedCharacter = await characterModel.findByIdAndUpdate(id, {
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

    async delete(id: string) {
        await characterModel.findByIdAndDelete(id);
        return 'Livro Removido com Sucesso';
    }
}

export default new CharacterService();