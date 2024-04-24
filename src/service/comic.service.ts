import { Comic } from '../domain/comic.domain';
import  comicSchema from '../schema/comic.schema';
import { validarId } from './validators/type-id.validator';

class ComicService{

    public async create(comic: Comic) {
        const createdComic = await comicSchema.create(comic);
        return createdComic;
    }

    public async findById(id: string) {
        validarId(id);
        const findedComic = await comicSchema.findById(id);
        return findedComic;
    }

    public async findAll(): Promise<Comic[]> {
        const findedComics = await comicSchema.find();
        return findedComics;
    }

    public async update(id: string, comic: Comic) {
        validarId(id);
        comic.editable = true;
        const updatedComic = await comicSchema.findByIdAndUpdate(id, {
            id: id,
            digitalId: comic.digitalId,
            title: comic.title,
            issueNumber: comic.issueNumber,
            variantDescription: comic.variantDescription,
            description: comic.description,
            modified: new Date(),
            isbn: comic.isbn,
            upc: comic.upc,
            diamondCode: comic.diamondCode,
            ean: comic.ean,
            issn: comic.issn,
            format: comic.format,
            textObjects: comic.textObjects,
            resourceURI: comic.resourceURI,
            urls: comic.urls,
            dates: comic.dates,
            prices: comic.prices,
            thumbnail: comic.thumbnail,
            images: comic.images,
            editable: comic.editable
        }, { new: true });

        return updatedComic;
    }

    public async delete(id: string) {
        validarId(id);
        await comicSchema.findByIdAndDelete(id);
        return 'Comic Removido com Sucesso';
    }
}

export default new ComicService();