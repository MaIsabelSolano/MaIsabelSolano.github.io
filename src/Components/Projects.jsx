import React from "react"
import './Components.css'

export default function Projects() {

    function Proyectos(props) {
        return (
            <div className="proyecto">
                <img src={props.imagen}></img>
                <h3>{props.titulo}</h3>
                <p>{props.desc}</p>
            </div>
        )
    }

    return (
        <div className="info info-projects">
            <h2>Projects</h2>
            <div>
                <Proyectos
                    imagen = "../src/Imgs/rnk.png"
                    titulo = "Ritsuko & Kooji"
                    desc = ""
                />
                <Proyectos
                    imagen = "../src/Imgs/rnk.png"
                    titulo = "Ritsuko & Kooji"
                    desc = ""
                />
            </div>
        </div>
    )
}