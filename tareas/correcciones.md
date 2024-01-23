* Solo las constantes que son estáticas es decir van con `SCREAMING_SANKE_CASE`, un valor que damos por defecto ya que es asi porque si Ej:

```js
const CANTIDAD_DE_SEGUNDOS_EN_UN_MINUTO = 60
```

De lo contrario se usa `camelCase`

* Está bien ser descriptivo en el nombre de las funciones, pero los parámetros también agregan información por lo que puede se puede tender a ser redundante, evitar esto último.

* Respetar el formato (Por ej: no colocar espacios entre el nombre de la función y los parámetros de la misma). **Revisar dos veces el código antes de enviarlo y prestar atención al detalles y typos**

* La función no debe saber de otras variables que no sean de su incumbencia o competencia, respetar el "Single responsability principle"

```js
// Como no debe plantearse una función ❌:

function dividirDosNumeros (numeroUno, numeroDos) {
  return resultado = numeroUno / numeroDos;
}

let resultado;

dividirDosNumeros(10,5)

// Como si debe de hacerse ✔:

function dividir(numeroUno, numeroDos) {
  return numeroUno / numeroDos;
}

let resultado;

resultado = dividir(10,5)
```


