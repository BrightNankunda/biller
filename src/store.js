import {applyMiddleware, createStore, compose, combineReducer, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { FetchBillsReducer, SaveBillReducer } from './Reducers/BillReducers'

const initialState = {}
const reducer = combineReducers({
   newBill: SaveBillReducer,
   bills: FetchBillsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store