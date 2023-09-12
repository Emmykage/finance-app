import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const navigation = useNavigate();
  const toLogin = () => {
    navigation('/auth/login');
  };
  return (
    <div className="get-started">
      <div className="proceed">
        <h3>
          <a onClick={toLogin}>
            Get Started
          </a>

        </h3>
      </div>
    </div>
  );
};

export default GetStarted;
