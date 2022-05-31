import { useState } from 'react'
import './App.css'
import AboutMe from './Components/AboutMe'
import Navbar from './Components/Navbar'


function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <Navbar />
      <AboutMe />
    </div>
  )
}

export default App
