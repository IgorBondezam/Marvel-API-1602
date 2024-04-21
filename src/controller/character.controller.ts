import { Request, Response } from "express";
import characterService from "../service/character.service";

class CharacterController{

    public async findAllCharacters(req: Request, res: Response): Promise<void>{
        res.json(await characterService.findAll());
        res.status(200).send();
    }

    public async findByIdCharacter(req: Request, res: Response): Promise<void>{
        res.json(await characterService.findById(req.params.id));
        res.status(200).send();
    }

    public async createCharacter(req: Request, res: Response): Promise<void>{
        res.json(await characterService.create(req.body))
        res.status(201).send();
    }

    public async updateCharacter(req: Request, res: Response): Promise<void>{
        res.json(await characterService.update(req.params.id, req.body));
        res.status(200).send();
    }

    public async deleteCharacter(req: Request, res: Response): Promise<void>{
        res.json(await characterService.delete(req.params.id));
        res.status(204).send();
    }

}

export default new CharacterController();