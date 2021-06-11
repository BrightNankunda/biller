import {applyMiddleware, createStore, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import { FetchBillsReducer, SaveBillReducer } from './Reducers/BillReducers'
import { UserLoginReducer, UserSigninReducer } from './Reducers/UserReducers'

// const userInfo = localStorage.getItem("UgBillToken") || null;
const initialState = { user: localStorage.getItem("UgBillToken") || null};

const reducer = combineReducers({
   newBill: SaveBillReducer,
   bills: FetchBillsReducer,
   user: UserLoginReducer || UserSigninReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store