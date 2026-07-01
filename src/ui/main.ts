// src/ui/main.ts
import { Ahorcado } from "../domain/Ahorcado";

export function mountApp(juego: Ahorcado) {
  const app = document.querySelector<HTMLDivElement>('#app')!;

  // Función para dibujar la pantalla
  const render = () => {
    app.innerHTML = `
      <h1>Juego del Ahorcado</h1>
      <h2 data-testid="word">${juego.palabraEnmascarada()}</h2>
      <p>Vidas: <span data-testid="lives">${juego.vidas()}</span></p>
      
      <input type="text" id="letra-input" maxlength="1" placeholder="Letra" autofocus />
    `;

    // Capturamos el evento de apretar Enter en el input
    const input = document.querySelector<HTMLInputElement>('#letra-input')!;
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && input.value) {
        juego.adivinar(input.value); // Llamamos a tu lógica
        render(); // Volvemos a dibujar la pantalla actualizada
      }
    });
  };

  // Dibujo inicial
  render();
}