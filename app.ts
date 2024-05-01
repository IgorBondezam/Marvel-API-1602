import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { routes } from './routes';
import {createIdentifiers} from "./src/utils/configuration/db-configuration.utils";

class App {
    public express: express.Application;
    
    public constructor() {
        this.express = express();
        dotenv.config();
        this.database();
        this.middleware();
        this.routes();
    }

    public middleware(): void {
        this.express.use(express.json());
    }

    public async database() {
        try {
            if(process.env.NODE_ENV === 'test'){
                return;
            }
            mongoose.set("strictQuery", true);
            await mongoose.connect(`mongodb://${process.env.URL_DATABASE}`);
            console.log("Connect database sucess");
            await createIdentifiers();
        } catch (error) {
            console.error('Cannot connect to database, error:', error);
        }
    }

    public routes(): void {
        this.express.use(routes);
    }
}

export default new App().express;