import { createSlice, isFulfilled } from "@reduxjs/toolkit"
import { getUser, listUsers } from "../actions/users"

const initialState = {
    users: [],
    user: {}
}


const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers:{
        [listUsers.fulfilled]: (state, action) => {
            const response = action.payload
            return{
                ...state,
                users: response.users
                
            }
        },

    [getUser.fulfilled]:(state, action)=>{
        // console.log(action.payload)
            return{
                ...state,
                user: action.payload
            }
    },
},
   
})

export default usersSlice.reducer