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
          col={"#b4beb2"}
          image = "url('/images/programming_v1.png')"
        />
        <Category
          cat = "Art"
          linkto="/Art"
          col={"#b5b2be"}
        />
      </span>
      <Contact/>
      
    </div>
  )

}

export default Front