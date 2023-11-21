import React from 'react';
import { Menu, Close } from '@mui/icons-material/';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleMenu } from '../../redux/menu';
import { toggleMenuClose, toggleMenuOpen } from '../../redux/model/nav';

const VNav = () => {
  const activeLink = 'active';
  const normalLink = '';
  const dispatch = useDispatch();
  const { navOpen } = useSelector((state) => state.nav_toggle);
  return (
    <nav>
      <div className="nav">
        <div className="menu">
          <Menu onClick={() => dispatch(toggleMenuOpen())} sx={{ fontSize: 39 }} />
        </div>
        <div className="logo">
          <NavLink to={'/'}><h2>InvestEdge</h2></NavLink> 
        </div>
        <div className={navOpen ? 'nav-bar flex-justify-space toggleMenu' : 'nav-bar flex-justify-space'}>
          <div className="close-menu">
            <Close className="icon-menu" onClick={() => dispatch(toggleMenuClose())} sx={{ fontSize: 39 }} />

          </div>
          <ul className="nav-links flex-justify-start">
          {/* <li className="p-li"><NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Investment</NavLink></li> */}

            <li className="p-li"><NavLink to="/investment" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Investment</NavLink></li>
            <li className="p-li"><NavLink to="/how-it-works" className={({ isActive }) => (isActive ? activeLink : normalLink)}>How it works</NavLink></li>
            {/* <li className='p-li'><NavLink to={'/account'}>account</NavLink></li> */}
            <li className="p-li"><NavLink to="/performance/annual_return" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Performance</NavLink></li>

            <li className="p-li"><NavLink to="/about" className={({ isActive }) => (isActive ? activeLink : normalLink)}>About</NavLink></li>

          </ul>
          <div className="log-in flex-justify">
            <a className="mobile-only">Help Center</a>
            <div className="auth-div">
              <NavLink to="/auth/sign_up">Sign Up</NavLink>
              <NavLink to="/auth/login">login</NavLink>

            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default VNav;
