import React from "react";

class assignment2 extends React.Component{

    state = {
        count: 0,
        logs: "",
    }
    
    clickAction1 = (event) => {
        this.setState({count: this.state.count + 1});
    }

    handleClick = (event) => {
        this.setState({count: this.state.count = 0});
    }

    onTypeAction = (event) => {
        //onst outputs = event.target.value;
        this.setState({logs: event.target.value});
    }

    textClear = (event) => {
        this.setState({logs: this.state.count = ""});
    }

    render(){
        return (
            <div>
                <h2>Button Click count = {this.state.count} </h2>
                <button onClick = {this.clickAction1}>Click Count</button>
                <button onClick = {this.handleClick}>Clear Count</button>
                <br/>
                <br/>
                <br/>

                <input 
                    type="text" 
                    name= "space" 
                    placeholder="Type Here"
                    onChange={this.onTypeAction}
                />
                <button onClick = {this.textClear}>Clear Text</button>
                <p>{this.state.logs}</p>

            </div>
        )
    }
}
export default assignment2;