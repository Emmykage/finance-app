import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTransaction } from '../../../redux/actions/wallet';
import Loader from '../../loader/Loader';
import DepositModal from '../../modals/DepositModal';

const Deposit = () => {
  const { loading } = useSelector((state) => state.transactions);
  const [toggleDeposit, setToggleDeposit] = useState(false)
  const [deposit, setDeposit] = useState("")

  

  const dispatch = useDispatch();

 
  const handleDeposit = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('transaction[coin_type]', e.target.coin_type.value)
    formData.append('transaction[amount]', e.target.amount.value)
    formData.append('transaction[transaction_type]', "deposit")
    formData.append('transaction[receipt]', e.target.receipt.files[0])
    // dispatch(openWithdrawalModal(formData));
    setToggleDeposit(true)
    setDeposit(formData)
    // dispatch(createTransaction(formData));
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
            <select name="coin_type" required>
              <option value="USD THETHER" selected>USD THETHER</option>
              <option value="BITCOIN">BITCOIN</option>
              <option value="ETHERUM">ETHERUM (ERC-20)</option>
            </select>
          </div>
          <div>
            <label className="block m-1" htmlFor="amount">Enter Amount</label>
            <input type="number" placeholder="Enter Amount in USD" name="amount" required />

          </div>
          <div className="m-2">
            <p className="text-red text-center">Pay to the following Wallet Address</p>
            <span className="block text-center bg-light p-2 b-radius-1">bc1qusn333vtanazyywdvr5u5mwk5eq32h5n5lpchr</span>

          </div>
          <div className='my-1'>
                    <input type="file" name='receipt' className='border w-full py-1 border-gray-light rounded' />
                </div>
          <hr />
          <p className="text-norm">Kindly make your deposit to the wallet address above, then click on continue to submit your payment screenshot</p>
          <button className="btn w-full bg-semi text-white">continue</button>
        </form>
      </div>
      <DepositModal toggleModal={toggleDeposit} setToggleModal={setToggleDeposit} deposit={deposit} />

    </div>
  );
};

export default Deposit;
