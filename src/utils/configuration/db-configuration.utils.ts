import identifierRepository from "../../repository/identifier.repository";
import mongoose from "mongoose";

export async function createIdentifiers() {
    const identifier = await identifierRepository.getIdentifiers();
    if(identifier === null) {
        await identifierRepository.create()
    }
}

export async function createTestDb(){
    try{
        mongoose.set("strictQuery", true);
        await mongoose.connect(process.env.URL_DATABASETEST);
        console.log("Connect test database sucess");
        await createIdentifiers();
    } catch (error) {
        console.error('Cannot connect to database, error:', error);
    }
}

export async function resetDataBase(){
    const collections = mongoose.connection.collections;
    await Promise.all(Object.values(collections).map((collection) =>
            collection.deleteMany({})
    ));
    await createIdentifiers();
}