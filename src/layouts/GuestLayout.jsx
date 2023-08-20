import React from 'react'
import VisitorHeader from '../components/header/VisitorHeader'
import VNav from '../components/header/VNav'
import Footer from '../footer/Footer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const GuestLayOut = ({children}) => {
  const navigation = useNavigate()
  const {user} = useSelector(state => state.user)
  console.log(user)
  if(user){
    navigation("/home")
  }
  return (
<div className='main-container'>
        <VNav />
        {children}
       
        <Footer/>
        
    </div>  )
}

export default GuestLayOut