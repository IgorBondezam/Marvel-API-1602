import { Request, Response } from "express";
import characterService from "../service/character.service";
import characterConverter from "../converter/character.converter";

class CharacterController{

    public async findAllCharacters(req: Request, res: Response): Promise<void>{
        try{
            res.status(200).json(await characterService.findAll());
            res.send();
        } catch(err){
            res.status(400).json({'error': err.toString()}).send();
        }
    }

    public async findByIdCharacter(req: Request, res: Response): Promise<void>{
        try{
            res.status(200).json(await characterService.findById(Number(req.params.id)));
            res.send();
        } catch(err){
            res.status(400).json({'error': err.toString()}).send();
        }
    }

    public async createCharacter(req: Request, res: Response): Promise<void>{
        try{
            res.status(201)
                .json(await characterService.create(characterConverter.requestToCharacter(req.body)));
            res.send();
        } catch(err){
            res.status(400).json({'error': err.toString()}).send();
        }
    }

    public async updateCharacter(req: Request, res: Response): Promise<void>{
        try{
            res.status(200).json(await characterService.update(Number(req.params.id),
                characterConverter.requestToCharacter(req.body)));
            res.send();
        }catch(err){
            res.status(400).json({'error': err.toString()}).send();
        }
    }

    public async deleteCharacter(req: Request, res: Response): Promise<void>{
        try{
            res.status(204).json(await characterService.delete(Number(req.params.id)));
            res.send();
        } catch(err){
            res.status(400).json({'error': err.toString()}).send();
        }
    }
}

export default new CharacterController();