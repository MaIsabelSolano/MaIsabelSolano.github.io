import { useState } from 'react'
import './App.css'
import AboutMe from './Components/AboutMe'
import ContactMe from './Components/ContactMe'
import Interests from './Components/Interests'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'


function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Skills />
      <Interests />
      <Projects />
      <ContactMe />
    </div>
  )
}

export default App
