# language: es
Característica: Soporte de acentos y caracteres especiales

  Escenario: El jugador ingresa una letra sin tilde para una palabra que sí tiene tilde
    Dado una partida con la palabra "ÁRBOL"
    Cuando el jugador adivina la letra "A"
    Entonces se ve la palabra "Á _ _ _ _"
    Y se ven 6 vidas

  Escenario: El juego soporta correctamente la letra Ñ
    Dado una partida con la palabra "NIÑO"
    Cuando el jugador adivina la letra "Ñ"
    Entonces se ve la palabra "_ _ Ñ _"
    Y se ven 6 vidas