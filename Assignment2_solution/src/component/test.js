import React, { Component } from 'react'

export default class test extends Component {

state={
    text: ''
}

handleChange = e => {
    const value = e.target.value;
    this.setState({
        text: value
    });
}

  render() {
    return (
      <div style={{margin: "3rem"}}>
      <p>Type anything in the input text below and immediately see it appear on the next line</p>
        <form>
            <input type="text" value={this.state.text} onChange={this.handleChange} name="TextName"/>
        </form>
        <p>{this.state.text}</p>
      </div>
    )
  }
}
