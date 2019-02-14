import React, { Component } from 'react'
import Student from "./Student";
import studentData from "./data";
export default class Studentlist extends Component {
  constructor(props){
      super(props);

      this.state = {
          students: studentData
      };
  }
    
    render() {
    return (
      <div>
          {this.state.students.map(student => <Student key={student.id} info={student}/>)}
      </div>
    )
  }
}
