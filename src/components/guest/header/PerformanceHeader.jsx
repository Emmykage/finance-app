import React from 'react';

const PerformaceHeader = () => (
  <header>

    <div className="offeringBanner-outer-container">
      <div className="offeringBanner-inner-container inner-container">

        <div className="offeringBanner">
          <div className="content-holder">

            <h1 className="prioty">
              Investment offerings
            </h1>
            <p>
              Access unique private market investment offerings across a diverse set of product types and asset classes.
            </p>

            <div className="offer-details gap-5 flex-justify-space">
              <div className="offer-card">
                <span>
                    12.7%
            </span>
                <p>
                    The weighted average annualized target return for all open offerings.*
            </p>
              </div>
              <div className="offer-card">
                <span>
                    $3B+
            </span>
                <p>
                    Total invested on the platform.
            </p>
              </div>
              <div className="offer-card">
                <span>
                    $1.8B+
            </span>
                <p>
                    Total dollars returned to investors.
            </p>
              </div>

            </div>
          </div>

        </div>
        <div className="heroBanner-right">
          <div>
            <div />
          </div>

        </div>

      </div>
    </div>

  </header>
);

export default PerformaceHeader;
