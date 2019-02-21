import React from 'react';
import './note.scss'

import {store, STORE_DATA, DELETE_DATA} from './store';

let id =0;
let value = "";
class NoteApp extends React.Component {

  state = {
    datas: []
}
componentDidMount(){
    store.subscribe(() => {
      this.setState({datas: store.getState().datas})
    })
  }
  handleChange(event) {
    value = event.target.value;

      
    console.log(event.target.value);
    
  }
render(){
    const  {datas} = this.state;
    return (
       
        <div>
            <div className="jumbotron text-center">
                <h1>Note App develop with React App</h1>
                <p>Note Saving Application</p> 
            </div>

        <div className="container">
        <div className="row">
            <div className="col-sm-4  offset-sm-4">
            <div className="input-group mb-5">
                <textarea onChange={this.handleChange} type="text" className="form-control" placeholder="Input data" ></textarea>
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
                        })
                      } else {
                        alert("you are yet to input any value")
                      }
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
        </div>

        </div>
      );
}
  }
  
  export default NoteApp;
