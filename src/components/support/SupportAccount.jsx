import React from 'react'
import SupportHeader from '../header/guest/SupportHeader'
import { HiBuildingOffice } from "react-icons/hi2";
import { BsFillTelephoneFill } from "react-icons/bs";

const SupportAccount = () => {
  return (
    <div>
          <SupportHeader/>
        
        <div className='dark-text inner-small-container'>
            <h1> How can I track my tier membership status?</h1>
    
            <p className='text-sm font-medium text-gray'>Your tier’s associated benefits as well as a progress bar that shows your current account balance will appear in your Portfolio and here. The progress bar shows how far away you are from the next membership tier if you are Gold or Platinum, and how many days you have to increase your account balance again to maintain your tier status if it falls below the threshold.</p>
    
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

export default SupportAccount