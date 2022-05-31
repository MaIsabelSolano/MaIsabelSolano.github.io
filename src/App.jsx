import { useState } from 'react'
import './App.css'
import AboutMe from './Components/AboutMe'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'


function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Skills />
    </div>
  )
}

export default App
