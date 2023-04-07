import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ExploreInvestment from '../../components/visitors/ExploreInvestment'
import { toggleMenuClose } from '../../redux/model/nav'

const HowItWorks = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(toggleMenuClose())
  },[])
  return (
    
    <>
    
    
    {/* <div>HowItWorkhghhggygs</div> */}
    <ExploreInvestment />
    </>
  )
}

export default HowItWorks