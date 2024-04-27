import { Comic } from '../domain/comic.domain';
import { ComicReq } from '../dto/comic-req.dto';
import { ComicRes } from '../dto/comic-res.dto';

class ComicConverter{
    public comicToResponse(entity: Comic): ComicRes{
        if(!entity){
            return null;
        }
        let res: ComicRes = new ComicRes;
        res.id = entity.id;
        res.digitalId = entity.digitalId;
        res.title = entity.title;
        res.issueNumber = entity.issueNumber;
        res.variantDescription = entity.variantDescription;
        res.description = entity.description;
        res.modified = entity.modified;
        res.isbn = entity.isbn;
        res.upc = entity.upc;
        res.diamondCode = entity.diamondCode;
        res.ean = entity.ean;
        res.issn = entity.issn;
        res.format = entity.format;
        res.textObjects = entity.textObjects;
        res.resourceURI = entity.resourceURI;
        res.urls = entity.urls;
        res.dates = entity.dates;
        res.prices = entity.prices;
        res.thumbnail = entity.thumbnail;
        res.images = entity.images;
        res.editable = entity.editable;
        return res; 
    }

    public requestToComic(req: ComicReq): Comic{
        if(!req){
            return null;
        }
        console.log(req);
        let comic: Comic = new Comic;
        comic.digitalId = req.digitalId;
        comic.title = req.title;
        comic.issueNumber = req.issueNumber;
        comic.variantDescription = req.variantDescription;
        comic.description = req.description;
        comic.modified = req.modified;
        comic.isbn = req.isbn;
        comic.upc = req.upc;
        comic.diamondCode = req.diamondCode;
        comic.ean = req.ean;
        comic.issn = req.issn;
        comic.format = req.format;
        comic.textObjects = req.textObjects;
        comic.resourceURI = req.resourceURI;
        comic.urls = req.urls;
        comic.dates = req.dates;
        comic.prices = req.prices;
        comic.thumbnail = `${req.thumbnail?.path}.${req.thumbnail?.extension}`;
        comic.images = req.images?.map(i => `${i.path}.${i.extension}`);
        comic.editable = req.editable;
        return comic;
    }
}

export default new ComicConverter();