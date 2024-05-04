import * as request from "supertest";
import app from "../app";
import {createTestDb} from "../src/utils/configuration/db-configuration.utils";

export async function startPopualtion(){
    await createTestDb();
    for(let i = 0; i<200; i++){
        await createCharacter();
    }
    console.log("Database configured - Use npm cannon:start to execute the test!");
}
async function createCharacter() {
    const characterReq = {
        name: "Teste 1 ",
        description: "Faz os testes nível 1",
        modified: new Date("2024-05-01T12:15:28Z"),
        resourceURI: "https://example.com/character/1",
        urls: [
            { type: "detail", url: "https://example.com/character/1/details" },
            { type: "purchase", url: "https://example.com/character/1/purchase" }
        ],
        thumbnail: { path: "https://example.com/thumbnails/1", extension: "jpg" }
    }
    return await request.default(app).post('/character').send(characterReq);
}