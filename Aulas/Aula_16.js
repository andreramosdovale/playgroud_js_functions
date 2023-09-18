import {bomDia, boaTarde, boaNoite} from './Helpers/Helpers.js';

// 1 - Passar uma function como parametro para outra

function executarQualquerCoisa(fn) {
  if (typeof fn === 'function') {
    fn();
  }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);
executarQualquerCoisa(boaNoite);

// 2 - Retornar uma function a partir de outra

function potencia(base) {
  return function(exp) {
    return Math.pow(base, exp);
  };
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));
console.log(potencia(2)(4));
