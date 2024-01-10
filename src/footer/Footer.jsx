import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer>
    <div className="fit-container">
      <div className="footer-container">
        <div className="inner-footer-container">
          <div>
            <ul>
              <h3>Offerings</h3>
              <li className="p-1 text-white">
                <NavLink to="/how-it-works" className="text-white">How it works</NavLink>
                {' '}
              </li>
              <li className="py-1 text-white">
                {' '}
                <NavLink to="/" className="text-white">InvestEdge Prism Fund</NavLink>
              </li>
              <li className="py-1 text-white">
                {' '}
                <NavLink to="#" className="text-white">Yieldstreet IRA</NavLink>
              </li>
              <li className="py-1 text-white">
                {' '}
                <NavLink to="#" className="text-white">Short Term Notes</NavLink>
              </li>
              <li className="py-1 text-white">
                <NavLink to="#" className="text-white">Real Estate Finance</NavLink>
                {' '}
              </li>
              <li className="py-1 text-white">
                {' '}
                <NavLink to="#" className="text-white">Sample portfolios</NavLink>
              </li>
              <li className="py-1 text-white">
                {' '}
                <NavLink to="#" className="text-white">Art investing</NavLink>
              </li>

            </ul>
          </div>
          <div>
            <ul>
              <h3>Originators</h3>
              <li>
                <a>Raise capital</a>
                {' '}
              </li>
              <li>
                {' '}
                <a>Real Estate</a>
              </li>
              <li>
                {' '}
                <a>Art</a>
              </li>
              <li>
                {' '}
                <a>Private Business Credit</a>
              </li>
              <li>
                <a>Legal</a>
                {' '}
              </li>
            </ul>

          </div>
          <div>
            <ul>
              <h3>Resources</h3>
              <li>
                <a>Contact us</a>
                {' '}
              </li>
              <li>
                {' '}
                <a>Support</a>
              </li>
              <li>
                {' '}
                <a>Resource center</a>
              </li>
              <li>
                {' '}
                <a>Blog</a>
              </li>
              <li>
                <a>Glossary</a>
                {' '}
              </li>
              <li>
                {' '}
                <a>Invest with Kal Penn</a>
              </li>
            </ul>

          </div>
          <div>
            <ul>
              <h3>        Company</h3>
              <li>
                <a>About us</a>
                {' '}
              </li>
              <li>
                {' '}
                <a>Careers</a>
              </li>
              <li>
                <a>Tech blog</a>
                {' '}
              </li>
              <li>
                {' '}
                <a>Press</a>
              </li>
            </ul>

            Yieldstreet apparel
          </div>
          {/* <div>erer</div> */}
        </div>

      </div>
    </div>
  </footer>
);

export default Footer;
