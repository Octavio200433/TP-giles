import { Ahorcado } from "../domain/Ahorcado";
import { mountApp } from "./main.ts";

// 1. Capturamos la palabra de la URL (?word=GATO)
const urlParams = new URLSearchParams(window.location.search);
const palabraSecreta = urlParams.get("word") || "GATO"; // Si no viene, usa una por defecto

// 2. Instanciamos el objeto real del dominio
const juego = new Ahorcado(palabraSecreta);

// 3. Montamos la interfaz pasándole el juego
mountApp(juego);