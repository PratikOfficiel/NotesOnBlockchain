import React from "react";

var year = new Date().getFullYear();

function Footer(){
    return(
        <footer>
            <p>&copy; Pratik {year}</p>
        </footer>
    )
}

export default Footer;