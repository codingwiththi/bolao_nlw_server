import Fastify from "fastify";

async function bootstrap() {
    const app = Fastify({
        logger: true,
    });

    app.get("/bets/count", () => {
        return { count: 20 };
    });

    await app.listen({ port: 3333 });
}

bootstrap();
