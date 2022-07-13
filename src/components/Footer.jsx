import React from "react"

function Footer(){
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>created by jw {year}</p>
        </footer>
    )
}

export default Footer;