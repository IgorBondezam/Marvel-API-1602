import {Comic} from "../domain/comic.domain";
import comicSchema from "../schema/comic.schema";

class ComicRepository{
    public async updateComicById(id: number, updateValue: Comic): Promise<Comic>{
        return <Comic> await comicSchema.findOneAndUpdate({ id: id}, updateValue);
    }

    public async findById(id: number): Promise<Comic>{
        return <Comic> await comicSchema.findOne({id: id});
    }

    public async deleteById(id: number): Promise<void>{
        await comicSchema.deleteOne({id: id});
    }
}

export default new ComicRepository();