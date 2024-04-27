import {Request, Response} from "express";
import comicService from "../service/comic.service";
import comicConverter from "../converter/comic.converter";
import {Comic} from "../domain/comic.domain";


class ComicController{

    public async findAllComics(req: Request, res: Response): Promise<void>{
        try{
            res.json(await comicService.findAll());
            res.status(200).send();
        } catch(err){
            res.status(400).json({'error': err.toString()}).send();
        }
    }

    public async findByIdComic(req: Request, res: Response): Promise<void>{
        try{
            const findedComic: Comic = await comicService.findById(Number(req.params.id));
            res.json(comicConverter.comicToResponse(findedComic));
            res.status(200).send();
        } catch(err){
            res.status(400).json({'error': err.toString()}).send();
        }
    }

    public async createComic(req: Request, res: Response): Promise<void>{
        try{
            const createdComic: Comic = await comicService.create(comicConverter.requestToComic(req.body));
            res.json(comicConverter.comicToResponse(createdComic));
            res.status(201).send();
        } catch(err){
            res.status(400).json({'error': err.toString()}).send();
        }
    }

    public async updateComic(req: Request, res: Response): Promise<void>{
        try{
            const updatedComic: Comic = await comicService.update(Number(req.params.id),
                comicConverter.requestToComic(req.body))
            res.json(comicConverter.comicToResponse(updatedComic));
            res.status(200).send();
        } catch(err){
            res.status(400).json({'error': err.toString()}).send();
        }
    }

    public async deleteComic(req: Request, res: Response): Promise<void>{
        try{
            res.json(await comicService.delete(Number(req.params.id)));
            res.status(204);
        } catch(err){
            res.status(400).json({'error': err.toString()}).send();
        }
    }
}

export default new ComicController();