import { MdDeleteOutline } from "react-icons/md";
import React from 'react';

function Note(props){
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.message}</p>
            <button onClick={()=> props.onDelete(props.id)}><MdDeleteOutline/></button>
        </div>
    );
}

export default Note;