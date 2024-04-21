import { Creator } from '../domain/creator.domain';
import creatorSchema from '../schema/creator.schema'

export class CreatorService {
    public async create(creator: any) {
        const createdCreator = await creatorSchema.create(creator);

        return createdCreator;
    }

    public async findById(id: string) {
        const findedCreator = await creatorSchema.findById(id);
        return findedCreator;
    }

    public async findAll() {
        const findedCreators = await creatorSchema.find();
        return findedCreators;
    }

    public async update(id: string, creator: any) {
        const updatedCreator = await creatorSchema.findByIdAndUpdate(id, {
            id: id,
            name: creator.name,
            description: creator.description,
            modified: new Date(),
            resourceURI: creator.resourceURI,
            urls: creator.urls,
            thumbnail: creator.thumbnail
        }, { new: true });

        return updatedCreator;
    }

    public async delete(id: string): Promise<any> {
        const creator = await creatorSchema.findById(id);
        await creatorSchema.findByIdAndDelete(id);
        return creator;
    }
}

export default new CreatorService();