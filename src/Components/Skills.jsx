import React from "react"
import './Components.css'

export default function Skills() {

    function Tarjeta(props) {
        return (
            <div className="tarjeta">
                <h1>{props.skill}</h1>
                <p>{props.desc}</p>
                <a href={props.link}>{props.donde}</a>
            </div>
        )
    }

    return (
        <div className="info info-skills">
            <h2>Skills</h2>
            <div className="tarjetas-skills">
                <Tarjeta 
                    skill="Digital Art"
                    desc="Over 8 years of experience in digital art. Experienced with programs such as Clip Studiop Paint, Paintool SAI, FireAlpaca"
                    donde="Instagram"
                    link="https://www.instagram.com/bel_art27/"
                />
                <Tarjeta 
                    skill="Programming"
                    desc="Focused on OOP. Experienced with Python, Java"
                    donde="Github"
                    link="https://github.com/MaIsabelSolano"
                />
                <Tarjeta
                    skill="Videogame Development"
                    desc="Experienced with videogame development using UNITY and UNREAL ENGINE"
                    donde="Itch.io"
                    link="https://bel-games.itch.io/"
                />
            </div>
        </div>
    )
}