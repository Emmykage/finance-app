import { createSlice, isFulfilled } from "@reduxjs/toolkit"
import { listUsers } from "../actions/users"

const initialState = {
    users: [{
        first_name: "jon",
        last_name: "Doe",
        id: 1,
    },{
        first_name: "Jane",
        last_name: "Doe",
        id: 2,
    }]
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
        }
    },
    reducers: {
        tempUsers: (state, action) => {
            return{
                ...state,
                users: state.users
            }
        }
    }
})

export default usersSlice.reducer
export const {tempUsers } = usersSlice.actions