import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from './Button'
import StundentInfo from './StundentInfo'
import * as serviceWorker from './serviceWorker';
import StateComponent from './StateComponent';

ReactDOM.render(
<div>
    <App />
    {/* <Button />
    <StundentInfo /> */}
    <StateComponent />
</div>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
