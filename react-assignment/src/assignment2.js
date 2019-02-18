import React from "react";

class assignment2 extends React.Component{

    state = {
        count: 0,
        textLogs: "",
    }
    
    clickAction1 = (event) => {
        this.setState({count: this.state.count + 1});
    }

    handleClick = (event) => {
        this.setState({count: 0});
    }

    onTypeAction = (event) => {
        //onst outputs = event.target.value;
        this.setState({textLogs: event.target.value});
    }

    textClear = (event) => {
        this.setState({textLogs: ""});
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
                    value={this.state.textLogs}
                />
                <button onClick = {this.textClear}>Clear Text</button>
                <p>{this.state.textLogs}</p>

            </div>
        )
    }
}
export default assignment2;