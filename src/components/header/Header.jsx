import React from 'react'
import './header.css'
import Nav from './Nav'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const Header = ({first_name}) => {
  return (
<header>
  <div className='heroBanner-outer-container flex-justify-space'>
    <div className='heroBanner-inner-container flex-justify-space gap-2'>


    <div className='heroBanner-left flex-grid'>
      <div className="content-holder">
        <div  className='user-name'>
        <h1>
         {first_name}
        </h1>
        </div>
        
        <div className='hero-details'>
          <h4 className=''>Welcome to your dashboard</h4>
          <p className='' >Completing your account setup is the first step in the process of investing outside the stock market. If you’re new to alternatives and want to learn more, explore our educational resources.</p>

        </div>
      </div>

    </div>
    <div className='heroBanner-right flex-grid'>
      {/* <div>
        <div> */}
          <ul>
            <li>
              <div className='flex-justify-row align'>
                <div className='check'><CheckCircleOutlinedIcon className='r-icon'/></div>
                <div className='nav-info'><p>Account type selection</p></div>
                <div className='arror marker'><ArrowForwardIosOutlinedIcon/></div>
               
              </div>
            </li>
            <li>
              <div className='flex-justify-row align'>
                <div className='check'><CheckCircleOutlinedIcon className='r-icon'/></div>
                <div className='nav-info'><p>verify your identity <br/>Tell us a bit about yourself</p></div>
                <div className='arror marker'><ArrowForwardIosOutlinedIcon/></div>
               
              </div>
            </li>
            <li>
              <div className='flex-justify-row align'>
                <div className='check'><CheckCircleOutlinedIcon className='r-icon'/></div>
                <div className='nav-info'><p>make your first investment</p></div>
                <div className='arror marker'><ArrowForwardIosOutlinedIcon/></div>
               
              </div>
            </li>

           

          </ul>
        {/* </div>
      </div> */}

    </div>

  </div>
  </div>

</header>  )
}

export default Header