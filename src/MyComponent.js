import React from "react";
var person = [
    {
        name: 'Chudi',
        age: 10,
        hobbies: 'running'
    },
    {
        name: 'Tony',
        age: 13,
        hobbies: 'coding'
    },
    {
        name: 'Arnold',
        age: 15,
        hobbies: 'eating'
    },
    {
        name: 'Richard',
        age: 20,
        hobbies: 'dancing'
    },
    {
        name: 'Chudi',
        age: 40,
        hobbies: 'playing'
    },
]



class MyComponent extends React.Component{
    render() {
        return <div>
            {
                person.map(function(people){
                    return <h3> Name:{people.name}. age:{people.age}. Hobbies include {people.hobbies}. </h3>
                })
            }
        </div>
    }
}

export default MyComponent;

