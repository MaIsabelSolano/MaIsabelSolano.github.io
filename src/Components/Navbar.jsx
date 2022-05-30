import React from "react"
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="upper-navbar">
            <div className="upper-navbar-left">
                <h1>Maria Isabel Solano</h1>
                <h3>Aka Michy</h3>
                <h3>Aka Bel</h3>
            </div>
            <div className="upper-navbar-right">
                <img src="../src/Imgs/Yo.png" className="yo-png"></img>
            </div>
        </nav>
    )
}