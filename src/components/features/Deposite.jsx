import React, { useState } from 'react'
import './deposite.css'
import BasicModal from '../modals/CheckoutModal'
import CheckoutModal from '../modals/CheckoutModal'

const Deposite = ({portfolio, setPortfolio}) => {
    const [toggleModal, setToggleModal] = useState(false)
    const handleChange = (e) => {
        e.preventDefault()
        setPortfolio({
            ...portfolio,
            [e.target.name]: e.target.value
        })
        console.log(portfolio.amount)
    }
    const handlePriceRange = () => {

    }
    console.log(toggleModal)
  return (
    <div className='deposit-div text-gray wrapper'>
    <div className='header'>

 
    <h2>Price Range</h2>
    <p>Use slider or enter min and max price</p>
    </div>
    <div className='price-input'>
        <div className='field'>
            <span>Min</span>
            <input type="number" className='input-min'  value={"2500"} disabled/>
        </div>
        <div className="seperator">-</div>
        <div className='field'>
            <span>$</span>
            <input name='amount' type="number" className='input-max'  value={portfolio.amount} onChange={handleChange}/>
        </div>
        
    </div>
    <div className="slider">
            <div className="progress"></div>
        </div>
        <div className='range-input'>
        {/* <input type="range" className='range-min' min={0} max={10000} value={2500} /> */}
        <input type="range" name='amount' className='range-max' min={10000} max={50000} value={portfolio.amount} onChange={handleChange} />

        </div>

        <button className='btn m-2' onClick={()=> setToggleModal(!toggleModal)}>Click to Proceed</button>
        <CheckoutModal setToggleModal={setToggleModal} toggleModal={toggleModal} portfolio={portfolio}/>
</div>
  )
}

export default Deposite