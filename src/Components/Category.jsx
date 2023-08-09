import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../Components/CSS/Front.css'

const Category = ({ cat, linkto, col, image, title }) => {

    return (
        <Link to = {linkto} title={title}>
            <button className='cat'
                style={{"--color": col, "--img": image}}
                onClick={{}}
            >
                <a>
                    {cat}
                </a>
            </button>
        </Link>
    )

}

export default Category