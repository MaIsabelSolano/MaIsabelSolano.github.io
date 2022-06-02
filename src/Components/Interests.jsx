import React from "react"
import './Components.css'

export default function Interests() {

    function TarjetaIn(props) {
        return (
            <div className="tarjetaIn">
                <img src={props.imagen}></img>
                <div>
                    <h2>{props.interes}</h2>
                    <p>{props.desc}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="info info-interests">
            <h2>Interests</h2>
            <div className="tarjetasIn">
                <TarjetaIn
                    imagen = "/images/book.png"
                    interes = "StoryTelling <3"
                    desc = "I'm extremely passionated about any form of story telling. But if I had to pick my top 3, they would be comics, animation and videogames!"
                />
                <TarjetaIn 
                    imagen = "/images/volleyball.png"
                    interes = "Volleyball <3"
                    desc = "I may not be the greates volleyball of them all, but if invited to play, I won't think twice before standing on the court hehe"
                />
                <TarjetaIn 
                    imagen = "/images//music.png"
                    interes = "Music <3"
                    desc ="I absolutely love listening to musics. I may not be able to play any instruments (yet), but I can apreciate the feeling behind songs and their developement"
                />
            </div>
        </div>
    )
}