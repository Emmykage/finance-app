import React from 'react';
import commercial from '../assets/image/investment-photos/realestate/Commercial-real-estate.webp';

const AssetComp = ({ asset }) => {

  return (
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
                  <span>
                    {asset.annual_mangt_fee}
                    %
                  </span>

                </p>
                <p className="flex-space">
                  <span>Ann'l management fee</span>
                  <span>
                    {asset.annual_mangt_fee}
                    %
                  </span>

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
                  <span>{asset.payment_schedule}</span>

                </p>
                <p className="flex-space">
                  <span>Target term</span>
                  <span>
                    {asset.term}
                    {' '}
                    months
                  </span>

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
        <div className="overview p-3">
          <div>
            <h2>Overview</h2>
          </div>
          <div>

            <div className="overview-info flex-stretch gap-5">
              <div className="flex-grid">
                <ul className='text-justify '>
                  <p className='text-sm'>
                    {asset.description}

                  </p>
                  <li>
                    <p className='text-sm'>
                      {asset.overview_description}
                    </p>
                  </li>
                  <li>
                    <p className='text-sm'>
                      <strong>  Proven business plan:</strong>
                      {' '}
                      {asset.overview_note}                  </p>
                  </li>

                  <p>More than 16 months since acquisition, consider investing in this seasoned offering with your retirement account.</p>

                </ul>

              </div>
              <div className="flex-grid">
                <div className="overview-img">
                  <img src={asset.image_url ? asset.image_url : commercial} alt="Real estate images" className='w-full h-full' />
                </div>

              </div>
            </div>
            <div />
          </div>

        </div>

      </div>
    </>
  );
}

export default AssetComp;
