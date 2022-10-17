import { useEffect } from "react";
import { useState } from "react";
import "./App.css";


function App() {
  const [letreiro, setLetreiro] = useState("");
  const [i, setI] = useState(0);
  const fatec = "Venha estudar na Fatec";
  let palavraExibição = [];
  function exibir(){
    if(i < fatec.length ){
      palavraExibição.push()
      setLetreiro(letreiro + fatec[i]); 
      setI(i + 1); 
    } else {
      setI(i - fatec.length);
      setLetreiro("");
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      exibir();
    }, 350);
      return () => clearInterval(interval);
  });

  return (
    <div>
      <p className="letreiro">{letreiro}</p>
    </div>
  );
}

export default App;
