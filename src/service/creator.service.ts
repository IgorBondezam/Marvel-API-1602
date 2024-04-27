import { Creator } from '../domain/creator.domain';
import creatorSchema from '../schema/creator.schema'
import { validarId } from './validators/type-id.validator';

export class CreatorService {
    public async create(creator: any) {
        const createdCreator = await creatorSchema.create(creator);
        
        return createdCreator;
    }

    public async findById(id: string) {
        const findedCreator = await creatorSchema.findOne({ id: id });
        validarId(id);
        return findedCreator;
    }

    public async findAll() {
        const findedCreators = await creatorSchema.find();
        return findedCreators;
    }

    public async update(id: string, creator: any) {
        const updatedCreator = await creatorSchema.findOneAndUpdate({ id: id }, {
            firstName: creator.firstName,
            middleName: creator.middleName,
            lastName: creator.lastName,
            suffix: creator.suffix,
            fullName: creator.fullName,
            resourceURI: creator.resourceURI,
            urls: creator.urls,
            thumbnail: creator.thumbnail,
            editable: true
          }, { new: true });

        return updatedCreator;
    }

    public async delete(id: string): Promise<any> {
        const creatorDeleted = await creatorSchema.findOneAndDelete({ id: id });
        return creatorDeleted;
    }
}

export default new CreatorService();