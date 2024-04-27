import { Request, Response } from "express";
import creatorService from "../service/creator.service";
import creatorConverter from "../converter/creator.converter";

class CreatorController{

    helloWorld(req: Request, res: Response){
        return res.json('hello World');
    }

    public async findAllCreators(req: Request, res: Response): Promise<void>{
        try{
            res.json(await creatorService.findAll());
            res.status(200).send();
        } catch(err){
            res.status(400).json({'error': err.toString()}).send();
        }
    }

    public async findByIdCreator(req: Request, res: Response): Promise<void>{
        try {
            res.json(await creatorService.findById(Number(req.params.id)));
            res.status(200).send();
        } catch(err){
            res.status(400).json({'error': err.toString()}).send();
        }
    }

    public async createCreator(req: Request, res: Response): Promise<void>{
        try{
            res.json(creatorConverter.creatorToResponse(
                await creatorService.create(creatorConverter.requestToCreator(req.body))));
            res.status(201).send();
        } catch(err){
            res.status(400).json({'error': err.toString()}).send();
        }
    }

    public async updateCreator(req: Request, res: Response): Promise<void>{
        try{
            res.json(creatorConverter.creatorToResponse(
                await creatorService.update(Number(req.params.id),
                    creatorConverter.requestToCreator(req.body))));
            res.status(200).send();
        } catch(err){
            res.status(400).json({'error': err.toString()}).send();
        }
    }

    public async deleteCreator(req: Request, res: Response): Promise<void>{
        try {
            res.json(await creatorService.delete(Number(req.params.id)));
            res.status(204);
        } catch(err){
            res.status(400).json({'error': err.toString()}).send();
        }
    }

}

export default new CreatorController();