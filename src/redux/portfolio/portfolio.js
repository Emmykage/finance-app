import { createSlice } from '@reduxjs/toolkit';
import { createPortfolio, getPortfolio, getPortfolios, getRecentPortfolios, makePayment } from '../actions/portfolio';

const initialState = {
  portfolios: [],
  recent_portfolios: [],
  new_portfolio: {},
  portfolio: {},
  loading: true,
  error: false,
  status: '',
  paid: false,
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  extraReducers: {
    [getPortfolios.fulfilled]: (state, action) => ({
      ...state,
      portfolios: action.payload,
    }),
    [createPortfolio.fulfilled]: (state, action) => ({
      ...state,
      status: 'succrssfully purchased an asset',
      loading: false,
      new_portfolio: action.payload,
    }),
    [createPortfolio.rejected]: (state) => ({
      ...state,
      status: 'failed to purchased an asset Check your internet connection',
      loading: false,
      error: true,
    }),
    [createPortfolio.pending]: (state) => ({
      ...state,
      status: '',
      loading: true,
    }),
    [getPortfolio.fulfilled]: (state, action) => ({
      ...state,
      portfolio: action.payload,
      loading: false

    }),
    [getRecentPortfolios.fulfilled]: (state, action) => ({
      ...state,
      recent_portfolios: action.payload,
      loading: false
    }),
    [makePayment.fulfilled]: (state, action) => {
      if (action.payload.paid) {
        return {
          ...state,
          paid: true,
          loading: false,
          error: false,
        };
      }
      return {
        ...state,
        status: '',
        paid: false,
        loading: false,
        error: true,
        message: 'something went wrong',
      };
    },
    [makePayment.pending]: (state, action) => ({
      ...state,
      loading: true,
      error: false,
    }),
    [makePayment.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: true,
    }),

  },
});

export default portfolioSlice.reducer;
