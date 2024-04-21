import { Character } from "../domain/character.domain";
import { CharacterReq } from "../dto/character-req.dto";

class CharacterConverter{
    public characterToResponse(entity: Character){

    }

    public requestToCharacter(req: CharacterReq): Character{
        if(!req){
            return null;
        }
        let character: Character;
        character.id = req.id;
        character.description = req.description;
        character.modified = req.modified;
        character.name = req.name;
        character.resourceURI = req.resourceURI;
        character.thumbnail = req.thumbnail.path + req.thumbnail.path;
        character.urls = req.urls;
        character.editable = true;
        return character; 
    }
}

export default new CharacterConverter();