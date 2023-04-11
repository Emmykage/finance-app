import React from 'react'

const FootBanner = ({children}) => {
  return (
    <div className='footbanner'>
    <div className='creed'>

    
    <h2>
        evolve your wealth
    </h2>
    <p>
    {children}

    </p>
    <div className='btn-div'>
    <a className='btn banner' href="">Get started</a>


    </div>
    </div>
</div>
  )
}

export default FootBanner