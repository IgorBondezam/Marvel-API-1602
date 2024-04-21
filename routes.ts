import { Router } from 'express'
import characterController from './src/controller/character.controller'
import marvelController from './src/controller/marvel.controller'

const routes = Router()
routes.get('/health-check');
routes.get('/hello', marvelController.helloWorld);
routes.get('/characters/marvel', marvelController.getCharacters);
routes.get('/creators/marvel', marvelController.getCreators);
routes.get('/comics/marvel', marvelController.getComics);
routes.get('/characters', characterController.findAllCharacters);
routes.get('/characters/:id', characterController.findByIdCharacter);
routes.post('/characters', characterController.createCharacter);
routes.put('/characters', characterController.createCharacter);
routes.delete('/characters', characterController.createCharacter);

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