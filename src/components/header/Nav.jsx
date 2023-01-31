import React from 'react'
import {Menu, Close} from '@mui/icons-material/';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../redux/menu';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const dispatch = useDispatch()
  const {isOpen} = useSelector((state) => state.menu)
  return (
    <nav>
      <div className='nav flex-justify-center'>
        <div className='menu'>
        <Menu onClick={()=> dispatch(toggleMenu(console.log("opened")))} sx={{fontSize: 39}}/> 
        </div>
        <div  className='logo flex-justify-center'>
            <h2>YieldShield</h2>
        </div>
        <div className={isOpen ? "nav-bar flex-justify-space toggleMenu" : "nav-bar flex-justify-space" }>
          <div className='close-menu'>
            <Close className='icon-menu' onClick={()=> dispatch(toggleMenu())} sx={{fontSize: 39}} />

          </div>
          <ul className="nav-links flex-justify-start">
            <li className='p-li'><NavLink to="/offerings">offerings</NavLink></li>
            <li className='p-li'><NavLink to="/">portfolio</NavLink></li>
            <li className='p-li'><a>activities</a></li>
            <li className='p-li'><NavLink to={'/account'}>account</NavLink></li>
            <li className='p-li'><a>learn</a></li>
            <li  className='p-li' ><a>support</a></li>
  

          </ul>
          <div className='log-in flex-justify-space'>
            <div className='flex-justify'>
            <NavLink to={"/investment"}>log out</NavLink>
            </div>
        
    
        </div>
        </div>
       
      </div>
    </nav>
  )
}

export default Nav