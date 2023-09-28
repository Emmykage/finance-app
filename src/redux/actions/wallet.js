import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../url";

const token = () => JSON.parse(localStorage.getItem('edge_auth')).token;

const createTransaction = createAsyncThunk("transaction/create_transaction", async (data) => {
    const response = await fetch(`${baseUrl}transactions`,{
        method: "POST",
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token()}`,
        },

        body: JSON.stringify(data)
    }).then((res) => res.json())
    return response
})

const getWallet = createAsyncThunk("wallet/get_wallet", async() => {
    const response = await fetch(`${baseUrl}wallets`, {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token()}`,
        },

    }).then((res) => res.json())
    return response
} )

export { createTransaction, getWallet}