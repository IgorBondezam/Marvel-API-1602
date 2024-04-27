import { Request, Response } from "express";
import creatorService from "../service/creator.service";

class CreatorController{

    helloWorld(req: Request, res: Response){
        return res.json('hello World');
    }

    public async findAllCreators(req: Request, res: Response): Promise<void>{
        try{
            res.json(await creatorService.findAll());
            res.status(200).send();
        }
        catch(err){
            res.json("Error finding creators");
            res.status(400).send();
        }
            
    }

    public async findByIdCreator(req: Request, res: Response): Promise<void>{
        try{
            res.json(await creatorService.findById(Number(req.params.id)));
            res.status(200).send();
        }
        catch(err){
            res.json("Error finding creator");
            res.status(400).send();
        }
    }

    public async createCreator(req: Request, res: Response): Promise<void>{
        try{
            res.json(await creatorService.create(req.body))
            res.status(201).send();
        }
        catch(err){
            res.json("Error creating creator")
            res.status(400).send();
        }
    }

    public async updateCreator(req: Request, res: Response): Promise<void>{
        try{
            res.json(await creatorService.update(req.params.id, req.body));
            res.status(200).send();
        }
        catch(err){
            res.json("Error updating creator");
            res.status(400).send();
        }
    }

    public async deleteCreator(req: Request, res: Response): Promise<void>{
        try{
            await creatorService.delete(req.params.id)
            res.json("Creator deleted successfully");
            res.status(204).send();
        }
        catch(err){
            res.json("Error deleting creator");
            res.status(400).send();
        }
    }

}

export default new CreatorController();