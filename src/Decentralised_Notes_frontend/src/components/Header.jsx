import { PiNotepad } from "react-icons/pi";
import React from 'react';

function Header(){
    return(
        <header>
            <div className="applogo">
                <h1><PiNotepad/>Daily Planner</h1>
            </div>
            <div className="userAuth">
                <button>New User / Login</button>
            </div>
        </header>
    )
}

export default Header;