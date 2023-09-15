import React from 'react';
import { useOutletContext } from 'react-router-dom';
import {IoMdArrowRoundForward} from 'react-icons/io'
const Wallet = () => {
  const [user] = useOutletContext();
  return (
    <>
      <div className="wallet-container">
        <div className="wallet box-shadow flex-justify-space">
          <div className="flex-2 p-li">
          
            <h3>
            <span>Welcome, </span> 
             
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
        <div className='m-3 gap-2 grid-display grid-display-4'>
          <div className='box-shadow p-1 b-radius-1'>
            <span>Wallet</span>
            <h2 className='m-1'>$00.00</h2>
            <div className='flex-justify w-info'>
            <span className='w-info'>Wallet</span> <span className='flex-justify'><IoMdArrowRoundForward/></span>

            </div>
          </div>
          {/* <div className='box-shadow p-1 b-radius-1'>
            <span>Wallet</span>
            <h2 className='m-1'>$00.00</h2>
            <div className='flex-justify w-info'>
            <span className='w-info'>Wallet</span> <span className='flex-justify'><IoMdArrowRoundForward/></span>

            </div>
          </div> */}
          <div className='box-shadow p-1 b-radius-1'>
            <span>Earnings</span>
            <h2 className='m-1'>$00.00</h2>
            <div className='flex-justify w-info'>
            <span className='w-info'>Transactions</span> <span className='flex-justify'><IoMdArrowRoundForward/></span>

            </div>
          </div>
          <div className='box-shadow p-1 b-radius-1'>
            <span>Royalties</span>
            <h2 className='m-1'>$00.00</h2>
            <div className='flex-justify w-info'>
            <span className='w-info'>Bonuses</span> <span className='flex-justify'><IoMdArrowRoundForward/></span>

            </div>
          </div>

        
          
          </div>
          <hr />



        
      </div>
    </>

  );
};

export default Wallet;
