import { Request, Response } from "express";
import creatorService from "../service/creator.service";

class CharacterController{

    helloWorld(req: Request, res: Response){
        return res.json('hello World');
    }

    public async findAllCreators(req: Request, res: Response): Promise<void>{
        res.json(await creatorService.findAll());
        res.status(200).send();
    }

    public async findByIdCreator(req: Request, res: Response): Promise<void>{
        res.json(await creatorService.findById(Number(req.params.id)));
        res.status(200).send();
    }

    public async createCreator(req: Request, res: Response): Promise<void>{
        res.json(await creatorService.create(req.body))
        res.status(201).send();
    }

    public async updateCreator(req: Request, res: Response): Promise<void>{
        res.json(await creatorService.update(Number(req.params.id), req.body));
        res.status(200).send();
    }

    public async deleteCreator(req: Request, res: Response): Promise<void>{
        res.json(await creatorService.delete(Number(req.params.id)));
        res.status(204).send();
    }

}

export default new CharacterController();