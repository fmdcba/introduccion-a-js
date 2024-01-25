// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const MI_NOMBRE = 'facundo';
const NOMBRE_DE_MI_AHIJADO = 'guillermo'
const nombreUsuario = prompt('Ingrese su nombre').toLowerCase()

if (nombreUsuario === MI_NOMBRE){
  console.log(`Hola tocayo, yo también me llamo ${nombreUsuario}`);
} else if (nombreUsuario === NOMBRE_DE_MI_AHIJADO) {
  console.log(`Hola ${nombreUsuario}, Te llamás igual que mi ahijado`)
} else {
  console.log(`Hola ${nombreUsuario}!`)
}


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const MI_EDAD = 26;
const edadUsuario = Number(prompt('Ingrese su edad'));

if (edadUsuario === 26) {
  console.log('Tenemos la misma edad!')
} else if (edadUsuario < MI_EDAD) {
  console.log('Sos menor yo')
} else if (edadUsuario > MI_EDAD) {
  console.log('Sos mayor que yo')
} else {
  console.log(`No es posible comparar nuestras edades. Reinicie la página e ingrese un número válido`)
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

/*
const usuarioTieneDni = prompt('Bienvenido al bar! Trae usted su DNI?: responder "Si" o "No"').toLowerCase();

if (usuarioTieneDni === 'si') {
  const edadUsuario = Number(prompt('Ingrese su edad'));

  if (edadUsuario > 18) {
    console.log('Puede ingresar al Bar')
  } else if (edadUsuario < 18) {
    console.log('Menores no pueden ingresar al bar');
  } else {
    console.log('la edad ingresada no es válida');
  }
} else if (usuarioTieneDni === no) {
  console.log('No puede ingresar sin DNI');
} else {
  console.log('No entiendo la respuesta ya que esta debe ser si o no');
}
*/

function solicitudAccesoAlBar(){
  const usuarioTieneDni = controlDniUsuario();

  if(usuarioTieneDni) {
    verificarEdadMinimaDeIngreso();
  }
}

function controlDniUsuario(){
  const RESPUESTA_AFIRMATIVA = 'si'
  const RESPUESTA_NEGATIVA = 'no'

  const respuestaTieneDni = pedirDniUsuario().toLowerCase()

  if(respuestaTieneDni === RESPUESTA_AFIRMATIVA){
    return true;
  } else if (respuestaTieneDni === RESPUESTA_NEGATIVA){
    console.log('Para acceder al bar necesitas DNI')
    return false;
  } else {
    solicitudAccesoAlBar()
  }
}

function pedirDniUsuario(){
  return prompt('Bienvenido al bar! Trae usted su DNI?: responder "Si" o "No"').toLowerCase();
}

function verificarEdadMinimaDeIngreso(){
  const EDAD_MINIMA_DE_INGRESO = 18;
  const edadUsuario = Number(preguntarEdadUsuario());

  if(edadUsuario >=  EDAD_MINIMA_DE_INGRESO) {
    permisoAccesoAlBar(true);
  } else if (edadUsuario <  EDAD_MINIMA_DE_INGRESO) {
    permisoAccesoAlBar(false);
  } else {
    verificarEdadMinimaDeIngreso();
  }
}

function preguntarEdadUsuario(){
  return prompt('Ingrese su edad (Por favor, limítese a usar sólo números)');
}

function permisoAccesoAlBar(acceso){
  const MENSAJE_BIENVENIDA = 'Bienvenido al Bar!';
  const MENSAJE_DESPEDIDA = 'Vuelve cuando seas mayor de edad.';

  if(acceso) {
    console.log(MENSAJE_BIENVENIDA);
  } else {
    console.log(MENSAJE_DESPEDIDA);
  }
}

solicitudAccesoAlBar();
