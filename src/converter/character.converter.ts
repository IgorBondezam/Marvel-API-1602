import { Character } from "../domain/character.domain";
import { CharacterReq } from "../dto/character-req.dto";
import { CharacterRes } from "../dto/character-res.dto";

class CharacterConverter{
    public characterToResponse(entity: Character){
        if(!entity){
            return null;
        }
        let res: CharacterRes = new CharacterRes;
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        res.modified = entity.modified;
        res.resourceURI = entity.resourceURI;
        res.urls = entity.urls;
        res.thumbnail = entity.thumbnail;
        res.editable = entity.editable;
        return res; 
    }

    public requestToCharacter(req: CharacterReq): Character{
        if(!req){
            return null;
        }
        let character: Character = new Character;
        character.id = req.id;
        character.description = req.description;
        character.modified = req.modified;
        character.name = req.name;
        character.resourceURI = req.resourceURI;
        character.thumbnail = req.thumbnail?.path + req.thumbnail?.path;
        character.urls = req.urls;
        character.editable = true;
        return character; 
    }
}

export default new CharacterConverter();