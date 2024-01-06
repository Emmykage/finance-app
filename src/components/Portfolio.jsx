import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPortfolio } from '../redux/actions/portfolio'
import Loader from './loader/Loader'
import { usd_format } from './misc/USD'
// import { GiMoneyStack } from 'react-icons/gi'

const PortfolioComponent = () => {
  const dispatch = useDispatch()
  const {portfolio, loading} = useSelector(state => state.portfolios)
    const {id} = useParams()
    useEffect(()=> {
      dispatch(getPortfolio(id))
    },[])
    if(loading){
      return (
    <div className='bg-white p-3 rounded-sm'>
      <div className='bg-gree box-shadow p-1 rounded-sm'>
       
        <h2 className='py-0 my-0'>{portfolio.asset.asset_name}</h2>
        <p className='text-xs'>{portfolio.asset.asset_type}</p>

        <p className='text-2xl font-semibold'>{portfolio.user.last_name} {portfolio.user.first_name} </p>
        <div className='flex justify-between gap-2 py-3'> 
          <p className='justify-between gap-3 flex-1 '>
          <span className='font-semibold mr-3 '>Amount:</span>
            <span className=''>{usd_format(portfolio.amount)}</span>
           
          </p>
          <p className=' justify-between gap-3 flex-1'>
            <span className='font-semibold - mx-3'>Interest:</span>
            <span>{usd_format(portfolio.investment_interest)}</span>
          </p>
       
        </div>
        <div>
             
            <p>{portfolio.asset.title}</p>
            <p className='capitalize'>{portfolio.asset.payment_schedule}</p>
          
             <p className='my-2 p-2 shadow rounded-sm'>
               <span>{portfolio.asset.overview_description}</span>
             </p>
 
           </div>
       
           </div>
    </div>
  )
}else{
  return(
    <Loader/>
  )
}
}

export default PortfolioComponent