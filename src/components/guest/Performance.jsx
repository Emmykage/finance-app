import React from 'react';

import { NavLink, Outlet } from 'react-router-dom';
import PercentageChat from '../charts/Percentage';
import OfferingTabs from '../offering/OfferingTabs';

const PerformancePlatform = () => (
  <div className="performance">
    <div className="platform-performance flex justify-between gap-2">
      <div className="left flex-grid p-4 shadow">
        <h4>Platform performance</h4>
        <p className='text-sm text-gray'>
          Since inception, we have unlocked more than 400 private market opportunities for investors.
        </p>
        <a>View latest Quarterly Portfolio Snapshot</a>

      </div>
      <div className="flex-grid py-4 px-2 shadow">
        <h4 className='text-dark font-bold'>Portfolio overview</h4>
        <span className='text-gray-var'>By dollars invested</span>
        <div className=" portfolio-chart my-2">
          {/* <h2 className='center'>Portfolio overview chart</h2> */}
          <PercentageChat  />
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
          <NavLink to="/performance/annual_return">
            Net annualized return
          </NavLink>
          <NavLink to="/performance/history">
            payment history
          </NavLink>
          <NavLink to="/performance/performance">
            Performance
          </NavLink>

        </div>

        <div className="chart-box text-center">
          {/* <h2>Insights Chart</h2> */}
          <Outlet />
        </div>
      </div>
    </div>
    <hr />
    <div className="offering">
      <h2>Individual offering performance</h2>
      <p>Monitor returns across the lifecycle of your investments through regular performance updates.</p>
      <OfferingTabs />

    </div>
    <div className="investor-insights">
      <h2>Investor Insights</h2>
      <p>OUr members rate us as one of the best investing platforms in the game</p>
      <div className="flex-space gap-2 ">
        <div className="flex-grid text-center order insight">
          <div className="border-gray-light insight flex-justify-center">
            <h3 className="align-center">
              430,851
            </h3>

          </div>
          <p className='text-dark text-sm'>TOTAL MEMBERS</p>

        </div>
        <div className="flex-grid text-center insight ">
          <div className="border-gray-light insight flex-justify-center">
            <h3>
              8.3
            </h3>

          </div>
          <p className='text-dark text-sm'>AVERAGE # OF INVESTMENTS PER INVESTOR</p>

        </div>
        <div className="flex-grid text-center">
          <div className="border-gray-light insight flex-justify-center">
            <h4 className='text-lg text-dark'>
              Real Estate, Short Term Notes,
              <br />
              {' '}
              Private Credit
            </h4>

          </div>
          <p className='text-dark text-sm'>POPULAR ASSET CLASSES</p>

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
