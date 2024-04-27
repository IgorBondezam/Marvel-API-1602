import { Creator } from "../domain/creator.domain";
import creatorSchema from "../schema/creator.schema";

export class CreatorRepository{

    public async updateById(id: number, updateValue: Creator): Promise<Creator>{
        await creatorSchema.updateOne({ id: id }, updateValue);
        return this.findById(id);
    }

    public async findById(id: number): Promise<Creator>{
        return <Creator> await creatorSchema.findOne({id: id});
    }

    public async deleteById(id: number): Promise<void>{
        creatorSchema.deleteOne({id: id});
    }
}

export default new CreatorRepository();