import React from "react"
import { Link } from "react-router-dom"

import '../Components/CSS/Ing.css'

import Card from "../Components/Card"


const Ingenieria = () => {

    return (
        <div
            style={{
                display: "flex",
                flexFlow: "row",
                height: "100%",
                width: "100%"
            }}
        >
            <div className="LeftPan" 
                style={{
                    width: "20vw",
                    backgroundColor: "#00902f",
                    padding: "0.6em 0",
                    height: "100vh",
                    boxShadow: "0 0 2em rgb(0, 0, 0, 0.5)",
                    color: "white"
                }}>
                <div>
                    <Link to={"/"}>
                        <button className="return-btn">
                            Home
                        </button>
                    </Link>
                    
                </div>
                <div style={{padding : "0 0.5em"}}>
                    <img src='/images/logoUVG.png' style={{width : "100%"}}/>
                </div> 
                <span style={{padding : "0.3em", display: "flex", flexFlow: "column", alignItems: "center"}}>
                    <h4 style={{width : "85%", textAlign:"center"}}> Fourth-year undergraduate student of Computer Science Engineering</h4>
                    <p  style={{width : "90%", textAlign:"center"}}>My journey began in 2020 thanks to the humongous help of the Juan Bautista Guti&eacute;rrez Foundation. Since then I've been dedicated to studying, creating, and learning the most out of everything</p>
                </span>
                
            </div>
            <div className="RightSide">
                <span className="rs_sec" >
                    <h2>Skills</h2>
                    <span className="rs_sec_riel">
                        <Card 
                            title="Python"
                            desc="3 years of experience | Competent"
                            color={"#334393"}
                            img="/images/logopython.png"
                        />
                        <Card 
                            title="Java"
                            desc="More than two years of experience | Proficient"
                            color={"rgb(75 79 122)"}
                            img="/images/logojava.png"
                        />
                        <Card 
                            title="React, Javascript, CSS"
                            desc="More than one year of experience | Advanced beginner"
                            color={"#515f72"}
                            img="/images/logoreact.png"
                        />
                        <Card 
                            title="Unreal Engine"
                            desc="A year of experience | beginner"
                            color={"#c48d35"}
                            img="/images/logounreal.png"
                        />
                        <Card 
                            title="Unity"
                            desc="A year of experience | beginner"
                            color={"#646b72"}
                            img="/images/logounity.png"
                        />
                        <Card 
                            title="DBM"
                            desc="A year of experience | Postgres, MongoDB  | Advanced beginner"
                            color={"#8fa899"}
                            img="/images/logopostgres.png"
                        />
                    </span>
                </span>

                <span className="rs_sec">
                    <h2>Work Experience</h2>
                    <span className="rs_sec_riel">
                        <Card 
                            title="Object Oriented Programming Auxiliary Professor"
                            desc="(Jul 2023 - Nov 2023)"
                            color={"#c95aa8"}
                        />
                        <Card 
                            title="Basic Programming and Algorithms Auxiliary Professor"
                            desc="(Jan 2023 - Present day)"
                            color={"#cc5353"}
                        />
                    </span>
                </span>
                
                <span className="rs_sec">
                    <h2>Project Examples</h2>
                    <span className="rs_sec_riel">
                        <Card
                            title="Mili"
                            desc="Figma | Assignment for Human Computer Intraction (HCI) | Simple Prototye of an App to record comics and manga reading"
                            color={"rgb(33, 145, 123)"}
                            img="/images/Mili.png"
                            linkName="Figma"
                            linkURL="https://www.figma.com/proto/2hDOpllLNUydhcmYhRqcHU/MILI?node-id=0-7&starting-point-node-id=0%3A7&mode=design&t=asVna9ivSCWXAshM-1"
                        />
                        <Card 
                            title="Syntactic Analysis Generator"
                            desc="Java | Assignment for Programming Language Design | YAPL (Yet Another Programming Language) syntactic analysis generator"
                            color={"#6b7384"}
                            img="/images/LR_0-2.jpg"
                            linkName="github"
                            linkURL="https://github.com/MaIsabelSolano/UVG_DLP_Syntactic-Analysis-Generator"
                        />
                        <Card 
                            title="Quick Supermarket Store Manager"
                            desc="React | Assignment for Data Bases 2 | Simple react app connected to MongoDB "
                            color={"#51777f"}
                            img="/images/mongo.png"
                            linkName="github"
                            linkURL="https://github.com/ChristopherG19/Supermarket_mongodb/tree/main"
                        />
                        <Card 
                            title="Simple Game of Life"
                            desc="Python | Assignment for Computer Graphics | Simple game of life using pygame"
                            color={"#a483bf"}
                            img="/images/gol.png"
                            linkName="github"
                            linkURL="https://github.com/MaIsabelSolano/UVG_Graficas_Game-Of-Life"
                        />
                        <Card 
                            title="Instagram Re-design: (Insta-MR)"
                            desc="Assignment for Human-Computer-Interaction | Instagram simple redesign"
                            color={"#64bcb9"}
                            img="/images/insta.png"
                            linkName="Google Drive"
                            linkURL="https://drive.google.com/file/d/1RS6jaWb_M4B8tqy0ZS08xyfUusVQfhPJ/view?usp=sharing"
                        />
                        <Card 
                            title="WhatsApp rebranding"
                            desc="Assignment for Human-Computer-Interaction | WhatsApp Feature Addition"
                            color={"#48ad76"}
                            img="/images/figma.png"
                            linkName="Google Drive"
                            linkURL="https://drive.google.com/file/d/1Tt30sOBTLP0y8liqjIFL6mUPEBKUCSfV/view?usp=sharing"
                        />
                    </span>
                </span>

                <span className="rs_sec">
                    <h2>Certificates (open image in a new tab to see)</h2>
                    <span className="rs_sec_riel">
                        <Card
                            title="Get Started With Figma"
                            desc="Easy and quick introduction to Figma | Coursera Project Network"
                            color="rgb(20, 156, 190)"
                            img="/images/Coursera_GetStartedWithFigma.png"
                            linkName="Coursera"
                            linkURL="https://coursera.org/share/86823a67ba3911cce40f5dec761e5e21"
                        />
                        <Card 
                            title="Introduction to Unreal Engine by Code Coven"
                            desc="8 week virtual course (march 2022 - may 2022)"
                            color={"#5b1edd"}
                            img="/images/logocc.png"
                            
                        />
                        <Card 
                            title="CyberWomen Challenge 2023"
                            desc='Virtual "Cyberwomen Challenge Centroam&eacute;rica y el Caribe 2023" participation'
                            color={"#cc5353"}
                            img="/images/cyberwoman.png"
                        />
                        <Card
                            title="Lean 6 Sigma: Yellowbelt"
                            desc={"Certified by CMI (Corporación Multi Inversiones)"}
                            color={"#d3ce2a"}
                            img="/images/yellowbelt.png"
                        />
                    </span>
                </span>

                <span className="rs_sec" >
                    <h2>Focused on</h2>
                    <span className="rs_sec_riel">
                        <Card 
                            title="Game Developement"
                            desc="This is one of my favorite media for storytelling. I absolutely admire how game design, story, music, art, and animation can be combined to create such a wonderful experience"
                            color={"#45a89b"}
                        />
                        <Card 
                            title="UX/UI"
                            desc="As an artist, the design of things has been always an interest of mine. And knowing how the user interacts naturally with a program is the key to its success"
                            color={"#c46ba6"}
                        />
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Ingenieria