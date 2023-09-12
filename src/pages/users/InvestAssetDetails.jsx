import React, { useState } from 'react';
import Deposite from '../../components/features/Deposite';

const InvestAssetDetails = () => (
  <>

    <div className="asset-details text-dark">
      <div className=" details p-3">
        <h2>
          Details
        </h2>
        <div className="grid-display gap-2 grid-display-3 my-4">
          <div className="border-light p-1 b-radius-2">
            <h3>Returns & Management fees</h3>
            <hr />
            <div className="detail-list">
              <p className="flex-space">
                <span>Ann'l management fee</span>
                <span>2%</span>

              </p>
              <p className="flex-space">
                <span>Ann'l management fee</span>
                <span>2%</span>

              </p>
              <p className="flex-space">
                <span>Inv share in excess profits </span>
                <span>100%</span>

              </p>
            </div>

          </div>
          <div className="border-light p-1 b-radius-2">
            <h3>Schedule</h3>
            <hr />
            <div className="detail-list">
              <p className="flex-space">
                <span>Payment schedule</span>
                <span>2%</span>

              </p>
              <p className="flex-space">
                <span>Target term</span>
                <span>27 months</span>

              </p>

            </div>

          </div>
          <div className="border-light p-1 b-radius-2">
            <h3>Structure</h3>
            <hr />
            <div className="detail-list">
              <p className="flex-space">
                <span>Tax document</span>
                <span>G-1</span>

              </p>
              <p className="flex-space">
                <span>Offering structure</span>
                <span>SPV</span>

              </p>
              <p className="flex-space">
                <span>Ann'l flat expense</span>
                <span>0.25%</span>

              </p>
            </div>

          </div>

        </div>
        <div className="detail-foots">
          <span className="border-light">Fund</span>
          <span className="border-light">Debt</span>
          <span className="border-light">Equity</span>
          <span className="border-light">Quarterly payment?</span>
          <span className="border-light">Diversified</span>
          <span className="border-light">Balanced</span>
          <span className="border-light">IRA eligible</span>

        </div>
      </div>

    </div>
    <Deposite />

  </>
);

export default InvestAssetDetails;
