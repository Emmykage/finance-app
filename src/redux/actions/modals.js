import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toggleWithdrawal: false,
  data: ''
};
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openWithdrawalModal: (state, action) => ({
      toggleWithdrawal: true,
      data: action.payload
    }),
    closeWithdrawalModal: (state) => ({
      toggleWithdrawal: false,
    }),
  },
});

export default modalSlice.reducer;
export const { openWithdrawalModal, closeWithdrawalModal } = modalSlice.actions;
