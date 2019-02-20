import React, {Component} from 'react';

class EditButton extends Component{
    constructor(props){
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
    }

    state = {
        count: 0
    }

    handleEdit(event){
        this.setState({count:this.state.count + 1})
    }

    render(){
        return(
            <div>
                <button class="border-0 bg-light text-primary px-3 rounded mr-md-3 
                mr-sm-3 mr-xs-1" 
                onClick ={this.handleEdit}><i class="fas fa-pencil-alt">
                </i></button>
            </div>
        )
    }
}

export default EditButton;