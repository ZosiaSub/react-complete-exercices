import React from 'react';
import './Person.css';

const person = ( props ) => {
    console.log(props)
    return (
        <div className="Person">
            <p onClick={props.click}>Hi my name is {props.name} and I am {props.age} years old:)</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.tipe} />
        </div>
   
    )
};

export default person;