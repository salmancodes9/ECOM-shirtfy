import React from 'react'
import { Link } from 'react-router-dom'

const CatSec = ({image, to = '#'}) => {
  return (
    <Link to={to} className='inline-block pl-6 pt-6 '>
        <img src={image} alt="" className='w-full h-80 object-cover rounded-t-lg' />
        <p></p>
    </Link>
  )
}

export default CatSec
