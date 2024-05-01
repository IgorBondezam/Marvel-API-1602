import {deepStrictEqual} from "node:assert";
import {CharacterReq} from "../src/dto/character-req.dto";
import * as request from 'supertest'
import app from "../app";
import {CharacterRes} from "../src/dto/character-res.dto";
import {createTestDb, resetDataBase} from "../src/utils/configuration/db-configuration.utils";


describe('API (Usuarios, Tarefas, Categorias) Workflow', () => {

    beforeAll(async () => {
        await createTestDb();
    })

    beforeEach(async () => {
        await resetDataBase()
    })
    async function charactersGetAll() {
        return await request.default(app).get('/characters')
    }

    async function createCharacter(characterReq: CharacterReq) {
        return await request.default(app).post('/character').send(characterReq);
    }

    describe(`GET /characters`, () => {
        it('Deve trazer todos os characters cadastrados', async () => {
            const characterReqs: CharacterReq[] = [
                {
                    name: "QUERO D ",
                    description: "I WANT SLEEEEEEEEEP.",
                    modified: new Date("2024-04-20T12:00:00Z"),
                    resourceURI: "https://example.com/comics/1",
                    urls: [
                        { type: "detail", url: "https://example.com/comics/1/details" },
                        { type: "purchase", url: "https://example.com/comics/1/purchase" }
                    ],
                    thumbnail: { path: "https://example.com/thumbnails/1", extension: "jpg" }
                },
                {
                    name: "QUERO D ",
                    description: "I WANT SLEEEEEEEEEP.",
                    modified: new Date("2024-04-20T12:00:00Z"),
                    resourceURI: "https://example.com/comics/1",
                    urls: [
                        { type: "detail", url: "https://example.com/comics/1/details" },
                        { type: "purchase", url: "https://example.com/comics/1/purchase" }
                    ],
                    thumbnail: { path: "https://example.com/thumbnails/1", extension: "jpg" }
                },
                {
                    name: "QUERO D ",
                    description: "I WANT SLEEEEEEEEEP.",
                    modified: new Date("2024-04-20T12:00:00Z"),
                    resourceURI: "https://example.com/comics/1",
                    urls: [
                        { type: "detail", url: "https://example.com/comics/1/details" },
                        { type: "purchase", url: "https://example.com/comics/1/purchase" }
                    ],
                    thumbnail: { path: "https://example.com/thumbnails/1", extension: "jpg" }
                }
            ]
            await Promise.all(
                characterReqs.map(async character => await createCharacter(character))
            );

            const reply = await charactersGetAll();
            const lista: CharacterRes[] = reply.body;
            deepStrictEqual(reply.statusCode, 200)
            deepStrictEqual(lista.length, 3);
        })
    })

})