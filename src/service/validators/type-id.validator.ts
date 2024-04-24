import mongoose from "mongoose";

export function validarId(id: string): void{
    if(!mongoose.Types.ObjectId.isValid(id)){
        throw new Error('Tipo de id inválido');
    }
}