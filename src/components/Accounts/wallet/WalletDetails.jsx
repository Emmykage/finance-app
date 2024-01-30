import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTransaction, getWallet } from '../../../redux/actions/wallet';
import { usd_format } from '../../misc/USD';
import Loader from '../../loader/Loader';
import Deposit from './Deposit';
import Withdrawal from './Withdrawal';
import { IoCloseSharp } from "react-icons/io5";
import { reset } from '../../../redux/wallet/transaction';

const WalletDetails = () => {
  const { wallet, loading } = useSelector((state) => state.wallet);
  const transaction_loading = useSelector((state) => state.transactions);
  const {status, message} = useSelector((state) => state.transactions);
  const [notification, setNotification] =  useState({show:"hidden", shadow:  ""})
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWallet());
    if(status == "success"){
      setNotification({show: 'flex', text: "text-green", shadow: "shadow-green"})
      setInterval(()=> {setNotification({show: "hidden"}); dispatch(reset()) }, 5000)
    }else if(status == "failed"){
      setNotification({show: "flex", text: "text-red", shadow: "shadow-red"})

    }
  }, [transaction_loading.loading]);

  if (loading) {
    return (
      <Loader />
    );
  }
  return (
    <div className="wallet-info relative">
      <div className={`${notification.show}  w-full`}>
        <div className={`${notification.show} bg-white items-center gap-3 bg- px-5 w-350 ${notification.shadow} justify-between rounded-sm`}>
          <p className={`${notification.text}`}>{message}</p><span className='' onClick={()=> setNotification({show: "hidden"})}><IoCloseSharp className='text-2xl text-gray'/></span>

        </div>
      </div>
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
