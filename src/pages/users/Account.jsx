import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AccountRoutes from '../../components/Accounts/AccountRoutes'
import Nav from '../../components/header/Nav'
import Footer from '../../footer/Footer'
import { toggleMenuClose } from '../../redux/model/nav'
const Account = ({children}) => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(toggleMenuClose())
  },[])
  return (
    <div className='main-container'>
        <Nav/>
   
    <div className='container account-container'>
        <div>
            <div className='flex-justify'>
                <h1>Accounts</h1>
                <AccountRoutes/>
            </div>
            
        </div>
        <div className='container bg-black'>
    {children}
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Account