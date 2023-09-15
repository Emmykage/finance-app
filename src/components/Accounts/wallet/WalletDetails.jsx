import React from 'react'

const WalletDetails = () => {
  return (
    <div className='wallet-info'>
        <div className='grid-display grid-display-2 gap-2 m-4'>
            <div className='bg-white box-shadow p-3 b-radius-1'>
            <h3>Add Funds</h3>
                <div className='m-3'>

                    
                    <label className='block m-1'>Select Coin</label> 
                    <select>
                    <option value="">USD THETHER</option>
                    <option value="">BITCOIN</option>
                    <option value="">ETHERUM (ERC-20)</option>
                    </select>
                </div>
                <div>
                    <label className='block m-1' htmlFor="amount">Enter Amount</label>
                    <input type="number" placeholder='Enter Amount in USD'/>

                </div>
                <div className='m-2'>
                    <p className='text-red text-center'>Pay to the following Wallet Address</p>
                    <span className='block text-center bg-light p-2 b-radius-1'>bc1qusn333vtanazyywdvr5u5mwk5eq32h5n5lpchr</span>

                </div>
                <hr />
                <p className='text-norm'>Kindly make your deposit to the wallet address above, then click on continue to submit your payment screenshot</p>
                <button className='btn w-full bg-semi text-white'>continue</button>
               
            </div>
            <div className='bg-white box-shadow p-3 b-radius-1'>
               <h3>Withdraw</h3>
               <div  className='m-3'>
               <label className='block m-1'>Select Coin to receive payment</label> 
               <select>
               <option value="">USD THETHER</option>
               <option value="">BITCOIN</option>
               <option value="">ETHERUM (ERC-20)</option>
               </select>
               </div>
               <div className='m-2'>
                <label className='block m-1' htmlFor="client_address">Enter Wallet Address</label>
                <input type='text' id="client_address" />
            </div>
            <div>
                <button className='btn w-full bg-semi text-white'>Request</button>


            </div>
              
            </div>
           
          


        </div>

        <div className='history'>
            <div className='deposit-history'>
               <h3 className='text-light-gray '>Deposit History</h3>
               <ul>
                No Deposit History
                <li></li>
               </ul>
            </div>
            <div className='withdraw-history'></div>

        </div>
    </div>
  )
}

export default WalletDetails