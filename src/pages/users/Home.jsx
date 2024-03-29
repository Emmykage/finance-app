import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CHART_PIC from '../../assets/image/barchart.svg';
// import {ArrowForwardIosOutlinedI} from '@mui/icons-material/';
import TOTAL from '../../assets/image/total.svg';
// import RATE from "../../assets/image/rate.svg"
import ASSET from '../../assets/image/asset.svg';
import OFFERING from '../../assets/image/offering.svg';
import ICONCHART from '../../assets/image/advice-chart.svg';
import { toggleMenuClose } from '../../redux/model/nav';
import Questions from '../../components/pageComponents/Questions';
import { getQuestions } from '../../redux/questions/question';
import { getAssets } from '../../redux/actions/assets';
import { usd_format } from '../../components/misc/USD';

const Home = () => {
  const { faqs } = useSelector((state) => state.questions);
  const {latest_deals} = useSelector(state => state.assets)
console.log(latest_deals)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleMenuClose());
    dispatch(getAssets())
    dispatch(getQuestions());
  }, []);
  return (
    <div className="sub-container">
      <div className="inner-container black">
        <div className="home-banner flex-justify">
          <div className="home-banner-icon">
            <img src={ICONCHART} />
          </div>
          <div className="home-banner-details">
            <h3 className="m-4">Access tailored private market recommendations</h3>
            <p className="m-4 text-sm text-gray-var font-semibold">
              Tap into the collective wisdom of our investment teams. Answer a few key questions to get a customizable set of investment recommendations in just 2-3 minutes.

            </p>
            <div className="btn-div">
              <a className="banner-button btn">Unlock recommendations</a>

            </div>
          </div>

        </div>
        <div>
          <h2>Latest deals on the platform</h2>
          <div className="flex-justify gap-5">
            <div className="platform flex-grid flex-justify-row">
              <div className="icon-image">
                <img src={OFFERING} />
              </div>
              <div className="flex-1 mx-2">
                <span className='text-sm'>
                  15
                </span>
                <p className='text-sm'>Open offerings</p>
              </div>
            </div>
            <div className="platform flex-grid flex-justify-row">
              <div className="icon-image">
                <img src={ASSET} alt="chart" />
              </div>
              <div className="flex-1 mx-2">
                <span className='text-sm'>
                  15
                </span >
                <p className='text-sm font-medium'>Open assets classes</p>
              </div>
            </div>
            <div className="platform flex-grid flex-justify-row">
              <div className="icon-image">
                <img src={OFFERING} />
              </div>
              <div className="flex-1 mx-2">
                <span className='text-sm'>
                  8.6%
                </span>
                <p className='text-sm'>Open offerings</p>
              </div>
            </div>

            <div className="platform flex-grid flex-justify-row">
              <div className="icon-image">
                <img src={TOTAL} />
              </div>
              <div className="flex-1 mx-2">
                <span className='text-sm'>
                  15
                </span>
                <p className='text-sm'>Open offerings</p>
              </div>
            </div>

          </div>
        </div>
        <div className="table-div m-4">
          <table className='shadow'>
            <thead>

              <tr>
                <th>
                  offering
                </th>
                <th>
                  Asset class
                </th>
                {' '}
                <th>
                  Target return
                </th>
                {' '}
                <th>
                  Target term
                </th>
                {' '}
                <th>
                  Min. Investment
                </th>
              </tr>

            </thead>
            <tbody>
              {latest_deals.map(deal => (
                     <tr className='text-sm text-gray-var'>
                     <td className='text-sm text-gray-var'>{deal.asset_type}</td>
                     <td className='text-sm text-gray-var' >{deal.asset_type} </td>
                     <td className='text-sm text-gray-var'>9%</td>
                     <td className='text-sm text-gray-var'>{deal.term} Months</td>
                     <td className='text-sm text-gray-var'>{ usd_format(deal.minimum_investment)}</td>
                   </tr>
                
              ))}
                   <tr>
                <td className='text-sm text-gray-var'>consumer Goods</td>
                <td className='text-sm text-gray-var'>private Credit </td>
                <td className='text-sm text-gray-var'>9%</td>
                <td className='text-sm text-gray-var'>35 Months</td>
                <td className='text-sm text-gray-var'>10,000</td>
              </tr>
         

            </tbody>
          </table>
        </div>
        <div className="flex-justify">
          <div className="flex-0">
            <img src={CHART_PIC} alt="chart" />
          </div>
          <div className="flex-3">
            <h3 className='text-lg text-dark'>
              Simulate a portfolio of alternatives
            </h3>
            <p className='text-sm font-semibold text-gray-var'>
              With our simulator you can demo how a diversified set of alternatives can provide stable income as well as long term growth for your portfolio.
            </p>

          </div>
          {/* <div className='flex-1'> */}
          <span className="btn banner-button">

            Simulate earnings

          </span>
          {/* </div> */}
        </div>
        <div className="question-bar">
          <h2>Frequently asked questions</h2>
          <div>
            <ul>
              {faqs.map((faq) => (

                <Questions faq={faq} />
              ))}
            </ul>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Home;
