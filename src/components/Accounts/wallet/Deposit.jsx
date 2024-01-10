import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTransaction } from '../../../redux/actions/wallet';
import Loader from '../../loader/Loader';

const Deposit = () => {
  const { loading } = useSelector((state) => state.transactions);
  const [deposit, setDeposit] = useState({
    coin_type: 'USD THETHER', amount: '', transaction_type: 'deposit', wallet_address: '',
  });
  const dispatch = useDispatch();

  const handleDepositInput = (e) => {
    setDeposit({
      ...deposit,
      [e.target.name]: e.target.value,

    });
  };
  const handleDeposit = (e) => {
    e.preventDefault();
    dispatch(createTransaction(deposit));
  };
  if (loading) {
    return (
      <Loader />
    );
  }
  return (

    <div>
      <div className="bg-white box-shadow p-3 b-radius-1">
        <h3>Add Funds</h3>
        <form onSubmit={handleDeposit}>
          <div className="m-3">

            <label className="block m-1">Select Coin</label>
            <select name="coin_type" value={deposit.coin_type} onChange={handleDepositInput} required>
              <option value="USD THETHER" selected>USD THETHER</option>
              <option value="BITCOIN">BITCOIN</option>
              <option value="ETHERUM">ETHERUM (ERC-20)</option>
            </select>
          </div>
          <div>
            <label className="block m-1" htmlFor="amount">Enter Amount</label>
            <input type="number" placeholder="Enter Amount in USD" name="amount" value={deposit.amount} onChange={handleDepositInput} required />

          </div>
          <div className="m-2">
            <p className="text-red text-center">Pay to the following Wallet Address</p>
            <span className="block text-center bg-light p-2 b-radius-1">bc1qusn333vtanazyywdvr5u5mwk5eq32h5n5lpchr</span>

          </div>
          <hr />
          <p className="text-norm">Kindly make your deposit to the wallet address above, then click on continue to submit your payment screenshot</p>
          <button className="btn w-full bg-semi text-white">continue</button>
        </form>
      </div>

    </div>
  );
};

export default Deposit;
