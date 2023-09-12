import React from 'react';
import { useOutletContext } from 'react-router-dom';

const InvestorAccount = () => {
  const [user] = useOutletContext();
  return (
    <div className="investor">
      <table>
        <thead>
          <tr>
            <th>Investor</th>
            <th>Account type</th>
            <th>Identity</th>
            <th>Accreditation</th>
            <th />

          </tr>

        </thead>
        <tbody>
          <tr>
            <td>
              {`${user.first_name} ${user.last_name}`}
            </td>
            <td>
              individual
            </td>
            <td>
              Unverified
            </td>
            <td>
              Unverified
            </td>
            <td>
              <a href=""> verify identity</a>
            </td>

          </tr>
        </tbody>
      </table>
      <a href="#">Add new account</a>

    </div>
  );
};

export default InvestorAccount;
