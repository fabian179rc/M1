'use strict'

function BinarioADecimal(num) {

    let array = num.toString().split("").reverse();
    let arrayDecimal = [];
    let index = 0;
    let decimal = 0;
  
    array.forEach((n) => {
      arrayDecimal.push(n * Math.pow(2, index));
      index++; 
    });
  
    arrayDecimal.forEach((n) => {
      decimal += n;
    });
  
    return decimal;
  }



function DecimalABinario(num) {
  // tu codigo aca
  /*En cuanto al pasaje de decimal a binario, debemos dividir por dos y quedarnos con el resto, dicho resto va a ser quien nos marque el binario involucrado.

Por ejemplo:
Realizamos la operación inversa, convertimos 21 en binario.

21/2 = 10 (resto 1)
10/2 = 5 (resto 0)
5/2 = 2 (resto 1)
2/2 = 1 (resto 0)
1/2 = 0 (resto 1)

Ahora leemos de abajo hacia arriba los restos, al concatenarlos, obtendremos nuestra solución en binario 10101.
*/
let adividir = num;
let binario = [];

while (adividir != 0) {
  binario.push(adividir % 2)
  adividir = Math.floor(adividir / 2);

}

return binario.reverse().join("");

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}