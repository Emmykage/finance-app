import React from 'react'
import './header.css'
import Nav from './Nav'

const Header = () => {
  return (
<header>
  <Nav />
  <div className='heroBanner-outer-container flex-justify-space'>
    <div className='heroBanner-inner-container flex-justify-space'>


    <div className='heroBanner-left'>
      <div className="content-holder">
        <div>
        <h1 className=''>
          Anyi
        </h1>
        </div>
        
        <div className='hero-details'>
          <h4 className=''>Welcome to your dashboard</h4>
          <p className='' >Completing your account setup is the first step in the process of investing outside the stock market. If you’re new to alternatives and want to learn more, explore our educational resources.</p>

        </div>
      </div>

    </div>
    <div className='heroBanner-right'>
      <div>
        <div>
          <ul>
            <li>Account type selection</li>
            <li>verify your identity <br/>Tell us a bit about yourself</li>
            <li>make your first investment</li>

          </ul>
        </div>
      </div>

    </div>

  </div>
  </div>

</header>  )
}

export default Header