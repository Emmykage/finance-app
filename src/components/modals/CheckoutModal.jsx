import React from 'react'
import './modal.css'
import { useDispatch } from 'react-redux';
import { createPortfolio } from '../../redux/actions/portfolio';
import { usd_format } from '../misc/USD';

const CheckoutModal = ({setToggleModal, toggleModal, portfolio, asset}) => {
    let display = '';
    
    const dispatch = useDispatch()
    if(toggleModal){ display = "show"}
    const handleSubmit = () => {
        if(portfolio.amount > asset.minimum_investment ){
            dispatch(createPortfolio(portfolio))
        }else{
            return
        }
      
    }
  return (
    <div className={`modal-container dark-text flex-justify-center ${display}`} >
        <div className="modal checkout">
            <div className='close-btn-div'><button onClick={()=>setToggleModal(!toggleModal)}>X</button></div>
            <div className='checkoutModal '>
                <div className='grid-display-assets border-b p-1'> <span>Asset Title</span> <span>{asset.title}</span></div>
                <div className='grid-display-assets border-b p-1'> <span>Asset Type</span><span> {asset.asset_type}</span> </div>
                <div className='grid-display-assets border-b p-1'><span>Description</span> <span>{asset.description}</span></div>
                <div className='grid-display-assets border-b p-1'><span> Term</span><span>{asset.term}</span></div>
                <div className='grid-display-assets border-b p-1'><span>Payment Schedule</span><span>{asset.payment_schedule}</span></div>
                <div className='grid-display-assets border-b p-1'><span>Share In Excess(%)</span><span>{asset.share_in_excess}</span></div>
                <div className='grid-display-assets border-b p-1'><span>Deposit (USD)</span><span>{portfolio.amount < asset.minimum_investment ? <p className='red-text'>you cant proceed with this payment </p> : usd_format(portfolio.amount)}</span></div>
                  
            </div>
            <div>
            <a className='btn block' onClick={handleSubmit }>Make Payment</a>

            </div>
            
        
        </div>

    </div>
  )
}

export default CheckoutModal