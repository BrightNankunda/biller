import {applyMiddleware, createStore, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import { FetchBillsReducer, SaveBillReducer } from './Reducers/BillReducers'
import { FetchAllClientsReducer } from './Reducers/ClientsReducers';
import { LogoutUserReducer, UserLoginReducer, UserSigninReducer } from './Reducers/UserReducers'

// const userInfo = localStorage.getItem("UgBillToken") || null;
const initialState = { 
   user: localStorage.getItem("UgBillToken") || null,
   userSignedIn:  localStorage.getItem("userLoggedIn") || false,
   userLoggedIn: localStorage.getItem("userLoggedIn") || false,
   userLoggedOut: localStorage.getItem("userLoggedOut") || true
}

const reducer = combineReducers({
   newBill: SaveBillReducer,
   bills: FetchBillsReducer,
   user:  UserLoginReducer || UserSigninReducer,
   userLoggedIn: UserLoginReducer,
   userSignedIn: UserSigninReducer,
   clients: FetchAllClientsReducer,
   userLoggedOut: LogoutUserReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store