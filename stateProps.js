import React from "react";

class stateProps extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
        state = {
            count : 0,
            task : "",
        }
    
        handleClick(){
            this.setState({count: this.state.count +1});
        }
        handleChange = (e)=>{
            const th = e.target.value;
            this.setState({task: th})
            
        }
        render(){
              return <div>
             <h1>Counter App</h1>
             <button onClick={this.handleClick}>Click Me</button>
             <p>Click me to increament {this.state.count} times.</p>
    
             <input placeholder="Type something" name= "task" type= "text"  onChange={this.handleChange}/>
             <p>{this.state.task}</p>
             
             </div> 
        }

}
