const fatec = "Venha estudar na Fatec";
let i = 0;
let letreiro = [];
let letreiroExibicao = ""

const exibir = () => {
    if (i <= fatec.length - 1) {
      let letter = fatec[i];
      letreiro.push(letter);
      letreiroExibicao = letreiro.join("");
      i++;
      console.log(letreiroExibicao)
    } else {
      letreiro = [];
      i = 0;
    }
}


function Letreiro(){
    return <p>{letreiroExibicao} TESTE</p>
  }

  export default Letreiro;