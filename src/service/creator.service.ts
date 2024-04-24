import { Creator } from '../domain/creator.domain';
import creatorSchema from '../schema/creator.schema'
import { validarId } from './validators/type-id.validator';

export class CreatorService {
    public async create(creator: any) {
        const createdCreator = await creatorSchema.create(creator);

        return createdCreator;
    }

    public async findById(id: string) {
        validarId(id);
        const findedCreator = await creatorSchema.findById(id);
        return findedCreator;
    }

    public async findAll() {
        const findedCreators = await creatorSchema.find();
        return findedCreators;
    }

    public async update(id: string, creator: any) {
        validarId(id);
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

    public async delete(id: string): Promise<string> {
        validarId(id);
        await creatorSchema.findByIdAndDelete(id);
        return 'Creator Removido com Sucesso';
    }
}

export default new CreatorService();