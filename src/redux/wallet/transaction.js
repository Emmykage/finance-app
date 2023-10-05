import { createSlice } from "@reduxjs/toolkit";
import { approveTransaction, createTransaction } from "../actions/wallet";

const initialState = {
    transaction: "",
    loading: false,
    error: false,
    status: '',
    paid: false,
}

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        loadTransaction: (state) =>({
            ...state
        })
    },
    extraReducers: {
        [createTransaction.fulfilled]: (state, action) => {
   
            return{
            ...state,
            transaction: action.payload,
            loading: false
            

        }}, 
        [createTransaction.pending]: (state, action) => {
   
            return{
            ...state,
            loading: true


        }}, 
        [createTransaction.rejected]: (state, action) => ({
            ...state,
            loading: false


        }),
        [approveTransaction.fulfilled]: (state, action) => {
     
            return{
            ...state,
            loading: false,
            status: "successful"
        }},
        [approveTransaction.rejected]: (state, action) => {
     
            return {
            ...state,
            status: "failed",
            loading: false
        }},
        [approveTransaction.pending]: (state, action) => ({
            ...state,
            loading: true,
            status: "pending"
        }),


    }
})

export default transactionSlice.reducer;
export const {loadTransaction} = transactionSlice.actions