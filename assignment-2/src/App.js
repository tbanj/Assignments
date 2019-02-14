
/**
    Create an application that renders a button and the number of times 
    the button has been clicked. You’ll be required to use state to achieve this. 
    Each time the button is clicked, the component state should be updated 
    and the total times the button has been clicked should be updated and 
    displayed.
 */


import React, { Component } from 'react';

import './App.css';

class App extends Component {

    
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        count: 0,
        task: ""
    }

    handleClick(event){
        this.setState({count: this.state.count + 1})
    }

    handleChange(event){
        const value = event.target.value
        this.setState({task: value})
      }

  render() {
    return ( <div class = "App">
                <h1>LevelUp Lottery</h1>
                <label>Enter Lucky Number</label>
                <br></br>
                <input class = "custom" type = "number"
                  name = "task"
                  placeholder = "Number"
                  onChange = {this.handleChange}>
                </input>
                <p>{this.state.task}</p>

                <button class = "AppButton" onClick = {this.handleClick}>SUBMIT</button>
                <h4>You Can Submit Multiple Entries</h4>
                <p>Number Of Submition = {this.state.count}</p>
    
              </div>
            );
  }
}

export default App;
