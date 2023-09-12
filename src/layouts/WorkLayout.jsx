import React from 'react';
import HHeader from '../components/header/HHeader';
import Footer from '../footer/Footer';

const WorkLayout = ({ children }) => (
  <div className="main-container">
    <HHeader />
    <div className="container">
      {children}
    </div>

    <Footer />

  </div>
);

export default WorkLayout;
