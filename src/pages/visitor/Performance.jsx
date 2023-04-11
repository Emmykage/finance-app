import React from 'react'
import { useDispatch } from 'react-redux'
import PerformanceHeader from '../../components/header/guest/PerformanceHeader'
import PerformancePlatform from '../../components/guest/Performance'
import { toggleMenuClose } from '../../redux/model/nav'
import { useEffect } from 'react'
const Performance = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(toggleMenuClose())
  },[])
  return (
    <div>
      <PerformanceHeader />
      <div className='container'>
        <div className="content-container">
        <PerformancePlatform />

        </div>

      </div>

    </div>
  )
}

export default Performance