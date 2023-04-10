import React from 'react'
import "../header.css"
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';


const PerformanceHeader = () => {

  return (
    <header>
      <div className='heroBanner-outer-container flex-justify-space'>
        <div className='heroBanner-inner-container flex-justify-space gap-2'>
    
    
        <div className='heroBanner-left flex-grid'>
          <div className="content-holder">
            <div  className='user-name'>
            <h1 className=''>
              Yankee
            </h1>
            </div>
            
            <div className='hero-details user-name'>
              <h4 className=''>Welcome to your dashboard</h4>
              <p className='' >Completing your account setup is the first step in the process of investing outside the stock market. If you’re new to alternatives and want to learn more, explore our educational resources.</p>
    
            </div>
          </div>
    
        </div>
        <div className='heroBanner-right flex-grid'>
          <div>
            <div>
              <ul className='performance-list'>
                <li>
                  <div className='align'>
                    <div className='check'><p>TOTAL INVESTED</p></div>
                    <div className='nav-info'><h3>$3,473,914,383</h3></div>
                    {/* <div className='arror marker'><ArrowForwardIosOutlinedIcon/></div> */}
                   
                  </div>
                </li>
                <li>
                  <div className='align'>
                    <div className='check'><p>NET ANNUALIZED RETURN</p></div>
                    <div className='nav-info'><h3>9.8% </h3></div>
                    {/* <div className='arror marker'><ArrowForwardIosOutlinedIcon/></div> */}
                   
                  </div>
                </li>
                <li>
                  <div className='align'>
                    <div className='check'><p> INVESTOR RETURNS*</p></div>
                    <div className='nav-info'><h3>$2,090,868,825</h3></div>
                    {/* <div className='arror marker'><ArrowForwardIosOutlinedIcon/></div> */}
                   
                  </div>
                </li>
    
               
    
              </ul>
            </div>
          </div>
    
        </div>
    
      </div>
      </div>
    
    </header> 
  )
}

export default PerformanceHeader