import React from 'react'
import RealEstate from '../../assets/image/svg-icon/realestate.svg';
import VentureCapital from '../../assets/image/svg-icon/venture-capital.svg';
import PrivateEquity from '../../assets/image/svg-icon/private-equity.svg';
import PrivateCredit from '../../assets/image/svg-icon/private-credit.svg';
import Crypto from '../../assets/image/svg-icon/crypto.svg';
import ShortTermNote from '../../assets/image/svg-icon/short-term-note.svg';
import DiversifiedFunds from '../../assets/image/svg-icon/diversified-funds.svg';
import Transportation from '../../assets/image/svg-icon/transportation.svg';
import Art from '../../assets/image/svg-icon/art.svg';




const OfferingTabs = () => {
  return (
    <div className='offering'>
        <div className="offering-tabs">
        <div>
          <img src={RealEstate} />
          {' '}
          <p>Real Estate</p>
        </div>

        {/* <div><a><img src={RealEstate} /> <p>Real Estate</p></a></div> */}

        <div>
          <img src={VentureCapital} />
          {' '}
          <p>Venture Capital</p>
        </div>
        <div>
          <img src={PrivateEquity} />
          {' '}
          <p>Private Equity</p>
        </div>
        <div>
          <img src={PrivateCredit} />
          {' '}
          <p>Private Credit</p>
        </div>
        <div>
          <img src={Crypto} />
          {' '}
          <p>Crypto</p>
        </div>
        <div>
          <img src={ShortTermNote} />
          {' '}
          <p>Short Term Note</p>
        </div>
        <div>
          <img src={DiversifiedFunds} />
          {' '}
          <p>Diversified Funds</p>
        </div>
        <div>
          <img src={Transportation} />
          {' '}
          <p>Transportation</p>
        </div>
        <div>
          <img src={Art} />
          {' '}
          <p>Art</p>
        </div>

      </div>
    </div>
  )
}

export default OfferingTabs