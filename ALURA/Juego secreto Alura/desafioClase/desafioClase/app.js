let titulo = document.querySelector('h1');

titulo.innerHTML = "Hora del Desafío";

function clicado(){
    alert("El botón fue clicado");
}


function pregunta(){

    nombre = prompt("Nombre de una ciudad de Brasil");

    alert(`Hola. Estuve en ${nombre} y me acordé de ti`);
}



function mensaje(){

    alert(`Yo amo JS`);
}


function suma(){

    numero1 = parseInt(prompt("Dame un número"));

    numero2 = parseInt(prompt("Dame un segundo número"));
    sumado= numero1+numero2
    alert(`La suma es: ${sumado}`)
}