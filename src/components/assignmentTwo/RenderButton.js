import React from 'react';

class RenderButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
}

handleClick = (event) => {
    this.setState({count: this.state.count + 1 });
}

handleChange = (event) => {
    const value = event.target.value;
    this.setState({checkClick: value})
}

render() {
    return (
        <div> 
            <p > Assignment 2 React</p>
            <p> Question 1</p>
            <button onClick={this.handleClick}> click me so that i can count </button>
            <p> this has been pressed { this.state.count} times</p>

            
        
        </div>
    );
}
}

export default RenderButton;