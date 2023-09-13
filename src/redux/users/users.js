import { createSlice } from '@reduxjs/toolkit';
import { getUser, listUsers } from '../actions/users';

const initialState = {
  users: [],
  user: {},
  loading: true,
  error: false,message: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [listUsers.fulfilled]: (state, action) => {
      const response = action.payload;
      console.log(response)
      if(response.message){
        console.log('error message exists')
       return{
        ...state,
        error: true,
        loading:false
       }
      }
      return {
        ...state,
        users: response,
        error: false,
        loading:false

      };
    },
    [listUsers.rejected]: (state, action) => {
      const response = action.payload;
      console.log(response)
      return {
        ...state,
        error:true,
        loading: false

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
