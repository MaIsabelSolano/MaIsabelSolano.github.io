import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../Components/CSS/Front.css'

const Category = ({ cat, linkto }) => {

    return (
        <button className='cat'>
            <Link to = {linkto}> {cat}
            </Link>
            
        </button>
    )

}

export default Category