import React from 'react'
import VisitorHeader from '../components/header/VisitorHeader'
import VNav from '../components/header/VNav'
import Footer from '../footer/Footer'
const GuestLayOut = ({children}) => {
  return (
<div className='main-container'>
        <VNav />
        {children}
       
        <Footer/>
        
    </div>  )
}

export default GuestLayOut