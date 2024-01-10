import React from 'react'
import SupportHeader from '../header/guest/SupportHeader'
import { HiBuildingOffice } from "react-icons/hi2";
import { BsFillTelephoneFill } from "react-icons/bs";
const SupportSecurity = () => {
  return (
    <div>
    <SupportHeader/>
  
  <div className='dark-text inner-small-container'>
      <h1> How does the Yieldstreet site secure my information?</h1>

      <p className='text-sm text-gray font-medium'>Yieldstreet places great importance on keeping your information secure. We encrypt all personal information on our website and our technology team endeavors to utilize best practices for security sitewide. The identity information you provide on Yieldstreet is stored by our third-party financial provider, SynapseFI. Synapse stores all information submitted for KYC (know your customer) purposes. This includes SSN/EIN numbers, along with other documents provided, such as a government ID or Trust Agreements, as applicable.

All other information entered on our site is encrypted, and our team ensures that sufficient cyber security measures are in place. Additionally, Yieldstreet does not store or see banking information or bank login information when you provide these details during the sign-up process. If users opt to provide their bank account login details when linking an external bank account to the platform, the login provides a direct connection to your bank, and Yieldstreet does not ever see or store this information.</p>

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

export default SupportSecurity