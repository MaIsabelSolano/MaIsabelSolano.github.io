import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Category = ({ cat, linkto }) => {

    return (
        <button>
            <Link to = {linkto}> {cat}
            </Link>
            
        </button>
    )

}

export default Category