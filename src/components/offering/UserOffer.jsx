import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usd_format } from '../misc/USD';

function UserOffer({ assets }) {
  const navigation = useNavigate();
  const getStarted = (id) => {
    navigation(`/details/${id}`);
  };
  return (
    <div>
      <div className="offer-cards">
        {assets.map((offer) => (
          <>

            <div className="card black cursor-pointer " key={offer.id}>
              <span onClick={() => getStarted(offer.id)}>

                <div className="card-img offer-card-div">
                  <div className="xyz">
                    <div className="tiny-icon-div">
                      <div className="tiny-c">
                        <p className=''>New</p>
                      </div>

                    </div>

                  </div>

                </div>
                <div>
                  <span className="text-gray type uppercase">{offer.asset_type}</span>
                  <h3 className="uppercase text-lg text-gray-var font-bold">{offer.title}</h3>
                  <p className="capitalize">
                    {offer.asset_category}
                    {' '}
                  </p>
                  <ul>
                    <li>
                      <span className='text-sm'>Min. investment</span>
                      <span className='text-sm font-semibold'>
                        
                        {usd_format(offer.minimum_investment)}
                        
                      </span>
                    </li>
                    <li>
                      <span className='text-sm'>Term</span>
                      <span className='text-sm font-semibold'>
                        {offer.term}
                        {' '}
                        Months
                      </span>
                    </li>
                    <li>
                      <span className='text-sm'>Payment Schedule</span>
                      <span className='text-sm font-semibold'>{offer.payment_schedule}</span>
                    </li>
                    <li>
                      <span className='text-sm'>Tax document</span>
                      <span className='text-sm font-semibold'>{offer.tax_document}</span>
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

export default UserOffer;
