import { Ahorcado } from "../domain/Ahorcado";

export function mountApp(juego: Ahorcado) {
  const appDiv = document.getElementById("app");

  if (appDiv) {
    appDiv.innerHTML = `
      <h1>El Ahorcado</h1>
      
      <div data-testid="word">${juego.palabraEnmascarada()}</div>
      
      <p>Vidas: <span data-testid="lives">6</span></p>
    `;
  }
}