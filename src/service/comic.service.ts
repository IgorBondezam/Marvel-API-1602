import {Comic} from '../domain/comic.domain';
import comicSchema from '../schema/comic.schema';
import {validarId} from './validators/type-id.validator';
import comicRepository from "../repository/comic.repository";

class ComicService{

    public async create(comic: Comic): Promise<Comic> {
        return await comicSchema.create(comic);
    }

    public async findById(id: number): Promise<Comic> {
        validarId(id);
        return comicRepository.findById(id);
    }

    public async findAll(): Promise<Comic[]> {
        return comicSchema.find();
    }

    public async update(id: number, comic: Comic): Promise<Comic> {
        validarId(id);
        comic.editable = true;
        return comicRepository.updateComicById(id, comic);
    }

    public async delete(id: number): Promise<String> {
        validarId(id);
        await comicRepository.deleteById(id);
        return 'Comic Removido com Sucesso';
    }
}

export default new ComicService();