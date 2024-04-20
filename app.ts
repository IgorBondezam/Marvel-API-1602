import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { routes } from './routes';

class App {
    public express: express.Application
    
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
            mongoose.set("strictQuery", true);
            await mongoose.connect(`mongodb://${process.env.URL_DATABASE}`);
            console.log("Connect database sucess");
        } catch (error) {
            console.error('Cannot connect to database, error:', error);
        }
    }

    public routes(): void {
        this.express.use(routes);
    }
}

export default new App().express;