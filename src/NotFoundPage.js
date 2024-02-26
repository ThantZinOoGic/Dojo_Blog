import React from 'react'
import { Link } from 'react-router-dom'

export default function 
() {
  return (
    <div className='not-found'>
        <h2>Sorry</h2>
        <p>The Page not found</p>
        <Link to="/">Back To Home</Link>
    </div>
  )
}
