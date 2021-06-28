import {
   BILL_SAVE_REQUEST, 
   BILL_SAVE_SUCCESS, 
   BILL_SAVE_ERROR,
   BILLS_FETCH_REQUEST, 
   BILLS_FETCH_SUCCESS, 
   BILLS_FETCH_ERROR, 
   BILL_SAVE_FINISHED, 
   USER_BILLS_FETCH_REQUEST, 
   USER_BILLS_FETCH_SUCCESS, 
   USER_BILLS_FETCH_ERROR, 
   CLIENT_BILLS_FETCH_REQUEST, 
   CLIENT_BILLS_FETCH_SUCCESS, 
   CLIENT_BILLS_FETCH_ERROR
} from '../Constants/BillConstants'

function SaveBillReducer(state={loading: false, newBill: null, redirectBillCreator: false}, action) {
   switch(action.type) {
      case BILL_SAVE_REQUEST: 
         return {loading: true}
      case BILL_SAVE_SUCCESS:
         return {
            loading: false, 
            newBill: action.payload, 
            redirectBillCreator: true
         }
      case BILL_SAVE_FINISHED:
         return {
            loading: false, 
            newBill: null, 
            redirectBillCreator: false
         }
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

function FetchUserBillsReducer(state={bills: [], loading: false, billsCount: 0}, action) {
   switch(action.type) {
      case USER_BILLS_FETCH_REQUEST:
         return {...state, loading: true}
      case USER_BILLS_FETCH_SUCCESS:
         return {...state, loading: false, bills: action.payload, billsCount: action.payload.length}
         
      case USER_BILLS_FETCH_ERROR:
         return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

function FetchClientBillsReducer(state={bills: [], loading: false, billsCount: 0}, action) {
   switch(action.type) {
      case CLIENT_BILLS_FETCH_REQUEST:
         return {...state, loading: true}
      case CLIENT_BILLS_FETCH_SUCCESS:
         return {...state, loading: false, bills: action.payload, billsCount: action.payload.length}
         
      case CLIENT_BILLS_FETCH_ERROR:
         return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

export {SaveBillReducer, FetchBillsReducer, FetchUserBillsReducer, FetchClientBillsReducer}