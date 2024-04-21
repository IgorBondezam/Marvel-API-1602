import { Request, Response } from "express";
import marvelService from "../service/marvel.service";

class CharacterController{

    helloWorld(req: Request, res: Response){
        return res.json('hello World');
    }

    public async getCharacters(req: Request, res: Response){
        return await marvelService.getCharacters();
    }
}

export default new CharacterController();