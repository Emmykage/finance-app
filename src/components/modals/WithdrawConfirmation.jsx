import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTransaction } from '../../redux/actions/wallet';
import { closeWithdrawalModal, toggleWithdrawalModal } from '../../redux/actions/modals';

const WithdrawConfirmation = ({ withdraw, toggleWithdrawal }) => {
  const dispatch = useDispatch();
  const handleconfirmation = () => {
    dispatch(createTransaction(withdraw));
  };
  // console.log(withdraw)
  return (
    <div className={`modal-container flex-justify-center ${toggleWithdrawal && 'show'} `}>
      <div className="modal withdraw-confirmation flex justify-center items-center">
        <div className="confirm-box flex justify-around">
          <span>
            <button onClick={handleconfirmation} className="btn">Confirm withdrawal</button>
            {' '}
          </span>
          <span><button onClick={() => dispatch(closeWithdrawalModal())} className="btn confirm-btn-cancel">Cancel</button></span>
        </div>

      </div>

    </div>
  );
};

export default WithdrawConfirmation;
