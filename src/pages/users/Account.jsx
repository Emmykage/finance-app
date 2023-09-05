import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AccountRoutes from '../../components/Accounts/AccountRoutes'
import Nav from '../../components/header/Nav'
import Footer from '../../footer/Footer'
import { toggleMenuClose } from '../../redux/model/nav'
import { Outlet } from 'react-router-dom'
// import { getAssets } from '../../redux/actions/assets'
import { userLog } from '../../redux/auth/user_authentication'
import { getUser } from '../../redux/actions/users'
const Account = () => {
  const {user} = useSelector(state => state.users)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getUser())

    dispatch(toggleMenuClose())
  },[])

  return (
    <div className='main-container'>
        <Nav/>
   
    <div className='container account-container'>
        <div>
            <div className='flex-justify'>
                
                <AccountRoutes/>
            </div>
            
        </div>
        <div className='container bg-black'>
    <Outlet context={[user]}/>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Account