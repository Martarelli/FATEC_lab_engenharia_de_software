import { useState } from "react";

function Letreiro() {
  const [letreiro, setLetreiro] = useState("");
  const fatec = "Venha estudar na Fatec";
  let i = 0;
  const exibir = () => {
    for (i of fatec) {
      let letter = i;
      setLetreiro(letter);
      console.log(i);
      if(letreiro === fatec){
        this.setLetreiro = "";
        i = 0;
      }
    } 
  };
  return (
    <div>
      <p>{letreiro}</p>
      <button onClick={() => exibir()}> Click me</button>
    </div>
  );
}

export default Letreiro;
