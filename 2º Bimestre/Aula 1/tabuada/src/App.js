import React from 'react';
import './App.css';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Tabuada from './Tabuada';

let n = parseInt(prompt("Digite um número: "));

function App() {
  return (
    <div className="App">
      <Titulo 
            titulo= "FATEC"
            texto= "Faculdade de Tecnologia de Presidente Prudente"
            link= "www.fatec.edu.br"/>
      <Titulo2/>
      <Tabuada numero={n}/>  
    </div>
  );
}

export default App;
