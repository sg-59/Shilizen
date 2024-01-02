import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
     <Link to={'cart'}> <p>Cart</p></Link>
    </div>
  )
}

export default Navbar
