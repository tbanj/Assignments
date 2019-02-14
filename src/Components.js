import React from 'react';

class Components extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    state = {
        count: 0,
        objective: '',
    };

    handleClick(event){
        const newcount = this.state.count +1
        this.setState({count: newcount });
    }

    handleChange(event){
      const value = event.target.value
      this.setState({objective: value});
    }

    render(){
        return(
            <div>
                 <button onClick={this.handleClick}>Click Me</button>
                 <p>I have been clicked {this.state.count} times</p>

                 <input
                    type= 'text'
                    name= 'objective'
                    placeholder='type text here'
                    onChange={this.handleChange}
                  />
                 <p>{this.state.objective}</p>
            </div>
        );
    }
}
export default Components;