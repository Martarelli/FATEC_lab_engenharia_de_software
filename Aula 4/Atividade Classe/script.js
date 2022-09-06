function Carros(){
    let marca = ""
    let modelo = ""
    let ano = 0
    let cor = ""
    let kilometragem = 0
    let valorFipe = 0;
    this.anosUtilizacao = () => {
        let data = new Date();
        let options = {year: 'numeric'};
        let tempoDeUso = data.toLocaleDateString('pt-BR', options) - this.ano;
        return tempoDeUso;
    }

    this.valorMercado = () => {
        let tempoDeUso = this.anosUtilizacao();
        let fatorConservacao = this.kilometragem / tempoDeUso;

        if(fatorConservacao < 30000){
            console.log("CASO 1: " + fatorConservacao)
            return this.valorFipe * 1.1;
        } else if(fatorConservacao >= 30000 && fatorConservacao <= 50000) {
            console.log("CASO 2: " + fatorConservacao)
            return this.valorFipe;
        } else {
            console.log("CASO 3: " + fatorConservacao)
            return this.valorFipe * 0.9;
        }

    }
}

document.querySelector(".button-submit").addEventListener("click", classCar);

function classCar(){

    let carro = new Carros();
    carro.marca = document.querySelector("#marca").value;
    carro.modelo = document.querySelector("#modelo").value;
    carro.ano = document.querySelector("#ano").value;
    carro.cor = document.querySelector("#cor").value;
    carro.kilometragem = document.querySelector("#kilometragem").value;
    carro.valorFipe = document.querySelector("#valor-fipe").value;

alert("Anos de utilização :" + carro.anosUtilizacao() + "\nValor de mercado: " + carro.valorMercado())

}