import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditButton from '../src/button/EditButtton'
import DeleteButton from '../src/button/DeleteButton'
import SaveButton from '../src/button/SaveButton'
import InputPersonal from '../src/inputComponent/InputPersonal';
import InputOfficial from '../src/inputComponent/InputOfficial';
/**
 * Build a simple note saving application and use Redux as a state management
 *  library. The application should use any css-in-js library for styling 
 * components and axios to make requests.
 */

class App extends Component {
  render() {
    return (
      <div class="container p-5">
        <div class="row p-5">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div class="card rounded text-white bg-danger mb-3">
              <div class="card-body">
                <h5 class="card-title text-dark">Personal Note</h5>
                <InputPersonal />
                <div class="">
                  <span class="d-flex float-right"><EditButton /><DeleteButton /><SaveButton /></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div class="card rounded text-white bg-dark mb-3">
              <div class="card-body">
                <h5 class="card-title text-danger">Official Note</h5>
                <InputOfficial />
                <div class="">
                <span class="d-flex float-right"><EditButton /><DeleteButton /><SaveButton /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
