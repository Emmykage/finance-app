import React from 'react'
// import OFFER from "../../assets/image/advice-chart.svg"
import offers from '../../mock/Offers'
import { useNavigate } from 'react-router-dom'
function VisitorOffer() {
    const navigation = useNavigate()
    const getStarted = () => {
        navigation('/get_started')
    }
  return (
    <div>
        <div className='offer-cards'>
            {offers.map((offer) =>(
                <div className='card black'>
                    <a href='#'  onClick={getStarted}>

                  
                    <div className='card-img offer-card-div'>
                        <div className='xyz'>
                            <div className='tiny-icon-div'>
                                <div className='tiny-c'>
                                    <p>New</p>
                                </div>

                            </div>

                        </div>
                    {/* <img src={OFFER}/> */}
                </div>
                <div>
                    <span className='text-gray type'>REAL ESTATE</span>
                    <h3>Access tailored private market recommendations</h3>
                    <p>
                    Answer a few key questions to get a customizable set of investment recommendations in just 2-3 minutes.

                    </p>
                    <ul>
                        <li><span>Min. investment</span><span>${offer.minimum_investment}K</span></li>
                        <li><span>Term</span><span>{offer.term} Months</span></li>
                        <li><span>Payment Schedule</span><span>{offer.payment_schedule}</span></li>
                        <li><span>Tax document</span><span>{offer.tax_document}</span></li>

                    </ul>
                    {/* <a className='btn'>Unlock recommendations</a> */}
                </div>
                </a>
            </div>
            ))}
            
            </div>
    </div>
  )
}

export default VisitorOffer