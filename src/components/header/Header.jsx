import React from 'react'
import './header.css'
import Nav from './Nav'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';const Header = () => {
  return (
<header>
  <Nav />
  <div className='heroBanner-outer-container flex-justify-space'>
    <div className='heroBanner-inner-container flex-justify-space'>


    <div className='heroBanner-left'>
      <div className="content-holder">
        <div>
        <h1 className=''>
          Yankee
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
            <li>
              <div className='flex-justify align'>
                <div className='check'><CheckCircleOutlinedIcon className='r-icon'/></div>
                <div className='nav-info'><p>Account type selection</p></div>
                <div className='arror marker'><ArrowForwardIosOutlinedIcon/></div>
               
              </div>
            </li>
            <li>
              <div className='flex-justify align'>
                <div className='check'><CheckCircleOutlinedIcon className='r-icon'/></div>
                <div className='nav-info'><p>verify your identity <br/>Tell us a bit about yourself</p></div>
                <div className='arror marker'><ArrowForwardIosOutlinedIcon/></div>
               
              </div>
            </li>
            <li>
              <div className='flex-justify align'>
                <div className='check'><CheckCircleOutlinedIcon className='r-icon'/></div>
                <div className='nav-info'><p>make your first investment</p></div>
                <div className='arror marker'><ArrowForwardIosOutlinedIcon/></div>
               
              </div>
            </li>

           

          </ul>
        </div>
      </div>

    </div>

  </div>
  </div>

</header>  )
}

export default Header