import React, { useEffect } from 'react'
import VisitorOffer from '../../components/offering/VisitorOffer'
import {LockOutlined} from '@mui/icons-material/';
import OFFER from '../../assets/image/advice-chart.svg'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuClose } from '../../redux/model/nav';
import VisitorHeader from '../../components/guest/header/VisitorHeader';
const VHome = () => {
  const {offers} = useSelector( state => state.assets)
  // console.log(offers)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(toggleMenuClose())
  },[])
  return (
    <>
     <VisitorHeader/>

    <div className='content-container'>
      <VisitorOffer assets={offers}/>
      <div className='lock center flex-justify-space'>
        <div className='lock-icon'>
          <LockOutlined />
        </div>
        <div className=' info'>
          <h2>Offering Locked</h2>
          <p className=''>
            
Some opportunities are only visible to logged-in members.
          </p>
        </div>
        <div className='reg-div'>
          <a className='btn'>
            Sign up now
          </a>
        </div>

      </div>
      <div className='prev-offer'>
        <h2 className='text-center'>Explore some of our recently closed offering</h2>
        <div>
          <div className='offer-cards'>
                                    <div className='card'>
            <div className='card-img'>
                    <img src={OFFER}/>
                </div>
                <div>
                    <h3>Supply Chain Financing I.Z</h3>
                    <p>
                      this offering recently closed
                    </p>
                    <p>Metrics are expected in 88 days.</p>
                    
                </div>
                <div className='offer-link flex-justify-left'>
                  <span>Income</span>
                  <span>Short term</span>
                  <span>Debt </span>
                  <span>IRA eligible </span>

                </div>
            </div>
            <div className='card'>
            <div className='card-img'>
                    <img src={OFFER}/>
                </div>
                <div>
                    <h3>Supply Chain Financing I.Z</h3>
                    <p>
this offering recently closed
                    </p>
                    <p>Metrics are expected in 88 days.</p>
                    
                </div>
                <div className='offer-link flex-justify-left'>
                  <span>Diversify</span>
                  <span>income</span>
                  <span>Debt </span>
                  <span>IRA eligible </span>

                </div>
            </div>
            <div className='card'>
            <div className='card-img'>
                    <img src={OFFER}/>
                </div>
                <div>
                    <h3>Supply Chain Financing I.Z</h3>
                    <p>
this offering recently closed
                    </p>
                    <p>Metrics are expected in 88 days.</p>
                    
                </div>
                <div className='offer-link flex-justify-left'>
                  {/* <span>Income</span> */}
                  <span>Short term</span>
                  <span>Debt </span>
                  <span>IRA eligible </span>

                </div>
            </div>
          </div>
          <div className='text-center prev-offer-btn-div'>
          <a className='btn text-center'>View past offerings</a>

          </div>
          <div className='small-info'>
            <span>
            * The weighted average annualized target return is calculated based on the average target return, weighted by the size of each offering of all currently open offerings on the YieldStreet Platform (except for the Yieldstreet Prism Fund), including those that are only visible to logged-in members. This weighted average annualized target return is presented for informational purposes only, is hypothetical and is neither a guarantee nor a prediction or projection of future performance of any single offering or any portfolio of investments in Yieldstreet offerings. The weighted average annualized target return consists of the target return for each individual open offering; in cases where the target return is expressed as a range, this calculation uses the midpoint. "Annual interest," "Annualized Return" or "Target Returns" represents a projected annual target rate of interest or annualized target return, and not returns or interest actually obtained by fund investors. Unless otherwise specified, target interest or returns are based on an analysis performed by Yieldstreet of the potential inflows and outflows related to the transactions in which the strategy or fund has engaged and/or is anticipated to engage in over the estimated term of the fund. There is no guarantee that targeted interest or returns will be realized or achieved or that an investment will be successful. Actual performance may deviate from these expectations materially, including due to market or economic factors, portfolio management decisions, modeling error, or other reasons. Furthermore, this calculation is not weighted by time of investment, does not reflect actual returns, and assumes an investment in all the currently open offerings. An investor who has not made such investment or is not eligible to make such investment(s) cannot expect to rely on this average as a reliable indicator or estimate of possible results of an actual investment program.

            </span>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default VHome