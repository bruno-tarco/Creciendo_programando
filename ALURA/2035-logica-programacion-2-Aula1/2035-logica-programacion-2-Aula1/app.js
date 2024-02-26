let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);
let intentos = 1;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    // console.log(numeroSecreto);
    if(numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos==1 ? " vez":" veces"} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroDeUsuario >numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos += 1 ;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

asignarTextoElemento('h1','Juego del número secreto');
asignarTextoElemento('p','Indica un número del 1 al 10');
