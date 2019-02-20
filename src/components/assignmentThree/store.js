import {axios} from 'axios';

// var nameSingle = '';
export const nameSingl = function nameCheck() {
    if(navigator.onLine){
        console.log('online');
        axios.get('https://swapi.co/api/people/1')
      .then(function (response) {
        // handle success
        console.log(response.data['name']);
        var nameSingle = response.data['name']
        
        
       
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
       } else {
        console.log('offline');
       }

    }
  