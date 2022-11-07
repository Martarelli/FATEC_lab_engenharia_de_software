import React from "react";

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "Todo List",
          }
    }

    render(){
        return(
            <div>
                <h1> {this.state.title} </h1>
                <ul>
                    {this.props.itens.map(
                        item => (<li key={item.id}>{item.text}</li>)
                    )}
                </ul>
            </div>
        )
    }
}

export default TodoList;