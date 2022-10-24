import React from 'react';
import './App.css';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Tabuada from './Tabuada';
import Cores from './Cores'
import Mensagem from './Mensagem'
import Header from './Header'
import Container from './Container'

let n = parseInt(prompt("Digite um número: "));

function App() {
  return (
    <div className="App">
      <Container />
      <Header />
      <Mensagem />
      <Cores />
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
