import React from 'react';

const person = ( props ) => {
    console.log(props);
    return (
        <div>
            <p onClick={props.click}>Hi my name is {props.name} and I am {props.age} years old:)</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.tipe} />
        </div>
   
    )
};

export default person;