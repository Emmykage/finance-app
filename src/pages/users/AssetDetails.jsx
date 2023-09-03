import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAssets } from '../../redux/actions/assets'
import AssetComp from '../../components/AssetComponent'
import Deposite from '../../components/features/Deposite'
import Loader from '../../components/loader/Loader'

const UserAssetDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [portfolio, setPortfolio] = useState({asset_id: id, amount: 0})

    const {offers} = useSelector(state => state.assets)
    useEffect(() => {
        dispatch(getAssets())
    }, [])
    
    const asset = offers.find((asset) => asset.id == id)
    if(asset){

  
  return (
    <>
    <AssetComp asset={asset}/>
    <Deposite portfolio={portfolio} setPortfolio={setPortfolio}/>

   
    
    </>
  )
}else{
  return(
<Loader/>
  )
  
}
}

export default UserAssetDetails