import React from 'react';
import Header from '../components/header/Header';
import OfferingHeader from '../components/guest/header/PerformanceHeader';
import Footer from '../footer/Footer';

const OfferLayout = ({ children }) => (
  <div className="main-container">
    <OfferingHeader />
    <div className="container">
      {children}
    </div>

    <Footer />

  </div>
);

export default OfferLayout;
