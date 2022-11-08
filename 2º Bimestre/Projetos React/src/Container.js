import React from "react";

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {show: true};
    }

    deleteHeader = () => {
        this.setState({show: false});
    }

    render(){
        let minhaHeader;
        if(this.state.show){
            minhaHeader = <Child/>;
        }

        return(
            <div>
                {minhaHeader}
                <button type="button" onClick={this.deleteHeader}>Desmonte o componente</button>
            </div>
        )

    }

}

class Child extends React.Component{
    componentWillUnmount(){
        alert("O componente está sendo desmontado");
    }
    render(){
        return (
            <h1>Componente está montado</h1>
        )
    }
}

export default Container;
