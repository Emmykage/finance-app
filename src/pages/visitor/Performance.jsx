import React from 'react'
import PerformanceHeader from '../../components/header/guest/PerformanceHeader'
import PerformancePlatform from '../../components/guest/Performance'
const Performance = () => {
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