import React from 'react';
import './note.scss';



import {store, STORE_DATA, DELETE_DATA, STORE_STUDENTS} from './store';

let id =0;
let value = "";

let firstName = '';
let lastName = '';
let email = '';
let zipcode = 0;
let phone =0;
let age_ = 0;
let date_input = 0;
var genderMale = false;
var genderFemale = false;
var genderBisexual = false;
let statusFullstack = false;
let statusFrontend = false;
let statusNotRelate = false;
let statusBackend = false;
let statusDesigner = false;
let marital ='';

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class NoteApp extends React.Component {


  state = {
    datas: [],
}
componentDidMount(){
    store.subscribe(() => {
      this.setState({datas: store.getState().datas});
    })
  }


  handleChange(event) {
    value = event.target.value;   
    console.log(event.target.value);
    
  }

  handleChangeFirst(event) {
    firstName =document.getElementById('firstName').value;  
    console.log(event.target.value);
    
  }

  handleChangeLast(event) {
    lastName =document.getElementById('lastName').value;
    
  }

  handleChangeEmail(event) {
    email =document.getElementById('email').value;
  }

  handleChangeZipcode(event) {
    zipcode =document.getElementById('zipcode').value;
  }


  handleChangePhone(event) {
    phone =document.getElementById('phone').value;
  }

  handleChangeAge(event) {
    age_ =document.getElementById('age').value;
  }

  handleChangeDate(event) {
    date_input =document.getElementById('date-input').value;
  }

  handleChangeMale(event) {
    genderMale =document.getElementById('inlineRadio1').checked;
    let maleDisp = document.getElementById('labelMale').innerText;
  }

  handleChangeFemale(event) {
    genderFemale =document.getElementById('inlineRadio2').checked;
    let femaledisp = document.getElementById('labelFemale').innerText;
    console.log(femaledisp);
    
  }

  handleChangeBisexual(event) {
    genderBisexual =document.getElementById('inlineRadio3').checked;
    let BisexualDisp = document.getElementById('labelBisexual').innerText;
  }


  handleChangeFrontend(event) {
    statusFrontend =document.getElementById('inlineCheckbox1').checked;
    let FrontendDisp =document.getElementById('labelFrontend').innerText;
    console.log(FrontendDisp);
    
  }

  handleChangeBackend (event) {
    statusBackend = document.getElementById('inlineCheckbox2').checked;
    let BackendDisp = document.getElementById('labelBackend').innerText;
  }

  handleChangeFullstack(event) {
    statusFullstack =document.getElementById('inlineCheckbox3').checked;
    let fullstackDisp = document.getElementById('labelFullstack').innerText;
    console.log(fullstackDisp);
  }

  handleChangeDesigner(event) {
    statusDesigner =document.getElementById('inlineCheckbox4').checked;
    let designerDisp = document.getElementById('labelDesigner').innerText;
  }

  handleChangeMarital(event) {
    marital =document.getElementById('marital').value;
    console.log(marital);
    
  }

  handleChangeUndisclose (event) {
    statusNotRelate =document.getElementById('inlineCheckbox5').checked;
    let notRelateDisp = document.getElementById('labelNotRelate').innerText;
    console.log(notRelateDisp);
    
  }

  

  clearInput(event) {
    let inputClear =document.getElementById('inputText');
      
    if(inputClear.value.length >0 || inputClear.value !== undefined ) {
      inputClear.value ="";
    }
    
  }


  

  storeStudentDetails() {
     
    
     
     
     
     
     const listStudents = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            zipcode: zipcode,
            phone: phone,
            age: age_,
            date_input: date_input,
            status_frontend: statusFrontend,
            status_backend: statusBackend,
            status_fullstack: statusFullstack,
            status_designer: statusDesigner,
            gender_male: genderMale,
            gender_female: genderFemale,
            gender_bisexual: genderBisexual,
     }

     console.log(listStudents);
     
     console.log(validateEmail('hhgg'));
      
    
  }

render(){
    const  {datas} = this.state;
    return (
       
        <div>
            <div className="jumbotron text-center">
                <h1>Signup form developed with React App</h1>
            </div>

        {/* <div className="container">
        <div className="row">
            <div className="col-sm-4  offset-sm-4">
            <div className="input-group mb-5">
                <textarea id= "inputText" onChange={this.handleChange} type="text"  
                className="form-control" placeholder="Input data" ></textarea>
                <div className="input-group-append">
                    <button className="btn btn-success" 
                    onClick={() => {
                      if(value.length >=1) {
                        store.dispatch({
                          type: STORE_DATA,
                          payload: {
                            id: id++,
                            title: value,
                          }
                        });
                      } else {
                        alert("you are yet to input any value")
                      }
                      // this.setState({event.target.value});
                      this.clearInput();
                    }}
                    type="button">Add Note</button>
                </div>
                </div>
        </div>
        <div className='col-sm-4 offset-sm-4'>
        
          
        <ul className="list-group">
        {   
            this.state.datas.length === 0 ? <p>Am waiting for your input</p> : 
            
            datas.map((data, index) => {
              return <div key={index}>
                 <li className="list-group-item">{data.title}
                    <button className='btn btn-danger float-right btn-sm'
                        onClick={() => store.dispatch({type: DELETE_DATA, payload: data} )} >delete</button>
                    </li>
                </div>
            })
          }
       
        </ul>
        </div>
   
        
        </div>

        
        </div> */}

          {/* for Signup */}
          <div className="formSignup">
          
                <form>
                  <div className="row">
                  <div className="form-group col-md-6 col-lg-6">
                  <input type="text" onChange={this.handleChangeFisrt} className="form-control" id="firstName" placeholder="First Name" name="firstname"/>
                
                  </div>  
                  
                  <div className="form-group col-md-6 col-lg-6">
                  <input type="text" onChange={this.handleChangeLast} className="form-control" id="lastName" placeholder="LastFirst Name" name="lastname"/>
                
                  </div> 

                 

                
                  </div>

                  <div className="row">
                  <div className="form-group col-md-12 col-lg-12">
                  <input type="email" onChange={this.handleChangeEmail} className="form-control" id="email" placeholder="Enter email" name="email"/>
                </div>
                  </div>

                  <div className="row">
                  <div className="form-group col-md-12 col-lg-12">
                  <input type="number" onChange={this.handleChangeZipcode} className="form-control" id="zipcode" placeholder="Input Zipcode" name="zipcode"/>
                </div>
                  </div>

                  <div className="row">
                <div className="form-group col-md-12 col-lg-12">
                        <input type="tel" onChange={this.handleChangePhone} className="form-control" id="phone" placeholder="Phone Number" name="phone"/>
                      </div>
                </div>
                

                <div className="row">
                <div className="form-group col-md-12 col-lg-12">
                        <input type="number" onChange={this.handleChangeAge} className="form-control" id="age" placeholder="Age" name="age"/>
                      </div>
                </div>
                


                <div className="row">
                <div className="form-group col-md-12 col-lg-12">
                <div className="form-group">
                            <label htmlFor="date-input" className="col-md-2 col-lg-2 col-form-label">Date</label>
                            <div className="">
                              <input onChange={this.handleChangeDate} className="form-control" type="date"  id="date-input"></input>
                            </div>
                          </div>
                            
                          </div>
                </div>
                      

                          
                <div className="row">
                <div className="form-group col-md-12 col-lg-12">
                                <label htmlFor="gender">Maritals Status</label>
                                <select className="form-control" onChange={this.handleChangeMarital} id="marital">
                                  <option>Married</option>
                                  <option>Single</option>
                                  <option>Seperated </option>
                                  <option>Divorced</option>
                                  <option>Undisclosed</option>
                                </select>
                              </div>
                </div>

                

                <div className="row form-group col-md-12 col-lg-12">

                  <div className="form-check form-check-inline">
                        <input onChange={this.handleChangeFrontend} className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                        <label id="labelFrontend" className="form-check-label" htmlFor="inlineCheckbox1">Frontend Developer</label>
                  </div>
                  <div className="form-check form-check-inline">
                        <input onChange={this.handleChangeBackend} className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                        <label id="labelBackend" className="form-check-label" htmlFor="inlineCheckbox2">Backend Developer</label>
                  </div>
                  <div className="form-check form-check-inline">
                        <input onChange={this.handleChangeFullstack} className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
                        <label id="labelFullstack" className="form-check-label" htmlFor="inlineCheckbox3">Fullstack Developer</label>
                  </div>
                  <div className="form-check form-check-inline">
                        <input onChange={this.handleChangeDesigner} className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4"/>
                        <label id="labelDesigner" className="form-check-label" htmlFor="inlineCheckbox4">UI/UX Designer</label>
                  </div>
                  <div className="form-check form-check-inline">
                        <input onChange={this.handleChangeUndisclose} className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option5" disabled/>
                        <label id="labelNotRelate" className="form-check-label" htmlFor="inlineCheckbox5">Not related to Technology(disabled)</label>
                  </div>
                </div>
               

                <div className="row form-group col-md-12 col-lg-12">
                    <div className="form-check form-check-inline">
                          <input onChange={this.handleChangeDateMale} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                          <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                          <input onChange={this.handleChangeFemale} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                          <label  id ="labelFemale" className="form-check-label" htmlFor="inlineRadio2">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                          <input onChange={this.handleChangeBisexual} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled/>
                          <label id ="labelBisexual" className="form-check-label" htmlFor="inlineRadio3">Bisexual (disabled)</label>
                    </div>
                </div>

                <div id="buttonDiv">
                    <button id ="buttonSubmit" type="button" 
                    onClick={() => {
                      this.storeStudentDetails();
                      // console.log(this.handleChangeFemale);
                      
                      // if(value.length >=1) {
                      //   store.dispatch({
                      //     type: STORE_DATA,
                      //     payload: {
                      //       id: id++,
                      //       title: value,
                      //     }
                      //   });
                      // } else {
                      //   alert("you are yet to input any value")
                      // }
                      // this.setState({event.target.value});
                      // this.clearInput();
                    }}
                    className="btn btn-primary">Submit</button>
                </div>
              
                  
                </form>
          </div>
        </div>
      );
}
  }
  
  export default NoteApp;
