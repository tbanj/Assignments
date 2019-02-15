
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
    return ( <div class = "Container">

                <div class = "Header">
                  <h1>LevelUp Lottery</h1>
                </div>  
                <div>
                  
                  <label>Enter Lucky Number</label>
                  <br/>
                  <input class = "Custom" type = "number"
                    name = "task"
                    placeholder = "NUMBER"
                    onChange = {this.handleChange}>
                  </input>
                  <br/>
                  <h4>N.B: Must Be A Number</h4>
                  <p>{this.state.task}</p>
                  
                  <button class = "AppButton" onClick = {this.handleClick}>SUBMIT</button>
                  <h4>You Can Submit Multiple Entries</h4>
                  <p>Number Of Submission = {this.state.count}</p>
                </div>
              </div>
    );
  }
}

export default App;
