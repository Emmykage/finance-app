import React from 'react'
import LOGO from "../../assets/image/logo.png"
import {BsFillGrid1X2Fill} from "react-icons/bs"
import {AiOutlineClose} from "react-icons/ai"

const Aside = () => {
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
                <a className="active" href="">
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Dashboard</h3>                    
                </a>
                <a href="">
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Customer</h3>                    
                </a>
                <a href="">
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Orders</h3>                    
                </a>
                <a href="">
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Analytics</h3>                    
                </a>
                <a href="">
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Messages</h3>   
                    <span className='message-count' >30</span>                 
                </a>
                <a href="">
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Products</h3>                    
                </a>
                <a href="">
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Reports</h3>                    
                </a>
                <a href="">
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Settings</h3>                    
                </a>
                <a href="">
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Add Products</h3>                    
                </a>
                <a href="">
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Logout</h3>                    
                </a>
                </div> 
      
    </aside>
  )
}

export default Aside