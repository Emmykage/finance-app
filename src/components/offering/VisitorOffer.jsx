import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../loader/Loader';

function VisitorOffer({ assets, loading }) {
  const navigation = useNavigate();
  const getStarted = (id) => {
    navigation(`/asset-details/${id}`);
  };

  if (loading) {
    return (
      <Loader />
    );
  }
  return (
    <div>

      <div className="offer-cards">
        {assets.length < 1 && <h2>No offers available check with us in a few days</h2>}
        {assets.map((offer) => (
          <>

            <div className="card black" key={offer.id}>
              <span onClick={() => getStarted(offer.id)}>

                <div className="card-img offer-card-div">
                  <div className="xyz">
                    <div className="tiny-icon-div">
                      <div className="tiny-c">
                        <p>New</p>
                      </div>

                    </div>

                  </div>

                </div>
                <div>
                  <span className="text-gray type">{offer.asset_type}</span>
                  <h3>{offer.title}</h3>
                  <p> -
                    {offer.asset_category}
                    {' '}
                  </p>
                  <ul>
                    <li>
                      <span>Min. investment</span>
                      <span>
                        $
                        {offer.minimum_investment}
                        K
                      </span>
                    </li>
                    <li>
                      <span>Term</span>
                      <span>
                        {offer.term}
                        {' '}
                        Months
                      </span>
                    </li>
                    <li>
                      <span>Payment Schedule</span>
                      <span>{offer.payment_schedule}</span>
                    </li>
                    <li>
                      <span>Tax document</span>
                      <span>{offer.tax_document}</span>
                    </li>

                  </ul>
                  {/* <a className='btn'>Unlock recommendations</a> */}
                </div>
              </span>
            </div>
          </>
        ))}

      </div>
    </div>
  );
}

export default VisitorOffer;
