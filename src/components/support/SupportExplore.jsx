import React from 'react'
import SupportHeader from '../header/guest/SupportHeader'
import { HiBuildingOffice } from "react-icons/hi2";
import { BsFillTelephoneFill } from "react-icons/bs";
const SupportExplore = () => {
  return (
    <div>
    <SupportHeader/>
  
  <div className='dark-text inner-small-container'>
      <h1> Is there a minimum to invest in crypto?</h1>

      <p className='text-sm text-gray font-medium'>Anyone can invest in crypto, and exchanges such as Coinbase or Gemini make it accessible to invest in coins with the change in your pocket. However, if you are looking to professionally invest your capital in crypto with the world’s leading crypto investors you will need a much bigger check, with entry into a lot of funds requiring a minimum investment of $250K or more. Yieldstreet removes this barrier to entry and allows you to invest alongside professional crypto investors with as little as $25K.</p>

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

export default SupportExplore