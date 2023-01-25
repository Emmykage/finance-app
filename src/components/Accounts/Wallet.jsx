import React from 'react'

const Wallet = () => {
  return (
    <>
    {/* <div>Wallet</div> */}
    <div className='wallet-container'>
    <div className='wallet flex-justify-space'>
            <div className='flex-2 border-left p-li'>
                <h3>johnn Doe</h3>
                <span>Individual</span>
            </div>
            <div className='flex-3 border-right p-li'>
                <small>Cash Wallet</small>
                <p>
                Once your account has been set up, a Cash Wallet will automatically be created for you.

                </p>
                <a>Finish your account setup</a>

            </div>
        </div>
        </div></>
    
  )
}

export default Wallet