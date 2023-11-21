import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuClose } from '../../redux/model/nav';
import { getAssets } from '../../redux/actions/assets';
import HomeHeader from '../../components/guest/HomeHeader';
import crpto from '../../assets/image/svg-icon/crypto.svg'
import currate from '../../assets/image/svg-icon/svg-holistic.svg'
import Aos from 'aos';
import 'aos/dist/aos.css'
import OfferingTabs from '../../components/offering/OfferingTabs';
const VHome = () => {
  const { offers } = useSelector((state) => state.assets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAssets());
    dispatch(toggleMenuClose());
    Aos.init({duration: 2000})
  }, []);
  return (
    <div className='home'>
      <HomeHeader />

      <div className="content-container">
        {/* <TopInfo /> */}
        <div className='bg-gray-light-trans p-5  w-max-1170 grid grid-2 justify-between gap-1 m-auto'>
        <div className='flex-1 flex gap-2 wrap p-2'>
          <div className='flex flex-1 items-center'>
            <span className='text-4xl'>
              $3.9B+
            </span>
            <span className='text-sm p-2'>
              Invested on the platform
            </span>

          </div>
          <div className='flex flex-1 items-center'>
            <span className='text-4xl'>
              450K+
            </span>
            
            <span className='text-sm p-2'>
              numbers and counting
            </span>

          </div>
          

          
          </div> 
          <div className='flex-1 flex bg-blue gap-2'>
            <div className='flex flex-1 items-center gap-2'>
              <span className='flex-1'>
                <img src={crpto}/>
              </span>
              <span className='text-sm'>
                Access meticulously scrutinized investment opportunities curated by institutional managers with a track record of excellence.

              </span>

          </div>
          <div className='flex flex-1 items-center gap-2'>
          <span className='flex-1'>
            <img src={currate}/>
          </span>
          <span className='text-sm'>
          Explore an extensive array of alternative asset classes for a well-rounded and diversified investment strategy.          </span>

          </div>
          

          
          </div> 
       
        </div>
        <hr />
        <div className='home-ad text-white'>
          
          <div className='backfiller slide1 flex border rounded-base'>
            <div className='flex-1 text-white'></div>
            <div className='flex-1 p-2 text-white'>
              <h4 className='my-2'>Pioneering Credibility</h4>
              <p>Trust is the cornerstone of our foundation. At invest edge, we pride ourselves on a track record of unwavering credibility. Our transparent and proven investment strategies have consistently delivered results, earning the confidence of seasoned investors and newcomers alike.</p>


            </div>
            
          </div>
          <div className='my-2 slide2 backfiller border rounded-base flex' data-aos-duration="2500">
            
            <div className='flex-1 p-2 data-aos="fade-left" '>

            
            <h4 className='my-2'>Innovative Investment Strategies</h4>
            <p>
              Experience a paradigm shift in investment thinking. invest edge leads the way with cutting-edge strategies that transcend traditional boundaries. Our commitment to innovation ensures that your investments are not only secure but positioned for unprecedented growth in ever-evolving markets.
            </p>
            </div>
            <div className='flex-1'></div>
          </div>
          <div className='border backfiller slide3 rounded-base my-2 flex'>
            <div className='flex-1'></div>
            <div className='flex-1 p-2' data-aos="fade-rigt">
            <h4 className='my-2'>Sustainable Energy Leadership</h4>
            <p>
              Be part of a movement towards a sustainable future. InvestEdge is at the forefront of renewable energy investments, demonstrating a commitment to both innovation and environmental responsibility. Invest with purpose and align your portfolio with the future of sustainable finance.
            </p>
            </div>
            
          </div>
          
          <div className='border slide4 backfiller my-2 rounded-base flex' data-aos="fade-left" >
            <div className='flex-1 p-2' data-aos="fade-up" >
            <h4 className='my-2'> Your Investment Odyssey Begins Here:</h4>
            <p> Every click with InvestEdge is a step into a world of unparalleled possibilities. Start your investment odyssey with a company that combines credibility, innovation, and a relentless pursuit of excellence. Your financial journey begins at the intersection of trust and innovation.</p>

            </div>
            <div className='flex-1'>

            </div>
           
          </div>
        </div>

        <OfferingTabs/>
              
        

        <div className="footbanner">
      <div className="creed">

        <h2>
          evolve your wealth
        </h2>
        <p>
          Invest in curated private market alternatives from top-tier managers — all on one easy-to-use platform.

        </p>
        <a className="btn banner" href="">Get started</a>
      </div>
    </div>
      </div>
    </div>
  );
};

export default VHome;
