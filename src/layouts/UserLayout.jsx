import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../components/header/Header';
import { userLog } from '../redux/auth/user_authentication';
import Nav from '../components/header/Nav';

const UserLayout = ({ children }) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(userLog());
  }, []);
  if (user === null) { (navigation('/auth/login')); } else {
    return (
      <div>
        {!user.token && (<div className='px-3 bg-gree text-red text-sm font-medium flex justify-between p-1'><span>Confirm your account to fully access the site</span> <span><NavLink  className="text-gray p-2 border bg-primary text-white " to={'/auth/confirmation'}>Confirm Account</NavLink></span></div>)}
        
        <div className="main-container">
          <Nav />
          <Header
            first_name={user.user.first_name}
          />
          {children}

          <Footer />

        </div>
      </div>
    );
  }
};

export default UserLayout;
