import { Router } from 'express'
import characterController from './src/controller/character.controller'

const routes = Router()
routes.get('/health-check');
routes.get('/hello', characterController.helloWorld);

/**
 * @swagger
 * /hello/oi:
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