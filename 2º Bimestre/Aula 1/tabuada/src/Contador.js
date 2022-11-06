import React from "react";

class Contador extends React.Component{
    constructor(props){
        super(props);
        this.state = {segundos:0}
    }

    render(){
        return(
            <div>
                <p>Segundos: {this.state.segundos}</p>
            </div>
        )
    }

}



export default Contador;