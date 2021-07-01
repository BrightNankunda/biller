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
   CLIENT_BILLS_FETCH_ERROR,
   FETCH_A_BILL_REQUEST,
   FETCH_A_BILL_SUCCESS,
   FETCH_A_BILL_FAILURE,
   BILL_UPDATE_REQUEST,
   BILL_UPDATE_SUCCESS,
   BILL_UPDATE_FINISHED,
   BILL_UPDATE_ERROR,
   DELETE_A_BILL_REQUEST,
   DELETE_A_BILL_SUCCESS,
   DELETE_A_BILL_FINISHED,
   DELETE_A_BILL_FAILURE
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

function FetchABillReducer(state={bill: null, loading: false}, action) {
   switch(action.type) {
      case FETCH_A_BILL_REQUEST:
         return {...state, loading: true}
      case FETCH_A_BILL_SUCCESS:
         return {...state, loading: false, bill: action.payload} 
      case FETCH_A_BILL_FAILURE:
         return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

function DeleteABillReducer(state={redirectBillDeletor: false, loading: false, }, action) {
   switch(action.type) {
      case DELETE_A_BILL_REQUEST:
         return {...state, loading: true}
      case DELETE_A_BILL_SUCCESS:
         return {...state, loading: false, redirectBillDeletor: true}
      case DELETE_A_BILL_FINISHED:
         return {...state, loading: false, redirectBillDeletor: false}  
      case DELETE_A_BILL_FAILURE:
         return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

function UpdateABillReducer(state={redirectBillUpdator: false, loading: false, }, action) {
   switch(action.type) {
      case BILL_UPDATE_REQUEST:
         return {...state, loading: true}
      case BILL_UPDATE_SUCCESS:
         return {...state, loading: false, redirectBillUpdator: true}
      case BILL_UPDATE_FINISHED:
         return {...state, loading: false, redirectBillUpdator: false}  
      case BILL_UPDATE_ERROR:
         return {...state, loading: true, error: action.payload}
      default:
         return state
   }
}

export {
   SaveBillReducer, 
   FetchBillsReducer, 
   FetchUserBillsReducer, 
   FetchABillReducer,
   FetchClientBillsReducer,
   UpdateABillReducer,
   DeleteABillReducer
}