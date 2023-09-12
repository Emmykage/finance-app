import React from 'react';
import RealEstate from '../../assets/image/svg-icon/realestate.svg';
import VentureCapital from '../../assets/image/svg-icon/venture-capital.svg';
import PrivateEquity from '../../assets/image/svg-icon/private-equity.svg';
import PrivateCredit from '../../assets/image/svg-icon/private-credit.svg';
import Crypto from '../../assets/image/svg-icon/crypto.svg';
import ShortTermNote from '../../assets/image/svg-icon/short-term-note.svg';
import StructuredNote from '../../assets/image/svg-icon/structured-notes.svg';
import DiversifiedFunds from '../../assets/image/svg-icon/diversified-funds.svg';
import Transportation from '../../assets/image/svg-icon/transportation.svg';
import Art from '../../assets/image/svg-icon/art.svg';
import PercentageChat from '../charts/Percentage';
import AnnualReturn from '../charts/AnnualReturn';

const PerformancePlatform = () => (
  <div className="performance">
    <div className="platform-performance flex-justify-space">
      <div className="left flex-grid">
        <h2>Platform performance</h2>
        <p>
          Since inception, we have unlocked more than 400 private market opportunities for investors.
        </p>
        <a>View latest Quarterly Portfolio Snapshot</a>

      </div>
      <div className="right flex-grid">
        <h4>Portfolio overview</h4>
        <span>By dollars invested</span>
        <div className=" portfolio-chart">
          {/* <h2 className='center'>Portfolio overview chart</h2> */}
          <PercentageChat />
        </div>
      </div>

    </div>
    <hr />

    <div className="insight">
      <div className="flex-left">
        <div>

          <h2>Asset Class insight</h2>
          <p>Finance App offers more alternative asset classes than other platform</p>
        </div>

      </div>

      <div className="chart-table">
        <div className="title">
          <span className="active">
            Net annualized return
          </span>
          <span>
            payment history
          </span>
          <span>
            Performance
          </span>

        </div>

        <div className="text-center">
          {/* <h2>Insights Chart</h2> */}
          <AnnualReturn />
        </div>
      </div>
    </div>
    <hr />
    <div className="offering">
      <h2>Individual offering performance</h2>
      <p>Monitor returns across the lifecycle of your investments through regular performance updates.</p>
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
    <div className="investor-insights">
      <h2>Investor Insights</h2>
      <p>OUr members rate us as one of the best investing platforms in the game</p>
      <div className="flex-space gap-2 ">
        <div className="flex-grid text-center order insight">
          <div className="border insight flex-justify-center">
            <h3 className="align-center">
              430,851
            </h3>

          </div>
          <p>TOTAL MEMBERS</p>

        </div>
        <div className="flex-grid text-center insight">
          <div className="border insight flex-justify-center">
            <h3>
              8.3
            </h3>

          </div>
          <p>AVERAGE # OF INVESTMENTS PER INVESTOR</p>

        </div>
        <div className="flex-grid text-center">
          <div className="border insight flex-justify-center">
            <h3>
              Real Estate, Short Term Notes,
              <br />
              {' '}
              Private Credit
            </h3>

          </div>
          <p>POPULAR ASSET CLASSES</p>

        </div>
      </div>
    </div>
    <div className="footbanner">
      <div className="creed text-center">

        <h2>
          evolve your wealth
        </h2>

        <a className="btn banner" href="">Get started</a>
      </div>
    </div>
  </div>

);

export default PerformancePlatform;
