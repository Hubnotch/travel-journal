import React from 'react'
import { fontAwesomeIcons } from "@fortawesome/react-fontawesome";
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import  "../App.css"

function Navbar() {
    return (
        <nav className="navbar">
           <fontAwesomeIcons icon={faGlobe} />
            <p>my travel journal</p>
        </nav>
    )
}
export default Navbar
