import { Router } from 'express'
import characterController from './src/controller/character.controller'
import marvelController from './src/controller/marvel.controller'
import creatorController from './src/controller/creator.controller'
import ComicController from "./src/controller/comic.controller";

const routes = Router()
routes.get('/health-check');
routes.get('/hello', marvelController.helloWorld);
routes.get('/characters/marvel', marvelController.getCharacters);
routes.get('/creators/marvel', marvelController.getCreators);
routes.get('/comics/marvel', marvelController.getComics);
routes.get('/character/marvel/:id', marvelController.getCharactersById);
routes.get('/creator/marvel/:id', marvelController.getCreatorsById);
routes.get('/comic/marvel/:id', marvelController.getComicsById);

routes.get('/characters', characterController.findAllCharacters);
routes.get('/characters/:id', characterController.findByIdCharacter);
routes.post('/characters', characterController.createCharacter);
routes.put('/characters/:id', characterController.updateCharacter);
routes.delete('/characters/:id', characterController.deleteCharacter);

routes.get('/creators', creatorController.findAllCreators);
routes.get('/creators/:id', creatorController.findByIdCreator);
routes.post('/creators', creatorController.createCreator);
routes.put('/creators/:id', creatorController.updateCreator);
routes.delete('/creators/:id', creatorController.deleteCreator);

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