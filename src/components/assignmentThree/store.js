import {axios} from 'axios';
import {createStore} from 'redux';

// var nameSingle = '';
export const nameSingl = function nameCheck() {
    if(navigator.onLine){
        console.log('online');
        axios.get('https://swapi.co/api/people/1')
      .then(function (response) {
        // handle success
        console.log(response.data['name']);
        // var nameSingle = response.data['name'];
        
        
       
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
       } else {
        console.log('offline');
       }

    }





// this app is for multiple reducers 
// it cant work on itself it have to be within a react App
// part A


// DECLARE OF YOUR ACTIONS
export const STORE_DATA = '[Data] store  user input\'s data';
export const DELETE_DATA = '[DATA] delete  user input';
let id = 0;

export const STORE_STUDENTS = '[STUDENTS] store  bio data\'s students';


export const STUDENT_ACTION = {
    type : STORE_STUDENTS,
    payload: {
        id: id++,
        firstName: '',
        lastName: '',
        email: '',
        zipcode: 0,
        phoneNumber: 0,
        date: 0,
        gender: 'Male',
        maritalStatus: '',
        jobTitle: '',
    }
}


export const DATA_ACTION = {
    type : STORE_DATA,
    payload: {
        id: id++,
        title: 'Am going home',
    }
}


const initialState = {
    // single data
    // tweet: {},

    // for array data
    datas: [],
}


// state value need to have innitial value
// reducers
function reducer(state = initialState, action) {

    switch (action.type) {

        case STORE_STUDENTS:
                // console.log(action.payload);
                console.log(action.payload.id);
                console.log(action.payload.jobTitle);
                
                // return {
                //     tweet: action.payload
                // }

                return Object.assign(state, 
                    {}
                    , {
                        // single data which is an object
                        // tweet: action.payload

                        // for array data
                        // concat below is use to add payload from
                        // another action type to this action type
                        datas: state.datas.concat(action.payload),
                    });


        case STORE_DATA:
                // console.log(action.payload);
                console.log(action.payload.id);
                console.log(action.payload.title);
                
                // return {
                //     tweet: action.payload
                // }

                return Object.assign(state, 
                    {}
                    , {
                        // single data which is an object
                        // tweet: action.payload

                        // for array data
                        // concat below is use to add payload from
                        // another action type to this action type
                        datas: state.datas.concat(action.payload),
                    });
                
        
        
        case DELETE_DATA:
        return {
          datas: state.datas.filter( (data) => data.id !== action.payload.id)
        }

        default:
        return state;
    }
}


// to make use of reducers you need to import createStore

export const store =createStore(reducer, initialState);

  