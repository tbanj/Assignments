//action-type
import { createStore } from 'redux';

export const SAVE_NOTE = "[Note] save user's note";
export const DELETE_NOTE = '[NOTE] delete a note';

const initialState = {
  note: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_NOTE:
      return Object.assign(
        state,
        {},
        {note: state.note.concat(action.payload)}
      );
      
    case DELETE_NOTE:
      return {
        note: state.note.filter(
          (note) => note.id !== action.payload.id
        ),
      };

    default:
      return state
      //eslint-disable-next-line
        break;
      
  }
}

export const store = createStore(reducer, initialState);
