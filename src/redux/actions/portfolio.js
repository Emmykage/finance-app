import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../url";

const token = () => JSON.parse(localStorage.getItem('edge_auth')).token;

const createPortfolio = createAsyncThunk("portfolio/create_portfolios", async(data) => {
    const response = await fetch(`${baseUrl}portfolios`,{
    method: "POST",
    headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token()}`

    },
    body: JSON.stringify(data) 

    
     } ).then(res => res.json())
    return response
})

const getPortfolios = createAsyncThunk("portfolio/get_portfolios", async(data) => {
    const response = await fetch(`${baseUrl}portfolios`,{
    method: "GET",
    headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token()}`

    }
    
     } ).then(res => res.json())
    return response
})


export {createPortfolio, getPortfolios}