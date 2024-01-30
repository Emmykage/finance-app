import { createSlice } from '@reduxjs/toolkit';
import { createAsset, getAssets } from '../actions/assets';

const initialState = {

  assets: [],
  loading: true,
  offers: [],
  error: false,
  status: "",
  message: null
};

const assetSlice = createSlice({
  name: 'asset',
  initialState,
  extraReducers: {
    [createAsset.fulfilled]: (state, action) => {
      const response = action.payload;
      if(response.message){
        return {
          ...state,
          loading: false,
          message: response,
          error: true,
          message: response.message,
          status: "failed"
        };

      }else{

   
      return {
        ...state,
        loading: false,
        assets: response.assets,
        error: false,
        message: "Asset has been created",
        status: "success"
      };
    }
    },
    [createAsset.pending]: (state) => ({
      ...state,
      loading: true,
      error: false,
      message: "asset created",
      status: "pending",
      message: "pending"

    }),
    [createAsset.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: false,
      message: "asset failed to create",
      status: "failed"
    }),
    [getAssets.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      offers: action.payload,
      error: false,
    }),
    [getAssets.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: true,
    }),
    [getAssets.pending]: (state, action) => ({
      ...state,
      loading: true,
      error: false,

    }),

  },

  // reducers: {
  //     getAssets: (state) => {
  //         return{
  //             ...state,
  //             assets: state.assets
  //         }

  //     }
  // }
});

export default assetSlice.reducer;
// export const {getAssets} = assetSlice.actions
