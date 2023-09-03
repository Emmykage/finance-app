import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAssets } from '../../redux/actions/assets'
import AssetComp from '../../components/AssetComponent'
import Deposite from '../../components/features/Deposite'

const UserAssetDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {offers} = useSelector(state => state.assets)
    useEffect(() => {
        dispatch(getAssets())
    }, [])
    
    const asset = offers.find((asset) => asset.id == id)
  return (
    <>
    <AssetComp/>
    <Deposite/>

   
    
    </>
  )
}

export default UserAssetDetails