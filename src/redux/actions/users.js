import { createAsyncThunk } from "@reduxjs/toolkit"
import baseUrl from "../url";
const token = () => JSON.parse(localStorage.getItem('edge_auth')).token;

const listUsers = createAsyncThunk("user/session", async() => {
    const response = await fetch(`${baseUrl}users`).then(res => res.json())
    return response

})

const getUser = createAsyncThunk("user/get_account", async() => {
    const response = await fetch(`${baseUrl}account`,{
    method: "GET",
    headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token()}`

    }
    
     } ).then(res => res.json())
     console.log("first")
    return response
})
export {listUsers, getUser}