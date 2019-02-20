import React, {Component} from 'react';

class SaveButton extends Component{
    constructor(props){
        super(props);
        this.handleSave = this.handleSave.bind(this);
    }

    state = {
        count: 0
    }

    handleSave(event){
        this.setState({count:this.state.count + 1})
    }

    render(){
        return(
            <div>
                <button class="border-0 text-primary bg-light px-3 rounded " 
                onClick ={this.handleSave}><i class="fas fa-save">
                </i></button>
            </div>
        )
    }
}

export default SaveButton;