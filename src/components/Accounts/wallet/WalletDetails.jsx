import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTransaction, getWallet } from '../../../redux/actions/wallet';
import { usd_format } from '../../misc/USD';
import Loader from '../../loader/Loader';
import Deposit from './Deposit';
import Withdrawal from './Withdrawal';

const WalletDetails = () => {
  const { wallet, loading } = useSelector((state) => state.wallet);
  const transaction_loading = useSelector((state) => state.transactions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWallet());
  }, [transaction_loading.loading]);

  if (loading) {
    return (
      <Loader />
    );
  }
  return (
    <div className="wallet-info">
      <div className="grid-display grid-display-2 gap-2 m-4">

        <Deposit />
        <Withdrawal />
      </div>

      <div className="history">
        <div className="deposit-history">
          <h3 className="text-light-gray">Deposit History</h3>
          <ul>
            {wallet.transactions.length < 1 && <h3>No Deposit History</h3>}

            {wallet.transactions.map((transaction) => (
              <li className="flex-justify-space my-3">
                <span className="flex-grid">
                  <h4 className="history-h4 text-light-gray">{usd_format(transaction.amount)}</h4>
                </span>
                <span className="text-gray flex-grid">
                  <p>{transaction.coin_type}</p>
                </span>
                <span className="flex-grid">
                  <span className={transaction.status == 'completed' ? 'btn' : 'pending-btn btn'}>{transaction.status}</span>
                </span>
              </li>
            ))}

          </ul>
        </div>
        <div className="withdraw-history" />

      </div>
    </div>
  );
};

export default WalletDetails;
