import React from "react"
import { Link } from "react-router-dom"
import '../Components/CSS/Front.css'
import HeaderF from "../Components/HeaderF"
import Category from "../Components/Category"
import Contact from "../Components/Contact"

const Front = ({}) => {

  return (
    <div style={{
      height: "100%" ,
      margin: 0,
      padding: 0,
    }}>
      <HeaderF/>
    <div className="Front">
    <span>
      <Category 
        cat = "Computer Science"
        linkto="/CS"
      />
      <Category
        cat = "Art"
        linkto="/Art"
      />
    </span>
    </div>
      <Contact/>
    </div>
  )

}

export default Front