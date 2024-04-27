import {Comic} from '../domain/comic.domain';
import comicSchema from '../schema/comic.schema';
import {validarId} from './validators/type-id.validator';
import comicRepository from "../repository/comic.repository";
import comicConverter from "../converter/comic.converter";
import {ComicRes} from "../dto/comic-res.dto";

class ComicService{

    public async create(comic: Comic): Promise<ComicRes> {
        return comicConverter.comicToResponse(await comicSchema.create(comic));
    }

    public async findById(id: number): Promise<ComicRes> {
        validarId(id);
        return comicConverter.comicToResponse(await comicRepository.findById(id));
    }

    public async findAll(): Promise<ComicRes[]> {
        return (await comicSchema.find()).map(c => comicConverter.comicToResponse(c));
    }

    public async update(id: number, comic: Comic): Promise<ComicRes> {
        validarId(id);
        comic.editable = true;
        return comicConverter.comicToResponse(await comicRepository.updateComicById(id, comic));
    }

    public async delete(id: number): Promise<String> {
        validarId(id);
        await comicRepository.deleteById(id);
        return 'Comic Removido com Sucesso';
    }
}

export default new ComicService();