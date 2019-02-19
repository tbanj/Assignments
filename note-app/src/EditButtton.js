import React, {Component} from 'react';

class EditButton extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    state = {
        count: 0
    }

    handleClick(event){
        this.setState({count:this.state.count + 1})
    }

    render(){
        return(
            <div>
                <button class="border-0 bg-light px-3" 
                onClick ={this.handleClick}><i class="fas fa-pencil-alt">
                </i></button>
                <p>I have been clicked {this.state.count}</p>
            </div>
        )
    }
}

export default EditButton;