import app from './app'
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { swaggerOptions } from './swagger';

export default function main() {
    const specs = swaggerJsdoc(swaggerOptions);
    app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(specs)
    );
    app.listen(3000, 'localhost', () => {
        console.log('Server running at port 3000');
    });
}

main();