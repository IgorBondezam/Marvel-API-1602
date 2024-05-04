import { Router } from 'express'
import characterController from './src/controller/character.controller'
import marvelController from './src/controller/marvel.controller'
import creatorController from './src/controller/creator.controller'
import ComicController from "./src/controller/comic.controller";

const routes = Router()
/**
 * @swagger
 * /characters/marvel:
 *   get:
 *     summary: characters api marvel
 *     tags: [Tests]
 *     responses:
 *       200:
 *         description: all characters from marvel.
 * */
routes.get('/characters/marvel', marvelController.getCharacters);

/**
 * @swagger
 * /creators/marvel:
 *   get:
 *     summary: creators api marvel
 *     tags: [Tests]
 *     responses:
 *       200:
 *         description: all creators from marvel.
 * */
routes.get('/creators/marvel', marvelController.getCreators);

/**
* @swagger
* /comics/marvel:
*   get:
*     summary: comics api marvel
*     tags: [Tests]
*     responses:
*       200:
*         description: all comics from marvel.
* */
routes.get('/comics/marvel', marvelController.getComics);

/**
* @swagger
* /characters/marvel/modifiedAfter2010:
*   get:
*     summary: characters after 2010
*     tags: [Tests]
*     responses:
*       200:
*         description: all character modified after 2010.
* */
routes.get('/characters/marvel/modifiedAfter2010', marvelController.getCharactersModifiedAfter2010);

/**
* @swagger
* /characters/marvel/{id}:
*   get:
*     summary: characters by id
*     tags: [Tests]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: Get one character by id.
* */
routes.get('/characters/marvel/:id', marvelController.getCharactersById);

/**
* @swagger
* /creators/marvel/{id}:
*   get:
*     summary: creators by id
*     tags: [Tests]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: Get one creator by id.
* */
routes.get('/creators/marvel/:id', marvelController.getCreatorsById);

/**
* @swagger
* /comics/marvel/creator/{id}:
*   get:
*     summary: get comics by id
*     tags: [Tests]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: Get one comic by id.
* */
routes.get('/comics/marvel/:id', marvelController.getComicsById);

/**
* @swagger
* /comics/marvel/digital:
*   get:
*     summary: digital comics
*     tags: [Tests]
*     responses:
*       200:
*         description: Get all digital comics.
* */
routes.get('/comics/marvel/digital', marvelController.getDigitalComics);

/**
* @swagger
* /comics/marvel/cheap:
*   get:
*     summary: cheap comics
*     tags: [Tests]
*     responses:
*       200:
*         description: Get all comics cheaper than 3.5 dollars.
* */
routes.get('/comics/marvel/cheap', marvelController.getCheapComics);

/**
* @swagger
* /comics/marvel/character/{id}:
*   get:
*     summary: get comics by character
*     tags: [Tests]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: Get all comics by character.
* */
routes.get('/comics/marvel/character/:id', marvelController.getCharactersByComic);

/**
* @swagger
* /comics/marvel/creator/{id}:
*   get:
*     summary: get comics by creator
*     tags: [Tests]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: Get all comics by creator.
* */
routes.get('/comics/marvel/creator/:id', marvelController.getComicsByCreator);

/**
* @swagger
* /characters:
*   get:
*     summary: get all database characters
*     tags: [Tests]
*     responses:
*       200:
*         description: Get all characters from database.
* */
routes.get('/characters', characterController.findAllCharacters);

/**
* @swagger
* /character/{id}:
*   get:
*     summary: character from database by id
*     tags: [Tests]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: Get one character by id.
* */
routes.get('/character/:id', characterController.findByIdCharacter);

/**
* @swagger
* /character:
*   post:
*     summary: create character
*     tags: [Tests]
*     responses:
*       200:
*         description: create character in database.
* */
routes.post('/character', characterController.createCharacter);

/**
* @swagger
* /character/{id}:
*   put:
*     summary: update character
*     tags: [Tests]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: update character in database.
* */
routes.put('/character/:id', characterController.updateCharacter);

/**
* @swagger
* /character/{id}:
*   delete:
*     summary: delete character
*     tags: [Tests]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: delete character in database.
* */
routes.delete('/character/:id', characterController.deleteCharacter);

/**
* @swagger
* /creators:
*   get:
*     summary: get all database creators
*     tags: [Tests]
*     responses:
*       200:
*         description: Get all creators from database.
* */
routes.get('/creators', creatorController.findAllCreators);

/**
* @swagger
* /creator/{id}:
*   get:
*     summary: creator from database by id
*     tags: [Tests]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: Get one creator by id.
* */
routes.get('/creator/:id', creatorController.findByIdCreator);

/**
* @swagger
* /creator:
*   post:
*     summary: create creator
*     tags: [Tests]
*     responses:
*       200:
*         description: create creator in database.
* */
routes.post('/creator', creatorController.createCreator);

/**
* @swagger
* /creator/{id}:
*   put:
*     summary: update creator
*     tags: [Tests]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: update creator in database.
* */
routes.put('/creator/:id', creatorController.updateCreator);

/**
* @swagger
* /creator/{id}:
*   delete:
*     summary: delete creator
*     tags: [Tests]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: delete creator in database.
* */
routes.delete('/creator/:id', creatorController.deleteCreator);

/**
* @swagger
* /comics:
*   get:
*     summary: get all database creators
*     tags: [Tests]
*     responses:
*       200:
*         description: Get all comics from database.
* */
routes.get('/comics', ComicController.findAllComics);

/**
* @swagger
* /comic/{id}:
*   get:
*     summary: comic from database by id
*     tags: [Tests]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: Get one comic by id.
* */
routes.get('/comic/:id', ComicController.findByIdComic);

/**
* @swagger
* /comic:
*   post:
*     summary: create comic
*     tags: [Tests]
*     responses:
*       200:
*         description: create comic in database.
* */
routes.post('/comic', ComicController.createComic);

/**
* @swagger
* /comic/{id}:
*   put:
*     summary: update comic
*     tags: [Tests]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: update comic in database.
* */
routes.put('/comic/:id', ComicController.updateComic);

/**
* @swagger
* /comic/{id}:
*   delete:
*     summary: delete comic
*     tags: [Tests]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: delete comic in database.
* */
routes.delete('/comic/:id', ComicController.deleteComic);

routes.get('/populate', marvelController.populate);

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