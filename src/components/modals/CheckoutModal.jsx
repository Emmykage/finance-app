import React, { useEffect } from 'react'
import './modal.css'
import { useDispatch, useSelector } from 'react-redux';
import { createPortfolio, makePayment } from '../../redux/actions/portfolio';
import { usd_format } from '../misc/USD';

const CheckoutModal = ({setToggleModal, toggleModal, portfolio, asset}) => {
    const {loading, paid, new_portfolio} = useSelector(state => state.portfolios)
    const handleConfirmation = () => {
        if(new_portfolio.id){
            dispatch(makePayment(new_portfolio.id))
        }
        return
    }
    let display = '';
    useEffect(()=> {
        if(paid){toggle()}  
    },[paid])
    
    const dispatch = useDispatch()
    if(toggleModal){ display = "show"}
    const handleSubmit = () => {
        if(portfolio.amount > asset.minimum_investment ){
            dispatch(createPortfolio(portfolio))
        }else{
            return
        }
      
    }
   
    const toggle =()=> {
        setToggleModal(!toggleModal)
    }
    
  return (
    <div className={`modal-container dark-text flex-justify-center ${display}`} >
        <div className="modal checkout">
            <div className='close-btn-div'><button onClick={toggle}>X</button></div>
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
            {loading && <p>Processing...</p>}
            <p>{paid && "Payment will be acknowledged when deposit has been confirmed"}</p>
            <button   className={new_portfolio.id && 'btn'} onClick={handleConfirmation }> confirm payment</button>

        </div>

        <div>
        </div>

    </div>
  )
}

export default CheckoutModal