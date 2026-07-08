import { defineConfig } from "vitest/config";

export default defineConfig({
    // Seteamos la ruta base para que GitHub Pages encuentre los assets correctamente
    base: "/TP-agilesG1/",
    test: {
        environment: "node",
        include: ["tests/**/*.test.ts"],
        coverage: {
            provider: "v8",
            reporter: ["text", "lcov"], // 'lcov' es el que genera el archivo necesario para Sonar
        },
    },
});