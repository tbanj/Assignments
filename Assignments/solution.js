import React from "react";

class Solution extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }
    state = {
        count: 0,
        task: "",
    }

    handleClick(event){
        this.setState({count: this.state.count + 1});
        
    }

    handleChange(event){
        const value = event.target.value;
        this.setState({task: value});
    }

    render(){
        return (
            <div>
                <button onClick = {this.handleClick}>click me.</button>
                <p>I have been clicked {this.state.count} times</p>

                <input type = "text" name = "task" placeholder ="Type something" onChange = {this.handleChange} ></input>

                <p>{this.state.task}</p>
            </div>
        );
    }
}

export default Solution