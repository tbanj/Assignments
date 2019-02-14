import React from 'react';

class Button extends React.Component{
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
        this.setState({count: this.state.count + 1})
    };

    handleChange(event){
        const value = event.target.value;
        this.setState({task: value})
    }
    
    render(){
        return(
            <div class = 'form_container'>
                <p> Hi! Would you like to receive updates via newsletter?.... please fill out this short form</p>
                <div>
                <form>
                <label for email>
                    <input type = "email" id =  'form1' name = "email address" placeholder = "email address" value = {this.state.email} onChange = {this.handleChange} required ></input>
                </label>

                <br></br>

                <button onClick = {this.handleClick}>Sign Up</button>
                </form>
                </div>


                <p>Register up to {this.state.count} times to qualify for a free gift</p>

                <p>{this.state.task}</p>
            </div>
        )
    }
}

export default Button;