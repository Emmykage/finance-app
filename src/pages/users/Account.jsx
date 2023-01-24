import React from 'react'
import AccountRoutes from '../../components/Accounts/AccountRoutes'

const Account = () => {
  return (
    <div className='account-container'>
        <div>
            <div className='flex-justify'>
                <h1>Accounts</h1>
                <AccountRoutes/>
            </div>
            
        </div>
        <div>
            <div>
                <h3>johnn Doe</h3>
                <span>Individual</span>
            </div>
            <div>
                <small>CAsh Wallet</small>
                <p>
                Once your account has been set up, a Cash Wallet will automatically be created for you.

                </p>
                <a>Finish your account setup</a>

            </div>
        </div>
    </div>
  )
}

export default Account