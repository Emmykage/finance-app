import React from 'react'
import { NavLink } from 'react-router-dom'

const AssetHeader = () => {
  return (
    <header>
        
        <div className='offeringBanner-outer-container'>
          <div className='offeringBanner-inner-container inner-container'>


    <div className='InvestmentBanner'>
      <div className="content-holder">
        <div className='investment flex-justify-space'>
          <div className='investment-left-banner'>
          <h1 className=''>
          Start Investment Today
        </h1>
        <p>
        Diversify your portfolio with private market investment offerings once only reserved for the 1%.

        </p>
        {/* <a className='btn'>
          Get Started

        </a> */}

          </div>
          <div className='investment-right-banner flex-justify-center'>
            <div className='prop-width'>
              <div className='invest-prop center'>
                <h4 className='center'>
                  invest with with us to earn routine<br/> renumeration
                </h4>

              </div>
            <NavLink to={"/invest_asset"} className='btn'>Invest With Us</NavLink>

            </div>

          </div>
        

        </div>
      
      
       
       
        
        
      </div>

    </div>
    

  </div>
  </div>

</header>
  )
}

export default AssetHeader