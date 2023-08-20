import React, { useEffect } from 'react'
import VisitorHeader from '../components/header/VisitorHeader'
import Footer from '../footer/Footer'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLog } from '../redux/auth/user_authentication'
const VisitorLayout = ({children}) => {
  const navigation = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.user)
  useEffect(()=> {
   dispatch(userLog())
  },[])
  console.log(user)
  if(user){
    navigation("/home")
  }
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