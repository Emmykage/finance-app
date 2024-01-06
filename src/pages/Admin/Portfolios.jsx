import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPortfolio } from '../../redux/actions/portfolio'
import Loader from '../../components/loader/Loader'

const Portfolios = () => {
  const dispatch = useDispatch()
  const {portfolio, loading} = useSelector(state => state.portfolios)
    const {id} = useParams()
    useEffect(()=> {
      dispatch(getPortfolio(id))
    },[])

    if(loading){


  return (
    <div className='bg-white p-3 rounded-sm'>
        <h2 className='py-0 my-0'>{portfolio.asset.asset_name}</h2>
        <span className='text-xs'>{portfolio.asset.asset_type}</span>

        <p>{portfolio.user.last_name} {portfolio.user.first_name} </p>
        <div className='flex justify-between gap-2 py-3'> 
          <p className='flex justify-between gap-3 flex-1'>
          <span>Amount</span>
            <span className=''>{portfolio.amount}</span>
           
          </p>
          <p className='flex justify-between gap-3 flex-1'>
            <span className=''>Investment Interest</span>
            <span>{portfolio.investment_interest}</span>
          </p>
       
        </div>
        <div>
             
             <span>{portfolio.asset.asset_name}</span><span>{portfolio.asset.minimum_investment}</span><span>{portfolio.asset.payment_schedule}</span><span>{portfolio.asset.title}</span>
             <p className='p-3 border rounded-sm'>
               <span>{portfolio.asset.overview_description}</span>
             </p>
 
           </div>
    </div>
  )
}else{
  return(
    <Loader/>
  )
}
}

export default Portfolios