import React, { useEffect } from 'react'
import Footer from '../footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/header/Header'
import { userLog } from '../redux/auth/user_authentication'
import Nav from '../components/header/Nav'

const UserLayout = ({children}) => {
  const dispatch = useDispatch()

  const {user} = useSelector(state => state.user)
  useEffect(()=> {
    dispatch(userLog())
   },[])
   console.log(user.user.first_name)
  return (
    <div>
        <div className='main-container'>
        <Nav />
        <Header first_name={user.user.first_name}/>
        {children}
       
        <Footer/>
        
    </div>
    </div>
  )
}

export default UserLayout