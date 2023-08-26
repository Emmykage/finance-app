import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ExploreInvestment from '../../components/guest/ExploreInvestment'
import { toggleMenuClose } from '../../redux/model/nav'
import HHeader from '../../components/guest/header/HHeader'

const HowItWorks = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(toggleMenuClose())
  },[])
  return (
    
    <>
    <HHeader/>
    <ExploreInvestment />
    </>
  )
}

export default HowItWorks