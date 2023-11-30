import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAssets } from '../../../redux/actions/assets';
import { toggleMenuClose } from '../../../redux/model/nav';
import VisitorHeader from '../../../components/guest/header/VisitorHeader';
import VisitorOffer from '../../../components/offering/VisitorOffer';

const Crypto = () => {
  const { offers } = useSelector((state) => state.assets);
  const assets = offers.filter(offer => offer.asset_type === "Crypto")
const dispatch = useDispatch();
useEffect(() => {
  dispatch(getAssets());
  dispatch(toggleMenuClose());
}, []);
return (
  <div className='assets-page realestate'>
      <VisitorHeader/>
      <div className="content-container box-shadow">

      
      <div className='grid grid-2 assets-subhead'>
      <div className='text-center flex justify-center items-center'>
        <h2 >
            Cryptocurrency
        </h2>
         
      </div>
      <div>
          <h5>
          In a rapidly evolving financial landscape, we stand as your gateway to the future of wealth creation through cryptocurrency. Our commitment to innovation ensures that your investments are strategically positioned in the dynamic world of digital assets. Backed by cutting-edge blockchain technology, Investedge Crypto provides a secure and transparent platform, allowing you to capitalize on the potential of this transformative market. With a proven track record of navigating the volatile crypto space and delivering impressive returns, we invite you to join us in embracing the digital frontier. Seize the opportunity, diversify your portfolio, and ride the wave of cryptocurrency success with Investedge Crypto – where innovation meets investment excellence! 
          </h5>
      </div>
      </div>
      <div>
          <VisitorOffer assets={assets}/>
      </div>
      </div>
  </div>
)
}

export default Crypto