import React from 'react';
import './note.scss'

class NoteApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'You didnt type anything yet'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Note you inputted have been submitted ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
        
      return (
          // handleSubmit will extract the data from the form
        <div className="container">
            <div className="row">
            <div className="col-sm-12  col-md-12 formParent">
            <form className="forCenter" onSubmit={this.handleSubmit}>
            <h1> Note Application</h1>
          <label>
           
            <br/>
            
            <textarea className="textize"  defaultValue={this.state.value} onChange={this.handleChange} />
          </label>
          <br/>
          {/* <p className="changeColor"> Alabi Temitope</p> */}
          <input className="btn btn-success" type="submit" value="Submit" />
        </form>
            </div>
            </div>
            

        
        
        

        </div>



              

        
      );
    }
  }
  
  export default NoteApp;
