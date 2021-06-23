import {
   BILL_SAVE_REQUEST, BILL_SAVE_SUCCESS, BILL_SAVE_ERROR,
   BILLS_FETCH_REQUEST, BILLS_FETCH_SUCCESS, BILLS_FETCH_ERROR
} from '../Constants/BillConstants'

function SaveBillReducer(state={}, action) {
   switch(action.type) {
      case BILL_SAVE_REQUEST: 
         return {loading: true}
      case BILL_SAVE_SUCCESS:
         return {loading: false, newBill: action.payload}
      case BILL_SAVE_ERROR:
         return {loading: false, error: action.payload}
      default:
         return state
   }
}

function FetchBillsReducer(state={bills: [], loading: false, billsCount: 0}, action) {
   switch(action.type) {
      case BILLS_FETCH_REQUEST:
         return {...state, loading: true}
      case BILLS_FETCH_SUCCESS:
         return {...state, loading: false, bills: action.payload, billsCount: action.payload.length}
         
      case BILLS_FETCH_ERROR:
         return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

export {SaveBillReducer, FetchBillsReducer}