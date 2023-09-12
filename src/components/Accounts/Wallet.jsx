import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Wallet = () => {
  const [user] = useOutletContext();
  return (
    <>
      <div className="wallet-container">
        <div className="wallet flex-justify-space">
          <div className="flex-2 border-left p-li">
            <h3>
              {user.first_name}
              {' '}
              {user.last_name}
            </h3>
            <span>Individual</span>
          </div>
          <div className="flex-3 border-right p-li">
            <small>Cash Wallet</small>
            <p>
              Once your account has been set up, a Cash Wallet will automatically be created for you.

            </p>
            <a>Finish your account setup</a>

          </div>
        </div>
      </div>
    </>

  );
};

export default Wallet;
