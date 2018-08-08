import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map( person =>
            <Person
                key={person.id}
                name={person.name}
                age={person.age}
                callback={(event) => props.action(event, person.id)}
                id={person.id} />
)

export default persons;