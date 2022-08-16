let numeroAleatorio= Math.floor(Math.random() * 100) + 1;
let numeroEscolhido = 0;
let jogadasAnteriores = [];
let turno = 10 ;
console.log(numeroAleatorio);

document.getElementById("turno").innerHTML = "Tentativas Restantes: " + turno;


function tentativa(){
    numeroEscolhido = document.getElementById("palpite").value;

    if (numeroEscolhido < numeroAleatorio){
        jogadasAnteriores.push(numeroEscolhido);
        turno--
        alert("você errou, seu numero é menor que o correto")
    } else if (numeroEscolhido > numeroAleatorio){ 
        jogadasAnteriores.push(numeroEscolhido);
        alert("você errou, seu numero é maior que o correto")
        turno--
    } else {
        alert("Parabéns você acertou !!!")
     }

    document.getElementById("turno").innerHTML = "Tentativas Restantes: " + turno;
}

function fimDeJogo() {
    if(turno == 0){
        alert("Você PERDEU :( - Acabou o numero de tentativas");
        document.getElementById("botao").disabled = true;       
    }
}