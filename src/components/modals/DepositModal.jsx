import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTransaction } from '../../redux/actions/wallet'

const DepositConfirmation = ({toggleModal, setToggleModal, deposit}) => {
const {loading, error} = useSelector(state => state.transactions)
  const dispatch = useDispatch()
  useEffect(()=> {
    if(!loading && !error){
      setToggleModal(false)
    }

  },[loading, error])
  const handleDeposit =() => {
   dispatch(createTransaction(deposit))
  
  }  
  console.log(deposit)
  
  return (
    <div className={`modal-container flex-justify-center ${toggleModal && "show"}`}>
        <div className='modal flex justify-center items-center withdraw-confirmation'>
          <div className="confirm-box justify-around">
          
           <h3 className='text-center'>Confirm Deposit</h3>
           <div className='bg- h-full items-center flex'>
            <div className='flex justify-around w-full'>
              <button onClick={()=> setToggleModal(null)} className='btn cancel confirm-btn-cancel'>Cancel</button>
              <button onClick={handleDeposit} className='btn'>Confirm</button>
            </div>
           
           </div>
           </div>
        </div>
    </div>
  )
}

export default DepositConfirmation