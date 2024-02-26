let numeroSecreto = Math.floor(Math.random()*100)+1;
let intentos = 1;
// let palabraveces = "vez";
let numeroUsuario = 0;
let maximosIntentos = 10;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Indícame un número por favor del 1 al 100"));

    if (numeroUsuario == numeroSecreto) {
        alert(`Lo lograste! El número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez":"veces"}. El número era ${numeroSecreto}.`)
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor");
        } else {
            alert("El número secreto es mayor")
        }
        // intentos=intentos +1;
        // intentos += 1;
        intentos++ ;
        // palabraveces = "veces"

        if(intentos >maximosIntentos ){
            alert(`Llegaste al número máximo de intentos: ${maximosIntentos}. El número era ${numeroSecreto}.`);
            break;
        }

    }

}

