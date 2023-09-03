import React from 'react'

const InvestmentPreference = () => {
  return (
    <div className='InvestmentPreference' >
      <p>
      Help us understand your needs so we can provide you the most useful information about our investments.
      </p>

      <div className='preference-top'>
        <div>
          <img src="" alt="" />

        </div>
        <div>
          <h2>
          Access tailored private market recommendations
          </h2>
          <p>
          Tap into the collective wisdom of our investment teams. Answer a few key questions to get a customizable set of investment recommendations in just 2-3 minutes.
          </p>
          <a href="" className='btn'>
            unlock recommendations
          </a>

        </div>
      

      </div>
      <div className='preference-top'>
        <h5>Assets classes</h5>
        <p>
        Select the types of investments that interest you the most.
        </p>
        <div className='assets flex-justify-start'>

        
        <span>
          Art
        </span>
        <span>
          Crypto
        </span><span>
          Legal
        </span><span>
          Multi-asset class fund
        </span><span>
          Private credit
        </span><span>
          Private equity
        </span><span>
          Real estate
        </span><span>
          Short term notes
        </span><span>
          Transportation
        </span><span>
          Venture Capital
        </span>
        </div>
      </div>
      <div className='preference-bottom'>
        <h5>Target Return</h5>
        <p>
        Select the minimum target return you would expect to earn on your investments.
        </p>
        <h5>
          Employement
        </h5>
        <p>
        Tell us more about your employment experience and professional background.
        </p>
      </div>
      <div className='btn-div'>
      <a href="" className='btn block'>
        Save changes
      </a>

      </div>
    
    </div>
  )
}

export default InvestmentPreference