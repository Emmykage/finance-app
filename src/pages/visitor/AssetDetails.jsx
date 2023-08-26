import React from 'react'
import AssetHeader from '../../components/guest/header/AssetHeader'

const AssetDetails = () => {
  return (
    <>
    <AssetHeader/>
   
    <div className='asset-details text-dark'>
    <div className=' details p-3'>
        <h2>
            Details
        </h2>
        <div className='grid-display gap-2 grid-display-3 my-4'>
            <div className='border-light p-1 b-radius-2'>
                <h3>Returns & Management fees</h3>
                <hr />
                <div className='detail-list' >
                    <p className='flex-space'>
                        <span>Ann'l management fee</span>
                        <span>2%</span>

                    </p>
                    <p className='flex-space'>
                        <span>Ann'l management fee</span>
                        <span>2%</span>
                        
                    </p>
                    <p className='flex-space'>
                        <span>Inv share in excess profits </span>
                        <span>100%</span>
                        
                    </p>
                </div>

            </div>
            <div className='border-light p-1 b-radius-2'>
                <h3>Schedule</h3>
                <hr />
                <div className='detail-list'>
                    <p className='flex-space'>
                        <span>Payment schedule</span>
                        <span>2%</span>

                    </p>
                    <p className='flex-space'> 
                        <span>Target term</span>
                        <span>27 months</span>
                        
                    </p>
                    
                </div>

            </div >
            <div className='border-light p-1 b-radius-2'>
                <h3>Structure</h3>
                <hr />
                <div className='detail-list'>
                    <p className='flex-space'>
                        <span>Tax document</span>
                        <span>G-1</span>

                    </p>
                    <p className='flex-space'>
                        <span>Offering structure</span>
                        <span>SPV</span>
                        
                    </p>
                    <p className='flex-space'>
                        <span>Ann'l flat expense</span>
                        <span>0.25%</span>
                        
                    </p>
                </div>

            </div>
            
        </div>
        <div className='detail-foots'>
            <span className='border-light'>Fund</span>
            <span className='border-light'>Debt</span> 
            <span className='border-light'>Equity</span> 
            <span className='border-light'>Quarterly payment?</span>  
            <span className='border-light'>Diversified</span>  
            <span className='border-light'>Balanced</span>  
            <span className='border-light'>IRA eligible</span>  
           
        </div>
    </div>
    <div className='overview p-3'>
    <div>
            <h2>Overview</h2>
        </div>
    <div >
        
        <div className='overview-info flex-space gap-5'>
            <div className='basis-50'>
                <ul>
                <p>
               <strong>Park45 is a Class</strong> -A multi-family complex located north of Houston. The Sponsor is making minor upgrades to drive an expected 28% per-unit increase from purchase price at time of sale in the second half of 2025.
                </p>
                    <li><p>
                        <strong> Proven business plan:</strong> Since the Sponsor acquired the property in March 2022, it has achieved a 13% organic increase in effective rent — prior to the completion of any unit renovations. Rents are expected to continue to increase as unit renovations commence.</p>
                    </li>
                    <li>
                        <p>
                       <strong>Stabilized property: </strong>
                       The property is 94% occupied and generating stable cash flows from rent income.

                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Interest rate protection:</strong> The property is financed with a fixed rate loan at 3.35% through March 2025. Market rates today are approximately double, so this low cost of capital continues to enhance the investment in the current interest rate environment.

                        </p>

                    </li>
                    <p>More than 16 months since acquisition, consider investing in this seasoned offering with your retirement account.</p>

                </ul>
               






                
            </div>
            <div className='basis-50 border'>
                <div className='overview-img'>

                </div>
                <img src="#" alt="Real estate images" />
                
            </div>
        </div>
        <div>

        </div>
        </div>
     
    </div>

    </div>
    </>
  )
}

export default AssetDetails