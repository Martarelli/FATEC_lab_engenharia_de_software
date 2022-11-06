import React from "react";

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {title: "Todo List"};
    }

    render(){
        return(
            <div>
                <h1> {this.state.title} </h1>
            </div>
        )
    }
}

export default TodoList;