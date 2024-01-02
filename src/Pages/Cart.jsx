import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useParams } from 'react-router-dom'

const Cart = () => {
  const {ids} =useParams()
  return (
    <div>
        <Navbar/>
      <h1>Cart  :{ids}</h1>
      <Footer/>
    </div>
  )
}

export default Cart
