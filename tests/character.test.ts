
import {deepStrictEqual} from "node:assert";
import {CharacterReq} from "../src/dto/character-req.dto";
import * as request from 'supertest'
import app from "../app";
import {CharacterRes} from "../src/dto/character-res.dto";
import {createTestDb, downDatabase, resetDataBase} from "../src/utils/configuration/db-configuration.utils";
import {expect} from "@jest/globals";
import {notDeepStrictEqual} from "assert";

describe('CRUD Characters', () => {

    beforeAll(async () => {
        await createTestDb();
    })

    beforeEach(async () => {
        await resetDataBase()
    })

    afterAll(async () => {
        await downDatabase()
    })

    async function getAllCharacter() {
        return await request.default(app).get('/characters');
    }

    async function getCharacterById(id: number) {
        return await request.default(app).get(`/character/${id}`);
    }

    async function createCharacter(characterReq: CharacterReq) {
        return await request.default(app).post('/character').send(characterReq);
    }

    async function updateCharacterById(id: number, characterReq: CharacterReq) {
        return await request.default(app).put(`/character/${id}`).send(characterReq);
    }

    async function deleteCharacterById(id: number) {
        return await request.default(app).delete(`/character/${id}`);
    }

    describe(`GET /characters`, () => {
        it('Deve trazer todos os characters cadastrados', async () => {
            const characterReqs: CharacterReq[] = [
                {
                    name: "Teste 1 ",
                    description: "Faz os testes nível 1",
                    modified: new Date("2024-05-01T12:15:28Z"),
                    resourceURI: "https://example.com/character/1",
                    urls: [
                        { type: "detail", url: "https://example.com/character/1/details" },
                        { type: "purchase", url: "https://example.com/character/1/purchase" }
                    ],
                    thumbnail: { path: "https://example.com/thumbnails/1", extension: "jpg" }
                },
                {
                    name: "Teste 2",
                    description: "Faz os testes nível 2",
                    modified: new Date("2024-05-02T23:59:59Z"),
                    resourceURI: "https://example.com/character/2",
                    urls: [
                        { type: "detail", url: "https://example.com/character/2/details" },
                        { type: "purchase", url: "https://example.com/character/2/purchase" }
                    ],
                    thumbnail: { path: "https://example.com/thumbnails/2", extension: "jpg" }
                },
                {
                    name: "Teste 3 ",
                    description: "Faz os testes nivel 3",
                    modified: new Date("2024-04-20T01:47:52Z"),
                    resourceURI: "https://example.com/character/3",
                    urls: [
                        { type: "detail", url: "https://example.com/character/3/details" },
                        { type: "purchase", url: "https://example.com/character/3/purchase" }
                    ],
                    thumbnail: { path: "https://example.com/thumbnails/3", extension: "jpg" }
                }
            ]
            for (const character of characterReqs) {
                await createCharacter(character)
            }

            const reply = await getAllCharacter();
            const lista: CharacterRes[] = reply.body;
            deepStrictEqual(reply.statusCode, 200)
            deepStrictEqual(lista.length, 3);
        });
    });

    describe(`GET /character/:id`, () => {
        it('Deve trazer o character pelo id', async () => {
            const characterReqs: CharacterReq[] = [
                {
                    name: "Teste 1",
                    description: "Faz os testes nível 1",
                    modified: new Date("2024-05-01T12:15:28Z"),
                    resourceURI: "https://example.com/character/1",
                    urls: [
                        { type: "detail", url: "https://example.com/character/1/details" },
                    ],
                    thumbnail: { path: "https://example.com/thumbnails/1", extension: "jpg" }
                },
                {
                    name: "Teste 2",
                    description: "Faz os testes nível 2",
                    modified: new Date("2024-05-02T23:59:59Z"),
                    resourceURI: "https://example.com/character/2",
                    urls: [
                        { type: "purchase", url: "https://example.com/character/2/purchase" },
                        { type: "detail", url: "https://example.com/character/2/details" }
                    ],
                    thumbnail: { path: "https://example.com/thumbnails/2", extension: "jpg" }
                }
            ]

            for (const character of characterReqs) {
                await createCharacter(character)
            }

            const character1Response = await getCharacterById(1);
            const character1Corpo: CharacterRes = character1Response.body;
            deepStrictEqual(character1Response.statusCode, 200)
            deepStrictEqual(character1Corpo.name, characterReqs[0].name);
            deepStrictEqual(character1Corpo.description, characterReqs[0].description);
            deepStrictEqual(new Date(character1Corpo.modified), characterReqs[0].modified);
            deepStrictEqual(character1Corpo.resourceURI, characterReqs[0].resourceURI);
            deepStrictEqual(character1Corpo.urls.length, 1);
            deepStrictEqual(character1Corpo.urls[0].type, characterReqs[0].urls[0].type);
            deepStrictEqual(character1Corpo.urls[0].url, characterReqs[0].urls[0].url);
            deepStrictEqual(character1Corpo.thumbnail,
                `${characterReqs[0].thumbnail.path}.${characterReqs[0].thumbnail.extension}`);

            const character2Response = await getCharacterById(2);
            const character2Corpo: CharacterRes = character2Response.body;
            deepStrictEqual(character2Response.statusCode, 200)
            expect(character2Corpo.name).not.toEqual( character1Corpo.name);
            expect(character2Corpo.description).not.toEqual(character1Corpo.description);
            expect(character2Corpo.modified).not.toEqual(character1Corpo.modified);
            expect(character2Corpo.resourceURI).not.toEqual(character1Corpo.resourceURI);
            expect(character2Corpo.urls.length).not.toEqual(1);
            expect(character2Corpo.urls[0].type).not.toEqual(character1Corpo.urls[0].type);
            expect(character2Corpo.urls[0].url).not.toEqual(character1Corpo.urls[0].url);
            expect(character2Corpo.thumbnail).not.toEqual(character1Corpo.thumbnail);
        });
    });

    describe(`POST /character`, () => {
        it('Deve salvar um character', async () => {
            const characterReq: CharacterReq =
                {
                    name: "Teste 1",
                    description: "Faz os testes nível 1",
                    modified: new Date("2024-05-01T12:15:28Z"),
                    resourceURI: "https://example.com/character/1",
                    urls: [
                        { type: "detail", url: "https://example.com/character/1/details" },
                    ],
                    thumbnail: { path: "https://example.com/thumbnails/1", extension: "jpg" }
                }

            const character1Response = await createCharacter(characterReq);
            const character1Corpo: CharacterRes = character1Response.body;
            deepStrictEqual(character1Response.statusCode, 201)
            notDeepStrictEqual(character1Corpo.id, null);
            deepStrictEqual(character1Corpo.id, 1);
            deepStrictEqual(character1Corpo.name, characterReq.name);
            deepStrictEqual(character1Corpo.description, characterReq.description);
            deepStrictEqual(new Date(character1Corpo.modified), characterReq.modified);
            deepStrictEqual(character1Corpo.resourceURI, characterReq.resourceURI);
            deepStrictEqual(character1Corpo.urls.length, 1);
            deepStrictEqual(character1Corpo.urls[0].type, characterReq.urls[0].type);
            deepStrictEqual(character1Corpo.urls[0].url, characterReq.urls[0].url);
            deepStrictEqual(character1Corpo.thumbnail,
                `${characterReq.thumbnail.path}.${characterReq.thumbnail.extension}`);
            notDeepStrictEqual(character1Corpo.editable, null);
            deepStrictEqual(character1Corpo.editable, true);
        });
    });

    describe(`PUT /character`, () => {
        it('Deve atualizar um character', async () => {
            const characterReq: CharacterReq =
                {
                    name: "Teste 1",
                    description: "Faz os testes nível 1",
                    modified: new Date("2024-05-01T12:15:28Z"),
                    resourceURI: "https://example.com/character/1",
                    urls: [
                        { type: "detail", url: "https://example.com/character/1/details" },
                    ],
                    thumbnail: { path: "https://example.com/thumbnails/1", extension: "jpg" }
                }

            const character1Response = await createCharacter(characterReq);
            const character1Corpo: CharacterRes = character1Response.body;

            const characterUpdateReq: CharacterReq =
                {
                    name: "Teste 51",
                    description: "Faz os testes nível 51 ATUALIZADO !!!!!",
                    modified: new Date("2020-05-01T12:15:28Z"),
                    resourceURI: "https://example.com/character/51",
                    urls: [
                        { type: "detail", url: "https://example.com/character/51/details" },
                    ],
                    thumbnail: { path: "https://example.com/thumbnails/51", extension: "png" }
                }

            const characterUpdateResponse = await updateCharacterById(1, characterUpdateReq);
            const characterUpdateCorpo: CharacterRes = characterUpdateResponse.body;

            deepStrictEqual(characterUpdateResponse.statusCode, 200)
            notDeepStrictEqual(characterUpdateCorpo.id, null);
            deepStrictEqual(characterUpdateCorpo.id, 1);
            deepStrictEqual(characterUpdateCorpo.name, characterUpdateReq.name);
            deepStrictEqual(characterUpdateCorpo.description, characterUpdateReq.description);
            deepStrictEqual(new Date(characterUpdateCorpo.modified), characterUpdateReq.modified);
            deepStrictEqual(characterUpdateCorpo.resourceURI, characterUpdateReq.resourceURI);
            deepStrictEqual(characterUpdateCorpo.urls.length, 1);
            deepStrictEqual(characterUpdateCorpo.urls[0].type, characterUpdateReq.urls[0].type);
            deepStrictEqual(characterUpdateCorpo.urls[0].url, characterUpdateReq.urls[0].url);
            deepStrictEqual(characterUpdateCorpo.thumbnail,
                `${characterUpdateReq.thumbnail.path}.${characterUpdateReq.thumbnail.extension}`);
            notDeepStrictEqual(characterUpdateCorpo.editable, null);
            deepStrictEqual(characterUpdateCorpo.editable, true);

            deepStrictEqual(characterUpdateCorpo.id, character1Corpo.id);
            notDeepStrictEqual(characterUpdateCorpo.name, character1Corpo.name);
            notDeepStrictEqual(characterUpdateCorpo.description, character1Corpo.description);
            notDeepStrictEqual(new Date(characterUpdateCorpo.modified), character1Corpo.modified);
            notDeepStrictEqual(characterUpdateCorpo.resourceURI, character1Corpo.resourceURI);
            deepStrictEqual(characterUpdateCorpo.urls[0].type, character1Corpo.urls[0].type);
            notDeepStrictEqual(characterUpdateCorpo.urls[0].url, character1Corpo.urls[0].url);
            notDeepStrictEqual(characterUpdateCorpo.thumbnail, character1Corpo.thumbnail);
            deepStrictEqual(characterUpdateCorpo.editable, character1Corpo.editable);
        });
    });

    describe(`DELETE /character`, () => {
        it('Deve deletar um character', async () => {
            const characterReqs: CharacterReq[] = [
                {
                    name: "Teste 1",
                    description: "Faz os testes nível 1",
                    modified: new Date("2024-05-01T12:15:28Z"),
                    resourceURI: "https://example.com/character/1",
                    urls: [
                        {type: "detail", url: "https://example.com/character/1/details"},
                    ],
                    thumbnail: {path: "https://example.com/thumbnails/1", extension: "jpg"}
                },
                {
                    name: "Teste 2",
                    description: "Faz os testes nível 2",
                    modified: new Date("2024-05-02T23:59:59Z"),
                    resourceURI: "https://example.com/character/2",
                    urls: [
                        {type: "purchase", url: "https://example.com/character/2/purchase"},
                        {type: "detail", url: "https://example.com/character/2/details"}
                    ],
                    thumbnail: {path: "https://example.com/thumbnails/2", extension: "jpg"}
                }
            ]

            const createdList: CharacterRes[] = [];
            for (const character of characterReqs) {
                createdList.push((await createCharacter(character)).body);
            }

            deepStrictEqual(createdList.length, 2);
            const deleted = await deleteCharacterById(1);

            const getAll = await getAllCharacter();
            const lista: CharacterRes[] = getAll.body;
            deepStrictEqual(deleted.statusCode, 204)
            deepStrictEqual(lista.length, 1);
        });
    });
})