export class Ahorcado {
  private palabra: string;
  private letrasAdivinadas: string[] = [];
  // Asegurate de tener la variable de vidas que ya hizo tu compañero
  private vidasActuales: number = 6;

  constructor(palabra: string) {
    this.palabra = palabra;
  }

  // Agregá el método nuevo
  adivinar(letra: string): void {
    this.letrasAdivinadas.push(letra.toUpperCase());
  }

  // Modificá este método para que evalúe si la letra fue adivinada
  palabraEnmascarada(): string {
    return this.palabra
      .split("")
      .map(letra => this.letrasAdivinadas.includes(letra.toUpperCase()) ? letra : "_")
      .join(" ");
  }

  vidas(): number {
    return this.vidasActuales;
  }
}