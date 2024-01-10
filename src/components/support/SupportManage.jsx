import React from 'react'
import SupportHeader from '../header/guest/SupportHeader'
import { HiBuildingOffice } from "react-icons/hi2";
import { BsFillTelephoneFill } from "react-icons/bs";
const SupportManage = () => {
  return (
    <div>
    <SupportHeader/>
  
  <div className='dark-text inner-small-container'>
      <h1> I have received a distribution for one of my investments, where does that money go?</h1>

      <p className='text-sm text-gray font-medium'>If you have received a distribution for your investment(s), you will receive payment notifications by email whenever funds have been deposited into your Yieldstreet Wallet. You can also withdraw funds, to deposit into your external bank account, as desired.
​
If you are invested in the Yieldstreet Alternative Income Fund and/or and the Growth & Income REIT, you may want to check if you have the Distribution Reinvestment Plan (DRIP) switched on. DRIP is a program that allows investors to automatically reinvest distributions back into an underlying investment. Instead of receiving the recurring payments, the cash immediately goes back into the Yieldstreet Alternative Income Fund and/or the Growth & Income REIT and is added to their initial principal.

If you have received a distribution from an investment through your Equity Trust IRA, funds are automatically wired back to your account at Equity Trust as there is no wallet for IRA's.</p>

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

export default SupportManage