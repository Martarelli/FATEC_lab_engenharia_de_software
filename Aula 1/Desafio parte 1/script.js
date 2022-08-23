let numeroAleatorio= Math.floor(Math.random() * 100) + 1;
let numeroEscolhido = 0;
let turno = 1 ;

document.getElementById("turno").innerHTML = "Turno: " + turno;

function jogo(){
    numeroEscolhido = document.getElementById("palpite").value;
    
    if (turno <= 10) {
        if (numeroEscolhido < numeroAleatorio){
            jogadaErrada("menor");
        } else if (numeroEscolhido > numeroAleatorio){ 
            jogadaErrada("maior");
        } else {
            alert("Parabéns você acertou !!!");
            document.getElementById("botao").disabled = true; 
            document.getElementById("msgFimDeJogo").innerHTML = "RECARREGUE A PAGINA PARA JOGAR NOVAMENTE";
        }     
    } else {
        fimDeJogo();
    }

    turno <= 10 ? document.getElementById("turno").innerHTML = "Turno: " + turno : "" ;

}

function fimDeJogo() {
    alert("Você PERDEU :( - Acabou o numero de tentativas");
    document.getElementById("botao").disabled = true; 
    document.getElementById("msgFimDeJogo").innerHTML = "RECARREGUE A PAGINA PARA JOGAR NOVAMENTE";      
}

function jogadaErrada(position){
    turno++;
    let jogadaErrada = document.getElementById("tentativasAnteriores");
    let texto = document.createTextNode(numeroEscolhido + " ");
    jogadaErrada.appendChild(texto);
    alert("você errou, seu numero é " + position + " que o correto");

}