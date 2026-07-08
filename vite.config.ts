import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "node",
        include: ["tests/**/*.test.ts"],
        coverage: {
            provider: "v8",
            reporter: ["text", "lcov"], // 'lcov' es el que genera el archivo necesario para Sonar
        },
    },
});