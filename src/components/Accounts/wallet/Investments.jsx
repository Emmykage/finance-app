import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPortfolios } from '../../../redux/actions/portfolio';
import { usd_format } from '../../misc/USD';
import portfolio_icon from '../../../assets/image/portfolio_icon_4021806.png';

const Investments = () => {
  const dispatch = useDispatch();
  const { portfolios } = useSelector((state) => state.portfolios);
  useEffect(() => {
    dispatch(getPortfolios());
  }, []);
  return (
    <div className="portfolios p-3 w-3-4">
      <ul className="">
        {portfolios.length < 1 ? (<h2 className="text-center">You have no portfolios</h2>) : portfolios.map((portfolio) => (
          <li className="text-left box-shadow rounded-base my-2">
            <div className="flex rounded-base">
              <div className="portfolio-img flex-1 p-1 text-center">
                <img src={portfolio.asset.image_url ? portfolio.asset.image_url : portfolio_icon} alt="" className="rounded-base w-full" />

              </div>
              <div className="flex-2 p-2 ">
                <div className="flex ">

                  <div className="flex-1">

                    <h4 className="my-1">{portfolio.asset.asset_type}</h4>
                    <p className="my-1">
                      <i className="fa fa-map-marker icon" />
                      {portfolio.asset.title}
                    </p>

                  </div>
                  <div>
                    <span className="text-lg font-medium text-green">Profits: </span>
                    {' '}
                    <span className="text-lg font-medium">{usd_format(portfolio.investment_interest)}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex-1">

                    <span className="text-xl font-semibold">{usd_format(portfolio.amount)}</span>

                  </div>
                  <div className="flex-1 flex justify-between ">
                    <span className="capitalize text-sm">
                      <i className="fa fa-bed" />
                      {' '}
                      {portfolio.asset.payment_schedule}
                    </span>
                    <span className="text-sm">
                      <i className="fa fa-tint" />
                      {' '}
                      {portfolio.asset.term}
                      {' '}
                      Terms
</span>
                    <span className="text-sm">
                      <i className="fa fa-expand" />
                      {' '}
                      {portfolio.asset.minimum_investment}
                      min
</span>
                  </div>
                </div>
                <div className="text-right p-0 flex justify-between">
                  <span />
                  <NavLink to="" className="btn inline-block p-1 ml-auto">view interest</NavLink>
                </div>

              </div>
            </div>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default Investments;
