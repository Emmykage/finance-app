import React from 'react'
import aboutImg from "../../../assets/image/investment-photos/trading-pic.webp"

const AboutHeader = () => {
  return (
    <header>
    <div className='heroBanner-outer-container flex-justify-space'>
      <div className='heroBanner-inner-container about flex-justify-space gap-2'>
  
  
      <div className='heroBanner-left  flex-grid'>
        <div className="content-holder">
          <div  className='user-name'>
          <h5>
            ABOUT US
          </h5>
          </div>
          
          <div className='hero-details'>
            <h4 className=''>We are the leading platform for private market investing</h4>
            <p className='' >Yieldstreet empowers investors to grow their wealth outside the stock market by curating private market alternatives from top investment managers.</p>
  
          </div>
          <div className=' btn-div'>
            <a href="" className='btn'> Get Started</a>
          </div>
        </div>
  
      </div>
      <div className='heroBanner-right flex-grid'>
        <div className='about-right '>
          <div className='about-image'>
            <img src={aboutImg} alt="invest image" />
          </div>
        </div>
  
      </div>
  
    </div>
    </div>
  
  </header> 
  )
}

export default AboutHeader