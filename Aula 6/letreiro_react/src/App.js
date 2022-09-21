import React, { useEffect } from "react";
import "./App.css";

let fatec = "Venha estudar na Fatec";
let i = 0;
let letreiro = [];
let letreiroExibicao = ""

function App() {
  useEffect(() => {
    setInterval(() => {
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
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1 className="letreiro">Letreiro</h1>
      <p className="exibicao">{letreiroExibicao}</p>
    </div>
  );
}

export default App;
