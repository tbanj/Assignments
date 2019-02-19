import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditButton from './EditButtton'
import DeleteButton from './DeleteButton'
/**
 * Build a simple note saving application and use Redux as a state management
 *  library. The application should use any css-in-js library for styling 
 * components and axios to make requests.
 */

class App extends Component {
  render() {
    return (
      <div class="container p-5">
        <div class="row py-5">
          <div class="col-xs-6 col-sm-4 col-md-4 col-lg-6">
            <div class="card text-white bg-primary mb-3">
              <div class="card-body">
                <h5 class="card-title">Personal Note</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="d-flex">
                  <EditButton /><span class="ml-5"><DeleteButton /></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-sm-4 col-md-4 col-lg-6">
            <div class="card text-white bg-success mb-3">
              <div class="card-body">
                <h5 class="card-title">Official Note</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="d-flex ">
                  <EditButton /><span class="ml-5"><DeleteButton /></span>
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
