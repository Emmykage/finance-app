import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AccountRoutes from '../../components/Accounts/AccountRoutes';
import Nav from '../../components/header/Nav';
import Footer from '../../footer/Footer';
import { toggleMenuClose } from '../../redux/model/nav';
import { getUser } from '../../redux/actions/users';
import Loader from '../../components/loader/Loader';

const Account = () => {
  const { user, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(toggleMenuClose());
  }, []);

  return (
    <div className="main-container">
  
      <Nav />
   
     

      <div className="container account-container">
        <div>
          <div className="flex-justify">
         
            <AccountRoutes />
          </div>

        </div>
        <div className="container">
          {loading ? <Loader/> : <Outlet context={[user]} />}
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
