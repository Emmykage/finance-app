import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import VNav from '../components/header/VNav';
import Footer from '../footer/Footer';
import { userLog } from '../redux/auth/user_authentication';

const GuestLayOut = ({ children }) => {
  const dispatch = useDispatch();

  const navigation = useNavigate();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(userLog());
  }, []);
  if (user) {
    navigation('/home');
  }
  return (
    <div className="main-container">
      <VNav />
      {children}

      <Footer />

    </div>
  );
};

export default GuestLayOut;
