import React, { useEffect } from 'react'
import AssetHeader from '../../components/guest/header/AssetHeader'
import { useDispatch, useSelector } from 'react-redux'
// import { getAssets } from '../../redux/assets/assets'
import { useParams } from 'react-router-dom'
import { getAssets } from '../../redux/actions/assets'
import AssetComp from '../../components/AssetComponent'

const AssetDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {offers} = useSelector(state => state.assets)
    useEffect(() => {
        dispatch(getAssets())
    }, [])
    
    const asset = offers.find((asset) => asset.id == id)
  return (
    <>
    <AssetHeader/>
    <AssetComp/>
   
    
    </>
  )
}

export default AssetDetails