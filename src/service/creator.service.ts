import creatorSchema from '../schema/creator.schema'
import {validarId} from './validators/type-id.validator';

export class CreatorService {
    public async create(creator: any) {
        return await creatorSchema.create(creator);
    }

    public async findById(id: number) {
        validarId(id);
        return creatorSchema.findOne({id: id});
    }

    public async findAll() {
        return creatorSchema.find();
    }

    public async update(id: number, creator: any) {
        validarId(id);
        return creatorSchema.findOneAndUpdate({id: id}, {
            id: id,
            name: creator.name,
            description: creator.description,
            modified: new Date(),
            resourceURI: creator.resourceURI,
            urls: creator.urls,
            thumbnail: creator.thumbnail
        }, {new: true});
    }

    public async delete(id: number): Promise<any> {
        validarId(id);
        const creator = await creatorSchema.findById(id);
        await creatorSchema.findOneAndDelete({ id: id });
        return creator;
    }
}

export default new CreatorService();