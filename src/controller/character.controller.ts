import { Request, Response } from "express";
import characterService from "../service/character.service";
import characterConverter from "../converter/character.converter";

class CharacterController{

    public async findAllCharacters(req: Request, res: Response): Promise<void>{
        try{
            res.json(await characterService.findAll());
            res.status(200).send();
        } catch(err){
            res.status(400).json({'error': err.toString()}).send();
        }
    }

    public async findByIdCharacter(req: Request, res: Response): Promise<void>{
        try{
            res.json(await characterService.findById(Number(req.params.id)));
            res.status(200).send();
        } catch(err){
            res.status(400).json({'error': err.toString()}).send();
        }
    }

    public async createCharacter(req: Request, res: Response): Promise<void>{
        try{
            res.json(await characterService.create(characterConverter.requestToCharacter(req.body)));
            res.status(201).send();
        } catch(err){
            res.status(400).json({'error': err.toString()}).send();
        }
    }

    public async updateCharacter(req: Request, res: Response): Promise<void>{
        try{
            res.json(await characterService.update(Number(req.params.id), 
                characterConverter.requestToCharacter(req.body)));
            res.status(200).send();
        }catch(err){
            res.status(400).json({'error': err.toString()}).send();
        }
    }

    public async deleteCharacter(req: Request, res: Response): Promise<void>{
        try{
            res.json(await characterService.delete(Number(req.params.id)));
            res.status(204).send();
        } catch(err){
            res.status(400).json({'error': err.toString()}).send();
        }
    }
}

export default new CharacterController();