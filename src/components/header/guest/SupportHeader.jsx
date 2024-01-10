import React from 'react';
import contact_img from '../../../assets/image/svg-icon/contact.f3381f55.svg';
import aboutImg from '../../../assets/image/investment-photos/trading-pic.webp';

const SupportHeader = () => (
  <header>
    <div className="heroBanner-outer-container flex-justify-space">
      <div className="heroBanner-inner-container about flex-justify-space gap-2">

        <div className="heroBanner-left  flex-grid">
          <div className="content-holder">
            <div className="content-holder-inner">

              <div className="user-name">
                <h1>
                  We're here for you
                </h1>
              </div>

              <div className="hero-details">
                <p className="">Your goals are our goals. Connect with our Investor Relations team directly, or use our resource library below for answers at your fingertips..</p>

              </div>
              <div className=" btn-div">
                <a href="" className="btn"> Get Started</a>
              </div>
            </div>
          </div>

        </div>
        <div className="heroBanner-right flex-grid">
          <div className="support-right ">

            <div className="support-cont">
              <div>
                <img src={contact_img} alt="" />
              </div>
              <div>
                <h3 className="py-0 my-0">Contact Investor Relations</h3>
                <p>Get in touch with us your way - our team is standing by to assist.</p>

              </div>

            </div>

          </div>
        </div>

      </div>

    </div>

  </header>
);

export default SupportHeader;
