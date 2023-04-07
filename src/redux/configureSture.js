import { applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import menuSlice from './menu'
import navSlice from "./model/nav"
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
    // menu: menuSlice,
    nav_toggle: navSlice
})
const store = configureStore({reducer: rootReducer}, applyMiddleware(thunk, logger))
export default store;