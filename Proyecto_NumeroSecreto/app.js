let intentos = 0;
let numeroMaximoIntentos = 3;
let listaNumerosSorteados = [];
let numeroMaximoArreglo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto!");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximoArreglo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;  
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento("p",`Acertaste el número en ${intentos} ${intentos === 1 ? "intento." : "intentos."}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
    document.getElementById('intentar').setAttribute('disabled', 'true');
    document.getElementById("valorUsuario").setAttribute('disabled', 'true');

  } else {
    //El usuario no acertó.
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
      
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");      
    }

    intentos++;
    limpiarCaja();

    if (intentos > numeroMaximoIntentos) {
      asignarTextoElemento("p",`Excediste el máximo de ${numeroMaximoIntentos} intentos`);
      document.getElementById('intentar').setAttribute('disabled', 'true');
      document.getElementById("reiniciar").removeAttribute("disabled");
      document.getElementById('valorUsuario').setAttribute('disabled', 'true');
    }
  }
  return;
}

function generarNumeroSecreto() {
    let numeroGenerado;
  
    if (listaNumerosSorteados.length === numeroMaximoArreglo) {
      asignarTextoElemento("p", "Juego culminado. Presione (F5) para volver a jugar");
    } else {
      numeroGenerado = Math.floor(Math.random() * numeroMaximoArreglo) + 1;
      console.log("Numero Secreto: " + numeroGenerado);
  
      if (listaNumerosSorteados.includes(numeroGenerado)) {
        //console.log("Numero Secreto repetido: " + numeroGenerado);
      } else {
        listaNumerosSorteados.push(numeroGenerado);
      }
    }
    console.log("Arreglo: " + listaNumerosSorteados);
    return numeroGenerado;
  }

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
  document.getElementById("intentar").removeAttribute("disabled");
  document.getElementById("valorUsuario").removeAttribute("disabled");  
}

condicionesIniciales();
