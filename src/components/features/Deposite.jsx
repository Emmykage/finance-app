import React, { useState } from 'react'
import './deposite.css'
import BasicModal from '../modals/CheckoutModal'
import CheckoutModal from '../modals/CheckoutModal'

const Deposite = () => {
    const [price, setPrice] = useState({deposite: 0})
    const [toggleModal, setToggleModal] = useState(false)
    const handleChange = (e) => {
        e.preventDefault()
        setPrice({
            ...price,
            [e.target.name]: e.target.value
        })
        console.log(price)
    }
    const handlePriceRange = () => {

    }
    console.log(toggleModal)
  return (
    <div className='text-gray wrapper'>
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
            <input name='deposite' type="number" className='input-max'  value={price.deposite} onChange={handleChange}/>
        </div>
        
    </div>
    <div className="slider">
            <div className="progress"></div>
        </div>
        <div className='range-input'>
        {/* <input type="range" className='range-min' min={0} max={10000} value={2500} /> */}
        <input type="range" name='deposite' className='range-max' min={10000} max={50000} value={price.deposite} onChange={handleChange} />

        </div>

        <button className='btn m-2' onClick={()=> setToggleModal(!toggleModal)}>Click to Proceed</button>
        {/* <BasicModal/> */}
       {/* {toggleModal &&<CheckoutModal setToggleModal={setToggleModal} toggleModal={toggleModal}/>} */}
       <CheckoutModal setToggleModal={setToggleModal} toggleModal={toggleModal}/>
</div>
  )
}

export default Deposite