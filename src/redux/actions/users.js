import { createAsyncThunk } from "@reduxjs/toolkit"

const listUsers = createAsyncThunk("user/session", async() => {
    const response = await fetch(`${baseUrl}users`).then(res => res.json())
    return response

})
export {listUsers}