import React from 'react'
import VisitorHeader from '../components/header/VisitorHeader'
import Footer from '../footer/Footer'
const VisitorLayout = ({children}) => {
  return (
<div className='main-container'>
        <VisitorHeader/>
        <div className='container'>
        {children}
        </div>
       
        <Footer/>
        
    </div>  )
}

export default VisitorLayout