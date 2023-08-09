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
          title="Click to know more about me"
        />
        <Category
          cat = "Art"
          linkto=""
          col={"#b5b2be"}
          image = "url('/images/construction.png')"
          title="Coming soon"
        />
      </span>
      <Contact/>
      
    </div>
  )

}

export default Front