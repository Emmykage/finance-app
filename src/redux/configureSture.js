import { applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import menuSlice from './menu'
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
    menu: menuSlice
})
const store = configureStore({reducer: rootReducer}, applyMiddleware(thunk, logger))
export default store;