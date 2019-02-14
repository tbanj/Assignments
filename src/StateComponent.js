import React from "react"


class StateComponent extends React.Component{
    constructor(props) {
        super(props);
    
        this.handleClick= this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    state= {
        count:0,
        task:"",
    };


handleClick(event){
    this.setState({count:this.state.count +1 })
}

handleChange(event){
    const value1= event.target.value;


    this.setState({task:value1})
}


    render(){
        return (
            <div>
            <button onClick={this.handleClick}>Click Me</button>   
                     <p> This button has been clicked {this.state.count} times</p>
                     <input 
                     type='text' 
                     placeholder='Type Something' 
                     name='task'
                     onChange={this.handleChange}/>

                     <p>{this.state.task}</p>
                     
        </div>

        );
        
    }
}
export default StateComponent;

