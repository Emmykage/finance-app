import { createSlice } from "@reduxjs/toolkit"
import { getMessages, sendMessage } from "../actions/message"

const initialState = {
    messages: [],
    message: {},
    loading: false,
    error: false,
    status: null,
    message: null

}

const messageSlice = createSlice({
    name: "message",
    initialState,
    extraReducers: {
        [sendMessage.fulfilled]: (state, action) => {
            const response = action.payload
            if(response.message){
                return{
                    ...state,
                    loading: false,
                    error: true,
                    status: "failed",
                    message: "Message not Sent"
    
                }
            }
            return{
                ...state,
                loading: false,
                error: false,
                status: "success",
                message: "Message Sent"
            }
        },
        [sendMessage.pending]: (state) => {
            return {
                ...state,
                loading: true,
                error: false,
                status: "pending",

            }
        },
        [sendMessage.rejected]: (state) => {
            return{
                ...state,
                loading: false,
                error: true,
                status: "failed",
                message: "Message not Sent"

            }
        },
        [getMessages.fulfilled]: (state, action) => {
            return{
                ...state,
                loading: false,
                messages: action.payload,
                error: false
            }
        },
        [getMessages.rejected]: (state) => {
            return{
                ...state,
                loading: false,
                error: true
            }
        },
        [getMessages.pending]: (state) => {
            return{
                ...state,
                loading: true,
                error: false
            }
        }
    }

})

export default messageSlice.reducer;