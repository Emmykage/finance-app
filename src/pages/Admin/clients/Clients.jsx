import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './client.css';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers } from '../../../redux/actions/users';

const Clients = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(listUsers());
  }, []);

  if (users.length < 1) {
    return (
      <div>
        <h1>No Clients </h1>
      </div>
    );
  }

  return (
    <div className="client">
      <div className="">
        <ul className="client-row">
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="">
                  <td className={`${user.role == 'admin' && 'text-red'} font-medium`}>

                    {`${user.first_name} ${user.last_name}`}
                  </td>
                  <td><NavLink to={`/admin/client/${user.id}`}>View</NavLink></td>
                </tr>

              ))}

              <tr>
                <td />
              </tr>
            </tbody>
          </table>

        </ul>
      </div>
    </div>
  );
};

export default Clients;
