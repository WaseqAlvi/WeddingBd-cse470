import { combineReducers, applyMiddleware } from "redux"


import {legacy_createStore as createStores} from 'redux'
import { configureStore } from "@reduxjs/toolkit"
import { createApi } from '@reduxjs/toolkit/query/react'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from "./reducers/productReducer";

const reducer = combineReducers({

    productList:productListReducer
});

const initialState = {};
const middleware = [thunk];
const store = configureStore({
  reducer,
  initialState,
  middleware: [...middleware],
});
export default store;
