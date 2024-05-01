import { Router } from 'express'
import characterController from './src/controller/character.controller'
import marvelController from './src/controller/marvel.controller'
import creatorController from './src/controller/creator.controller'
import ComicController from "./src/controller/comic.controller";

const routes = Router()
routes.get('/characters/marvel', marvelController.getCharacters);
routes.get('/creators/marvel', marvelController.getCreators);
routes.get('/comics/marvel', marvelController.getComics);
routes.get('/characters/marvel/modifiedAfter2010', marvelController.getCharactersModifiedAfter2010);
routes.get('/characters/marvel/:id', marvelController.getCharactersById);
routes.get('/creators/marvel/:id', marvelController.getCreatorsById);
routes.get('/comics/marvel/digital', marvelController.getDigitalComics);
routes.get('/comics/marvel/cheap', marvelController.getCheapComics);
routes.get('/comics/marvel/character/:id', marvelController.getCharactersByComic);
routes.get('/comics/marvel/creator/:id', marvelController.getComicsByCreator);
routes.get('/comics/marvel/:id', marvelController.getComicsById);

routes.get('/characters', characterController.findAllCharacters);
routes.get('/character/:id', characterController.findByIdCharacter);
routes.post('/character', characterController.createCharacter);
routes.put('/character/:id', characterController.updateCharacter);
routes.delete('/character/:id', characterController.deleteCharacter);

routes.get('/creators', creatorController.findAllCreators);
routes.get('/creator/:id', creatorController.findByIdCreator);
routes.post('/creator', creatorController.createCreator);
routes.put('/creator/:id', creatorController.updateCreator);
routes.delete('/creator/:id', creatorController.deleteCreator);

routes.get('/comics', ComicController.findAllComics);
routes.get('/comic/:id', ComicController.findByIdComic);
routes.post('/comic', ComicController.createComic);
routes.put('/comic/:id', ComicController.updateComic);
routes.delete('/comic/:id', ComicController.deleteComic);

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Teste swagger
 *     tags: [Tests]
 *     responses:
 *       200:
 *         description: The send Hello World.
 * */

export {
    routes
}