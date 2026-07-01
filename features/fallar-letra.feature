# language: es
Característica: Fallar letra
Como jugador
Quiero que mis vidas disminuyan al ingresar una letra incorrecta
Para saber cuántos intentos me quedan antes de perder

Escenario: El jugador ingresa una letra que no pertenece a la palabra
Dado una partida con la palabra "AGIL"
Cuando el jugador adivina la letra "E"
Entonces se ve la palabra "____"
Y se ven 5 vidas