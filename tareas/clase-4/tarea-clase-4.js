// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

for(let i = 3; i <= 22; i += 3){
  console.log(i);
}

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

let decrementador = 10;

while (decrementador >= 1){
  console.log(decrementador);
  decrementador--;
}

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

for(let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

function calcularPromedio(arr) {
  let contador = 0;
  let total = 0;

  while (contador < arr.length) {
    total += arr[contador];
    contador ++;
  }

  return total / arr.length
}

console.log(calcularPromedio([10,5,4,2,8]));

/*
Desafío de programación #1: Imprimí los números del 1 al 10
 Resultado: 10 9 8 7 6 5 4 3 2 1
*/

let contador = 1;

while(contador <= 10){
  console.log(contador);
  contador++;
}

/*
 Desafìo de programación  #2: Imprimí los números impares del 1 al 100
 1 3 5 ... 99
 */

for (let i = 0; i <= 100; i++){
  if(i % 2 !== 0) {
    console.log(i)
  }
}

/*
Desafío de programación #3: Imprimí la tabla de multiplicación del 7

 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63
*/

for (let multiplicador = 0; multiplicador <= 10; multiplicador++){
  const MULTIPLICANDO = 7;

  let resultado = MULTIPLICANDO * multiplicador;

  console.log(`${MULTIPLICANDO}x${multiplicador} = ${resultado}`)
}
