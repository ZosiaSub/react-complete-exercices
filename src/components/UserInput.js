import React from "react";

const UserInput = (props) => {
    return(
        <div>
            <input type="text" onChange={props.changeName}/>
        </div>        
    )
}
export default UserInput;
