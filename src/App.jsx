import './App.css'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import Front from './routes/Front'
import Arte from './routes/Arte'
import Ingenieria from './routes/Ingenieria'

import AboutMe from './Components/AboutMe'
import ContactMe from './Components/ContactMe'
import Interests from './Components/Interests'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'


const App = () => {
    return (
        <div className="App">
            {/* <Navbar />
            <AboutMe />
            <Skills />
            <Interests />
            <Projects />
            <ContactMe /> */}

            <Routes>
                <Route exact path="/" element = {<Front/>} />
                <Route exact path="/Art" element = {<Arte/>} />
                <Route exact path="/CS" element = {<Ingenieria/>} />
            </Routes>

        </div>
    )
}

export default App
