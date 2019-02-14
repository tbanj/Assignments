import React, { Component } from "react";

export default class Student extends Component {
 
 state = {
   count: 0
 }
 
 
handleClick = () => {
  this.setState({
    count: this.state.count + 1
  });
}

  render() {
    const { id,name, age, hobby } = this.props.info;
    return (
      <div>
        <p>{`${id}. Name: ${name}. Age: ${age}. Hobbies include: ${hobby}`}</p>
        <button onClick={this.handleClick}>Add Count</button>
        <h1>count : {this.state.count}</h1>
      </div>
    );
  }
}
