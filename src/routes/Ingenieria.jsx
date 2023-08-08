import React from "react"
import { Link } from "react-router-dom"
import Card from "../Components/Card"

const Ingenieria = () => {
    return (
        <div>
            <div className="LeftPan">
                <div> LOGO </div>
                <h4> Fourth-year undergraduate student of Computer Science Engineering</h4>
                <p>My journy started on 2020 thanks to the humongous help of a the Juan Bautista Gutiérrez Fundation. Since then I've been dedicated to styding, creating, and learning</p>
            </div>
            <div>
                <span>
                    <h2>Habilities</h2>
                    <span>
                        <Card 
                            title="1"
                            desc="desc 1"
                        />
                        <Card 
                            title="2"
                            desc="desc 2"
                        />
                    </span>
                </span>

                <span>
                    <h2>Work Experience</h2>
                    <span>
                        <Card 
                            title="Object Oriented Programming Auxiliary Professor"
                            desc="(Jul 2023 - Nov 2023)"
                        />
                        <Card 
                            title="Basic Programming and algorithms Auxiliary Professor"
                            desc="(Jan 2023 - Present day)"
                        />
                    </span>
                </span>
                
                <span>
                    <h2>Projects</h2>
                    <span>
                        <Card 
                            title="1"
                            desc="desc 1"
                        />
                        <Card 
                            title="2"
                            desc="desc 2"
                        />
                    </span>
                </span>

                <span>
                    <h2>Certificates</h2>
                    <span>
                        <Card 
                            title="Introduction to Unreal Engine by Code Coven"
                            desc="desc 1"
                        />
                        <Card 
                            title="CyberWomen Challenge 2023"
                            desc="Virtual Cyberwomen Challenge Centroamérica y el Caribe 2023 participation"
                        />
                    </span>
                </span>

                <span>
                    <h2>Focused on</h2>
                    <span>
                        <Card 
                            title="Game Developement"
                            desc="desc 1"
                        />
                        <Card 
                            title="UX/UI"
                            desc="desc 2"
                        />
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Ingenieria