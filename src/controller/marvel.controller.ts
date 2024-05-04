import { Request, Response } from "express";
import marvelService from "../service/marvel.service";
import characterConverter from "../converter/character.converter";
import comicConverter from "../converter/comic.converter";

class MarvelController{
    public async helloWorld(req: Request, res: Response){
        return res.json('hello World');
    }

    public async getCharacters(req: Request, res: Response): Promise<Response>{
        res.json((await marvelService.getCharacters()).map(c =>
             characterConverter.characterToResponse(c)));
        return res;
    }

    public async getComics(req: Request, res: Response): Promise<Response>{
        res.json((await marvelService.getComics()).map(c =>
            comicConverter.comicToResponse(c)));
        return res;
    }

    public async getCreators(req: Request, res: Response): Promise<Response>{
        res.json(await marvelService.getCreators());
        return res;
    }

    public async getCharactersById(req: Request, res: Response): Promise<Response>{
        res.json(characterConverter.characterToResponse(
            await marvelService.getCharactersById(Number.parseInt(req.params.id))));
        return res;
    }

    public async getComicsById(req: Request, res: Response): Promise<Response>{
        res.json(comicConverter.comicToResponse(
            await marvelService.getComicsById(Number.parseInt(req.params.id))));
        return res;
    }

    public async getDigitalComics(req: Request, res: Response): Promise<Response>{
        res.json(comicConverter.comicsToResponse(
            await marvelService.getDigitalComics()));
        return res;
    }

    public async getCharactersByComic(req: Request, res: Response): Promise<Response>{
        res.json(comicConverter.comicsToResponse(
            await marvelService.getCharactersByComic(Number.parseInt(req.params.id))));
        return res;
    }
    
    public async getComicsByCreator(req: Request, res: Response): Promise<Response>{
        res.json(comicConverter.comicsToResponse(
            await marvelService.getComicsByCreator(Number.parseInt(req.params.id))));
        return res;
    }

    public async getCreatorsById(req: Request, res: Response): Promise<Response>{
        res.json(await marvelService.getCreatorsById(Number.parseInt(req.params.id)));
        return res;
    }

    public async getCheapComics(req: Request, res: Response): Promise<Response>{
        res.json(await marvelService.getComicsCheapThan3HalfDollars());
        return res;
    }

    public async getCharactersModifiedAfter2010(req: Request, res: Response): Promise<Response>{
        res.json(await marvelService.getCharactersModifiedAfter2010());
        return res;
    }

    public async populate(req: Request, res: Response): Promise<Response>{
        await marvelService.populate();
        return res.json('Populate done');
    }
}

export default new MarvelController();