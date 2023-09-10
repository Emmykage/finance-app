import { applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
// import menuSlice from './menu'
import navSlice from "./model/nav"
import userSlice from "./auth/user_authentication"
import usersSlice from "./users/users"
import assetSlice from "./assets/assets"
import faqSlice from './questions/question'
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
    user: userSlice,
    assets: assetSlice,
    nav_toggle: navSlice,
    users: usersSlice,
    questions: faqSlice
})
const store = configureStore({reducer: rootReducer}, applyMiddleware(thunk, logger))
export default store;