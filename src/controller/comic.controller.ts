import { Request, Response } from "express";
import comicService from "../service/comic.service";
import comicConverter from "../converter/comic.converter";
import { Comic } from "../domain/comic.domain";


class ComicController{

    public async findAllComics(req: Request, res: Response): Promise<void>{
        const findedComic: Comic[] = await comicService.findAll();
        res.json(findedComic.map(c => comicConverter.comicToResponse(c)));
        res.status(200).send();
    }

    public async findByIdComic(req: Request, res: Response): Promise<void>{
        const findedComic: Comic = await comicService.findById(req.params.id);
        res.json(comicConverter.comicToResponse(findedComic));
        res.status(200).send();
    }

    public async createComic(req: Request, res: Response): Promise<void>{
        const createdComic: Comic = await comicService.create(comicConverter.requestToComic(req.body));
        res.json(comicConverter.comicToResponse(createdComic));
        res.status(201).send();
    }

    public async updateComic(req: Request, res: Response): Promise<void>{
        const updatedComic: Comic = await comicService.update(req.params.id, 
            comicConverter.requestToComic(req.body))
        res.json(comicConverter.comicToResponse(updatedComic));
        res.status(200).send();
    }

    public async deleteComic(req: Request, res: Response): Promise<void>{
        res.json(await comicService.delete(req.params.id));
        res.status(204).send();
    }
}

export default new ComicController();