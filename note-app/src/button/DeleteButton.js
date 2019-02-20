import React, {Component} from 'react';

class DeleteButton extends Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    state = {
        count: 0
    }

    handleDelete(event){
        this.setState({count:this.state.count + 1})
    }
    render(){
        return(
            <div>
                <button class="border-0 bg-light text-primary px-3 rounded mr-md-3 
                mr-sm-3 mr-xs-1" 
                onClick={this.handleDelete}><i class="fas fa-trash-alt"></i>
                </button>
            </div>
        )
    }
}
 
export default DeleteButton;