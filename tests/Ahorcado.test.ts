import { describe, it, expect } from "vitest";
import { Ahorcado } from "../src/domain/Ahorcado.ts";

describe("Ahorcado - Inicializar partida", () => {
  it("debe enmascarar la palabra inicial con guiones bajos", () => {
    // 1. Inicializamos el juego con una palabra determinista
    const juego = new Ahorcado("GATO");

    // 2. Verificamos que el método devuelva la palabra oculta con espacios
    expect(juego.palabraEnmascarada()).toBe("_ _ _ _");
  });
});

it("revela todas las ocurrencias de la letra acertada", () => {
  const juego = new Ahorcado("ALA");
  juego.adivinar("A");
  expect(juego.palabraEnmascarada()).toBe("A _ A");
});

it('debería restar una vida si se adivina una letra que no está en la palabra', () => {
  // Arrange: Preparamos la partida (inicia con 6 vidas)
  const ahorcado = new Ahorcado('AGIL');

  // Act: Intentamos adivinar una letra que no existe
  ahorcado.adivinar('E');

  // Assert: Verificamos que las vidas hayan bajado a 5
  expect(ahorcado.vidas()).toBe(5);
});