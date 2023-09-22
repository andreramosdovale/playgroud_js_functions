// arrow functios

const felizNatal = () => console.log('feliz Natal!!');
felizNatal();

const saudacao = (nome) => `fala ${nome}, blz!?!`;

console.log(saudacao('andre'));

const somar = (...numeros) => {
  console.log(Array.isArray(numeros));

  let total = 0;
  for (const n of numeros) {
    total += n;
  }

  return total;
};

console.log(somar(1, 2, 3));
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9));

const potencia = (base) => (exp) => Math.pow(base, exp);
console.log(potencia(2)(10));
