import React from 'react';
import VNav from '../../header/VNav';
import { NavLink } from 'react-router-dom';

const VisitorHeader = () => (
  <header>

    <div className="offeringBanner-outer-container">
      <div className="offeringBanner-inner-container inner-container">

        <div className="InvestmentBanner">
          <div className="content-holder">
            <div className="investment flex-justify-space">
              <div className="investment-left-banner">
                <h1 className="">
                    Start Investment Todays
                </h1>
                <p>
                    Diversify your portfolio with priverate market investment offerings once only reserved for the 1%.

                    </p>
                <NavLink to={'/auth/login'} className="btn">
                    Get Started

                    </NavLink>

              </div>
              <div className="investment-right-banner">
                <div className="investment-cards">
                    <div className="investment-card">
                        <span> 12.72%</span>
                        <p>
                          The weighted average annualized target return for all open offerings.*

                </p>

                      </div>
                    <div className="investment-card">
                        <span> 12.72%</span>
                        <p>
                          The weighted average annualized target return for all open offerings.*

                </p>

                      </div>
                    <div className="investment-card">
                        <span> 12.72%</span>
                        <p>
                          The weighted average annualized target return for all open offerings.*

                </p>

                      </div>
                    <div className="investment-card">
                        <span> 12.72%</span>
                        <p>
                          The weighted average annualized target return for all open offerings.*

                </p>

                      </div>

                  </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>

  </header>
);

export default VisitorHeader;
