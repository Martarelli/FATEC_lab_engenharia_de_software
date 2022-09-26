import { useState } from "react";
import "./App.css";


function App() {
  const [letreiro, setLetreiro] = useState("teste");
  const fatec = "Venha estudar na Fatec";

  return (
    <div>
      <p>{letreiro}</p>
      <button onClick={() => setLetreiro("MUDEI")}>clica aq</button>
    </div>
  );
}

export default App;
