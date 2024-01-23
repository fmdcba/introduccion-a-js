// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr,
//      dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el (IF) operador es '+', vamos a usar la función para sumar.
//      Si no (ELSE), vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si (if) tenemos un operador igual a '+', llamamos (ejecutamos. sumar(1,2)) la función
// 'sumar' con nuestros números (las variables del paso 2).
// Si no (else), tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//

// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.

function sumar(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

function restar(numeroUno, numeroDos) {
    return numeroUno - numeroDos;
}

function dividir(numeroUno, numeroDos) {
    return numeroUno / numeroDos;
}

function multiplicar(numeroUno, numeroDos) {
    return numeroUno * numeroDos;
}

let numeroUno = Number(prompt('Ingrese un número para agregar a la operación matemática...'));
let numeroDos = Number(prompt('Ingrese otro número para operar con el anterior...'));
let operadorAritmetico = prompt('Por favor, ingrese un operador. Entre estas cuatro opciones: +, -, * ó /');
let resultado;

if (operadorAritmetico === '+') {
    resultado = sumar(numeroUno, numeroDos)
} else if (operadorAritmetico === '-') {
    resultado = restar(numeroUno, numeroDos)
} else if (operadorAritmetico === '/') {
    resultado = dividir(numeroUno, numeroDos)
} else if (operadorAritmetico === '*') {
    resultado = multiplicar(numeroUno, numeroDos)
} else {
    resultado = '"inaccesible" debido a que el operador ingresado no es válido. Reinicie la página e ingrese un operador válido.'
}

console.log('Resultado de la operación: ' + resultado)
