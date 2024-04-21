import { Request, Response } from "express";
import marvelService from "../service/marvel.service";

class CharacterController{

    helloWorld(req: Request, res: Response){
        return res.json('hello World');
    }

}

export default new CharacterController();