import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
