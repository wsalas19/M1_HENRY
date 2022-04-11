'use strict'


function BinarioADecimal(num) {
  // tu codigo aca
  let arrayBinario = num.split("").reverse().map(a => Number(a));
  let resultado = [];
  for (let i = 0; i < arrayBinario.length; i++) {
    resultado.push(arrayBinario[i] * Math.pow(2, i))
  }
  return resultado.reduce((a, b) => (a + b))
}

function DecimalABinario(num) {
  // tu codigo aca
  let binario = [];
  let divisor = num;

  while (divisor !== 0) {
    binario.push(Math.floor(divisor % 2));
    divisor = Math.floor(divisor / 2);
  }

  return binario.reverse().join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
