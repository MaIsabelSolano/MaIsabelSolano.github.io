import './App.css'

import { Route, Routes } from 'react-router-dom'

import Front from './routes/Front'
import Arte from './routes/Arte'
import Ingenieria from './routes/Ingenieria'

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
