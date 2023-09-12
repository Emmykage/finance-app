import { createSlice } from '@reduxjs/toolkit';
import { getUser, listUsers } from '../actions/users';

const initialState = {
  users: [],
  user: {},
  loading: true,
  error: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [listUsers.fulfilled]: (state, action) => {
      const response = action.payload;
      return {
        ...state,
        users: response,

      };
    },

    [getUser.fulfilled]: (state, action) => {
      if (action.payload.message) {
        return {
          ...state,
          error: true,
          loading: false,
        };
      }
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: false,

      };
    },
    [getUser.pending]: (state) => ({
      ...state,
      loading: true,
      error: false,
    }),
    [getUser.rejected]: (state) => ({
      ...state,
      loading: false,
      error: true,
    }),
  },

});

export default usersSlice.reducer;
