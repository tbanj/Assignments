import React from 'react'

const students =[
    {
        name:'kingsley',
        age: 50,
        hobbies:['singing', 'dancing']
    },

    {
        name:'wole',
        age: 28,
        hobbies:'eating'
    },

    {
        name:'omotola',
        age: 42,
        hobbies:'playing'
    },

    {
        name:'david',
        age: 22,
        hobbies:'running'
    },

    {
        name:'tola',
        age: 34,
        hobbies:'coding'
    },
];

function mapArray(student){
    const nameValue = student.map((value)=>{
        return value.name;
    })
    
    const ageValue = student.map((value)=>{
        return value.age;
    })
    
    const hobbiesValue = student.map((value)=>{
        return value.hobbies;
    })
    
    
    
    for(let i = 0; i < student.length; i++) {
         
    
        console.log(`Name: ${nameValue[i]}  Age: ${ageValue[i]}  Hobbies: ${hobbiesValue[i]} `);
        
    }

}


class Dailychallenge1 extends React.Component{
    render(){

        return <div>
        {mapArray(students)}

        </div>
    }
}

export default Dailychallenge1;


