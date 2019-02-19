import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Notes from '../src/notes';
import styled from 'styled-components';


const Outer = styled.div `
text-align: center;display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

const Logo = styled.img `
animation: App-logo-spin infinite 20s linear;
height: 80px;
margin-top: 50px;
`;

const Header = styled.header `
background-color: #282c34;
height: 100vh;
width: 100vh;
font-size: 20px;
color: white;
`;


class App extends Component {
  render() {
    return (
      <Outer className="App">
        <Header className="App-header">
          <Logo src={logo} className="App-logo" alt="logo" />

          <p>Welcome to the notes app</p>
          <Notes/>
        </Header>
      </Outer>
    );
  }
}

export default App;
