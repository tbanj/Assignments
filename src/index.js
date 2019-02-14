import React from 'react';
import ReactDOM from 'react-dom';
import StateComponent from "./components/StateComponent";
import RenderButton from "./components/assignmentTwo/RenderButton";
import InputBind from "./components/assignmentTwo/InputBind";


ReactDOM.render(
<div>
  <StateComponent/>
</div>, document.getElementById('root'));


ReactDOM.render(
  <div>
    <RenderButton/>
  </div>, document.getElementById('renderbutton'));


ReactDOM.render(
  <div>
    <InputBind/>
  </div>, document.getElementById('inputBind'));

