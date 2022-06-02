import React from "react"
import './Components.css'

export default function ContactMe() {
    return (
        <div className="info info-ContactMe">
            <h2>Contact me</h2>
            <div>
                <img src="/images/contact-me.gif"></img>
                <div>
                    <h3 className="contact-me-title">Social Media</h3>
                    <a href="https://www.instagram.com/bel_art27/">Instagram</a>
                    <a href="https://twitter.com/Bel_Art27">Twitter</a>
                    <a href="https://www.linkedin.com/in/isabel-solano/">LinkedIn</a>
                </div>
                <div>
                    <h3 className="contact-me-title">E-mails</h3>
                    <a>misolanob@gmail.com</a>
                    <a>bel_contact27@gmail.com</a>
                </div>
                <div>
                    <h3 className="contact-me-title">All the rest</h3>
                    <a href="https://linktr.ee/bel_art27">Linktree</a>
                </div>
            </div>
        </div>
    )
}