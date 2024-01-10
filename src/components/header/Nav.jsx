import React from 'react';
import { Menu, Close } from '@mui/icons-material/';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { toggleMenuClose, toggleMenuOpen } from '../../redux/model/nav';
import { userLog } from '../../redux/auth/user_authentication';

const Nav = () => {
  const activeLink = 'active';
  const normalLink = '';
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { navOpen } = useSelector((state) => state.nav_toggle);
  const handleLogout = () => {
    localStorage.setItem('edge_auth', null);
    dispatch(userLog());
    navigation('/auth/login');
  };
  return (
    <nav>
      <div className="nav">
        <div className="menu">
          <Menu onClick={() => dispatch(toggleMenuOpen())} sx={{ fontSize: 39 }} />
        </div>
        <div className="logo">
          <NavLink to={'/home'}>
          <h2>InvestEdge</h2>
          </NavLink>
          
        </div>
        <div className={navOpen ? 'nav-bar flex-justify-space toggleMenu' : 'nav-bar flex-justify-space'}>
          <div className="close-menu">
            <Close className="icon-menu" onClick={() => dispatch(toggleMenuClose())} sx={{ fontSize: 39 }} />

          </div>
          <ul className="nav-links flex-justify-start">
            <li className="p-li"><NavLink to="/offerings" className={({ isActive }) => (isActive ? activeLink : normalLink)}>offerings</NavLink></li>
            <li className="p-li"><NavLink to="/home" className={({ isActive }) => (isActive ? activeLink : normalLink)}>portfolio</NavLink></li>
            <li className="p-li"><NavLink to="/activities" className={({ isActive }) => (isActive ? activeLink : normalLink)}>activities</NavLink></li>
            <li className="p-li"><NavLink to="/account/wallet" className={({ isActive }) => (isActive ? activeLink : normalLink)}>account</NavLink></li>
            <li className="p-li"><NavLink to="/learn" className={({ isActive }) => (isActive ? activeLink : normalLink)}>learn</NavLink></li>
            <li className="p-li"><NavLink to='/support' className={({ isActive }) => (isActive ? activeLink : normalLink)}>support</NavLink></li>

          </ul>
          <div className="log-in flex-justify">
            <div className="flex-justify">
              {/* <NavLink to={"/investments"}>log out</NavLink> */}
              <a onClick={handleLogout}>log out</a>

            </div>

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Nav;
