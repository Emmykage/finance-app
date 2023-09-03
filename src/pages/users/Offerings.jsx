import React, { useEffect } from 'react'
// import OFFER from "../../assets/image/advice-chart.svg"
// import VisitorOffer from '../../components/offering/VisitorOffer'
import { useDispatch, useSelector } from 'react-redux'
import { getAssets } from '../../redux/actions/assets'
import { toggleMenuClose } from '../../redux/model/nav'
import UserOffer from '../../components/offering/UserOffer'

const Offerings = () => {
    const {offers} = useSelector( state => state.assets)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getAssets())
      dispatch(toggleMenuClose())
    },[])
    
  return (
    <div className='content-container p-tx5'>
        <UserOffer assets={offers}/>
        
    </div>
  )
}

export default Offerings