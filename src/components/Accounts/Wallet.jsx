import React from 'react'

const Wallet = () => {
  return (
    <>
    {/* <div>Wallet</div> */}
    <div className='flex-justify-space'>
            <div className='flex-2 border p-li'>
                <h3>johnn Doe</h3>
                <span>Individual</span>
            </div>
            <div className='flex-3 border p-li'>
                <small>CAsh Wallet</small>
                <p>
                Once your account has been set up, a Cash Wallet will automatically be created for you.

                </p>
                <a>Finish your account setup</a>

            </div>
        </div></>
    
  )
}

export default Wallet