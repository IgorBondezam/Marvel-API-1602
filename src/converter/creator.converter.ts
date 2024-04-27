import { Character } from "../domain/character.domain";
import { CharacterReq } from "../dto/character-req.dto";
import { CharacterRes } from "../dto/character-res.dto";
import {CreatorReq} from "../dto/creator-req.dto";
import {Creator} from "../domain/creator.domain";
import {CreatorRes} from "../dto/creator-res.dto";
import e from "express";

class CreatorConverter{
    public creatorToResponse(entity: Creator): CreatorRes{
        if(!entity){
            return null;
        }
        let res: CreatorRes = new CreatorRes();
        res.id = entity.id;
        res.firstName = entity.firstName;
        res.middleName = entity.middleName;
        res.lastName = entity.lastName;
        res.suffix = entity.suffix;
        res.fullName = entity.fullName;
        res.modified = entity.modified;
        res.resourceURI = entity.resourceURI;
        res.urls = entity.urls;
        res.thumbnail = entity.thumbnail;
        res.editable = entity.editable;
        return res; 
    }

    public requestToCreator(req: CreatorReq): Creator{
        if(!req){
            return null;
        }
        let creator: Creator = new Creator;
        creator.firstName = req.firstName;
        creator.middleName = req.middleName;
        creator.lastName = req.lastName;
        creator.suffix = req.suffix;
        creator.fullName = req.fullName;
        creator.modified = req.modified;
        creator.resourceURI = req.resourceURI;
        creator.urls = req.urls;
        creator.thumbnail = `${req.thumbnail?.path}.${req.thumbnail?.extension}`;
        return creator;
    }
}

export default new CreatorConverter();