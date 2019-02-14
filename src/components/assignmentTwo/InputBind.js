import React from 'react';

class InputBind extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
}




    handleChange = (event) => {
        const value = event.target.value;
        this.setState({task: value})
    }

    render() {
        return (
            <div> 
                
                <p> Question 2</p>

                <input
                    type = "text" name = "task"  placeholder = "What are you thinking about" onChange = {this.handleChange}
                />
                <p> {this.state.task}</p>
            
            </div>
        );
    }
}

export default InputBind;