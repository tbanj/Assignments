import React, { Component } from 'react';
import Notes from "./note";
import styled from 'styled-components';

const Outer = styled.div`
text-align: center;display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Header = styled.header`
background-color: #282c34;
height: 100vh;
width: 100vh;
font-size: 20px;
color: white;
`;


class App extends Component {
  state = {
    note: [],
  };
  componentDidMount() {
    store.subscribe(() => {
      this.setState({ note: store.getState().note });
    });
  }
    render() {
      return (
      <Outer>
        <Header>
          <p>Welcome to the notes app</p>
          <Notes />
        </Header>
      </Outer>
 );
    }
  


  export default App;
