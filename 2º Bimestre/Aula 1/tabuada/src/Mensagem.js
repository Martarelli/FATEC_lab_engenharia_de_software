import React from "react";

class Botao extends React.Component{
    exibir = (text) => {
        console.log(text)
    }

    render(){
        return (
            <button onClick={() => this.exibir("Você clicou")}>CLICA AQUI</button>
        )
    }
}
export default Botao;