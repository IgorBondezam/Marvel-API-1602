import { Request, Response } from "express";
import marvelService from "../service/marvel.service";

class CharacterController{

    helloWorld(req: Request, res: Response){
        return res.json('hello World');
    }

    public async getCharacters(req: Request, res: Response): Promise<Response>{
        res.json(await marvelService.getCharacters())
        return res;
    }

    public async getComics(req: Request, res: Response): Promise<Response>{
        res.json(await marvelService.getComics())
        return res;
    }

    public async getCreators(req: Request, res: Response): Promise<Response>{
        res.json(await marvelService.getCreators())
        return res;
    }
}

export default new CharacterController();