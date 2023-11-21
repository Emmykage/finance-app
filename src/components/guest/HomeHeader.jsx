import React from 'react';
import { NavLink } from 'react-router-dom';
// import VNav from '../../header/VNav';

const HomeHeader = () => (
  <header>

    <div className="offeringBanner-outer-container">
      <div className="offeringBanner-inner-container inner-container">

        <div className="InvestmentBanner">
          <div className="content-holder">
            <div className="investment flex-justify-space">
              <div className="investment-left-banner">
                <h2 className="">
                    Build a robust private market portfolio for superior risk-adjusted returns and enhanced investment performance.  

                    </h2>
                <p>
                    Supercharge your wealth with strategic investments.
                    Boost your portfolio by adding real estate, Artificial Intelligence, and Renewable Energy for maximum returns.
                    </p>
                <NavLink to={'/auth/login'} className="btn">
                    Get Started

                    </NavLink>

              </div>
              {/* <div className="investment-right-banner">
                

              </div> */}

            </div>

          </div>

        </div>

      </div>
    </div>

  </header>
);

export default HomeHeader;
