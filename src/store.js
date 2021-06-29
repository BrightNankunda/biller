import {applyMiddleware, createStore, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import { DeleteABillReducer, FetchABillReducer, UpdateABillReducer, FetchBillsReducer, FetchClientBillsReducer, FetchUserBillsReducer, SaveBillReducer } from './Reducers/BillReducers'
import { CreateNewClientReducer, DeleteClientReducer, FetchAllClientsReducer, FetchSingleClientReducer, UpdateClientReducer } from './Reducers/ClientsReducers';
import { LogoutUserReducer, UserLoginReducer, UserSigninReducer } from './Reducers/UserReducers'

// const userInfo = localStorage.getItem("UgBillToken") || null;
const initialState = { 
   user: JSON.parse(localStorage.getItem("UgBillUser")) || null
}

const reducer = combineReducers({
   newBill: SaveBillReducer,
   bills: FetchBillsReducer,
   userBills: FetchUserBillsReducer,
   clientBills: FetchClientBillsReducer,
   user:  UserLoginReducer || UserSigninReducer,
   userLoggingIn: UserLoginReducer,
   userSigningIn: UserSigninReducer,
   clients: FetchAllClientsReducer,
   userLoggedOut: LogoutUserReducer,
   singleClient: FetchSingleClientReducer,
   updatedBill: UpdateABillReducer,
   deletedBill: DeleteABillReducer,
   createdClient: CreateNewClientReducer,
   updatedClient: UpdateClientReducer,
   deletedClient: DeleteClientReducer,
   singleBill: FetchABillReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store