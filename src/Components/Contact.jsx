import React, { useEffect, useState } from 'react'

import '../Components/CSS/Front.css'

const Contact = ({  }) => {

    return (
        <footer className='contact' >
            {/* Centrar */}
            <h3>Where to find me...</h3>
            <div>
                {/* Social media */}
                <div className='cont-minsec'>
                    <h3>e-mail</h3>
                    <a>misolanob@gmail.com</a>
                    <a>bel_contact27@gmail.com</a>

                </div>
                <div className='cont-minsec'>
                    <h3>Social media</h3>
                    <a href='https://www.linkedin.com/in/isabel-solano/' target="_blank" >
                        LinkIn
                    </a>
                    
                </div>

            </div>
        </footer>
    )

}

export default Contact