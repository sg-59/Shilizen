import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate=useNavigate()

setTimeout(()=>{
  navigate('/cart/bvcfr12344')
},3000)



  return (
    <div>
        <Navbar/>
      <h1>Home page</h1>
      <form  encType='multipart/form/data'>
      <input type='text' placeholder='Email'/>
      <input type="text" placeholder='Name' />
      <input type="file" />
      <button type='submit'>submit</button>
      </form>
      <Footer/>
     
   
    </div>
  )
}

export default Home
