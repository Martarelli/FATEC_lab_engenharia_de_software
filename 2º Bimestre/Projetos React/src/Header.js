import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: "black",
            ciclo: "render"                        
        };
    }

    // static getDerivedStateFromProps(props,state){
    //     return {color: "orange", ciclo: "getDerivedStateFromProps"};
    // }

    componentDidMount(){
        setTimeout(() => {
            this.setState({color: "blue", ciclo: "componentDidMount"})
        }, 5000);
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        alert("getSnapshotBeforeUpdate EXECUTADO antes da atualização do componente");
        if(prevState.color !== this.state.color){
            alert("Os State foram alterados");
            console.log("Antes: ",prevState.color);
            console.log("Depois: ",this.state.color);
            return this.state.color;
        }
        return null;
    }

    componentDidUpdate(snapshot){
        alert("componentDidUpdate EXECUTADO após atualização do componente");

    }

    render(){
        return (
            <h1>A cor selecionada no state é: {this.state.color} no ciclo {this.state.ciclo}</h1>
        )
    }
}

export default Header;