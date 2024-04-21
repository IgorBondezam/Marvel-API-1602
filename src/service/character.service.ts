import characterSchema from '../schema/character.schema'

class CharacterService{

    public async create(character: any) {
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

    public async update(id: string, character: any) {
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