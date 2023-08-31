import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../url"

const token = () => JSON.parse(localStorage.getItem('edge_auth')).token;
// console.log(token())


const createAsset = createAsyncThunk("asset/create_asset", async(data) => {
    const response = await fetch(`${baseUrl}assets`, {
       method: 'POST',
       headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token()}`

       },
       body: JSON.stringify(data) 
    }).then(res => res.json())
    // console.log("first")
    return response
})

const getAssets = createAsyncThunk("asset/create_asset", async(data) => {
    const response = await fetch(`${baseUrl}assets`,{
    method: "GET",
    headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`

    }
    
     } ).then(res => res.json())
    return response
})

export {createAsset, getAssets}