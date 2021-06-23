import {applyMiddleware, createStore, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import { FetchBillsReducer, SaveBillReducer } from './Reducers/BillReducers'
import { CreateNewClientReducer, FetchAllClientsReducer, FetchSingleClientReducer, UpdateClientReducer } from './Reducers/ClientsReducers';
import { LogoutUserReducer, UserLoginReducer, UserSigninReducer } from './Reducers/UserReducers'

// const userInfo = localStorage.getItem("UgBillToken") || null;
const initialState = { 
   user: JSON.parse(localStorage.getItem("UgBillUser")) || null
}

const reducer = combineReducers({
   newBill: SaveBillReducer,
   bills: FetchBillsReducer,
   user:  UserLoginReducer || UserSigninReducer,
   userLoggingIn: UserLoginReducer,
   userSigningIn: UserSigninReducer,
   clients: FetchAllClientsReducer,
   userLoggedOut: LogoutUserReducer,
   singleClient: FetchSingleClientReducer,
   createdClient: CreateNewClientReducer,
   updatedClient: UpdateClientReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store