import React, { Component } from 'react'

export default class InputPersonal extends Component {
  
  constructor(props){
    super(props);
    
  }

  state = {
    task: " "
  }

  render() {
    return (
      <div>
        <textarea name="task" class="border-0 text-dark bg-danger col-xs-12 
        col-sm-12 col-md-12 col-lg-12" rows="6" cols="50">
        </textarea>
      </div>
    )
  }
}
