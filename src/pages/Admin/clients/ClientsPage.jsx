import React, { useEffect } from 'react';
import './client.css';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import default_photo from '../../../assets/user/no-profile-picture-icon-14.jpg';
import { listUsers } from '../../../redux/actions/users';
import { userLog } from '../../../redux/auth/user_authentication';
import Loader from '../../../components/loader/Loader';
import { usd_format } from '../../../components/misc/USD';
import { approveTransaction } from '../../../redux/actions/wallet';
import Transaction from '../../../components/client/Transaction';

const ClientsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const {loading} = useSelector((state)=> state.transactions)

  useEffect(() => {
    dispatch(listUsers());
    dispatch(userLog());
  }, [loading]);

  const handleApprove = (id) => {
    dispatch(approveTransaction({id, status: "completed" }))
  }

  const user = users.find((user) => user.id == id);
  if (user == undefined) {
    return (
      <Loader />
    );
  }

  return (
    <div className="client-profile">

      <div className="profile-top">
        <img src={default_photo} alt="profile pic" />
      </div>
      <div className="profile-detail">
        <ul className="">
          <li className="flex-space ">
            <span>Name: </span>
            {' '}
            <span>
              {' '}
              {user.first_name}
              {' '}
              {user.last_name}
            </span>

          </li>
          <li className="flex-space ">
            <span>Email: </span>
            {' '}
            <span>
              {' '}
              {user.email}
            </span>

          </li>
          <li className="flex-space ">
            <span>Mobile: </span>
            {' '}
            <span> +1 703 544 3435</span>

          </li>
          <li className="flex-space ">
            <span>Address: </span>
            {' '}
            <span> John Doe</span>

          </li>
        </ul>

      </div>
      <hr />

      <div className="asset-details">
        <p>
          <span>
            total inestment
          </span>
          <span>
            value: 200000
          </span>
        </p>
        <hr />
        <div>
          <h2>{usd_format(user.wallet.wallet_balance)}</h2>

          <p>{user.wallet.transactions.map(transaction => (
           <Transaction transaction={transaction} handleApprove={handleApprove}/>
           
            
          ))}
          </p>

          </div>
          <hr />
        {user.portfolios.length < 1 ? <h3>User has no Portfolios</h3>

          : user.portfolios.map((portfolio) => (
            <div className="asset-infos">
              <li className='text-left box-shadow rounded-base my-1'>
                <div className='flex rounded-base'>
                    <div className='portfolio-img flex-1 p-3'>
                        <img src={portfolio.asset.image_url} alt="" className='rounded-base' />

                    </div>
                    <div className='flex-2 p-3 '>
                        <div className='flex '>

                      
                            <div className='flex-1' >
                        
                            <h4>{portfolio.asset.name}</h4>
                            <p><i class="fa fa-map-marker icon"></i>{portfolio.asset.address}</p>
                                
                            </div>
                            <div><span className='text-lg font-medium text-green' >Profits: </span> <span className='text-lg font-medium'>{usd_format(portfolio.investment_interest)}</span></div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex-1'>
                          
                             <span className='text-xl font-semibold'>{portfolio.asset.price}</span>
      
                            </div>
                            <div className='flex-1 flex justify-between'>
                                <span className='capitalize text-sm'><i class="fa fa-bed"></i> {portfolio.asset.payment_schedule}</span>
                                <span className='text-sm'><i class="fa fa-tint"></i> {portfolio.asset.term} Terms</span>
                                <span className='text-sm'><i class="fa fa-expand"></i> {portfolio.asset.minimum_investment}min</span>
                            </div>
                        </div>
                        <div class="text-right p-2 flex justify-between">
                            <span></span>
                            <NavLink to={`/admin/client/${id}/portfolio/${portfolio.id}`} className="btn inline-block p-1 text-white">view interest</NavLink>
                        </div>
                        
                        
                    </div>
                </div>
            </li>

            </div>
          ))}

        <hr />
       

        <span>
          Edit
        </span>
      </div>

    </div>
  );
};

export default ClientsPage;
