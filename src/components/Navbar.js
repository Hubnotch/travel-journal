import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';
import  "../App.css"


function Navbar() {
    return (
        <nav className="navbar">
        <FontAwesomeIcon icon={faGlobeAfrica} size='2x' className="navbar--icon" />
            <p>my travel journal</p>
        </nav>
    )
}
export default Navbar
