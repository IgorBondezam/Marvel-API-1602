import identifiersSchema from "../schema/identifiers.schema";


class IdentifierRepository {
    public async create() {
        return await identifiersSchema.create(
            {
                creatorId: 0,
                comicId: 0,
                characterId: 0,
            });
    }

    public async getIdentifiers() {
        return identifiersSchema.findOne();
    }

    public async incrementCreatorId() {
        const identifier = await identifiersSchema.findOne();
        identifier.creatorId++;
        await identifier.save();
        return identifier;
    }

    public async incrementComicId() {
        const identifier = await identifiersSchema.findOne();
        identifier.comicId++;
        await identifier.save();
        return identifier;
    }

    public async incrementCharacterId() {
        const identifier = await identifiersSchema.findOne();
        identifier.characterId++;
        await identifier.save();
        return identifier;
    }
}

export default new IdentifierRepository();