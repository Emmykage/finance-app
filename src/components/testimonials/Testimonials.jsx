import React from 'react';

const Testimonials = () => (
  <div className="testimonials">
    <div className="w-max-1100 flex-justify-space m-auto sub-testimonial">

      <div className="flex-grid left flex-1">
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
      <div className="flex-grid right w-max-400">
        <div className="testimonial-card">
          <div className="head">
            <h1>"</h1>

          </div>
          <div className="r-top flex-grid">
            <p>The ease of use of the platform, and the complete transparency are top features to me </p>
            <div className="bottom">
              <h3>
                Jacqualine Ghallaher H
        </h3>
              {/* <span>Investor since 2021</span> */}

            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
);

export default Testimonials;
