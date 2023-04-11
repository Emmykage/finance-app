import React from 'react'
import FootBanner from './FootBanner'
import img1 from '../../assets/image/svg-icon/about-svg/about-1.svg'
import img2 from '../../assets/image/svg-icon/about-svg/about-2.svg'
import img3 from '../../assets/image/svg-icon/about-svg/about-3.svg'
import img4 from '../../assets/image/svg-icon/about-svg/about-4.svg'
import img5 from '../../assets/image/svg-icon/about-svg/about-5.svg'
import img6 from '../../assets/image/svg-icon/about-svg/about-6.svg'

const AboutUs = () => {
  return (
    <div className='about'>
        <div className='mission max-width-md text-center border'>
            <span>OUR MISSION</span>
            <h3>We believe private market alternatives should be a fundamental part of your portfolio.</h3>
            <p> 
That’s why we’re unlocking access to make it easier than ever to get started.</p>

        </div>
        <div className='reveals'>
            <h3 className=''>What sets Yieldstreet apart</h3>
<div className='grid-display'>
    <div >
        <div className='icon-svg-div'>
            <img src={img1} alt="" />
        </div>
        <div>
            <h4>Broadest range of alternative asset classes</h4>
            <p>We offer a growing list of asset classes from real estate to venture capital to art.</p>
        </div>
    </div>
    <div className=''>
        <div className='icon-svg-div'>
            <img src={img2} alt="" />
        </div>
        <div>
            <h4>Exclusive access to offerings from top managers</h4>
            <p>We partner with global managers who hold a collective $500B+ in assets.</p>
        </div>
    </div><div className=''>
        <div className='icon-svg-div'>
            <img src={img3} alt="" />
        </div>
        <div>
            <h4>Opportunities curated and vetted by professionals</h4>
            <p>Our team approves less than 10% of the billions of dollars in deals they evaluate.</p>
        </div>
    </div><div className=''>
        <div className='icon-svg-div'>
            <img src={img4} alt="" />
        </div>
        <div>
            <h4>Accessible minimums allow greater diversification</h4>
            <p>Build a diverse portfolio with a slice of many alternative investments.</p>
        </div>
    </div><div className=''>
        <div className='icon-svg-div'>
            <img src={img5} alt="" />
        </div>
        <div>
            <h4>Terms that fit your goals</h4>
            <p>Long lockup periods are not required. Terms range from 3 months to 5+ years..</p>
        </div>
    </div><div className=''>
        <div className='icon-svg-div'>
            <img src={img6} alt="" />
        </div>
        <div>
            <h4>Dedicated investor support</h4>
            <p>Easily connect live with a private market investment professional.</p>
        </div>
    </div>
</div>
        </div>
        <FootBanner>Invest in curated private market alternatives from top-tier managers — all on one easy-to-use platform.</FootBanner>
        
    </div>
  )
}

export default AboutUs