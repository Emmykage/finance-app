import React from 'react'
import LOGO from "../../assets/image/logo.png"
import {BsFillGrid1X2Fill} from "react-icons/bs"
import {AiOutlineClose} from "react-icons/ai"
import { NavLink } from 'react-router-dom'

const Aside = () => {
    const activeLink = "active"
    const normalLink = ""
  return (
    <aside>
        <div className='top'>
            <div className='logo'>
                <img src={LOGO} alt="logo" />  
                <h2> <span className='danger'>Edge</span> </h2>  
            </div>
            <div className="close" id='close-btn'>
                <span> 
                    <AiOutlineClose/>
                </span>
            </div> 
            </div>
            <div className='side-bar'>
                <NavLink to="/admin/dashboard" className={({isActive}) => (isActive ? activeLink : normalLink)}>
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Dashboard</h3>                    
                </NavLink>
                <NavLink to="/admin/clients" className={({isActive}) => (isActive ? activeLink : normalLink)} >
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Customer</h3>                    
                </NavLink >
                <NavLink to="/admin/orders"className={({isActive}) => (isActive ? activeLink : normalLink)}>
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Orders</h3>                    
                </NavLink>
                <NavLink to="/admin/analytics" className={({isActive}) => (isActive ? activeLink : normalLink)}>
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Analytics</h3>                    
                </NavLink>
                <NavLink to={"/admin/messages"} className={({isActive}) => (isActive ? activeLink : normalLink)}>
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Messages</h3>   
                    <span className='message-count' >30</span>                 
                </NavLink>
                <NavLink to={"/admin/assets"} className={({isActive}) => (isActive ? activeLink : normalLink)}>
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Assets</h3>                    
                </NavLink>
                <NavLink to={"/admin/reports"} className={({isActive}) => (isActive ? activeLink : normalLink)}>
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Reports</h3>                    
                </NavLink>
                <NavLink to={'/admin/settings'} className={({isActive}) => (isActive ? activeLink : normalLink)}>
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Settings</h3>                    
                </NavLink>
                <NavLink to={'/admin/add_asset'} className={({isActive}) => (isActive ? activeLink : normalLink)}>
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Add Products</h3>                    
                </NavLink>
                <NavLink className={({isActive}) => (isActive ? activeLink : normalLink)}>
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Logout</h3>                    
                </NavLink>
                </div> 
      
    </aside>
  )
}

export default Aside