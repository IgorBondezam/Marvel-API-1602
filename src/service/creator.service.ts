import creatorSchema from '../schema/creator.schema'
import {validarId} from './validators/type-id.validator';
import {Creator} from "../domain/creator.domain";
import creatorRepository from "../repository/creator.repository";
import {CreatorRes} from "../dto/creator-res.dto";
import creatorConverter from "../converter/creator.converter";

export class CreatorService {
    public async create(creator: Creator): Promise<CreatorRes> {
        const createdCreator: Creator = await creatorSchema.create(creator);
        return creatorConverter.creatorToResponse(createdCreator);
    }

    public async findById(id: number): Promise<CreatorRes> {
        validarId(id);
        return creatorConverter.creatorToResponse(await creatorRepository.findById(id));
    }

    public async findAll(): Promise<CreatorRes[]> {
        return (await creatorSchema.find()).map(c => creatorConverter.creatorToResponse(c));
    }


    public async update(id: number, creator: Creator): Promise<CreatorRes> {
        validarId(id);
        return creatorConverter.creatorToResponse(await creatorRepository.updateById(id, creator));
    }

    public async delete(id: number): Promise<string> {
        validarId(id);
        await creatorRepository.deleteById(id);
        return "Creator Removido com sucesso!";
    }
}

export default new CreatorService();