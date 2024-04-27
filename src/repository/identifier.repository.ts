import identifiersSchema from "../schema/identifiers.schema";


class IdentifierRepository {
    public async create() {
        const identifier = await identifiersSchema.create(
            {
                creatorId: 0,
                comicId: 0,
                characterId: 0,
            });
        return identifier;
    }

    public async getIdentifiers() {
        const identifier = await identifiersSchema.findOne();
        return identifier;
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