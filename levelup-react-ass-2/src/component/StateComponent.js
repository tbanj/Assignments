import React, { Component } from 'react';

class StateComponent extends Component {
    constructor(props){
        super(props);
        this.inputChange = this.inputChange.bind(this);
        this.buttonClick = this.buttonClick.bind(this);

        this.state = {
            clickcount : 0,
            typeshow : '',
        };
    }

    buttonClick(event){
        this.setState({ clickcount: this.state.clickcount + 1});
    }

    inputChange(event) {
       const change = event.target.value;
       this.setState({ typeshow : change });
    }

    render(){
        const thestate = this.state;
        return(
            <div>
                <button onClick = {this.buttonClick}>
                    Click This Button
                </button>
                <p>You Clicked this button {thestate.clickcount} Times.</p>

                <input type='text' placeholder='Type A Word' onChange={ this.inputChange } ></input>
                <p>{thestate.typeshow}</p>
            </div>
        )
    }

    
};

export default StateComponent;