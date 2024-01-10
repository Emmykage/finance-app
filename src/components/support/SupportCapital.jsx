import React from 'react'
import SupportHeader from '../header/guest/SupportHeader'
import { HiBuildingOffice } from "react-icons/hi2";
import { BsFillTelephoneFill } from "react-icons/bs";
const SupportCapital = () => {
  return (
    <div>
        <div>
          <SupportHeader/>
        
        <div className='dark-text inner-small-container'>
            <h1> How can I track my tier membership status?</h1>
    
            <p className='text-sm text-gray font-medium'>If you are interested in becoming an originator, please fill out the raise capital form here. Our originations team will be in touch in due time should the opportunity be a fit.</p>
    
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
    </div>
  )
}

export default SupportCapital