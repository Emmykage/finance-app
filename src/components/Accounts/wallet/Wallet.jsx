import React, { useEffect } from 'react';
import { NavLink, Outlet, useOutletContext } from 'react-router-dom';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { getWallet } from '../../../redux/actions/wallet';
import { userLog } from '../../../redux/auth/user_authentication';
import { usd_format } from '../../misc/USD';

const Wallet = () => {
  // const [user] = useOutletContext();
  const { user, loading } = useSelector((state) => state.users);

  const { wallet } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userLog());
    dispatch(getWallet());
  }, []);
  console.log(user)
  return (
    <>
      <div className="wallet-container">
        <div className="wallet box-shadow flex-justify-space">
          <div className="flex-2">

            <div className="py-1">
              <span className="welcome">Welcome, </span>

              <span className="name text-semi">
                {user.first_name}
              </span>

            </div>
            <div>
              <span>Individual</span>
            </div>

          </div>
          <div className="flex-3 border-right p-li">
            <small>Cash Wallet</small>
            <p>
              Once your account has been set up, a Cash Wallet will automatically be created for you.

            </p>
            <a>Finish your account setup</a>

          </div>
        </div>
        <div className="m-3 gap-2 grid-display grid-display-4">
          <div className="box-shadow p-1 b-radius-1">
            <span>Wallet</span>
            <h2 className="m-1">{usd_format(wallet.wallet_balance)}</h2>
            <div className="flex-justify w-info">
              <NavLink to="/account/wallet/details" className="w-info">Wallet</NavLink>
              {' '}
              <span className="flex-justify"><IoMdArrowRoundForward /></span>

            </div>
          </div>
          <div className="box-shadow p-1 b-radius-1">
            <span>Investments/Portfolio</span>
            <h2 className="m-1">{usd_format(user.total_asset)}</h2>
            <div className="flex-justify w-info">
              <NavLink to="/account/wallet/investment" className="w-info">Investments</NavLink>
              {' '}
              <span className="flex-justify"><IoMdArrowRoundForward /></span>

            </div>
          </div>
          <div className="box-shadow p-1 b-radius-1">
            <span>Earnings</span>

            <h2 className="m-1">{usd_format(user.wallet.net_earnings)}</h2>
            <div className="flex-justify w-info">
              <NavLink to="/account/wallet/earnings" className="w-info">Transactions</NavLink>
              {' '}
              <span className="flex-justify"><IoMdArrowRoundForward /></span>

            </div>
          </div>
          <div className="box-shadow p-1 b-radius-1">
            <span>Royalties</span>
            <h2 className="m-1">$00.00</h2>
            <div className="flex-justify w-info">
              <NavLink to="/account/wallet/royalties" className="w-info">Bonuses</NavLink>
              {' '}
              <span className="flex-justify"><IoMdArrowRoundForward /></span>

            </div>
          </div>

        </div>
        <hr />
        <Outlet />

      </div>
    </>

  );
};

export default Wallet;
