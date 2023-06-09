import React from 'react'
import {Menu, Close} from '@mui/icons-material/';
import { useDispatch, useSelector } from 'react-redux';
// import { toggleMenu } from '../../redux/menu';
import { NavLink } from 'react-router-dom';
import { toggleMenuClose, toggleMenuOpen } from '../../redux/model/nav';

const Nav = () => {
  const activeLink = "active"
  const normalLink = ""
  const dispatch = useDispatch()
  // const {isOpen} = useSelector((state) => state.menu)
  const {navOpen} = useSelector(state => state.nav_toggle)
  return (
    <nav>
      <div className='nav'>
        <div className='menu'>
        <Menu onClick={()=> dispatch(toggleMenuOpen())} sx={{fontSize: 39}}/> 
        </div>
        <div  className='logo'>
            <h2>InvestEdge</h2>
        </div>
        <div className={navOpen ? "nav-bar flex-justify-space toggleMenu" : "nav-bar flex-justify-space" }>
          <div className='close-menu'>
            <Close className='icon-menu' onClick={()=> dispatch(toggleMenuClose())} sx={{fontSize: 39}} />

          </div>
          <ul className="nav-links flex-justify-start">
            <li className='p-li'><NavLink to="/offerings" className={({isActive}) => (isActive ?  activeLink : normalLink)}>offerings</NavLink></li>
            <li className='p-li'><NavLink to="/home"  className={({isActive}) => (isActive ?  activeLink : normalLink)}>portfolio</NavLink></li>
            <li className='p-li'><a to={"/activities"} className={({isActive}) => (isActive ?  activeLink : normalLink)} >activities</a></li>
            <li className='p-li'><NavLink to={'/account'}  className={({isActive}) => (isActive ?  activeLink : normalLink)}>account</NavLink></li>
            <li className='p-li'><a to="/learn" className={({isActive}) => (isActive ?  activeLink : normalLink)}>learn</a></li>
            <li  className='p-li' ><a  className={({isActive}) => (isActive ?  activeLink : normalLink)}>support</a></li>
  

          </ul>
          <div className='log-in flex-justify'>
            <div className='flex-justify'>
            {/* <NavLink to={"/investments"}>log out</NavLink> */}
            <NavLink to={"/"} >log out</NavLink>

            </div>

        
    
        </div>
        </div>
       
      </div>
    </nav>
  )
}

export default Nav