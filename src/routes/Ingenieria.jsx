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
                    height: "100vh"
                }}>
                <div>
                    <button>
                        <Link to={"/"}>&lt;&lt;</Link>
                    </button>
                </div>
                <div style={{padding : "0.5em"}}>
                    <img src='/images/logoUVG.png' style={{width : "100%"}}/>
                </div> 
                <span style={{padding : "0.5em", display: "flex", flexFlow: "column", alignItems: "center"}}>
                    <h4 style={{width : "85%", textAlign:"center"}}> Fourth-year undergraduate student of Computer Science Engineering</h4>
                    <p  style={{width : "90%", textAlign:"center"}}>My journey started back in 2020 thanks to the humongous help of a the Juan Bautista Gutiérrez Fundation. Since then I've been dedicated to styding, creating, and learning the most out of everything</p>
                </span>
                
            </div>
            <div className="RightSide">
                <span className="rs_sec" >
                    <h2>Habilities</h2>
                    <span className="rs_sec_riel">
                        <Card 
                            title="Python"
                            desc="desc 1"
                            color={"#008000"}
                        />
                        <Card 
                            title="Java"
                            desc="OOP"
                            color={"red"}
                        />
                        <Card 
                            title="JS, JSX, CSS"
                            desc="OOP"
                            color={"blue"}
                        />
                        <Card 
                            title="Unreal Engine"
                            desc="desc 2"
                            color={"blue"}
                        />
                        <Card 
                            title="Unity"
                            desc="desc 2"
                            color={"blue"}
                        />
                    </span>
                </span>

                <span className="rs_sec">
                    <h2>Work Experience</h2>
                    <span style={rows}>
                        <Card 
                            title="Object Oriented Programming Auxiliary Professor"
                            desc="(Jul 2023 - Nov 2023)"
                            color={"blue"}
                        />
                        <Card 
                            title="Basic Programming and algorithms Auxiliary Professor"
                            desc="(Jan 2023 - Present day)"
                            color={"blue"}
                        />
                    </span>
                </span>
                
                <span className="rs_sec">
                    <h2>Projects</h2>
                    <span style={rows}>
                        <Card 
                            title="1"
                            desc="desc 1"
                            color={"blue"}
                        />
                        <Card 
                            title="2"
                            desc="desc 2"
                            color={"blue"}
                        />
                    </span>
                </span>

                <span className="rs_sec">
                    <h2>Certificates</h2>
                    <span style={rows}>
                        <Card 
                            title="Introduction to Unreal Engine by Code Coven"
                            desc="desc 1"
                            color={"blue"}
                        />
                        <Card 
                            title="CyberWomen Challenge 2023"
                            desc="Virtual Cyberwomen Challenge Centroamérica y el Caribe 2023 participation"
                            color={"blue"}
                        />
                        <Card
                            title="Lean 6 Sigma: Yellowbelt"
                            color={"yellow"}
                        />
                    </span>
                </span>

                <span className="rs_sec" >
                    <h2>Focused on</h2>
                    <span style={rows}>
                        <Card 
                            title="Game Developement"
                            desc="desc 1"
                            color={"blue"}
                        />
                        <Card 
                            title="UX/UI"
                            desc="desc 2"
                            color={"blue"}
                        />
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Ingenieria