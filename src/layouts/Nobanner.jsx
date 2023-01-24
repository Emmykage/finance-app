import React from 'react'
import Nav from '../components/header/Nav'
import Footer from '../footer/Footer'

const Nobanner = ({children}) => {
  return (
    <div className='main-container'>
        <Nav/>
        <div className='container bg-black'>
        {children}
        </div>
       
        <Footer/>
        
    </div>
  )
}

export default Nobanner