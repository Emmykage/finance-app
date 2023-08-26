import React from 'react'
import investmentPhoto from '../../../assets/image/investment-photos/how-it-works.jpg'

const HHeader = () => {
  return (
    <header>
      
        <div className='offeringBanner-outer-container'>
          <div className='offeringBanner-inner-container howitworks inner-container'>


    <div className='InvestmentBanner'>
      <div className="content-holder">
        <div className='investment flex-justify-space'>
          <div className='investment-left-banner'>
          <h1 className=''>
          How it works
        </h1>
        <p>
          Diversify your portfolio with private market investment offerings once only reserved for the 1%.
        </p>
        <a className='btn'>

          Get Started

        </a>

          </div>
          <div className='investment-right-banner howitworks border'>
         
            <img src={investmentPhoto} alt="" />
            <div className='overlay'>hey</div>
          

          </div>
        

        </div>
      
      
       
       
        
        
      </div>

    </div>
    

  </div>
  </div>
    </header>
  )
}

export default HHeader