import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: "black",
            ciclo: "render"                        
        };
    }

    static getDerivedStateFromProps(){
        this.setState({color: "orange", ciclo: "getDerivedStateFromProps"})
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({color: "blue", ciclo: "componentDidMount"})
        }, 1000);
    }

    render(){
        return (
            <h1>A cor selecionada no state é: <b>{this.state.color}</b> no ciclo <b>{this.state.ciclo}</b></h1>
        )
    }
}

export default Header;