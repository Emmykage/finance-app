import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Loader from '../loader/Loader';

const InvestmentUpdates = () => {
  const [{ user, loading }] = useOutletContext();
  const USD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="activity-container">
      <h5>Investments</h5>
      <div className="flex-justify-space">
        <span className="text-xl">Total Assets Value:</span>
        {' '}
        <span className="semi-bold text-xl">{loading ? <Loader /> : USD.format(user.total_asset)}</span>
      </div>
      <div className="top">
        <span>Important</span>
        <p>Q3 2022 Portfolio Snapshot</p>
        <p>
          Please find our Q3 2022 Portfolio Snapshot
          <a href="">here</a>
          {' '}
          You can expect to recieve these update quarterly.
        </p>

      </div>
      <div className="bottom">
        <span>Important</span>
        <p>Welcome to InvestEdge!</p>
        <p>Whether you're looking to generate income, grow your overrall portfolio value, or some combination of both, InvestEdge offers a variety of alternative investment opportunities</p>

        <div className="flex-justify-start act">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat est animi repellendus aliquid iste autem dolores voluptas reiciendis magni cupiditate ipsa nostrum nemo debitis reprehenderit nihil natus eum, et inventore!</p>
        </div>

      </div>
      <div>
        <ul className="activity-portfolios">

          {loading ? <Loader /> : user.portfolios.map((portfolio) => (
            <li className="flex-space p-2">
              <span className="flex-grid">{portfolio.asset.title}</span>
              {' '}
              <span className="flex-grid">{portfolio.asset.asset_type}</span>
              {' '}
              <span className="flex-grid semi-bold text-xl">
                {' '}
                $
                {portfolio.amount}
              </span>
            </li>
          ))}

        </ul>
      </div>

    </div>
  );
};

export default InvestmentUpdates;
