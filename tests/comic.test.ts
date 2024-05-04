import { deepStrictEqual } from "node:assert";
import { ComicReq } from "../src/dto/comic-req.dto";
import * as request from 'supertest'
import app from "../app";
import { createTestDb, resetDataBase } from "../src/utils/configuration/db-configuration.utils";
import { expect } from "@jest/globals";
import { notDeepStrictEqual } from "assert";
import { ComicRes } from "../src/dto/comic-res.dto";


describe('API (Usuarios, Tarefas, Categorias) Workflow', () => {

    beforeAll(async () => {
        await createTestDb();
    })

    beforeEach(async () => {
        await resetDataBase()
    })

    async function getAllComic() {
        return await request.default(app).get('/comics');
    }

    async function getComicById(id: number) {
        return await request.default(app).get(`/comic/${id}`);
    }

    async function createComic(comicReq: ComicReq) {
        return await request.default(app).post('/comic').send(comicReq);
    }

    async function updateComicById(id: number, comicReq: ComicReq) {
        return await request.default(app).put(`/comic/${id}`).send(comicReq);
    }

    async function deleteComicById(id: number) {
        return await request.default(app).delete(`/comic/${id}`);
    }

    describe(`GET /comics`, () => {
        it('Deve trazer todos os comics cadastrados', async () => {
            const comicReqs: ComicReq[] = [
                {
                    "digitalId": 321,
                    "title": "Teste 1",
                    "issueNumber": 1,
                    "variantDescription": "Descrição variante da edição 1",
                    "description": "Descrição da edição 1",
                    "modified": new Date("2024-05-04T12:00:00Z"),
                    "isbn": "978-1-12345-678-9",
                    "upc": "123456789012",
                    "diamondCode": "MAR180012",
                    "ean": "1234567890123",
                    "issn": "1234-5678",
                    "format": "Comic",
                    "textObjects": [
                        {
                            "type": "sinopse 1",
                            "language": "en",
                            "text": "This is a synopsis of yet another comic. 1"
                        }
                    ],
                    "resourceURI": "http://example.com/comics/123456",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://example.com/comics/987654/detail"
                        },
                        {
                            "type": "purchase",
                            "url": "http://example.com/comics/987654/purchase"
                        }
                    ],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": new Date("2024-05-04T00:00:00Z")
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 4.30
                        },
                        {
                            "type": "digitalPrice",
                            "price": 2.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://example.com/thumbnails/123456",
                        "extension": "jpg"
                    },
                    "images": [
                        {
                            "path": "http://example.com/images/123456",
                            "extension": "jpg"
                        }
                    ]
                },
                {
                    "digitalId": 123,
                    "title": "Teste 2",
                    "issueNumber": 2,
                    "variantDescription": "Descrição variante da edição 2",
                    "description": "Descrição da edição 2",
                    "modified": new Date("2024-05-03T12:00:00Z"),
                    "isbn": "978-1-98765-432-1",
                    "upc": "987654321098",
                    "diamondCode": "APR180013",
                    "ean": "9876543210987",
                    "issn": "9876-5432",
                    "format": "Graphic Novel",
                    "textObjects": [
                        {
                            "type": "sinopse 2",
                            "language": "en",
                            "text": "This is a synopsis of yet another comic. 2"
                        }
                    ],
                    "resourceURI": "http://example.com/comics/987654",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://example.com/comics/987654/detail"
                        },
                        {
                            "type": "purchase",
                            "url": "http://example.com/comics/987654/purchase"
                        }
                    ],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": new Date("2024-05-03T00:00:00Z")
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 7.50
                        },
                        {
                            "type": "digitalPrice",
                            "price": 3.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://example.com/thumbnails/987654",
                        "extension": "png"
                    },
                    "images": [
                        {
                            "path": "http://example.com/images/987654",
                            "extension": "png"
                        }
                    ]
                },
                {
                    "digitalId": 213,
                    "title": "Teste 3",
                    "issueNumber": 3,
                    "variantDescription": "Descrição variante da edição 3",
                    "description": "Descrição da edição 3",
                    "modified": new Date("2024-05-02T12:00:00Z"),
                    "isbn": "978-1-55555-666-6",
                    "upc": "555666777888",
                    "diamondCode": "MAY180014",
                    "ean": "5556667778889",
                    "issn": "5555-6666",
                    "format": "Trade Paperback",
                    "textObjects": [
                        {
                            "type": "sinopse 3",
                            "language": "en",
                            "text": "This is a synopsis of yet another comic. 3"
                        }
                    ],
                    "resourceURI": "http://example.com/comics/555666",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://example.com/comics/555666/detail"
                        },
                        {
                            "type": "purchase",
                            "url": "http://example.com/comics/555666/purchase"
                        }
                    ],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": new Date("2024-05-02T00:00:00Z")
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 5.99
                        },
                        {
                            "type": "digitalPrice",
                            "price": 4.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://example.com/thumbnails/555666",
                        "extension": "jpeg"
                    },
                    "images": [
                        {
                            "path": "http://example.com/images/555666",
                            "extension": "jpeg"
                        }
                    ]
                }

            ]
            for (const comic of comicReqs) {
                await createComic(comic)
            }

            const reply = await getAllComic();
            const lista: ComicRes[] = reply.body;
            deepStrictEqual(reply.statusCode, 200)
            deepStrictEqual(lista.length, 3);
        });
    });

    describe(`GET /character/:id`, () => {
        it('Deve trazer o character pelo id', async () => {
            const comicReqs: ComicReq[] = [
                {
                    "digitalId": 321,
                    "title": "Teste 1",
                    "issueNumber": 1,
                    "variantDescription": "Descrição variante da edição 1",
                    "description": "Descrição da edição 1",
                    "modified": new Date("2024-05-04T12:00:00Z"),
                    "isbn": "978-1-12345-678-9",
                    "upc": "123456789012",
                    "diamondCode": "MAR180012",
                    "ean": "1234567890123",
                    "issn": "1234-5678",
                    "format": "Comic",
                    "textObjects": [
                        {
                            "type": "sinopse 1",
                            "language": "en",
                            "text": "This is a synopsis of yet another comic. 1"
                        }
                    ],
                    "resourceURI": "http://example.com/comics/123456",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://example.com/comics/987654/detail"
                        },
                        {
                            "type": "purchase",
                            "url": "http://example.com/comics/987654/purchase"
                        }
                    ],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": new Date("2024-05-04T00:00:00Z")
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 4.30
                        },
                        {
                            "type": "digitalPrice",
                            "price": 2.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://example.com/thumbnails/123456",
                        "extension": "jpg"
                    },
                    "images": [
                        {
                            "path": "http://example.com/images/123456",
                            "extension": "jpg"
                        }
                    ]
                },
                {
                    "digitalId": 123,
                    "title": "Teste 2",
                    "issueNumber": 2,
                    "variantDescription": "Descrição variante da edição 2",
                    "description": "Descrição da edição 2",
                    "modified": new Date("2024-05-03T12:00:00Z"),
                    "isbn": "978-1-98765-432-1",
                    "upc": "987654321098",
                    "diamondCode": "APR180013",
                    "ean": "9876543210987",
                    "issn": "9876-5432",
                    "format": "Graphic Novel",
                    "textObjects": [
                        {
                            "type": "sinopse 2",
                            "language": "en",
                            "text": "This is a synopsis of yet another comic. 2"
                        }
                    ],
                    "resourceURI": "http://example.com/comics/987654",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://example.com/comics/987654/detail"
                        },
                        {
                            "type": "purchase",
                            "url": "http://example.com/comics/987654/purchase"
                        }
                    ],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": new Date("2024-05-03T00:00:00Z")
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 7.50
                        },
                        {
                            "type": "digitalPrice",
                            "price": 3.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://example.com/thumbnails/987654",
                        "extension": "png"
                    },
                    "images": [
                        {
                            "path": "http://example.com/images/987654",
                            "extension": "png"
                        }
                    ]
                }
            ]

            for (const character of comicReqs) {
                await createComic(character)
            }

            const comic1Response = await getComicById(1);
            const comic1Corpo: ComicRes = comic1Response.body;
            deepStrictEqual(comic1Response.statusCode, 200)
            deepStrictEqual(comic1Corpo.title, comicReqs[0].title);
            deepStrictEqual(comic1Corpo.digitalId, comicReqs[0].digitalId);
            deepStrictEqual(comic1Corpo.issueNumber, comicReqs[0].issueNumber);
            deepStrictEqual(comic1Corpo.description, comicReqs[0].description);
            deepStrictEqual(comic1Corpo.variantDescription, comicReqs[0].variantDescription);
            deepStrictEqual(comic1Corpo.isbn, comicReqs[0].isbn);
            deepStrictEqual(comic1Corpo.upc, comicReqs[0].upc);
            deepStrictEqual(comic1Corpo.diamondCode, comicReqs[0].diamondCode);
            deepStrictEqual(comic1Corpo.ean, comicReqs[0].ean);
            deepStrictEqual(comic1Corpo.issn, comicReqs[0].issn);
            deepStrictEqual(comic1Corpo.format, comicReqs[0].format);
            deepStrictEqual(new Date(comic1Corpo.modified), comicReqs[0].modified);
            deepStrictEqual(comic1Corpo.resourceURI, comicReqs[0].resourceURI);
            deepStrictEqual(comic1Corpo.urls.length, 2);
            deepStrictEqual(comic1Corpo.urls[0].type, comicReqs[0].urls[0].type);
            deepStrictEqual(comic1Corpo.urls[0].url, comicReqs[0].urls[0].url);
            deepStrictEqual(comic1Corpo.thumbnail,
                `${comicReqs[0].thumbnail.path}.${comicReqs[0].thumbnail.extension}`);

            const comic2Response = await getComicById(2);
            const comic2Corpo: ComicRes = comic2Response.body;
            deepStrictEqual(comic2Response.statusCode, 200)
            expect(comic2Corpo.title).not.toEqual(comic2Corpo.title);
            expect(comic2Corpo.digitalId).not.toEqual(comic2Corpo.digitalId);
            expect(comic2Corpo.issueNumber).not.toEqual(comic2Corpo.issueNumber);
            expect(comic2Corpo.description).not.toEqual(comic2Corpo.description);
            expect(comic2Corpo.variantDescription).not.toEqual(comic2Corpo.variantDescription);
            expect(comic2Corpo.isbn).not.toEqual(comic2Corpo.isbn);
            expect(comic2Corpo.upc).not.toEqual(comic2Corpo.upc);
            expect(comic2Corpo.diamondCode).not.toEqual(comic2Corpo.diamondCode);
            expect(comic2Corpo.ean).not.toEqual(comic2Corpo.ean);
            expect(comic2Corpo.issn).not.toEqual(comic2Corpo.issn);
            expect(comic2Corpo.format).not.toEqual(comic2Corpo.format);
            expect(comic2Corpo.modified).not.toEqual(comic2Corpo.modified);
            expect(comic2Corpo.resourceURI).not.toEqual(comic2Corpo.resourceURI);
            expect(comic2Corpo.urls.length).not.toEqual(1);
            expect(comic2Corpo.urls[0].type).not.toEqual(comic2Corpo.urls[0].type);
            expect(comic2Corpo.urls[0].url).not.toEqual(comic2Corpo.urls[0].url);
            expect(comic2Corpo.thumbnail).not.toEqual(comic2Corpo.thumbnail);
        });
    });

//     describe(`POST /character`, () => {
//         it('Deve salvar um character', async () => {
//             const comicReq: ComicReq =
//             {
//                 "digitalId": 321,
//                 "title": "Teste 1",
//                 "issueNumber": 1,
//                 "variantDescription": "Descrição variante da edição 1",
//                 "description": "Descrição da edição 1",
//                 "modified": new Date("2024-05-04T12:00:00Z"),
//                 "isbn": "978-1-12345-678-9",
//                 "upc": "123456789012",
//                 "diamondCode": "MAR180012",
//                 "ean": "1234567890123",
//                 "issn": "1234-5678",
//                 "format": "Comic",
//                 "textObjects": [
//                     {
//                         "type": "sinopse 1",
//                         "language": "en",
//                         "text": "This is a synopsis of yet another comic. 1"
//                     }
//                 ],
//                 "resourceURI": "http://example.com/comics/123456",
//                 "urls": [
//                     {
//                         "type": "detail",
//                         "url": "http://example.com/comics/987654/detail"
//                     },
//                     {
//                         "type": "purchase",
//                         "url": "http://example.com/comics/987654/purchase"
//                     }
//                 ],
//                 "dates": [
//                     {
//                         "type": "onsaleDate",
//                         "date": new Date("2024-05-04T00:00:00Z")
//                     }
//                 ],
//                 "prices": [
//                     {
//                         "type": "printPrice",
//                         "price": 4.30
//                     },
//                     {
//                         "type": "digitalPrice",
//                         "price": 2.99
//                     }
//                 ],
//                 "thumbnail": {
//                     "path": "http://example.com/thumbnails/123456",
//                     "extension": "jpg"
//                 },
//                 "images": [
//                     {
//                         "path": "http://example.com/images/123456",
//                         "extension": "jpg"
//                     }
//                 ]
//             }

//             const comic1Response = await createComic(comicReq);
//             const comic1Corpo: ComicRes = comic1Response.body;
//             deepStrictEqual(comic1Response.statusCode, 201)
//             notDeepStrictEqual(comic1Corpo.id, null);
//             deepStrictEqual(comic1Corpo.id, 1);
//             deepStrictEqual(comic1Corpo.title, comicReq.title);
//             deepStrictEqual(comic1Corpo.description, comicReq.description);
//             deepStrictEqual(new Date(comic1Corpo.modified), comicReq.modified);
//             deepStrictEqual(comic1Corpo.resourceURI, comicReq.resourceURI);
//             deepStrictEqual(comic1Corpo.urls.length, 1);
//             deepStrictEqual(comic1Corpo.urls[0].type, comicReq.urls[0].type);
//             deepStrictEqual(comic1Corpo.urls[0].url, comicReq.urls[0].url);
//             deepStrictEqual(comic1Corpo.thumbnail,
//                 `${comicReq.thumbnail.path}.${comicReq.thumbnail.extension}`);
//             notDeepStrictEqual(comic1Corpo.editable, null);
//             deepStrictEqual(comic1Corpo.editable, true);
//         });
//     });

//     describe(`PUT /comic`, () => {
//         it('Deve atualizar um comic', async () => {
//             const comicReq: ComicReq =
//             {
//                 name: "Teste 1",
//                 description: "Faz os testes nível 1",
//                 modified: new Date("2024-05-01T12:15:28Z"),
//                 resourceURI: "https://example.com/comic/1",
//                 urls: [
//                     { type: "detail", url: "https://example.com/comic/1/details" },
//                 ],
//                 thumbnail: { path: "https://example.com/thumbnails/1", extension: "jpg" }
//             }

//             const comic1Response = await createComic(comicReq);
//             const comic1Corpo: ComicRes = comic1Response.body;

//             const comicUpdateReq: ComicReq =
//             {
//                 name: "Teste 51",
//                 description: "Faz os testes nível 51 ATUALIZADO !!!!!",
//                 modified: new Date("2020-05-01T12:15:28Z"),
//                 resourceURI: "https://example.com/comic/51",
//                 urls: [
//                     { type: "detail", url: "https://example.com/comic/51/details" },
//                 ],
//                 thumbnail: { path: "https://example.com/thumbnails/51", extension: "png" }
//             }

//             const comicUpdateResponse = await updateComicById(1, comicUpdateReq);
//             const comicUpdateCorpo: ComicRes = comicUpdateResponse.body;

//             deepStrictEqual(comicUpdateResponse.statusCode, 200)
//             notDeepStrictEqual(comicUpdateCorpo.id, null);
//             deepStrictEqual(comicUpdateCorpo.id, 1);
//             deepStrictEqual(comicUpdateCorpo.name, comicUpdateReq.name);
//             deepStrictEqual(comicUpdateCorpo.description, comicUpdateReq.description);
//             deepStrictEqual(new Date(comicUpdateCorpo.modified), comicUpdateReq.modified);
//             deepStrictEqual(comicUpdateCorpo.resourceURI, comicUpdateReq.resourceURI);
//             deepStrictEqual(comicUpdateCorpo.urls.length, 1);
//             deepStrictEqual(comicUpdateCorpo.urls[0].type, comicUpdateReq.urls[0].type);
//             deepStrictEqual(comicUpdateCorpo.urls[0].url, comicUpdateReq.urls[0].url);
//             deepStrictEqual(comicUpdateCorpo.thumbnail,
//                 `${comicUpdateReq.thumbnail.path}.${comicUpdateReq.thumbnail.extension}`);
//             notDeepStrictEqual(comicUpdateCorpo.editable, null);
//             deepStrictEqual(comicUpdateCorpo.editable, true);

//             deepStrictEqual(comicUpdateCorpo.id, comic1Corpo.id);
//             notDeepStrictEqual(comicUpdateCorpo.name, comic1Corpo.name);
//             notDeepStrictEqual(comicUpdateCorpo.description, comic1Corpo.description);
//             notDeepStrictEqual(new Date(comicUpdateCorpo.modified), comic1Corpo.modified);
//             notDeepStrictEqual(comicUpdateCorpo.resourceURI, comic1Corpo.resourceURI);
//             deepStrictEqual(comicUpdateCorpo.urls[0].type, comic1Corpo.urls[0].type);
//             notDeepStrictEqual(comicUpdateCorpo.urls[0].url, comic1Corpo.urls[0].url);
//             notDeepStrictEqual(comicUpdateCorpo.thumbnail, comic1Corpo.thumbnail);
//             deepStrictEqual(comicUpdateCorpo.editable, comic1Corpo.editable);
//         });
//     });

//     describe(`DELETE /comic`, () => {
//         it('Deve deletar um comic', async () => {
//             const comicReqs: ComicReq[] = [
//                 {
//                     name: "Teste 1",
//                     description: "Faz os testes nível 1",
//                     modified: new Date("2024-05-01T12:15:28Z"),
//                     resourceURI: "https://example.com/comic/1",
//                     urls: [
//                         { type: "detail", url: "https://example.com/comic/1/details" },
//                     ],
//                     thumbnail: { path: "https://example.com/thumbnails/1", extension: "jpg" }
//                 },
//                 {
//                     name: "Teste 2",
//                     description: "Faz os testes nível 2",
//                     modified: new Date("2024-05-02T23:59:59Z"),
//                     resourceURI: "https://example.com/comic/2",
//                     urls: [
//                         { type: "purchase", url: "https://example.com/comic/2/purchase" },
//                         { type: "detail", url: "https://example.com/comic/2/details" }
//                     ],
//                     thumbnail: { path: "https://example.com/thumbnails/2", extension: "jpg" }
//                 }
//             ]

//             const createdList: ComicRes[] = [];
//             for (const comic of comicReqs) {
//                 createdList.push((await createComic(comic)).body);
//             }

//             deepStrictEqual(createdList.length, 2);
//             await deleteComicById(1);

//             const deleted = await getAllComic();
//             const lista: ComicRes[] = deleted.body;
//             deepStrictEqual(deleted.statusCode, 204)
//             deepStrictEqual(lista.length, 1);
//         });
//     });

})