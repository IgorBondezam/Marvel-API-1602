import {deepStrictEqual} from "node:assert";
import {CreatorReq} from "../src/dto/creator-req.dto";
import * as request from 'supertest'
import app from "../app";
import {CreatorRes} from "../src/dto/creator-res.dto";
import {createTestDb, downDatabase, resetDataBase} from "../src/utils/configuration/db-configuration.utils";
import {expect} from "@jest/globals";
import {notDeepStrictEqual} from "assert";


describe('API (Usuarios, Tarefas, Categorias) Workflow', () => {

    beforeAll(async () => {
        await createTestDb();
    })

    beforeEach(async () => {
        await resetDataBase()
    })

    afterAll(async () => {
        await downDatabase()
    })
    async function getAllCreator() {
        return await request.default(app).get('/creators');
    }

    async function getCreatorById(id: number) {
        return await request.default(app).get(`/creator/${id}`);
    }

    async function createCreator(creatorReq: CreatorReq) {
        return await request.default(app).post('/creator').send(creatorReq);
    }

    async function updateCreatorById(id: number, creatorReq: CreatorReq) {
        return await request.default(app).put(`/creator/${id}`).send(creatorReq);
    }

    async function deleteCreatorById(id: number) {
        return await request.default(app).delete(`/creator/${id}`);
    }

    describe(`GET /creators`, () => {
        it('Deve trazer todos os creators cadastrados', async () => {
            const creatorReqs: CreatorReq[] = [
                {
                    firstName: "Igor",
                    middleName: "Zauza",
                    lastName: "Momotio",
                    suffix: "IZB",
                    fullName: "Igor Zauza Bruno",
                    modified: new Date("2024-04-27T12:00:00Z"),
                    resourceURI: "http://example.com/creator/1",
                    urls: [
                        {
                            type: "detail",
                            url: "http://example.com/creator/1/detail"
                        },
                        {
                            type: "purchase",
                            url: "http://example.com/creator/1/purchase"
                        }
                    ],
                    thumbnail: {
                        path: "http://example.com/creator/1/thumbnail",
                        extension: "jpg"
                    },
                },
                {
                    firstName: "Cassiano",
                    middleName: "Bussola",
                    lastName: "Iara",
                    suffix: "CBI",
                    fullName: "Cassiano Bussola Iara",
                    modified: new Date("2022-04-27T23:01:00Z"),
                    resourceURI: "http://example.com/creator/2",
                    urls: [
                        {
                            type: "detail",
                            url: "http://example.com/creator/2/detail"
                        },
                        {
                            type: "purchase",
                            url: "http://example.com/creator/2/purchase"
                        }
                    ],
                    thumbnail: {
                        path: "http://example.com/creator/2/thumbnail",
                        extension: "png"
                    },
                },
                {
                    firstName: "Dalle",
                    middleName: "Marco",
                    lastName: "Mariléia",
                    suffix: "DMM",
                    fullName: "Dalle Marco Mariléia",
                    modified: new Date("2017-04-01T12:54:00Z"),
                    resourceURI: "http://example.com/creator/3",
                    urls: [
                        {
                            type: "detail",
                            url: "http://example.com/creator/3/detail"
                        },
                        {
                            type: "purchase",
                            url: "http://example.com/creator/3/purchase"
                        }
                    ],
                    thumbnail: {
                        path: "http://example.com/creator/3/thumbnail",
                        extension: "jpeg"
                    },
                },
            ]
            for (const creator of creatorReqs) {
                await createCreator(creator)
            }

            const reply = await getAllCreator();
            const lista: CreatorRes[] = reply.body;
            deepStrictEqual(reply.statusCode, 200)
            deepStrictEqual(lista.length, 3);
        });
    });

    describe(`GET /creator/:id`, () => {
        it('Deve trazer o creator pelo id', async () => {
            const creatorReqs: CreatorReq[] = [
                {
                    firstName: "Igor",
                    middleName: "Zauza",
                    lastName: "Bruno",
                    suffix: "IZB",
                    fullName: "Igor Zauza Bruno",
                    modified: new Date("2024-04-27T12:00:00Z"),
                    resourceURI: "http://example.com/creator/1",
                    urls: [
                        {
                            type: "detail",
                            url: "http://example.com/creator/1/detail"
                        },
                        {
                            type: "purchase",
                            url: "http://example.com/creator/1/purchase"
                        }
                    ],
                    thumbnail: {
                        path: "http://example.com/creator/1/thumbnail",
                        extension: "jpg"
                    },
                },
                {
                    firstName: "Cassiano",
                    middleName: "Bussola",
                    lastName: "Iara",
                    suffix: "CBI",
                    fullName: "Cassiano Bussola Iara",
                    modified: new Date("2022-04-27T23:01:00Z"),
                    resourceURI: "http://example.com/creator/2",
                    urls: [
                        {
                            type: "purchase",
                            url: "http://example.com/creator/2/purchase"
                        },
                        {
                            type: "detail",
                            url: "http://example.com/creator/2/detail"
                        }
                    ],
                    thumbnail: {
                        path: "http://example.com/creator/2/thumbnail",
                        extension: "png"
                    },
                }
            ]

            for (const creator of creatorReqs) {
                await createCreator(creator)
            }

            const creator1Response = await getCreatorById(1);
            const creator1Corpo: CreatorRes = creator1Response.body;
            deepStrictEqual(creator1Response.statusCode, 200)
            deepStrictEqual(creator1Corpo.firstName, creatorReqs[0].firstName);
            deepStrictEqual(creator1Corpo.middleName, creatorReqs[0].middleName);
            deepStrictEqual(creator1Corpo.lastName, creatorReqs[0].lastName);
            deepStrictEqual(creator1Corpo.suffix, creatorReqs[0].suffix);
            deepStrictEqual(creator1Corpo.fullName, creatorReqs[0].fullName);
            deepStrictEqual(new Date(creator1Corpo.modified), creatorReqs[0].modified);
            deepStrictEqual(creator1Corpo.resourceURI, creatorReqs[0].resourceURI);
            deepStrictEqual(creator1Corpo.urls[0].type, creatorReqs[0].urls[0].type);
            deepStrictEqual(creator1Corpo.urls[0].url, creatorReqs[0].urls[0].url);
            deepStrictEqual(creator1Corpo.thumbnail,
                `${creatorReqs[0].thumbnail.path}.${creatorReqs[0].thumbnail.extension}`);

            const creator2Response = await getCreatorById(2);
            const creator2Corpo: CreatorRes = creator2Response.body;
            deepStrictEqual(creator2Response.statusCode, 200)
            expect(creator2Corpo.firstName).not.toEqual( creator1Corpo.firstName);
            expect(creator2Corpo.middleName).not.toEqual( creator1Corpo.middleName);
            expect(creator2Corpo.lastName).not.toEqual( creator1Corpo.lastName);
            expect(creator2Corpo.suffix).not.toEqual( creator1Corpo.suffix);
            expect(creator2Corpo.fullName).not.toEqual( creator1Corpo.fullName);
            expect(creator2Corpo.modified).not.toEqual( creator1Corpo.modified);
            expect(creator2Corpo.resourceURI).not.toEqual( creator1Corpo.resourceURI);
            expect(creator2Corpo.urls.length).not.toEqual(1);
            expect(creator2Corpo.urls[0].type).not.toEqual(creator1Corpo.urls[0].type);
            expect(creator2Corpo.urls[0].url).not.toEqual(creator1Corpo.urls[0].url);
            expect(creator2Corpo.thumbnail).not.toEqual(creator1Corpo.thumbnail);
        });
    });

    describe(`POST /creator`, () => {
        it('Deve salvar um creator', async () => {
            const creatorReq: CreatorReq =
                    {
                        firstName: "Igor",
                        middleName: "Zauza",
                        lastName: "Bruno",
                        suffix: "IZB",
                        fullName: "Igor Zauza Bruno",
                        modified: new Date("2024-04-27T12:00:00Z"),
                        resourceURI: "http://example.com/creator/1",
                        urls: [
                            {
                                type: "detail",
                                url: "http://example.com/creator/1/detail"
                            },
                            {
                                type: "purchase",
                                url: "http://example.com/creator/1/purchase"
                            }
                        ],
                        thumbnail: {
                            path: "http://example.com/creator/1/thumbnail",
                            extension: "jpg"
                        },
                    }

            const creator1Response = await createCreator(creatorReq);
            const creator1Corpo: CreatorRes = creator1Response.body;
            deepStrictEqual(creator1Response.statusCode, 200)
            deepStrictEqual(creator1Corpo.firstName, creatorReq.firstName);
            deepStrictEqual(creator1Corpo.middleName, creatorReq.middleName);
            deepStrictEqual(creator1Corpo.lastName, creatorReq.lastName);
            deepStrictEqual(creator1Corpo.suffix, creatorReq.suffix);
            deepStrictEqual(creator1Corpo.fullName, creatorReq.fullName);
            deepStrictEqual(new Date(creator1Corpo.modified), creatorReq.modified);
            deepStrictEqual(creator1Corpo.resourceURI, creatorReq.resourceURI);
            deepStrictEqual(creator1Corpo.urls[0].type, creatorReq.urls[0].type);
            deepStrictEqual(creator1Corpo.urls[0].url, creatorReq.urls[0].url);
            deepStrictEqual(creator1Corpo.thumbnail,
                `${creatorReq.thumbnail.path}.${creatorReq.thumbnail.extension}`);
        });
    });

    describe(`PUT /creator`, () => {
        it('Deve atualizar um creator', async () => {
            const creatorReq: CreatorReq =
                {
                    firstName: "Igor",
                    middleName: "Zauza",
                    lastName: "Bruno",
                    suffix: "IZB",
                    fullName: "Igor Zauza Bruno",
                    modified: new Date("2024-04-27T12:00:00Z"),
                    resourceURI: "http://example.com/creator/1",
                    urls: [
                        {
                            type: "purchase",
                            url: "http://example.com/creator/1/purchase"
                        },
                        {
                            type: "detail",
                            url: "http://example.com/creator/1/detail"
                        }
                    ],
                    thumbnail: {
                        path: "http://example.com/creator/1/thumbnail",
                        extension: "jpg"
                    },
                }

            const creator1Response = await createCreator(creatorReq);
            const creator1Corpo: CreatorRes = creator1Response.body;

            const creatorUpdateReq: CreatorReq =
                {
                    firstName: "Cassiano",
                    middleName: "Bussola",
                    lastName: "Iara",
                    suffix: "CBI",
                    fullName: "Cassiano Bussola Iara",
                    modified: new Date("2022-04-27T23:01:00Z"),
                    resourceURI: "http://example.com/creator/1",
                    urls: [
                        {
                            type: "purchase",
                            url: "http://example.com/creator/1/purchase"
                        },
                        {
                            type: "detail",
                            url: "http://example.com/creator/1/detail"
                        }
                    ],
                    thumbnail: {
                        path: "http://example.com/creator/1/thumbnail",
                        extension: "jpg"
                    },
                }

            const creatorUpdateResponse = await updateCreatorById(1, creatorUpdateReq);
            const creatorUpdateCorpo: CreatorRes = creatorUpdateResponse.body;

            deepStrictEqual(creatorUpdateResponse.statusCode, 200)
            notDeepStrictEqual(creatorUpdateCorpo.id, null);
            deepStrictEqual(creatorUpdateCorpo.id, 1);
            deepStrictEqual(creatorUpdateCorpo.firstName, creatorUpdateReq.firstName);
            deepStrictEqual(creatorUpdateCorpo.middleName, creatorUpdateReq.middleName);
            deepStrictEqual(creatorUpdateCorpo.lastName, creatorUpdateReq.lastName);
            deepStrictEqual(creatorUpdateCorpo.suffix, creatorUpdateReq.suffix);
            deepStrictEqual(creatorUpdateCorpo.fullName, creatorUpdateReq.fullName);
            deepStrictEqual(new Date(creatorUpdateCorpo.modified), creatorUpdateReq.modified);
            deepStrictEqual(creatorUpdateCorpo.resourceURI, creatorUpdateReq.resourceURI);
            deepStrictEqual(creatorUpdateCorpo.urls.length, 2);
            deepStrictEqual(creatorUpdateCorpo.urls[0].type, creatorUpdateReq.urls[0].type);
            deepStrictEqual(creatorUpdateCorpo.urls[0].url, creatorUpdateReq.urls[0].url);
            deepStrictEqual(creatorUpdateCorpo.thumbnail,
                `${creatorUpdateReq.thumbnail.path}.${creatorUpdateReq.thumbnail.extension}`);
            notDeepStrictEqual(creatorUpdateCorpo.editable, null);
            deepStrictEqual(creatorUpdateCorpo.editable, true);

            deepStrictEqual(creatorUpdateCorpo.id, 1);
            notDeepStrictEqual(creatorUpdateCorpo.firstName, creator1Corpo.firstName);
            notDeepStrictEqual(creatorUpdateCorpo.middleName, creator1Corpo.middleName);
            notDeepStrictEqual(creatorUpdateCorpo.lastName, creator1Corpo.lastName);
            notDeepStrictEqual(creatorUpdateCorpo.suffix, creator1Corpo.suffix);
            notDeepStrictEqual(creatorUpdateCorpo.fullName, creator1Corpo.firstName);
            notDeepStrictEqual(creatorUpdateCorpo.modified, creator1Corpo.modified);
            deepStrictEqual(creatorUpdateCorpo.resourceURI, creator1Corpo.resourceURI);
            deepStrictEqual(creatorUpdateCorpo.urls.length, 2);
            deepStrictEqual(creatorUpdateCorpo.urls[0].type, creator1Corpo.urls[0].type);
            deepStrictEqual(creatorUpdateCorpo.urls[0].url, creator1Corpo.urls[0].url);
            deepStrictEqual(creatorUpdateCorpo.thumbnail, creator1Corpo.thumbnail);
            deepStrictEqual(creatorUpdateCorpo.editable, creator1Corpo.editable);
        });
    });

    describe(`DELETE /creator`, () => {
        it('Deve deletar um creator', async () => {
            const creatorReqs: CreatorReq[] = [
                {
                    firstName: "Igor",
                    middleName: "Zauza",
                    lastName: "Bruno",
                    suffix: "IZB",
                    fullName: "Igor Zauza Bruno",
                    modified: new Date("2024-04-27T12:00:00Z"),
                    resourceURI: "http://example.com/creator/1",
                    urls: [
                        {
                            type: "detail",
                            url: "http://example.com/creator/1/detail"
                        },
                        {
                            type: "purchase",
                            url: "http://example.com/creator/1/purchase"
                        }
                    ],
                    thumbnail: {
                        path: "http://example.com/creator/1/thumbnail",
                        extension: "jpg"
                    },
                },
                {
                    firstName: "Cassiano",
                    middleName: "Bussola",
                    lastName: "Iara",
                    suffix: "CBI",
                    fullName: "Cassiano Bussola Iara",
                    modified: new Date("2022-04-27T23:01:00Z"),
                    resourceURI: "http://example.com/creator/2",
                    urls: [
                        {
                            type: "detail",
                            url: "http://example.com/creator/2/detail"
                        },
                        {
                            type: "purchase",
                            url: "http://example.com/creator/2/purchase"
                        }
                    ],
                    thumbnail: {
                        path: "http://example.com/creator/2/thumbnail",
                        extension: "png"
                    },
                }
            ]

            const createdList: CreatorRes[] = [];
            for (const creator of creatorReqs) {
                createdList.push((await createCreator(creator)).body);
            }

            deepStrictEqual(createdList.length, 2);
            const deleted = await deleteCreatorById(1);

            const allCreator = await getAllCreator();
            const lista: CreatorRes[] = allCreator.body;
            deepStrictEqual(deleted.statusCode, 204)
            deepStrictEqual(lista.length, 1);
        });
    });

})