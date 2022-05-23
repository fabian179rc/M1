'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

const suma = 0;

for (let i = 0; i < num.length; i++) {
  suma += +num[i]*2**(num.length-1-i)  
}
return suma;
}

function DecimalABinario(num) {
  // tu codigo aca

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}