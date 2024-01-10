import React from 'react';
import { GoRocket } from 'react-icons/go';
import { BsFillGridFill, BsBarChart } from 'react-icons/bs';
import { IoPieChartOutline } from 'react-icons/io5';
import { MdTableChart, MdOutlineSecurity } from 'react-icons/md';
import { HiBuildingOffice } from "react-icons/hi2";
import { BsFillTelephoneFill } from "react-icons/bs";

import { CiUser } from 'react-icons/ci';

import SupportHeader from '../../components/header/guest/SupportHeader';
import img_1 from '../../assets/image/download.png';
import img_2 from '../../assets/image/download (1).png';
import img_3 from '../../assets/image/download (2).png';
import { NavLink } from 'react-router-dom';

const Support = () => (
  <div className="support">
    <div>
      <SupportHeader />
    </div>
    <div className="dark-text inner-container">
      <h2 className="dark-text text-center">Frequently Asked Questions</h2>

      <div className="flex wrap grid-display-3  gap-3 mb-3">
        <NavLink to={'/support/get-started'} className="faq lg-flex dark-text items-center flex-030 border-light p-1 px-2 rounded-sm mb-2 lg-flex-100">
          <div className="mr-3">
            <GoRocket className="icon" />
          </div>
          <div>

            <h3 className="my-0 text-light-gray">Get started</h3>
            <p className="my-0">
              Learn more about out track record and how to open an account
            </p>
          </div>
        </NavLink>
        <NavLink to={'/support/set-up-account'} className="faq lg-flex dark-text flex-030  items-center border-light p-1 px-2 rounded-base mb-2 lg-flex-100">
          <div className="mr-3">
            <CiUser className="icon" />
          </div>
          <div>

            <h3 className="my-0 text-light-gray">Set up your account</h3>
            <p className="my-0">
              Dive into accreditation , account types and managing your account
            </p>
          </div>
        </NavLink>

        <NavLink to={'/support/explore'} className="faq lg-flex dark-text flex-030  items-center border-light p-1 px-2 rounded-base mb-2 lg-flex-100">
          <div className="mr-3">
            <BsFillGridFill className="icon" />
          </div>
          <div>

            <h3 className="my-0 text-light-gray">Explore our offerengs started</h3>
            <p className="my-0">
              Learn more about our range of asset classes and offereng types
            </p>
            {' '}

          </div>
        </NavLink>
        <NavLink to={'/support/investment'} className="faq lg-flex dark-text flex-030  items-center border-light p-1 px-2 rounded-base mb-2 lg-flex-100">
          <div className="mr-3">
            <IoPieChartOutline className="icon" />
          </div>
          <div>

            <h3 className="my-0 text-light-gray">Invest on InvestEdge</h3>
            <p className="my-0">
              Everything you need to know about investing on our platform
            </p>
            {' '}

          </div>
        </NavLink>

        <NavLink to={'/support/manage-portfolio'} className=" faq dark-text lg-flex flex-030  items-center border-light p-1 px-2 rounded-base mb-2 lg-flex-100">
          <div className="mr-3">
            <MdTableChart className="icon" />
          </div>
          <div>
            <h3 className="my-0 text-light-gray">Manage your portfolio</h3>
            <p className="my-0">
              You've made an investment - now what? We've got you covered
            </p>
          </div>
          {' '}

        </NavLink>

        <NavLink to={'/support/get-support-security'} className="faq dark-text lg-flex  flex-030  items-center border-light p-1 px-2 rounded-base mb-2 lg-flex-100">
          <div className="mr-3">
            <MdOutlineSecurity className="icon" />
          </div>
          <div>

            <h3 className="my-0 text-light-gray"> Security & Privacy</h3>
            <p className="my-0">
              How we secure your account and information
            </p>
            {' '}

          </div>
        </NavLink>

        <NavLink to={'/support/capital'} className="faq dark-text lg-flex flex-030  items-center border-light p-2 rounded-base lg-flex-100">
          <div className="mr-3">
            <BsBarChart className="icon" />
          </div>
          <div>
            <h3 className="my-0 text-light-gray">Raise capital on InvestEdge</h3>
            <p className="my-0">
            How we secure your account and information
            </p>
          </div>

        </NavLink>

      </div>
    </div>

    <div className="dark-text inner-container">
      <h2 className="text-center">Investor tools</h2>
      <p className="text-center">
        Deepen your portfolio strategy independently, with our easy-to-use tools, or get a little help from our Digital Advice team.
      </p>
      <div className="grid grid-3 gap-3">

        <div className='border-light rounded-sm p-3'>
          <img src={img_1} alt="" />
          <div>
            <p>Reimagine your portfolio with the benefits of alternatives</p>
            <p>Check out sample portfolios as an example of what you could be building on Yieldstreet.</p>

          </div>
          <div>
            <button className="btn">View sample portfolios</button>
          </div>
        </div>

        <div className='border-light rounded-sm p-1 p-3'>
          <img src={img_2} alt="" />
          <div>
            <p>Reimagine your portfolio with the benefits of alternatives</p>
            <p>Check out sample portfolios as an example of what you could be building on Yieldstreet.</p>

          </div>
          <div>
            <button className="btn">View sample portfolios</button>
          </div>
        </div>

        <div className='border-light rounded-sm p-3'>
          <img src={img_3} alt="" />
          <div>
            <p>Reimagine your portfolio with the benefits of alternatives</p>
            <p>Check out sample portfolios as an example of what you could be building on Yieldstreet.</p>

          </div>
          <div>
            <button className="btn">View sample portfolios</button>
          </div>
        </div>
      </div>
    </div>
<div className='bg-gray-light-trans mt-2'>


    <div className="inner-small-container footer-note dark-text text-center flex items-center justify-around">

      <p className='font-semibold text-lg my-1'> Contact InvestEdge</p>
    <span><HiBuildingOffice /></span>
    <p className=' text-lg my-1'>300 Park Avenue 15th Floor, New York, NY 10022</p>
    
<span><BsFillTelephoneFill className='text-2xl' /></span>
<p className='text-lg my-1'>844-943-5378</p>

</div>
    </div>
  </div>

);

export default Support;
