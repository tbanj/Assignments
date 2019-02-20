import React, { Component } from 'react'

export default class InputOfficial extends Component {

  constructor(props){
    super(props);
    
  }

  state = {
    task: " "
  }

  render() {
    return (
      <div>
        <textarea class="border-0 text-danger bg-dark col-xs-12 
        col-sm-12 col-md-12 col-lg-12" rows="6" cols="50">
        </textarea>
      </div>
    )
  }
}