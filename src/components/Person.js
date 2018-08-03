import React from 'react';
import './Person.css';

const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Hi my name is {props.name} and I am {props.age} years old:)</p>
            <p>{props.children}</p>
            <input id={`person_${props.id}`} type="text" onChange={props.callback} />
        </div>
   
    )
};

export default person;
