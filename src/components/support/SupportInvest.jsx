import React from 'react'
import SupportHeader from '../header/guest/SupportHeader'
import { HiBuildingOffice } from "react-icons/hi2";
import { BsFillTelephoneFill } from "react-icons/bs";
const SupportInvest = () => {
  return (
    <div>
    <SupportHeader/>
  
  <div className='dark-text inner-small-container'>
      <h1> What rights do I have when an offering is structured as BPDN?</h1>

      <p className='text-sm text-gray font-medium'>Just like with the SPV structure, the BPDN structure operates independently from Yieldstreet. If the BPDN Issuer was to declare bankruptcy, the trustee under the BPDN Indenture can foreclose on the collateral pledged to it with respect to the associated SPV (i.e., the equity in the SPV owned by the BPDN Issuer). In this scenario, upon the Trustee seizing the collateral, the Trustee would then own the equity in the applicable SPV which in turn owns the corresponding asset (i.e., the loan or participation interest). The Trustee acts for the benefit of the noteholders. However, the noteholders would have the right to elect a managing member or servicer just as they would with the SPV structure.

In a scenario where an originator or borrower experiences a default, the same servicing standard would occur as it does today in a SPV structure. The Indenture sets forth a servicing standard which essentially requires the servicer to use commercially reasonable efforts to service and collect the corresponding asset. In the event of a bankruptcy or an insolvency event, with respect to the BPDN Issuer, the Trustee will step in as paying agent under the notes.</p>

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

export default SupportInvest