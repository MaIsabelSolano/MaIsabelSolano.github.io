import React from "react"
import { Link } from "react-router-dom"

import '../Components/CSS/Ing.css'

import Card from "../Components/Card"


const Ingenieria = () => {

    const rows = {

        display: "flex",
        flexFlow: "row",

    }

    // return ( <div style={{height: "100vh", width:"100%", backgroundColor: "black"}}></div>)

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
                    <button>
                        <Link to={"/"}>&lt;&lt;</Link>
                    </button>
                </div>
                <div style={{padding : "0 0.5em"}}>
                    <img src='/images/logoUVG.png' style={{width : "100%"}}/>
                </div> 
                <span style={{padding : "0.3em", display: "flex", flexFlow: "column", alignItems: "center"}}>
                    <h4 style={{width : "85%", textAlign:"center"}}> Fourth-year undergraduate student of Computer Science Engineering</h4>
                    <p  style={{width : "90%", textAlign:"center"}}>My journey began back in 2020 thanks to the humongous help of a the Juan Bautista Gutiérrez Fundation. Since then I've been dedicated to studying, creating, and learning the most out of everything</p>
                </span>
                
            </div>
            <div className="RightSide">
                <span className="rs_sec" >
                    <h2>Skills</h2>
                    <span className="rs_sec_riel">
                        <Card 
                            title="Python"
                            desc="3 years of experience | Competent"
                            color={"#4b4bb7"}
                            img="/images/logopython.png"
                        />
                        <Card 
                            title="Java"
                            desc="More than two years of experience | Proficient"
                            color={"#7494bf"}
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
                        color={"#646b72"}
                        img="/images/logounity.png"
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
                            title="Yet Another Programming Language"
                            desc="desc 1"
                            color={"blue"}
                        />
                        <Card 
                            title="Quick Supermarket Store Manager"
                            desc="desc 2"
                            color={"blue"}
                        />
                        <Card 
                            title="Simple Game of Life"
                            desc="desc 2"
                            color={"blue"}
                        />
                    </span>
                </span>

                <span className="rs_sec">
                    <h2>Certificates</h2>
                    <span className="rs_sec_riel">
                        <Card 
                            title="Introduction to Unreal Engine by Code Coven"
                            desc="desc 1"
                            color={"#5b1edd"}
                            img="/images/logocc.png"
                            
                        />
                        <Card 
                            title="CyberWomen Challenge 2023"
                            desc='Virtual "Cyberwomen Challenge Centroamérica y el Caribe 2023" participation'
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
                            desc="This is one of my favorite media for story telling. I absolutely admire how game design, story, music, art, and animation can be combined to create such a wonderfull experience"
                            color={"#45a89b"}
                        />
                        <Card 
                            title="UX/UI"
                            desc="As an artist, the design of things has been always an interest of mine. "
                            color={"#c46ba6"}
                        />
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Ingenieria