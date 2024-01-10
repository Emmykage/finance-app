import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toggleWithdrawal: false,
};
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openWithdrawalModal: (state) => ({
      toggleWithdrawal: true,
    }),
    closeWithdrawalModal: (state) => ({
      toggleWithdrawal: false,
    }),
  },
});

export default modalSlice.reducer;
export const { openWithdrawalModal, closeWithdrawalModal } = modalSlice.actions;
