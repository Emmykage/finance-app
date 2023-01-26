import React from 'react'
import VNav from './VNav'

const VisitorHeader = () => {
  return (
    <header>
        <VNav />
        <div className='offeringBanner-outer-container'>
          <div className='offeringBanner-inner-container inner-container'>


    <div className='InvestmentBanner'>
      <div className="content-holder">
        <div className='investment flex-justify-space'>
          <div className='investment-left-banner border'>
          <h1 className=''>
          Start Investment Today
        </h1>
        <p>
        Diversify your portfolio with private market investment offerings once only reserved for the 1%.

        </p>
        <a className='btn'>
          Get Started

        </a>

          </div>
          <div className='investment-right-banner border'>
            <div className='flex-justify investment-cards'>
              <div className='investment-card'>
              <span> 12.72%</span>
              <p>
              The weighted average annualized target return for all open offerings.*

              </p>


              </div>
              <div className='investment-card'>
              <span> 12.72%</span>
              <p>
              The weighted average annualized target return for all open offerings.*

              </p>


              </div>
              <div className='investment-card'>
              <span> 12.72%</span>
              <p>
              The weighted average annualized target return for all open offerings.*

              </p>


              </div>
              <div className='investment-card'>
              <span> 12.72%</span>
              <p>
              The weighted average annualized target return for all open offerings.*

              </p>


              </div>

            </div>

          </div>
        

        </div>
      
      
        <p>
        Access unique private market investment offerings across a diverse set of product types and asset classes.
        </p>
       
        
        <div className='offer-details gap-5 flex-justify-space'>
         <div className='offer-card'>
            <span>
                12.7%
            </span>
            <p>
            The weighted average annualized target return for all open offerings.*
            </p>
         </div>
         <div className='offer-card'>
            <span>
                $3B+
            </span>
            <p>
            Total invested on the platform.            </p>
         </div>  
         <div className='offer-card'>
            <span>
               $1.8B+
            </span>
            <p>
            Total dollars returned to investors.            </p>
         </div>

        </div >
      </div>

    </div>
    <div className='heroBanner-right'>
      <div>
        <div>
          
        </div>
      </div>

    </div>

  </div>
  </div>

</header>
  )
}

export default VisitorHeader