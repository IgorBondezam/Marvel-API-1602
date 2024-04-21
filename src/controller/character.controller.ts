import { Request, Response } from "express";
import characterService from "../service/character.service";

class CharacterController{

    public async findAllCharacters(req: Request, res: Response): Promise<void>{
        res.json(await characterService.findAll());
        res.status(200).send();
    }

}

export default new CharacterController();