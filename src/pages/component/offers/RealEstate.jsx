import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VisitorOffer from '../../../components/offering/VisitorOffer';
import { getAssets } from '../../../redux/actions/assets';
import { toggleMenuClose } from '../../../redux/model/nav';
import VisitorHeader from '../../../components/guest/header/VisitorHeader';

const RealEstate = () => {
  const { offers } = useSelector((state) => state.assets);
  const assets = offers.filter((offer) => offer.asset_type === 'Real Estate');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAssets());
    dispatch(toggleMenuClose());
  }, []);
  return (
    <div className="assets-page realestate">
      <VisitorHeader />
      <div className="content-container box-shadow">

        <div className="grid grid-2 assets-subhead">
          <div className="text-center flex justify-center items-center">
            <h2>
              Real Estates
            </h2>

          </div>
          <div>
            <h5>
              we've redefined the landscape with a diverse portfolio, cutting-edge technology, and a hands-free management approach. Our commitment to innovation is evident in our use of AI and data analytics for real-time insights, ensuring informed decisions. Leave the hassles to us – from property management to maintenance. With a proven track record of consistently surpassing market expectations, Investedge invites you to join us in shaping the future of real estate. Cheers to a year of success and many more to come – invest with confidence, thrive with Investedge!
            </h5>
          </div>
        </div>
        <div>
          <VisitorOffer assets={assets} />
        </div>
      </div>
    </div>
  );
};

export default RealEstate;
