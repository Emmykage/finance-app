import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPortfolios } from '../../../redux/actions/portfolio';
import { usd_format } from '../../../components/misc/USD';

const Orders = () => {
  const dispatch = useDispatch();
  const { portfolios } = useSelector((state) => state.portfolios);
  useEffect(() => {
    dispatch(getPortfolios());
  }, []);

  return (
    <div>
      <div className="grid grid-4 gap-3">
        {portfolios.map((portfolio) => (

          <div className="shadow  p-2 rounded-sm">
            <div className="flex justify-between items-center">
              <span>{portfolio.asset.asset_name}</span>

              <span>{usd_format(portfolio.amount)}</span>
            </div>
            <div>
              <h2 className="text-gra my-0 py-0">
                {portfolio.asset.title}
              </h2>
              <p>
                {portfolio.user.first_name}
                {' '}
                {portfolio.user.last_name}
              </p>

            </div>

            <div className="flex justify-between items-center">
              <NavLink to={`/admin/orders/${portfolio.id}`}>view</NavLink>
              <span>Delete</span>

            </div>

          </div>

        ))}
      </div>
    </div>
  );
};

export default Orders;
