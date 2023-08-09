import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../Components/CSS/Front.css'

const Category = ({ cat, linkto, col, image }) => {

    return (
        <button className='cat'
            style={{"--color": col, "--img": image}}
        >
            <Link to = {linkto}>
                <a>
                    {cat}
                </a>
            </Link>
            
        </button>
    )

}

export default Category