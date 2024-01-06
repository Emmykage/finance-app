import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usd_format } from '../misc/USD'
import { listUsers } from '../../redux/actions/users'
import Loader from '../loader/Loader'

const Transaction = ({transaction, handleApprove}) => {
    const {loading} = useSelector((state)=> state.transactions)
    const dispatch = useDispatch();

    if(loading){
        return(
            <Loader/>
        )
    }
    else{


  return (
    <div>
         <li className='flex items-center my-1 px-1 py-2 justify-between box-shadow flex-wrap gap-1'>
            <span className='font-medium flex-1'>{transaction.coin_type}</span>
            <span className='flex-1 font-normal'>{transaction.transaction_type}</span>
            <span className='flex-1 font-medium'>{usd_format(transaction.amount)}</span>
            <button className={`flex-1 approve text-sm status w-full my-1 ${transaction.status == "completed" ? "status" : "pending"}`} onClick={()=> handleApprove(transaction.id)}>{transaction.status == "completed" ?  "approved" : "pending"}</button>
          </li>
    </div>
  )
          
}
}

export default Transaction