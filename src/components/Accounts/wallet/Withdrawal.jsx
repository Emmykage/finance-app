import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../loader/Loader'
import { createTransaction } from '../../../redux/actions/wallet'

const Withdrawal = () => {
    const {loading} = useSelector(state => state.transactions)
    const [withdraw, setWithdraw] = useState({coin_type: "USD THETHER", amount: "", wallet_address: "", transaction_type: "withdraw"})
    const dispatch = useDispatch()
     
     const handleWithdrawalInput = (e) => {
        setWithdraw({
            ...withdraw,
            [e.target.name]: e.target.value,

        })        

    }
     const handleWithdrawal = (e) => {
        e.preventDefault()
        dispatch(createTransaction(withdraw))
     }
     if(loading) {return(
         <Loader/>
     )}
  return (
    <div className='bg-white box-shadow p-3 b-radius-1'>
        <h3>Withdraw</h3>
        <form onSubmit={handleWithdrawal}>
        <div  className='m-3'>
            <label className='block m-1'>Select Coin to receive payment</label> 
            <select name='coin_type' value={withdraw.coin_type} onChange={handleWithdrawalInput} required>
                <option value="USD THETHER" selected>USD THETHER</option>
                <option value="BITCOIN">BITCOIN</option>
                <option value="ETHERUM">ETHERUM (ERC-20)</option>
            </select>
        </div>
        <div>
            <label className='block m-1' htmlFor="amount">Enter Amount</label>
            <input type="number" placeholder='Enter Amount in USD' name="amount" value={withdraw.amount} onChange={handleWithdrawalInput} required/>
        </div>
        <div className='m-2'>
            <label className='block m-1' htmlFor="client_address">Enter Wallet Address</label>
            <input type='text' id="client_address" name='wallet_address' value={withdraw.wallet_address} onChange={handleWithdrawalInput} required/>
        </div>
    <div>
     <button className='btn w-full bg-semi text-white'>Request</button>
     </div>
     </form>
     </div>
  )
}

export default Withdrawal