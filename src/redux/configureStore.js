import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import menuSlice from './menu'
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import navSlice from './model/nav';
import userSlice from './auth/user_authentication';
import usersSlice from './users/users';
import assetSlice from './assets/assets';
import faqSlice from './questions/question';
import portfolioSlice from './portfolio/portfolio';
import transactionSlice from './wallet/transaction'
import walletSlice from "./wallet/wallet"
import modalSlice from './actions/modals'

const rootReducer = combineReducers({
  user: userSlice,
  assets: assetSlice,
  nav_toggle: navSlice,
  users: usersSlice,
  questions: faqSlice,
  portfolios: portfolioSlice,
  transactions: transactionSlice,
  wallet: walletSlice,
  toggleModal: modalSlice
});
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk, logger));
export default store;
