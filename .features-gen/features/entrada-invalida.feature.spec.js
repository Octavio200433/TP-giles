// Generated from: features\entrada-invalida.feature
import { test } from "playwright-bdd";

test.describe('AT 7 — Entrada inválida', () => {

  test('Ingresar un carácter que no es letra es rechazado y no afecta el estado', async ({ Given, When, Then, And, page }) => { 
    await Given('una partida con la palabra "CASA"', null, { page }); 
    await When('el jugador adivina la letra "1"', null, { page }); 
    await Then('se ve la palabra "____"', null, { page }); 
    await And('se ven 6 vidas', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\entrada-invalida.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Dado una partida con la palabra \"CASA\"","stepMatchArguments":[{"group":{"start":27,"value":"\"CASA\"","children":[{"start":28,"value":"CASA","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"Cuando el jugador adivina la letra \"1\"","stepMatchArguments":[{"group":{"start":28,"value":"\"1\"","children":[{"start":29,"value":"1","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Entonces se ve la palabra \"____\"","stepMatchArguments":[{"group":{"start":17,"value":"\"____\"","children":[{"start":18,"value":"____","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Y se ven 6 vidas","stepMatchArguments":[{"group":{"start":7,"value":"6"},"parameterTypeName":"int"}]}]},
]; // bdd-data-end