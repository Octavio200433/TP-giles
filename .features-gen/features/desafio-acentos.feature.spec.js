// Generated from: features\desafio-acentos.feature
import { test } from "playwright-bdd";

test.describe('Soporte de acentos y caracteres especiales', () => {

  test('El jugador ingresa una letra sin tilde para una palabra que sí tiene tilde', async ({ Given, When, Then, And, page }) => { 
    await Given('una partida con la palabra "ÁRBOL"', null, { page }); 
    await When('el jugador adivina la letra "A"', null, { page }); 
    await Then('se ve la palabra "Á _ _ _ _"', null, { page }); 
    await And('se ven 6 vidas', null, { page }); 
  });

  test('El juego soporta correctamente la letra Ñ', async ({ Given, When, Then, And, page }) => { 
    await Given('una partida con la palabra "NIÑO"', null, { page }); 
    await When('el jugador adivina la letra "Ñ"', null, { page }); 
    await Then('se ve la palabra "_ _ Ñ _"', null, { page }); 
    await And('se ven 6 vidas', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\desafio-acentos.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Dado una partida con la palabra \"ÁRBOL\"","stepMatchArguments":[{"group":{"start":27,"value":"\"ÁRBOL\"","children":[{"start":28,"value":"ÁRBOL","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"Cuando el jugador adivina la letra \"A\"","stepMatchArguments":[{"group":{"start":28,"value":"\"A\"","children":[{"start":29,"value":"A","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Entonces se ve la palabra \"Á _ _ _ _\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Á _ _ _ _\"","children":[{"start":18,"value":"Á _ _ _ _","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Y se ven 6 vidas","stepMatchArguments":[{"group":{"start":7,"value":"6"},"parameterTypeName":"int"}]}]},
  {"pwTestLine":13,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Dado una partida con la palabra \"NIÑO\"","stepMatchArguments":[{"group":{"start":27,"value":"\"NIÑO\"","children":[{"start":28,"value":"NIÑO","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"Cuando el jugador adivina la letra \"Ñ\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Ñ\"","children":[{"start":29,"value":"Ñ","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Entonces se ve la palabra \"_ _ Ñ _\"","stepMatchArguments":[{"group":{"start":17,"value":"\"_ _ Ñ _\"","children":[{"start":18,"value":"_ _ Ñ _","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Y se ven 6 vidas","stepMatchArguments":[{"group":{"start":7,"value":"6"},"parameterTypeName":"int"}]}]},
]; // bdd-data-end