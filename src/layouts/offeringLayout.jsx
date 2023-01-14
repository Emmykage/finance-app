import React from 'react'
import Header from '../components/header/Header'
import OfferingHeader from '../components/header/OfferingHeader'
import Footer from '../footer/Footer'

const OfferLayout = ({children}) => {
  return (
    <div className='main-container'>
        <OfferingHeader/>
        <div className='container'>
        {children}
        </div>
       
        <Footer/>
        
    </div>
  )
}

export default OfferLayout