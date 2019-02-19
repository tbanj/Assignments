import React from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import { store, DELETE_NOTE, SAVE_NOTE } from './store';

const Button = styled.button `
background: ${(props) => (props.primary ? '#282c34' : 'blue')};
color: white;
margin-top: 20px;
padding: 10px 14px;
border-radius: 20px;
text-align: center;
`;

const Textarea = styled.textarea `
    width: 200px;
    height: 100px;
`;

class Notes extends React.Component{
    constructor(props){
        super(props);

    this.state = {
        note: [],
        writeNow: ""
    };

    this.updateWriteNow = this.updateWriteNow.bind(this);
    this.addNewNote = this.addNewNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    }

    updateWriteNow(event) {
        this.setState({ writeNow: event.target.value });
      }
    
      addNewNote(event) {
        const newNote = {
          id: uuid(),
          title: this.state.writeNow,
        };
    
        const createNote = this.state.note.concat(newNote);
        this.setState({ note: createNote, writeNow: ''});
      }
    
      deleteNote(id) {
        const updatedNote = this.state.note.filter(function(note) {
          return note.id !== id;
        });
    
        this.setState({ note: updatedNote });
      }

      componentDidMount() {
        store.subscribe(() => {
          this.setState({ note: store.getState().note });
        });
      }

    render(){
        return(
            <div>
            <Textarea
                type="text"
                name="writeNow"
                id = "input-text"
                value={this.state.writeNow}
                placeholder="Enter a new Note"
                onChange={this.updateWriteNow}
                />

            <br></br>
        
            <Button
          onClick={(event) => {
            store.dispatch({type: SAVE_NOTE, payload: {note: this.addNewNote},
            })
          }
        }
        >
          Save Note
        </Button>
          
            {this.state.note.length === 0 ? (
          <h6>Notes app is empty,don't forget to keep tabs</h6> 
        ) : (
          <ol>
            {this.state.note.map((note, index) => {
              return (
                <div key={index}>
                  <li>{note.title}</li>
                  {/* <Button onClick={event => this.deleteNote(note.id)}>
                    Delete Note
                  </Button> */}
                  <Button onClick={(event) => {
                    store.dispatch({type: DELETE_NOTE, payload: {note: this.deleteNote(note.id)}
                  })
                }
              }
                  >Delete Note

                  </Button>
                </div>
              )}
              )}
          </ol>
        )}        
            </div>
        )
    }
}


export default Notes;