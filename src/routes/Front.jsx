import React from "react"
import { Link } from "react-router-dom"
import '../Components/CSS/Front.css'
import HeaderF from "../Components/HeaderF"
import Category from "../Components/Category"
import Contact from "../Components/Contact"

const Front = ({}) => {

  return (
    <div className="Front">
    <HeaderF/>
      <span className="categories">
        <Category 
          cat = "Computer Science"
          linkto="/CS"
        />
        <Category
          cat = "Art"
          linkto="/Art"
        />
      </span>
      <Contact/>
      
    </div>
  )

}

export default Front