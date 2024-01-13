import React from 'react';
import { NavLink } from 'react-router-dom';
import RealEstate from '../../assets/image/svg-icon/realestate.svg';
import VentureCapital from '../../assets/image/svg-icon/venture-capital.svg';
import PrivateEquity from '../../assets/image/svg-icon/private-equity.svg';
import Crypto from '../../assets/image/svg-icon/crypto.svg';
import Transportation from '../../assets/image/svg-icon/transportation.svg';
import Art from '../../assets/image/svg-icon/art.svg';
import { CiLock } from 'react-icons/ci';

const OfferingTabs = () => (
  <div className="offering">
    <div className="offering-tabs">
      <NavLink to="/real_estates" className={"text-white"}>

        <img src={RealEstate} className={"text-white"} />
        {' '}
        <p>Real Estate</p>


      </NavLink>

      {/* <div><a><img src={RealEstate} /> <p>Real Estate</p></a></div> */}

      <div>
        <img src={VentureCapital} />
        {' '}
        <p className='mr-2'>Venture Capital</p>
        <CiLock />
      </div>
      <div>
        <img src={PrivateEquity} />
        {' '}
        <p className='mr-2'>Private Equity</p>
        <CiLock />
      </div>

      <NavLink to="crypto" className={"text-white"}>
        <img src={Crypto} />
        {' '}
        <p>Crypto</p>
      </NavLink>

      <div>
        <img src={Transportation} />
        {' '}
        <p className='mr-2'>Transportation</p>
        <CiLock />
      </div>
      <div>
        <img src={Art} />
        {' '}
        <p className='mr-2'>Art</p> <CiLock className='font-bold' />
      </div>

    </div>
  </div>
);

export default OfferingTabs;
