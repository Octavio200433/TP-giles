# language: es
Característica: AT 7 — Entrada inválida

  Escenario: Ingresar un carácter que no es letra es rechazado y no afecta el estado
    Dado una partida con la palabra "CASA"
    Cuando el jugador adivina la letra "1"
    Entonces se ve la palabra "____"
    Y se ven 6 vidas