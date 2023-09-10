import { createSlice } from "@reduxjs/toolkit"
import { getUser, listUsers } from "../actions/users"

const initialState = {
    users: [],
    user: {},
    loading: true,
    error: false
}


const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers:{
        [listUsers.fulfilled]: (state, action) => {
            const response = action.payload
            console.log(response)
            return{
                ...state,
                users: response
                
            }
        },

    [getUser.fulfilled]:(state, action)=>{
        console.log(action.payload)
        if(action.payload.message){

     
            return{
                ...state,
                error: true,
                loading: false
            }
        }else{
            return{
                ...state,
                user: action.payload,
                loading: false,
                error: false
               
            }
        }
    },
    [getUser.pending]:(state, action)=>{
        console.log(action.payload)
            return{
                ...state,
                loading: true,
                error: false
            }
    },
    [getUser.rejected]:(state, action)=>{
        console.log(action.payload.message)
            return{
                ...state,
                loading: false,
                error: true
            }
    },
},
   
})

export default usersSlice.reducer