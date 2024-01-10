import React from 'react'
import SupportHeader from '../header/guest/SupportHeader'
import { HiBuildingOffice } from "react-icons/hi2";
import { BsFillTelephoneFill } from "react-icons/bs";

const SupportDeposit = () => {
  return (
    <div>
        <SupportHeader/>
        
    <div className='dark-text inner-small-container'>
        <h1>How do I deposit money into my InvestEdge Wallet?</h1>

        <p className='text-sm text-gray font-medium'>Once you’ve successfully linked your external bank account to the Yieldstreet platform, you’re able to fund your Yieldstreet Wallet from the “Transfer Funds” page of the platform.

        By selecting your external bank account as the source account and Yieldstreet as the destination account, your transfer will begin processing and funds will arrive in your Yieldstreet Wallet typically within 5 business days. It usually takes ACH transactions 3 business days to arrive following the debit from your external account, the funds then remain 'at risk' of being returned for an additional 2 business days.

        If you want to invest in an open offering, you do not need to prefund your Yieldstreet Wallet ahead of time. Once you submit an investment allocation, an ACH draft from your external bank account will be initiated if there are insufficient funds (or no funds) in your account. Please note that this ACH transfer will be initiated at the time of your investment request or if you select to delay, 2 days after making the request.

        In the future, you can also proactively prefund your Yieldstreet Wallet and hold a balance. Holding a sufficient balance will shorten the time for processing new investment requests (shortens to roughly 2 business days instead of 5 business days if your account is not prefunded).</p>

    </div>

    <div className='bg-gray-light-trans mt-2'>


        <div className="inner-small-container footer-note dark-text text-center flex items-center justify-around">

            <p className='font-semibold text-lg my-1'> Contact InvestEdge</p>
            <span><HiBuildingOffice className='text-2xl'/></span>
            <p className=' text-lg my-1'>300 Park Avenue 15th Floor, New York, NY 10022</p>
            
            <span><BsFillTelephoneFill className='text-2xl' /></span>
            <p className='text-lg my-1'>844-943-5378</p>

        </div>
    </div>
    </div>
  )
}

export default SupportDeposit