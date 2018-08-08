import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    return (
        this.props.persons.map( person =>
            <Person
                key={person.id}
                name={person.name}
                age={person.age}
                callback={(event) => this.props.writeName(event, person.id)}
                id={person.id} />
        )
    )
};

export default persons;