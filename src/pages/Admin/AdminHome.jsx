import React, { useEffect } from 'react';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getRecentPortfolios } from '../../redux/actions/portfolio';
// import portfolio from '../../redux/portfolio/portfolio';

const AHome = () => {
  const dispatch = useDispatch();
  const { recent_portfolios } = useSelector((state) => state.portfolios);
  useEffect(() => {
    dispatch(getRecentPortfolios());
  }, []);
  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <div className="date">
          <input type="date" />
        </div>
        <div className="insights">
          <div className="sales">
            <span><AutoGraphOutlinedIcon /></span>
            <div className="middle">
              <div className="left">
                <h3>Total Sale</h3>
                <h1>$25,000</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx="38" cy={38} r={36} />
                </svg>
                <div className="number">
                  <p>81%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">
              last 24 hours
            </small>

          </div>
          <div className="expenses">
            <span><AutoGraphOutlinedIcon /></span>
            <div className="middle">
              <div className="left">
                <h3>Total Expense</h3>
                <h1>$25,000</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx="38" cy={38} r={36} />
                </svg>
                <div className="number">
                  <p>81%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">
              last 24 hours
            </small>

          </div>
          <div className="income">
            <span><AutoGraphOutlinedIcon /></span>
            <div className="middle">
              <div className="left">
                <h3>Total Sale</h3>
                <h1>$25,000</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx="38" cy={38} r={36} />
                </svg>
                <div className="number">
                  <p>81%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">
              last 24 hours
            </small>

          </div>

        </div>

        {/* -----------end of insights ------------- */}
        <div className="recent-orders">
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th />
                <th>Amount</th>
                <th>Payment</th>
                <th>total Int</th>
                <th />
              </tr>

            </thead>
            <tbody>

              {recent_portfolios.length < 1 ? <td className="text-center"><h2 className="w-full">there are no portfolios</h2></td> : recent_portfolios.map((portfolio) => (
                <>
                  <tr className="text-left">
                    <td>{portfolio.asset.title}</td>
                    <td>{portfolio.amount}</td>
                    <td>{portfolio.paid ? 'Due' : 'Pending'}</td>
                    <td className="warning">{portfolio.investment_interest}</td>
                    <td className="primary"><NavLink to="/admin/portfolios/2">Details</NavLink></td>
                  </tr>

                </>
              ))}

            </tbody>

          </table>
          <a href="">Show All</a>
        </div>
      </div>

    </>
  );
};

export default AHome;
