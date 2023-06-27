import React from 'react'
import '../../components/activities/activities.css'
import { NavLink, Outlet } from 'react-router-dom'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {MdPayment} from 'react-icons/md'
import {BiStar} from 'react-icons/bi'
import Nav from '../../components/header/Nav'

const Activities = () => {
  const activeLink = "active-link"
  const normalLink = ""
  return (
    <div className='main-container'>
      <Nav/>

  
    <div className='activities-container'>
      <div className='top-header'>
        <h2>
           All Activities
        </h2>
      <div >
        <ul className='nav-links flex-justify-start'>
          <li><NavLink to="/activities" className={({isActive}) => (isActive ? activeLink : normalLink)}>All messages</NavLink></li>
          <li><NavLink to="/activities/investment_updates" className={({isActive}) => (isActive ? activeLink : normalLink)}  ><AiOutlineInfoCircle/> <span>Investment updates</span>  </NavLink></li>
          <li><NavLink to="/activities/payments" className={({isActive}) => (isActive ? activeLink : normalLink)} > <MdPayment/> <span>Payments</span> </NavLink></li>
          <li><NavLink to="/activities/important" className={({isActive}) => (isActive ? activeLink : normalLink)}><BiStar/><span>Important</span> </NavLink></li>
        </ul>
    </div>
    </div>
    <div className='activity'>
      <Outlet/>
    </div>
    

    </div>
    </div>
  )
}

export default Activities

