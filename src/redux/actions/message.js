import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../url";

const token =() => JSON.parse(localStorage.getItem("edge_auth" )).token

const sendMessage = createAsyncThunk("send/message", async(data) => {
    const response = await fetch(`${baseUrl}messages`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token()}`
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
    return response
})

const getMessages = createAsyncThunk("get/messages", async() => {
    const response = await fetch(`${baseUrl}messages`, {
    method: "GET",
    headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token()}`
    },
 
    }).then(res => res.json())
    console.log(response)
    return response
})

export {sendMessage, getMessages}