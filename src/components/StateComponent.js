import React from 'react';

class StateComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 5,
        }
}


    handleClick = (event) => {
        this.setState({count: this.state.count + 3 });
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({task: value})
    }

    render() {
        return (
            <div> 
                <button onClick={this.handleClick}> Press me </button>
                <p> this has been pressed { this.state.count} times</p>

                <input
                    type = "text" name = "task"  placeholder = "what's on your mind" onChange = {this.handleChange}
                />
                <p> {this.state.task}</p>
            
            </div>
        );
    }
}

export default StateComponent;