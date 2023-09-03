import { createSlice } from "@reduxjs/toolkit";
import { createPortfolio, getPortfolios } from "../actions/portfolio";

const initialState={
    portfolios:[],
    loading:false,
    error: false,
    status: ""
}

const portfolioSlice =createSlice({
    name: "portfolio",
    initialState,
    extraReducers:{
        [getPortfolios.fulfilled]: (state, action) => {
            return{
                ...state,
                portfolios: action.payload
            }
        },
        [createPortfolio.fulfilled]: (state, action) => {
            return{
                ...state,
                status: 'succrssfully purchased an asset',
                loading: false
            }
        },
        [createPortfolio.rejected]: (state, action) => {
            return{
                ...state,
                status: 'failed to purchased an asset',
                loading: false,
                error: true
            }
        },
        [createPortfolio.pending]: (state, action) => {
            return{
                ...state,
                status: '',
                loading: true
            }
        },
        
    }
})

export default portfolioSlice.reducer