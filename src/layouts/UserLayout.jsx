import React from 'react'
import VNav from '../components/header/VNav'
import Footer from '../footer/Footer'

const UserLayout = ({children}) => {
  return (
    <div>
        <div className='main-container'>
        <VNav />
        {children}
       
        <Footer/>
        
    </div>
    </div>
  )
}

export default UserLayout