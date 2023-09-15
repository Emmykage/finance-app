import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const AccountRoutes = () => {
  const activeLink = 'link-decor';
  const normalLink = 'normal';
  return (
    <>
      <NavLink to="/account">
        {' '}
        <h1>Accounts </h1>
      </NavLink>

      <div className="account-nav">
        <ul className="flex-justify-space_around">
           <li className=''>
            <NavLink
                        className={({isActive}) => (isActive ? activeLink : normalLink )}

            to={'/account/wallet'}>Wallets</NavLink>
        </li> 
          <li className="">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/account/investor_account"
            >
              Investor accounts
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/account/bank_account"
            >
              Bank accounts
            </NavLink>
          </li>
         
          <li className="">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}

              to="/account/recurring_deposit"
            >
              Recurring deposits
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/account/investment_preference"
            >
              Investment preference
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AccountRoutes;
