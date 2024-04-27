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