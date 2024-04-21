import { Router } from 'express'
import characterController from './src/controller/character.controller'
import marvelController from './src/controller/marvel.controller'

const routes = Router()
routes.get('/health-check');
routes.get('/hello', marvelController.helloWorld);
routes.get('/characters', marvelController.getCharacters);
routes.get('/creators', marvelController.getCreators);
routes.get('/comics', marvelController.getComics);

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