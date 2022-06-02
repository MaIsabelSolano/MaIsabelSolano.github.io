import React from "react"
import './Components.css'

export default function Projects() {

    function Proyectos(props) {
        return (
            <div className="proyecto">
                <img src={props.imagen}></img>
                <h3>{props.titulo}</h3>
                <p>{props.desc}</p>
                <a>{props.link1_nom}</a>
                <a>{props.link2_nom}</a>
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
                    desc = "A wholesome story featuring a 'lone wolf' and a 'timid cat'"
                    link1_nom = "Read on Webtoon"
                    link2_nom = "Read on Tapas"
                />
                <Proyectos
                    imagen = "../src/Imgs/coming-soon.png"
                    titulo = "Coming soon"
                    desc = ""
                />
            </div>
        </div>
    )
}