import characterModel from '../schema/character.schema'

class CharacterService{

    async create(character: any) {
        const createdCharacter = await characterModel.create(character)

        return createdCharacter
    }

    async findById(id: string) {
        const findedCharacter = await characterModel.findById(id)
        return findedCharacter
    }

    async findAll() {
        const findedCharacters = await characterModel.find()
        return findedCharacters
    }

    async update(id: string, character: any) {
        const updatedCharacter = await characterModel.findByIdAndUpdate(id, {
            title: character.title,
            author: character.author,
            price: character.price
        }, { new: true })

        return updatedCharacter
    }

    async delete(id: string) {
        await characterModel.findByIdAndDelete(id)
        return 'Livro Removido com Sucesso'
    }
}

export default new CharacterService();