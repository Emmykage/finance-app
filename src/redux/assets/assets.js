import { createSlice } from "@reduxjs/toolkit";
import { createAsset } from "../actions/assets";

const initialState ={
    assets: null,
    loading: false
}

const assetSlice = createSlice({
    name: "asset",
    initialState,
    extraReducers: {
        [createAsset.fulfilled]: (state, action) => {
            const response = action.payload;
            console.log(response)
            return{
                ...state,
                assets: response.assets
            }

        },
        [createAsset.pending]: (state) => {
            return{
                ...state,
                loading: true,

            }

        },
        [createAsset.rejected]: (state, action) => {

            return{
                ...state,
                loading: false,
                error: "Poor Internet"
            }

        }
    }
})

export default assetSlice.reducer