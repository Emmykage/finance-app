import React from 'react';
import Header from '../components/header/Header';
import Footer from '../footer/Footer';

const ClientLayout = ({ children }) => (
  <div className="main-container">
    <Header />
    <div className="container">
      {children}
    </div>

    <Footer />

  </div>
);

export default ClientLayout;
