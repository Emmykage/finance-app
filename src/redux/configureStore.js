import { applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
// import menuSlice from './menu'
import navSlice from "./model/nav"
import userSlice from "./auth/user_authentication"
import assetSlice from "./assets/assets"
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
    user: userSlice,
    assets: assetSlice,
    nav_toggle: navSlice
})
const store = configureStore({reducer: rootReducer}, applyMiddleware(thunk, logger))
export default store;