import React from 'react';


const validationComponent = (props) => {
    return (
        <div>
            <p className={props.style}>{props.text}</p>
        </div>
    )
};

export default validationComponent;
