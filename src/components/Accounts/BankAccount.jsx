import React from 'react'

const BankAccount = () => {
  return (
    <div>
      <div>
        <p>
        You have reached our limit on number of bank accounts.If you wish to add another external account, please delete an unused external bank account and try again or contact us at investments@yieldstreet.com for assistance.
        </p>
        <div className='account-notice'>
          <h3>
          You have not yet created an investor account.

          </h3>
          <p>
            Please complete your account set-up to invest on Yieldstreet.

          </p>
          <a href="" className='btn'>
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}

export default BankAccount