import { Character } from './../domain/character.domain';
import characterSchema from "../schema/character.schema";

class CharacterRepository{
    public async updateCharacterById(id: number, updateValue: Character): Promise<Character>{
        return <Character> await characterSchema.findOneAndUpdate({ id: id}, updateValue);
    }

    public async findById(id: number): Promise<Character>{
        return <Character> await characterSchema.findOne({id: id});
    }

    public async deleteById(id: number): Promise<void>{
        await characterSchema.findOneAndDelete({id: id});
    }
}

export default new CharacterRepository();