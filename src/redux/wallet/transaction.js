import { createSlice } from "@reduxjs/toolkit";
import { createTransaction } from "../actions/wallet";

const initialState = {
    loading: false,
    error: false,
    status: '',
    paid: false,
}

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    extraReducers: {
        [createTransaction.fulfilled]: (state, action) => ({

        }), 
        [createTransaction.pending]: (state, action) => ({
            ...state,
            loading: true,


        }), 
        [createTransaction.rejected]: (state, action) => ({
            ...state,
            loading: false


        }),

    }
})

export default transactionSlice.reducer;