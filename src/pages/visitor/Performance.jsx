import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenuClose } from '../../redux/model/nav'
import { useEffect } from 'react'
import OfferingHeader from '../../components/guest/header/PerformanceHeader'
import PerformancePlatform from '../../components/guest/Performance'
const Performance = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(toggleMenuClose())
  },[])
  return (
    <>
      <OfferingHeader/>
      <div className='container'>
        <div className="content-container">
        <PerformancePlatform />

        </div>

      </div>

    </>
  )
}

export default Performance