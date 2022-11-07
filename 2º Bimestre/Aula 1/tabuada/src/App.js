import React from 'react';
import './App.css';
// import Titulo from './Titulo';
// import Titulo2 from './Titulo2';
// import Tabuada from './Tabuada';
// import Cores from './Cores'
// import Mensagem from './Mensagem'
// import Header from './Header'
// import Container from './Container'
import Contador from './Contador'
import TodoList from './TodoList';

// let n = parseInt(prompt("Digite um número: "));


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      itens: [],
      text: ""
    }
  }

  handleChange=(e)=>{
    this.setState({text: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(!this.state.text.length){
      return;
    }

    const item = {
      id: Date.now(),
      text: this.state.text
    }

    this.setState(state => ({
      itens: state.itens.concat(item),
      text: ''
    }));

  }
  render(){
    return (
      <div className="App">
        <TodoList itens= {this.state.itens}/>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <input id="new-todo" onChange={this.handleChange} value={this.state.text}/>
          <button>Inserir</button>
        </form>
        <Contador />
        {/* <Container />
        <Header />
        <Mensagem />
        <Cores />
        <Titulo 
              titulo= "FATEC"
              texto= "Faculdade de Tecnologia de Presidente Prudente"
              link= "www.fatec.edu.br"/>
        <Titulo2/>
        <Tabuada numero={n}/>   */}
      </div>
    );
  }
}

export default App;
