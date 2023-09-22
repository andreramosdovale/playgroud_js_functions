// somar(3)(4)(5)
function somar(valor1) {
  return (valor2) => {
    return (valor3) => {
      return valor1 + valor2 + valor3;
    };
  };
}

// calcular(3)(7)(fn)
function calcular(valor1) {
  return (valor2) => {
    return (fn) => {
      if (typeof fn === 'function') {
        return fn(valor1, valor2);
      }
    };
  };
}
