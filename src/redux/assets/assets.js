import { createSlice } from "@reduxjs/toolkit";
import { createAsset, getAssets } from "../actions/assets";

const initialState ={
   
    assets: [],
    loading: true,
    offers: [],
    error: false
}

const assetSlice = createSlice({
    name: "asset",
    initialState,
    extraReducers: {
        [createAsset.fulfilled]: (state, action) => {
            const response = action.payload;
            return{
                ...state,
                loading: false,
                assets: response.assets,
                error: false
            }

        },
        [createAsset.pending]: (state) => {
            return{
                ...state,
                loading: true,
                error: false

            }

        },
        [createAsset.rejected]: (state, action) => {

            return{
                ...state,
                loading: false,
                error: false
            }

        },
    [getAssets.fulfilled]: (state, action) => {
        return{
            ...state,
            loading: false,
            offers: action.payload,
            error: false
        }
    },
    [getAssets.rejected]: (state, action) => {
        return{
            ...state,
            loading: false,
            error: true
        }
    },
    [getAssets.pending]: (state, action) => {
        return{
            ...state,
            loading: true,
            error: false
            
        }
    }
       
    },

    // reducers: {        
    //     getAssets: (state) => {
    //         return{
    //             ...state,
    //             assets: state.assets
    //         }

    //     }
    // }
})

export default assetSlice.reducer
// export const {getAssets} = assetSlice.actions