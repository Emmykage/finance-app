import React from 'react';
import phoneDevice from '../../assets/image/investment-photos/download.png';
import curate from '../../assets/image/svg-icon/svg-eye.svg';
import holistic from '../../assets/image/svg-icon/svg-holistic.svg';

import report from '../../assets/image/svg-icon/svg-report.svg';

const ExploreInvestment = () => (
  <div className="howitwork-content container-fit">
    <div className="investment-process">
      <div className="flex-justify-space explore-cards ">

        <div className="flex-grid-2 explore-card card left border">

          <div className="card-header" />
          <span>Icon</span>
          <h3>Income</h3>
          <p>High monthly or quarterly current income</p>

          <div className="ratio m-2">
            <p>Target returns</p>
            <h5>3-10%+</h5>

          </div>
          <div className="period m-3">
            <p>Terms</p>
            <h5>3m - 4yr+</h5>
          </div>
          <a href="">View Offerings </a>

        </div>
        <div className=" flex-grid-3 right">
          <span>1 - Explore</span>
          <div className="header">
            <h2> Explore investment opportunities</h2>
            <p>Whether you’re looking to generate income, grow your portfolio’s value, or a combination of both, we offer investments that match these objectives.</p>

          </div>
          <div className="info-bullets">

            <p>
              <span>&#x2713;</span>
              {' '}
&nbsp;
              <strong>Broadest range: </strong>
              We offer more alternative asset classes than any other platform.
            </p>

            <p />
            <p>
              <span>&#x2713;</span>
              {' '}
&nbsp;
              <strong>
                Top-tier investment managers: &nbsp;
              </strong>
              Access institutional-quality investments without institutional costs.

            </p>
          </div>
          <div className="button-div ">
            <a className="btn flex-grid">
              Browse investments
            </a>
            <a className="btn rec flex-grid">
              Get recommendations
            </a>

          </div>

        </div>
      </div>
      <div className="invest gap-2 flex-justify-space">
        <div className="flex-grid left padding-2">
          <span>
            2 - INVEST
          </span>
          <h2>
            Invest with confidence
          </h2>
          <p>From past performance metrics to background on our partners, we aim to provide all the information needed to make an informed decision.</p>
          <div className="info-bullets">
            <p>
              <span>&#x2713;</span>
              {' '}
&nbsp;
              <strong>Highly-vetted:</strong>
              {' '}
              All investments pass a four-step due diligence process.
            </p>
            <p>
              <span>&#x2713;</span>
              {' '}
&nbsp;
              <strong>Dedicated support: </strong>
              {' '}
              Our investor relations team is available to answer your questions at any time.
            </p>
          </div>
          <a href="" className="btn">
            learn more
          </a>
        </div>
        <div className="flex-grid right">
          Animated logo

        </div>
      </div>
      <div className="earn flex-justify-space">
        <div className="flex-grid left">
          <img
            src={phoneDevice}
            alt=""
          />
        </div>
        <div className="flex-grid right">
          <span>
            3 - EARN
          </span>
          <h2>
            Track your performance and earnings
          </h2>
          <p>Investments typically pay regular income, growth at maturity, or a combination of both.</p>

          <div>
            <p>
              Investments typically pay regular income, growth at maturity, or a combination of both.
            </p>
            <p>
              Quick payments: Your returns are deposited into your FDIC-insured Yieldstreet Wallet.
            </p>
            <p>
              Returns on your returns: Roll your maturing investments directly into a new opportunity.
            </p>
          </div>
          <a href="">
            Get statred
          </a>
        </div>

      </div>

    </div>

    <div className="testimonials">
      <div className="flex-justify-space sub-testimonial">

        <div className="flex-grid left">
          <div className="cont save">
            <span>
              TESTIMONIALS
            </span>
            <h2>
              Read what our investors have to say
            </h2>
            <div className="flex-justify-space">
              <div>
                <span> Total members</span>
                <h2>200k+</h2>
              </div>
              <div>
                <span> Avg. investments per investor</span>
                <h2>5</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grid right">
          <div className="testimonial-card">
            <div className="head">
              <h1>"</h1>

            </div>
            <div className="r-top flex-grid">
              <p>The ease of use of the platform, and the complete transparency are top features to me </p>
              <div className="bottom">
                <h3>
                  Australia H
                </h3>
                {/* <span>Investor since 2021</span> */}

              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="">
        <small>
          The testimonials presented on this page have been provided by actual investors in Yieldstreet funds without compensation. Yieldstreet has selected the testimonials, and certain testimonials have been edited to remove personally identifiable information and for brevity. Testimonials were not selected based on objective or random criteria, but rather were selected based on Investopedic understanding of its relationship with the providers of the testimonials. The uncompensated testimonials presented here may not be representative of other investors' experiences, and there can be no guarantee that investors will experience future performance or success consistent with the testimonials presented

        </small>
      </div>

    </div>
    <div className="behind-the-scenes">
      <div className="cont">
        <span>BEHIND THE SCENES</span>
        <div>
          <h2>
            We analyze billions of dollars worth of investments on your behalf

          </h2>
          <p>
            Before an investment reaches your portfolio, our investment team works behind the scenes to bring what we believe are the best possible opportunities to you.
          </p>

        </div>

      </div>

      <div className="advantage">
        <div className="add-card">
          <div className="image">
            <img src={holistic} alt="icon" />

          </div>

          <div className="ad-write">
            <h4 className="ad-header">
              Curate exclusive opportunities

            </h4>
            <p className>
              We partner with third-party managers to bring you opportunities normally only available to institutions. We have also developed an extensive network of partnerships with experienced originators.

            </p>

          </div>
        </div>
        <div className="add-card">
          <div className="image">
            <img src={curate} alt="icon" />

          </div>
          <div className="ad-write">
            <h4 className="ad-header">
              Holistic due diligence review
            </h4>
            <p>

              Opportunities are evaluated first by a dedicated team for each asset class. From there, committees unassociated with the opportunity provide a fresh perspective and challenge the investment's thesis to identify any potential risks.
            </p>

          </div>
        </div>
        <div className="add-card">
          <div className="image">
            <img src={report} alt="icon" />

          </div>
          <div className="ad-write">
            <h4>
              Ongoing monitoring and reporting
            </h4>
            <p>

              Our experienced Portfolio & Risk Management Team constantly monitors your investments, providing regular updates. You can view your portfolio and track your performance at any time on the Yieldstreet app.
            </p>

          </div>
        </div>

      </div>
    </div>
    <div className="max-width-md">

      <h3>
        How much should I allocate to private markets?

      </h3>
      <p>
        Investment managers like BlackRock recommend supplementing your portfolio of stocks and bonds with up to 20% private market alternatives.
      </p>
    </div>
    <div className="footbanner">
      <div className="creed">

        <h2>
          evolve your wealth
        </h2>
        <p>
          Invest in curated private market alternatives from top-tier managers — all on one easy-to-use platform.

        </p>
        <a className="btn banner" href="">Get started</a>
      </div>
    </div>
  </div>
);

export default ExploreInvestment;
