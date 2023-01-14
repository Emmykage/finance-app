import React from 'react'
import CHART_PIC from '../../assets/image/barchart.svg'
// import {ArrowForwardIosOutlinedI} from '@mui/icons-material/';
import TOTAL from "../../assets/image/total.svg"
import RATE from "../../assets/image/rate.svg"
import {ArrowForwardIosOutlined} from '@mui/icons-material/';
import ASSET from "../../assets/image/asset.svg"
import OFFERING from "../../assets/image/offering.svg"
import ICONCHART from "../../assets/image/advice-chart.svg"
const Home = () => {
  return (
    <div className='sub-container' >
      <div className='inner-container'>
        <div className='home-banner flex-justify'>
          <div className="home-banner-icon">
            <img src={ICONCHART} />
          </div>
          <div className="home-banner-details">
            <h3 className='m-4'>Access tailored private market recommendations</h3>
            <p className='m-4'>
            Tap into the collective wisdom of our investment teams. Answer a few key questions to get a customizable set of investment recommendations in just 2-3 minutes.

            </p>
            <a className='banner-button btn'>Unlock recommendations</a>
          </div>
            
        </div>
        <div>
          <h2>Latest deals on the platform</h2>
          <div className='flex-justify gap-5'>
            <div className='platform flex-grid flex-justify' >
              <div className='icon-image'>
                <img src={OFFERING}/>
              </div>
              <div className='flex-1 mx-2'>
                <span>
                  15
                </span>
                <p>Open offerings</p>
              </div>
            </div>
            <div className='platform flex-grid flex-justify'>
              <div className='icon-image'>
                <img src={ASSET} alt='chart'/>
              </div>
              <div className='flex-1 mx-2'>
                <span>
                  15
                </span>
                <p>Open assets classes</p>
              </div>
            </div>
            <div className='platform flex-grid flex-justify'>
              <div className='icon-image'>
                <img src={OFFERING}/>
              </div>
              <div className='flex-1 mx-2'>
                <span>
                  8.6%
                </span>
                <p>Open offerings</p>
              </div>
            </div>

            <div className='platform flex-grid flex-justify'>
              <div className='icon-image'>
                <img src={TOTAL}/>
              </div>
              <div className='flex-1 mx-2'>
                <span>
                  15
                </span>
                <p>Open offerings</p>
              </div>
            </div>

          </div>
        </div>
        <div className='table-div m-4'>
        <table>
          <thead>
           
              <tr>
                <th>
                  offering
                </th>
                <th>
                  Asset class
                </th> <th>
                  Target return
                </th> <th>
                  Target term
                </th> <th>
                  Min. Investment
                </th>
              </tr>
            
          </thead>
          <tbody>
            <tr>
              <td>consumer Goods</td>
              <td>private Credit </td>
              <td>9%</td>
              <td>35 Months</td>
              <td>10,000</td>
            </tr>
            <tr>
              <td>consumer Goods</td>
              <td>private Credit </td>
              <td>9%</td>
              <td>35 Months</td>
              <td>10,000</td>
            </tr>
            <tr>
              <td>consumer Goods</td>
              <td>private Credit </td>
              <td>9%</td>
              <td>35 Months</td>
              <td>10,000</td>
            </tr>
            <tr>
              <td>consumer Goods</td>
              <td>private Credit </td>
              <td>9%</td>
              <td>35 Months</td>
              <td>10,000</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className='flex-justify'>
          <div className='flex-0'>
            <img src={CHART_PIC} alt='chart'/>
          </div>
          <div className='flex-3'>
            <h3>
              Simulate a portfolio of alternatives
            </h3>
            <p>
              With our simulator you can demo how a diversified set of alternatives can provide stable income as well as long term growth for your portfolio.
            </p>
          

          </div>
          {/* <div className='flex-1'> */}
          <span className='btn banner-button'>
              
              Simulate earnings
           
          </span>
          {/* </div> */}
        </div>
        <div className='question-bar'>
          <h2>Frequently asked questions</h2>
          <div>
            <ul>
              <li className='flex-justify-space'>
                <span>How does YieldStreet get paid?</span><span><ArrowForwardIosOutlined/></span>
                
              </li>
              <li className='flex-justify-space'><span>How do i make my first investment?</span><span><ArrowForwardIosOutlined/></span> </li>
                <li className='flex-justify-space'><span>Haw are investments offering structured</span><span><ArrowForwardIosOutlined/></span> 
                </li>
                <li className='flex-justify-space'><span>What is Yieldstreet traack record?</span><span><ArrowForwardIosOutlined/></span> 
                </li>
                <li className='flex-justify-space'><span>what assets classes does YieldStreet offer?</span><span><ArrowForwardIosOutlined/></span> 
                </li>
                <li className='flex-justify-space'><span>What is YieldStreets due deliggence process</span><span><ArrowForwardIosOutlined/></span> </li>
            </ul>
          </div>
        </div>
      <div>

      </div>
      </div>
    </div>
  )
}

export default Home