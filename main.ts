import app from './app'
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { swaggerOptions } from './swagger';

export default function main() {
    const specs = swaggerJsdoc(swaggerOptions);
    app.use(
        `/${process.env.URL_DOC}`,
        swaggerUi.serve,
        swaggerUi.setup(specs)
    );
    app.listen(Number.parseInt(process.env.PORT_APP), 'localhost', () => {
        console.log(`Server running at port ${process.env.PORT_APP}`);
    });
}

main();