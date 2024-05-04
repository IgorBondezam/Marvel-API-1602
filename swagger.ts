export const swaggerOptions = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "MARVEL API =- Super Saga - 1602 (2003 - 2004) -= ",
        version: "0.1.0",
        description:
          "Está é uma API realizada em Express.js que será usada como base para outros projetos Node.js",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Igor Bondezam | Matheus Zauza | Bruno Moreno",
          url: "https://igorbondezam.github.io/Sobre-Igor-Bondezam/",
          email: "igorbfraca@gmail.com | - | -",
        }
      },
      servers: [
        {
          url: `http://localhost:${process.env.PORT_APP}`,
        },
      ],
    },
    apis: ["./routes.ts"],
  };