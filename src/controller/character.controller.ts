import { Request, Response } from "express";

class CharacterController{

    helloWorld(req: Request, res: Response){
        return res.json('hello World');
    }
}

export default new CharacterController();