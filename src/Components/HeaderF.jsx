import React, { useEffect , useState } from 'react'

import '../Components/CSS/Front.css'

const HeaderF = () => {

    return (
        <div className='header'>
            {/* Posicionamiento */}
            <div style={{width: "100%", height: "100%"}}>
                {/* Logo/imagen */}
                <img 
                    className='logo'
                    src='/images/yo.png'
                    style={{
                        width: "auto",
                        maxWidth: "10em",
                        minWidth: "5em",
                        borderRadius: "10em",
                        boxShadow: "0 0 2em rgb( 255, 255, 255, 0.75)",
                        border: "solid",
                        borderColor: "white"
                        

                        
                    }}      
                />

                <div>
                    {/* Nombre */}
                    <div className='title'>
                        <h1>Ma. Isabel "Michy" Solano</h1>
                    </div>

                    {/* Info */}
                    <span>
                        <p><i>Computer Science Engineer | Digital Artist | Comic Artist</i></p>
                    </span>
                </div>

                
            </div>
        </div>
    )
}

export default HeaderF