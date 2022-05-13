import React from "react"
import logo from '../assets/airbnblogo.png';
import '../assets/airbnb.css'
export default function Airnavbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="LOGO" className="nav--logo"/>
        </nav>
    )
}