import React from 'react';
import private_graph from '../../assets/image/graph/home_graph.webp';

const TopInfo = () => (

  <div className="home-insight-info flex-justify-space gap-3">
    <div className="flex-grid my-4">
      <h6 className="text-light">WHY PRIVATE MARKETS</h6>
      <h3>Consistent returns, even when public markets falter</h3>
      <p>We believe private market alternatives are a fundamental piece of a modern portfolio.</p>
      <a href="" className="btn block">
        Learn More
      </a>
    </div>
    <div className="flex-grid">
      <div>
        <img src={private_graph} alt="graph insight" />
      </div>
    </div>

  </div>

);

export default TopInfo;
