import React, { useEffect } from 'react';
import '../../components/activities/activities.css';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { MdPayment } from 'react-icons/md';
import { BiStar } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../../components/header/Nav';
import { getUser } from '../../redux/actions/users';
import { userLog } from '../../redux/auth/user_authentication';
import { toggleMenuClose } from '../../redux/model/nav';

const Activities = () => {
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleLogout = () => {
    localStorage.setItem('edge_auth', null);
    dispatch(userLog());
    dispatch(toggleMenuClose());

    navigation('/auth/login');
  };
  useEffect(() => {
    dispatch(getUser());
  }, []);

  const activeLink = 'active-link';
  const normalLink = '';
  if (user.error) {
    return (
      <div>
        <h4 className="text-center text-dark">
          Something went wrong please
          <a onClick={handleLogout}>sign in</a>
        </h4>
      </div>
    );
  }
  return (
    <div className="main-container">
      <Nav />

      <div className="activities-container">
        <div className="top-header">
          <h2>
            All Activities
          </h2>
          <div>
            <ul className="nav-links flex-justify-start">
              <li><NavLink to="/activities" className={({ isActive }) => (isActive ? activeLink : normalLink)}>All messages</NavLink></li>
              <li>
                <NavLink to="/activities/investment_updates" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                  <AiOutlineInfoCircle />
                  {' '}
                  <span>Investment updates</span>
                  {' '}
                </NavLink>
              </li>
              <li>
                <NavLink to="/activities/payments" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                  {' '}
                  <MdPayment />
                  {' '}
                  <span>Payments</span>
                  {' '}
                </NavLink>
              </li>
              <li>
                <NavLink to="/activities/important" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                  <BiStar />
                  <span>Important</span>
                  {' '}

                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="activity">
          <Outlet context={[user]} />
        </div>

      </div>
    </div>
  );
};

export default Activities;
