import { Character } from './../domain/character.domain';
import characterSchema from "../schema/character.schema";

export class CharacterRepository{
    public async updateCharacterById(id: number, updateValue: Character): Promise<Character>{
        await characterSchema.updateOne({ id: id}, updateValue);
        return await this.findById(id);
    }

    public async findById(id: number): Promise<Character>{
        return <Character> await characterSchema.findOne({id: id});
    }

    public async deleteById(id: number): Promise<void>{
        await characterSchema.findOneAndDelete({id: id});
    }
}

export default new CharacterRepository();